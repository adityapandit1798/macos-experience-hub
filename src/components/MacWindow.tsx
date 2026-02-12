import { useState, useRef, useCallback, useEffect } from "react";
import { X, Minus, Maximize2 } from "lucide-react";

interface MacWindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
  children: React.ReactNode;
}

const MacWindow = ({
  id,
  title,
  isOpen,
  onClose,
  onFocus,
  zIndex,
  defaultPosition = { x: 100, y: 60 },
  defaultSize = { width: 700, height: 480 },
  children,
}: MacWindowProps) => {
  const [position, setPosition] = useState(defaultPosition);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [closing, setClosing] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; posX: number; posY: number } | null>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (isMaximized) return;
      onFocus();
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        posX: position.x,
        posY: position.y,
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!dragRef.current) return;
        const dx = e.clientX - dragRef.current.startX;
        const dy = e.clientY - dragRef.current.startY;
        setPosition({
          x: dragRef.current.posX + dx,
          y: dragRef.current.posY + dy,
        });
      };

      const handleMouseUp = () => {
        dragRef.current = null;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [position, isMaximized, onFocus]
  );

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 200);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    setTimeout(onClose, 200);
  };

  useEffect(() => {
    if (isOpen) {
      setClosing(false);
      setIsMinimized(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      className={`absolute transition-all duration-200 ${
        closing || isMinimized ? "scale-90 opacity-0" : "scale-100 opacity-100"
      }`}
      style={{
        zIndex,
        ...(isMaximized
          ? { top: 28, left: 0, right: 0, bottom: 60, width: "100%", height: "calc(100vh - 88px)" }
          : { top: position.y, left: position.x, width: defaultSize.width, height: defaultSize.height }),
      }}
      onMouseDown={onFocus}
    >
      <div className="mac-window w-full h-full rounded-xl overflow-hidden flex flex-col shadow-2xl">
        {/* Title Bar */}
        <div
          className="mac-titlebar flex items-center h-12 px-4 cursor-grab active:cursor-grabbing shrink-0"
          onMouseDown={handleMouseDown}
        >
          {/* Traffic Lights */}
          <div className="flex items-center gap-2 mr-4">
            <button
              onClick={handleClose}
              className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-90 transition-all flex items-center justify-center group"
            >
              <X className="w-2 h-2 text-[#4a0002] opacity-0 group-hover:opacity-100" strokeWidth={3} />
            </button>
            <button
              onClick={handleMinimize}
              className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-90 transition-all flex items-center justify-center group"
            >
              <Minus className="w-2 h-2 text-[#5a3e00] opacity-0 group-hover:opacity-100" strokeWidth={3} />
            </button>
            <button
              onClick={handleMaximize}
              className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-90 transition-all flex items-center justify-center group"
            >
              <Maximize2 className="w-1.5 h-1.5 text-[#0a4a00] opacity-0 group-hover:opacity-100" strokeWidth={3} />
            </button>
          </div>
          <span className="text-[13px] font-medium text-white/90 flex-1 text-center select-none">
            {title}
          </span>
          <div className="w-14" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto mac-window-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MacWindow;
