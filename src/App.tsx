import "./App.css";
import StatCard from "./components/StatCard";
import TechBadge from "./components/TechBadge";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="hero-section animate-fade-in">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <i className="fas fa-user-tie text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl font-bold mb-4">Thanush Praveen</h1>
            <p className="text-xl mb-2 opacity-90">
              Full-Stack React Developer | MERN | AWS | Web3
            </p>
            <p className="text-lg opacity-75 mb-6">
              Chennai, India | praveen.thanush@gmail.com | +91-7708558146
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/thanush-praveen/"
                className="social-link"
              >
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <a
                href="/Thanush_Praveen_Resume.pdf"
                className="resume-btn"
                download
              >
                <i className="fas fa-download"></i>
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-grid animate-fade-in">
          <StatCard number="7+" label="Years Experience" />
          <StatCard number="20+" label="Projects Completed" />
          <StatCard number="15+" label="Technologies" />
          <StatCard number="100%" label="Client Satisfaction" />
          <StatCard number="50+" label="Happy Clients" />
        </section>

        {/* About Section */}
        <section className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 section-title">About Me</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm a{" "}
              <span className="font-semibold text-blue-600">
                Full-Stack React Developer
              </span>{" "}
              with 7+ years of experience building scalable, high-performance
              web applications using the MERN stack, AWS, and Web3. I specialize
              in reusable front-end architecture, clean code, and cloud-native
              deployment. I'm passionate about creating user-focused products
              that solve real business problems.
            </p>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 section-title">Tech Stack</h2>
          <div className="tech-stack-simple">
            <div className="tech-stack-grid-simple">
              {/* Frontend Technologies */}
              <div className="tech-category-simple">
                <h3 className="tech-category-title-simple">
                  <i className="fas fa-desktop mr-2 text-blue-600"></i>Frontend
                </h3>
                <div className="tech-badges-container-simple">
                  <TechBadge
                    icon="fab fa-react"
                    label="React (JS & TS)"
                    category="frontend"
                  />
                  <TechBadge
                    icon="fas fa-code"
                    label="Redux, Next.js"
                    category="frontend"
                  />
                  <TechBadge
                    icon="fab fa-html5"
                    label="HTML5, CSS3"
                    category="frontend"
                  />
                  <TechBadge
                    icon="fab fa-js"
                    label="JavaScript, TypeScript"
                    category="frontend"
                  />
                </div>
              </div>

              {/* Backend Technologies */}
              <div className="tech-category-simple">
                <h3 className="tech-category-title-simple">
                  <i className="fas fa-server mr-2 text-green-600"></i>Backend
                </h3>
                <div className="tech-badges-container-simple">
                  <TechBadge
                    icon="fab fa-node-js"
                    label="Node.js, Express"
                    category="backend"
                  />
                  <TechBadge
                    icon="fas fa-server"
                    label="NestJS"
                    category="backend"
                  />
                  <TechBadge
                    icon="fas fa-code"
                    label="REST APIs"
                    category="backend"
                  />
                  <TechBadge
                    icon="fas fa-cube"
                    label="Strapi CMS"
                    category="backend"
                  />
                </div>
              </div>

              {/* Database & Storage */}
              <div className="tech-category-simple">
                <h3 className="tech-category-title-simple">
                  <i className="fas fa-database mr-2 text-purple-600"></i>
                  Database
                </h3>
                <div className="tech-badges-container-simple">
                  <TechBadge
                    icon="fas fa-database"
                    label="MongoDB, SQL"
                    category="database"
                  />
                  <TechBadge
                    icon="fas fa-cloud"
                    label="DynamoDB"
                    category="database"
                  />
                  <TechBadge
                    icon="fas fa-hdd"
                    label="S3 Storage"
                    category="database"
                  />
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="tech-category-simple">
                <h3 className="tech-category-title-simple">
                  <i className="fab fa-aws mr-2 text-orange-600"></i>Cloud &
                  DevOps
                </h3>
                <div className="tech-badges-container-simple">
                  <TechBadge
                    icon="fab fa-aws"
                    label="AWS (EC2, ECS, Lambda)"
                    category="cloud"
                  />
                  <TechBadge
                    icon="fas fa-cloud"
                    label="Amplify"
                    category="cloud"
                  />
                  <TechBadge
                    icon="fas fa-code-branch"
                    label="CI/CD"
                    category="devops"
                  />
                  <TechBadge
                    icon="fab fa-docker"
                    label="Docker"
                    category="devops"
                  />
                </div>
              </div>

              {/* Web3 & Testing */}
              <div className="tech-category-simple">
                <h3 className="tech-category-title-simple">
                  <i className="fas fa-cube mr-2 text-indigo-600"></i>Web3 &
                  Testing
                </h3>
                <div className="tech-badges-container-simple">
                  <TechBadge
                    icon="fas fa-cube"
                    label="Web3, Blockchain"
                    category="testing"
                  />
                  <TechBadge
                    icon="fas fa-ethereum"
                    label="Solidity"
                    category="testing"
                  />
                  <TechBadge
                    icon="fas fa-vial"
                    label="Jest, Testing Library"
                    category="testing"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 section-title">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="GIANT Protocol"
              description="Led the development of a decentralized platform rewarding users with crypto via eSIM activations. Integrated Polkadot contracts and built a scalable backend with DynamoDB, S3, and Strapi CMS."
              icon="fas fa-cube"
              gradientClass="bg-gradient-to-r from-purple-500 to-pink-500"
            />

            <ProjectCard
              title="Yearn Together"
              description="Developed a gamified DAO platform encouraging community participation through React and Node.js with Web3 integration. Streamlined CI/CD with AWS CodePipeline."
              icon="fas fa-users"
              gradientClass="bg-gradient-to-r from-blue-500 to-cyan-500"
            />

            <ProjectCard
              title="Bilic Verify"
              description="Created a full-stack background verification platform with a React frontend and Node backend. Achieved 40% performance improvement. Managed AWS DevOps (EC2, ECS, CodePipeline)."
              icon="fas fa-shield-alt"
              gradientClass="bg-gradient-to-r from-green-500 to-emerald-500"
            />

            <ProjectCard
              title="Academic Publishing Platform"
              description="Built an academic content platform for journals and books with advanced search, citation tools, and personalization. Improved UX and developer standards through code reviews."
              icon="fas fa-book"
              gradientClass="bg-gradient-to-r from-orange-500 to-red-500"
            />

            <ProjectCard
              title="CAMBI Loyalty Program"
              description="Implemented a scalable loyalty system with gift cards and push notifications. Used AWS Lambda and DynamoDB for serverless operations."
              icon="fas fa-gift"
              gradientClass="bg-gradient-to-r from-indigo-500 to-purple-500"
              fullWidth={true}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
