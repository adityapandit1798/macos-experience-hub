import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Cloud Migration Platform",
    description: "End-to-end platform for automating cloud migrations from on-premise to AWS/Azure. Features automated assessment, planning, and execution workflows.",
    tech: ["Terraform", "Python", "AWS", "React"],
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    title: "K8s Auto-Scaler",
    description: "Custom Kubernetes autoscaler that uses ML-based predictions to preemptively scale pods based on traffic patterns, reducing cold-start latency by 60%.",
    tech: ["Go", "Kubernetes", "Prometheus", "TensorFlow"],
    gradient: "from-green-600 to-emerald-500",
  },
  {
    title: "Infrastructure Cost Analyzer",
    description: "Dashboard and CLI tool that analyzes multi-cloud spending, identifies idle resources, and recommends right-sizing. Saved $2M+ annually across clients.",
    tech: ["Python", "AWS SDK", "React", "PostgreSQL"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "GitOps Pipeline Framework",
    description: "Opinionated GitOps framework using ArgoCD and Helm, with built-in security scanning, compliance checks, and rollback capabilities.",
    tech: ["ArgoCD", "Helm", "OPA", "GitHub Actions"],
    gradient: "from-purple-600 to-pink-500",
  },
  {
    title: "Serverless Monitoring Suite",
    description: "Full observability stack for serverless applications, including distributed tracing, custom metrics, and automated alerting with PagerDuty integration.",
    tech: ["AWS Lambda", "Datadog", "Terraform", "Node.js"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Multi-Region DR Solution",
    description: "Disaster recovery solution with automated failover across 3 AWS regions. Achieved RPO of 5 minutes and RTO of 15 minutes for critical services.",
    tech: ["AWS", "Terraform", "Python", "Route53"],
    gradient: "from-red-500 to-rose-500",
  },
];

const ProjectsSection = () => (
  <div className="p-6 text-white/90">
    <h2 className="text-xl font-bold mb-5">Projects</h2>
    <div className="grid grid-cols-2 gap-3">
      {projects.map((project) => (
        <div key={project.title} className="bg-white/5 rounded-xl overflow-hidden group hover:bg-white/8 transition-colors">
          <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-sm">{project.title}</h3>
              <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Github className="w-3.5 h-3.5 text-white/40 hover:text-white/80 cursor-pointer" />
                <ExternalLink className="w-3.5 h-3.5 text-white/40 hover:text-white/80 cursor-pointer" />
              </div>
            </div>
            <p className="text-xs text-white/50 leading-relaxed mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/60">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsSection;
