import { motion } from "framer-motion";
import {
  Hospital,
  Clock3,
  Users,
  ArrowRight,
  Activity,
} from "lucide-react";

const hospitals = [
  {
    id: 1,
    name: "City Care Hospital",
    department: "General Medicine",
    waiting: 18,
    currentToken: "A-21",
    avgTime: "45 mins",
    status: "Busy",
    color: "bg-red-500",
  },
  {
    id: 2,
    name: "Sunrise Hospital",
    department: "Cardiology",
    waiting: 6,
    currentToken: "C-12",
    avgTime: "18 mins",
    status: "Fast",
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "LifeCare Medical",
    department: "Orthopedics",
    waiting: 11,
    currentToken: "O-08",
    avgTime: "30 mins",
    status: "Moderate",
    color: "bg-yellow-500",
  },
];

export default function LiveQueue() {
  return (
    <section className="bg-slate-950 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >

          <span className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            Live Queue Monitor
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Check Hospital Queue Before You Visit
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            Compare hospitals in real time, view current tokens,
            waiting patients and average consultation time before
            booking your appointment.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {hospitals.map((hospital, index) => (

            <motion.div
              key={hospital.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl overflow-hidden"
            >

              {/* Header */}

              <div className="p-6 border-b border-white/10 flex justify-between items-center">

                <div>

                  <div className="flex items-center gap-3">

                    <Hospital className="text-cyan-400"/>

                    <h3 className="text-xl font-bold text-white">
                      {hospital.name}
                    </h3>

                  </div>

                  <p className="text-gray-400 mt-2">
                    {hospital.department}
                  </p>

                </div>

                <span
                  className={`w-3 h-3 rounded-full ${hospital.color}`}
                />

              </div>

              {/* Body */}

              <div className="p-6 space-y-5">

                <div className="flex justify-between">

                  <div className="flex items-center gap-2 text-gray-300">

                    <Users size={20}/>

                    Waiting

                  </div>

                  <span className="text-white font-bold">
                    {hospital.waiting}
                  </span>

                </div>

                <div className="flex justify-between">

                  <div className="flex items-center gap-2 text-gray-300">

                    <Activity size={20}/>

                    Current Token

                  </div>

                  <span className="text-cyan-400 font-bold">
                    {hospital.currentToken}
                  </span>

                </div>

                <div className="flex justify-between">

                  <div className="flex items-center gap-2 text-gray-300">

                    <Clock3 size={20}/>

                    Avg Waiting

                  </div>

                  <span className="text-green-400 font-bold">
                    {hospital.avgTime}
                  </span>

                </div>

              </div>

              {/* Footer */}

              <div className="px-6 pb-6">

                <button
                  className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 transition py-3 text-black font-semibold flex items-center justify-center gap-2"
                >
                  View Queue

                  <ArrowRight size={18}/>

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}