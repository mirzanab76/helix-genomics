export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4">
      <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-7 py-3 backdrop-blur-xl">
        <span className="font-display text-lg font-bold tracking-[0.25em] text-emerald-200">HELIX</span>
        <div className="hidden gap-8 text-sm text-white/60 md:flex">
          <a className="transition hover:text-emerald-200" href="#">Platform</a>
          <a className="transition hover:text-emerald-200" href="#">Research</a>
          <a className="transition hover:text-emerald-200" href="#">Company</a>
        </div>
        <button className="rounded-full border border-emerald-300/40 px-5 py-2 text-sm font-medium text-emerald-100 transition hover:bg-emerald-300/10">
          Request access
        </button>
      </nav>
    </header>
  )
}
