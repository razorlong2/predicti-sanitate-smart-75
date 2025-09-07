import { useState, useEffect } from 'react';
import { Brain, Activity, TrendingUp, Play, AlertTriangle, ArrowRight, Shield, Heart } from 'lucide-react';

interface ScenarioData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  riskEvolution: number[];
  alert: string;
  color: string;
  riskLevel: 'low' | 'moderate' | 'high' | 'critical';
}

const scenarios: ScenarioData[] = [
  {
    id: 1,
    title: "INFECȚIE URINARĂ - CATETER VEZICAL",
    subtitle: "Femeie 71 ani, Neurologie, Spital Județean Cluj",
    description: "Pacientă cu AVC ischemic, cateter vezical prelungit",
    details: [
      "Cateter vezical de 6 zile post-AVC",
      "Febră 38.2°C, urină tulbure odoare modificată",
      "Klebsiella pneumoniae ESBL pozitiv",
      "CRP 78 mg/L (normal <5), leucocite 14.800"
    ],
    riskEvolution: [28, 52, 74],
    alert: "Infecție urinară asociată cateterului",
    color: "bg-red-500",
    riskLevel: 'high'
  },
  {
    id: 2,
    title: "INFECȚIE URINARĂ COMUNITARĂ",
    subtitle: "Bărbat 58 ani, prezentsat în Urgență",
    description: "Cistită acută la pacient diabetic, fără cateter",
    details: [
      "Dureri la urinare de 2 zile",
      "Febră subfebrilă 37.8°C",
      "E.coli în urocultură, sensibil la amoxiclav"
    ],
    riskEvolution: [12, 18, 22],
    alert: "Infecție urinară dobândită în comunitate",
    color: "bg-green-500",
    riskLevel: 'low'
  },
  {
    id: 3,
    title: "PNEUMONIE LA PACIENT INTUBAT",
    subtitle: "Bărbat 52 ani, ATI, traumatism cranian sever",
    description: "Pneumonie asociată ventilației mecanice",
    details: [
      "Ventilație mecanică de 5 zile",
      "Secreții bronșice purulente, Rx: infiltrat bilobbar",
      "Pseudomonas aeruginosa în aspiratul bronșic",
      "CPIS score: 9 puncte, PCT 4.2 ng/ml"
    ],
    riskEvolution: [42, 63, 81],
    alert: "Pneumonie asociată ventilației mecanice",
    color: "bg-red-500",
    riskLevel: 'high'
  },
  {
    id: 4,
    title: "COMPLICAȚIE DUPĂ OPERAȚIE PULMONARĂ",
    subtitle: "Femeie 62 ani, Chirurgie Toracică",
    description: "Atelectazie postoperatorie, fără infecție",
    details: [
      "Ziua 3 post-lobectomie inferioară",
      "Tuse neproductivă, febră ușoară",
      "Rx: atelectazie bazală dreaptă"
    ],
    riskEvolution: [18, 25, 28],
    alert: "Monitorizare complicații postoperatorii",
    color: "bg-yellow-500",
    riskLevel: 'moderate'
  },
  {
    id: 5,
    title: "INFECȚIE ÎN PLAGĂ",
    subtitle: "Bărbat 49 ani, post-colecistectomie laparoscopică",
    description: "Infecție superficială în cicatricea operatorie",
    details: [
      "Ziua 8 postoperator, plagă cu secreții",
      "Eritem periincizional 3x4 cm, durere locală",
      "Staphylococcus aureus MSSA în exudatul de plagă"
    ],
    riskEvolution: [35, 58, 72],
    alert: "Infecție de plagă operatorie confirmată",
    color: "bg-red-600",
    riskLevel: 'critical'
  },
  {
    id: 6,
    title: "INFECȚIE ÎN SÂNGE - CATETER VENOS",
    subtitle: "Femeie 38 ani, Oncologie, leucemie acută",
    description: "Fungicemie pe cateter central în chimioterapie",
    details: [
      "Port-a-cath de 15 zile pentru chimioterapie",
      "Febră înaltă 39.5°C cu frisoane",
      "Candida albicans în hemocultură centrală și periferică"
    ],
    riskEvolution: [48, 72, 86],
    alert: "Candidemie asociată cateterului central",
    color: "bg-red-800",
    riskLevel: 'critical'
  }
];

interface NeuronProps {
  id: string;
  x: number;
  y: number;
  isActive: boolean;
  layer: string;
  label?: string;
  subtitle?: string;
  index?: number;
}

