import {
  Sparkles,
  Heart,
  BookHeart,
  Check,
  ArrowRight,
  Sun,
  Droplets,
  Smile,
  Menu,
} from "lucide-react";
import { useEffect, useState } from "react";
import "../App.css";

function Dashboard() {
  const [profile, setProfile] = useState(null);

  const [completedHabits, setCompletedHabits] = useState(() => {
    const savedHabits = localStorage.getItem("completedHabits");

    return savedHabits
      ? JSON.parse(savedHabits)
      : [];
  });

  // Today's check-in comes from DailyPlanner.jsx
  const [todayCheckIn, setTodayCheckIn] = useState(() => {
    const savedCheckIn =
      localStorage.getItem("todayCheckIn");

    return savedCheckIn
      ? JSON.parse(savedCheckIn)
      : {
          mood: "",
          energy: "",
          availableTime: "",
          focus: [],
          rest: "",
        };
  });

  useEffect(() => {
    const savedProfile =
      localStorage.getItem("barbieProfile");

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "completedHabits",
      JSON.stringify(completedHabits)
    );
  }, [completedHabits]);

  /*
    Refresh the check-in whenever the Dashboard
    becomes visible again.

    This means:
    Daily Planner → Save → Dashboard
    will show the newly selected mood.
  */
  useEffect(() => {
    const loadCheckIn = () => {
      const savedCheckIn =
        localStorage.getItem("todayCheckIn");

      if (savedCheckIn) {
        setTodayCheckIn(
          JSON.parse(savedCheckIn)
        );
      }
    };

    window.addEventListener(
      "focus",
      loadCheckIn
    );

    window.addEventListener(
      "storage",
      loadCheckIn
    );

    return () => {
      window.removeEventListener(
        "focus",
        loadCheckIn
      );

      window.removeEventListener(
        "storage",
        loadCheckIn
      );
    };
  }, []);

  const toggleHabit = (habit) => {
    setCompletedHabits((previous) =>
      previous.includes(habit)
        ? previous.filter(
            (item) => item !== habit
          )
        : [...previous, habit]
    );
  };

  const goToDailyPlanner = () => {
    window.location.href = "/daily";
  };

  if (!profile) {
    return (
      <div className="dashboard-loading">
        <Sparkles size={30} />
        <p>Preparing your Barbie world...</p>
      </div>
    );
  }

  const firstName =
    profile.name || "Girl";

  const personality =
    profile.personalities?.[0] ||
    "Unique Girl";

  const goals =
    profile.goals || [];

  const glowScore = Math.round(
    (completedHabits.length / 4) * 100
  );

  return (
    <div className="dashboard">

      {/* SIDEBAR */}

      <aside className="dashboard-sidebar">

        <div className="dashboard-logo">
          <span>✦</span>
          BARBIE AI
        </div>

        <nav className="dashboard-nav">

          <a className="active">
            <Sparkles size={18} />
            Home
          </a>

          <a>
            <Heart size={18} />
            Glow
          </a>

          <a>
            <span>👗</span>
            Style
          </a>

          <a>
            <span>🌸</span>
            Self Care
          </a>

          <a>
            <BookHeart size={18} />
            Journal
          </a>

          <a>
            <span>🎯</span>
            Habits
          </a>

          <a>
            <span>👭</span>
            Community
          </a>

          <a>
            <span>🤖</span>
            AI Coach
          </a>

        </nav>

        <div className="sidebar-bottom">

          <div className="sidebar-profile">

            <div className="mini-avatar">
              🎀
            </div>

            <div>
              <strong>
                {firstName}
              </strong>

              <span>
                {personality}
              </span>
            </div>

          </div>

        </div>

      </aside>

      {/* MAIN */}

      <main className="dashboard-main">

        {/* TOP BAR */}

        <header className="dashboard-header">

          <button className="mobile-menu">
            <Menu />
          </button>

          <div>

            <p className="dashboard-date">
              MONDAY · AUGUST 31
            </p>

            <h1>
              Good morning{" "}
              <em>
                {firstName}.
              </em>{" "}
              🎀
            </h1>

          </div>

          <div className="header-actions">

            <button className="notification-button">
              ♡
            </button>

            <div className="header-avatar">
              🎀
            </div>

          </div>

        </header>

        {/* HERO */}

        <section className="dashboard-hero">

          <div>

            <span className="dashboard-eyebrow">
              ✦ YOUR DAILY VIBE
            </span>

            <h2>
              Soft, feminine
              <br />
              & a little{" "}
              <em>magical.</em>
            </h2>

            <p>
              Here's your personalized
              little plan for becoming the
              girl you want to be.
            </p>

            <button
              className="dashboard-primary"
              onClick={
                goToDailyPlanner
              }
            >
              View My Day
              <ArrowRight size={17} />
            </button>

          </div>

          <div className="hero-orbit">

            <div className="orbit-main">
              🎀
            </div>

            <div className="orbit-small one">
              ✨
            </div>

            <div className="orbit-small two">
              🌸
            </div>

            <div className="orbit-small three">
              💗
            </div>

          </div>

        </section>

        {/* QUICK STATS */}

        <section className="dashboard-stats">

          {/* STREAK */}

          <div className="stat-card">

            <div className="stat-icon">
              🔥
            </div>

            <div>

              <span>
                Current Streak
              </span>

              <strong>
                {completedHabits.length > 0
                  ? "1 day"
                  : "0 days"}
              </strong>

            </div>

          </div>

          {/* GLOW SCORE */}

          <div className="stat-card">

            <div className="stat-icon">
              ✨
            </div>

            <div>

              <span>
                Glow Score
              </span>

              <strong>
                {glowScore}%
              </strong>

            </div>

          </div>

          {/* TODAY'S MOOD */}

          <button
            className="stat-card mood-stat-card"
            onClick={
              goToDailyPlanner
            }
          >

            <div className="stat-icon">
              🌷
            </div>

            <div className="mood-stat-content">

              <span>
                Today's Mood
              </span>

              <strong
                className={
                  todayCheckIn.mood
                    ? "mood-selected"
                    : "mood-empty"
                }
              >
                {todayCheckIn.mood
                  ? getMoodDisplay(
                      todayCheckIn.mood
                    )
                  : "Check in →"}
              </strong>

            </div>

          </button>

        </section>

        {/* CONTENT GRID */}

        <section className="dashboard-grid">

          {/* DAILY HABITS */}

          <div className="dashboard-panel habits-panel">

            <div className="panel-heading">

              <div>

                <span>
                  YOUR DAILY RITUAL
                </span>

                <h3>
                  Little things,
                  big difference.
                </h3>

              </div>

              <span className="panel-count">
                {completedHabits.length}/4
              </span>

            </div>

            <div className="habit-progress">

              <div
                style={{
                  width: `${glowScore}%`,
                }}
              />

            </div>

            <div className="dashboard-habits">

              <DashboardHabit
                icon={
                  <Droplets size={17} />
                }
                title="Drink your water"
                subtitle="Stay hydrated"
                completed={completedHabits.includes(
                  "water"
                )}
                onClick={() =>
                  toggleHabit("water")
                }
              />

              <DashboardHabit
                icon={
                  <Sun size={17} />
                }
                title="Morning skincare"
                subtitle="Cleanse · Moisturize · SPF"
                completed={completedHabits.includes(
                  "skincare"
                )}
                onClick={() =>
                  toggleHabit("skincare")
                }
              />

              <DashboardHabit
                icon={
                  <BookHeart size={17} />
                }
                title="Journal for 10 minutes"
                subtitle="Check in with yourself"
                completed={completedHabits.includes(
                  "journal"
                )}
                onClick={() =>
                  toggleHabit("journal")
                }
              />

              <DashboardHabit
                icon={
                  <Smile size={17} />
                }
                title="Say one kind thing"
                subtitle="To yourself"
                completed={completedHabits.includes(
                  "selflove"
                )}
                onClick={() =>
                  toggleHabit("selflove")
                }
              />

            </div>

          </div>

          {/* BARBIE DNA */}

          <div className="dashboard-panel dna-preview">

            <div className="panel-heading">

              <div>

                <span>
                  YOUR IDENTITY
                </span>

                <h3>
                  Barbie DNA
                </h3>

              </div>

              <button className="small-arrow">
                →
              </button>

            </div>

            <div className="dna-preview-avatar">
              🎀
            </div>

            <h4>
              {personality}
            </h4>

            <p>
              Your personality shapes
              everything we recommend
              to you.
            </p>

            <div className="dashboard-tags">

              {profile.personalities
                ?.slice(0, 3)
                .map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}

            </div>

            <div className="dna-preview-line" />

            <div className="dna-goals">

              <span>
                YOUR CURRENT FOCUS
              </span>

              <div>

                {goals
                  .slice(0, 3)
                  .map((goal) => (
                    <strong key={goal}>
                      {goal}
                    </strong>
                  ))}

              </div>

            </div>

          </div>

        </section>

        {/* AI RECOMMENDATION */}

        <section className="ai-recommendation">

          <div className="ai-sparkle">
            ✨
          </div>

          <div className="ai-recommendation-content">

            <span>
              YOUR AI GIRLFRIEND SAYS
            </span>

            <h3>
              A little reminder
              for today...
            </h3>

            <p>
              You don't need to completely
              reinvent yourself. Small,
              intentional choices every day
              are what create the version
              of you you're dreaming about.
            </p>

          </div>

          <button>
            Talk to my AI Coach
            <ArrowRight size={16} />
          </button>

        </section>

      </main>

    </div>
  );
}


/* =========================================
   MOOD DISPLAY HELPER
========================================= */

function getMoodDisplay(mood) {
  const moodEmojis = {
    Great: "🥰",
    Happy: "😊",
    Calm: "😌",
    Okay: "😐",
    Low: "🥲",
    Stressed: "😣",
    Sad: "😔",
  };

  return `${moodEmojis[mood] || "🌷"} ${mood}`;
}


/* =========================================
   HABIT COMPONENT
========================================= */

function DashboardHabit({
  icon,
  title,
  subtitle,
  completed,
  onClick,
}) {
  return (
    <button
      className={`dashboard-habit ${
        completed
          ? "completed"
          : ""
      }`}
      onClick={onClick}
    >

      <div className="habit-left">

        <div className="dashboard-habit-icon">
          {icon}
        </div>

        <div>

          <strong>
            {title}
          </strong>

          <span>
            {subtitle}
          </span>

        </div>

      </div>

      <div className="habit-check">

        {completed && (
          <Check size={14} />
        )}

      </div>

    </button>
  );
}

export default Dashboard;