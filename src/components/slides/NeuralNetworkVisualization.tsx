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
    title: "INFECȚIE URINARĂ COMUNITARĂ",
    subtitle: "Bărbat 62 ani, prezentare la Urgență",
    description: "Infecție urinară nedependentă de îngrijire medicală",
    details: [
      "Simptome de 3 zile anterior internării",
      "Fără cateter urinar sau spitalizări recente",
      "E. coli sensibil, tratament cu antibiotice anterior eșuat",
      "Diabet zaharat decompensat"
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
    title: "ATELECTAZIE POST-LOBECTOMIE",
    subtitle: "Femeie 58 ani, Chirurgie Toracică",
    description: "Complicație postoperatorie non-infecțioasă",
    details: [
      "Ziua 3 postoperator, neventilată",
      "Tuse productivă, Rx atelectazie (nu infiltrat)",
      "Hemocultură negativă",
      "Rezolvare cu fizioterapie"
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
    title: "SEPTICEMIE DE CATETER CENTRAL",
    subtitle: "Femeie 42 ani, Hematologie, neutropenie",
    description: "Infecție fungică de cateter în context de neutropenie severă",
    details: [
      "CVC jugular de 19 zile pentru chimioterapie",
      "Febră 39.2°C, frison, neutropenie <500",
      "Candida parapsilosis în hemocultură",
      "Diferențial timp pozitivare >2 ore"
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
  index?: number;
}

const Neuron = ({ x, y, isActive, layer, label, index }: NeuronProps) => {
  const getColor = () => {
    switch (layer) {
      case 'input': return isActive ? 'bg-gradient-to-br from-blue-500 to-blue-700' : 'bg-gray-300';
      case 'hidden1': return isActive ? 'bg-gradient-to-br from-green-500 to-green-700' : 'bg-gray-300';
      case 'hidden2': return isActive ? 'bg-gradient-to-br from-yellow-500 to-orange-600' : 'bg-gray-300';
      case 'hidden3': return isActive ? 'bg-gradient-to-br from-orange-600 to-red-600' : 'bg-gray-300';
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

  // Network structure with increased spacing
  const layers = {
    input: Array.from({ length: 6 }, (_, i) => ({
      id: `input-${i}`,
      x: 120,
      y: 80 + i * 42,
      layer: 'input',
      index: i
    })),
    hidden1: Array.from({ length: 8 }, (_, i) => ({
      id: `hidden1-${i}`,
      x: 320,
      y: 60 + i * 36,
      layer: 'hidden1',
      index: i
    })),
    hidden2: Array.from({ length: 6 }, (_, i) => ({
      id: `hidden2-${i}`,
      x: 520,
      y: 80 + i * 42,
      layer: 'hidden2',
      index: i
    })),
    hidden3: Array.from({ length: 4 }, (_, i) => ({
      id: `hidden3-${i}`,
      x: 720,
      y: 100 + i * 48,
      layer: 'hidden3',
      index: i
    })),
    output: Array.from({ length: 3 }, (_, i) => ({
      id: `output-${i}`,
      x: 920,
      y: 120 + i * 60,
      layer: 'output',
      index: i
    }))
  };

  const allNeurons = [...layers.input, ...layers.hidden1, ...layers.hidden2, ...layers.hidden3, ...layers.output];

  const simulateScenario = (scenarioId: number) => {
    setIsAnimating(true);
    setCurrentScenario(scenarioId);
    setActiveNeurons(new Set());

    const scenario = scenarios[scenarioId - 1];
    const riskLevel = scenario.riskEvolution[2]; // Final risk level

    // Progressive activation
    const activationSequence = [
      { delay: 0, neurons: layers.input.slice(0, 4).map(n => n.id) },
      { delay: 400, neurons: layers.hidden1.slice(0, 6).map(n => n.id) },
      { delay: 800, neurons: layers.hidden2.slice(0, 4).map(n => n.id) },
      { delay: 1200, neurons: layers.hidden3.slice(0, 3).map(n => n.id) },
      { delay: 1600, neurons: [layers.output[Math.floor(riskLevel / 35)].id] }
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
      { from: layers.input, to: layers.hidden1 },
      { from: layers.hidden1, to: layers.hidden2 },
      { from: layers.hidden2, to: layers.hidden3 },
      { from: layers.hidden3, to: layers.output }
    ];

    layerPairs.forEach(({ from, to }) => {
      from.forEach((fromNeuron, fromIndex) => {
        to.forEach((toNeuron, toIndex) => {
          if ((fromIndex + toIndex) % 2 === 0 || Math.abs(fromIndex - toIndex) <= 1) {
            connections.push({
              x1: fromNeuron.x,
              y1: fromNeuron.y,
              x2: toNeuron.x,
              y2: toNeuron.y,
              isActive: activeNeurons.has(fromNeuron.id) && activeNeurons.has(toNeuron.id)
            });
          }
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
          Arhitectura Rețelei Neuronale
        </h1>
        <p className="text-xl text-muted-foreground">
          Procesare în timp real a datelor clinice
        </p>
      </div>

      {/* Neural Network Section */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl p-8 border-2 border-blue-100 shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <div className="text-xl font-bold text-gray-700">Rețea neuronală hibridă</div>
          <button
            onClick={simulateAllScenarios}
            disabled={isAnimating}
            className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-full hover:from-blue-700 hover:to-purple-800 disabled:opacity-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Play className="w-5 h-5" />
            <span className="text-sm font-semibold">▶ SIMULEAZĂ TOATE</span>
          </button>
        </div>

        {/* Network Visualization */}
        <div className="relative w-[80%] mx-auto h-[520px] bg-white/80 rounded-2xl border border-gray-200 overflow-hidden shadow-inner">
          {/* Connections */}
          {getConnections().map((conn, index) => (
            <Connection key={index} {...conn} />
          ))}

          {/* Neurons */}
          {allNeurons.map(neuron => (
            <Neuron
              key={neuron.id}
              id={neuron.id}
              x={neuron.x}
              y={neuron.y}
              isActive={activeNeurons.has(neuron.id)}
              layer={neuron.layer}
              index={neuron.index}
            />
          ))}

          {/* Layer Labels - ABOVE nodes */}
          <div className="absolute top-8" style={{ left: '80px' }}>
            <div className="bg-white/90 backdrop-blur-sm text-blue-900 px-4 py-2 rounded-lg font-bold text-sm shadow-md border border-blue-200">
              Date Clinice (25 parametri)
            </div>
            <div className="text-xs text-gray-600 mt-2 text-center max-w-[120px]">
              Vârstă, CRP, Leucocite...
            </div>
          </div>
          
          <div className="absolute top-8" style={{ left: '280px' }}>
            <div className="bg-white/90 backdrop-blur-sm text-green-900 px-4 py-2 rounded-lg font-bold text-sm shadow-md border border-green-200">
              Procesare (64)
            </div>
          </div>
          
          <div className="absolute top-8" style={{ left: '480px' }}>
            <div className="bg-white/90 backdrop-blur-sm text-orange-900 px-4 py-2 rounded-lg font-bold text-sm shadow-md border border-orange-200">
              Analiză (32)
            </div>
          </div>
          
          <div className="absolute top-8" style={{ left: '680px' }}>
            <div className="bg-white/90 backdrop-blur-sm text-red-900 px-4 py-2 rounded-lg font-bold text-sm shadow-md border border-red-200">
              Decizie (16)
            </div>
          </div>
          
          <div className="absolute top-8" style={{ left: '840px' }}>
            <div className="bg-white/90 backdrop-blur-sm text-purple-900 px-4 py-2 rounded-lg font-bold text-sm shadow-md border border-purple-200">
              Predicții
            </div>
          </div>

          {/* Output Node Labels */}
          <div className="absolute" style={{ left: '960px', top: '110px' }}>
            <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">
              Risc Global
            </div>
            <div className="text-xs text-gray-500 text-center">0-100%</div>
          </div>
          
          <div className="absolute" style={{ left: '960px', top: '170px' }}>
            <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">
              Tip Infecție
            </div>
            <div className="text-xs text-gray-500 text-center">UTI/VAP/ISO</div>
          </div>
          
          <div className="absolute" style={{ left: '960px', top: '230px' }}>
            <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">
              Confidență
            </div>
            <div className="text-xs text-gray-500 text-center">Interval</div>
          </div>

          {/* Processing Info */}
          {isAnimating && (
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-blue-200">
              <div className="flex items-center space-x-2 text-xs">
                <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
                <span className="font-bold text-gray-800">Procesare activă</span>
              </div>
            </div>
          )}
        </div>

        {/* Technical Specifications Box */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">⚙️</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800">Specificații Tehnice</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-blue-700">• Arhitectură:</span>
                <span className="text-gray-700">Feed-Forward 25→64→32→16→3</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-blue-700">• Funcții activare:</span>
                <span className="text-gray-700">ReLU (hidden), Sigmoid (output)</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-green-700">• Dataset:</span>
                <span className="text-gray-700">2.847 pacienți | Cross-validare 5-fold</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-green-700">• Performanță:</span>
                <span className="text-gray-700">AUROC 0.87 | Sensitivitate 92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical Scenarios */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Simulări Clinice - 6 Scenarii</h2>
        
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
                {scenario.details.map((detail, index) => (
                  <p key={index} className="text-xs text-gray-700 leading-relaxed">• {detail}</p>
                ))}
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
                      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
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
                      <div className="text-xs font-bold mt-1">{risk}%</div>
                      <div className="text-xs text-gray-500">{index * 24}h</div>
                    </div>
                  ))}
                </div>
                
                {/* Alert */}
                <div className="flex items-center space-x-2 mt-4 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
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
        <div className="font-medium">Validat pe aproape 3.000 de pacienți din spitale românești | Precizie de 87% în detectarea infecțiilor</div>
      </div>
    </div>
  );
};

export default NeuralNetworkVisualization;