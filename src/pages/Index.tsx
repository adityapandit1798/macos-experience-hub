import TopBar from "@/components/TopBar";
import Dock from "@/components/Dock";
import wallpaper from "@/assets/wallpaper.jpg";

const Index = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden select-none">
      {/* Wallpaper */}
      <img
        src={wallpaper}
        alt="Desktop wallpaper"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Top Menu Bar */}
      <TopBar />

      {/* Dock */}
      <Dock />
    </div>
  );
};

export default Index;
