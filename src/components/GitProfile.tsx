'use client';
import type { GithubProject, Profile } from '@/types';
import type { Config, SanitizedConfig } from '@/types/config';
import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { formatDistance } from 'date-fns';
import { CustomError, GENERIC_ERROR, INVALID_CONFIG_ERROR, INVALID_GITHUB_USERNAME_ERROR, setTooManyRequestError } from '@/config/errors';
import { getInitialTheme, getSanitizedConfig, setupHotjar } from '@/config';
import { BG_COLOR, DEFAULT_THEMES } from '@/config';

import ThemeChanger from '@/config/theme-changer';
import SkillCard from '@/components/cards/SkillCard';
import AvatarCard from '@/components/cards/AvatarCard';
import DetailsCard from '@/components/cards/DetailsCard';
import ExperienceCard from '@/components/cards/ExperienceCard';
import CertificationCard from '@/components/cards/CertificationCard';
import PublicationCard from '@/components/cards/PublicationCard';
import ErrorPage from '@/components/ErrorPage';

import GithubProjectCard from '@/components/cards/GithubProjectCard';
import ExternalProjectCard from '@/components/cards/ExternalProjectCard';
import GenCard from '@/components/cards/GenCard';
import BlogSection from './sections/BlogSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import AppFooter from './sections/AppFooter';

/**
 * Renders the GitProfile component.
 *
 * @param {Object} config - the configuration object
 * @return {JSX.Element} the rendered GitProfile component
 */

