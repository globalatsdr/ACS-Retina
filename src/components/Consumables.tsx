import { motion } from "motion/react";
import { Package, Search, Tag, Info } from "lucide-react";
import { useState } from "react";

const consumablesList = [
  { id: 1, name: "Vitrectomy Pack TDC 25G", cat: "3000.TDC.25", desc: "Two-Dimensional Cutter (TDC) con 16,000 CPM, cassette y accesorios.", price: "Premium" },
  { id: 2, name: "Láser Probe 532nm Direct", cat: "2010.L", desc: "Sonda láser directa de 25G para fotocoagulación endo-ocular.", price: "Standard" },
  { id: 3, name: "Heavy Liquid - Decalina", cat: "1050.5", desc: "Líquido pesado de alta purificación, 5ml.", price: "Chemicals" },
  { id: 4, name: "Silicone Oil 1000 cSt", cat: "S1000.10", desc: "Aceite de silicona para tamponamiento prolongado, 10ml.", price: "Fluids" },
  { id: 5, name: "Trocar System One-Step 27G", cat: "TS.27.OS", desc: "Sistema de entrada con cánulas de baja fricción y cierre valvulado.", price: "Standard" },
  { id: 6, name: "Iluminación Chandelier 25G", cat: "CH.25.L", desc: "Sistema de iluminación panorámica de amplio ángulo.", price: "Lighting" },
];

export default function Consumables() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = consumablesList.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-10 py-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white tracking-tighter uppercase italic">Consumibles</h2>
          <p className="text-[#8E9299] max-w-xl">Catálogo de packs, sondas y líquidos compatibles con Eva Nexus.</p>
        </div>
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4A4A] group-focus-within:text-orange-500 transition-colors" />
          <input 
            type="text"
            placeholder="Buscar por nombre o CAT..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#181818] border border-[#2A2A2A] rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 w-full md:w-80 transition-all"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-[#181818] border border-[#2A2A2A] rounded-2xl p-6 hover:border-orange-500/30 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#222] flex items-center justify-center group-hover:bg-orange-600/10 transition-colors">
                  <Package className="w-5 h-5 text-orange-500" />
                </div>
                <span className="text-[10px] font-mono text-[#4A4A4A] uppercase bg-[#111] px-2 py-1 rounded ring-1 ring-[#2A2A2A]">
                  CAT: {item.cat}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">{item.name}</h3>
              <p className="text-[#8E9299] text-sm leading-relaxed mb-6">{item.desc}</p>
            </div>
            
            <div className="flex items-center justify-between border-top border-[#222] pt-4 mt-4">
              <span className="text-[10px] text-orange-400 font-bold uppercase tracking-widest">{item.price}</span>
              <button className="text-[11px] font-bold text-white flex items-center gap-1 hover:underline underline-offset-4">
                <Info className="w-3 h-3" /> Detalles
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 border-[1px] border-dashed border-[#2A2A2A] rounded-3xl">
          <p className="text-[#4A4A4A] font-mono">NO INSTRUMENTS FOUND MATCHING SEARCH</p>
        </div>
      )}
    </div>
  );
}
