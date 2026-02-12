import {
  Compass,
  Mail,
  Calendar,
  Map,
  MessageSquare,
  Music,
  Image,
  Settings,
  Calculator,
  Clock,
  FileText,
  Film,
  AppWindow,
  Store,
  Folder,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DockApp {
  name: string;
  icon: LucideIcon;
  color: string;
}

const apps: DockApp[] = [
  { name: "Finder", icon: Compass, color: "linear-gradient(135deg, #1a9fff, #0066cc)" },
  { name: "Launchpad", icon: AppWindow, color: "linear-gradient(135deg, #2c2c2e, #1c1c1e)" },
  { name: "Safari", icon: Compass, color: "linear-gradient(135deg, #5ac8fa, #007aff)" },
  { name: "Mail", icon: Mail, color: "linear-gradient(135deg, #5ac8fa, #007aff)" },
  { name: "Maps", icon: Map, color: "linear-gradient(135deg, #30d158, #28a745)" },
  { name: "Messages", icon: MessageSquare, color: "linear-gradient(135deg, #30d158, #00c853)" },
  { name: "Music", icon: Music, color: "linear-gradient(135deg, #ff2d55, #ff375f)" },
  { name: "Photos", icon: Image, color: "linear-gradient(135deg, #ff9500, #ff6f00)" },
  { name: "Calendar", icon: Calendar, color: "linear-gradient(135deg, #ff3b30, #d32f2f)" },
  { name: "Notes", icon: FileText, color: "linear-gradient(135deg, #ffcc00, #f9a825)" },
  { name: "Clock", icon: Clock, color: "linear-gradient(135deg, #1c1c1e, #3a3a3c)" },
  { name: "Calculator", icon: Calculator, color: "linear-gradient(135deg, #636366, #48484a)" },
  { name: "TV", icon: Film, color: "linear-gradient(135deg, #1c1c1e, #2c2c2e)" },
  { name: "App Store", icon: Store, color: "linear-gradient(135deg, #5ac8fa, #007aff)" },
  { name: "Settings", icon: Settings, color: "linear-gradient(135deg, #8e8e93, #636366)" },
  { name: "Downloads", icon: Folder, color: "linear-gradient(135deg, #5ac8fa, #007aff)" },
];

const Dock = () => {
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50">
      <div className="dock-glass rounded-2xl px-2 py-1.5 flex items-end gap-1">
        {apps.map((app, i) => (
          <div key={app.name} className="flex flex-col items-center group">
            {/* Tooltip */}
            <span className="text-[11px] font-medium text-foreground bg-accent/80 backdrop-blur-md rounded-md px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity mb-1 whitespace-nowrap pointer-events-none">
              {app.name}
            </span>
            <div
              className="dock-icon w-12 h-12 flex items-center justify-center"
              style={{ background: app.color }}
            >
              <app.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            {/* Separator line before Downloads */}
            {i === apps.length - 2 && (
              <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-px h-8 bg-white/20 hidden" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dock;
