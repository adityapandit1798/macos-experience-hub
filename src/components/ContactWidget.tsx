import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";
import memoji from "@/assets/memoji.png";

const ContactWidget = () => {
  return (
    <div className="fixed top-24 left-8 z-20 w-80">
      <div className="rounded-2xl overflow-hidden shadow-2xl backdrop-blur-2xl bg-white/10 border border-white/20">
        {/* Widget Content */}
        <div className="p-6 text-white/90">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center mb-4 shadow-lg">
              <img 
                src={memoji} 
                alt="Aditya Pandit Memoji" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.style.background = 'linear-gradient(135deg, #ff6b35, #f7931e)';
                  target.parentElement!.innerHTML = '<span class="text-white text-2xl font-bold">AP</span>';
                }}
              />
            </div>
            <h2 className="text-xl font-bold mb-1">Hi, I'm Aditya Pandit</h2>
            <p className="text-sm text-white/60 text-center mb-3">
              AWS Certified DevOps Engineer
            </p>
            <p className="text-xs text-white/50 text-center leading-relaxed px-2">
              Passionate about cloud infrastructure, Kubernetes, and automation. 
              Building scalable solutions on AWS with expertise in DevOps practices.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 border-t border-white/10 pt-4">
            {[
              { icon: Mail, label: "Email", value: "pandit.aditya1798@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 7*********" },
              { icon: MapPin, label: "Location", value: "Pune, India" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aditya-pandit98" },
              { icon: Github, label: "GitHub", value: "github.com/adityapandit1798" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                <item.icon className="w-4 h-4 text-orange-400 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-white/40">{item.label}</p>
                  <p className="text-xs text-white/80 truncate">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWidget;
