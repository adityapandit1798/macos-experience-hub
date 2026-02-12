import { useState } from "react";

const terminalLines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "john.doe — Senior Cloud Engineer" },
  { prompt: true, text: "cat /etc/interests" },
  { prompt: false, text: "Cloud Architecture, Kubernetes, Terraform, Open Source" },
  { prompt: true, text: "uptime" },
  { prompt: false, text: "5+ years in cloud engineering, 99.99% reliability" },
  { prompt: true, text: "curl -s https://api.github.com/users/johndoe | jq '.public_repos'" },
  { prompt: false, text: "42" },
  { prompt: true, text: "echo $CURRENT_STATUS" },
  { prompt: false, text: "Open to exciting opportunities 🚀" },
];

const TerminalSection = () => {
  const [input, setInput] = useState("");

  return (
    <div className="bg-[#1e1e1e] h-full font-mono text-sm p-4">
      <div className="space-y-1">
        {terminalLines.map((line, i) => (
          <div key={i}>
            {line.prompt ? (
              <p>
                <span className="text-green-400">johndoe@cloud</span>
                <span className="text-white/40">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white/40">$ </span>
                <span className="text-white/90">{line.text}</span>
              </p>
            ) : (
              <p className="text-white/60">{line.text}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 flex">
        <span className="text-green-400">johndoe@cloud</span>
        <span className="text-white/40">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-white/40">$ </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-white/90 outline-none ml-1"
          autoFocus
        />
      </div>
    </div>
  );
};

export default TerminalSection;
