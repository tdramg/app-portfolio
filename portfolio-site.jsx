import React from "react";

export default function PortfolioSite() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col items-center py-10 px-4 space-y-10">
      <section className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
            Thamendran Daniel Reddy
          </h1>
          <p className="text-neutral-600 text-base leading-relaxed">
            Analytical and adaptable professional with experience in software
            development, IT support, data handling, and community leadership.
            Focused on building reliable systems that solve real problems.
          </p>

          <div className="text-sm text-neutral-700 leading-relaxed">
            <p>Email: <span className="font-medium">tdr5622@gmail.com</span></p>
            <p>Location: Durban, South Africa (Remote / Willing to relocate)</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 text-xs">
            <span className="bg-neutral-900 text-white rounded-2xl px-3 py-1">C++ / Qt</span>
            <span className="bg-neutral-200 text-neutral-900 rounded-2xl px-3 py-1">Python</span>
            <span className="bg-neutral-200 text-neutral-900 rounded-2xl px-3 py-1">AWS concepts</span>
            <span className="bg-neutral-200 text-neutral-900 rounded-2xl px-3 py-1">Data analysis</span>
            <span className="bg-neutral-200 text-neutral-900 rounded-2xl px-3 py-1">Workflow automation</span>
          </div>
        </div>

        <div className="w-full h-full flex">
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-5 w-full">
            <p className="text-xs uppercase tracking-wide text-neutral-500 font-semibold mb-3">Highlights</p>
            <ul className="text-sm text-neutral-800 space-y-2">
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>30% faster team coordination through AWS notification & ticket handler system (2021)</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>15% revenue lift via retail engagement analytics for African Cyber Gaming League (2023)</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>40% increase in player participation with Dimes United FC management platform (2024–2025)</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl space-y-6">
        <header className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold text-neutral-900">Projects</h2>
          <p className="text-xs text-neutral-500">Built, shipped, and in use</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-neutral-900">Library Management System</h3>
              <span className="text-[10px] font-medium text-neutral-500 bg-neutral-100 rounded-full px-2 py-1">2025 • C++ / Qt</span>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Windows desktop application for managing books, users, loans, and returns using a Qt interface.
            </p>
            <ul className="text-sm text-neutral-800 space-y-1 pt-3">
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Object-oriented design using Book, User, and Library classes</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Borrow / return tracking with validation to prevent illegal actions</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Fast title-based search using STL containers</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>UI built in Qt Designer with responsive layouts</span></li>
            </ul>
            <div className="mt-4 text-[11px] text-neutral-500">
              Desktop application • Windows • Local data handling
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-neutral-900">Notification & Ticket Handler System</h3>
              <span className="text-[10px] font-medium text-neutral-500 bg-neutral-100 rounded-full px-2 py-1">2021 • AWS</span>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Internal automation to keep teams aligned and reduce missed updates.
            </p>
            <ul className="text-sm text-neutral-800 space-y-1 pt-3">
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Automated real-time notification routing for cross-functional teams</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Cut communication gaps and boosted coordination speed by 30%</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Supported structured ticket handling for smoother ownership</span></li>
            </ul>
            <div className="mt-4 text-[11px] text-neutral-500">
              Workflow automation • Cloud principles • Team ops impact
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-neutral-900">Retail Engagement & Sales Analytics</h3>
              <span className="text-[10px] font-medium text-neutral-500 bg-neutral-100 rounded-full px-2 py-1">2023 • Analytics</span>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Lightweight dashboarding and behavioural tracking for African Cyber Gaming League marketing decisions.
            </p>
            <ul className="text-sm text-neutral-800 space-y-1 pt-3">
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Monitored customer traffic and purchase behaviour to identify high-value periods</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Enabled targeted promotions that drove a 15% revenue lift</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Produced insights for marketing and on-site retail strategy</span></li>
            </ul>
            <div className="mt-4 text-[11px] text-neutral-500">
              Customer analytics • Revenue impact • Dashboarding
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-neutral-900">POS Support & Training Systems</h3>
              <span className="text-[10px] font-medium text-neutral-500 bg-neutral-100 rounded-full px-2 py-1">2024 • TechCelerator</span>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Training and support layer for new hires using POS systems and internal tools.
            </p>
            <ul className="text-sm text-neutral-800 space-y-1 pt-3">
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Created simplified onboarding material for POS and technical processes</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Reduced ramp-up time for new team members</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Improved support quality and consistency across staff</span></li>
            </ul>
            <div className="mt-4 text-[11px] text-neutral-500">
              Enablement • Documentation • Retail systems
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-5 flex flex-col md:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-neutral-900">Community Sports Management System</h3>
              <span className="text-[10px] font-medium text-neutral-500 bg-neutral-100 rounded-full px-2 py-1">2024–2025 • Dimes United FC</span>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Communication and coordination platform for youth football teams.
            </p>
            <ul className="text-sm text-neutral-800 space-y-1 pt-3">
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Managed scheduling, player lists, and attendance tracking</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Improved parent / player communication and logistics</span></li>
              <li className="flex items-start gap-2"><span className="text-neutral-500">•</span><span>Drove ~40% increase in player participation and retention</span></li>
            </ul>
            <div className="mt-4 text-[11px] text-neutral-500">
              Community impact • Youth development • Ops management
            </div>
          </article>
        </div>
      </section>

      <section className="w-full max-w-5xl grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-5">
          <h2 className="text-base font-semibold text-neutral-900 mb-3">Core Technical Skills</h2>
          <ul className="text-sm text-neutral-800 space-y-1">
            <li>C++, STL, Object-Oriented Programming</li>
            <li>Qt Widgets / Qt Designer UI</li>
            <li>Python for analysis and validation</li>
            <li>AWS concepts and basic cloud workflow</li>
            <li>Basic dashboard / reporting logic</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-5">
          <h2 className="text-base font-semibold text-neutral-900 mb-3">Operational Strength</h2>
          <ul className="text-sm text-neutral-800 space-y-1">
            <li>Process improvement and documentation</li>
            <li>Training and onboarding new staff</li>
            <li>Customer-facing support and retail execution</li>
            <li>Team communication and coordination</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-5">
          <h2 className="text-base font-semibold text-neutral-900 mb-3">Personal Advantages</h2>
          <ul className="text-sm text-neutral-800 space-y-1">
            <li>Problem solving under pressure</li>
            <li>Attention to detail</li>
            <li>Leadership in real environments (tech + sport)</li>
            <li>Adapts fast and learns fast</li>
          </ul>
        </div>
      </section>

      <footer className="w-full max-w-5xl text-center text-xs text-neutral-500 pt-10 pb-20">
        <p className="font-medium text-neutral-700 text-sm">Let’s work.</p>
        <p>Available for full-time, remote, or relocation.</p>
        <p className="pt-2">Email: <span className="font-medium text-neutral-700">tdr5622@gmail.com</span></p>
      </footer>
    </main>
  );
}
