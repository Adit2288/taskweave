import { useState } from "react";
import studioPhoto from "./assets/landing/studio.webp";
import freelancerPhoto from "./assets/landing/freelancer.webp";
import { footerLinks } from "./footerLinks";
import "./LandingPage.css";

type Role = "client" | "freelancer";

const projectSteps = [
  {
    label: "Brief",
    title: "Start with a clear brief.",
    body: "A student needs a portfolio to showcase their design work. The brief sets a BDT 5,000 budget and a December 15 deadline.",
    details: [
      "Deliverable · Responsive portfolio",
      "Budget · BDT 5,000",
      "Deadline · 15 December",
    ],
  },
  {
    label: "Plan",
    title: "Split the work into milestones.",
    body: "Review a suggested task list before assigning work. Each task has a deliverable that you can check.",
    details: [
      "Design · Agree on the layout",
      "Build · Develop the pages",
      "Review · Test on mobile",
    ],
  },
  {
    label: "Talent",
    title: "Compare the fit before hiring.",
    body: "Compare proposals against the project budget, required skills, and availability. The client makes the final hiring decision.",
    details: [
      "Skills · React and responsive CSS",
      "Budget · Within BDT 5,000",
      "Availability · Before the deadline",
    ],
  },
];

const roleGuides = {
  client: {
    title: "Bring the right people into your project.",
    body: "Set the budget and deadline, review suggested milestones, and decide who joins your team.",
    steps: [
      "Describe the outcome you need",
      "Compare skills, proposals, and cost",
      "Approve the work at each milestone",
    ],
    photo: studioPhoto,
    alt: "Two designers discussing a website layout at a studio desk",
  },
  freelancer: {
    title: "Find work that fits your skills.",
    body: "Look for a brief that fits your skills and schedule. Agree on the scope before you start.",
    steps: [
      "Read the brief and requirements",
      "Propose your price and delivery date",
      "Submit work for client review",
    ],
    photo: freelancerPhoto,
    alt: "A freelance designer working on a visual composition",
  },
};

function WeaveMark() {
  return (
    <svg
      viewBox="0 0 44 34"
      width="40"
      height="32"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
        <path d="M2 22C11 22 11 5 21 5s12 17 21 17" />
        <path d="M2 28C12 28 12 11 21 11s12 17 21 17" />
        <path d="M2 9c10 0 10 17 19 17S33 9 42 9" />
      </g>
    </svg>
  );
}

function Arrow() {
  return (
    <svg
      className="tw-arrow"
      viewBox="0 0 16 16"
      width="15"
      height="15"
      aria-hidden="true"
    >
      <path
        d="M3 13L13 3M4 3h9v9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Brand() {
  return (
    <a className="tw-brand" href="#top">
      <WeaveMark />
      <span>TaskWeave</span>
    </a>
  );
}

function ThreadArt() {
  return (
    <svg
      className="tw-thread"
      viewBox="0 0 580 420"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 12 }, (_, i) => (
        <path
          key={i}
          d={`M-12 ${276 + i * 5}C100 ${160 + i * 5} 290 ${458 - i * 6} 466 ${312 - i * 3}S673 ${56 + i * 7} 520 ${20 + i * 3}`}
        />
      ))}
    </svg>
  );
}

