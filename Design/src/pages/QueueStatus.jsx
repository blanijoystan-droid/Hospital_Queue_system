import {
  Clock,
  User,
  Hospital,
  Users,
  RefreshCw,
} from "lucide-react";

export default function QueueStatus() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center">
          Live Queue Status
        </h1>

        <p className="text-center text-gray-400 mt-2">
          Track your position in the hospital queue.
        </p>

        {/* Main Queue Card */}

        <div className="mt-10 bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl">

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <Hospital className="text-cyan-400" />
                <h2 className="font-semibold">Hospital</h2>
              </div>

              <p className="mt-3 text-2xl font-bold">
                ABC Multi Speciality Hospital
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <User className="text-cyan-400" />
                <h2 className="font-semibold">Doctor</h2>
              </div>

              <p className="mt-3 text-2xl font-bold">
                Dr. Sharma
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-gray-400">
                Current Token
              </h3>

              <p className="text-5xl font-bold mt-2 text-green-400">
                A-21
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-gray-400">
                Your Token
              </h3>

              <p className="text-5xl font-bold mt-2 text-cyan-400">
                A-27
              </p>
            </div>

          </div>

          {/* Stats */}

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-slate-800 rounded-2xl p-6">

              <div className="flex items-center gap-2">
                <Users className="text-yellow-400" />
                <span>Patients Ahead</span>
              </div>

              <p className="text-4xl font-bold mt-3">
                6
              </p>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6">

              <div className="flex items-center gap-2">
                <Clock className="text-cyan-400" />
                <span>Estimated Waiting</span>
              </div>

              <p className="text-4xl font-bold mt-3">
                18 min
              </p>

            </div>

          </div>

          {/* Progress */}

          <div className="mt-10">

            <div className="flex justify-between mb-2">

              <span>Queue Progress</span>

              <span>70%</span>

            </div>

            <div className="w-full h-4 bg-slate-700 rounded-full overflow-hidden">

              <div className="w-[70%] h-full bg-cyan-500"></div>

            </div>

          </div>

          {/* Status */}

          <div className="mt-8 bg-green-500/20 border border-green-500 rounded-xl p-5">

            <p className="text-green-400 font-semibold text-lg">
              ✔ Your appointment is confirmed.
            </p>

            <p className="text-gray-300 mt-2">
              Please stay near the consultation room. You'll be notified when your token is next.
            </p>

          </div>

          {/* Button */}

          <button className="mt-8 w-full bg-cyan-500 hover:bg-cyan-400 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2">

            <RefreshCw size={20} />

            Refresh Queue

          </button>

        </div>

      </div>

    </div>
  );
}

