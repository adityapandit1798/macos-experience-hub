import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Cloud Engineer",
    company: "TechCorp Inc.",
    period: "2022 – Present",
    description: "Leading cloud infrastructure initiatives across AWS and Azure. Architected multi-region deployments serving 10M+ users. Reduced infrastructure costs by 40% through optimization.",
    tech: ["AWS", "Terraform", "Kubernetes", "Python"],
  },
  {
    role: "Cloud Engineer",
    company: "CloudScale Solutions",
    period: "2020 – 2022",
    description: "Designed and implemented CI/CD pipelines, managed container orchestration with Kubernetes, and built monitoring solutions with Prometheus and Grafana.",
    tech: ["GCP", "Docker", "Jenkins", "Go"],
  },
  {
    role: "DevOps Engineer",
    company: "StartupXYZ",
    period: "2018 – 2020",
    description: "Built the entire DevOps pipeline from scratch. Implemented infrastructure as code using Terraform, automated deployments, and established monitoring practices.",
    tech: ["AWS", "Ansible", "GitHub Actions", "Bash"],
  },
  {
    role: "Systems Administrator",
    company: "DataHost Corp",
    period: "2016 – 2018",
    description: "Managed on-premise servers and initiated the cloud migration journey. Handled Linux administration, networking, and security hardening.",
    tech: ["Linux", "Networking", "VMware", "Bash"],
  },
];

const ExperienceSection = () => (
  <div className="p-6 text-white/90">
    <h2 className="text-xl font-bold mb-5">Experience</h2>
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/10" />
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.role + exp.company} className="flex gap-4">
            <div className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
              <Briefcase className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex-1 bg-white/5 rounded-xl p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-[15px]">{exp.role}</h3>
                <span className="text-xs text-white/40 whitespace-nowrap ml-2">{exp.period}</span>
              </div>
              <p className="text-sm text-blue-400 mb-2">{exp.company}</p>
              <p className="text-sm text-white/60 leading-relaxed mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ExperienceSection;
