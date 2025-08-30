import { useState, useEffect } from 'react';
import { Brain, Activity, TrendingUp, Play, AlertTriangle, Info } from 'lucide-react';

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
  size?: 'small' | 'medium' | 'large';
}

const Neuron = ({ x, y, isActive, layer, size = 'medium' }: NeuronProps) => {
  const getColor = () => {
    switch (layer) {
      case 'input': return isActive ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gray-300';
      case 'hidden1': return isActive ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gray-300';
      case 'hidden2': return isActive ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gray-300';
      case 'hidden3': return isActive ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gray-300';
      case 'output': return isActive ? 'bg-gradient-to-r from-red-500 to-pink-600' : 'bg-gray-300';
      default: return 'bg-gray-300';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'w-4 h-4';
      case 'large': return 'w-8 h-8';
      default: return 'w-6 h-6';
    }
  };

  return (
    <div
      className={`absolute ${getSizeClass()} rounded-full ${getColor()} transition-all duration-500 flex items-center justify-center text-white text-xs font-bold shadow-lg ${
        isActive ? 'animate-pulse shadow-xl scale-110' : ''
      }`}
      style={{ left: x, top: y }}
    >
      {isActive && layer === 'output' && '!'}
    </div>
  );
};

const Connection = ({ x1, y1, x2, y2, isActive }: { x1: number; y1: number; x2: number; y2: number; isActive: boolean }) => {
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        left: x1 + 12,
        top: y1 + 12,
        width: length + 20,
        height: 20,
        transform: `rotate(${angle}deg)`,
        transformOrigin: '0 10px'
      }}
    >
      <defs>
        <linearGradient id={`gradient-${isActive ? 'active' : 'inactive'}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={isActive ? '#3b82f6' : '#e5e7eb'} />
          <stop offset="100%" stopColor={isActive ? '#ef4444' : '#e5e7eb'} />
        </linearGradient>
      </defs>
      <line
        x1="0"
        y1="10"
        x2={length}
        y2="10"
        stroke={`url(#gradient-${isActive ? 'active' : 'inactive'})`}
        strokeWidth={isActive ? "3" : "1"}
        className={`transition-all duration-500 ${isActive ? 'opacity-80' : 'opacity-20'}`}
      />
      {isActive && (
        <circle
          cx="10"
          cy="10"
          r="3"
          fill="#3b82f6"
          className="animate-ping"
        />
      )}
    </svg>
  );
};

