import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarCheck, QrCode, Hospital, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">
            AI Powered Hospital Queue System
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Skip the Queue.
            <br />
            <span className="text-cyan-400">
              Not the Care.
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-8">
            Book your appointment online, scan a QR code at the hospital,
            receive your token instantly, and monitor your live queue without
            waiting in long lines.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            {/* Book Appointment */}
            <Link
              to="/book"
              className="flex items-center gap-2 px-7 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold"
            >
              <CalendarCheck size={22} />
              Book Appointment
            </Link>

            {/* Scan QR */}
            <Link
              to="/scan"
              className="flex items-center gap-2 px-7 py-4 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
            >
              <QrCode size={22} />
              Scan QR
            </Link>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">

            <h2 className="text-2xl font-bold text-white mb-8">
              Live Queue Preview
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between bg-slate-800 p-4 rounded-xl">
                <div className="flex gap-3">
                  <Hospital className="text-cyan-400" />
                  <span className="text-white">
                    City Hospital
                  </span>
                </div>

                <span className="text-cyan-400 font-bold">
                  Token A-21
                </span>
              </div>

              <div className="flex justify-between bg-slate-800 p-4 rounded-xl">
                <span className="text-gray-300">
                  Your Token
                </span>

                <span className="text-white font-bold">
                  A-27
                </span>
              </div>

              <div className="flex justify-between bg-slate-800 p-4 rounded-xl">
                <span className="text-gray-300">
                  Patients Ahead
                </span>

                <span className="text-white font-bold">
                  6
                </span>
              </div>

              <div className="flex justify-between bg-slate-800 p-4 rounded-xl">
                <div className="flex gap-2">
                  <Clock className="text-cyan-400" />
                  <span className="text-gray-300">
                    Estimated Time
                  </span>
                </div>

                <span className="text-green-400 font-bold">
                  10:48 AM
                </span>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}