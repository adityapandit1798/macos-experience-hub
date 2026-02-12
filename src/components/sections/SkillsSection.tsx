import { 
  Cloud, Server, Database, Shield, Code, Terminal, GitBranch, 
  Lock, Activity, Settings, Package, Container, GitPullRequest,
  Cpu, HardDrive, Globe, Network, Key, Eye, BarChart3,
  Monitor, Command, Zap, Layers, Box, Wrench, Cog
} from "lucide-react";

const skills = [
  { category: "Cloud Platforms", items: [
    { name: "AWS EC2", icon: Server, color: "text-orange-400", description: "Virtual servers & compute" }, 
    { name: "AWS VPC", icon: Network, color: "text-blue-400", description: "Network isolation & security" }, 
    { name: "AWS IAM", icon: Key, color: "text-yellow-400", description: "Identity & access management" }, 
    { name: "AWS EKS", icon: Container, color: "text-cyan-400", description: "Managed Kubernetes service" }, 
    { name: "AWS S3", icon: Database, color: "text-green-400", description: "Object storage & data lakes" }, 
    { name: "AWS RDS", icon: HardDrive, color: "text-purple-400", description: "Managed relational databases" },
    { name: "ALB/NLB", icon: Activity, color: "text-pink-400", description: "Application & network load balancing" }, 
    { name: "Auto Scaling", icon: Zap, color: "text-red-400", description: "Dynamic resource scaling" }, 
    { name: "VPC Endpoints", icon: Globe, color: "text-indigo-400", description: "Private connectivity" }, 
    { name: "CloudWatch", icon: Eye, color: "text-teal-400", description: "Monitoring & observability" }
  ]},
  { category: "Infrastructure as Code", items: [
    { name: "Terraform", icon: Layers, color: "text-blue-500", description: "Multi-cloud IaC" }, 
    { name: "Terraform Modules", icon: Package, color: "text-blue-400", description: "Reusable infrastructure" }, 
    { name: "Remote State", icon: Cloud, color: "text-blue-300", description: "Distributed state management" }, 
    { name: "State Locking", icon: Lock, color: "text-blue-600", description: "Concurrent deployment safety" }, 
    { name: "AWS CloudFormation", icon: Box, color: "text-orange-400", description: "AWS-native IaC" }
  ]},
  { category: "Container Orchestration", items: [
    { name: "Kubernetes", icon: Container, color: "text-blue-500", description: "Container orchestration" }, 
    { name: "Amazon EKS", icon: Cpu, color: "text-orange-400", description: "Production-ready K8s" }, 
    { name: "Docker", icon: Package, color: "text-blue-400", description: "Containerization" }, 
    { name: "Helm", icon: GitBranch, color: "text-cyan-400", description: "Kubernetes package manager" }, 
    { name: "Karpenter", icon: Zap, color: "text-yellow-400", description: "Kubernetes node provisioning" }, 
    { name: "Pod Security Policies", icon: Shield, color: "text-red-400", description: "Container security" }
  ]},
  { category: "CI/CD & GitOps", items: [
    { name: "ArgoCD", icon: GitPullRequest, color: "text-red-500", description: "GitOps continuous delivery" }, 
    { name: "Jenkins", icon: Cog, color: "text-gray-400", description: "Pipeline automation" }, 
    { name: "GitHub Actions", icon: GitBranch, color: "text-black dark:text-white", description: "CI/CD workflows" }, 
    { name: "Git", icon: GitBranch, color: "text-orange-500", description: "Version control" }, 
    { name: "SonarQube", icon: BarChart3, color: "text-purple-400", description: "Code quality analysis" }
  ]},
  { category: "Security & Compliance", items: [
    { name: "HashiCorp Vault", icon: Lock, color: "text-purple-500", description: "Secrets management" }, 
    { name: "IAM Policies", icon: Shield, color: "text-blue-400", description: "Fine-grained permissions" }, 
    { name: "Network Security", icon: Network, color: "text-green-400", description: "VPC security groups" }, 
    { name: "Secrets Management", icon: Key, color: "text-yellow-400", description: "Encrypted credential storage" }
  ]},
  { category: "Observability", items: [
    { name: "Prometheus", icon: BarChart3, color: "text-red-500", description: "Metrics collection" }, 
    { name: "Grafana", icon: Activity, color: "text-orange-400", description: "Visualization & dashboards" }, 
    { name: "AWS CloudWatch", icon: Eye, color: "text-blue-400", description: "AWS monitoring" }
  ]},
  { category: "Automation & Tools", items: [
    { name: "Python", icon: Code, color: "text-blue-400", description: "Automation & scripting" }, 
    { name: "Bash", icon: Terminal, color: "text-green-400", description: "Shell scripting" }, 
    { name: "Linux (Ubuntu)", icon: Monitor, color: "text-orange-400", description: "Ubuntu administration" }, 
    { name: "Linux (CentOS)", icon: Server, color: "text-red-400", description: "CentOS administration" }, 
    { name: "Networking", icon: Network, color: "text-blue-500", description: "TCP/IP & routing" }
  ]},
];

const SkillsSection = () => (
  <div className="p-6 text-white/90">
    <h2 className="text-xl font-bold mb-5">Technical Skills</h2>
    <div className="space-y-6">
      {skills.map((group) => (
        <div key={group.category}>
          <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3 flex items-center gap-2">
            {group.category === "Cloud Platforms" && <Cloud className="w-4 h-4" />}
            {group.category === "Infrastructure as Code" && <Layers className="w-4 h-4" />}
            {group.category === "Container Orchestration" && <Container className="w-4 h-4" />}
            {group.category === "CI/CD & GitOps" && <GitBranch className="w-4 h-4" />}
            {group.category === "Security & Compliance" && <Shield className="w-4 h-4" />}
            {group.category === "Observability" && <Eye className="w-4 h-4" />}
            {group.category === "Automation & Tools" && <Terminal className="w-4 h-4" />}
            {group.category}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {group.items.map((skill) => (
              <div key={skill.name} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-200 hover:scale-105 cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors`}>
                    <skill.icon className={`w-5 h-5 ${skill.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white/90">{skill.name}</p>
                    <p className="text-xs text-white/40">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsSection;
