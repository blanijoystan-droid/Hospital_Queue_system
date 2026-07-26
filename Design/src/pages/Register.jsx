import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Lock,
  Eye,
  EyeOff,
  Hospital,
} from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl p-8">

          {/* Logo */}
          <div className="flex justify-center">
            <div className="h-20 w-20 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <Hospital size={40} className="text-cyan-400" />
            </div>
          </div>

          <h1 className="text-center text-4xl font-bold text-white mt-6">
            Create Account
          </h1>

          <p className="text-center text-gray-400 mt-2">
            Join QueueCare and skip hospital queues.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-8">

            {/* Full Name */}
            <div>
              <label className="text-gray-300 text-sm">Full Name</label>

              <div className="mt-2 flex items-center bg-slate-800 rounded-xl px-4">
                <User className="text-cyan-400" size={20} />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-300 text-sm">Email</label>

              <div className="mt-2 flex items-center bg-slate-800 rounded-xl px-4">
                <Mail className="text-cyan-400" size={20} />
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-gray-300 text-sm">Phone Number</label>

              <div className="mt-2 flex items-center bg-slate-800 rounded-xl px-4">
                <Phone className="text-cyan-400" size={20} />
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white"
                />
              </div>
            </div>

            {/* DOB */}
            <div>
              <label className="text-gray-300 text-sm">Date of Birth</label>

              <div className="mt-2 flex items-center bg-slate-800 rounded-xl px-4">
                <Calendar className="text-cyan-400" size={20} />
                <input
                  type="date"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white"
                />
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="text-gray-300 text-sm">Gender</label>

              <select className="mt-2 w-full bg-slate-800 rounded-xl p-4 text-white outline-none">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Blood Group */}
            <div>
              <label className="text-gray-300 text-sm">Blood Group</label>

              <select className="mt-2 w-full bg-slate-800 rounded-xl p-4 text-white outline-none">
                <option>Select</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="text-gray-300 text-sm">Password</label>

              <div className="mt-2 flex items-center bg-slate-800 rounded-xl px-4">
                <Lock className="text-cyan-400" size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="text-gray-400" />
                  ) : (
                    <Eye className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-gray-300 text-sm">Confirm Password</label>

              <div className="mt-2 flex items-center bg-slate-800 rounded-xl px-4">
                <Lock className="text-cyan-400" size={20} />

                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? (
                    <EyeOff className="text-gray-400" />
                  ) : (
                    <Eye className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-gray-300 mt-6">
            <input type="checkbox" className="accent-cyan-500" />
            I agree to the Terms & Conditions
          </label>

          {/* Register Button */}
          <button className="w-full mt-8 bg-cyan-500 hover:bg-cyan-400 transition py-4 rounded-xl font-bold text-black">
            Create Account
          </button>

          {/* Login */}
          <p className="text-center text-gray-400 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-cyan-400 font-semibold"
            >
              Login
            </Link>
          </p>

        </div>
      </motion.div>
    </div>
  );
}
