import { useState } from "react";
import { Calendar, Clock, Hospital, Stethoscope, User } from "lucide-react";

export default function BookAppointment() {
  const [hospital, setHospital] = useState("");
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const handleBooking = () => {
    if (
      !hospital ||
      !department ||
      !doctor ||
      !date ||
      !time
    ) {
      alert("Please fill all required fields.");
      return;
    }

    alert("Appointment Requested Successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center">
          Book Appointment
        </h1>

        <p className="text-center text-gray-400 mt-3">
          Schedule your hospital visit without waiting in long queues.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Left Form */}

          <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800">

            {/* Hospital */}

            <label className="font-semibold flex items-center gap-2">
              <Hospital size={18} />
              Hospital
            </label>

            <select
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="w-full mt-2 mb-6 bg-slate-800 rounded-xl p-4 outline-none"
            >
              <option value="">Select Hospital</option>
              <option>City Hospital</option>
              <option>Apollo Hospital</option>
              <option>Care Hospital</option>
              <option>Government Hospital</option>
            </select>

            {/* Department */}

            <label className="font-semibold flex items-center gap-2">
              <Stethoscope size={18} />
              Department
            </label>

            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full mt-2 mb-6 bg-slate-800 rounded-xl p-4 outline-none"
            >
              <option value="">Select Department</option>
              <option>General Medicine</option>
              <option>Cardiology</option>
              <option>Orthopaedics</option>
              <option>Neurology</option>
              <option>Dermatology</option>
            </select>

            {/* Doctor */}

            <label className="font-semibold flex items-center gap-2">
              <User size={18} />
              Doctor
            </label>

            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="w-full mt-2 mb-6 bg-slate-800 rounded-xl p-4 outline-none"
            >
              <option value="">Select Doctor</option>
              <option>Dr. Sharma</option>
              <option>Dr. Patel</option>
              <option>Dr. Kumar</option>
              <option>Dr. Reddy</option>
            </select>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Date */}

              <div>

                <label className="font-semibold flex items-center gap-2">
                  <Calendar size={18} />
                  Appointment Date
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full mt-2 bg-slate-800 rounded-xl p-4 outline-none"
                />

              </div>

              {/* Time */}

              <div>

                <label className="font-semibold flex items-center gap-2">
                  <Clock size={18} />
                  Time Slot
                </label>

                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full mt-2 bg-slate-800 rounded-xl p-4 outline-none"
                />

              </div>

            </div>

            {/* Symptoms */}

            <label className="font-semibold mt-6 block">
              Symptoms (Optional)
            </label>

            <textarea
              rows="4"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Describe your symptoms..."
              className="w-full mt-2 bg-slate-800 rounded-xl p-4 outline-none resize-none"
            ></textarea>

          </div>

          {/* Summary */}

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Appointment Summary
            </h2>

            <div className="space-y-4">

              <div>
                <p className="text-gray-400">Hospital</p>
                <p>{hospital || "--"}</p>
              </div>

              <div>
                <p className="text-gray-400">Department</p>
                <p>{department || "--"}</p>
              </div>

              <div>
                <p className="text-gray-400">Doctor</p>
                <p>{doctor || "--"}</p>
              </div>

              <div>
                <p className="text-gray-400">Date</p>
                <p>{date || "--"}</p>
              </div>

              <div>
                <p className="text-gray-400">Time</p>
                <p>{time || "--"}</p>
              </div>

              <div>
                <p className="text-gray-400">Status</p>

                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm">
                  Pending Check-in
                </span>

              </div>

            </div>

            <button
              onClick={handleBooking}
              className="mt-8 w-full bg-cyan-500 hover:bg-cyan-400 transition rounded-xl py-4 text-black font-bold"
            >
              Request Appointment
            </button>

            <p className="text-gray-400 text-sm mt-5">
              Your appointment will only be confirmed after scanning the QR code
              at the hospital reception on the appointment day.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
