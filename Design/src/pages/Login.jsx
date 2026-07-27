import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Hospital,
} from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-8">

          {/* Logo */}
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/20">
              <Hospital className="text-cyan-400" size={40} />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-center text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-center text-gray-400">
            Login to access your healthcare dashboard
          </p>

          {/* Email */}
          <div className="mt-8">
            <label className="mb-2 block text-sm text-gray-300">
              Email Address
            </label>

            <div className="flex items-center rounded-xl bg-slate-800 px-4">
              <Mail className="text-cyan-400" size={20} />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-4 text-white outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>

            <div className="flex items-center rounded-xl bg-slate-800 px-4">
              <Lock className="text-cyan-400" size={20} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-transparent px-3 py-4 text-white outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="text-gray-400" size={20} />
                ) : (
                  <Eye className="text-gray-400" size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="mt-5 flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-gray-300">
              <input
                type="checkbox"
                className="accent-cyan-500"
              />
              Remember me
            </label>

            <button className="text-cyan-400 hover:text-cyan-300">
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}
          <button
            onClick={() => navigate("/dashboard")}
            className="mt-8 w-full rounded-xl bg-cyan-500 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Login
          </button>

          {/* Divider */}
          <div className="my-8 flex items-center">

            <div className="h-px flex-1 bg-gray-700"></div>

            <span className="px-4 text-gray-400">
              OR
            </span>

            <div className="h-px flex-1 bg-gray-700"></div>

          </div>

          {/* Google Button */}
          <button className="w-full rounded-xl border border-gray-600 py-4 font-medium text-white transition hover:bg-slate-800">
            Continue with Google
          </button>

          {/* Register */}
          <p className="mt-8 text-center text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Register
            </Link>
          </p>

          {/* Security */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-green-400">

            <ShieldCheck size={18} />

            Secure & Encrypted Login

          </div>

        </div>
      </motion.div>

    </div>
  );
}