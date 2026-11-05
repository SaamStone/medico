import './landing.css';
import type { Metadata } from 'next';
import {
  DashboardSection,
  FamilySection,
  FeaturesSection,
  FaqSection,
  FooterSection,
  HeaderSection,
  HeroSection,
  IntroSection,
  JourneySection,
  PricingSection,
  ProfilesSection,
  StoriesSection,
  ToolsSection,
  ClosingSection,
} from '../components/landing/sections';

export const metadata: Metadata = {
  title: 'Medico | Your Health, Organised in One Calm Place',
  description: 'Keep medical records, lab results, blood profiles and family health details together in one calm, trustworthy space.',
};

export default function Home() {
  return (
    <main className="landing">
      <HeaderSection />
      <HeroSection />
      <IntroSection />
      <JourneySection />
      <FeaturesSection />
      <DashboardSection />
      <ProfilesSection />
      <FamilySection />
      <ToolsSection />
      <StoriesSection />
      <PricingSection />
      <FaqSection />
      <ClosingSection />
      <FooterSection />
    </main>
  );
}
