import { motion } from "framer-motion";
import {
  CalendarDays,
  QrCode,
  Clock3,
  BellRing,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Smart Appointment Booking",
    description:
      "Book appointments in advance with your preferred hospital, department, doctor, and time slot.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: QrCode,
    title: "QR Check-In",
    description:
      "Scan the hospital QR code to instantly confirm your appointment and receive your digital token.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock3,
    title: "Live Queue Tracking",
    description:
      "Monitor your token, patients ahead, and estimated consultation time in real time.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BellRing,
    title: "Smart Notifications",
    description:
      "Receive alerts when your turn is approaching so you don't need to wait outside the doctor's room.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BrainCircuit,
    title: "AI Hospital Recommendation",
    description:
      "Compare hospitals using travel time, queue length, doctor availability, and waiting time.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: ShieldCheck,
    title: "Secure Digital Experience",
    description:
      "Your appointments, queue details, and medical information are securely managed and protected.",
    color: "from-teal-500 to-cyan-500",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Powerful Features for
            <span className="text-cyan-400"> Smarter Healthcare</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
            Everything you need to reduce waiting time,
            improve hospital efficiency, and provide
            a seamless patient experience.
          </p>
        </motion.div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-8"
              >

                {/* Glow */}

                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-br ${feature.color}`}
                />

                {/* Icon */}

                <div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon size={30} className="text-white" />
                </div>

                {/* Title */}

                <h3 className="relative mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="relative mt-5 text-gray-400 leading-7 group-hover:text-gray-300 transition">
                  {feature.description}
                </p>

                {/* Bottom Line */}

                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${feature.color}`}
                />

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}
