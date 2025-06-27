// components/Timeline.tsx
export function Timeline() {
    const experiences = [
      {
        role: "Open Source Contributor",
        company: "Dance Chives",
        period: "Remote | 2023-Present",
        bullets: [
          "Built tagging systems with Neo4j Aura",
          "Developed frontend with Next.js",
        ],
      },
      // Add other roles...
    ];
  
    return (
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mt-1" />
              {idx < experiences.length - 1 && (
                <div className="w-px h-full bg-gray-300" />
              )}
            </div>
            <div>
              <h3 className="font-bold">{exp.role} — {exp.company}</h3>
              <p className="text-gray-500 text-sm">{exp.period}</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }