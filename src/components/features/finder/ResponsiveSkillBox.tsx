'use client'
import { useIsMobile } from '@/hooks/useIsMobile'
import { DesktopSkillsFinder } from './DesktopSkillsFinder'
import { MobileSkillsFinder } from './MobileSkillsFinder'

export function ResponsiveSkills() {
  const isMobile = useIsMobile()
  return isMobile ? <MobileSkillsFinder /> : <DesktopSkillsFinder />
}
