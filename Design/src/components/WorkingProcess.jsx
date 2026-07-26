import { motion } from "framer-motion";
import {
  CalendarCheck2,
  MapPin,
  QrCode,
 Ticket,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Book Appointment",
    description:
      "Select hospital, department, doctor and preferred time slot. The appointment remains pending until hospital check-in.",
    icon: CalendarCheck2,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "02",
    title: "Visit Hospital",
    description:
      "Arrive at the hospital within the allowed check-in time before your appointment.",
    icon: MapPin,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "03",
    title: "Scan Hospital QR",
    description:
      "Scan the QR code placed at the reception. Your appointment is verified instantly.",
    icon: QrCode,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "04",
    title: "Receive Digital Token",
    description:
      "Get your queue token, estimated consultation time and live queue updates instantly.",
    icon: Ticket,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "05",
    title: "Meet the Doctor",
    description:
      "Get notified when only a few patients remain, reducing unnecessary waiting.",
    icon: Stethoscope,
    color: "from-indigo-500 to-violet-500",
  },
  {
    id: "06",
    title: "Consultation Complete",
    description:
      "Doctor marks your consultation complete and your appointment history is updated.",
    icon: CheckCircle2,
    color: "from-teal-500 to-cyan-500",
  },
];

export default function WorkingProcess() {
  return (
    <section className="bg-slate-950 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            Workflow
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            How QueueCare Works
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            A seamless hospital experience from booking your appointment
            to completing your consultation.
          </p>
        </motion.div>

        <div className="relative">

          {/* Center Line */}

          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 rounded-full"></div>

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                className={`relative mb-16 flex items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* Card */}

                <div className="md:w-1/2">

                  <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-500/40 transition">

                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6`}
                    >
                      <Icon className="text-white" size={30} />
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 mt-4 leading-7">
                      {step.description}
                    </p>

                  </div>

                </div>

                {/* Circle */}

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-slate-950 border-4 border-cyan-500 items-center justify-center text-cyan-400 font-bold text-lg shadow-lg shadow-cyan-500/40">
                  {step.id}
                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}