const NeuralNetworkVisualization = () => {
  const [activeNeurons, setActiveNeurons] = useState<Set<string>>(new Set());
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentScenario, setCurrentScenario] = useState<number | null>(null);
  const [selectedScenario, setSelectedScenario] = useState<ScenarioData | null>(null);

  // Neural network structure - more organic positioning
  const inputNeurons = Array.from({ length: 25 }, (_, i) => ({
    id: `input-${i}`,
    x: 50 + Math.sin(i * 0.3) * 10,
    y: 20 + i * 12 + Math.cos(i * 0.5) * 5,
    layer: 'input'
  }));

  const hidden1Neurons = Array.from({ length: 64 }, (_, i) => ({
    id: `hidden1-${i}`,
    x: 180 + Math.sin(i * 0.2) * 15,
    y: 10 + i * 5 + Math.cos(i * 0.3) * 8,
    layer: 'hidden1'
  }));

  const hidden2Neurons = Array.from({ length: 32 }, (_, i) => ({
    id: `hidden2-${i}`,
    x: 320 + Math.sin(i * 0.4) * 12,
    y: 30 + i * 10 + Math.cos(i * 0.6) * 6,
    layer: 'hidden2'
  }));

  const hidden3Neurons = Array.from({ length: 16 }, (_, i) => ({
    id: `hidden3-${i}`,
    x: 460 + Math.sin(i * 0.3) * 8,
    y: 50 + i * 20 + Math.cos(i * 0.4) * 4,
    layer: 'hidden3'
  }));

  const outputNeurons = Array.from({ length: 3 }, (_, i) => ({
    id: `output-${i}`,
    x: 600,
    y: 100 + i * 60,
    layer: 'output'
  }));

  const allNeurons = [...inputNeurons, ...hidden1Neurons, ...hidden2Neurons, ...hidden3Neurons, ...outputNeurons];

  const simulateScenario = (scenarioId: number) => {
    setIsAnimating(true);
    setCurrentScenario(scenarioId);
    setActiveNeurons(new Set());

    // Simulate data flow through network
    const steps = [
      { delay: 0, neurons: inputNeurons.slice(0, 15).map(n => n.id) },
      { delay: 500, neurons: hidden1Neurons.slice(0, 40).map(n => n.id) },
      { delay: 1000, neurons: hidden2Neurons.slice(0, 20).map(n => n.id) },
      { delay: 1500, neurons: hidden3Neurons.slice(0, 10).map(n => n.id) },
      { delay: 2000, neurons: [`output-${Math.floor(scenarios[scenarioId - 1].riskEvolution[2] / 34)}`] }
    ];

    steps.forEach(step => {
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
      setTimeout(() => simulateScenario(scenario.id), index * 500);
    });
  };

  const getConnections = () => {
    const connections: Array<{ x1: number; y1: number; x2: number; y2: number; isActive: boolean }> = [];
    
    // Sample connections for visual effect
    inputNeurons.slice(0, 8).forEach((input, i) => {
      hidden1Neurons.slice(i * 3, (i + 1) * 3).forEach(hidden => {
        connections.push({
          x1: input.x,
          y1: input.y,
          x2: hidden.x,
          y2: hidden.y,
          isActive: activeNeurons.has(input.id) && activeNeurons.has(hidden.id)
        });
      });
    });

    return connections;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Arhitectura Rețelei Neuronale - Simulare Live
        </h1>
        <p className="text-xl text-muted-foreground">
          Vizualizare interactivă a procesării datelor clinice
        </p>
      </div>

      {/* Neural Network Visualization */}
      <div className="bg-gradient-to-br from-background via-secondary/20 to-background rounded-2xl p-8 border shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-semibold">Procesare în timp real</div>
          <button
            onClick={simulateAllScenarios}
            disabled={isAnimating}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 transition-all transform hover:scale-105 shadow-lg"
          >
            <Play className="w-5 h-5" />
            <span>▶ SIMULEAZĂ TOATE SCENARIILE</span>
          </button>
        </div>

        {/* Network Visualization */}
        <div className="relative w-full h-96 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border-2 border-dashed border-blue-200 overflow-hidden">
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
              size={neuron.layer === 'output' ? 'large' : neuron.layer === 'input' ? 'medium' : 'small'}
            />
          ))}

          {/* Layer Labels */}
          <div className="absolute top-4 left-4 space-y-2">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">INPUT (25 parametri)</div>
            <div className="text-xs text-gray-600">Demografici • Comorbidități • Biomarkeri • Dispozitive • Antibiotice</div>
          </div>
          
          <div className="absolute top-4 left-32 space-y-2">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">HIDDEN 1 (64)</div>
            <div className="text-xs text-gray-600">Pattern-uri primare</div>
          </div>
          
          <div className="absolute top-4 left-72 space-y-2">
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">HIDDEN 2 (32)</div>
            <div className="text-xs text-gray-600">Corelații complexe</div>
          </div>
          
          <div className="absolute top-4 left-96 space-y-2">
            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">HIDDEN 3 (16)</div>
            <div className="text-xs text-gray-600">Sinteză finală</div>
          </div>
          
          <div className="absolute top-4 right-4 space-y-2">
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">OUTPUT</div>
            <div className="text-xs text-gray-600">Risc • Categorie • Timp critic</div>
          </div>

          {/* Real-time info panel */}
          {isAnimating && (
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border">
              <div className="flex items-center space-x-2 text-sm">
                <Activity className="w-4 h-4 text-blue-500 animate-pulse" />
                <span className="font-medium">Procesare activă</span>
              </div>
              <div className="text-xs text-gray-600 mt-1">
                150+ parametri • 10k+ conexiuni • &lt;2s/pacient
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Clinical Scenarios */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Simulări Clinice Detaliate</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className={`bg-card rounded-xl p-6 border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                currentScenario === scenario.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
              }`}
              onClick={() => simulateScenario(scenario.id)}
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${scenario.color} mt-1 animate-pulse`}></div>
                <div>
                  <h3 className="font-bold text-sm text-medical-blue">{scenario.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{scenario.description}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                {scenario.details.map((detail, index) => (
                  <p key={index} className="text-xs text-muted-foreground">• {detail}</p>
                ))}
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="font-medium">Evoluție risc:</span>
                  <span className="text-muted-foreground">0-72h</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  {scenario.riskEvolution.map((risk, index) => (
                    <div key={index} className="flex-1">
                      <div className={`h-2 rounded-full ${
                        risk < 30 ? 'bg-green-400' : risk < 60 ? 'bg-yellow-400' : 'bg-red-400'
                      }`} style={{ width: `${risk}%` }}></div>
                      <div className="text-xs text-center mt-1">{risk}%</div>
                      <div className="text-xs text-center text-muted-foreground">{index * 24}h</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center space-x-2 mt-3 p-2 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-medium text-red-700">{scenario.alert}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground bg-secondary/30 rounded-lg p-4">
        Sistem suport decizional | Validare medicală obligatorie | Conform GDPR și ghiduri INSP
      </div>
    </div>
  );
};

export default NeuralNetworkVisualization;