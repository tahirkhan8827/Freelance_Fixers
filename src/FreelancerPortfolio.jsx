import React, { useState } from 'react';
import './App.css';

const FreelancerPortfolio = () => {
  // Sample projects data
  const [projects] = useState([
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with payment integration and admin dashboard.",
      image: "https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+Project",
      link: "https://example.com/ecommerce",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Healthcare App",
      description: "A mobile application for patients to book appointments and consult with doctors online.",
      image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Healthcare+App",
      link: "https://example.com/healthcare",
      technologies: ["React Native", "Firebase", "Redux"]
    },
    {
      id: 3,
      title: "Business Dashboard",
      description: "Analytics dashboard for businesses to track their performance metrics in real-time.",
      image: "https://via.placeholder.com/400x250/f97316/ffffff?text=Business+Dashboard",
      link: "https://example.com/dashboard",
      technologies: ["React", "D3.js", "Express"]
    }
  ]);

  // Pricing tiers based on technology
  const [pricingTiers] = useState([
{
name: "Static Website (Basic)",
price: "₹10,000",
technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
features: [
"Responsive Design",
"Up to 5 Pages",
"Contact Form",
"Basic SEO Setup",
"1 Month Free Support"
]
},
{
name: "ReactJS Frontend (Static)",
price: "₹18,000",
technologies: ["React.js", "JavaScript", "CSS", "Bootstrap"],
features: [
"Single Page Application",
"Fast & Optimized Performance",
"Reusable Components",
"Modern UI/UX Design",
"1 Month Free Support"
]
},
{
name: "Dynamic Website (Django)",
price: "₹35,000",
technologies: ["HTML", "CSS", "JavaScript", "Python Django"],
features: [
"Database Integration",
"User Authentication",
"Admin Panel",
"Dynamic Content Management",
"3 Months Free Support"
]
},
{
name: "Full Stack Website (React + Django)",
price: "₹50,000",
technologies: ["React.js", "Python Django", "REST API", "PostgreSQL"],
features: [
"Modern UI with React",
"Backend with Django",
"API Integration",
"Authentication & Authorization",
"6 Months Free Support"
]
},
{
name: "Full Stack Website (React + Node.js)",
price: "₹55,000",
technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
features: [
"Scalable Architecture",
"API Development",
"Real-Time Features (WebSocket)",
"Authentication System",
"6 Months Free Support"
]
}
]);

  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="portfolio-container">
      {/* Floating WhatsApp and Call Buttons */}
<div className="floating-container">
  <div className="floating-btn">
    <i class="fa-regular fa-bell"></i>
  </div>
  <div className="floating-btns">
    <a 
      href="https://wa.me/917240811936" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-btn"
      data-tooltip="Message on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
    <a 
      href="tel:+917240811936" 
      className="call-btn"
      data-tooltip="Call Now"
    >
      <i className="fas fa-phone"></i>
    </a>
  </div>
</div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-heading">
            <div className="logo">
            <img src="freelancelogo.jpg" alt="" style={{width:'100%'}} />
          </div>
          <div className="logo-name">
            <h1>Freelance Fixers</h1>
          </div>
          </div>
          <nav className="nav">
            <button 
              className={activeTab === 'projects' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button 
              className={activeTab === 'pricing' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setActiveTab('pricing')}
            >
              Pricing
            </button>
            <button 
              className={activeTab === 'contact' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setActiveTab('contact')}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Full Stack Developer & UI/UX Designer</h2>
            <p>I create beautiful, functional websites and applications that help businesses grow</p>
            <a href='http://github.com/tahirkhan8827/' target='_blank' className="cta-button">View My Work</a>
          </div>
          {/* <div className="hero-image">
            <img src="https://via.placeholder.com/400x400/6366f1/ffffff?text=Profile" alt="Freelancer" />
          </div> */}
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Projects Section */}
          {activeTab === 'projects' && (
            <section className="projects-section">
              <h2>Featured Projects</h2>
              <div className="projects-grid">
                {projects.map(project => (
                  <div key={project.id} className="project-card">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="technologies">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Pricing Section */}
          {activeTab === 'pricing' && (
            <section className="pricing-section">
              <h2>Website Development Packages</h2>
              <div className="pricing-cards">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className="pricing-card">
                    <h3>{tier.name}</h3>
                    <div className="price">{tier.price}</div>
                    <div className="technologies">
                      <h4>Technologies:</h4>
                      <ul>
                        {tier.technologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="features">
                      <h4>Includes:</h4>
                      <ul>
                        {tier.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <button className="plan-button">Select Plan</button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contact Section */}
          {activeTab === 'contact' && (
            <section className="contact-section">
              <h2>Get In Touch</h2>
              <div className="contact-content">
                <div className="contact-info">
                  <h3>Let's discuss your project</h3>
                  <p>Feel free to reach out for project inquiries, collaboration, or just to say hello!</p>
                  <div className="contact-details">
                    <p><strong>Email:</strong> fixersfreelance@gmail.com</p>
                    <p><strong>Phone:</strong> +91 72408 11936</p>
                    <p><strong>Location:</strong> Mumbai, India</p>
                  </div>
                </div>
                <form className="contact-form">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Freelance Fixers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FreelancerPortfolio;