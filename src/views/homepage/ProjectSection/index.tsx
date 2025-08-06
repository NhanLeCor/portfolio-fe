import { ProjectCard } from "@/components/ui/ProjectCard";

export const ProjectsSection = () => {
  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js and TypeScript. Features include user authentication, product catalog, shopping cart, and payment integration with modern UI/UX design.",
      buttonText: "View Project",
      imageSrc: "/next.svg",
    },
    {
      title: "Task Management App", 
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built for both web and mobile platforms.",
      buttonText: "View Project",
      imageSrc: "/file.svg",
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for social media management. Includes data visualization, automated reporting, and multi-platform integration for content creators and businesses.",
      buttonText: "View Project", 
      imageSrc: "/globe.svg",
    },
    {
      title: "AI Content Generator",
      description: "An intelligent content creation platform powered by machine learning. Helps content creators generate engaging posts, articles, and marketing copy with advanced AI algorithms.",
      buttonText: "View Project",
      imageSrc: "/vercel.svg",
    },
    {
      title: "Real-time Chat Application", 
      description: "A modern messaging platform with real-time communication, file sharing, and group chat capabilities. Built with WebSocket technology for instant messaging experience.",
      buttonText: "View Project",
      imageSrc: "/window.svg",
    },
    {
      title: "Data Analytics Platform",
      description: "A comprehensive business intelligence tool with interactive dashboards, custom reports, and predictive analytics. Designed for data-driven decision making in enterprises.",
      buttonText: "View Project", 
      imageSrc: "/favicon.ico",
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#f9faff] overflow-hidden">
      <div className="px-8 lg:px-[120px]">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-['Playfair_Display:Bold',_sans-serif] text-[40px] lg:text-[48px] text-[#25282b] mb-2">
            Projects
          </h2>
          <div className="bg-[#fdc435] h-1 w-[100px] rounded-sm mx-auto" />
        </div>

       <div className="space-y-16 lg:space-y-20 flex flex-col">
        {projectsData.map((project, index) => (
            <div key={index} className={index % 2 === 0 ? "self-start" : "self-end"}>   
                <ProjectCard
                    title={project.title}
                    description={project.description}
                    buttonText={project.buttonText}
                    imageSrc={project.imageSrc}
                    imagePosition={index % 2 === 0 ? "right" : "left"}
                />
            </div>
        ))}
        </div>
      </div>
    </section>
  );
}