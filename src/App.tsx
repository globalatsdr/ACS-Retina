import { motion } from "motion/react";
import { Laptop, Cpu, Settings, Package, BookOpen, MessageSquare, ChevronRight, Activity, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";
import AIChat from "./components/AIChat";
import Specs from "./components/Specs";
import Consumables from "./components/Consumables";
import Manuals from "./components/Manuals";
import Hero from "./components/Hero";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "specs": return <Specs />;
      case "consumables": return <Consumables />;
      case "manuals": return <Manuals />;
      case "chat": return <AIChat />;
      default: return <Hero onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#E4E3E0] font-sans selection:bg-orange-500/30">
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-20 md:w-64 bg-[#181818] border-right border-[#2A2A2A] z-50 flex flex-col">
        <div className="p-6 border-bottom border-[#2A2A2A] flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center shrink-0">
            <Activity className="text-white w-5 h-5" />
          </div>
          <span className="hidden md:block font-bold tracking-tighter text-xl text-white">ACS-RETINA</span>
        </div>

        <div className="flex-1 py-10 space-y-2 px-3">
          {[
            { id: "home", label: "Inicio", icon: Laptop },
            { id: "specs", label: "Especificaciones", icon: Cpu },
            { id: "consumables", label: "Consumibles", icon: Package },
            { id: "manuals", label: "Manuales", icon: BookOpen },
            { id: "chat", label: "Asistente AI", icon: MessageSquare },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all group ${
                activeTab === item.id 
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-900/20" 
                  : "text-[#8E9299] hover:bg-[#252525] hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="hidden md:block font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6 border-top border-[#2A2A2A]">
          <div className="hidden md:block">
            <p className="text-[10px] uppercase tracking-widest text-[#4A4A4A] font-mono mb-2">System Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-green-500/80 underline underline-offset-4">EVA NEXUS CONNECTED</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pl-20 md:pl-64 transition-all min-h-screen">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="p-4 md:p-10 max-w-7xl mx-auto"
        >
          {renderContent()}
        </motion.div>
      </main>

      {/* Background Decorative Element */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-gradient-to-l from-orange-900/5 to-transparent pointer-events-none -z-10" />
    </div>
  );
}
