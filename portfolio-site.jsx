import React from "react";

const Pill = ({ children, variant = "light" }) => {
  const styles =
    variant === "dark"
      ? "bg-neutral-900 text-white"
      : "bg-neutral-100 text-neutral-900";
  return <span className={`rounded-2xl px-3 py-1 text-xs font-medium ${styles}`}>{children}</span>;
};

const SectionCard = ({ title, children, aside }) => (
  <section className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-6 space-y-4">
    <header className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        {aside && <p className="text-xs text-neutral-500 mt-1">{aside}</p>}
      </div>
    </header>
    <div className="space-y-3 text-sm text-neutral-800 leading-relaxed">{children}</div>
  </section>
);

export default function PortfolioSite() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col items-center py-10 px-4 space-y-10">
      <section className="w-full max-w-6xl grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-semibold">Mathematician & Computer Scientist</p>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
            Thamendran Daniel Reddy
          </h1>
          <p className="text-neutral-700 text-base leading-relaxed">
            Analytical, adaptable professional blending software engineering, IT support, data insights, and hands-on
            leadership. I build systems that improve coordination, efficiency, and customer experience across technical
            and operational teams.
          </p>

          <div className="text-sm text-neutral-700 leading-relaxed grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p><span className="font-medium">Location:</span> Durban, South Africa · Remote/Relocation ready</p>
              <p><span className="font-medium">Phone:</span> +27 63 335 1482</p>
              <p><span className="font-medium">Email:</span> tdr5622@gmail.com</p>
            </div>
            <div className="space-y-1">
              <p><span className="font-medium">Languages:</span> English, Afrikaans</p>
              <p><span className="font-medium">Current study:</span> BSc Mathematics & Computer Science (UNISA, 2024–2026)</p>
              <p><span className="font-medium">Completed:</span> 2 years Computer Science (University of Pretoria)</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Pill variant="dark">Full-stack fundamentals</Pill>
            <Pill>Automation & cloud principles</Pill>
            <Pill>Data analytics</Pill>
            <Pill>Cybersecurity basics</Pill>
            <Pill>Technical leadership & training</Pill>
            <Pill>Customer success</Pill>
          </div>
        </div>

        <div className="w-full flex">
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 w-full space-y-4">
            <p className="text-xs uppercase tracking-wide text-neutral-500 font-semibold">Career Signals</p>
            <ul className="text-sm text-neutral-800 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-neutral-500">•</span>
                <span>
                  Built an AWS-aligned notification and ticket handler that cut missed updates and sped up team
                  coordination by 30%.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-500">•</span>
                <span>
                  Raised retail revenue by 15% through targeted promotions informed by lightweight analytics dashboards.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-500">•</span>
                <span>
                  Increased youth football player participation by ~40% after rolling out a communication and scheduling
                  platform.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-500">•</span>
                <span>Proven leader: coached teams, trained sales reps, and mentored maths learners to better outcomes.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl space-y-6">
        <header className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold text-neutral-900">Signature Projects</h2>
          <p className="text-xs text-neutral-500">Built, shipped, and impact-measured</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <SectionCard title="Library Management System" aside="2025 · C++ · Qt Widgets">
            <p>
              Desktop application with class-based architecture for books, users, and libraries. Handles inventory,
              borrowing, and returns through a Qt Designer UI built for speed and clarity.
            </p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Object-oriented design with validation to prevent illegal actions.</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Title-based search and filtering using STL containers.</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Local data handling with responsive layouts for ease of use.</span></li>
            </ul>
          </SectionCard>

          <SectionCard title="Notification & Ticket Handler" aside="2021 · Amazon AWS principles">
            <p>
              Internal automation that routes alerts to the right owners and enforces follow-up so teams never miss a
              blocker.
            </p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Automated real-time notification routing for cross-functional teams.</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Improved coordination speed by 30% and reduced missed updates.</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Structured ticket flows that made ownership and documentation stick.</span></li>
            </ul>
          </SectionCard>

          <SectionCard title="Retail Engagement & Sales Analytics" aside="2023 · African Cyber Gaming League">
            <p>
              POS-friendly dashboards and behaviour tracking to guide promotions and on-site marketing decisions.
            </p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Monitored customer traffic patterns to spot high-value periods.</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Delivered insights that drove a 15% revenue lift.</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Kept dashboards lightweight for fast adoption by store teams.</span></li>
            </ul>
          </SectionCard>

          <SectionCard title="Community Sports Management" aside="2024–2025 · Dimes United FC">
            <p>Communication and scheduling platform to coordinate youth football teams, families, and coaches.</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Centralised match schedules, player lists, and attendance tracking.</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Improved parent/player communication and logistics.</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Drove ~40% increase in player participation and retention.</span></li>
            </ul>
          </SectionCard>

          <SectionCard title="POS Support & Training Systems" aside="2024 · TechCelerator">
            <p>
              Training, troubleshooting, and onboarding materials for retail teams adopting POS and internal tools.
            </p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Standardised documentation and quick-start guides for new hires.</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Reduced ramp-up time and improved support consistency.</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Balanced customer satisfaction with operational efficiency.</span></li>
            </ul>
          </SectionCard>

          <SectionCard title="Automotive Restoration" aside="2022–2023 · The Detail Lab">
            <p>
              Precision detailing projects that restored vehicles to showroom condition while preserving client trust.
            </p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Implemented quality-control checks for every stage of restoration.</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Honed discipline, attention to detail, and client communication.</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Delivered premium finishes that drove repeat engagement.</span></li>
            </ul>
          </SectionCard>
        </div>
      </section>

      <section className="w-full max-w-6xl grid lg:grid-cols-3 gap-6">
        <SectionCard title="Technical Toolkit">
          <ul className="space-y-1">
            <li>C++, STL, OOP fundamentals</li>
            <li>Qt Widgets / Qt Designer UI</li>
            <li>Python for scripting and analysis</li>
            <li>AWS concepts, automation, and cloud-first thinking</li>
            <li>Dashboarding and reporting basics</li>
            <li>Cybersecurity awareness and best practices</li>
          </ul>
        </SectionCard>

        <SectionCard title="Operational & Leadership Strengths">
          <ul className="space-y-1">
            <li>Process design, documentation, and continuous improvement</li>
            <li>Training, onboarding, and coaching across tech and sport</li>
            <li>Customer-facing support across retail and service environments</li>
            <li>Team communication, coordination, and stakeholder updates</li>
            <li>Problem solving under pressure with disciplined follow-through</li>
          </ul>
        </SectionCard>

        <SectionCard title="Experience Highlights">
          <ul className="space-y-2">
            <li>
              <p className="font-medium text-neutral-900">Software Development Engineer · Amazon AWS · 2021</p>
              <p className="text-sm text-neutral-700">Built the notification and ticket handler system that improved cross-team execution.</p>
            </li>
            <li>
              <p className="font-medium text-neutral-900">IT Support & Training Lead · TechCelerator · 2024</p>
              <p className="text-sm text-neutral-700">Supported sales teams, created onboarding systems, and maintained support quality.</p>
            </li>
            <li>
              <p className="font-medium text-neutral-900">Mathematics Tutor · Master of Maths · 2019</p>
              <p className="text-sm text-neutral-700">Improved learner performance with structured lessons and exam-focused prep.</p>
            </li>
            <li>
              <p className="font-medium text-neutral-900">Brand Ambassador · Heineken · 2023</p>
              <p className="text-sm text-neutral-700">Featured in a national campaign, strengthening visibility and audience engagement.</p>
            </li>
          </ul>
        </SectionCard>
      </section>

      <section className="w-full max-w-6xl grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
        <SectionCard title="Why I’m effective">
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-neutral-500">•</span>
              <span>Hybrid skill set across engineering, analytics, and operations—able to build, measure, and refine.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neutral-500">•</span>
              <span>High-ownership mindset with a track record of improving processes and training teams quickly.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neutral-500">•</span>
              <span>Strong communication from tutoring, coaching, and on-camera brand work—keeps stakeholders aligned.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neutral-500">•</span>
              <span>Mathematics foundation powers precise problem solving and fast adaptation to new tools.</span>
            </li>
          </ul>
        </SectionCard>

        <SectionCard title="References & Testimonials" aside="Contact available on request">
          <ul className="space-y-2">
            <li>
              <p className="font-medium text-neutral-900">Thiveshnee Govender · State Advocate</p>
              <p className="text-sm text-neutral-700">Phone: +27 63 335 1482 · Email: ThGovender@npa.gov.za</p>
            </li>
            <li>
              <p className="font-medium text-neutral-900">Meera Govender · IT Project Manager</p>
              <p className="text-sm text-neutral-700">Phone: +27 78 214 5182 · Email: m33rag@gmail.com</p>
            </li>
          </ul>
        </SectionCard>
      </section>

      <footer className="w-full max-w-6xl text-center text-xs text-neutral-500 pt-10 pb-16 space-y-2">
        <p className="font-semibold text-neutral-700 text-sm">Let’s collaborate on meaningful tech and operations work.</p>
        <p>Open to full-time, remote, or relocation opportunities.</p>
        <p className="pt-1">Email: <span className="font-medium text-neutral-700">tdr5622@gmail.com</span></p>
      </footer>
    </main>
  );
}
