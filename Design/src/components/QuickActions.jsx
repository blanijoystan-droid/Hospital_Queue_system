import { motion } from "framer-motion";
import {
  CalendarCheck2,
  QrCode,
  Clock3,
  MapPinned,
} from "lucide-react";

const actions = [
  {
    id: 1,
    title: "Book Appointment",
    description:
      "Schedule your appointment in advance and avoid waiting.",
    icon: CalendarCheck2,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "Scan QR",
    description:
      "Check in instantly at the hospital and receive your token.",
    icon: QrCode,
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "Track Queue",
    description:
      "Monitor your live token and estimated consultation time.",
    icon: Clock3,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 4,
    title: "Nearby Hospitals",
    description:
      "Compare waiting times and choose the best hospital nearby.",
    icon: MapPinned,
    color: "from-orange-500 to-red-500",
  },
];

export default function QuickActions() {
  return (
    <section className="bg-slate-950 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >

          <span className="text-cyan-400 font-semibold tracking-widest uppercase">
            Quick Access
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Everything You Need
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Perform important actions with a single tap.
            Faster appointments, smarter queues, and
            better healthcare.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {actions.map((action, index) => {

            const Icon = action.icon;

            return (

              <motion.div
                key={action.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 p-8 cursor-pointer transition-all"
              >

                {/* Glow */}

                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${action.color}`}
                />

                {/* Content */}

                <div className="relative z-10">

                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">

                    <Icon
                      size={34}
                      className="text-cyan-400 group-hover:text-white transition"
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {action.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-white/90 transition">
                    {action.description}
                  </p>

                  <button
                    className="mt-8 px-5 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-white transition"
                  >
                    Explore →
                  </button>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}