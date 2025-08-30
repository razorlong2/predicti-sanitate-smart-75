import { useState, useEffect } from 'react';
import { Brain, Activity, TrendingUp, Play, AlertTriangle, ArrowRight } from 'lucide-react';

interface ScenarioData {
  id: number;
  title: string;
  description: string;
  details: string[];
  riskEvolution: number[];
  alert: string;
  color: string;
}

const scenarios: ScenarioData[] = [
  {
    id: 1,
    title: "PACIENT VÂRSTNIC CARDIAC",
    description: "Bărbat 78 ani, diabet tip 2 decompensat",
    details: [
      "Cateter venos central de 4 zile pentru tratament",
      "Glicemie oscilantă 180-320 mg/dL, HbA1c 9.2%",
      "CRP în creștere: 45→89→156 mg/L"
    ],
    riskEvolution: [15, 42, 67],
    alert: "Risc bacteriemie asociată cateter",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "POST-OPERATOR CARDIAC COMPLEX",
    description: "Femeie 65 ani, bypass coronarian triplu",
    details: [
      "Ventilație mecanică prelungită >48 ore",
      "CRP 120 mg/L, PCT 2.8 ng/mL, leucocite 18.500",
      "Secreții traheale purulente, febră 38.3°C"
    ],
    riskEvolution: [22, 51, 78],
    alert: "Risc pneumonie asociată ventilației",
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "INFECȚIE URINARĂ COMPLICATĂ",
    description: "Bărbat 72 ani, adenom prostată, retenție acută",
    details: [
      "Sondă urinară de 6 zile, urină tulbure",
      "Urocultură anterioară: E.coli ESBL+",
      "Piurie marcată, hematurie microscopică"
    ],
    riskEvolution: [18, 38, 56],
    alert: "Risc infecție urinară rezistentă",
    color: "bg-yellow-500"
  },
  {
    id: 4,
    title: "PACIENT ONCOLOGIC NEUTROPENIC",
    description: "Leucemie acută, post-chimioterapie",
    details: [
      "Neutropenie severă <500/mm³ de 5 zile",
      "Febră 38.8°C, frison, hipotensiune",
      "Mucozită grad 3, port-a-cath prezent"
    ],
    riskEvolution: [45, 72, 89],
    alert: "Risc sepsis cu neutropenie febrilă",
    color: "bg-red-500"
  },
  {
    id: 5,
    title: "ARSURI MAJORE",
    description: "Arsuri grad II-III pe 45% suprafață corporală",
    details: [
      "Intubare orotraheală, ventilație invazivă",
      "Edem generalizat, hipoalbuminemie severă",
      "Escare multiple, risc colonizare Pseudomonas"
    ],
    riskEvolution: [38, 65, 84],
    alert: "Risc infecție plăgi și sepsis",
    color: "bg-orange-500"
  },
  {
    id: 6,
    title: "POLITRAUMĂ SEVERĂ",
    description: "ISS 35, fractură bazin, contuzie pulmonară",
    details: [
      "CVC, sondă urinară, dren toracic, fixator extern",
      "Transfuzii masive: 8 unități masă eritrocitară",
      "Coagulopatie, hipotermie, acidoză"
    ],
    riskEvolution: [28, 58, 76],
    alert: "Risc infecții multiple site-uri",
    color: "bg-purple-500"
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
      case 'input': return isActive ? 'bg-gradient-to-br from-blue-500 to-blue-700' : 'bg-gray-400';
      case 'hidden1': return isActive ? 'bg-gradient-to-br from-green-500 to-green-700' : 'bg-gray-400';
      case 'hidden2': return isActive ? 'bg-gradient-to-br from-yellow-500 to-orange-600' : 'bg-gray-400';
      case 'hidden3': return isActive ? 'bg-gradient-to-br from-orange-600 to-red-600' : 'bg-gray-400';
      case 'output': return isActive ? 'bg-gradient-to-br from-red-600 to-pink-700' : 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div
      className={`absolute w-12 h-12 rounded-full ${getColor()} transition-all duration-700 flex items-center justify-center text-white text-sm font-bold shadow-lg border-2 border-white ${
        isActive ? 'animate-pulse shadow-2xl scale-110 z-10' : 'scale-100'
      }`}
      style={{ 
        left: x - 24, 
        top: y - 24,
        transform: isActive ? 'scale(1.2)' : 'scale(1)'
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
            ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 opacity-80' 
            : 'bg-gray-300 opacity-30'
        }`}
        style={{
          background: isActive 
            ? 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ef4444)' 
            : '#d1d5db'
        }}
      />
      {isActive && (
        <div 
          className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
          style={{ 
            left: '10%', 
            top: '-3px',
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

  // Define network structure like in the reference image
  const layers = {
    input: Array.from({ length: 7 }, (_, i) => ({
      id: `input-${i}`,
      x: 100,
      y: 80 + i * 60,
      layer: 'input',
      index: i
    })),
    hidden1: Array.from({ length: 10 }, (_, i) => ({
      id: `hidden1-${i}`,
      x: 250,
      y: 40 + i * 40,
      layer: 'hidden1',
      index: i
    })),
    hidden2: Array.from({ length: 8 }, (_, i) => ({
      id: `hidden2-${i}`,
      x: 400,
      y: 60 + i * 45,
      layer: 'hidden2',
      index: i
    })),
    hidden3: Array.from({ length: 4 }, (_, i) => ({
      id: `hidden3-${i}`,
      x: 550,
      y: 120 + i * 60,
      layer: 'hidden3',
      index: i
    })),
    output: Array.from({ length: 3 }, (_, i) => ({
      id: `output-${i}`,
      x: 700,
      y: 140 + i * 80,
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
      { delay: 0, neurons: layers.input.slice(0, 5).map(n => n.id) },
      { delay: 500, neurons: layers.hidden1.slice(0, 7).map(n => n.id) },
      { delay: 1000, neurons: layers.hidden2.slice(0, 5).map(n => n.id) },
      { delay: 1500, neurons: layers.hidden3.slice(0, 3).map(n => n.id) },
      { delay: 2000, neurons: [layers.output[Math.floor(riskLevel / 34)].id] }
    ];

    activationSequence.forEach(step => {
      setTimeout(() => {
        setActiveNeurons(prev => new Set([...prev, ...step.neurons]));
      }, step.delay);
    });

    setTimeout(() => {
      setIsAnimating(false);
      setCurrentScenario(null);
    }, 4000);
  };

  const simulateAllScenarios = () => {
    scenarios.forEach((scenario, index) => {
      setTimeout(() => simulateScenario(scenario.id), index * 1000);
    });
  };

  const getConnections = () => {
    const connections: Array<{ x1: number; y1: number; x2: number; y2: number; isActive: boolean }> = [];
    
    // Create selective connections like in the reference image
    const layerPairs = [
      { from: layers.input, to: layers.hidden1 },
      { from: layers.hidden1, to: layers.hidden2 },
      { from: layers.hidden2, to: layers.hidden3 },
      { from: layers.hidden3, to: layers.output }
    ];

    layerPairs.forEach(({ from, to }) => {
      from.forEach((fromNeuron, fromIndex) => {
        to.forEach((toNeuron, toIndex) => {
          // Create selective connections, not fully connected
          if ((fromIndex + toIndex) % 2 === 0 || fromIndex === toIndex || Math.abs(fromIndex - toIndex) <= 1) {
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Arhitectura Rețelei Neuronale
        </h1>
        <p className="text-xl text-muted-foreground">
          Vizualizare interactivă a procesării datelor clinice
        </p>
      </div>

      {/* Neural Network Visualization - Clean Layout like Reference */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl p-12 border-2 border-blue-100 shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <div className="text-xl font-bold text-gray-700">Procesare în timp real</div>
          <button
            onClick={simulateAllScenarios}
            disabled={isAnimating}
            className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-full hover:from-blue-700 hover:to-purple-800 disabled:opacity-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <Play className="w-6 h-6" />
            <span className="text-lg font-semibold">▶ SIMULEAZĂ TOATE SCENARIILE</span>
          </button>
        </div>

        {/* Network Structure */}
        <div className="relative w-full h-96 bg-white/80 rounded-2xl border border-gray-200 overflow-hidden shadow-inner">
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

          {/* Layer Labels - Clean and Simple */}
          <div className="absolute top-4 left-16 text-center">
            <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg font-bold text-sm shadow-md">
              Intrare
            </div>
            <div className="text-xs text-gray-600 mt-2 font-medium">
              Demografici<br/>
              Comorbidități<br/>
              Biomarkeri<br/>
              Dispozitive<br/>
              Antibiotice
            </div>
          </div>
          
          <div className="absolute top-4 left-52 text-center">
            <div className="bg-green-100 text-green-900 px-4 py-2 rounded-lg font-bold text-sm shadow-md">
              Ascuns 1
            </div>
            <div className="text-xs text-gray-600 mt-2 font-medium">64 neuroni</div>
          </div>
          
          <div className="absolute top-4 left-80 text-center">
            <div className="bg-yellow-100 text-orange-900 px-4 py-2 rounded-lg font-bold text-sm shadow-md">
              Ascuns 2
            </div>
            <div className="text-xs text-gray-600 mt-2 font-medium">32 neuroni</div>
          </div>
          
          <div className="absolute top-4 left-[520px] text-center">
            <div className="bg-orange-100 text-red-900 px-4 py-2 rounded-lg font-bold text-sm shadow-md">
              Ascuns 3
            </div>
            <div className="text-xs text-gray-600 mt-2 font-medium">16 neuroni</div>
          </div>
          
          <div className="absolute top-4 right-16 text-center">
            <div className="bg-red-100 text-red-900 px-4 py-2 rounded-lg font-bold text-sm shadow-md">
              Ieșire
            </div>
            <div className="text-xs text-gray-600 mt-2 font-medium">
              Risc scăzut<br/>
              Risc moderat<br/>
              Risc crescut
            </div>
          </div>

          {/* Processing Info */}
          {isAnimating && (
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-200">
              <div className="flex items-center space-x-3 text-sm">
                <Activity className="w-5 h-5 text-blue-600 animate-pulse" />
                <span className="font-bold text-gray-800">Procesare activă</span>
              </div>
              <div className="text-xs text-gray-600 mt-2 space-y-1">
                <div>150+ parametri clinici</div>
                <div>10.000+ conexiuni neuronale</div>
                <div>Timp procesare: &lt;2 secunde/pacient</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Clinical Scenarios Grid */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Simulări Clinice Detaliate</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className={`bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-blue-300 ${
                currentScenario === scenario.id 
                  ? 'ring-4 ring-blue-400 shadow-2xl border-blue-400 transform scale-105' 
                  : 'border-gray-200 shadow-md'
              }`}
              onClick={() => simulateScenario(scenario.id)}
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className={`w-4 h-4 rounded-full ${scenario.color} mt-1 ${
                  currentScenario === scenario.id ? 'animate-ping' : 'animate-pulse'
                }`}></div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-gray-800 leading-tight">{scenario.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{scenario.description}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-5">
                {scenario.details.map((detail, index) => (
                  <p key={index} className="text-xs text-gray-700 leading-relaxed">• {detail}</p>
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-gray-700">Evoluție risc:</span>
                  <span className="text-gray-500">0-72h</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {scenario.riskEvolution.map((risk, index) => (
                    <div key={index} className="text-center">
                      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${
                            risk < 30 ? 'bg-green-400' : 
                            risk < 60 ? 'bg-yellow-400' : 'bg-red-400'
                          }`} 
                          style={{ width: `${Math.min(risk, 100)}%` }}
                        />
                      </div>
                      <div className="text-xs font-bold mt-1">{risk}%</div>
                      <div className="text-xs text-gray-500">{index * 24}h</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center space-x-2 mt-4 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span className="text-xs font-medium text-red-800 leading-tight">{scenario.alert}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-600 bg-gray-50 rounded-xl p-6 border border-gray-200">
        <div className="font-medium">Sistem suport decizional | Validare medicală obligatorie | Conform GDPR și ghiduri INSP</div>
      </div>
    </div>
  );
};

export default NeuralNetworkVisualization;