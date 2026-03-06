import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaPhp,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCalendarAlt,
  FaUserCircle,
  FaCode
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Smart O/L ICT",
    category: "Fullstack",
    description: "Gamified e-learning platform with authentication, quizzes, leaderboards, progress tracking, REST APIs. (Full-Stack Group Project, 2025 – Present)",
    fullDescription: "A comprehensive gamified e-learning platform designed to help students prepare for their O/L ICT examinations. Features include secure authentication system, interactive quizzes with real-time feedback, leaderboards to encourage healthy competition, progress tracking for both students and administrators, and RESTful APIs for seamless integration. Built as a collaborative full-stack group project.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Bootstrap"],
    role: "Full-Stack Development",
    image: "/projects/SmartOLICT.png",
    link: "",
    features: [
      "User authentication with JWT",
      "Interactive quiz system with multiple question types",
      "Leaderboard system with real-time updates",
      "Progress tracking and analytics dashboard",
      "RESTful API architecture",
      "Responsive design for all devices"
    ]
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    category: "Frontend",
    description: "Responsive portfolio with animations and optimized performance. (Jan 2026)",
    fullDescription: "A modern, responsive personal portfolio website showcasing skills, projects, and experience. Built with React and Tailwind CSS, featuring smooth animations powered by Framer Motion, optimized performance, and a clean professional design that highlights my work as a software engineering undergraduate.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    role: "Frontend Development",
    image: "/projects/Portfolio.png",
    link: "https://github.com/sanduf01/my-portfolio.git",
    features: [
      "Responsive design for all screen sizes",
      "Smooth animations and transitions",
      "Optimized performance",
      "Interactive skill showcase",
      "Project portfolio gallery",
      "Contact form integration"
    ]
  },
  {
    id: 3,
    title: "University Management System",
    category: "Backend",
    description: "Console-based CRUD system for student/course records. (Jan 2026)",
    fullDescription: "A robust console-based University Management System implementing CRUD operations for managing student and course records. Built with Java using Hibernate ORM and Maven for dependency management, with MySQL as the database backend.",
    technologies: ["Java", "Hibernate", "Maven", "MySQL"],
    role: "Backend Development",
    image: "/projects/UMS.png",
    link: "",
    features: [
      "Student record management",
      "Course enrollment system",
      "Grade management",
      "MySQL database integration",
      "Object-relational mapping with Hibernate",
      "Maven build configuration"
    ]
  },
  {
    id: 4,
    title: "Hospital Management System (SQL)",
    category: "Other",
    description: "Views, triggers, procedures, functions for patient/staff data; automated inventory updates. (Dec 2025)",
    fullDescription: "A comprehensive database management system for hospital operations. Implements advanced SQL features including views, triggers, stored procedures, and functions to manage patient records, staff information, and automated inventory updates.",
    technologies: ["SQL", "MySQL"],
    role: "Database Development",
    image: "/projects/HMS.png",
    link: "",
    features: [
      "Patient record management",
      "Staff information system",
      "Automated inventory tracking",
      "Complex SQL queries and views",
      "Trigger-based automation",
      "Stored procedures for common operations"
    ]
  },
  {
    id: 5,
    title: "GN QuickCheck",
    category: "Other Projects",
    description: "Designed platform for accessibility and efficiency of Grama Niladhari services. (Group Mini Project, Oct 2025)",
    fullDescription: "A UX/UI design project focused on improving the accessibility and efficiency of Grama Niladhari (village officer) services in Sri Lanka. Created using Figma with comprehensive UX/HCI methodology research and implementation.",
    technologies: ["Figma", "UX/HCI Methods"],
    role: "UX/UI Design",
    image: "/projects/GNQuickCheck.png",
    link: "https://github.com/sanduf01/GN-QuickCheck.git",
    features: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Accessibility-focused design",
      "User flow optimization",
      "Interactive prototypes",
      "Usability testing"
    ]
  },
  {
    id: 6,
    title: "Citizen Complaint Management System (CCMS)",
    category: "Other Projects",
    description: "Authored IEEE-standard SRS with secure authentication and role-based workflows. (Jul 2025)",
    fullDescription: "A comprehensive software requirements specification document following IEEE standards for a Citizen Complaint Management System. Includes secure authentication design and role-based workflow specifications for efficient complaint handling.",
    technologies: ["Software Requirements"],
    role: "Requirements Engineering",
    image: "/projects/CCMS.png",
    link: "https://github.com/sanduf01/Citizen-Complaint-Management-System-CCMS-.git",
    features: [
      "IEEE-standard SRS documentation",
      "Secure authentication design",
      "Role-based access control",
      "Workflow specification",
      "Use case modeling",
      "Requirements traceability"
    ]
  },
  {
    id: 7,
    title: "Data Analysis & Programming Lab (Python)",
    category: "Other Projects",
    description: "Data cleaning, visualization, structured programming for insights. (Jun 2025)",
    fullDescription: "A comprehensive data analysis project using Python with Jupyter Notebook. Includes data cleaning, preprocessing, visualization, and structured programming techniques to extract meaningful insights from datasets.",
    technologies: ["Jupyter Notebook", "Pandas", "NumPy", "Matplotlib"],
    role: "Data Analysis",
    image: "/projects/Datascience.png",
    link: "https://github.com/sanduf01/Data-Analysis-Programming-Lab-Python-.git",
    features: [
      "Data cleaning and preprocessing",
      "Statistical analysis",
      "Data visualization",
      "Pandas for data manipulation",
      "NumPy for numerical computing",
      "Matplotlib for charting"
    ]
  },
  {
    id: 8,
    title: "Amazing Colombo & Visit Colombo (QA Project)",
    category: "Other Projects",
    description: "QA test plans, manual test cases, load/performance/stress testing with Apache JMeter. (Jun 2025)",
    fullDescription: "A comprehensive quality assurance project for tourism websites. Includes detailed test plans, manual test cases, and performance testing using Apache JMeter to ensure website reliability under various load conditions.",
    technologies: ["Apache JMeter", "QA Tools"],
    role: "Quality Assurance",
    image: "/projects/AmazingC.png",
    link: "https://github.com/sanduf01/Amazing-Colombo-Visit-Colombo-QA-Project-.git",
    features: [
      "Test plan development",
      "Manual test case execution",
      "Load testing with JMeter",
      "Performance testing",
      "Stress testing",
      "Bug reporting and tracking"
    ]
  }
];

