import { useState } from "react";
import {
  ArrowLeft,
  Sparkles,
  Clock,
  BatteryMedium,
  Target,
  Moon,
  Heart,
  Check,
} from "lucide-react";
import "../App.css";

const moods = [
  { label: "Great", emoji: "🥰" },
  { label: "Happy", emoji: "😊" },
  { label: "Calm", emoji: "😌" },
  { label: "Okay", emoji: "😐" },
  { label: "Low", emoji: "🥲" },
  { label: "Stressed", emoji: "😣" },
];

const energyLevels = [
  { label: "High", emoji: "🔋" },
  { label: "Medium", emoji: "🌸" },
  { label: "Low", emoji: "🪫" },
];

const availableTimes = [
  { label: "15 min", emoji: "⚡" },
  { label: "30 min", emoji: "🌷" },
  { label: "1 hour", emoji: "✨" },
  { label: "2+ hours", emoji: "🎀" },
];

const focusOptions = [
  { label: "Glow Up", emoji: "✨" },
  { label: "Skincare", emoji: "🧴" },
  { label: "Hair Care", emoji: "💇‍♀️" },
  { label: "Style", emoji: "👗" },
  { label: "Mental Wellness", emoji: "🧠" },
  { label: "Fitness", emoji: "🧘‍♀️" },
  { label: "Productivity", emoji: "📚" },
  { label: "Self Love", emoji: "💗" },
  { label: "Social", emoji: "👭" },
  { label: "Hobbies", emoji: "🎨" },
  { label: "Better Habits", emoji: "🌱" },
];

const restLevels = [
  { label: "Not rested", emoji: "😴" },
  { label: "Okay", emoji: "😐" },
  { label: "Well rested", emoji: "✨" },
];

