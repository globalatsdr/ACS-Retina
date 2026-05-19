import { motion } from "motion/react";
import { ChevronRight, ShieldCheck, Zap, Activity, Laptop } from "lucide-react";

export default function Hero({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <div className="space-y-16 py-10">
      <section className="relative rounded-3xl overflow-hidden aspect-[21/9] bg-[#1a1a1a] border border-[#2A2A2A]">
        <img 
          src="/src/assets/images/eva_nexus_hero_1779204760189.png" 
          alt="Eva Nexus System" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
        <div className="absolute bottom-10 left-10 max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 italic"
          >
            EVA NEXUS
          </motion.h1>
          <p className="text-lg text-[#8E9299] mb-8 leading-relaxed">
            La plataforma definitiva de DORC para cirugía de polo anterior y posterior. 
            Potenciamos la precisión con integración total y tecnología Dual-Pump.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate('specs')}
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all flex items-center gap-2 group"
            >
              Explorar Equipo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('chat')}
              className="bg-black/40 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Consultar Asistente
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Bomba Dual VTi", desc: "Flow y Vacuum integrados para un control absoluto del fluido.", icon: Activity },
          { title: "Smart-IOP", desc: "Mantenimiento proactivo de la presión intraocular estable.", icon: ShieldCheck },
          { title: "Láser Integrado", desc: "Módulo láser verde de 532nm totalmente configurable.", icon: Zap },
        ].map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="p-8 rounded-2xl bg-[#181818] border border-[#2A2A2A] hover:border-orange-500/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-600/10 flex items-center justify-center mb-6 group-hover:bg-orange-600/20 transition-colors">
              <feature.icon className="text-orange-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
            <p className="text-[#8E9299] text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      <section className="rounded-3xl p-10 bg-[#181818] border border-[#2A2A2A] relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tight italic">Excelencia en Cada Gauge</h2>
            <p className="text-[#8E9299] leading-relaxed">
              Eva Nexus está diseñado para trabajar en 23G, 25G y 27G con la misma eficiencia. 
              El sistema de cánulas y trócares One-Step asegura una entrada mínimamente invasiva.
            </p>
            <div className="flex gap-4 font-mono text-xs">
              <span className="px-3 py-1 rounded bg-orange-600/20 text-orange-500 border border-orange-500/30">23G</span>
              <span className="px-3 py-1 rounded bg-orange-600/20 text-orange-500 border border-orange-500/30">25G</span>
              <span className="px-3 py-1 rounded bg-orange-600/20 text-orange-500 border border-orange-500/30">27G</span>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-video rounded-xl bg-[#222] border border-[#333] flex items-center justify-center">
             <Laptop className="w-12 h-12 text-[#333]" />
          </div>
        </div>
      </section>
    </div>
  );
}
