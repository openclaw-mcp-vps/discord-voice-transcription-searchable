export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Discord Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Search Your Discord Voice Conversations
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically transcribe every voice channel with OpenAI Whisper and find any moment instantly — with exact timestamps.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works with any Discord server.</p>
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#58a6ff] font-semibold uppercase tracking-widest mb-3">Live Search Preview</p>
          <div className="flex items-center gap-3 bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2 mb-4">
            <span className="text-[#8b949e] text-sm">&#128269;</span>
            <span className="text-[#8b949e] text-sm italic">Search &ldquo;standup meeting recap&rdquo;...</span>
          </div>
          <ul className="space-y-3">
            {[
              { time: "Mon 09:02", user: "alex", text: "Let's do a quick standup — what did everyone ship?" },
              { time: "Mon 09:04", user: "priya", text: "I finished the auth flow and pushed to staging." },
              { time: "Mon 09:06", user: "jordan", text: "Recap: ship auth today, review PRs by noon." },
            ].map((r) => (
              <li key={r.time} className="flex gap-3 items-start">
                <span className="text-xs text-[#58a6ff] font-mono mt-0.5 whitespace-nowrap">{r.time}</span>
                <span className="text-xs text-[#8b949e] font-semibold w-12 shrink-0">{r.user}</span>
                <span className="text-sm text-[#c9d1d9]">{r.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited voice channel transcription",
              "Full-text search with timestamps",
              "Discord OAuth login",
              "Monitor up to 20 channels",
              "30-day transcript history",
              "Export transcripts as CSV",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">&#10003;</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Start Searching — $19/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the Discord bot capture audio?",
              a: "You invite our bot to your server and select which voice channels to monitor. The bot records audio in real time and sends it to OpenAI Whisper for transcription — no manual steps needed.",
            },
            {
              q: "Is my voice data stored securely?",
              a: "Raw audio is deleted immediately after transcription. Only the text transcript and timestamps are stored, encrypted at rest, and accessible only to your authenticated Discord account.",
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel from your dashboard at any time. You keep access until the end of your billing period with no hidden fees.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
