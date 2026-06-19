type Step = { no: string; title: string; desc: string }
type App = { name: string; desc: string }
type Stat = { value: string; label: string }

const STEPS: Step[] = [
  { no: "01", title: "Sequence", desc: "We read all 3.2 billion base pairs from a single simple sample." },
  { no: "02", title: "Interpret", desc: "Our models separate meaningful variants from background noise." },
  { no: "03", title: "Act", desc: "Clinicians receive clear, prioritized, actionable insights." },
]

const APPS: App[] = [
  { name: "Oncology", desc: "Match each tumor to the therapies most likely to work." },
  { name: "Rare disease", desc: "End diagnostic odysseys with answers in days, not years." },
  { name: "Pharmacogenomics", desc: "Prescribe the right drug at the right dose, first time." },
]

const STATS: Stat[] = [
  { value: "2014", label: "company founded" },
  { value: "3.2B", label: "base pairs per genome" },
  { value: "99.9%", label: "analytical accuracy" },
  { value: "40+", label: "research partners" },
]

export function Sections() {
  return (
    <div className="w-screen text-[#e8f0f5]">
      <section className="flex h-screen w-screen flex-col items-center justify-center px-8 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-emerald-300/80">HELIX · Precision Genomics</p>
        <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Medicine, written
          <br />
          <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
            in your code.
          </span>
        </h1>
        <p className="mt-7 max-w-xl text-lg text-white/60">
          We turn a single drop of blood into a complete genomic blueprint, so care can be predicted,
          personalized, and truly preventive.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-emerald-300 px-7 py-3 font-medium text-black transition hover:bg-emerald-200">
            Explore the platform
          </button>
          <button className="rounded-full border border-white/20 px-7 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10">
            Talk to our team
          </button>
        </div>
      </section>

      <section className="flex h-screen w-screen items-center px-8 md:px-20">
        <div className="max-w-lg">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-emerald-300/80">Since 2014</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Decoding life, to heal it.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Founded by geneticists and engineers, HELIX builds the tools that read the human genome
            at scale and translate it into decisions doctors can act on today.
          </p>
        </div>
      </section>

      <section className="flex h-screen w-screen items-center justify-end px-8 md:px-20">
        <div className="max-w-lg text-right">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-emerald-300/80">The platform</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Your genome, fully understood.
          </h2>
          <ul className="mt-8 space-y-4 text-white/65">
            <li>Whole-genome sequencing at clinical-grade accuracy.</li>
            <li>AI interpretation that flags what actually matters.</li>
            <li>Secure, shareable reports built for clinicians and patients.</li>
          </ul>
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col justify-center px-8 md:px-20">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-emerald-300/80">How it works</p>
        <h2 className="font-display max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">From sample to insight.</h2>
        <div className="mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.no}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:border-emerald-300/40"
            >
              <div className="font-display text-sm font-semibold text-emerald-300/80">{step.no}</div>
              <h3 className="font-display mt-3 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-white/55">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col justify-center px-8 md:px-20">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-emerald-300/80">What it unlocks</p>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">One genome, many answers.</h2>
        <div className="mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {APPS.map((a) => (
            <div
              key={a.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:border-cyan-300/40"
            >
              <h3 className="font-display text-2xl text-cyan-200">{a.name}</h3>
              <p className="mt-3 text-white/55">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col items-center justify-center px-8">
        <p className="mb-12 text-xs uppercase tracking-[0.4em] text-emerald-300/80">By the numbers</p>
        <div className="grid w-full max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display bg-gradient-to-b from-white to-white/50 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col items-center justify-center px-8 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-emerald-300/80">Privacy by design</p>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">Your data, always yours.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          Genomic data is encrypted end to end, never sold, and deletable on request. You decide who
          sees it, and you can change your mind at any time.
        </p>
      </section>

      <section className="flex h-screen w-screen flex-col items-center justify-center px-8 text-center">
        <blockquote className="font-display max-w-3xl text-3xl font-medium leading-snug tracking-tight md:text-5xl">
          "The most accurate consumer genome platform we have tested."
        </blockquote>
        <p className="mt-6 text-white/50">- Nature Biotechnology</p>
        <p className="mt-16 text-xs uppercase tracking-[0.4em] text-white/40">Trusted by</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-display text-lg font-semibold text-white/70">
          <span>Mayo Clinic</span>
          <span>Karolinska</span>
          <span>Genomics England</span>
          <span>NIH</span>
        </div>
      </section>

      <section className="flex h-screen w-screen flex-col justify-between px-8 pb-12 pt-32 md:px-20">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            The future of medicine is personal.
          </h2>
          <p className="mt-5 max-w-xl text-white/55">
            Bring precision genomics to your clinic, lab, or research program.
          </p>
          <button className="mt-9 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 px-9 py-4 text-lg font-semibold text-black transition hover:opacity-90">
            Request access
          </button>
        </div>
        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center">
          <span className="font-display font-bold tracking-[0.25em] text-emerald-200">HELIX</span>
          <div className="flex gap-8">
            <a href="#">Platform</a>
            <a href="#">Research</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          <span className="text-white/30">(c) 2026 Helix Genomics. All rights reserved.</span>
        </div>
      </section>
    </div>
  )
}
