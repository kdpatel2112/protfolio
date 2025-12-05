import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/kdpatel2112" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/krishna-patel-99b3192b9/" },
 
];

const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-radial-glow opacity-20" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-center flex items-center gap-2 flex-wrap justify-center">
            © 2025, Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by 
            <span className="gradient-text font-semibold">Krishna Patel</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