const Neuron = ({ x, y, isActive, layer, label, index }: NeuronProps) => {
  const getColor = () => {
    switch (layer) {
      case 'input': return isActive ? 'bg-gradient-to-br from-blue-500 to-blue-700' : 'bg-gray-300';
      case 'hidden': return isActive ? 'bg-gradient-to-br from-green-500 to-green-700' : 'bg-gray-300';
      case 'output': return isActive ? 'bg-gradient-to-br from-red-600 to-pink-700' : 'bg-gray-300';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div
      className={`absolute w-10 h-10 rounded-full ${getColor()} transition-all duration-700 flex items-center justify-center text-white text-xs font-bold shadow-lg border-3 border-white hover-scale glow-pulse ${
        isActive ? 'animate-breathe shadow-2xl scale-150 z-20 animate-float' : 'scale-100 hover:scale-110'
      }`}
      style={{ 
        left: x - 20, 
        top: y - 20,
        transformStyle: 'preserve-3d'
      }}
    >
      {index !== undefined && (
        <span className={`text-xs font-extrabold ${isActive ? 'text-white animate-pulse' : 'text-gray-600'}`}>
          {index + 1}
        </span>
      )}
      
      {/* Animated ring effect for active neurons */}
      {isActive && (
        <>
          <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-75"></div>
          <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
        </>
      )}
    </div>
  );
};

const Connection = ({ x1, y1, x2, y2, isActive }: { x1: number; y1: number; x2: number; y2: number; isActive: boolean }) => {
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: x1,
        top: y1,
        width: length,
        height: 3,
        transform: `rotate(${angle}deg)`,
        transformOrigin: '0 50%',
      }}
    >
      <div 
        className={`w-full h-full transition-all duration-1000 rounded-full ${
          isActive 
            ? 'bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 opacity-90 animate-liquid-fill shadow-lg' 
            : 'bg-gray-300 opacity-30'
        }`}
      />
      {isActive && (
        <>
          {/* Multiple flowing particles */}
          <div 
            className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping"
            style={{ 
              left: '10%', 
              top: '-3px',
              animationDelay: '0s',
              animationDuration: '0.8s'
            }}
          />
          <div 
            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping"
            style={{ 
              left: '40%', 
              top: '-2px',
              animationDelay: '0.2s',
              animationDuration: '1s'
            }}
          />
          <div 
            className="absolute w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping"
            style={{ 
              left: '70%', 
              top: '-3px',
              animationDelay: '0.4s',
              animationDuration: '1.2s'
            }}
          />
          
          {/* Flowing gradient overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse rounded-full"
            style={{ animationDuration: '1.5s' }}
          />
        </>
      )}
    </div>
  );
};

const NeuralNetworkVisualization = () => {
  const [activeNeurons, setActiveNeurons] = useState<Set<string>>(new Set());
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentScenario, setCurrentScenario] = useState<number | null>(null);

  // Enhanced network structure: 47 → 64 → 32 → 16 → 8 → 3
  const layers = [
    { name: "Input Layer", neurons: 47, color: "from-blue-400 to-blue-600", description: "Parametri clinici" },
    { name: "Hidden 1", neurons: 64, color: "from-purple-400 to-purple-600", description: "Extracție" },
    { name: "Hidden 2", neurons: 32, color: "from-pink-400 to-pink-600", description: "Agregare" },
    { name: "Hidden 3", neurons: 16, color: "from-orange-400 to-orange-600", description: "Rafinare" },
    { name: "Hidden 4", neurons: 8, color: "from-red-400 to-red-600", description: "Clasificare" },
    { name: "Output", neurons: 3, color: "from-green-400 to-green-600", description: "Risc IAAM" }
  ];

  const networkLayers = {
    input: Array.from({ length: 5 }, (_, i) => ({
      id: `input-${i}`,
      x: 150,
      y: 100 + i * 80, // Large spacing for clarity
      layer: 'input',
      index: i,
      label: ['Date pacient', 'Analize laborator', 'Dispozitive medicale', 'Istoric medical', 'Durata internării'][i]
    })),
    hidden1: Array.from({ length: 4 }, (_, i) => ({
      id: `hidden1-${i}`,
      x: 320,
      y: 140 + i * 80,
      layer: 'hidden',
      index: i,
      label: ['Extracție 1', 'Extracție 2', 'Extracție 3', 'Extracție 4'][i]
    })),
    hidden2: Array.from({ length: 3 }, (_, i) => ({
      id: `hidden2-${i}`,
      x: 480,
      y: 180 + i * 80,
      layer: 'hidden',
      index: i,
      label: ['Agregare 1', 'Agregare 2', 'Agregare 3'][i]
    })),
    hidden3: Array.from({ length: 2 }, (_, i) => ({
      id: `hidden3-${i}`,
      x: 640,
      y: 220 + i * 80,
      layer: 'hidden',
      index: i,
      label: ['Rafinare 1', 'Rafinare 2'][i]
    })),
    output: Array.from({ length: 3 }, (_, i) => ({
      id: `output-${i}`,
      x: 800,
      y: 180 + i * 80,
      layer: 'output',
      index: i,
      label: ['Risc IAAM', 'Tip probabil infecție', 'Recomandare urgență'][i],
      subtitle: ['Scăzut/Mediu/Înalt', 'UTI/VAP/ISO/CLABSI', 'Monitorizare recomandată'][i]
    }))
  };

  const allNeurons = [...networkLayers.input, ...networkLayers.hidden1, ...networkLayers.hidden2, ...networkLayers.hidden3, ...networkLayers.output];

  const simulateScenario = (scenarioId: number) => {
    setIsAnimating(true);
    setCurrentScenario(scenarioId);
    setActiveNeurons(new Set());

    const scenario = scenarios[scenarioId - 1];
    const riskLevel = scenario.riskEvolution[2]; // Final risk level

    // Progressive activation for enhanced network
    const activationSequence = [
      { delay: 0, neurons: networkLayers.input.map(n => n.id) },
      { delay: 400, neurons: networkLayers.hidden1.map(n => n.id) },
      { delay: 800, neurons: networkLayers.hidden2.map(n => n.id) },
      { delay: 1200, neurons: networkLayers.hidden3.map(n => n.id) },
      { delay: 1600, neurons: [networkLayers.output[Math.floor(riskLevel / 35)].id] }
    ];

    activationSequence.forEach(step => {
      setTimeout(() => {
        setActiveNeurons(prev => new Set([...prev, ...step.neurons]));
      }, step.delay);
    });

    setTimeout(() => {
      setIsAnimating(false);
      setCurrentScenario(null);
    }, 3000);
  };

  const simulateAllScenarios = () => {
    scenarios.forEach((scenario, index) => {
      setTimeout(() => simulateScenario(scenario.id), index * 800);
    });
  };

  const getConnections = () => {
    const connections: Array<{ x1: number; y1: number; x2: number; y2: number; isActive: boolean }> = [];
    
    const layerPairs = [
      { from: networkLayers.input, to: networkLayers.hidden1 },
      { from: networkLayers.hidden1, to: networkLayers.hidden2 },
      { from: networkLayers.hidden2, to: networkLayers.hidden3 },
      { from: networkLayers.hidden3, to: networkLayers.output }
    ];

    layerPairs.forEach(({ from, to }) => {
      from.forEach((fromNeuron) => {
        to.forEach((toNeuron) => {
          connections.push({
            x1: fromNeuron.x,
            y1: fromNeuron.y,
            x2: toNeuron.x,
            y2: toNeuron.y,
            isActive: activeNeurons.has(fromNeuron.id) && activeNeurons.has(toNeuron.id)
          });
        });
      });
    });

    return connections;
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return '#10b981';
      case 'moderate': return '#f59e0b';
      case 'high': return '#ef4444';
      case 'critical': return '#991b1b';
      default: return '#6b7280';
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Algoritmul de Decizie pentru Predicția IAAM - Fază Pilot
        </h1>
        <p className="text-xl text-muted-foreground">
          Pipeline simplificat de analiză clinică
        </p>
      </div>

      {/* Neural Network Section */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl p-8 border-2 border-blue-100 shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <div className="text-xl font-bold text-gray-700">Algoritmul de Decizie pentru Predicția IAAM</div>
          <button
            onClick={simulateAllScenarios}
            disabled={isAnimating}
            className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-full hover:from-blue-700 hover:to-purple-800 disabled:opacity-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Play className="w-5 h-5" />
            <span className="text-sm font-semibold">DEMO - Date Simulate</span>
          </button>
        </div>

        {/* Neural Network Visualization - Enhanced structure with 4 hidden layers */}
        <div className="relative w-full mx-auto h-[600px] bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 rounded-2xl border border-blue-200 overflow-hidden shadow-2xl backdrop-blur-sm hover-scale tilt-3d">
          {/* Enhanced Layer Labels for 6-layer architecture */}
          <div className="absolute top-4 left-[80px] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-blue-200">
            <div className="text-sm font-bold text-blue-900">Input (47 param)</div>
            <div className="text-xs text-gray-600 mt-1">Parametri clinici</div>
          </div>
          
          <div className="absolute top-4 left-[220px] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-purple-200">
            <div className="text-sm font-bold text-purple-900">Hidden 1 (64)</div>
            <div className="text-xs text-gray-600 mt-1">Extracție</div>
          </div>
          
          <div className="absolute top-4 left-[360px] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-pink-200">
            <div className="text-sm font-bold text-pink-900">Hidden 2 (32)</div>
            <div className="text-xs text-gray-600 mt-1">Agregare</div>
          </div>
          
          <div className="absolute top-4 left-[500px] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-orange-200">
            <div className="text-sm font-bold text-orange-900">Hidden 3 (16)</div>
            <div className="text-xs text-gray-600 mt-1">Rafinare</div>
          </div>
          
          <div className="absolute top-4 left-[640px] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-red-200">
            <div className="text-sm font-bold text-red-900">Hidden 4 (8)</div>
            <div className="text-xs text-gray-600 mt-1">Clasificare</div>
          </div>
          
          <div className="absolute top-4 left-[780px] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-green-200">
            <div className="text-sm font-bold text-green-900">Output (3)</div>
            <div className="text-xs text-gray-600 mt-1">Risc IAAM</div>
          </div>

          {/* Connections */}
          {getConnections().map((connection, index) => (
            <Connection
              key={index}
              x1={connection.x1}
              y1={connection.y1}
              x2={connection.x2}
              y2={connection.y2}
              isActive={connection.isActive}
            />
          ))}

          {/* Neurons */}
          {allNeurons.map((neuron: any) => (
            <Neuron
              key={neuron.id}
              id={neuron.id}
              x={neuron.x}
              y={neuron.y}
              isActive={activeNeurons.has(neuron.id)}
              layer={neuron.layer}
              label={neuron.label}
              subtitle={neuron.subtitle}
              index={neuron.index}
            />
          ))}

          {/* Output Node Labels - Clear and prominent */}
          <div className="absolute right-4 top-[130px] space-y-[80px]">
            <div className="bg-red-100/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-red-300">
              <div className="text-sm font-bold text-red-900">Risc IAAM</div>
              <div className="text-xs text-red-700">Scăzut/Mediu/Înalt</div>
            </div>
            <div className="bg-orange-100/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-orange-300">
              <div className="text-sm font-bold text-orange-900">Tip probabil infecție</div>
              <div className="text-xs text-orange-700">UTI/VAP/ISO/CLABSI</div>
            </div>
            <div className="bg-yellow-100/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-yellow-300">
              <div className="text-sm font-bold text-yellow-900">Recomandare urgență</div>
              <div className="text-xs text-yellow-700">Monitorizare recomandată</div>
            </div>
          </div>

          {/* Input Details - Updated for enhanced structure */}
          <div className="absolute left-4 top-[120px] bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200 text-xs max-w-[180px]">
            <div className="space-y-1">
              <div><strong>47 parametri:</strong></div>
              <div>• Date pacient</div>
              <div>• Analize laborator</div>
              <div>• Dispozitive medicale</div>
              <div>• Istoric medical</div>
              <div>• Durata internării</div>
              <div>• Markeri inflamatori</div>
            </div>
          </div>

          {/* Risk Legend */}
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200">
            <div className="text-xs font-bold text-gray-700 mb-2">Legenda risc:</div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs">Risc scăzut (&lt;30%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-xs">Risc moderat (30-60%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-xs">Risc crescut (&gt;60%)</span>
              </div>
            </div>
          </div>

          {/* Animation Status */}
          {isAnimating && (
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-blue-200">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-ping"></div>
                <span className="font-bold text-gray-800">Simulare în curs...</span>
              </div>
              <div className="mt-2 text-xs">
                <span className="text-red-600 font-bold">Predicție completă: Risc crescut (73%) - Pneumonie de ventilator</span>
              </div>
            </div>
          )}
        </div>

        {/* Technical Specifications Box */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">📊</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800">Performanță Model</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-blue-700">• Dataset pilot:</span>
                <span className="text-gray-700">&gt;500 pacienți în colectare</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-blue-700">• Țintă acuratețe:</span>
                <span className="text-gray-700">&gt;85%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-green-700">• Țintă sensitivitate:</span>
                <span className="text-gray-700">&gt;90%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-green-700">• Procesare rapidă:</span>
                <span className="text-gray-700">câteva secunde</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical Cases from ClinicalCasesSlide */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Cazuri Clinice Realiste</h2>
          <p className="text-sm text-gray-600 mt-2">Demonstrația practică a algoritmului de predicție IAAM</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* CAZ 1: BACTERIEMIE CATETER */}
          <div className="bg-red-50 rounded-2xl p-4 border-2 border-red-200 hover-scale animate-fade-in cursor-pointer" onClick={() => simulateScenario(1)}>
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-gray-800 mb-1">BACTERIEMIE CATETER</h3>
                <p className="text-xs text-gray-600">Pacientă 67 ani, cancer pancreatic</p>
              </div>
            </div>
            
            <div className="space-y-1 mb-3 text-xs">
              <div className="flex justify-between p-1 bg-white/70 rounded">
                <span>Ziua 0: Chimio, leucocite 3200</span>
                <span className="font-bold text-blue-600">15%</span>
              </div>
              <div className="flex justify-between p-1 bg-white/70 rounded">
                <span>Ziua 4: Hipotensiune, PCT 12</span>
                <span className="font-bold text-red-600">78%</span>
              </div>
              <div className="flex justify-between p-1 bg-red-100 rounded">
                <span>Ziua 5: S. epidermidis</span>
                <span className="font-bold">CONFIRMAT</span>
              </div>
            </div>
            
            <div className="bg-green-100 border border-green-300 rounded p-2">
              <p className="text-xs font-semibold text-green-800">✓ Vancomicină la 75% previne sepsisul</p>
            </div>
          </div>

          {/* CAZ 2: INFECȚIE URINARĂ */}
          <div className="bg-blue-50 rounded-2xl p-4 border-2 border-blue-200 hover-scale animate-fade-in cursor-pointer" onClick={() => simulateScenario(2)} style={{animationDelay: '0.1s'}}>
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-gray-800 mb-1">INFECȚIE URINARĂ</h3>
                <p className="text-xs text-gray-600">Bărbat 74 ani, AVC, sondă 7 zile</p>
              </div>
            </div>
            
            <div className="space-y-1 mb-3 text-xs">
              <div className="flex justify-between p-1 bg-white/70 rounded">
                <span>Ziua 5: Urină tulbure</span>
                <span className="font-bold text-blue-600">31%</span>
              </div>
              <div className="flex justify-between p-1 bg-white/70 rounded">
                <span>Ziua 7: Febră 38.3°C, urină fetidă</span>
                <span className="font-bold text-red-600">72%</span>
              </div>
              <div className="flex justify-between p-1 bg-red-100 rounded">
                <span>Ziua 8: Proteus mirabilis</span>
                <span className="font-bold">CONFIRMAT</span>
              </div>
            </div>
            
            <div className="bg-green-100 border border-green-300 rounded p-2">
              <p className="text-xs font-semibold text-green-800">✓ Schimbare sondă la 70% previne urosepsis</p>
            </div>
          </div>

          {/* CAZ 3: INFECȚIE PLAGĂ */}
          <div className="bg-orange-50 rounded-2xl p-4 border-2 border-orange-200 hover-scale animate-fade-in cursor-pointer" onClick={() => simulateScenario(3)} style={{animationDelay: '0.2s'}}>
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-gray-800 mb-1">INFECȚIE PLAGĂ</h3>
                <p className="text-xs text-gray-600">Femeie 62 ani, bypass gastric</p>
              </div>
            </div>
            
            <div className="space-y-1 mb-3 text-xs">
              <div className="flex justify-between p-1 bg-white/70 rounded">
                <span>Ziua 4: Eritem 3cm periincizional</span>
                <span className="font-bold text-blue-600">45%</span>
              </div>
              <div className="flex justify-between p-1 bg-white/70 rounded">
                <span>Ziua 5: Secreție seroasă, CRP 156</span>
                <span className="font-bold text-red-600">68%</span>
              </div>
              <div className="flex justify-between p-1 bg-red-100 rounded">
                <span>Ziua 6: E.coli + Enterococcus</span>
                <span className="font-bold">CONFIRMAT</span>
              </div>
            </div>
            
            <div className="bg-green-100 border border-green-300 rounded p-2">
              <p className="text-xs font-semibold text-green-800">✓ Antibioterapie la 65% evită reintervenție</p>
            </div>
          </div>

          {/* CAZ 4: VAP PRECOCE */}
          <div className="bg-green-50 rounded-2xl p-4 border-2 border-green-200 hover-scale animate-fade-in cursor-pointer" onClick={() => simulateScenario(4)} style={{animationDelay: '0.3s'}}>
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-gray-800 mb-1">VAP PRECOCE</h3>
                <p className="text-xs text-gray-600">Bărbat 52 ani, politraumă</p>
              </div>
            </div>
            
            <div className="space-y-1 mb-3 text-xs">
              <div className="flex justify-between p-1 bg-white/70 rounded">
                <span>Ziua 4: Infiltrat Rx bazal drept</span>
                <span className="font-bold text-blue-600">51%</span>
              </div>
              <div className="flex justify-between p-1 bg-white/70 rounded">
                <span>Ziua 5: Febră 38.8°C, leucocite 16000</span>
                <span className="font-bold text-red-600">74%</span>
              </div>
              <div className="flex justify-between p-1 bg-red-100 rounded">
                <span>Ziua 6: H. influenzae</span>
                <span className="font-bold">CONFIRMAT</span>
              </div>
            </div>
            
            <div className="bg-green-100 border border-green-300 rounded p-2">
              <p className="text-xs font-semibold text-green-800">✓ Kinetoterapie la 50% reduce VAP cu 40%</p>
            </div>
          </div>

          {/* CAZ 5: VAP TARDIVĂ */}
          <div className="bg-purple-50 rounded-2xl p-4 border-2 border-purple-200 hover-scale animate-fade-in cursor-pointer" onClick={() => simulateScenario(5)} style={{animationDelay: '0.4s'}}>
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-gray-800 mb-1">VAP TARDIVĂ</h3>
                <p className="text-xs text-gray-600">Femeie 48 ani, ARDS post-COVID</p>
              </div>
            </div>
            
            <div className="space-y-1 mb-3 text-xs">
              <div className="flex justify-between p-1 bg-white/70 rounded">
                <span>Ziua 13: Secreții verzui abundente</span>
                <span className="font-bold text-blue-600">61%</span>
              </div>
              <div className="flex justify-between p-1 bg-white/70 rounded">
                <span>Ziua 14: Instabilitate hemodinamică</span>
                <span className="font-bold text-red-600">83%</span>
              </div>
              <div className="flex justify-between p-1 bg-red-100 rounded">
                <span>Ziua 15: Acinetobacter XDR</span>
                <span className="font-bold">CONFIRMAT</span>
              </div>
            </div>
            
            <div className="bg-green-100 border border-green-300 rounded p-2">
              <p className="text-xs font-semibold text-green-800">✓ Colistin la 80% reduce mortalitatea 65%→35%</p>
            </div>
          </div>

          {/* CAZ 6: CLABSI */}
          <div className="bg-pink-50 rounded-2xl p-4 border-2 border-pink-200 hover-scale animate-fade-in cursor-pointer" onClick={() => simulateScenario(6)} style={{animationDelay: '0.5s'}}>
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-gray-800 mb-1">CLABSI HEMODIALIZĂ</h3>
                <p className="text-xs text-gray-600">Bărbat 58 ani, IRC, cateter femural</p>
              </div>
            </div>
            
            <div className="space-y-1 mb-3 text-xs">
              <div className="flex justify-between p-1 bg-white/70 rounded">
                <span>Ziua 5: Subfebră intradialitic</span>
                <span className="font-bold text-blue-600">57%</span>
              </div>
              <div className="flex justify-between p-1 bg-white/70 rounded">
                <span>Ziua 6: Frisoane severe</span>
                <span className="font-bold text-red-600">81%</span>
              </div>
              <div className="flex justify-between p-1 bg-red-100 rounded">
                <span>Ziua 7: MRSA în hemoculturi</span>
                <span className="font-bold">CONFIRMAT</span>
              </div>
            </div>
            
            <div className="bg-green-100 border border-green-300 rounded p-2">
              <p className="text-xs font-semibold text-green-800">✓ Înlocuire cateter la 75% obligatorie</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-600 bg-gray-50 rounded-xl p-4 border border-gray-200">
        <div className="font-medium">Sistem în fază de cercetare | Date simulate pentru demonstrație</div>
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-6">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">7/9</span>
      </div>
    </div>
  );
};

export default NeuralNetworkVisualization;