import "./App.css";
import profileImage from "../src/assets/profile.jpeg";

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        color: "white",
        height: "100vh",
        overflowX: "hidden", // ✅ prevent horizontal scroll
        width: "100vw",
      }}
    >
      {/* Profile Card */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "rgba(0, 0, 0, 0.8)",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
          maxWidth: "900px",
          margin: "0 auto 40px auto", // ✅ centers card
          overflowY: "auto", 
        }}
      >
        <img
          src={profileImage}
          alt="Profile"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #fff",
            marginRight: "25px",
          }}
        />
        <div>
          <h1 style={{ margin: "0 0 10px", fontSize: "2.2rem" }}>
            Hi 👋, I'm Sriram
          </h1>
          <h2
            style={{
              margin: "0 0 15px",
              fontSize: "1.2rem",
              fontWeight: "400",
              color: "#aaa",
            }}
          >
            🚀 Technical Lead | Mobile App Architect | AI Enthusiast
          </h2>
          <p style={{ lineHeight: "1.6", fontSize: "1rem", color: "#ddd" }}>
            With 9+ years of experience designing, developing, and leading
            high-impact mobile & cross-platform applications across e-commerce,
            logistics, and social impact domains.
          </p>

          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <a
              href="https://github.com/ssrirams"
              target="_blank"
              rel="noreferrer"
              style={buttonStyle("#4CAF50")}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sriram-subramani"
              target="_blank"
              rel="noreferrer"
              style={buttonStyle("#0077b5")}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center", // ✅ center content
        }}
      >
        <Section title="🔭 Current Role">
          <ul style={{ textAlign: "left", display: "inline-block" }}>
            <li>
              <strong>Technical Lead</strong> at <em>SmartBizz by Amazon</em> —
              driving scalable, high-performance mobile solutions.
            </li>
          </ul>
        </Section>

        <Section title="🌱 Currently Learning">
          <ul style={{ textAlign: "left", display: "inline-block" }}>
            <li>
              <b>AI/ML & Data Science:</b> NumPy, Pandas, Matplotlib,
              Scikit-learn, TensorFlow, PyTorch
            </li>
            <li>
              <b>NLP & Generative AI:</b> Transformers, Sentiment Analysis,
              Chatbots, LLMs, Prompt Engineering
            </li>
            <li>
              <b>AI + Mobile Integration:</b> LangChain, Hugging Face, OpenAI API
            </li>
          </ul>
        </Section>

        <Section title="🏆 Career Highlights">
          <ul style={{ textAlign: "left", display: "inline-block" }}>
            <li>Architected and deployed <b>10+ large-scale mobile apps</b>.</li>
            <li>Led <b>Agile teams</b> of 6–12 developers.</li>
            <li>Expert in <b>React Native, NativeScript, Android, iOS</b>.</li>
            <li>Reduced app load time by <b>30%</b>.</li>
            <li>Integrated <b>AI/ML features</b> into apps.</li>
          </ul>
        </Section>

        <Section title="📊 GitHub Stats">
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=ssrirams&show_icons=true&locale=en&layout=compact"
              alt="Top Languages"
              style={{ maxWidth: "100%" }}
            />
            <img
              src="https://github-readme-stats.vercel.app/api?username=ssrirams&show_icons=true&locale=en"
              alt="GitHub Stats"
              style={{ maxWidth: "100%" }}
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=ssrirams"
              alt="GitHub Streak"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </Section>
      </div>
    </div>
  );
}

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "40px" }}>
    <h2 style={{ marginBottom: "15px", borderBottom: "2px solid #555" }}>
      {title}
    </h2>
    <div style={{ lineHeight: "1.6" }}>{children}</div>
  </div>
);

const buttonStyle = (bg) => ({
  padding: "10px 18px",
  background: bg,
  borderRadius: "10px",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "0.3s",
});

export default App;
