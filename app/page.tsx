import BackgroundMotion from "@/components/background/BackgroundMotion";
import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import SkillsSection from "@/components/ui/SkillsSection";
import ExperienceSection from "@/components/ui/ExperienceSection";
import Timeline from "@/components/ui/Timeline";
import ResumeSection from "@/components/ui/ResumeSection";
import ProjectsSection from "@/components/ui/ProjectsSection";
import CertificationsSection from "@/components/ui/CertificationsSection";
import AchievementsSection from "@/components/ui/AchievementsSection";
import SocialFootprintsSection from "@/components/ui/SocialFootprintsSection";

import ContactSection from "@/components/ui/ContactSection";
import ServerStatus from "@/components/mern/ServerStatus";
import ArchitectureDiagram from "@/components/mern/ArchitectureDiagram";
import LiveStats from "@/components/mern/LiveStats";
import TerminalLogs from "@/components/mern/TerminalLogs";
import ApiPlayground from "@/components/mern/ApiPlayground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundMotion />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <AchievementsSection />
      <Timeline />
      <SocialFootprintsSection />
      <ResumeSection />
      
      <LiveStats />
      <ArchitectureDiagram />
      <TerminalLogs />
      <ApiPlayground />
      <ContactSection />
      <ServerStatus />
    </main>
  );
}