export default function LandingPage() {
  const [role, setRole] = useState<Role>("client");
  const [step, setStep] = useState(0);
  const guide = roleGuides[role];
  const example = projectSteps[step];

  return (
    <div className="tw-home" id="top">
      <a className="tw-skip" href="#content">
        Skip to content
      </a>
      <header className="tw-header tw-container">
        <Brand />
        <nav aria-label="Main navigation">
          <a href="#workflow">How it works</a>
          <a className="tw-nav-demo" href="#project-demo">
            Project demo <Arrow />
          </a>
        </nav>
      </header>

      <main className="tw-main" id="content">
        <section className="tw-hero tw-container" aria-labelledby="tw-title">
          <div className="tw-intro">
            <p className="tw-label">YOUR WORK. CONNECTED.</p>
            <h1 id="tw-title">
              Great talent.
              <br />
              <em>A clear plan.</em>
              <br />
              Work delivered.
            </h1>
            <p className="tw-lead">
              Find freelancers who fit your budget. Plan the work together, from
              the first brief to the final review.
            </p>
            <div className="tw-actions">
              <a
                className="tw-button tw-primary"
                href="#workflow"
                onClick={() => setRole("client")}
              >
                Hire talent <Arrow />
              </a>
              <a
                className="tw-button tw-secondary"
                href="#workflow"
                onClick={() => setRole("freelancer")}
              >
                Find work <Arrow />
              </a>
            </div>
          </div>
          <div className="tw-visual">
            <ThreadArt />
            <figure className="tw-cover">
              <img
                src={studioPhoto}
                width="1200"
                height="800"
                alt="Creative teammates reviewing a portfolio design together"
                fetchPriority="high"
              />
              <figcaption>
                <span className="tw-dot" /> Example project
              </figcaption>
            </figure>
            <a
              className="tw-brief"
              href="#project-demo"
              aria-label="Explore the portfolio website project demo"
            >
              <span className="tw-brief-icon" aria-hidden="true">
                <WeaveMark />
              </span>
              <span>
                <small>PROJECT BRIEF</small>
                <strong>Portfolio website</strong>
              </span>
              <span className="tw-brief-price">
                BDT 5,000 <Arrow />
              </span>
            </a>
          </div>
        </section>

        <section
          className="tw-demo tw-container"
          id="project-demo"
          aria-labelledby="demo-title"
        >
          <div className="tw-section-title">
            <p className="tw-label">PROJECT WALKTHROUGH</p>
            <h2 id="demo-title">
              One brief.
              <br /> <em>Three decisions.</em>
            </h2>
            <p>Explore a sample portfolio project from brief to shortlist.</p>
          </div>
          <div className="tw-demo-panel">
            <div
              className="tw-controls"
              role="group"
              aria-label="Select a walkthrough step"
            >
              {projectSteps.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  aria-pressed={step === index}
                  onClick={() => setStep(index)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="tw-panel-body" key={step} aria-live="polite">
              <h3>{example.title}</h3>
              <p>{example.body}</p>
              <ul>
                {example.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="tw-workflow tw-container"
          id="workflow"
          aria-labelledby="workflow-title"
        >
          <div className="tw-work-head">
            <h2 id="workflow-title">How it works</h2>
            <div
              className="tw-controls"
              role="group"
              aria-label="Choose your role"
            >
              <button
                type="button"
                aria-pressed={role === "client"}
                onClick={() => setRole("client")}
              >
                For clients
              </button>
              <button
                type="button"
                aria-pressed={role === "freelancer"}
                onClick={() => setRole("freelancer")}
              >
                For freelancers
              </button>
            </div>
          </div>
          <div className="tw-guide" key={role}>
            <img
              src={guide.photo}
              alt={guide.alt}
              width="1200"
              height="800"
              loading="lazy"
            />
            <div className="tw-guide-copy" aria-live="polite">
              <h3>{guide.title}</h3>
              <p>{guide.body}</p>
              <ol>
                {guide.steps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>

      <footer className="tw-footer">
        <div className="tw-container">
          <div className="tw-footer-top">
            <div>
              <Brand />
              <p>Find talent. Plan projects. Deliver together.</p>
            </div>
            <nav aria-label="Footer navigation">
              <a href="#workflow">How it works</a>
              <a href="#project-demo">Project demo</a>
              {footerLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="tw-footer-bottom">
            <small>© {new Date().getFullYear()} TaskWeave · Adit Ishmam</small>
            <a href="#top">
              Back to top <Arrow />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
