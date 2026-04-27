import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Target, 
  Calculator, 
  Settings, 
  BarChart3, 
  Search, 
  Zap, 
  Layers, 
  ShieldCheck,
  MousePointer2,
  Clock,
  ArrowRight
} from 'lucide-react';

// --- ROI Calculator Component ---
const ROICalculator = () => {
  const [downtimeCost, setDowntimeCost] = useState(5000);
  const [replacementFrequency, setReplacementFrequency] = useState(1);
  
  const uptimeGain = 10; // 10x more resistance
  const savings = (downtimeCost * replacementFrequency) - ((downtimeCost * replacementFrequency) / uptimeGain);

  return (
    <div className="frosted-glass p-8 rounded-2xl slide-shadow">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-vedapen-orange">
        <Calculator size={24} />
        Calculador de Uptime PU
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Custo da Hora-Máquina Parada (R$)</label>
          <input 
            type="range" min="1000" max="50000" step="500"
            value={downtimeCost}
            onChange={(e) => setDowntimeCost(Number(e.target.value))}
            className="w-full h-2 bg-vedapen-teal rounded-lg appearance-none cursor-pointer accent-vedapen-orange"
          />
          <div className="text-xl font-mono mt-1">R$ {downtimeCost.toLocaleString()}</div>
        </div>
        
        <div>
          <label className="block text-sm text-gray-400 mb-2">Frequência de Trocas (por ano)</label>
          <input 
            type="range" min="1" max="24" step="1"
            value={replacementFrequency}
            onChange={(e) => setReplacementFrequency(Number(e.target.value))}
            className="w-full h-2 bg-vedapen-teal rounded-lg appearance-none cursor-pointer accent-vedapen-orange"
          />
          <div className="text-xl font-mono mt-1">{replacementFrequency} trocas/ano</div>
        </div>

        <div className="pt-6 border-t border-white/10 mt-6">
          <div className="text-sm text-gray-400 uppercase tracking-widest mb-1 font-bold">Economia Potencial Estimada</div>
          <div className="text-5xl font-display font-bold text-vedapen-orange">
            R$ {savings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
          <p className="text-xs text-gray-500 mt-4 italic">
            *Baseado em ganhos de resistência 10x superiores ao NBR em meios abrasivos.
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Slide Components ---

const SlideTitle = () => (
  <div className="flex flex-col items-center justify-center min-h-full text-center px-4 py-12">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6 inline-block px-4 py-1 border border-vedapen-orange/40 text-vedapen-orange text-[10px] sm:text-xs font-bold tracking-[0.3em] rounded-full uppercase bg-vedapen-orange/5"
    >
      Plano de Marketing: Vedapen Soluções Industriais
    </motion.div>
    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight mb-6 text-white text-balance">
      Vedapen <span className="text-vedapen-orange">Soluções</span> <br className="hidden sm:block" />Industriais
    </h1>
    <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-teal-200 tracking-wide max-w-2xl uppercase">
      Estratégia de Posicionamento & Performance B2B
    </h2>
  </div>
);

const SlideVision = () => (
  <div className="grid md:grid-cols-2 gap-8 md:gap-12 min-h-full items-center px-6 md:px-20 py-12">
    <div className="space-y-6 md:space-y-8 order-2 md:order-1">
      <div className="text-vedapen-orange font-bold text-[10px] sm:text-sm uppercase tracking-widest flex items-center gap-2">
        <div className="w-8 h-[1px] bg-vedapen-orange/50" />
        01. Visão Estratégica
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white m-0">
        Saindo da Guerra de <span className="italic text-teal-400">Commodities</span>
      </h2>
      <p className="text-base sm:text-lg text-teal-50/80 leading-relaxed max-w-lg">
        "Vejo o Poliuretano (PU) não apenas como um polímero, mas como o nosso principal motor de lucratividade e retenção de clientes."
      </p>
      <ul className="space-y-4">
        {[
          "Transição da Venda de Preço para a Engenharia de Aplicação",
          "Diferenciação clara do NBR (Borracha Nitrílica)",
          "Foco em redução de TCO (Custo Total de Propriedade)"
        ].map((item, id) => (
          <li key={id} className="flex items-start gap-3 text-teal-100">
            <ShieldCheck className="text-vedapen-orange shrink-0 mt-1" size={18} />
            <span className="text-xs sm:text-sm font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="relative aspect-square flex items-center justify-center order-1 md:order-2 max-w-[300px] md:max-w-none mx-auto">
      <div className="absolute inset-0 bg-vedapen-orange/10 rounded-full animate-pulse blur-3xl" />
      <div className="relative frosted-glass p-8 md:p-12 rounded-3xl rotate-3 slide-shadow">
        <Layers size={80} className="text-vedapen-orange mb-6 md:w-[120px] md:h-[120px]" />
        <div className="text-2xl md:text-3xl font-bold text-white">Engenharia de <br/>Aplicação</div>
        <div className="text-teal-400 mt-2 font-medium">Margem, Retenção e Autoridade.</div>
      </div>
    </div>
  </div>
);

const SlideFunnelTop = () => (
  <div className="min-h-full flex flex-col justify-center px-6 md:px-20 py-12">
    <div className="text-vedapen-orange font-bold text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
       <div className="w-8 h-[1px] bg-vedapen-orange/50" />
       02. Topo de Funil (Atração)
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-white">Conquistando a Intenção Técnica</h2>
    
    <div className="grid md:grid-cols-2 gap-4 md:gap-8">
      <div className="frosted-glass p-6 md:p-8 rounded-2xl hover:border-vedapen-orange/50 transition-all duration-300">
        <Search className="text-vedapen-orange mb-4 md:mb-6" size={32} md:size={40} />
        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">SEO de Cauda Longa</h3>
        <p className="text-teal-400 mb-4 md:mb-6 font-mono text-[10px] uppercase tracking-wider">NBR vs. Poliuretano?</p>
        <p className="text-xs sm:text-sm leading-relaxed text-teal-100/70">
          Criação de artigos técnicos focados em resolver a dor do custo de manutenção, provando onde e quando o PU supera a borracha.
        </p>
      </div>
      
      <div className="frosted-glass p-6 md:p-8 rounded-2xl hover:border-vedapen-orange/50 transition-all duration-300">
        <div className="flex gap-2 mb-4 md:mb-6">
          <Zap className="text-vedapen-orange" size={32} md:size={40} />
          <div className="px-2 py-1 bg-yellow-600/20 text-yellow-500 text-[10px] h-fit rounded border border-yellow-500/30 font-bold uppercase tracking-tighter">Google Ads</div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Palavras-Chave de Intenção</h3>
        <p className="text-teal-400 mb-4 md:mb-6 font-mono text-[10px] italic">
          "Fabricante de vedações PU sob medida", "Gaxeta industrial".
        </p>
        <p className="text-xs sm:text-sm leading-relaxed text-teal-100/70">
          Capturamos o lead no momento exato da necessidade crítica de reposição industrial.
        </p>
      </div>
    </div>
  </div>
);

const SlideFunnelMid = () => (
  <div className="min-h-full grid md:grid-cols-2 gap-8 md:gap-12 items-center px-6 md:px-20 py-12">
    <div className="space-y-6 md:space-y-10">
      <div>
        <div className="text-vedapen-orange font-bold text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
            <div className="w-8 h-[1px] bg-vedapen-orange/50" />
            03. Autoridade & ROI
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 italic leading-tight uppercase text-white">Engenharia de <br/>Conversão</h2>
      </div>
      
      <div className="space-y-6 md:space-y-8">
        <div className="flex gap-4 md:gap-5">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl frosted-glass flex items-center justify-center shrink-0 border-vedapen-orange/30">
            <Calculator className="text-vedapen-orange" size={24} md:size={28} />
          </div>
          <div>
            <h4 className="font-bold text-lg md:text-xl text-white">Calculadora ROI de Uptime</h4>
            <p className="text-xs sm:text-sm text-teal-400 font-medium">Transformando downtime em dados financeiros.</p>
          </div>
        </div>
        
        <div className="flex gap-4 md:gap-5">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl frosted-glass flex items-center justify-center shrink-0 border-vedapen-orange/30">
            <MousePointer2 className="text-vedapen-orange" size={24} md:size={28} />
          </div>
          <div>
            <h4 className="font-bold text-lg md:text-xl text-white">Landing Page Técnica</h4>
            <p className="text-xs sm:text-sm text-teal-400 font-medium tracking-tight">Design otimizado 100% para Poliuretanos.</p>
          </div>
        </div>

        <button className="w-full bg-vedapen-orange p-4 md:p-5 rounded-2xl text-vedapen-deep font-black mt-4 md:mt-8 flex items-center justify-between shadow-xl shadow-orange-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
          <span className="uppercase tracking-widest text-xs sm:text-sm">Falar com Engenheiro de Aplicação</span>
          <ArrowRight size={20} md:size={24} />
        </button>
      </div>
    </div>
    
    <div className="w-full max-w-lg mx-auto">
      <ROICalculator />
    </div>
  </div>
);

const SlideTechnical = () => (
  <div className="min-h-full flex flex-col justify-center px-6 md:px-20 py-12">
    <div className="text-vedapen-orange font-bold text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
        <div className="w-8 h-[1px] bg-vedapen-orange/50" />
        04. Diferenciação Técnica
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-white">Falando a Língua da Engenharia</h2>
    
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      <div className="frosted-glass p-5 md:p-6 rounded-2xl border-l-4 border-vedapen-orange shadow-lg">
        <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Gama de Dureza</h3>
        <p className="text-[10px] text-teal-400 mb-3 md:mb-4 font-bold uppercase tracking-wider">Shore A a Shore D</p>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-full bg-teal-900 h-2 rounded-full overflow-hidden border border-white/5">
            <div className="bg-vedapen-orange h-full w-[85%]" />
          </div>
        </div>
        <div className="flex justify-between text-[10px] font-mono text-teal-100">
          <span>60 Shore A</span>
          <span>75 Shore D</span>
        </div>
      </div>

      <div className="frosted-glass p-5 md:p-6 rounded-2xl border-l-4 border-vedapen-orange shadow-lg">
        <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Resistência à Abrasão</h3>
        <p className="text-xs sm:text-sm leading-relaxed text-teal-50">
          O PU chega a ser <span className="font-bold text-green-400">10x mais resistente</span> que o NBR padrão em meios abrasivos.
        </p>
      </div>

      <div className="frosted-glass p-5 md:p-6 rounded-2xl border-l-4 border-vedapen-orange shadow-lg sm:col-span-2 md:col-span-1">
        <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Memória Elástica</h3>
        <p className="text-xs sm:text-sm leading-relaxed text-teal-50">
          Alta resiliência e menor deformação permanente <span className="italic text-teal-400 font-bold">(Compression Set)</span>.
        </p>
      </div>
    </div>

    <div className="mt-8 md:mt-12 frosted-glass rounded-2xl p-6 md:p-8 slide-shadow overflow-x-auto">
      <h3 className="text-lg md:text-xl font-bold mb-6 text-white uppercase tracking-tighter whitespace-nowrap">Comparativo Performance Técnica</h3>
      <div className="grid grid-cols-3 gap-4 text-center min-w-[300px]">
        <div className="p-2 md:p-4 border-r border-white/5">
          <div className="text-[9px] md:text-[10px] text-teal-500 uppercase font-black mb-1 md:mb-2 tracking-widest">Abrasão</div>
          <div className="text-xl md:text-2xl font-display font-bold text-green-400">10x +</div>
          <div className="text-[9px] md:text-[10px] text-teal-200/40 italic uppercase">Vs NBR</div>
        </div>
        <div className="p-2 md:p-4 border-r border-white/5">
          <div className="text-[9px] md:text-[10px] text-teal-500 uppercase font-black mb-1 md:mb-2 tracking-widest">Manutenção</div>
          <div className="text-xl md:text-2xl font-display font-bold text-white">Uptime</div>
          <div className="text-[9px] md:text-[10px] text-teal-200/40 italic uppercase">Máximo</div>
        </div>
        <div className="p-2 md:p-4">
          <div className="text-[9px] md:text-[10px] text-teal-500 uppercase font-black mb-1 md:mb-2 tracking-widest">Escala</div>
          <div className="text-xl md:text-2xl font-display font-bold text-white">Versátil</div>
          <div className="text-[9px] md:text-[10px] text-teal-200/40 italic uppercase">Industrial</div>
        </div>
      </div>
    </div>
  </div>
);

const SlideComparison = () => (
  <div className="min-h-full flex flex-col justify-center px-6 md:px-20 py-12">
    <div className="text-vedapen-orange font-bold text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
        <div className="w-8 h-[1px] bg-vedapen-orange/50" />
        05. Estratégia de Destino
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white">Por que Landing Page de PU?</h2>
    
    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      <div className="space-y-4 md:space-y-6">
        <div className="frosted-glass p-5 md:p-6 rounded-2xl hover:border-vedapen-orange/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2 md:mb-3">
            <Target className="text-vedapen-orange" size={20} md:size={24} />
            <h4 className="font-bold text-white text-sm sm:text-base">Ad Score & CPC</h4>
          </div>
          <p className="text-xs sm:text-sm text-teal-100/60 leading-relaxed">
            Relevância máxima entre a busca "Gaxeta PU" e o destino. Google premia com menor custo por clique e melhor posicionamento.
          </p>
        </div>
        
        <div className="frosted-glass p-5 md:p-6 rounded-2xl hover:border-vedapen-orange/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2 md:mb-3">
            <Zap className="text-vedapen-orange" size={20} md:size={24} />
            <h4 className="font-bold text-white text-sm sm:text-base">Eliminação de Ruído</h4>
          </div>
          <p className="text-xs sm:text-sm text-teal-100/60 leading-relaxed">
            Na Home o lead se perde. Na LP de Poliuretanos ele tem uma jornada clara: <span className="text-vedapen-orange font-bold">Resolução Técnica ou Saída.</span>
          </p>
        </div>
      </div>

      <div className="frosted-glass rounded-3xl p-6 md:p-8 slide-shadow overflow-hidden relative sm:max-w-md md:max-w-none mx-auto w-full">
        <div className="absolute top-0 right-0 p-4 opacity-5">
            <BarChart3 size={100} md:size={160} />
        </div>
        <h4 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-2 text-white">
            <Settings className="text-vedapen-orange" />
            Linguagem Industrial
        </h4>
        <div className="space-y-3 md:space-y-4 relative z-10">
            <div className="flex justify-between items-center p-3 bg-vedapen-orange/10 rounded-lg border border-vedapen-orange/20">
                <span className="text-[9px] md:text-[10px] text-vedapen-orange uppercase font-black tracking-widest italic">Landing Page</span>
                <span className="text-[9px] md:text-[10px] font-bold font-mono text-white">Shore, Abrasion, ROI</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg opacity-40">
                <span className="text-[9px] md:text-[10px] text-teal-300 uppercase font-black tracking-widest italic">Institucional</span>
                <span className="text-[9px] md:text-[10px] font-bold font-mono text-white">História, Blog, Outros</span>
            </div>
        </div>
        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/5 flex items-center justify-center">
            <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-vedapen-orange">400%</div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-teal-500">Mais Conversão Estimada</div>
            </div>
        </div>
      </div>
    </div>
  </div>
);

const SlideConclusion = () => (
  <div className="flex flex-col items-center justify-center min-h-full text-center px-6 py-12">
    <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl frosted-glass border-vedapen-orange/30 flex items-center justify-center mb-6 md:mb-8 shadow-2xl shadow-orange-500/20 rotate-12">
      <Target className="text-vedapen-orange" size={32} md:size={48} />
    </div>
    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 md:mb-6 text-white uppercase tracking-tighter">Próxima Fase</h2>
    <p className="text-base sm:text-lg text-teal-100/60 max-w-xl mb-8 md:mb-12 leading-relaxed">
      Início da produção de conteúdo técnico e estruturação da <span className="text-teal-400 font-bold underline decoration-vedapen-orange/50">Landing Page de Performance</span> Vedapen.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <button className="px-10 py-4 md:py-5 bg-vedapen-orange text-vedapen-deep font-black rounded-2xl hover:scale-105 active:scale-95 shadow-xl shadow-orange-600/30 transition-all uppercase tracking-widest text-xs sm:text-sm">
        EXECUTAR PLANO
      </button>
      <button className="px-10 py-4 md:py-5 frosted-glass font-bold rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs sm:text-sm text-teal-100">
        REVISAR DADOS
      </button>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <SlideTitle key="0" />,
    <SlideVision key="1" />,
    <SlideFunnelTop key="2" />,
    <SlideFunnelMid key="3" />,
    <SlideTechnical key="4" />,
    <SlideComparison key="5" />,
    <SlideConclusion key="6" />,
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="min-h-[100dvh] w-screen bg-vedapen-deep overflow-hidden relative selection:bg-vedapen-orange selection:text-vedapen-deep flex flex-col">
      {/* Background Decor */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-vedapen-orange/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-vedapen-orange/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-[30%] left-[-5%] w-64 h-64 bg-teal-500/5 rounded-full blur-3xl opacity-20 pointer-events-none" />
      
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 sm:h-1.5 z-50 bg-white/5">
        <motion.div 
          className="h-full bg-vedapen-orange shadow-[0_0_10px_rgba(255,140,0,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-7xl mx-auto relative z-10 p-4 md:p-8 text-white overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 1.01 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full overflow-y-auto no-scrollbar"
          >
            <div className="min-h-full flex items-center justify-center">
              <div className="w-full">
                {slides[currentSlide]}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-0 left-0 w-full z-[100] p-4 sm:p-8 flex items-center justify-between pointer-events-none">
        {/* Footer Info (Hidden on very small mobile) */}
        <div className="flex items-center gap-4 text-[8px] sm:text-[10px] font-mono text-teal-500 font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase opacity-60 md:opacity-100">
          <span className="hidden sm:inline">Vedapen</span>
          <span className="w-6 sm:w-10 h-[1px] bg-teal-800 hidden sm:inline" />
          <span>PU Strategy 2024</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">
          <div className="flex gap-1.5 sm:gap-2.5 hidden sm:flex">
              {slides.map((_, i) => (
                  <button 
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ease-in-out ${i === currentSlide ? 'w-6 sm:w-10 bg-vedapen-orange' : 'w-1.5 sm:w-2.5 bg-white/10 hover:bg-white/20'}`}
                  />
              ))}
          </div>
          <div className="flex gap-2 sm:gap-3">
              <button 
                  onClick={prevSlide}
                  className="p-2 sm:p-3.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl hover:bg-vedapen-orange hover:text-vedapen-deep transition-all group active:scale-90"
                  aria-label="Slide anterior"
              >
                  <ChevronLeft size={20} sm:size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                  onClick={nextSlide}
                  className="p-2 sm:p-3.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl hover:bg-vedapen-orange hover:text-vedapen-deep transition-all group active:scale-90"
                  aria-label="Próximo slide"
              >
                  <ChevronRight size={20} sm:size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
          </div>
        </div>
      </div>

      <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-50 text-[8px] sm:text-[10px] font-black text-vedapen-orange border border-vedapen-orange/20 frosted-glass px-3 sm:px-4 py-1 sm:py-1.5 rounded uppercase tracking-[0.2em] pointer-events-none">
         {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}

