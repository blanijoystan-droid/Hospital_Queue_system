import { motion } from "framer-motion";
import {
  BrainCircuit,
  Hospital,
  Clock3,
  MapPinned,
  Users,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function AIRecommendation() {
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

          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-5 py-2 rounded-full text-cyan-400 font-semibold">

            <BrainCircuit size={18} />

            AI Smart Recommendation

          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Choose The Best Hospital
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-5">
            Our AI compares nearby hospitals based on travel time,
            queue length, doctor availability and estimated waiting
            time to recommend the fastest option.
          </p>

        </motion.div>

        {/* Recommendation Card */}

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden shadow-2xl"
        >

          {/* Top */}

          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8">

            <div className="flex flex-col md:flex-row justify-between gap-8">

              <div>

                <div className="flex items-center gap-3">

                  <Sparkles className="text-yellow-300" />

                  <h3 className="text-3xl font-bold text-white">
                    AI Recommended
                  </h3>

                </div>

                <div className="flex items-center gap-3 mt-6">

                  <Hospital className="text-white" />

                  <h2 className="text-2xl text-white font-bold">
                    Sunrise Hospital
                  </h2>

                </div>

              </div>

              <div className="text-center">

                <div className="text-6xl font-extrabold text-white">
                  95%
                </div>

                <p className="text-cyan-100 mt-2">
                  Match Score
                </p>

              </div>

            </div>

          </div>

          {/* Metrics */}

          <div className="grid md:grid-cols-4 gap-6 p-8">

            <div className="bg-slate-900 rounded-2xl p-6">

              <MapPinned className="text-cyan-400 mb-4"/>

              <p className="text-gray-400">
                Distance
              </p>

              <h3 className="text-2xl font-bold text-white mt-2">
                2.4 km
              </h3>

            </div>

            <div className="bg-slate-900 rounded-2xl p-6">

              <Users className="text-green-400 mb-4"/>

              <p className="text-gray-400">
                Queue
              </p>

              <h3 className="text-2xl font-bold text-white mt-2">
                5 Patients
              </h3>

            </div>

            <div className="bg-slate-900 rounded-2xl p-6">

              <Clock3 className="text-orange-400 mb-4"/>

              <p className="text-gray-400">
                Waiting Time
              </p>

              <h3 className="text-2xl font-bold text-white mt-2">
                18 mins
              </h3>

            </div>

            <div className="bg-slate-900 rounded-2xl p-6">

              <BrainCircuit className="text-purple-400 mb-4"/>

              <p className="text-gray-400">
                Doctor Available
              </p>

              <h3 className="text-2xl font-bold text-white mt-2">
                Yes
              </h3>

            </div>

          </div>

          {/* AI Reason */}

          <div className="border-t border-white/10 p-8">

            <h3 className="text-2xl font-bold text-white mb-6">
              Why did AI choose this hospital?
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              <div className="bg-slate-900 rounded-xl p-5 border border-white/5">
                ✅ Shortest waiting time among nearby hospitals
              </div>

              <div className="bg-slate-900 rounded-xl p-5 border border-white/5">
                ✅ Doctor available during your preferred slot
              </div>

              <div className="bg-slate-900 rounded-xl p-5 border border-white/5">
                ✅ Less crowded than nearby hospitals
              </div>

              <div className="bg-slate-900 rounded-xl p-5 border border-white/5">
                ✅ Closest hospital with fastest consultation
              </div>

            </div>

            <button className="mt-8 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-xl text-black font-bold flex items-center gap-3">

              Book Recommended Hospital

              <ChevronRight size={20}/>

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

