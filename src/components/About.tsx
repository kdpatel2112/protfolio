import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Code2, Globe, Heart } from "lucide-react";

const cards = [
  {
    icon: User,
    title: "Hi there, I'm Krishna Patel",
    description: "I combine frontend development with Machine Learning to design seamless interfaces and develop predictive, AI-powered systems.",
    gradient: "from-primary/20 to-secondary/20",
    span: "col-span-1",
  },
  {
    icon: Code2,
    title: "Tech Stack",
    description: "I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.",
    gradient: "from-accent/20 to-primary/20",
    span: "col-span-1",
  },
  {
    icon: Globe,
    title: "Remote & Flexible",
    description: "Based in Patan, Gujarat, India — open to collaborating remotely with teams around the world.",
    gradient: "from-secondary/20 to-accent/20",
    span: "col-span-1 md:row-span-2",
    hasVideo: true,
  },
  {
    icon: Heart,
    title: "My Passion for Coding",
    description: "I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.",
    gradient: "from-primary/20 to-accent/20",
    span: "col-span-1 md:col-span-2",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Hello, There 👋
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about me and what drives my passion for development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-500 ${card.span}`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Globe Video for Remote card */}
              {card.hasVideo && (
                <div className="absolute inset-0 flex items-center justify-center opacity-60">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover mix-blend-lighten"
                  >
                    <source src="/videos/glob.mp4" type="video/mp4" />
                  </video>
                </div>
              )}
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
