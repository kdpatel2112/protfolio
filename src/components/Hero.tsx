import { motion } from "framer-motion";
import { Send, Sparkles, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 stars opacity-30" />
      <div className="absolute inset-0 bg-radial-glow" />
      
      {/* Hero Video */}
      <div className="absolute top-0 right-0 w-full h-full flex justify-end items-start pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[50%] lg:w-[40%] h-auto object-contain mix-blend-lighten opacity-80"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">
              Frontend Developer Portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          >
            Providing{" "}
            <span className="gradient-text">the best</span>
            <br />
            Project{" "}
            <span className="gradient-text">Experience</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 mx-auto lg:mx-0"
          >
            I'm a frontend developer with experience in Website, Mobile and Software development. 
            Check out my projects and skills.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="cosmic-button inline-flex items-center gap-2 text-foreground"
            >
              <Send size={28} />
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll Down</span>
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
