const skills = [
  { category: "Cloud Platforms", items: [
    { name: "AWS", level: 95 }, { name: "Azure", level: 85 }, { name: "GCP", level: 80 }, { name: "DigitalOcean", level: 70 }
  ]},
  { category: "Containers & Orchestration", items: [
    { name: "Docker", level: 95 }, { name: "Kubernetes", level: 90 }, { name: "Helm", level: 85 }, { name: "ECS/Fargate", level: 80 }
  ]},
  { category: "IaC & Automation", items: [
    { name: "Terraform", level: 92 }, { name: "Ansible", level: 80 }, { name: "CloudFormation", level: 85 }, { name: "Pulumi", level: 75 }
  ]},
  { category: "CI/CD & DevOps", items: [
    { name: "GitHub Actions", level: 90 }, { name: "Jenkins", level: 85 }, { name: "GitLab CI", level: 80 }, { name: "ArgoCD", level: 78 }
  ]},
  { category: "Monitoring & Observability", items: [
    { name: "Prometheus", level: 88 }, { name: "Grafana", level: 85 }, { name: "Datadog", level: 80 }, { name: "ELK Stack", level: 75 }
  ]},
  { category: "Languages & Scripting", items: [
    { name: "Python", level: 88 }, { name: "Bash", level: 92 }, { name: "Go", level: 70 }, { name: "TypeScript", level: 75 }
  ]},
];

const SkillsSection = () => (
  <div className="p-6 text-white/90">
    <h2 className="text-xl font-bold mb-5">Technical Skills</h2>
    <div className="space-y-5">
      {skills.map((group) => (
        <div key={group.category}>
          <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-2">{group.category}</h3>
          <div className="grid grid-cols-2 gap-2">
            {group.items.map((skill) => (
              <div key={skill.name} className="bg-white/5 rounded-lg p-2.5">
                <div className="flex justify-between text-sm mb-1">
                  <span>{skill.name}</span>
                  <span className="text-white/40">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
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
