import { useState, useEffect } from 'react';
import { Brain, Activity, TrendingUp, Play, AlertTriangle, ArrowRight } from 'lucide-react';

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
    title: "INFECȚIE URINARĂ DE CATETER",
    subtitle: "Femeie 71 ani, Neurologie, Spital Județean",
    description: "Pacientă cu AVC, cateter urinar prelungit",
    details: [
      "Cateter urinar de 5 zile post-AVC",
      "Febră 38.4°C, urină tulbure nou apărute",
      "Klebsiella ESBL+ >10⁵ UFC/ml",
      "CRP 67 mg/L, Leucocite 13.200"
    ],
    riskEvolution: [25, 48, 72],
    alert: "Risc crescut infecție cateter",
    color: "bg-red-500",
    riskLevel: 'high'
  },
  {
    id: 2,
    title: "INFECȚIE URINARĂ DIN COMUNITATE",
    subtitle: "Bărbat 62 ani, prezentare la Urgență",
    description: "Infecție urinară nedependentă de îngrijire medicală",
    details: [
      "Simptome de acasă",
      "Fără cateter recent",
      "E.coli sensibil"
    ],
    riskEvolution: [8, 12, 15],
    alert: "Infecție din comunitate",
    color: "bg-green-500",
    riskLevel: 'low'
  },
  {
    id: 3,
    title: "PNEUMONIE DE VENTILATOR",
    subtitle: "Bărbat 48 ani, ATI, traumatism cranio-cerebral",
    description: "Pneumonie asociată ventilației la pacient ventilat mecanic",
    details: [
      "Ventilație mecanică ziua 4",
      "Secreții purulente noi, Rx infiltrat bazal",
      "Pseudomonas aeruginosa 10⁶ CFU/ml",
      "CPIS score: 8 puncte"
    ],
    riskEvolution: [35, 58, 78],
    alert: "Pneumonie asociată ventilației",
    color: "bg-red-500",
    riskLevel: 'high'
  },
  {
    id: 4,
    title: "COMPLICAȚIE CHIRURGICALĂ",
    subtitle: "Femeie 58 ani, Chirurgie Toracică",
    description: "Complicație postoperatorie non-infecțioasă",
    details: [
      "Post-operator, fără ventilație",
      "Tuse, dar fără infecție",
      "Rezolvare cu kinetoterapie"
    ],
    riskEvolution: [15, 22, 25],
    alert: "Complicație chirurgicală",
    color: "bg-yellow-500",
    riskLevel: 'moderate'
  },
  {
    id: 5,
    title: "INFECȚIE PLAGĂ OPERATORIE",
    subtitle: "Bărbat 55 ani, post-colecistectomie",
    description: "Infecție profundă cu necesitate de reintervenție",
    details: [
      "Ziua 7 postoperator, plagă purulentă",
      "Dehiscență parțială, eritem periincizional",
      "Staphylococcus aureus MRSA",
      "CRP 145 mg/L, necesită reintervenție"
    ],
    riskEvolution: [42, 67, 81],
    alert: "Infecție profundă confirmată",
    color: "bg-red-600",
    riskLevel: 'critical'
  },
  {
    id: 6,
    title: "INFECȚIE SANGUINĂ DE CATETER",
    subtitle: "Femeie 42 ani, Hematologie, neutropenie",
    description: "Infecție fungică de cateter în context de neutropenie severă",
    details: [
      "CVC de 19 zile pentru chimioterapie",
      "Febră mare, frison",
      "Candidă în sânge"
    ],
    riskEvolution: [56, 74, 89],
    alert: "Infecție fungică de cateter",
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
      className={`absolute w-8 h-8 rounded-full ${getColor()} transition-all duration-700 flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-white ${
        isActive ? 'animate-pulse shadow-xl scale-125 z-10' : 'scale-100'
      }`}
      style={{ 
        left: x - 16, 
        top: y - 16,
      }}
    >
      {index !== undefined && (
        <span className={`text-xs ${isActive ? 'text-white' : 'text-gray-600'}`}>
          {index + 1}
        </span>
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
        height: 2,
        transform: `rotate(${angle}deg)`,
        transformOrigin: '0 50%',
      }}
    >
      <div 
        className={`w-full h-full transition-all duration-500 ${
          isActive 
            ? 'bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 opacity-90' 
            : 'bg-gray-300 opacity-30'
        }`}
      />
      {isActive && (
        <div 
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
          style={{ 
            left: '20%', 
            top: '-2px',
            animationDelay: '0s'
          }}
        />
      )}
    </div>
  );
};

