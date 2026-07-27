import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import QuickActions from "../components/QuickActions";
import LiveQueue from "../components/LiveQueue";
import AIRecommendation from "../components/AIRecommendation";
import Features from "../components/Features";
import WorkingProcess from "../components/WorkingProcess";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <Statistics />
      <QuickActions />
      <LiveQueue />
      <AIRecommendation />
      <Features />
      <WorkingProcess />
      <Footer />
      <Link
  to="/login"
  className="bg-cyan-500 px-6 py-3 rounded-xl text-black font-bold"
>
  Login
</Link>
    </div>
  );
}