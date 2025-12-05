import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react"; 
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Clothing Exchange Platform",
    description: "A modern, fully responsive animated community platform built with HTML, CSS, and JavaScript. Features clean UI, smooth CSS animations, and interactive user experience.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/clothing-exchange.png",
    github: "#",
    live: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with real-time updates. Features charts, filters, and export capabilities built with modern frontend technologies.",
    tags: ["React", "D3.js", "TypeScript", "CSS Animations"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    github: "#",
    live: "#",
  },
  
 
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My Projects 👨‍💻
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my skills in frontend development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                  <a
                    href={project.github}
                    className="w-12 h-12 rounded-full bg-foreground/10 border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="w-12 h-12 rounded-full bg-foreground/10 border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-display group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View More */}
                <a
                  href={project.live}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all duration-300"
                >
                  View Project <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
