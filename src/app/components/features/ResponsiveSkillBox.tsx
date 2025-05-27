'use client'
import { useIsMobile } from '@/hooks/useIsMobile'
import { SkillsExplorer } from './SkillsExplorer'
import { MobileSkillsFinder } from './MobileSkillsFinder'

export function ResponsiveSkills() {
  const isMobile = useIsMobile()
  return isMobile ? <MobileSkillsFinder /> : <SkillsExplorer />
}
