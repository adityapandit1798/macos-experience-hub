import { Briefcase, Award, TrendingUp, Users, Target, Zap, Shield, Cpu, Cloud, GitBranch } from "lucide-react";

const experiences = [
  {
    role: "Senior Cloud/DevOps Engineer",
    company: "Innspark Solutions",
    period: "August 2024 – Present",
    location: "Pune, India",
    description: "Leading cloud infrastructure transformation initiatives for enterprise clients. Designed and implemented highly available Kubernetes clusters with 99.9% uptime. Architected zero-trust security model using HashiCorp Vault and AWS IAM best practices.",
    achievements: [
      "Reduced cloud costs by 40% through Spot Instance optimization with Karpenter",
      "Achieved 80% faster deployment times with GitOps pipelines",
      "Implemented automated disaster recovery with 15-minute RTO",
      "Led team of 5 engineers in infrastructure modernization"
    ],
    tech: ["AWS", "EKS", "Karpenter", "HashiCorp Vault", "ArgoCD", "Prometheus", "Grafana", "Terraform"],
  },
  {
    role: "DevOps Engineer",
    company: "JAWK Softwares",
    period: "March 2022 – July 2024",
    location: "Mumbai, India",
    description: "Spearheaded DevOps transformation for SaaS product company. Built reusable infrastructure components and automated CI/CD pipelines. Led migration from monolithic architecture to microservices.",
    achievements: [
      "Reduced deployment time by 80% with automated pipelines",
      "Optimized container images by 60% using multi-stage builds",
      "Implemented infrastructure-as-code reducing manual errors by 95%",
      "Achieved 99.95% application availability"
    ],
    tech: ["Terraform", "Docker", "Kubernetes", "AWS", "VPC", "PrivateLink", "Jenkins", "GitHub Actions"],
  },
];

const ExperienceSection = () => (
  <div className="p-6 text-white/90">
    <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
      <Briefcase className="w-5 h-5 text-orange-400" />
      Professional Experience
    </h2>
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/10" />
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={exp.role + exp.company} className="flex gap-4">
            <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-400 flex items-center justify-center shrink-0 mt-0.5 shadow-lg">
              {index === 0 ? <Award className="w-4 h-4 text-white" /> : <Briefcase className="w-4 h-4 text-white" />}
            </div>
            <div className="flex-1 bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-[16px]">{exp.role}</h3>
                  <p className="text-sm text-blue-400 flex items-center gap-1">
                    <Cloud className="w-3 h-3" />
                    {exp.company}
                  </p>
                  <p className="text-xs text-white/40 flex items-center gap-1 mt-1">
                    <Target className="w-3 h-3" />
                    {exp.location}
                  </p>
                </div>
                <span className="text-xs text-white/40 whitespace-nowrap ml-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {exp.period}
                </span>
              </div>
              
              <p className="text-sm text-white/70 leading-relaxed mb-4">{exp.description}</p>
              
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-xs text-white/60 flex items-start gap-2">
                      <Zap className="w-3 h-3 text-green-400 mt-0.5 shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Cpu className="w-3 h-3" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ExperienceSection;
