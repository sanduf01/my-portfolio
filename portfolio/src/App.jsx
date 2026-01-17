import { motion } from "framer-motion";

export default function App() {
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
            <h1>Empowering Businesses Through Innovative Software Solutions</h1>
            <p className="subtext">
              As a skilled software engineer, I deliver cutting-edge web applications and digital strategies to drive growth and success for your enterprise.
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
              <img src="https://via.placeholder.com/400x500/cccccc/000000?text=Portrait" alt="Sanduni Fernando" className="portrait" />
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
          <span>Top 3 out of 180 (EduNET)</span>
          <ul>
            <li>Assisted in teaching C and Python</li>
            <li>Created and improved Linux & FOSS content</li>
            <li>Supported undergraduate IT learners</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <h2>Projects</h2>
        <div className="grid">
          <div className="card">Project 1 – React</div>
          <div className="card">Project 2 – Node</div>
          <div className="card">Project 3 – Linux</div>
        </div>
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