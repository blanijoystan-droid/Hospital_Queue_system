import { motion } from "framer-motion";
import {
  Hospital,
  Users,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Hospitals Connected",
    value: "120+",
    icon: Hospital,
    color: "text-cyan-400",
    glow: "from-cyan-500/20 to-cyan-700/10",
  },
  {
    id: 2,
    title: "Patients Served",
    value: "25K+",
    icon: Users,
    color: "text-green-400",
    glow: "from-green-500/20 to-green-700/10",
  },
  {
    id: 3,
    title: "Average Waiting Time Saved",
    value: "45 mins",
    icon: Clock3,
    color: "text-orange-400",
    glow: "from-orange-500/20 to-orange-700/10",
  },
  {
    id: 4,
    title: "Successful QR Check-ins",
    value: "98%",
    icon: ShieldCheck,
    color: "text-purple-400",
    glow: "from-purple-500/20 to-purple-700/10",
  },
];

export default function Statistics() {
  return (
    <section className="bg-slate-950 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Impact
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Helping hospitals reduce waiting time while improving
            patient experience through intelligent queue management.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${item.glow}
                backdrop-blur-xl p-8 shadow-xl`}
              >

                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/5 blur-2xl"></div>

                <div
                  className={`w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center ${item.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-4xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.title}
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}