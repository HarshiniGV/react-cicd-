import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showInventoryModal, setShowInventoryModal] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Portfolio</h1>
          <ul className="nav-menu">
            <li><button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button></li>
            <li><button onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Internship</button></li>
            <li><button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Harshini G Venkatesh</span></h1>
<h2>Aspiring Cloud & DevOps Engineer | Full Stack Developer</h2>
<p>
  Final-year <strong>Computer Science</strong> student at <strong>DSCE</strong>, with hands-on internship experience
  in <strong>Cloud Observability</strong> at <strong>OLA – Krutrim</strong>, building scalable, reliable,
  and production-grade systems.
</p>

          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn-primary">View My Work</button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">Get In Touch</button>
          </div>
        </div>
      </section>

      {/* About Section */}
     <section id="about" className="about">
  <div className="container">
    <h2>About Me</h2>
    <div className="about-content">
      <div className="about-text">
        <p>
        Aspiring SRE / Cloud / DevOps Engineer, open to Java (backend) roles
 and a final-year Computer Science
          student at DSCE, with hands-on internship experience in cloud observability
          at OLA – Krutrim.
        </p>
        <p>
          I enjoy working on scalable systems, monitoring platforms, containerized
          deployments, and backend services, and I’m keen on building reliable,
          production-grade infrastructure.
        </p>
      </div>

      <div className="about-image">
        <img
          src="src\assets\Harshini.jpeg"
          alt="Harshini G Venkatesh"
          className="profile-image"
        />
      </div>
    </div>
  </div>
</section>
{/* Internship Experience Section */}
{/* Internship / Experience Section */}
<section id="experience" className="experience">
  <div className="container">
    <h2>Internship Experience</h2>

    <div className="experience-card">
      {/* Header with company, duration, and certificate link */}
      <div className="experience-header">
        <h3>OLA – Krutrim</h3>
        <p className="experience-duration">
          May 2025 – Nov 2025 (On-site)
          <a
            href="https://drive.google.com/file/d/1jc6sTReGTXGYGWLidxSlyBEifygNYNSr/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-link"
          >
            

            &nbsp;&nbsp;&nbsp;&nbsp;
            View Certificate
          </a>
        </p>
        <p className="role">Intern</p>
      </div>

      {/* Experience points */}
      <ul className="experience-points">
        <li>
          Implemented <strong>metrics observability</strong> using <strong>Prometheus</strong> and
          <strong> Grafana</strong>, developing dashboards to track system health, performance, and
          resource utilization.
        </li>
        <li>
          Enabled <strong>Slack-based alerting</strong> from Grafana to proactively notify operational
          issues and improve incident response time.
        </li>
        <li>
          Configured <strong>VM Agent stream aggregation</strong> for centralized metrics ingestion,
          increasing <strong>metrics retention from 5 days to 14 days</strong> and supporting
          long-term analysis.
        </li>
        <li>
          <strong>Containerized</strong> and deployed services on <strong>Kubernetes</strong>,
          contributing to scalable, fault-tolerant, and maintainable infrastructure.
        </li>
        <li>
          Developed a secure internal web portal using <strong>Next.js, Tailwind CSS, TypeScript, and FastAPI</strong>,
          integrating <strong>Keycloak</strong> authentication with <strong>RBAC</strong> and session management for internal access control.
        </li>
      </ul>
    </div>
  </div>
</section>


      {/* Skills Section
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">TypeScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
   {/* Projects Section */}
   {/* Projects Section */}
<section id="projects" className="projects">
  <div className="container">
    <h2>My Projects</h2>
    <div className="projects-grid">

      {/* Project 1 */}
      <div className="project-card">
        <div className="project-content">
          <h3>
            Event-Driven Inventory Management System <span className="project-type">(DevOps + Predictive Analytics)</span>
          </h3>
          <p className="project-desc">
            A scalable inventory management system combining <strong>real-time event streaming</strong>, <strong>AI-based demand forecasting</strong>, and <strong>automated alerts</strong>.
          </p>
          <div className="project-buttons">
            <a
              href="https://github.com/HarshiniGV/inventory-management"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              GitHub
            </a>
            <button
              className="btn-small secondary"
              onClick={() => setShowInventoryModal(true)}
            >
              View Outputs
            </button>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <div className="project-content">
          <h3>
            Personal Portfolio Website <span className="project-type">(DevOps + Frontend)</span>
          </h3>
          <p className="project-desc">
            My own portfolio showcasing projects, internship experience, and contact info. Deployed automatically with <strong>GitHub Actions → GitHub Pages</strong>.
          </p>
          <div className="project-buttons">
            <a
              href="https://your-portfolio-url.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/HarshiniGV/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-small secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

    </div>

    {/* Modal for Project 1 Outputs */}
    {showInventoryModal && (
      <div className="modal-overlay" onClick={() => setShowInventoryModal(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setShowInventoryModal(false)}>
            ×
          </button>
          <h2>AI-Enhanced Event-Driven Inventory Management System</h2>
          <p>
            This project implements an end-to-end <strong>inventory management system</strong> combining
            <strong> real-time event streaming</strong>, <strong>AI-based demand forecasting</strong>, and
            <strong> automated alerts</strong>.
          </p>

          <h3>📌 Features</h3>
          <ul>
            <li><strong>Demand Forecasting (Prophet):</strong> Forecasts minimum stock (7 days) and restock quantity (60 days) via weekly CRON jobs.</li>
            <li><strong>Event-Driven Architecture (Kafka):</strong> Producer generates BUY/SELL events, consumer updates PostgreSQL in real-time.</li>
            <li><strong>Big Data Storage (Hadoop):</strong> Stores historical sales data for large-scale analysis and forecasting.</li>
            <li><strong>Operational Database (PostgreSQL):</strong> Maintains current inventory and prediction data.</li>
            <li><strong>Automated Slack Alerts:</strong> Low-stock notifications via webhooks.</li>
            <li><strong>Metabase Dashboard:</strong> Visualizes stock levels, trends, and predictions.</li>
          </ul>

          <h3>🧰 Tech Stack</h3>
          <p>Kafka, Hadoop, PostgreSQL, Prophet, Slack Webhooks, Metabase, Python, CRON</p>

          {/* Example: Images */}
          <div className="project-images">
            <figure>
              <img src="src/assets/architecture.png" alt="Architecture" />
              <figcaption>System Architecture</figcaption>
            </figure>
            <figure>
              <img src="src/assets/prediction.jpeg" alt="Predictions" />
              <figcaption>Prophet Forecast Predictions</figcaption>
            </figure>
            <figure>
              <img src="src/assets/producer.jpeg" alt="Kafka Producer" />
              <figcaption>Kafka Producer Events</figcaption>
            </figure>
            <figure>
              <img src="src/assets/Slackalerts.jpeg" alt="Slack Alerts" />
              <figcaption>Slack Low-Stock Alerts</figcaption>
            </figure>
            <figure>
              <img src="src/assets/MetaBase.jpeg" alt="Metabase Dashboard" />
              <figcaption>Metabase Dashboard</figcaption>
            </figure>
          </div>


        </div>
      </div>
    )}
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>I'm always interested in new opportunities and collaborations. Let's connect!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>harshinigvenkatesh6@gmail.com</span>
                </div>
            
                <div className="contact-item">
  <span className="contact-icon">📍</span>
  <span>Bengaluru, India (Open to relocating to Hyderabad)</span>
</div>

              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Harshini G Venkatesh. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/HarshiniGV" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/harshini-g-venkatesh/" className="social-link">LinkedIn</a>
           
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
