import { Mail, MapPin, Github, Linkedin, Globe, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <div className="p-6 text-white/90">
      <h2 className="text-xl font-bold mb-5">Contact Me</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-3">
            {[
              { icon: Mail, label: "Email", value: "pandit.aditya1798@gmail.com" },
              { icon: MapPin, label: "Location", value: "Pune, India" },
              { icon: Github, label: "Phone", value: "+91 7*********" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aditya-pandit98" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 hover:bg-white/8 transition-colors cursor-pointer">
                <item.icon className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <p className="text-[11px] text-white/40">{item.label}</p>
                  <p className="text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
          />
          <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium text-sm py-2.5 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
