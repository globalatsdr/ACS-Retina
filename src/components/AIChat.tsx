import { motion, AnimatePresence } from "motion/react";
import { Send, User, Bot, Loader2, Sparkles, RefreshCcw } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "model";
  parts: [{ text: string }];
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", parts: [{ text: input }] };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: m.parts
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, history })
      });

      const data = await res.json();
      if (data.text) {
        setMessages(prev => [...prev, { role: "model", parts: [{ text: data.text }] }]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-160px)] flex flex-col pt-10">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold text-white tracking-tighter uppercase italic flex items-center gap-4">
            Asistente Eva <Sparkles className="w-6 h-6 text-orange-500 fill-orange-500/20" />
          </h2>
          <p className="text-[#8E9299]">AI especializada en el ecosistema Eva Nexus de DORC.</p>
        </div>
        <button 
          onClick={() => setMessages([])} 
          className="p-2 hover:bg-orange-600/10 rounded-full transition-colors text-[#4A4A4A] hover:text-orange-500"
          title="Reset chat"
        >
          <RefreshCcw className="w-5 h-5" />
        </button>
      </header>

      <div className="flex-1 overflow-hidden flex flex-col bg-[#181818] border border-[#2A2A2A] rounded-3xl">
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-orange-900/40"
        >
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-30">
              <Bot className="w-16 h-16 text-orange-500" />
              <div className="space-y-2">
                <p className="text-xl font-bold text-white italic">¿En qué puedo ayudarte hoy?</p>
                <p className="text-sm max-w-sm">"¿Cómo activo el modo de vacío lineal?" o "¿Qué consumibles necesito para una 25G?"</p>
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-4 ${m.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                m.role === "user" ? "bg-orange-600" : "bg-white text-black"
              }`}>
                {m.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                m.role === "user" ? "bg-orange-600/10 border border-orange-600/30 text-white" : "bg-[#222] border border-[#333] text-[#CCC]"
              }`}>
                {m.parts[0].text.split('\n').map((line, idx) => (
                  <p key={idx} className="mb-2 last:mb-0">{line}</p>
                ))}
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center animate-pulse">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-[#222] border border-[#333] p-4 rounded-2xl flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-orange-500" />
                <span className="text-xs text-[#8E9299] font-mono italic">Analizando sistema...</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-top border-[#2A2A2A] bg-[#1a1a1a]">
          <div className="relative group">
            <input 
              type="text"
              placeholder="Escribe tu consulta técnica aquí..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="w-full bg-[#111] border border-[#2A2A2A] rounded-2xl pl-6 pr-14 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all placeholder:text-[#4A4A4A]"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center hover:bg-orange-500 disabled:opacity-50 transition-colors shadow-lg shadow-orange-900/20"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
          <p className="mt-3 text-[10px] text-[#4A4A4A] text-center uppercase tracking-widest font-mono">Eva Nexus Intelligent Expert System v1.0</p>
        </div>
      </div>
    </div>
  );
}
