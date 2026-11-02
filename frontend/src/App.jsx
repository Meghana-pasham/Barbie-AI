import {
  Sparkles,
  Heart,
  Shirt,
  BookHeart,
  Users,
  Brain,
} from "lucide-react";

import "./App.css";

import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import DailyPlanner from "./pages/DailyPlanner";

function App() {

  // Onboarding page
  if (window.location.pathname === "/onboarding") {
    return <Onboarding />;
  }

  // Dashboard / Home page
  if (window.location.pathname === "/dashboard") {
    return <Dashboard />;
  }

  // Daily Planner / View My Day
  if (window.location.pathname === "/daily") {
    return <DailyPlanner />;
  }

  // Landing page
  return (
    <div className="app">

      {/* Navigation */}

      <nav className="navbar">

        <div className="logo">
          <span className="logo-star">✦</span>
          BARBIE AI
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#community">Community</a>
        </div>

        <button className="login-button">
          Login
        </button>

      </nav>


      {/* Hero Section */}

      <main>

        <section className="hero">

          <div className="hero-content">

            <div className="eyebrow">
              <Sparkles size={16} />
              Your feminine lifestyle companion
            </div>

            <h1>
              Become the girl
              <br />
              <span>you've always imagined.</span>
            </h1>

            <p>
              Discover your personal style, build beautiful habits,
              take care of yourself, express your feelings, and grow
              into the version of you that feels most authentic.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => {
                  window.location.href = "/onboarding";
                }}
              >
                Create Your Barbie DNA
                <Sparkles size={18} />
              </button>

              <button className="secondary-button">
                Explore the World
              </button>

            </div>

            <div className="hero-note">
              ✦ Personalized for you · Always evolving · Always you
            </div>

          </div>


          {/* Hero visual */}

          <div className="hero-visual">

            <div className="glow glow-one"></div>
            <div className="glow glow-two"></div>

            <div className="floating-card card-one">

              <Heart size={18} />

              <div>
                <strong>Self Love</strong>
                <span>Today's reminder</span>
              </div>

            </div>


            <div className="profile-card">

              <div className="profile-circle">
                🎀
              </div>

              <p className="profile-small">
                YOUR STYLE DNA
              </p>

              <h3>
                Soft Girl
              </h3>

              <div className="style-tags">
                <span>Coquette</span>
                <span>Clean Girl</span>
              </div>

              <div className="profile-line"></div>

              <div className="profile-stat">
                <span>Glow Up Progress</span>
                <strong>78%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

            </div>


            <div className="floating-card card-two">

              <Sparkles size={18} />

              <div>
                <strong>Today's Vibe</strong>
                <span>Soft & feminine ✨</span>
              </div>

            </div>

          </div>

        </section>


        {/* Feature Section */}

        <section
          className="features"
          id="features"
        >

          <div className="section-heading">

            <span>
              YOUR WORLD
            </span>

            <h2>
              Everything that makes
              <br />
              you, <em>you.</em>
            </h2>

            <p>
              One beautiful space for your style, wellness,
              habits, emotions, friendships and growth.
            </p>

          </div>


          <div className="feature-grid">

            <FeatureCard
              icon={<Shirt />}
              title="Style & Beauty"
              description="Discover outfits, makeup, hairstyles and aesthetics that fit your unique personality."
            />

            <FeatureCard
              icon={<Heart />}
              title="Self Care"
              description="Build skincare, haircare and self-care routines that actually fit your life."
            />

            <FeatureCard
              icon={<Sparkles />}
              title="Feminine Habits"
              description="Create beautiful daily rituals and track the little things that make you feel your best."
            />

            <FeatureCard
              icon={<BookHeart />}
              title="Your Journal"
              description="A private space for your thoughts, gratitude, dreams, moods and everything in between."
            />

            <FeatureCard
              icon={<Brain />}
              title="AI Feminine Coach"
              description="Your personalized AI companion for style, confidence, wellness and personal growth."
            />

            <FeatureCard
              icon={<Users />}
              title="Girl Community"
              description="Find your people, create private girl groups and grow together."
            />

          </div>

        </section>


        {/* Personality Section */}

        <section
          className="personality"
          id="about"
        >

          <div className="personality-text">

            <span>
              YOU DON'T HAVE TO FIT ONE BOX
            </span>

            <h2>
              Your personality is
              <br />
              <em>your aesthetic.</em>
            </h2>

            <p>
              Soft girl today? Baddie tomorrow? A little chaotic
              with a touch of coquette? You don't have to choose
              just one.
            </p>

            <button className="primary-button">
              Discover Your Style DNA
              <Sparkles size={18} />
            </button>

          </div>


          <div className="personality-bubbles">

            <div className="personality-bubble bubble-pink">
              🎀
              <span>Soft Girl</span>
            </div>

            <div className="personality-bubble bubble-dark">
              🖤
              <span>Baddie</span>
            </div>

            <div className="personality-bubble bubble-cream">
              🦢
              <span>Elegant</span>
            </div>

            <div className="personality-bubble bubble-lilac">
              🦋
              <span>Chaotic</span>
            </div>

            <div className="personality-bubble bubble-white">
              ✨
              <span>Clean Girl</span>
            </div>

            <div className="personality-bubble bubble-rose">
              🌹
              <span>Dark Feminine</span>
            </div>

          </div>

        </section>


        {/* Community Section */}

        <section
          className="community"
          id="community"
        >

          <div className="community-card">

            <div>

              <span>
                YOUR GIRLS. YOUR SPACE.
              </span>

              <h2>
                Find your people.
                <br />
                <em>Grow together.</em>
              </h2>

              <p>
                Create your own little corner of the internet.
                Invite your friends, make girl groups, share
                goals, chat, and do your glow-up together.
              </p>

              <button className="secondary-button">
                Explore Community
              </button>

            </div>


            <div className="friend-stack">

              <div>🎀</div>
              <div>🌸</div>
              <div>✨</div>
              <div>💗</div>
              <div>🦋</div>

            </div>

          </div>

        </section>

      </main>


      {/* Footer */}

      <footer>

        <div className="logo">
          <span className="logo-star">✦</span>
          BARBIE AI
        </div>

        <p>
          Made for every version of you. 🎀
        </p>

      </footer>

    </div>
  );
}


/* Feature Card */

function FeatureCard({
  icon,
  title,
  description,
}) {

  return (
    <div className="feature-card">

      <div className="feature-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      <span className="feature-arrow">
        ↗
      </span>

    </div>
  );
}


export default App;
