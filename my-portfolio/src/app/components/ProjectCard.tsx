// components/ProjectCard.tsx
export default function ProjectCard({
    title,
    description,
    tags,
    repoUrl,
  }: {
    title: string;
    description: string;
    tags: string[];
    repoUrl: string;
  }) {
    return (
      <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 my-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
        <a href={repoUrl} className="mt-4 inline-block text-blue-600 hover:underline">
          View Repository
        </a>
      </div>
    );
  }