function DailyPlanner() {
  const [profile] = useState(() => {
    const savedProfile = localStorage.getItem("barbieProfile");

    return savedProfile ? JSON.parse(savedProfile) : null;
  });

  const [checkIn, setCheckIn] = useState(() => {
    const savedCheckIn = localStorage.getItem("todayCheckIn");

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

  const updateCheckIn = (field, value) => {
    setCheckIn((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const toggleFocus = (focus) => {
    setCheckIn((previous) => ({
      ...previous,
      focus: previous.focus.includes(focus)
        ? previous.focus.filter((item) => item !== focus)
        : [...previous.focus, focus],
    }));
  };

  const saveCheckIn = () => {
    localStorage.setItem(
      "todayCheckIn",
      JSON.stringify(checkIn)
    );

    alert("Your daily check-in has been saved! 🎀");
  };

  const selectedCount =
    Number(Boolean(checkIn.mood)) +
    Number(Boolean(checkIn.energy)) +
    Number(Boolean(checkIn.availableTime)) +
    Number(checkIn.focus.length > 0) +
    Number(Boolean(checkIn.rest));

  return (
    <div className="daily-planner-page">

      {/* HEADER */}

      <header className="daily-planner-header">

        <button
          className="back-button"
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          <ArrowLeft size={18} />
          Home
        </button>

        <div className="logo">
          <span className="logo-star">✦</span>
          BARBIE AI
        </div>

        <div className="planner-header-icon">
          ✨
        </div>

      </header>

      {/* PROGRESS */}

      <div className="daily-planner-progress">
        <div
          style={{
            width: `${(selectedCount / 5) * 100}%`,
          }}
        />
      </div>

      {/* MAIN */}

      <main className="daily-planner-content">

        {/* INTRO */}

        <div className="planner-intro">

          <span className="onboarding-eyebrow">
            YOUR DAILY CHECK-IN
          </span>

          <h1>
            Let's make today
            <br />
            <em>feel like you.</em>
          </h1>

          <p>
            {profile?.name
              ? `Good morning, ${profile.name}. `
              : "Good morning. "}
            Tell us a little about how you're feeling today
            and we'll shape your day around you.
          </p>

        </div>

        {/* MOOD */}

        <CheckInSection
          icon={<Heart size={20} />}
          eyebrow="MOOD"
          title="How are you feeling?"
          description="Your mood helps us understand what kind of day you need."
        >

          <div className="choice-grid mood-grid">

            {moods.map((mood) => {

              const selected =
                checkIn.mood === mood.label;

              return (
                <button
                  type="button"
                  key={mood.label}
                  className={`choice-card ${
                    selected ? "selected" : ""
                  }`}
                  onClick={() =>
                    updateCheckIn(
                      "mood",
                      mood.label
                    )
                  }
                >

                  <span className="choice-emoji">
                    {mood.emoji}
                  </span>

                  <span className="choice-label">
                    {mood.label}
                  </span>

                  {selected && (
                    <span className="choice-check">
                      <Check size={13} />
                    </span>
                  )}

                </button>
              );
            })}

          </div>

        </CheckInSection>

        {/* ENERGY */}

        <CheckInSection
          icon={<BatteryMedium size={20} />}
          eyebrow="ENERGY"
          title="What's your energy like?"
          description="We'll match the intensity of your routine to your energy."
        >

          <div className="choice-grid energy-grid">

            {energyLevels.map((energy) => {

              const selected =
                checkIn.energy === energy.label;

              return (
                <button
                  type="button"
                  key={energy.label}
                  className={`choice-card ${
                    selected ? "selected" : ""
                  }`}
                  onClick={() =>
                    updateCheckIn(
                      "energy",
                      energy.label
                    )
                  }
                >

                  <span className="choice-emoji">
                    {energy.emoji}
                  </span>

                  <span className="choice-label">
                    {energy.label}
                  </span>

                  {selected && (
                    <span className="choice-check">
                      <Check size={13} />
                    </span>
                  )}

                </button>
              );
            })}

          </div>

        </CheckInSection>

        {/* TIME */}

        <CheckInSection
          icon={<Clock size={20} />}
          eyebrow="YOUR TIME"
          title="How much time do you have?"
          description="Your ritual should fit into your real life — not the other way around."
        >

          <div className="choice-grid time-grid">

            {availableTimes.map((time) => {

              const selected =
                checkIn.availableTime === time.label;

              return (
                <button
                  type="button"
                  key={time.label}
                  className={`choice-card time-card ${
                    selected ? "selected" : ""
                  }`}
                  onClick={() =>
                    updateCheckIn(
                      "availableTime",
                      time.label
                    )
                  }
                >

                  <span className="choice-emoji">
                    {time.emoji}
                  </span>

                  <span className="choice-label">
                    {time.label}
                  </span>

                  {selected && (
                    <span className="choice-check">
                      <Check size={13} />
                    </span>
                  )}

                </button>
              );
            })}

          </div>

        </CheckInSection>

        {/* FOCUS */}

        <CheckInSection
          icon={<Target size={20} />}
          eyebrow="TODAY'S FOCUS"
          title="What do you want to focus on?"
          description="Choose one or more things you'd love to prioritize today."
        >

          <div className="focus-grid">

            {focusOptions.map((focus) => {

              const selected =
                checkIn.focus.includes(
                  focus.label
                );

              return (
                <button
                  type="button"
                  key={focus.label}
                  className={`focus-chip ${
                    selected ? "selected" : ""
                  }`}
                  onClick={() =>
                    toggleFocus(
                      focus.label
                    )
                  }
                >

                  <span className="focus-emoji">
                    {focus.emoji}
                  </span>

                  <span>
                    {focus.label}
                  </span>

                  {selected && (
                    <Check size={13} />
                  )}

                </button>
              );
            })}

          </div>

          <p className="selection-hint">
            ✦ You can choose more than one
          </p>

        </CheckInSection>

        {/* REST */}

        <CheckInSection
          icon={<Moon size={20} />}
          eyebrow="OPTIONAL"
          title="How rested do you feel?"
          description="Only share this if you want it to influence today's plan."
        >

          <div className="choice-grid rest-grid">

            {restLevels.map((rest) => {

              const selected =
                checkIn.rest === rest.label;

              return (
                <button
                  type="button"
                  key={rest.label}
                  className={`choice-card ${
                    selected ? "selected" : ""
                  }`}
                  onClick={() =>
                    updateCheckIn(
                      "rest",
                      rest.label
                    )
                  }
                >

                  <span className="choice-emoji">
                    {rest.emoji}
                  </span>

                  <span className="choice-label">
                    {rest.label}
                  </span>

                  {selected && (
                    <span className="choice-check">
                      <Check size={13} />
                    </span>
                  )}

                </button>
              );
            })}

          </div>

        </CheckInSection>

        {/* SUMMARY */}

        {selectedCount > 0 && (
          <div className="checkin-summary">

            <div className="summary-sparkle">
              ✨
            </div>

            <div>
              <span>YOUR DAY SO FAR</span>

              <strong>
                {checkIn.mood || "Mood not selected"}
                {checkIn.energy &&
                  ` · ${checkIn.energy} energy`}
              </strong>

              <p>
                {checkIn.focus.length > 0
                  ? `Focusing on ${checkIn.focus.join(
                      ", "
                    )}.`
                  : "Choose your focus to personalize your ritual."}
              </p>
            </div>

          </div>
        )}

        {/* SAVE */}

        <button
          type="button"
          className="continue-button save-day-button"
          onClick={saveCheckIn}
        >

          <span>
            Save Today's Check-In
          </span>

          <Sparkles size={18} />

        </button>

        <p className="planner-footer-note">
          Your answers stay yours. You can update them anytime. 🎀
        </p>

      </main>

    </div>
  );
}


/* =========================================
   REUSABLE SECTION
========================================= */

function CheckInSection({
  icon,
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="checkin-section">

      <div className="checkin-title">

        <div className="checkin-icon">
          {icon}
        </div>

        <div>

          <span className="checkin-eyebrow">
            {eyebrow}
          </span>

          <h2>{title}</h2>

          <p>{description}</p>

        </div>

      </div>

      <div className="checkin-options">
        {children}
      </div>

    </section>
  );
}

export default DailyPlanner;