import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Moon, 
  Sun, 
  ChevronRight,
  Code,
  Terminal,
  Cpu,
  Globe,
  Briefcase,
  User,
  Send,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';
import { TypingAnimation } from './components/TypingAnimation';
import { cn } from './lib/utils';
import { useInView } from 'react-intersection-observer';

// --- Types ---

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  link?: string;
  color: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

// --- Data ---

const PROJECTS: Project[] = [
  {
    title: "TribalPlay OTT",
    description: "A specialized OTT platform for tribal content, focusing on cultural preservation and accessibility.",
    tech: ["TypeScript", "React", "Node.js"],
    color: "bg-accenture-purple",
    link: "https://github.com/GithubLoquita/tribalplay_ott"
  },
  {
    title: "HGE Group",
    description: "Corporate platform for HGE Group, showcasing enterprise solutions and technology services.",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    color: "bg-black",
    link: "https://hge-group.vercel.app/"
  },
  {
    title: "Lumix AI",
    description: "Advanced AI integration platform for business automation and intelligent data processing.",
    tech: ["TypeScript", "React", "Gemini AI"],
    color: "bg-accenture-purple",
    link: "https://lumix-ai-two.vercel.app/"
  },
  {
    title: "Neo OS",
    description: "A web-based operating system simulation exploring modern UI/UX and system architectures.",
    tech: ["TypeScript", "React", "System Design"],
    color: "bg-black",
    link: "https://github.com/GithubLoquita/neo-os"
  }
];

const SKILLS = [
  "JavaScript", "TypeScript", "Python", "React", "Next.js", "Node.js", 
  "Express", "MongoDB", "PostgreSQL", "Linux", "AI/ML", "System Design", 
  "AWS", "Docker", "Git"
];

const EXPERIENCES: Experience[] = [
  {
    company: "HGE company",
    role: "Founder & CEO",
    period: "2023 - Present",
    description: "Leading a tech startup focused on building localized digital solutions and AI-driven systems for underserved communities.",
    icon: <Cpu className="text-google-blue" />
  },
  {
    company: "SESWA WB",
    role: "Vice President",
    period: "Nov 2025 - Present",
    description: "Serving as Vice President of SESWA West Bengal for the 2025–26 session, I coordinate with student representatives and General Body members across the state, lead initiatives for student welfare and community programs, and assist the President and General Secretary in planning and executing events, workshops, and leadership activities.",
    icon: <User className="text-google-red" />
  },
  {
    company: "Messmate",
    role: "Co-Founder & CMO",
    period: "May 2025 - Present",
    description: "Co-Founder & CMO at Messmate, a comprehensive management system for student messes and hostels.",
    icon: <Globe className="text-google-yellow" />
  },
  {
    company: "HACKAUT | MAKAUT, WB",
    role: "Lead Designer",
    period: "May 2024 - Nov 2025",
    description: "Lead Designer at HACKAUT | MAKAUT, WB, focusing on creating intuitive and visually appealing designs for hackathons and tech events.",
    icon: <Code className="text-google-green" />
  },
  {
    company: "Internshala",
    role: "Internshala Student Partner (ISP)",
    period: "Jun 2025 - Aug 2025",
    description: "Representing Internshala on campus, promoting internship opportunities, and organizing student engagement activities.",
    icon: <Briefcase className="text-google-blue" />
  },
  {
    company: "ClienZon",
    role: "User Experience Designer",
    period: "May 2025 - May 2025",
    description: "User Experience Designer at ClienZon, focusing on user-centric design and interface optimization.",
    icon: <Terminal className="text-google-red" />
  }
];

