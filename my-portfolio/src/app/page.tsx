import ProjectCard from "./components/ProjectCard";
import { Timeline } from "./components/Timeline";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      {/* Hero Section - Full screen */}
      <Hero/>

      {/* Main content with container */}
      <div className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love building scalable applications that solve real-world problems and provide 
              exceptional user experiences.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
                tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
                repoUrl: "https://github.com/deepaklakhara/ecommerce-platform"
              },
              {
                title: "Task Management App", 
                description: "Real-time task management application with drag-and-drop functionality and team collaboration features.",
                tags: ["React", "Socket.io", "Express", "PostgreSQL"],
                repoUrl: "https://github.com/deepaklakhara/task-manager"
              },
              {
                title: "Portfolio Website",
                description: "Modern portfolio website built with Next.js and Framer Motion for smooth animations.",
                tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                repoUrl: "https://github.com/deepaklakhara/portfolio"
              },
              {
                title: "Weather Dashboard",
                description: "Interactive weather dashboard with real-time data and location-based forecasts.",
                tags: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
                repoUrl: "https://github.com/deepaklakhara/weather-dashboard"
              },
              {
                title: "Chat Application",
                description: "Real-time chat application with WebSocket support and file sharing capabilities.",
                tags: ["Socket.io", "Express", "Redis", "Multer"],
                repoUrl: "https://github.com/deepaklakhara/chat-app"
              },
              {
                title: "Blog Platform",
                description: "Content management system for blogs with markdown support and SEO optimization.",
                tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
                repoUrl: "https://github.com/deepaklakhara/blog-platform"
              }
            ].map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                repoUrl={project.repoUrl}
              />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="space-y-2">
                <p className="text-gray-600">React.js</p>
                <p className="text-gray-600">Next.js</p>
                <p className="text-gray-600">TypeScript</p>
                <p className="text-gray-600">Tailwind CSS</p>
                <p className="text-gray-600">Framer Motion</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="space-y-2">
                <p className="text-gray-600">Node.js</p>
                <p className="text-gray-600">Express.js</p>
                <p className="text-gray-600">Socket.io</p>
                <p className="text-gray-600">REST APIs</p>
                <p className="text-gray-600">GraphQL</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Database & Tools</h3>
              <div className="space-y-2">
                <p className="text-gray-600">MongoDB</p>
                <p className="text-gray-600">PostgreSQL</p>
                <p className="text-gray-600">Redis</p>
                <p className="text-gray-600">Git & GitHub</p>
                <p className="text-gray-600">Docker</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}