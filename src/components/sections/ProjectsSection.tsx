import { ExternalLink, Github, Rocket, Shield, Zap, Award, Users, Target, Code, Globe } from "lucide-react";

const projects = [
  {
    title: "Zero-Trust DevSecOps Platform",
    description: "Enterprise-grade security platform implementing zero-trust architecture with dynamic secrets management. Automated certificate rotation and IAM policy enforcement across Kubernetes clusters.",
    achievements: [
      "Reduced security incidents by 85%",
      "Automated secrets rotation for 200+ services",
      "Achieved SOC 2 Type II compliance",
      "Integrated with 15+ enterprise applications"
    ],
    tech: ["AWS", "EKS", "Vault", "ArgoCD", "Helm", "Istio", "Prometheus"],
    gradient: "from-orange-600 to-red-500",
    period: "October 2023 – Present",
    status: "Production",
    team: "Led team of 3 engineers"
  },
  {
    title: "Cost-Optimized Autoscaling Infrastructure",
    description: "Intelligent autoscaling solution using machine learning algorithms to predict resource needs. Implemented spot instance bidding strategy with fallback mechanisms.",
    achievements: [
      "40% monthly cost reduction",
      "99.95% uptime during optimization",
      "Reduced carbon footprint by 35%",
      "Auto-scaling response time < 30 seconds"
    ],
    tech: ["AWS", "EKS", "Karpenter", "Terraform", "CloudWatch", "Lambda"],
    gradient: "from-green-600 to-emerald-500",
    period: "October 2023 – Present",
    status: "Production",
    team: "Solo project"
  },
  {
    title: "Global Multi-Region Identity Platform",
    description: "Distributed identity management system serving 500K+ users across 5 regions. Implemented real-time synchronization and disaster recovery capabilities.",
    achievements: [
      "30% reduction in licensing costs",
      "99.99% availability SLA achieved",
      "Reduced authentication latency by 60%",
      "Migrated 100K+ user accounts"
    ],
    tech: ["OpenLDAP", "HAProxy", "Linux", "Ansible", "Keepalived", "Redis"],
    gradient: "from-blue-600 to-indigo-600",
    period: "July 2023 – September 2023",
    status: "Completed",
    team: "Team of 2 engineers"
  },
];

const ProjectsSection = () => (
  <div className="p-6 text-white/90">
    <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
      <Rocket className="w-5 h-5 text-orange-400" />
      Featured Projects
    </h2>
    <div className="grid grid-cols-1 gap-4">
      {projects.map((project) => (
        <div key={project.title} className="bg-white/5 rounded-xl overflow-hidden group hover:bg-white/8 transition-all duration-300 hover:scale-[1.02]">
          <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
          <div className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-[16px]">{project.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    project.status === 'Production' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/40">
                  <span className="flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    {project.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {project.team}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Github className="w-4 h-4 text-white/40 hover:text-white/80 cursor-pointer hover:scale-110 transition-all" />
                <ExternalLink className="w-4 h-4 text-white/40 hover:text-white/80 cursor-pointer hover:scale-110 transition-all" />
              </div>
            </div>
            
            <p className="text-sm text-white/70 leading-relaxed mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Award className="w-3 h-3" />
                Key Achievements
              </h4>
              <ul className="space-y-1">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="text-xs text-white/60 flex items-start gap-2">
                    <Zap className="w-3 h-3 text-green-400 mt-0.5 shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Code className="w-3 h-3" />
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/20 hover:bg-white/15 transition-colors">
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
);

export default ProjectsSection;