const NeuralNetworkVisualization = () => {
  const [activeNeurons, setActiveNeurons] = useState<Set<string>>(new Set());
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentScenario, setCurrentScenario] = useState<number | null>(null);

  // Simplified network structure: 5 → 3 → 3
  const layers = {
    input: Array.from({ length: 5 }, (_, i) => ({
      id: `input-${i}`,
      x: 150,
      y: 100 + i * 80, // Large spacing for clarity
      layer: 'input',
      index: i,
      label: ['Date pacient', 'Analize laborator', 'Dispozitive medicale', 'Istoric medical', 'Durata internării'][i]
    })),
    hidden: Array.from({ length: 3 }, (_, i) => ({
      id: `hidden-${i}`,
      x: 450,
      y: 150 + i * 100,
      layer: 'hidden',
      index: i,
      label: ['Analiză primară', 'Identificare pattern', 'Sinteză finală'][i]
    })),
    output: Array.from({ length: 3 }, (_, i) => ({
      id: `output-${i}`,
      x: 750,
      y: 150 + i * 100,
      layer: 'output',
      index: i,
      label: ['Risc IAAM', 'Tip probabil infecție', 'Recomandare urgență'][i],
      subtitle: ['Scăzut/Mediu/Înalt', 'UTI/VAP/ISO/CLABSI', 'Monitorizare recomandată'][i]
    }))
  };

  const allNeurons = [...layers.input, ...layers.hidden, ...layers.output];

  const simulateScenario = (scenarioId: number) => {
    setIsAnimating(true);
    setCurrentScenario(scenarioId);
    setActiveNeurons(new Set());

    const scenario = scenarios[scenarioId - 1];
    const riskLevel = scenario.riskEvolution[2]; // Final risk level

    // Progressive activation for simplified network
    const activationSequence = [
      { delay: 0, neurons: layers.input.map(n => n.id) },
      { delay: 600, neurons: layers.hidden.map(n => n.id) },
      { delay: 1200, neurons: [layers.output[Math.floor(riskLevel / 35)].id] }
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
      { from: layers.input, to: layers.hidden },
      { from: layers.hidden, to: layers.output }
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

        {/* Neural Network Visualization - Simplified structure */}
        <div className="relative w-[90%] mx-auto h-[500px] bg-white/80 rounded-2xl border border-gray-200 overflow-hidden shadow-inner">
          {/* Layer Labels - ABOVE nodes, simplified structure */}
          <div className="absolute top-4 left-[120px] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-blue-200">
            <div className="text-sm font-bold text-blue-900">Date Clinice (5 categorii)</div>
            <div className="text-xs text-gray-600 mt-1">Pacient, Analize, Dispozitive...</div>
          </div>
          
          <div className="absolute top-4 left-[410px] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-green-200">
            <div className="text-sm font-bold text-green-900">Procesare (3 etape)</div>
            <div className="text-xs text-gray-600 mt-1">Analiză→Pattern→Sinteză</div>
          </div>
          
          <div className="absolute top-4 left-[710px] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-red-200">
            <div className="text-sm font-bold text-red-900">Predicții IAAM</div>
            <div className="text-xs text-gray-600 mt-1">Risc, Tip, Urgență</div>
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

          {/* Input Details - Updated for simplified structure */}
          <div className="absolute left-4 top-[100px] bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200 text-xs max-w-[200px]">
            <div className="space-y-1">
              <div><strong>Node 1:</strong> DATE PACIENT</div>
              <div><strong>Node 2:</strong> ANALIZE LABORATOR</div>
              <div><strong>Node 3:</strong> DISPOZITIVE MEDICALE</div>
              <div><strong>Node 4:</strong> ISTORIC MEDICAL</div>
              <div><strong>Node 5:</strong> DURATA INTERNĂRII</div>
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

      {/* Clinical Scenarios */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Simulări Clinice - 6 Scenarii</h2>
          <p className="text-sm text-gray-600 mt-2">(Scenarii simulate pentru demonstrație)</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className={`bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                currentScenario === scenario.id 
                  ? 'ring-4 ring-blue-400 shadow-2xl border-blue-400 transform scale-105' 
                  : 'border-gray-200 shadow-md hover:border-blue-300'
              }`}
              onClick={() => simulateScenario(scenario.id)}
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start space-x-3 mb-2">
                  <div className={`w-4 h-4 rounded-full ${scenario.color} mt-1 ${
                    currentScenario === scenario.id ? 'animate-ping' : 'animate-pulse'
                  }`}></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-gray-800 leading-tight">{scenario.title}</h3>
                    <p className="text-xs text-gray-600 italic mt-1">{scenario.subtitle}</p>
                  </div>
                </div>
              </div>
              
              {/* Details */}
              <div className="space-y-2 mb-5">
                {scenario.details.slice(0, 3).map((detail, index) => (
                  <p key={index} className="text-sm text-gray-700 leading-relaxed">• {detail}</p>
                ))}
                <p className="text-xs text-gray-500 italic">(Exemplu pentru testare)</p>
              </div>
              
              {/* Risk Evolution */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-gray-700">Evoluție risc:</span>
                  <span className="text-gray-500">0-72h</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {scenario.riskEvolution.map((risk, index) => (
                    <div key={index} className="text-center">
                      <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full transition-all duration-1000"
                          style={{ 
                            width: `${Math.min(risk, 100)}%`,
                            backgroundColor: getRiskColor(
                              risk < 30 ? 'low' : 
                              risk < 60 ? 'moderate' : 
                              risk < 80 ? 'high' : 'critical'
                            )
                          }}
                        />
                      </div>
                      <div className="text-sm font-bold mt-1">{risk}%</div>
                      <div className="text-xs text-gray-500">{index * 24}h</div>
                    </div>
                  ))}
                </div>
                
                {/* Alert */}
                   <div className="flex items-center space-x-2 mt-4 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400 hover:bg-blue-50 transition-colors duration-300">
                  <AlertTriangle className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  <span className="text-xs font-medium text-gray-800 leading-tight">{scenario.alert}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-600 bg-gray-50 rounded-xl p-4 border border-gray-200">
        <div className="font-medium">Model în dezvoltare | Studiu pilot în desfășurare | Validare clinică planificată 2025</div>
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-6">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">5/11</span>
      </div>
    </div>
  );
};

export default NeuralNetworkVisualization;