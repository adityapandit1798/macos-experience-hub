import { Server, Globe, Terminal, Shield, Code2, MapPin, Mail, Phone, Award, Target, Zap, Users, Briefcase } from "lucide-react";
import memoji from "@/assets/memoji.png";

const AboutSection = () => (
  <div className="p-8 text-white/90">
    <div className="flex items-center gap-6 mb-8">
      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-500 to-red-400 flex items-center justify-center overflow-hidden shadow-2xl">
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
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">Aditya Pandit</h1>
        <p className="text-white/60 text-lg mb-2">AWS Certified DevOps Engineer</p>
        <div className="flex items-center gap-4 text-white/40 text-sm">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Pune, India</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>pandit.aditya1798@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>+91 7*********</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Briefcase className="w-5 h-5 text-orange-400" />
        Professional Summary
      </h2>
      <p className="text-[15px] leading-relaxed text-white/75 mb-4">
        AWS Certified DevOps Engineer with 4+ years of experience designing and automating highly available cloud infrastructure 
        on AWS. Expertise in Kubernetes (EKS), Terraform infrastructure-as-code, GitOps workflows with ArgoCD, and 
        security implementation using HashiCorp Vault. Proven success in optimizing cloud costs by 40%+ and enabling 
        scalable microservices architectures.
      </p>
      <p className="text-[15px] leading-relaxed text-white/75">
        Passionate about building robust, secure, and cost-effective cloud solutions. Skilled in implementing 
        zero-trust security models, automating CI/CD pipelines, and managing large-scale containerized applications. 
        Strong focus on infrastructure optimization, monitoring, and compliance best practices.
      </p>
    </div>

    <div className="grid grid-cols-4 gap-4 mb-8">
      {[
        { icon: Server, label: "Experience", value: "4+ Years", color: "text-orange-400" },
        { icon: Target, label: "Cost Savings", value: "40%+ Reduction", color: "text-green-400" },
        { icon: Zap, label: "Deployment Speed", value: "80% Faster", color: "text-yellow-400" },
        { icon: Shield, label: "Security", value: "Zero-Trust", color: "text-red-400" },
      ].map((stat) => (
        <div key={stat.label} className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
          <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
          <p className="text-xs text-white/50">{stat.label}</p>
          <p className="text-sm font-semibold">{stat.value}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-4">
      {[
        { icon: Code2, label: "Infrastructure as Code", value: "Terraform Expert" },
        { icon: Globe, label: "Container Platforms", value: "EKS Specialist" },
        { icon: Users, label: "Team Leadership", value: "Agile Practitioner" },
      ].map((stat) => (
        <div key={stat.label} className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
          <stat.icon className="w-6 h-6 mx-auto mb-2 text-orange-400" />
          <p className="text-xs text-white/50">{stat.label}</p>
          <p className="text-sm font-semibold">{stat.value}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AboutSection;