const iconMap = {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaPhp,
  FaGithub
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-yellow-400 hover:text-yellow-500">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 max-w-7xl w-full bg-black/90 backdrop-blur-[10px] z-[1000] rounded-b-2xl shadow-lg px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-yellow-400">Sanduni Fernando</div>
          <Link
            to="/#projects"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full no-underline font-semibold transition-colors duration-300 hover:bg-yellow-500 text-sm flex items-center gap-2"
          >
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* Category Badge */}
            <span className="inline-block px-4 py-1 bg-yellow-400/90 text-black text-sm font-semibold rounded-full mb-6">
              {project.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {project.title}
            </h1>

            {/* Role */}
            <div className="flex items-center gap-2 text-yellow-400 text-lg mb-6">
              <FaUserCircle />
              <span>{project.role}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              {/* Description */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Features */}
              {project.features && (
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                  <ul className="space-y-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Tech Stack */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaCode /> Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm rounded-full border border-yellow-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.link && project.link.startsWith('http') && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-300"
                    >
                      <FaGithub /> View on GitHub
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.link && project.link.startsWith('http') && (
                    <a
                      href={project.link.replace('github.com', 'github.com').replace('.git', '')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-transparent text-yellow-400 border-2 border-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {!project.link || !project.link.startsWith('http') ? (
                    <div className="text-center text-gray-400 text-sm py-2">
                      Source code not publicly available
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Project ID */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <p className="text-gray-400 text-sm">Project ID</p>
                <p className="text-yellow-400 text-2xl font-bold">#{project.id}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 backdrop-blur-[10px] border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Sanduni Fernando. All rights reserved.
            </p>
            <Link
              to="/#contact"
              className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
            >
              Get In Touch →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

