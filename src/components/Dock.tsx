import {
  User,
  Mail,
  Briefcase,
  FolderOpen,
  Code2,
  Award,
  FileText,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface DockApp {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  windowTitle: string;
  defaultPosition: { x: number; y: number };
  defaultSize: { width: number; height: number };
}

export const dockApps: DockApp[] = [
  {
    id: "about",
    name: "About Me",
    icon: User,
    color: "linear-gradient(135deg, #007aff, #5ac8fa)",
    windowTitle: "About Me",
    defaultPosition: { x: 120, y: 60 },
    defaultSize: { width: 680, height: 450 },
  },
  {
    id: "skills",
    name: "Skills",
    icon: Code2,
    color: "linear-gradient(135deg, #30d158, #00c853)",
    windowTitle: "Skills",
    defaultPosition: { x: 160, y: 80 },
    defaultSize: { width: 720, height: 520 },
  },
  {
    id: "experience",
    name: "Experience",
    icon: Briefcase,
    color: "linear-gradient(135deg, #ff9500, #ff6f00)",
    windowTitle: "Experience",
    defaultPosition: { x: 200, y: 50 },
    defaultSize: { width: 700, height: 500 },
  },
  {
    id: "projects",
    name: "Projects",
    icon: FolderOpen,
    color: "linear-gradient(135deg, #5856d6, #af52de)",
    windowTitle: "Projects",
    defaultPosition: { x: 140, y: 70 },
    defaultSize: { width: 760, height: 500 },
  },
  {
    id: "certifications",
    name: "Certifications",
    icon: Award,
    color: "linear-gradient(135deg, #ff2d55, #ff375f)",
    windowTitle: "Certifications & Education",
    defaultPosition: { x: 180, y: 90 },
    defaultSize: { width: 700, height: 480 },
  },
  {
    id: "blog",
    name: "Blog",
    icon: FileText,
    color: "linear-gradient(135deg, #ffcc00, #f9a825)",
    windowTitle: "Blog & Articles",
    defaultPosition: { x: 220, y: 65 },
    defaultSize: { width: 650, height: 460 },
  },
  {
    id: "contact",
    name: "Contact",
    icon: Mail,
    color: "linear-gradient(135deg, #5ac8fa, #007aff)",
    windowTitle: "Contact Me",
    defaultPosition: { x: 250, y: 100 },
    defaultSize: { width: 700, height: 440 },
  },
  {
    id: "terminal",
    name: "Terminal",
    icon: Terminal,
    color: "linear-gradient(135deg, #1c1c1e, #3a3a3c)",
    windowTitle: "Terminal",
    defaultPosition: { x: 180, y: 110 },
    defaultSize: { width: 640, height: 400 },
  },
];

interface DockProps {
  openWindows: Set<string>;
  onToggleWindow: (id: string) => void;
}

const Dock = ({ openWindows, onToggleWindow }: DockProps) => {
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50">
      <div className="dock-glass rounded-2xl px-2.5 py-1.5 flex items-end gap-1">
        {dockApps.map((app) => (
          <div key={app.id} className="flex flex-col items-center group">
            {/* Tooltip */}
            <span className="text-[11px] font-medium text-white bg-black/70 backdrop-blur-md rounded-md px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity mb-1 whitespace-nowrap pointer-events-none">
              {app.name}
            </span>
            <div
              className="dock-icon w-12 h-12 flex items-center justify-center"
              style={{ background: app.color }}
              onClick={() => onToggleWindow(app.id)}
            >
              <app.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            {/* Active indicator dot */}
            <div
              className={`w-1 h-1 rounded-full bg-white/70 mt-0.5 transition-opacity ${
                openWindows.has(app.id) ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dock;
