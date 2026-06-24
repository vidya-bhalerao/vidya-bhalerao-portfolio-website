import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">

        <h1>Vidya Bhalerao</h1>

        <h2>Software Developer | BSc IT Graduate</h2>

        <p className="intro">
          Motivated BSc IT graduate with a strong foundation in
          software development and programming. Skilled in React.js,
          JavaScript, Node.js, Express.js, MongoDB, Java, Python,
          HTML, CSS, and SQL. Passionate about building modern web
          applications and contributing to impactful software
          solutions.
        </p>

        <div className="section">
          <h2>Projects</h2>

          <div className="project-card">
            <h3>Smart EMI Calculator</h3>

            <p>
              A React-based EMI Calculator that calculates monthly EMI,
              total interest payable, and total repayment amount instantly.
            </p>

            <a
              href="https://smart-emi-calculator-plum.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              🚀 Live Demo
            </a>

            <a
              href="https://github.com/vidya-bhalerao/smart--emi-calculator"
              target="_blank"
              rel="noreferrer"
            >
              📂 GitHub Repository
            </a>
          </div>

          <div className="project-card">
            <h3>E-Commerce Website</h3>

            <p>
              Responsive e-commerce website built using React.js with
              product filtering and shopping cart functionality.
            </p>

            <a
              href="https://vidya-bhalerao.github.io/ecommerce-website-react/"
              target="_blank"
              rel="noreferrer"
            >
              🚀 Live Demo
            </a>

            <a
              href="https://github.com/vidya-bhalerao/ecommerce-website-react"
              target="_blank"
              rel="noreferrer"
            >
              📂 GitHub Repository
            </a>
          </div>

          <div className="project-card">
            <h3>Full Stack Task Manager</h3>

            <p>
              Full-stack task management application with authentication,
              protected routes, CRUD operations, and responsive dashboard UI.
            </p>

            <a
              href="https://github.com/vidya-bhalerao/primetrade-frontend-intern-assignment"
              target="_blank"
              rel="noreferrer"
            >
              📂 GitHub Repository
            </a>
          </div>
        </div>

        <div className="section">
          <h2>Technical Skills</h2>

          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div className="section">
          <h2>Contact</h2>

          <p>
            📧 Email: vidyabhalerao20@gmail.com
          </p>

          <p>
            📍 Mumbai, India
          </p>

          <a
            href="https://www.linkedin.com/in/vidya-bhalerao-1a966b253"
            target="_blank"
            rel="noreferrer"
          >
            🔗 LinkedIn Profile
          </a>

          <br />
          <br />

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            📄 Download Resume
          </a>
        </div>

      </div>
    </div>
  );
}

export default App;