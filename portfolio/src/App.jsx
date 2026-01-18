import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const projects = [
    {
      id: 1,
      title: "E-Learning Platform",
      category: "Web Development",
      description: "A comprehensive learning management system built with React and Node.js, featuring interactive courses and progress tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      role: "Full Stack Development",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=E-Learning",
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Web Development",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      role: "Frontend Development",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Task+Manager",
      link: "#"
    },
    {
      id: 3,
      title: "Linux Automation Scripts",
      category: "Other Projects",
      description: "Collection of Bash scripts for system automation, backup management, and development environment setup.",
      technologies: ["Bash", "Linux", "Git"],
      role: "System Administration",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Linux+Scripts",
      link: "#"
    },
    {
      id: 4,
      title: "Mobile Learning Companion",
      category: "Mobile Apps",
      description: "Cross-platform mobile app for accessing educational content and tracking learning progress on-the-go.",
      technologies: ["React Native", "Expo", "Firebase"],
      role: "Mobile Development",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Mobile+App",
      link: "#"
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "Web Development",
      description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations and dark theme.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      role: "Frontend Development",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Portfolio",
      link: "#"
    },
    {
      id: 6,
      title: "Code Review Tool",
      category: "Other Projects",
      description: "Automated code review tool that analyzes code quality, security vulnerabilities, and best practices.",
      technologies: ["Python", "Flask", "Docker"],
      role: "Backend Development",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Code+Review",
      link: "#"
    }
  ];

  const filters = ["All Projects", "Web Development", "Mobile Apps", "Other Projects"];

  const filteredProjects = activeFilter === "All Projects"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <main className="container">
      {/* NAVIGATION */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">Sanduni Fernando</div>
          <div className="menu">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="cta-button">Get Started</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-left"
          >
            <h1>Empowering Growth Through Innovative Software Solutions</h1>
            <p className="subtext">
              Motivated undergraduate software engineering student with hands-on experience in web development and learning management systems. Skilled in building practical software projects and collaborative solutions. Eager to apply technical skills to create impactful digital experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">View My Work</a>
              <a href="#contact" className="secondary-btn">Get In Touch</a>
            </div>
            <div className="logos">
              <img src="https://via.placeholder.com/50x30/ffffff/000000?text=Logo1" alt="Partner 1" />
              <img src="https://via.placeholder.com/50x30/ffffff/000000?text=Logo2" alt="Partner 2" />
              <img src="https://via.placeholder.com/50x30/ffffff/000000?text=Logo3" alt="Partner 3" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-right"
          >
            <div className="image-card">
              <img src="my_p.png" alt="Sanduni Fernando" className="portrait" />
              <div className="badge badge1">5+ Years Experience</div>
              <div className="badge badge2">100+ Projects</div>
              <div className="badge badge3">Certified Expert</div>
            </div>
            <div className="chat-icon">💬</div>
          </motion.div>
        </div>
        {/* Subtle grid background */}
        <div className="grid-bg" />
        {/* Subtle animated gradient */}
        <div className="gradient-bg" />
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          I am an undergraduate software engineering student with an online
          internship at LEARN. I have experience assisting IT education,
          teaching C and Python, and contributing to Free and Open-Source
          Software and Linux-based learning environments.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <h2>Skills</h2>
        <div className="grid">
          <div className="card">
            <h3>Programming</h3>
            <p>C, Python, JavaScript</p>
          </div>
          <div className="card">
            <h3>Web</h3>
            <p>React, Vite, Tailwind CSS</p>
          </div>
          <div className="card">
            <h3>Tools</h3>
            <p>Linux, Git, VS Code</p>
          </div>
          <div className="card">
            <h3>Soft Skills</h3>
            <p>Teaching, Communication, Teamwork</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <h2>Experience</h2>
        <div className="card">
          <h3>Online IT Teaching Intern – LEARN</h3>
          <span>-</span>
          <ul>
            <li>Assisted in teaching C and Python</li>
            <li>Created and improved Linux & FOSS content</li>
            <li>Supported undergraduate IT learners</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-yellowBrand text-black shadow-lg shadow-yellowBrand/25"
                  : "bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm border border-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-yellowBrand/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-yellowBrand/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellowBrand/90 text-black text-xs font-semibold rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellowBrand transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-md border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Role */}
                <div className="text-yellowBrand text-sm font-medium mb-4">
                  {project.role}
                </div>

                {/* Explore Button */}
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellowBrand text-black font-semibold rounded-full hover:bg-yellow-400 transition-colors duration-300"
                >
                  Explore
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellowBrand/0 via-yellowBrand/5 to-yellowBrand/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* EDUCATION */}
      <section className="section">
        <h2>Education</h2>
        <ul>
          <li>Undergraduate – Software Engineering</li>
          <li>G.C.E O/L – 9 As</li>
          <li>G.C.E A/L – Physical Science (1C, 2S)</li>
          <li>FOSS & Linux Certification – EduNET</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h2>Contact</h2>
        <form className="contact">
          <input placeholder="Your Email" />
          <textarea placeholder="Your Message" />
          <button>Send Message</button>
        </form>
      </section>

    </main>
  );
}