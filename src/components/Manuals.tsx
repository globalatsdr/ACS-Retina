import { motion } from "motion/react";
import { FileText, Download, ExternalLink, Clock } from "lucide-react";

const manualsList = [
  { title: "Manual de Operación Eva Nexus", type: "PDF", size: "12.4 MB", date: "2024-03-10", desc: "Guía completa para el uso clínico y técnico del equipo." },
  { title: "Guía de Mantenimiento Preventivo", type: "PDF", size: "4.8 MB", date: "2024-01-15", desc: "Instrucciones de limpieza y esterilización del panel y accesorios." },
  { title: "Protocolos de Cirugía Vitrorretinal", type: "DOCX", size: "2.1 MB", date: "2024-05-02", desc: "Configuraciones recomendadas según patología ocular." },
  { title: "Lista de Errores y Solución de Problemas", type: "PDF", size: "3.2 MB", date: "2023-11-20", desc: "Referencia rápida para códigos de error del sistema VTi." },
];

export default function Manuals() {
  return (
    <div className="space-y-12 py-10">
      <header className="space-y-4">
        <h2 className="text-4xl font-bold text-white tracking-tighter uppercase italic">Manuales y Recursos</h2>
        <p className="text-[#8E9299] max-w-2xl">Documentación oficial y guías rápidas para la operación del Eva Nexus.</p>
      </header>

      <div className="space-y-4">
        {manualsList.map((doc, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-[#181818] border border-[#2A2A2A] rounded-2xl hover:border-orange-500/30 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-orange-600/5 flex items-center justify-center shrink-0 group-hover:bg-orange-600/10 transition-colors">
              <FileText className="text-orange-500 w-7 h-7" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors">{doc.title}</h3>
                <span className="px-2 py-0.5 rounded bg-[#222] text-[10px] text-[#8E9299] font-mono border border-[#333]">{doc.type}</span>
              </div>
              <p className="text-sm text-[#8E9299] leading-relaxed">{doc.desc}</p>
              <div className="flex items-center gap-4 text-[10px] text-[#4A4A4A] font-mono uppercase tracking-widest">
                <span className="flex items-center gap-1"><Download className="w-3 h-3" /> {doc.size}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> ACTUALIZADO: {doc.date}</span>
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#222] hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-lg shadow-black/20">
                Descargar <Download className="w-3 h-3" />
              </button>
              <button className="p-2.5 rounded-full border border-[#2A2A2A] hover:border-orange-500 group-hover:text-orange-500 transition-all">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-top border-[#2A2A2A]">
        <div className="p-8 rounded-3xl bg-[#181818] border border-[#2A2A2A] space-y-4">
          <h3 className="text-xl font-bold text-white">Soporte Técnico DORC</h3>
          <p className="text-[#8E9299] text-sm leading-relaxed">
            Para asistencia inmediata o formación personalizada, contacta con el equipo de especialistas locales.
          </p>
          <div className="flex flex-col gap-2 pt-4">
            <span className="text-orange-500 font-mono text-sm underline underline-offset-4 cursor-pointer">soporte@dorc.com</span>
            <span className="text-[#4A4A4A] text-[10px] uppercase tracking-widest">+31 (0) 181 245 444</span>
          </div>
        </div>
        <div className="p-8 rounded-3xl border border-dashed border-[#2A2A2A] flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-orange-600/10 flex items-center justify-center text-orange-500">
             <Download className="w-6 h-6" />
          </div>
          <p className="text-xs text-[#8E9299] max-w-[200px]">¿Necesitas un documento que no está aquí?</p>
          <button className="text-white text-[11px] font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">Solicitar Documentación</button>
        </div>
      </div>
    </div>
  );
}
