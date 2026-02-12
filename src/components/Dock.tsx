import { useState, useRef, useEffect } from "react";

export interface DockApp {
  id: string;
  name: string;
  icon: string; // Changed to string for image path
  color?: string; // Optional now since we use images
  windowTitle: string;
  defaultPosition: { x: number; y: number };
  defaultSize: { width: number; height: number };
}

export const dockApps: DockApp[] = [
  {
    id: "about",
    name: "About Me",
    icon: `${import.meta.env.BASE_URL || '/'}icons/contacts_1024x1024x32.png`, // macOS Contacts icon
    windowTitle: "About Me",
    defaultPosition: { x: 120, y: 60 },
    defaultSize: { width: 680, height: 450 },
  },
  {
    id: "skills",
    name: "Skills",
    icon: `${import.meta.env.BASE_URL || '/'}icons/terminal_1024x1024x32.png`, // macOS Terminal icon
    windowTitle: "Skills",
    defaultPosition: { x: 160, y: 80 },
    defaultSize: { width: 720, height: 520 },
  },
  {
    id: "experience",
    name: "Experience",
    icon: `${import.meta.env.BASE_URL || '/'}icons/finder_1024x1024x32.png`, // macOS Finder icon
    windowTitle: "Experience",
    defaultPosition: { x: 200, y: 50 },
    defaultSize: { width: 700, height: 500 },
  },
  {
    id: "projects",
    name: "Projects",
    icon: `${import.meta.env.BASE_URL || '/'}icons/xcode_1024x1024x32.png`, // macOS Xcode icon for projects
    windowTitle: "Projects",
    defaultPosition: { x: 140, y: 70 },
    defaultSize: { width: 760, height: 500 },
  },
  {
    id: "certifications",
    name: "Certifications",
    icon: `${import.meta.env.BASE_URL || '/'}icons/books_1024x1024x32.png`, // macOS Books icon for education
    windowTitle: "Certifications & Education",
    defaultPosition: { x: 180, y: 90 },
    defaultSize: { width: 700, height: 480 },
  },
  {
    id: "blog",
    name: "Blog",
    icon: `${import.meta.env.BASE_URL || '/'}icons/safari_1024x1024x32.png`, // macOS Safari icon
    windowTitle: "Blog & Articles",
    defaultPosition: { x: 220, y: 65 },
    defaultSize: { width: 650, height: 460 },
  },
  {
    id: "contact",
    name: "Contact",
    icon: `${import.meta.env.BASE_URL || '/'}icons/mail_1024x1024x32.png`, // macOS Mail icon
    windowTitle: "Contact Me",
    defaultPosition: { x: 250, y: 100 },
    defaultSize: { width: 700, height: 440 },
  },
  {
    id: "terminal",
    name: "Terminal",
    icon: `${import.meta.env.BASE_URL || '/'}icons/terminal_1024x1024x32.png`, // Use same terminal icon
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
  const dockRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [iconStyles, setIconStyles] = useState<{ [key: string]: React.CSSProperties }>({});

  const calculateMagnification = (index: number, mouseX: number) => {
    if (!dockRef.current) return { scale: 1, translateY: 0, marginLeft: 0 };

    const iconElements = dockRef.current.querySelectorAll('.dock-icon');
    const iconElement = iconElements[index] as HTMLElement;
    
    if (!iconElement) return { scale: 1, translateY: 0, marginLeft: 0 };

    const iconRect = iconElement.getBoundingClientRect();
    const iconCenter = iconRect.left + iconRect.width / 2;
    const distance = Math.abs(mouseX - iconCenter);
    
    // Maximum magnification and influence distance
    const maxScale = 2.0;
    const influenceDistance = 120;
    
    // Calculate scale based on distance (fish-eye effect)
    let scale = 1;
    if (distance < influenceDistance) {
      scale = 1 + (maxScale - 1) * Math.pow(1 - distance / influenceDistance, 2);
    }
    
    // Calculate vertical translation for arc effect
    const translateY = -(scale - 1) * 20;
    
    // Calculate horizontal spacing to prevent overlap
    const marginLeft = (scale - 1) * 8;
    
    return { scale, translateY, marginLeft };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (hoveredIndex === null) return;

    const mouseX = e.clientX;
    const newStyles: { [key: string]: React.CSSProperties } = {};
    
    dockApps.forEach((_, index) => {
      const { scale, translateY, marginLeft } = calculateMagnification(index, mouseX);
      newStyles[`icon-${index}`] = {
        transform: `translateY(${translateY}px) scale(${scale})`,
        zIndex: Math.floor(scale * 10),
        marginLeft: `${marginLeft}px`,
      };
    });
    
    setIconStyles(newStyles);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIconStyles({});
    document.removeEventListener('mousemove', handleMouseMove);
  };

  useEffect(() => {
    const handleGlobalMouseLeave = (e: MouseEvent) => {
      if (!dockRef.current?.contains(e.target as Node)) {
        handleMouseLeave();
      }
    };

    document.addEventListener('mouseleave', handleGlobalMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleGlobalMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (hoveredIndex !== null) {
      document.addEventListener('mousemove', handleMouseMove);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [hoveredIndex]);

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[9999]">
      <div 
        ref={dockRef}
        className="dock-glass rounded-2xl px-2.5 py-1.5 flex items-end gap-1"
        onMouseLeave={handleMouseLeave}
      >
        {dockApps.map((app, index) => (
          <div key={app.id} className="flex flex-col items-center group relative">
            {/* Tooltip */}
            <span className="text-[11px] font-medium text-white bg-black/80 backdrop-blur-md rounded-md px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity mb-1 whitespace-nowrap pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 z-[10000]">
              {app.name}
            </span>
            <div
              className={`dock-icon w-12 h-12 flex items-center justify-center overflow-hidden rounded-xl cursor-pointer`}
              style={{
                ...iconStyles[`icon-${index}`],
                transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                margin: '0 2px',
              }}
              onClick={() => onToggleWindow(app.id)}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <img 
                src={app.icon} 
                alt={app.name}
                className="w-full h-full object-contain"
                style={{
                  transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              />
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
