import { Cloud, Server, Globe, Terminal, Shield, Code2 } from "lucide-react";

const AboutSection = () => (
  <div className="p-8 text-white/90">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
        <Cloud className="w-10 h-10 text-white" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">John Doe</h1>
        <p className="text-white/60 text-sm">Senior Cloud Engineer</p>
      </div>
    </div>
    <p className="text-[15px] leading-relaxed text-white/75 mb-6">
      Passionate cloud engineer with 5+ years of experience designing, deploying, and managing scalable cloud infrastructure. 
      Specialized in AWS, Azure, and GCP with expertise in containerization, CI/CD pipelines, and infrastructure as code.
    </p>
    <div className="grid grid-cols-3 gap-4">
      {[
        { icon: Server, label: "Infrastructure", value: "50+ deployments" },
        { icon: Globe, label: "Uptime", value: "99.99% SLA" },
        { icon: Terminal, label: "Automation", value: "200+ pipelines" },
        { icon: Shield, label: "Security", value: "SOC2 Compliant" },
        { icon: Code2, label: "IaC", value: "Terraform/Pulumi" },
        { icon: Cloud, label: "Multi-Cloud", value: "AWS/Azure/GCP" },
      ].map((stat) => (
        <div key={stat.label} className="bg-white/5 rounded-xl p-3 text-center">
          <stat.icon className="w-5 h-5 mx-auto mb-1 text-blue-400" />
          <p className="text-xs text-white/50">{stat.label}</p>
          <p className="text-sm font-semibold">{stat.value}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AboutSection;
