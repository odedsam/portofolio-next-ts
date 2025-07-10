export type Config = {
  github: {
    username: string;
  };
  projects?: {
    github?: {
      display?: boolean;
      header?: string;
      mode?: 'automatic' | 'manual';
      automatic?: {
        sortBy?: string;
        limit?: number;
        exclude?: {
          forks?: boolean;
          projects?: string[];
        };
      };
      manual?: {
        projects?: any[];
      };
    };
    external?: {
      header?: string;
      projects?: any[];
    };
  };
  seo?: {
    title?: string;
    description?: string;
    imageURL?: string;
  };
  social?: {
    linkedin?: string;
    x?: string;
    mastodon?: string;
    facebook?: string;
    instagram?: string;
    reddit?: string;
    threads?: string;
    youtube?: string;
    udemy?: string;
    dribbble?: string;
    behance?: string;
    medium?: string;
    dev?: string;
    stackoverflow?: string;
    website?: string;
    phone?: string;
    email?: string;
    telegram?: string;
    researchGate?: string;
    discord?: string;
  };
  resume?: {
    fileUrl?: string;
  };
  skills?: any[];
  experiences?: {
    company?: string;
    position?: string;
    from?: string;
    to?: string;
  }[];
  certifications?: {
    year?: string | number;
    name?: string;
    body?: string;
  }[];
  educations?: {
    institution?: string;
    degree?: string;
    from?: string;
    to?: string;
  }[];
  publications?: {
    title?: string;
  }[];
  googleAnalytics?: {
    id?: string;
  };
  hotjar?: {
    id?: string | number;
    snippetVersion?: number;
  };
  blog?: {
    username?: string;
    source?: string;
    limit?: number;
    display?: boolean;
  };
  themeConfig?: {
    defaultTheme?: string;
    disableSwitch?: boolean;
    respectPrefersColorScheme?: boolean;
    displayAvatarRing?: boolean;
    themes?: string[];
  };
  footer?: any;
  enablePWA?: boolean;
};

export type SanitizedHotjar = {
  id?: string | number;
  snippetVersion?: number;
};

export type SanitizedThemeConfig = {
  defaultTheme: string;
  disableSwitch: boolean;
  respectPrefersColorScheme: boolean;
  displayAvatarRing: boolean;
  themes: string[];
};

export type SanitizedConfig = {
  github: {
    username: string;
  };
  projects: {
    github: {
      display: boolean;
      header: string;
      mode: 'automatic' | 'manual';
      automatic: {
        sortBy: string;
        limit: number;
        exclude: {
          forks: boolean;
          projects: string[];
        };
      };
      manual: {
        projects: any[];
      };
    };
    external: {
      header: string;
      projects: any[];
    };
  };
  seo: {
    title?: string;
    description?: string;
    imageURL?: string;
  };
  social: {
    linkedin?: string;
    x?: string;
    mastodon?: string;
    facebook?: string;
    instagram?: string;
    reddit?: string;
    threads?: string;
    youtube?: string;
    udemy?: string;
    dribbble?: string;
    behance?: string;
    medium?: string;
    dev?: string;
    stackoverflow?: string;
    website?: string;
    phone?: string;
    email?: string;
    telegram?: string;
    researchGate?: string;
    discord?: string;
  };
  resume: {
    fileUrl: string;
  };
  skills: any[];
  experiences: {
    company?: string;
    position?: string;
    from?: string;
    to?: string;
  }[];
  certifications: {
    year?: string | number;
    name?: string;
    body?: string;
  }[];
  educations: {
    institution?: string;
    degree?: string;
    from?: string;
    to?: string;
  }[];
  publications: {
    title?: string;
  }[];
  googleAnalytics: {
    id?: string;
  };
  hotjar: SanitizedHotjar;
  blog: {
    username: string;
    source: string;
    limit: number;
    display: boolean;
  };
  themeConfig: SanitizedThemeConfig;
  footer?: any;
  enablePWA: boolean;
};