const GitProfile = ({ config }: { config: Config }) => {
  const [sanitizedConfig] = useState<SanitizedConfig | Record<string, never>>(getSanitizedConfig(config));
  const [theme, setTheme] = useState<string>(DEFAULT_THEMES[19]);
  const [error, setError] = useState<CustomError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [githubProjects, setGithubProjects] = useState<GithubProject[]>([]);

  const getGithubProjects = useCallback(
    async (publicRepoCount: number): Promise<GithubProject[]> => {
      if (sanitizedConfig.projects.github.mode === 'automatic') {
        if (publicRepoCount === 0) {
          return [];
        }

        const excludeRepo = sanitizedConfig.projects.github.automatic.exclude.projects.map((project) => `+-repo:${project}`).join('');

        const query = `user:${sanitizedConfig.github.username}+fork:${!sanitizedConfig.projects.github.automatic.exclude.forks}${excludeRepo}`;
        const url = `https://api.github.com/search/repositories?q=${query}&sort=${sanitizedConfig.projects.github.automatic.sortBy}&per_page=${sanitizedConfig.projects.github.automatic.limit}&type=Repositories`;

        const repoResponse = await axios.get(url, {
          headers: { 'Content-Type': 'application/vnd.github.v3+json' },
        });
        const repoData = repoResponse.data;

        return repoData.items;
      } else {
        if (sanitizedConfig.projects.github.manual.projects.length === 0) {
          return [];
        }
        const repos = sanitizedConfig.projects.github.manual.projects.map((project) => `+repo:${project}`).join('');

        const url = `https://api.github.com/search/repositories?q=${repos}+fork:true&type=Repositories`;

        const repoResponse = await axios.get(url, {
          headers: { 'Content-Type': 'application/vnd.github.v3+json' },
        });
        const repoData = repoResponse.data;

        return repoData.items;
      }
    },
    [
      sanitizedConfig.github.username,
      sanitizedConfig.projects.github.mode,
      sanitizedConfig.projects.github.manual.projects,
      sanitizedConfig.projects.github.automatic.sortBy,
      sanitizedConfig.projects.github.automatic.limit,
      sanitizedConfig.projects.github.automatic.exclude.forks,
      sanitizedConfig.projects.github.automatic.exclude.projects,
    ],
  );

  const loadData = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(`https://api.github.com/users/${sanitizedConfig.github.username}`);
      const data = response.data;

      setProfile({
        avatar: data.avatar_url,
        name: data.name || ' ',
        bio: data.bio || '',
        location: data.location || 'Israel',
        company: data.company || '',
      });

      if (!sanitizedConfig.projects.github.display) {
        return;
      }

      setGithubProjects(await getGithubProjects(data.public_repos));
    } catch (error) {
      handleError(error as AxiosError | Error);
    } finally {
      setLoading(false);
    }
  }, [sanitizedConfig.github.username, sanitizedConfig.projects.github.display, getGithubProjects]);

  useEffect(() => {
    if (Object.keys(sanitizedConfig).length === 0) {
      setError(INVALID_CONFIG_ERROR);
    } else {
      setError(null);
      setTheme(getInitialTheme(sanitizedConfig.themeConfig));
      setupHotjar(sanitizedConfig.hotjar);
      loadData();
    }
  }, [sanitizedConfig, loadData]);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const handleError = (error: AxiosError | Error): void => {
    if (error instanceof AxiosError) {
      try {
        const reset = formatDistance(new Date(error.response?.headers?.['x-ratelimit-reset'] * 1000), new Date(), { addSuffix: true });

        if (typeof error.response?.status === 'number') {
          switch (error.response.status) {
            case 403:
              setError(setTooManyRequestError(reset));
              break;
            case 404:
              setError(INVALID_GITHUB_USERNAME_ERROR);
              break;
            default:
              setError(GENERIC_ERROR);
              break;
          }
        } else {
          setError(GENERIC_ERROR);
        }
      } catch (innerError: unknown) {
        if (innerError) {
          setError(GENERIC_ERROR);
        }
      }
    } else {
      setError(GENERIC_ERROR);
    }
  };

  return (
    <div className="fade-in h-screen">
      {error ? (
        <ErrorPage status={error.status} title={error.title} subTitle={error.subTitle} />
      ) : (
        <>
          <div className={`p-4 lg:p-10 min-h-full ${BG_COLOR}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
              <div className="col-span-1">
                <div className="grid grid-cols-1 gap-6">
                  {!sanitizedConfig.themeConfig.disableSwitch && (
                    <ThemeChanger theme={theme} setTheme={setTheme} loading={loading} themeConfig={sanitizedConfig.themeConfig} />
                  )}
                  <AvatarCard
                    profile={profile}
                    loading={loading}
                    avatarRing={sanitizedConfig.themeConfig.displayAvatarRing}
                    resumeFileUrl={sanitizedConfig.resume.fileUrl}
                  />
                  <DetailsCard profile={profile} loading={loading} github={sanitizedConfig.github} social={sanitizedConfig.social} />
                  {sanitizedConfig.skills.length !== 0 && <SkillCard loading={loading} skills={sanitizedConfig.skills} />}
                  {sanitizedConfig.experiences.length !== 0 && (
                    <ExperienceCard
                      loading={loading}
                      experiences={sanitizedConfig.experiences
                        .filter(
                          (exp) =>
                            typeof exp.company === 'string' &&
                            typeof exp.position === 'string' &&
                            typeof exp.from === 'string' &&
                            typeof exp.to === 'string',
                        )
                        .map((exp) => ({
                          ...exp,
                          company: exp.company ?? '',
                          position: exp.position ?? '',
                          from: exp.from ?? '',
                          to: exp.to ?? '',
                        }))}
                    />
                  )}
                  {sanitizedConfig.certifications.length !== 0 && (
                    <CertificationCard
                      loading={loading}
                      certifications={sanitizedConfig.certifications.map((cert) => ({
                        ...cert,
                        year: cert.year !== undefined ? String(cert.year) : undefined,
                      }))}
                    />
                  )}
                  <GenCard loading={loading} className="max-lg:block lg:hidden">
                    {/* My Projects  */}
                    {sanitizedConfig.projects.external.projects.length !== 0 && (
                      <ExternalProjectCard
                        loading={loading}
                        header={sanitizedConfig.projects.external.header}
                        externalProjects={sanitizedConfig.projects.external.projects}
                        googleAnalyticId={sanitizedConfig.googleAnalytics.id}
                      />
                    )}
                  </GenCard>
                  <GenCard loading={loading} title={'Blogs'}>
                    <BlogSection />{' '}
                  </GenCard>

                  <GenCard loading={loading} title={'About'}>
                    <AboutSection />
                  </GenCard>

                  <GenCard loading={loading} title={'Contact'}>
                    {' '}
                    <ContactSection />
                  </GenCard>
                </div>
              </div>
              <div className="lg:col-span-2 col-span-1">
                <div className="grid grid-cols-1 gap-6">
                  <div className="max-lg:hidden">
                    {sanitizedConfig.projects.external.projects.length !== 0 && (
                      <ExternalProjectCard
                        loading={loading}
                        header={sanitizedConfig.projects.external.header}
                        externalProjects={sanitizedConfig.projects.external.projects}
                        googleAnalyticId={sanitizedConfig.googleAnalytics.id}
                      />
                    )}
                  </div>

                  {sanitizedConfig.publications.length !== 0 && (
                    <PublicationCard
                      loading={loading}
                      publications={sanitizedConfig.publications.map((pub) => ({
                        ...pub,
                        title: pub.title ?? '',
                      }))}
                    />
                  )}
                  {sanitizedConfig.projects.github.display && (
                    <GithubProjectCard
                      header={sanitizedConfig.projects.github.header}
                      limit={sanitizedConfig.projects.github.automatic.limit}
                      githubProjects={githubProjects}
                      loading={loading}
                      googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          {sanitizedConfig.footer && <AppFooter loading={loading} />}
        </>
      )}
    </div>
  );
};

export default GitProfile;
