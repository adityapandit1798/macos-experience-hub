import { useState, useEffect } from "react";
import {
  Apple,
  Wifi,
  Battery,
  Search,
  Volume2,
} from "lucide-react";

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const menuItems = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];

  return (
    <div className="topbar-glass fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-7 px-4 text-[13px] font-medium select-none"
      style={{ color: "hsl(var(--topbar-text))" }}
    >
      <div className="flex items-center gap-4">
        <Apple className="w-[14px] h-[14px] fill-current" />
        {menuItems.map((item, i) => (
          <span
            key={item}
            className={`cursor-default hover:opacity-70 transition-opacity ${i === 0 ? "font-semibold" : ""}`}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Battery className="w-[18px] h-[18px] opacity-90" />
        <Wifi className="w-[15px] h-[15px] opacity-90" />
        <Volume2 className="w-[15px] h-[15px] opacity-90" />
        <Search className="w-[14px] h-[14px] opacity-90" />
        <span className="opacity-90">
          {formattedDate} {formattedTime}
        </span>
      </div>
    </div>
  );
};

export default TopBar;
