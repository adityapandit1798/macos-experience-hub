import { FileText, ExternalLink } from "lucide-react";

const posts = [
  { title: "Building Multi-Region Architectures on AWS", date: "Jan 2024", reads: "12.4K", tags: ["AWS", "Architecture"] },
  { title: "Kubernetes Cost Optimization: A Practical Guide", date: "Nov 2023", reads: "8.7K", tags: ["Kubernetes", "FinOps"] },
  { title: "Terraform vs Pulumi: 2024 Comparison", date: "Oct 2023", reads: "15.2K", tags: ["IaC", "Terraform"] },
  { title: "Zero-Trust Networking in Cloud Environments", date: "Aug 2023", reads: "6.3K", tags: ["Security", "Networking"] },
  { title: "GitOps Best Practices for Production", date: "Jun 2023", reads: "9.1K", tags: ["GitOps", "DevOps"] },
];

const BlogSection = () => (
  <div className="p-6 text-white/90">
    <h2 className="text-xl font-bold mb-5">Blog & Articles</h2>
    <div className="space-y-2">
      {posts.map((post) => (
        <div key={post.title} className="bg-white/5 rounded-xl p-4 hover:bg-white/8 transition-colors cursor-pointer group">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <FileText className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-semibold group-hover:text-blue-400 transition-colors">{post.title}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-white/40">{post.date}</span>
                  <span className="text-xs text-white/40">{post.reads} reads</span>
                </div>
                <div className="flex gap-1.5 mt-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/50">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-white/60 transition-colors shrink-0" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BlogSection;
