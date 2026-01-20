import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaCode,
  FaBrain,
  FaUsers,
  FaClock,
  FaLightbulb,
  FaBookOpen,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaPhp,
  FaGithub,
  FaTools,
  FaCogs,
  FaServer,
  FaTerminal,
  FaCodeBranch,
  FaRocket,
  FaPuzzlePiece,
  FaHandshake,
  FaComments,
  FaCalendarAlt,
  FaSyncAlt,
  FaGraduationCap,
  FaEnvelope,
  FaGlobe,
  FaLinkedin
} from "react-icons/fa";

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const projects = [
    {
      id: 1,
      title: "Smart O/L ICT",
      category: "Fullstack",
      description: "Gamified e-learning platform with authentication, quizzes, leaderboards, progress tracking, REST APIs. (Full-Stack Group Project, 2025 – Present)",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Bootstrap"],
      role: "Full-Stack Development",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Smart+O/L+ICT",
      link: "#"
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      category: "Frontend",
      description: "Responsive portfolio with animations and optimized performance. (Jan 2026)",
      technologies: ["React", "Tailwind CSS"],
      role: "Frontend Development",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Portfolio+Website",
      link: "#"
    },
    {
      id: 3,
      title: "University Management System",
      category: "Backend",
      description: "Console-based CRUD system for student/course records. (Jan 2026)",
      technologies: ["Java", "Hibernate", "Maven", "MySQL"],
      role: "Backend Development",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=University+Management",
      link: "#"
    },
    {
      id: 4,
      title: "Hospital Management System (SQL)",
      category: "Other",
      description: "Views, triggers, procedures, functions for patient/staff data; automated inventory updates. (Dec 2025)",
      technologies: ["SQL", "MySQL"],
      role: "Database Development",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Hospital+Management",
      link: "#"
    },
    {
      id: 5,
      title: "GN QuickCheck",
      category: "Other Projects",
      description: "Designed platform for accessibility and efficiency of Grama Niladhari services. (Group Mini Project, Oct 2025)",
      technologies: ["Figma", "UX/HCI Methods"],
      role: "UX/UI Design",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=GN+QuickCheck",
      link: "#"
    },
    {
      id: 6,
      title: "Citizen Complaint Management System (CCMS)",
      category: "Other Projects",
      description: "Authored IEEE-standard SRS with secure authentication and role-based workflows. (Jul 2025)",
      technologies: ["Software Requirements"],
      role: "Requirements Engineering",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=CCMS",
      link: "#"
    },
    {
      id: 7,
      title: "Data Analysis & Programming Lab (Python)",
      category: "Other Projects",
      description: "Data cleaning, visualization, structured programming for insights. (Jun 2025)",
      technologies: ["Jupyter Notebook", "Pandas", "NumPy", "Matplotlib"],
      role: "Data Analysis",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Data+Analysis",
      link: "#"
    },
    {
      id: 8,
      title: "Amazing Colombo & Visit Colombo (QA Project)",
      category: "Other Projects",
      description: "QA test plans, manual test cases, load/performance/stress testing with Apache JMeter. (Jun 2025)",
      technologies: ["Apache JMeter", "QA Tools"],
      role: "Quality Assurance",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=QA+Project",
      link: "#"
    }
  ];

  const filters = ["All Projects", "Software Development", "Other Projects"];

  const filteredProjects = activeFilter === "All Projects"
    ? projects
    : activeFilter === "Software Development"
    ? projects.filter(project => ["Fullstack", "Frontend", "Backend", "Other"].includes(project.category))
    : projects.filter(project => project.category === activeFilter);

  const [activeSkillTab, setActiveSkillTab] = useState("Programming");

  const [activeCertTab, setActiveCertTab] = useState("Programming");

  const certificatesData = {
    Programming: [],
    "Web Technologies": [],
    Databases: [],
    Frameworks: [],
    "Tools & Platforms": [
      {
        title: "Networking Essentials",
        issuer: "Cisco Networking Academy",
        date: "Jan 2025",
        icon: FaCodeBranch
      },
      {
        title: "Codeless Test Automation",
        issuer: "Test Automation University",
        date: "2025",
        icon: FaTools
      }
    ],
    Concepts: [
      {
        title: "Online Learning Program",
        issuer: "CODL, University of Moratuwa",
        date: "2023",
        icon: FaGraduationCap
      }
    ],
    "AI & ML": [
      {
        title: "Stay Ahead of the AI Curve",
        issuer: "Google",
        date: "Nov 2025",
        icon: FaBrain
      },
      {
        title: "Intro to Machine Learning",
        issuer: "Kaggle",
        date: "Jun 2025",
        icon: FaBrain
      }
    ],
    "Operating Systems": [],
    "Soft Skills": []
  };

  const skillsData = {
    Programming: [
      { name: "Python", icon: FaPython, proficiency: "Intermediate" },
      { name: "Java", icon: FaJava, proficiency: "Intermediate" },
      { name: "C", icon: FaCode, proficiency: "Intermediate" }
    ],
    "Web Technologies": [
      { name: "HTML", icon: FaHtml5, proficiency: "Expert" },
      { name: "CSS", icon: FaCss3, proficiency: "Expert" },
      { name: "JavaScript", icon: FaJs, proficiency: "Advanced" },
      { name: "React Native", icon: FaReact, proficiency: "Intermediate" },
      { name: "MERN Stack", icon: FaNodeJs, proficiency: "Basic" }
    ],
    Databases: [
      { name: "MySQL", icon: FaDatabase, proficiency: "Intermediate" },
      { name: "MongoDB", icon: FaDatabase, proficiency: "Advanced" }
    ],
    Frameworks: [
      { name: "CodeIgniter", icon: FaCogs, proficiency: "Intermediate" }
    ],
    "Tools & Platforms": [
      { name: "Moodle", icon: FaBookOpen, proficiency: "Intermediate" },
      { name: "Git", icon: FaGitAlt, proficiency: "Advanced" },
      { name: "GitHub", icon: FaGithub, proficiency: "Advanced" },
      { name: "Visual Studio", icon: FaCode, proficiency: "Intermediate" },
      { name: "VS Code", icon: FaCode, proficiency: "Expert" },
      { name: "Figma", icon: FaTools, proficiency: "Intermediate" }
    ],
    Concepts: [
      { name: "OOP", icon: FaCogs, proficiency: "Intermediate" },
      { name: "Data Structures & Algorithms", icon: FaCodeBranch, proficiency: "Basic" },
      { name: "SDLC", icon: FaSyncAlt, proficiency: "Intermediate" }
    ],
    "AI & ML": [
      { name: "Data Preprocessing", icon: FaBrain, proficiency: "Intermediate" },
      { name: "Predictive Modeling", icon: FaBrain, proficiency: "Intermediate" },
      { name: "Data Analysis", icon: FaBrain, proficiency: "Intermediate" }
    ],
    "Operating Systems": [
      { name: "Windows", icon: FaTerminal, proficiency: "Advanced" },
      { name: "Linux", icon: FaTerminal, proficiency: "Basic" }
    ],
    "Soft Skills": [
      { name: "Problem Solving", icon: FaPuzzlePiece, description: "Analytical thinking and creative solution development" },
      { name: "Team Collaboration", icon: FaUsers, description: "Effective communication and group dynamics" },
      { name: "Communication Skills", icon: FaComments, description: "Clear technical communication and presentation" },
      { name: "Time Management", icon: FaClock, description: "Efficient task prioritization and deadline management" },
      { name: "Adaptability", icon: FaSyncAlt, description: "Quick learning and flexibility in changing environments" },
      { name: "Continuous Learning", icon: FaBookOpen, description: "Commitment to ongoing skill development and knowledge acquisition" }
    ]
  };

  const skillTabs = Object.keys(skillsData);

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
              Motivated undergraduate Software Engineering student seeking a Software Engineering internship. Strong foundation in programming and web technologies, with hands-on experience in learning management systems and collaborative project work. Eager to apply technical skills and contribute to real-world software solutions.
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {/* Skill Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSkillTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeSkillTab === tab
                  ? "bg-yellowBrand text-black shadow-lg shadow-yellowBrand/25"
                  : "bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm border border-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeSkillTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData[activeSkillTab].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-yellowBrand/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-yellowBrand/10"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-yellowBrand/10 rounded-full group-hover:bg-yellowBrand/20 transition-colors duration-300">
                  <skill.icon className="w-8 h-8 text-yellowBrand" />
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-bold text-white text-center mb-2 group-hover:text-yellowBrand transition-colors">
                {skill.name}
              </h3>

              {/* Proficiency or Description */}
              {skill.proficiency ? (
                <div className="text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    skill.proficiency === 'Expert' ? 'bg-green-500/20 text-green-400' :
                    skill.proficiency === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                    skill.proficiency === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {skill.proficiency}
                  </span>
                </div>
              ) : (
                <p className="text-gray-300 text-sm text-center leading-relaxed">
                  {skill.description}
                </p>
              )}

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellowBrand/0 via-yellowBrand/5 to-yellowBrand/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="card group hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-yellowBrand transition-colors">Intern – Content Creation & Teaching Assistant (Remote)</h3>
                <p className="text-yellowBrand text-sm font-medium">Lanka Education and Research Network (LEARN), University of Peradeniya</p>
              </div>
              <span className="text-gray-400 text-sm">March 2024 – August 2024</span>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li>• Assisted in teaching C and Python programming languages</li>
              <li>• Created and improved Linux & FOSS educational content</li>
              <li>• Supported undergraduate IT learners in remote learning environments</li>
              <li>• Developed interactive learning materials and resources</li>
            </ul>
          </motion.div>
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

      {/* CERTIFICATES */}
      <section className="section" id="certificates">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certificates
        </motion.h2>

        {/* Certificate Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(certificatesData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCertTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCertTab === tab
                  ? "bg-yellowBrand text-black shadow-lg shadow-yellowBrand/25"
                  : "bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm border border-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          key={activeCertTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificatesData[activeCertTab].map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-yellowBrand/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-yellowBrand/10"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-yellowBrand/10 rounded-full group-hover:bg-yellowBrand/20 transition-colors duration-300">
                  <cert.icon className="w-8 h-8 text-yellowBrand" />
                </div>
              </div>

              {/* Certificate Title */}
              <h3 className="text-xl font-bold text-white text-center mb-2 group-hover:text-yellowBrand transition-colors">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-yellowBrand text-sm font-medium text-center mb-2">
                {cert.issuer}
              </p>

              {/* Date */}
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-white/10 text-xs text-gray-300 rounded-md border border-white/20">
                  {cert.date}
                </span>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellowBrand/0 via-yellowBrand/5 to-yellowBrand/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Email",
              value: "sandusanf01@gmail.com",
              icon: FaEnvelope,
              link: "mailto:sandusanf01@gmail.com"
            },
            {
              title: "Portfolio",
              value: "sanduf01.vercel.app",
              icon: FaGlobe,
              link: "https://sanduf01.vercel.app"
            },
            {
              title: "LinkedIn",
              value: "linkedin.com/in/sanduf01",
              icon: FaLinkedin,
              link: "https://linkedin.com/in/sanduf01"
            },
            {
              title: "GitHub",
              value: "github.com/sanduf01",
              icon: FaGithub,
              link: "https://github.com/sanduf01"
            }
          ].map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-yellowBrand/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-yellowBrand/10 block"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-yellowBrand/10 rounded-full group-hover:bg-yellowBrand/20 transition-colors duration-300">
                  <contact.icon className="w-8 h-8 text-yellowBrand" />
                </div>
              </div>

              {/* Contact Title */}
              <h3 className="text-xl font-bold text-white text-center mb-2 group-hover:text-yellowBrand transition-colors">
                {contact.title}
              </h3>

              {/* Contact Value */}
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                {contact.value}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellowBrand/0 via-yellowBrand/5 to-yellowBrand/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </section>

    </main>
  );
}