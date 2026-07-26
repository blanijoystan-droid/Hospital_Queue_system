import {
  User,
  Mail,
  Phone,
  Calendar,
  Droplets,
  ClipboardList,
  Clock,
  LogOut,
  Edit,
} from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center">
          My Profile
        </h1>

        <p className="text-center text-gray-400 mt-2">
          Manage your personal information and appointments.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Left Profile Card */}

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 text-center">

            <div className="h-28 w-28 rounded-full bg-cyan-500 mx-auto flex items-center justify-center">

              <User size={55} className="text-black" />

            </div>

            <h2 className="text-2xl font-bold mt-5">
              Hassan
            </h2>

            <p className="text-gray-400">
              Patient ID : P10254
            </p>

            <button className="mt-8 w-full bg-cyan-500 hover:bg-cyan-400 text-black py-3 rounded-xl font-bold flex justify-center items-center gap-2">

              <Edit size={18} />

              Edit Profile

            </button>

            <button className="mt-4 w-full border border-red-500 text-red-400 py-3 rounded-xl font-semibold flex justify-center items-center gap-2">

              <LogOut size={18} />

              Logout

            </button>

          </div>

          {/* Personal Details */}

          <div className="lg:col-span-2 space-y-6">

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

              <h2 className="text-2xl font-bold mb-6">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="flex gap-3">
                  <Mail className="text-cyan-400" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p>hassan@email.com</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="text-cyan-400" />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p>+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Calendar className="text-cyan-400" />
                  <div>
                    <p className="text-gray-400">Date of Birth</p>
                    <p>15 May 2005</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Droplets className="text-cyan-400" />
                  <div>
                    <p className="text-gray-400">Blood Group</p>
                    <p>O+</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Statistics */}

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-center">

                <ClipboardList className="mx-auto text-cyan-400" />

                <h2 className="text-3xl font-bold mt-3">
                  12
                </h2>

                <p className="text-gray-400">
                  Appointments
                </p>

              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-center">

                <Clock className="mx-auto text-yellow-400" />

                <h2 className="text-3xl font-bold mt-3">
                  A-27
                </h2>

                <p className="text-gray-400">
                  Current Token
                </p>

              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-center">

                <Clock className="mx-auto text-green-400" />

                <h2 className="text-3xl font-bold mt-3">
                  18 min
                </h2>

                <p className="text-gray-400">
                  Estimated Wait
                </p>

              </div>

            </div>

            {/* Recent Appointments */}

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

              <h2 className="text-2xl font-bold mb-6">
                Recent Appointments
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between bg-slate-800 p-4 rounded-xl">
                  <div>
                    <h3 className="font-semibold">
                      General Medicine
                    </h3>
                    <p className="text-gray-400">
                      Dr. Sharma
                    </p>
                  </div>

                  <span className="text-green-400">
                    Completed
                  </span>
                </div>

                <div className="flex justify-between bg-slate-800 p-4 rounded-xl">
                  <div>
                    <h3 className="font-semibold">
                      Cardiology
                    </h3>
                    <p className="text-gray-400">
                      Dr. Patel
                    </p>
                  </div>

                  <span className="text-green-400">
                    Completed
                  </span>
                </div>

                <div className="flex justify-between bg-slate-800 p-4 rounded-xl">
                  <div>
                    <h3 className="font-semibold">
                      Orthopaedics
                    </h3>
                    <p className="text-gray-400">
                      Dr. Kumar
                    </p>
                  </div>

                  <span className="text-yellow-400">
                    Upcoming
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
