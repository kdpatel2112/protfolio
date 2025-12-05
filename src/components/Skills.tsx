import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Palette, 
  Brain,
  Terminal,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "primary",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Redux"],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    color: "secondary",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "Hugging Face"],
  },
  {
    title: "Programming",
    icon: Terminal,
    color: "accent",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
  },
  {
    title: "Design Tools",
    icon: Palette,
    color: "primary",
    skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design", "Responsive Design"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: "bg-primary/20",
        text: "text-primary",
        border: "border-primary/30",
        hover: "hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]",
      },
      secondary: {
        bg: "bg-secondary/20",
        text: "text-secondary",
        border: "border-secondary/30",
        hover: "hover:border-secondary/60 hover:shadow-[0_0_20px_hsl(var(--secondary)/0.3)]",
      },
      accent: {
        bg: "bg-accent/20",
        text: "text-accent",
        border: "border-accent/30",
        hover: "hover:border-accent/60 hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)]",
      },
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 stars opacity-20" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My Skills 💪
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className={`glass-card rounded-2xl p-6 border ${colorClasses.border} ${colorClasses.hover} transition-all duration-500`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 ${colorClasses.text}`} />
                  </div>
                  <h3 className="text-lg font-bold font-display">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="skill-badge text-foreground/80"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Infinite Scrolling Skills Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex animate-[scroll_30s_linear_infinite] gap-8 w-max">
            {[...skillCategories, ...skillCategories].flatMap((cat) => cat.skills).map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="text-2xl sm:text-3xl font-bold text-foreground/10 whitespace-nowrap font-display"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
