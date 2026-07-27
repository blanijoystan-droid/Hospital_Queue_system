import { Link } from "react-router-dom";
import {
  CalendarCheck,
  Hospital,
  Clock3,
  QrCode,
  User,
} from "lucide-react";

const actions = [
  {
    title: "Hospitals",
    icon: Hospital,
    link: "/hospitals",
    color: "bg-blue-500",
  },
  {
    title: "Book Appointment",
    icon: CalendarCheck,
    link: "/book",
    color: "bg-cyan-500",
  },
  {
    title: "Queue Status",
    icon: Clock3,
    link: "/queue",
    color: "bg-green-500",
  },
  {
    title: "Scan QR",
    icon: QrCode,
    link: "/scan",
    color: "bg-purple-500",
  },
  {
    title: "Profile",
    icon: User,
    link: "/profile",
    color: "bg-orange-500",
  },
];

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-2">
        Welcome 👋
      </h1>

      <p className="text-gray-400 mb-10">
        Manage your appointments and hospital queue from one place.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.link}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-400 transition hover:scale-105"
            >
              <div
                className={`w-14 h-14 rounded-xl ${action.color} flex items-center justify-center mb-5`}
              >
                <Icon size={28} />
              </div>

              <h2 className="text-xl font-semibold">
                {action.title}
              </h2>

              <p className="text-gray-400 mt-2">
                Open {action.title}
              </p>
            </Link>
          );
        })}

      </div>
    </div>
  );
}