import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Heart,
  Check,
} from "lucide-react";
import "../App.css";

const personalities = [
  {
    name: "Soft Girl",
    emoji: "🎀",
    description: "Gentle, romantic & dreamy",
  },
  {
    name: "Baddie",
    emoji: "💋",
    description: "Confident, bold & powerful",
  },
  {
    name: "Clean Girl",
    emoji: "🕊️",
    description: "Minimal, fresh & effortless",
  },
  {
    name: "Coquette",
    emoji: "🌷",
    description: "Romantic, feminine & playful",
  },
  {
    name: "Dark Feminine",
    emoji: "🖤",
    description: "Mysterious, elegant & magnetic",
  },
  {
    name: "Elegant",
    emoji: "🦢",
    description: "Sophisticated, graceful & timeless",
  },
  {
    name: "Chaotic",
    emoji: "🦋",
    description: "Fun, spontaneous & unpredictable",
  },
  {
    name: "Academic Girl",
    emoji: "📚",
    description: "Curious, ambitious & intelligent",
  },
];

const aesthetics = [
  "Pink Princess 🎀",
  "Old Money 🦢",
  "Coquette 🌷",
  "Clean Girl 🤍",
  "Dark Feminine 🖤",
  "Y2K 💿",
  "Cottagecore 🌸",
  "Minimalist ✨",
];

const goals = [
  "Glow Up ✨",
  "Better Skin 🌸",
  "Better Hair 💇‍♀️",
  "Fashion 👗",
  "Confidence 💗",
  "Self Love 🫶",
  "Fitness 🧘‍♀️",
  "Productivity 📚",
  "Mental Wellness 🌷",
  "Better Habits 🌱",
  "Social Life 👭",
  "Discover Myself 🦋",
];

const hobbies = [
  "Reading 📖",
  "Dancing 💃",
  "Painting 🎨",
  "Photography 📸",
  "Baking 🧁",
  "Music 🎧",
  "Languages 🌎",
  "Fitness 🧘‍♀️",
  "Writing ✍️",
  "Fashion 👗",
  "Travel ✈️",
  "Content Creation 📱",
];

