import { motion } from "motion/react";

const specsData = [
  { category: "Fluídica", specs: [
    { label: "Bomba", value: "VTi (Valve Timing intelligence)" },
    { label: "Modos", value: "Vacío, Flujo, Control Dual" },
    { label: "Nivel de Vacío", value: "0 - 650 mmHg" },
    { label: "Nivel de Flujo", value: "0 - 50 ml/min" }
  ]},
  { category: "Vitrectomía", specs: [
    { label: "Corte", value: "TDC (Two Dimensional Cutter)" },
    { label: "Velocidad Máx", value: "16,000 CPM (vía TDC)" },
    { label: "Presión de Trabajo", value: "2.5 - 3.5 bar" }
  ]},
  { category: "Láser", specs: [
    { label: "Tipo", value: "Integrated Green 532nm" },
    { label: "Potencia", value: "50 - 2000 mW" },
    { label: "Clase", value: "IV" }
  ]},
  { category: "Software", specs: [
    { label: "Interfaz", value: "Eva Nexus OS v2.0" },
    { label: "Feedback", value: "Smart-IOP 50Hz Sampling" },
    { label: "Conectividad", value: "DORC Cloud Sync" }
  ]}
];

export default function Specs() {
  return (
    <div className="space-y-12 py-10">
      <header className="space-y-4">
        <h2 className="text-4xl font-bold text-white tracking-tighter uppercase italic">Especificaciones Técnicas</h2>
        <p className="text-[#8E9299] max-w-2xl">Datos de rendimiento y características de hardware del sistema Eva Nexus.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {specsData.map((group, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#181818] border border-[#2A2A2A] rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-4 bg-[#222] border-bottom border-[#2A2A2A]">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500 font-bold">{group.category}</h3>
            </div>
            <div className="p-6 space-y-4">
              {group.specs.map((spec, j) => (
                <div key={j} className="flex justify-between items-center border-bottom border-[#222] pb-4 last:border-0 last:pb-0 group">
                  <span className="text-[#8E9299] text-sm group-hover:text-[#AAA] transition-colors">{spec.label}</span>
                  <span className="text-white font-mono text-xs bg-[#222] px-3 py-1 rounded ring-1 ring-[#333]">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-10 rounded-3xl bg-gradient-to-br from-[#181818] to-orange-950/20 border border-orange-900/30">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold text-white mb-6">Eficiencia VTi</h3>
          <div className="space-y-4 text-[#8E9299] text-sm leading-relaxed">
            <p>
              La tecnología propia de DORC elimina las limitaciones de las bombas tradicionales de Venturi o Peristálticas. 
              El control en milisegundos de las válvulas permite un flujo lineal exacto sin pulsaciones inesperadas.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {[
                { l: "Flow Accuracy", v: "±1%" },
                { l: "Vacuum Rise", v: "0.1s" },
                { l: "Safety Margin", v: ">200%" },
                { l: "Sample Rate", v: "1ms" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-bold text-white font-mono">{stat.v}</div>
                  <div className="text-[10px] uppercase tracking-wider">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
