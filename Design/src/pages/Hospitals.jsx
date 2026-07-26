import { useState } from "react";
import {
  Search,
  MapPin,
  Clock,
  Users,
  Star,
  Stethoscope,
  Hospital,
  Sparkles,
} from "lucide-react";

export default function Hospitals() {
  const [search, setSearch] = useState("");

  const hospitals = [
    {
      id: 1,
      name: "ABC Multi Speciality Hospital",
      rating: 4.8,
      distance: "2.3 km",
      queue: 6,
      waiting: "18 min",
      doctors: 18,
      departments: "General • Cardiology • Orthopaedics",
      recommended: true,
    },
    {
      id: 2,
      name: "City Care Hospital",
      rating: 4.6,
      distance: "4.8 km",
      queue: 15,
      waiting: "55 min",
      doctors: 12,
      departments: "General • Neurology • ENT",
      recommended: false,
    },
    {
      id: 3,
      name: "Apollo Medical Center",
      rating: 4.9,
      distance: "6.2 km",
      queue: 3,
      waiting: "10 min",
      doctors: 22,
      departments: "Cardiology • Oncology • ICU",
      recommended: false,
    },
    {
      id: 4,
      name: "Green Valley Hospital",
      rating: 4.4,
      distance: "5.1 km",
      queue: 9,
      waiting: "28 min",
      doctors: 15,
      departments: "Dermatology • Pediatrics • General",
      recommended: false,
    },
  ];

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(search.toLowerCase())
  );

  const queueColor = (queue) => {
    if (queue <= 5) return "text-green-400";
    if (queue <= 10) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-10">

        <h1 className="text-5xl font-bold text-center">
          Find the Best Hospital
        </h1>

        <p className="text-center text-gray-400 mt-3">
          Choose hospitals based on live queue status, waiting time and AI
          recommendations.
        </p>

        {/* Search */}
        <div className="mt-10 relative max-w-xl mx-auto">

          <Search className="absolute left-5 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search hospitals..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-4 pl-14 pr-4 outline-none focus:border-cyan-500"
          />

        </div>

        {/* AI Recommendation */}
        <div className="mt-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center">

          <div>

            <div className="flex items-center gap-2">

              <Sparkles />

              <h2 className="text-3xl font-bold">
                AI Recommended Hospital
              </h2>

            </div>

            <p className="mt-3 text-white/90">
              ABC Multi Speciality Hospital has the lowest waiting time
              compared to nearby hospitals.
            </p>

          </div>

          <button className="mt-6 md:mt-0 bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:scale-105 transition">
            Book Now
          </button>

        </div>

        {/* Hospital Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-12 pb-16">

          {filteredHospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="bg-slate-900 rounded-3xl p-7 border border-slate-800 hover:border-cyan-500 transition"
            >
              <div className="flex justify-between items-start">

                <div>

                  <div className="flex items-center gap-2">

                    <Hospital className="text-cyan-400" />

                    <h2 className="text-2xl font-bold">
                      {hospital.name}
                    </h2>

                  </div>

                  <div className="flex items-center gap-2 mt-3 text-gray-400">

                    <MapPin size={18} />

                    {hospital.distance}

                  </div>

                </div>

                {hospital.recommended && (
                  <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    AI Pick
                  </span>
                )}

              </div>

              <div className="grid grid-cols-2 gap-5 mt-8">

                <div className="bg-slate-800 rounded-xl p-4">

                  <div className="flex items-center gap-2">

                    <Star className="text-yellow-400" size={18} />

                    Rating

                  </div>

                  <p className="text-2xl font-bold mt-2">
                    {hospital.rating}
                  </p>

                </div>

                <div className="bg-slate-800 rounded-xl p-4">

                  <div className="flex items-center gap-2">

                    <Users size={18} />

                    Queue

                  </div>

                  <p
                    className={`text-2xl font-bold mt-2 ${queueColor(
                      hospital.queue
                    )}`}
                  >
                    {hospital.queue} Patients
                  </p>

                </div>

                <div className="bg-slate-800 rounded-xl p-4">

                  <div className="flex items-center gap-2">

                    <Clock size={18} />

                    Waiting

                  </div>

                  <p className="text-2xl font-bold mt-2">
                    {hospital.waiting}
                  </p>

                </div>

                <div className="bg-slate-800 rounded-xl p-4">

                  <div className="flex items-center gap-2">

                    <Stethoscope size={18} />

                    Doctors

                  </div>

                  <p className="text-2xl font-bold mt-2">
                    {hospital.doctors}
                  </p>

                </div>

              </div>

              <div className="mt-6">

                <p className="text-gray-400 text-sm">
                  Departments
                </p>

                <p className="mt-2">
                  {hospital.departments}
                </p>

              </div>

              <button className="mt-8 w-full bg-cyan-500 hover:bg-cyan-400 text-black py-4 rounded-xl font-bold transition">
                Book Appointment
              </button>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

