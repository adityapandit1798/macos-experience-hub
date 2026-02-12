import { useState, useCallback } from "react";
import TopBar from "@/components/TopBar";
import Dock from "@/components/Dock";
import { dockApps } from "@/components/Dock";
import MacWindow from "@/components/MacWindow";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import BlogSection from "@/components/sections/BlogSection";
import TerminalSection from "@/components/sections/TerminalSection";
import wallpaper from "@/assets/wallpaper.jpg";

const sectionComponents: Record<string, React.ComponentType> = {
  about: AboutSection,
  skills: SkillsSection,
  experience: ExperienceSection,
  projects: ProjectsSection,
  contact: ContactSection,
  certifications: CertificationsSection,
  blog: BlogSection,
  terminal: TerminalSection,
};

const Index = () => {
  const [openWindows, setOpenWindows] = useState<Set<string>>(new Set());
  const [windowOrder, setWindowOrder] = useState<string[]>([]);

  const toggleWindow = useCallback((id: string) => {
    setOpenWindows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setWindowOrder((o) => o.filter((w) => w !== id));
      } else {
        next.add(id);
        setWindowOrder((o) => [...o.filter((w) => w !== id), id]);
      }
      return next;
    });
  }, []);

  const focusWindow = useCallback((id: string) => {
    setWindowOrder((o) => [...o.filter((w) => w !== id), id]);
  }, []);

  const closeWindow = useCallback((id: string) => {
    setOpenWindows((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    setWindowOrder((o) => o.filter((w) => w !== id));
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden select-none">
      <img src={wallpaper} alt="Desktop wallpaper" className="absolute inset-0 w-full h-full object-cover" />
      <TopBar />

      {/* Windows */}
      {dockApps.map((app) => {
        const SectionComponent = sectionComponents[app.id];
        if (!SectionComponent) return null;
        return (
          <MacWindow
            key={app.id}
            id={app.id}
            title={app.windowTitle}
            isOpen={openWindows.has(app.id)}
            onClose={() => closeWindow(app.id)}
            onFocus={() => focusWindow(app.id)}
            zIndex={10 + windowOrder.indexOf(app.id)}
            defaultPosition={app.defaultPosition}
            defaultSize={app.defaultSize}
          >
            <SectionComponent />
          </MacWindow>
        );
      })}

      <Dock openWindows={openWindows} onToggleWindow={toggleWindow} />
    </div>
  );
};

export default Index;
