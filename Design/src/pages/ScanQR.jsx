import {
  QrCode,
  Camera,
  Upload,
  ShieldCheck,
  Hospital,
  Calendar,
  CheckCircle,
} from "lucide-react";

export default function ScanQR() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <h1 className="text-4xl font-bold text-center">
          Hospital QR Check-In
        </h1>

        <p className="text-center text-gray-400 mt-3">
          Scan the QR code available at the hospital reception to confirm your
          appointment and receive your queue token.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mt-12">

          {/* Scanner */}

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

            <div className="flex items-center gap-3 mb-6">

              <QrCode className="text-cyan-400" />

              <h2 className="text-2xl font-bold">
                QR Scanner
              </h2>

            </div>

            <div className="h-80 rounded-2xl border-2 border-dashed border-cyan-500 flex flex-col items-center justify-center">

              <Camera size={70} className="text-cyan-400" />

              <p className="text-gray-400 mt-4">
                Camera Preview
              </p>

            </div>

            <button className="mt-8 w-full bg-cyan-500 hover:bg-cyan-400 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2">

              <Camera />

              Start Scanner

            </button>

            <button className="mt-4 w-full border border-cyan-500 text-cyan-400 py-4 rounded-xl font-semibold flex items-center justify-center gap-2">

              <Upload />

              Upload QR Image

            </button>

          </div>

          {/* Appointment Info */}

          <div className="space-y-6">

            <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

              <div className="flex items-center gap-2">

                <Hospital className="text-cyan-400" />

                <h2 className="text-xl font-bold">
                  Appointment Details
                </h2>

              </div>

              <div className="mt-5 space-y-4">

                <p>
                  <span className="text-gray-400">Hospital:</span>{" "}
                  ABC Multi Speciality Hospital
                </p>

                <p>
                  <span className="text-gray-400">Doctor:</span>{" "}
                  Dr. Sharma
                </p>

                <p>
                  <span className="text-gray-400">Department:</span>{" "}
                  General Medicine
                </p>

                <p className="flex items-center gap-2">
                  <Calendar size={18} className="text-cyan-400" />
                  Today • 10:30 AM
                </p>

              </div>

            </div>

            <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

              <div className="flex items-center gap-2 mb-4">

                <CheckCircle className="text-green-400" />

                <h2 className="text-xl font-bold">
                  How It Works
                </h2>

              </div>

              <ul className="space-y-3 text-gray-300 list-disc list-inside">

                <li>Reach the hospital before your appointment time.</li>

                <li>Scan the QR code at the reception desk.</li>

                <li>Your appointment will be verified instantly.</li>

                <li>A queue token will be generated automatically.</li>

                <li>Track your live queue from the Queue Status page.</li>

              </ul>

            </div>

            <div className="bg-green-500/10 border border-green-500 rounded-2xl p-5 flex gap-3">

              <ShieldCheck className="text-green-400 mt-1" />

              <div>

                <h3 className="font-bold text-green-400">
                  Secure Check-In
                </h3>

                <p className="text-gray-300 mt-1">
                  Only hospital-issued QR codes can confirm appointments,
                  preventing misuse and duplicate check-ins.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

