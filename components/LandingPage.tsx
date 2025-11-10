import Image from "next/image";

const currentMCAP = 50000; // <-- Update this manually to reflect current MCAP

const milestones = [
  { cap: 50000, label: "50K MCAP", prize: "1 SOL to random holders" },
  { cap: 100000, label: "100K MCAP", prize: "2 SOL prize draw" },
  { cap: 250000, label: "250K MCAP", prize: "Exclusive NFT Drop" },
  { cap: 500000, label: "500K MCAP", prize: "5 SOL Prize Pool" },
  { cap: 750000, label: "750K MCAP", prize: "10 SOL Prize Pool" },
  { cap: 1000000, label: "1M MCAP", prize: "Grand Giveaway Event" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="flex-1 flex flex-col items-center justify-center w-full px-6 py-12">
        <section
          className="relative w-full max-w-4xl flex items-center justify-center bg-cover bg-center rounded-2xl overflow-hidden"
          style={{ minHeight: "60vh" }}
        >
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover object-top"
            src="/daongers_vid.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 max-w-3xl p-8 sm:p-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-yellow-400 drop-shadow-lg">
              DAONGERS
            </h1>
            <p className="text-base sm:text-lg mb-6 text-gray-200">
              Certified Daongers Only — Where confidence meets chaos and the
              energy stays unmatched. Step in if you belong.
            </p>
            <a
              href="https://www.daos.fun/"
              className="cursor-pointer px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-lg transition"
            >
              Enter the Realm
            </a>
          </div>
        </section>

        <section className="w-full flex justify-center mt-8">
          <div className="relative z-10 max-w-4xl w-full bg-black/60 border border-yellow-400/40 rounded-2xl p-8 backdrop-blur mx-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6 text-center">
              Market Cap Milestones
            </h2>

            <div className="w-full bg-yellow-400/20 rounded-full h-3 mb-6">
              <div
                className="bg-yellow-400 h-3 rounded-full transition-all"
                style={{ width: `${(currentMCAP / 1000000) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
              {milestones.map((m) => (
                <div
                  key={m.cap}
                  className={`p-4 border rounded-xl transition-all w-full max-w-md text-center flex flex-col items-center ${
                    currentMCAP >= m.cap
                      ? "ring-4 ring-yellow-400 shadow-yellow-400/40 border-yellow-400/80"
                      : "opacity-60 border-yellow-400/30"
                  }`}
                >
                  <h3 className="text-xl font-bold text-yellow-300">
                    {m.label}
                  </h3>
                  <p className="text-sm text-yellow-100 mt-2">
                    Reward: {m.prize}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-yellow-400/20 bg-black/90 py-6">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-yellow-400 font-bold">DAONGERS</div>
            <div className="text-sm text-gray-300">
              © {new Date().getFullYear()} DAONGERS
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://x.com/Daongers_"
              target="_blank"
              className="text-gray-300 hover:text-yellow-400 text-sm"
            >
              Twitter
            </a>
            <a
              href="https://discord.com/invite/daosdotfun"
              target="_blank"
              className="text-gray-300 hover:text-yellow-400 text-sm"
            >
              Discord
            </a>
            <a
              href="https://t.me/official_daosfun"
              target="_blank"
              className="text-gray-300 hover:text-yellow-400 text-sm"
            >
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
