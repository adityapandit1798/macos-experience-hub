import { Award } from "lucide-react";

const certifications = [
  { name: "AWS Solutions Architect – Professional", issuer: "Amazon Web Services", date: "2023", color: "from-orange-500 to-amber-500" },
  { name: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF", date: "2022", color: "from-blue-600 to-indigo-500" },
  { name: "Azure Solutions Architect Expert", issuer: "Microsoft", date: "2022", color: "from-cyan-500 to-blue-500" },
  { name: "Google Cloud Professional Architect", issuer: "Google Cloud", date: "2021", color: "from-green-500 to-emerald-500" },
  { name: "HashiCorp Terraform Associate", issuer: "HashiCorp", date: "2021", color: "from-purple-500 to-violet-500" },
  { name: "AWS DevOps Engineer – Professional", issuer: "Amazon Web Services", date: "2020", color: "from-orange-500 to-yellow-500" },
];

const education = [
  { degree: "M.S. Computer Science", school: "Stanford University", year: "2016", focus: "Distributed Systems & Cloud Computing" },
  { degree: "B.S. Computer Engineering", school: "UC Berkeley", year: "2014", focus: "Systems & Networking" },
];

const CertificationsSection = () => (
  <div className="p-6 text-white/90">
    <h2 className="text-xl font-bold mb-5">Certifications</h2>
    <div className="grid grid-cols-2 gap-3 mb-8">
      {certifications.map((cert) => (
        <div key={cert.name} className="bg-white/5 rounded-xl p-3 hover:bg-white/8 transition-colors">
          <div className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center shrink-0`}>
              <Award className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-tight">{cert.name}</h3>
              <p className="text-xs text-white/40 mt-0.5">{cert.issuer} · {cert.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <h2 className="text-xl font-bold mb-4">Education</h2>
    <div className="space-y-3">
      {education.map((edu) => (
        <div key={edu.degree} className="bg-white/5 rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-sm text-blue-400">{edu.school}</p>
              <p className="text-xs text-white/40 mt-1">{edu.focus}</p>
            </div>
            <span className="text-xs text-white/40">{edu.year}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CertificationsSection;