function Onboarding() {
  const [step, setStep] = useState(1);

  const [profile, setProfile] = useState({
    name: "",
    personalities: [],
    aesthetics: [],
    bodyType: "",
    skinTone: "",
    hairType: "",
    goals: [],
    hobbies: [],
  });

  const totalSteps = 7;

  const updateProfile = (field, value) => {
    setProfile((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const toggleSelection = (field, value) => {
    setProfile((previous) => {
      const current = previous[field];

      if (current.includes(value)) {
        return {
          ...previous,
          [field]: current.filter((item) => item !== value),
        };
      }

      return {
        ...previous,
        [field]: [...current, value],
      };
    });
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      localStorage.setItem(
        "barbieProfile",
        JSON.stringify(profile)
      );

      window.location.href = "/dashboard";
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="onboarding-page">

      {/* Header */}

      <header className="onboarding-header">

        <div className="logo">
          <span className="logo-star">✦</span>
          BARBIE AI
        </div>

        <div className="step-counter">
          {step} / {totalSteps}
        </div>

      </header>

      {/* Progress */}

      <div className="progress-container">

        <div
          className="onboarding-progress"
          style={{
            width: `${(step / totalSteps) * 100}%`,
          }}
        />

      </div>

      {/* Content */}

      <main className="onboarding-content">

        {/* STEP 1 */}

        {step === 1 && (
          <div className="onboarding-step welcome-step">

            <div className="welcome-icon">
              🎀
            </div>

            <span className="onboarding-eyebrow">
              LET'S GET TO KNOW YOU
            </span>

            <h1>
              Welcome to your
              <br />
              <em>Barbie era.</em>
            </h1>

            <p>
              Before we begin, tell us a little about yourself.
              There are no right or wrong answers — this is your
              space to be completely you.
            </p>

            <div className="name-input-wrapper">

              <label>What should we call you?</label>

              <input
                type="text"
                placeholder="Your name..."
                value={profile.name}
                onChange={(event) =>
                  updateProfile("name", event.target.value)
                }
              />

            </div>

          </div>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <SelectionStep
            eyebrow="YOUR PERSONALITY"
            title="What's your vibe?"
            subtitle="Choose the personalities that feel most like you."
          >

            <div className="personality-grid">

              {personalities.map((personality) => (

                <SelectionCard
                  key={personality.name}
                  selected={profile.personalities.includes(
                    personality.name
                  )}
                  onClick={() =>
                    toggleSelection(
                      "personalities",
                      personality.name
                    )
                  }
                >

                  <div className="selection-emoji">
                    {personality.emoji}
                  </div>

                  <div>
                    <h3>{personality.name}</h3>
                    <p>{personality.description}</p>
                  </div>

                </SelectionCard>

              ))}

            </div>

          </SelectionStep>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <SelectionStep
            eyebrow="YOUR AESTHETIC"
            title="What makes your heart go ✨?"
            subtitle="Pick the aesthetics you're drawn to."
          >

            <div className="pill-grid">

              {aesthetics.map((aesthetic) => (

                <Pill
                  key={aesthetic}
                  text={aesthetic}
                  selected={profile.aesthetics.includes(aesthetic)}
                  onClick={() =>
                    toggleSelection(
                      "aesthetics",
                      aesthetic
                    )
                  }
                />

              ))}

            </div>

          </SelectionStep>
        )}

        {/* STEP 4 */}

        {step === 4 && (
          <SelectionStep
            eyebrow="YOUR STYLE PROFILE"
            title="Let's personalize your style."
            subtitle="These details help us make better fashion recommendations."
          >

            <div className="profile-options">

              <OptionGroup
                title="Body Type"
                options={[
                  "Hourglass",
                  "Pear",
                  "Rectangle",
                  "Apple",
                  "Inverted Triangle",
                  "Prefer not to say",
                ]}
                value={profile.bodyType}
                onChange={(value) =>
                  updateProfile("bodyType", value)
                }
              />

              <OptionGroup
                title="Skin Tone"
                options={[
                  "Fair",
                  "Light",
                  "Medium",
                  "Tan",
                  "Deep",
                  "Prefer not to say",
                ]}
                value={profile.skinTone}
                onChange={(value) =>
                  updateProfile("skinTone", value)
                }
              />

              <OptionGroup
                title="Hair Type"
                options={[
                  "Straight",
                  "Wavy",
                  "Curly",
                  "Coily",
                  "Prefer not to say",
                ]}
                value={profile.hairType}
                onChange={(value) =>
                  updateProfile("hairType", value)
                }
              />

            </div>

          </SelectionStep>
        )}

        {/* STEP 5 */}

        {step === 5 && (
          <SelectionStep
            eyebrow="YOUR GOALS"
            title="What are we working on?"
            subtitle="Choose everything you want to focus on."
          >

            <div className="pill-grid">

              {goals.map((goal) => (

                <Pill
                  key={goal}
                  text={goal}
                  selected={profile.goals.includes(goal)}
                  onClick={() =>
                    toggleSelection("goals", goal)
                  }
                />

              ))}

            </div>

          </SelectionStep>
        )}

        {/* STEP 6 */}

        {step === 6 && (
          <SelectionStep
            eyebrow="YOUR WORLD"
            title="What do you love?"
            subtitle="Tell us about the things that make you happy."
          >

            <div className="pill-grid">

              {hobbies.map((hobby) => (

                <Pill
                  key={hobby}
                  text={hobby}
                  selected={profile.hobbies.includes(hobby)}
                  onClick={() =>
                    toggleSelection("hobbies", hobby)
                  }
                />

              ))}

            </div>

          </SelectionStep>
        )}

        {/* STEP 7 */}

        {step === 7 && (
          <div className="onboarding-step dna-step">

            <div className="dna-sparkle">
              ✨
            </div>

            <span className="onboarding-eyebrow">
              YOUR PERSONALIZED PROFILE
            </span>

            <h1>
              Meet your
              <br />
              <em>Barbie DNA.</em>
            </h1>

            <p>
              We've got a pretty good idea of who you are,
              {profile.name && ` ${profile.name}`}.
              This is the beginning of your personalized journey.
            </p>

            <div className="dna-card">

              <div className="dna-header">

                <div className="dna-avatar">
                  🎀
                </div>

                <div>
                  <span>YOUR BARBIE DNA</span>
                  <h2>
                    {profile.personalities[0] ||
                      "Your Unique Girl"}
                  </h2>
                </div>

              </div>

              <div className="dna-tags">

                {profile.personalities
                  .slice(0, 3)
                  .map((item) => (
                    <span key={item}>{item}</span>
                  ))}

                {profile.aesthetics
                  .slice(0, 2)
                  .map((item) => (
                    <span key={item}>{item}</span>
                  ))}

              </div>

              <div className="dna-divider" />

              <div className="dna-info">

                <div>
                  <span>STYLE</span>
                  <strong>
                    {profile.bodyType || "Personalized"}
                  </strong>
                </div>

                <div>
                  <span>GOALS</span>
                  <strong>
                    {profile.goals.length || 0} selected
                  </strong>
                </div>

                <div>
                  <span>HOBBIES</span>
                  <strong>
                    {profile.hobbies.length || 0} selected
                  </strong>
                </div>

              </div>

            </div>

          </div>
        )}

      </main>

      {/* Footer Controls */}

      <div className="onboarding-controls">

        {step > 1 ? (

          <button
            className="back-button"
            onClick={previousStep}
          >
            <ArrowLeft size={17} />
            Back
          </button>

        ) : (
          <div />
        )}

        <button
          className="continue-button"
          onClick={nextStep}
        >

          {step === totalSteps
            ? "Enter My Barbie World"
            : "Continue"}

          {step === totalSteps ? (
            <Sparkles size={17} />
          ) : (
            <ArrowRight size={17} />
          )}

        </button>

      </div>

    </div>
  );
}


/* ---------- Components ---------- */

function SelectionStep({
  eyebrow,
  title,
  subtitle,
  children,
}) {
  return (
    <div className="onboarding-step">

      <span className="onboarding-eyebrow">
        {eyebrow}
      </span>

      <h1>{title}</h1>

      <p>{subtitle}</p>

      {children}

    </div>
  );
}


function SelectionCard({
  selected,
  onClick,
  children,
}) {
  return (
    <button
      className={`selection-card ${
        selected ? "selected" : ""
      }`}
      onClick={onClick}
    >

      {children}

      {selected && (
        <div className="selection-check">
          <Check size={14} />
        </div>
      )}

    </button>
  );
}


function Pill({
  text,
  selected,
  onClick,
}) {
  return (
    <button
      className={`selection-pill ${
        selected ? "selected" : ""
      }`}
      onClick={onClick}
    >

      {text}

      {selected && (
        <Check size={15} />
      )}

    </button>
  );
}


function OptionGroup({
  title,
  options,
  value,
  onChange,
}) {
  return (
    <div className="option-group">

      <h3>{title}</h3>

      <div className="option-grid">

        {options.map((option) => (

          <button
            key={option}
            className={`option-button ${
              value === option ? "selected" : ""
            }`}
            onClick={() => onChange(option)}
          >

            {option}

          </button>

        ))}

      </div>

    </div>
  );
}


export default Onboarding;