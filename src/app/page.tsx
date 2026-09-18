import { HeroSection } from '@/components/sections/HeroSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}