// --- Components ---

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-20 text-left border-l-8 border-accenture-purple pl-8">
    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter dark:text-white leading-none mb-4">
      {title}
    </h2>
    {subtitle && <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl font-light">{subtitle}</p>}
  </div>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-white dark:bg-black">
        <div className="mb-8">
          <span className="text-6xl font-black tracking-tighter">
            SANDIP<span className="text-accenture-purple">{">"}</span>
          </span>
        </div>
        <div className="w-48 h-1 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-accenture-purple"
            animate={{ left: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "50%" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans selection:bg-accenture-purple/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accenture-purple z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-md z-40 border-b border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tighter dark:text-white">
              SANDIP<span className="text-accenture-purple">{">"}</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest">
              <button onClick={() => document.getElementById('about')?.scrollIntoView()} className="hover:text-accenture-purple transition-colors">About</button>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView()} className="hover:text-accenture-purple transition-colors">Work</button>
              <button onClick={() => document.getElementById('experience')?.scrollIntoView()} className="hover:text-accenture-purple transition-colors">Career</button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView()} className="hover:text-accenture-purple transition-colors">Contact</button>
            </div>
            <div className="w-[1px] h-6 bg-gray-200 dark:bg-gray-800" />
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 bg-white dark:bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accenture-purple/5 -skew-x-12 transform translate-x-1/4" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 bg-accenture-purple text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Let there be change
            </div>
            <h1 className="text-7xl sm:text-9xl font-black mb-8 tracking-tighter leading-[0.85] dark:text-white uppercase">
              Sandip<br/>Hembram<span className="text-accenture-purple">.</span>
            </h1>
            
            <div className="text-2xl sm:text-3xl text-gray-500 dark:text-gray-400 mb-12 font-light">
              <TypingAnimation 
                texts={[
                  "Web Developer",
                  "Exploring New Tech",
                  "Founder of HGE",
                  "AI Enthusiast"
                ]} 
              />
            </div>

            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView()}
                className="accenture-btn accenture-btn-primary"
              >
                Our Work <ChevronRight size={20} className="ml-2" />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
                className="accenture-btn accenture-btn-secondary"
              >
                Connect
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="w-full aspect-square bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
              <img 
                src="https://res.cloudinary.com/drh369n9m/image/upload/v1774207578/WhatsApp_Image_2026-02-14_at_12.55.52_AM_kstau4.jpg" 
                alt="Sandip Hembram" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accenture-purple/20 mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accenture-purple flex items-center justify-center text-white text-6xl font-black">
              {">"}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Strategy & Innovation" subtitle="We deliver on the promise of technology and human ingenuity." />
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-light"
            >
              <p>
                I am a web developer dedicated to exploring the frontier of <span className="text-accenture-purple font-bold">new technology</span>. 
                My work is defined by the intersection of complex systems and human-centric design.
              </p>
              <p>
                Based in <span className="font-bold">Kalyani, West Bengal</span>, 
                I lead <span className="text-accenture-purple font-bold">HGE company</span> and collaborate with 
                <span className="font-bold"> Apna Physics Academy</span> to push the boundaries of digital education.
              </p>
              <div className="pt-8">
                <button className="accenture-btn accenture-btn-secondary">
                  Read our story
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-1"
            >
              {[
                { label: "Founder", value: "HGE Group", icon: <Cpu /> },
                { label: "Innovation", value: "50+ Assets", icon: <Code /> },
                { label: "Focus", value: "AI Systems", icon: <Cpu /> }
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 dark:bg-[#0a0a0a] p-12 hover:bg-accenture-purple hover:text-white transition-all duration-300 group">
                  <div className="text-accenture-purple group-hover:text-white mb-6 transition-colors">{stat.icon}</div>
                  <div className="text-3xl font-black mb-2 uppercase tracking-tighter">{stat.value}</div>
                  <div className="text-sm uppercase tracking-widest opacity-60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Our Work" 
            subtitle="Explore how we help clients embrace change and drive value through technology."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="accenture-card overflow-hidden flex flex-col h-full group cursor-pointer"
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                <div className={cn("h-48 w-full flex items-center justify-center text-white relative overflow-hidden", project.color)}>
                  <Code size={64} className="group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={20} />
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col bg-white dark:bg-black">
                  <h3 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tighter">{project.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 flex-1 font-light leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-[10px] uppercase tracking-widest font-bold text-accenture-purple border border-accenture-purple/20 px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Capabilities" subtitle="Our diverse skill set allows us to tackle the most complex challenges." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 border border-gray-100 dark:border-gray-900 hover:border-accenture-purple transition-colors group cursor-default"
              >
                <span className="text-sm font-bold uppercase tracking-widest group-hover:text-accenture-purple transition-colors dark:text-gray-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Career Path" subtitle="A history of driving change and delivering value across industries." />
          <div className="space-y-1">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-black p-12 border-b border-gray-100 dark:border-gray-900 hover:bg-accenture-purple hover:text-white transition-all duration-300 grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-center"
              >
                <div className="text-sm font-bold uppercase tracking-widest opacity-60">
                  {exp.period}
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{exp.role}</h3>
                  <p className="text-accenture-purple group-hover:text-white font-bold transition-colors">{exp.company}</p>
                </div>
                <div className="text-sm font-light leading-relaxed opacity-80 md:text-right">
                  {exp.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Connect With Us" subtitle="Let's discuss how we can help you navigate the future." />
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h3 className="text-5xl font-black uppercase tracking-tighter dark:text-white">
                Ready to transform?<br/>
                <span className="text-accenture-purple">Get in touch.</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-accenture-purple group-hover:bg-accenture-purple group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Email</div>
                    <div className="text-xl font-bold dark:text-white">sandiphembram405@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-accenture-purple group-hover:bg-accenture-purple group-hover:text-white transition-all">
                    <Globe size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Location</div>
                    <div className="text-xl font-bold dark:text-white">Kalyani, West Bengal, India</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-0 py-4 border-b-2 border-gray-200 dark:border-gray-800 bg-transparent focus:border-accenture-purple outline-none transition-all dark:text-white text-xl font-light"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-0 py-4 border-b-2 border-gray-200 dark:border-gray-800 bg-transparent focus:border-accenture-purple outline-none transition-all dark:text-white text-xl font-light"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-0 py-4 border-b-2 border-gray-200 dark:border-gray-800 bg-transparent focus:border-accenture-purple outline-none transition-all dark:text-white text-xl font-light resize-none"
                    placeholder="Tell us about your challenge..."
                  />
                </div>
                <button 
                  type="submit" 
                  className="accenture-btn accenture-btn-primary w-full py-6 text-xl"
                >
                  Submit Request <Send size={20} className="ml-3" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 lg:col-span-2">
              <span className="text-4xl font-black tracking-tighter mb-8 block">
                SANDIP<span className="text-accenture-purple">{">"}</span>
              </span>
              <p className="text-gray-400 max-w-md text-lg font-light leading-relaxed">
                We are a global professional services company with leading capabilities in digital, cloud and security.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-8 opacity-60">Social</h4>
              <div className="space-y-4">
                <a href="https://twitter.com/SandipH75207041" target="_blank" rel="noreferrer" className="block text-gray-400 hover:text-accenture-purple transition-colors">Twitter</a>
                <a href="https://facebook.com/sandip.hembram.395017" target="_blank" rel="noreferrer" className="block text-gray-400 hover:text-accenture-purple transition-colors">Facebook</a>
                <a href="https://instagram.com/hembram_143" target="_blank" rel="noreferrer" className="block text-gray-400 hover:text-accenture-purple transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/in/sandip-hembram-400099261/" target="_blank" rel="noreferrer" className="block text-gray-400 hover:text-accenture-purple transition-colors">LinkedIn</a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-8 opacity-60">Connect</h4>
              <div className="space-y-4">
                <a href="https://github.com/GithubLoquita" target="_blank" rel="noreferrer" className="block text-gray-400 hover:text-accenture-purple transition-colors">GitHub</a>
                <a href="mailto:sandiphembram405@gmail.com" className="block text-gray-400 hover:text-accenture-purple transition-colors">Email</a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs font-bold uppercase tracking-widest opacity-40">
              © 2026 Sandip Hembram. All rights reserved.
            </div>
            <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest opacity-40">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Statement</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms & Conditions</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
