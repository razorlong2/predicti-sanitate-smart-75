import { useState, useEffect } from 'react';
import { Brain, Activity, TrendingUp, Play } from 'lucide-react';

interface NeuronProps {
  id: string;
  x: number;
  y: number;
  isActive: boolean;
  layer: string;
}

const Neuron = ({ x, y, isActive, layer }: NeuronProps) => {
  const getColor = () => {
    switch (layer) {
      case 'input': return isActive ? 'bg-medical-blue' : 'bg-gray-300';
      case 'hidden1': return isActive ? 'bg-medical-green' : 'bg-gray-300';
      case 'hidden2': return isActive ? 'bg-medical-orange' : 'bg-gray-300';
      case 'hidden3': return isActive ? 'bg-medical-red' : 'bg-gray-300';
      case 'output': return isActive ? 'bg-medical-purple' : 'bg-gray-300';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div
      className={`absolute w-6 h-6 rounded-full ${getColor()} transition-all duration-500 flex items-center justify-center text-white text-xs font-bold shadow-lg`}
      style={{ left: x, top: y }}
    >
      {isActive && layer === 'output' && '1'}
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
        <marker
          id={`arrowhead-${isActive ? 'active' : 'inactive'}`}
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
          className={isActive ? 'text-medical-blue' : 'text-gray-300'}
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill="currentColor"
          />
        </marker>
      </defs>
      <line
        x1="0"
        y1="10"
        x2={length}
        y2="10"
        stroke={isActive ? 'hsl(var(--medical-blue))' : '#e5e7eb'}
        strokeWidth={isActive ? "2" : "1"}
        markerEnd={`url(#arrowhead-${isActive ? 'active' : 'inactive'})`}
        className={`transition-all duration-500 ${isActive ? 'opacity-80' : 'opacity-30'}`}
      />
      {isActive && (
        <circle
          cx="0"
          cy="10"
          r="2"
          fill="hsl(var(--medical-blue))"
          className="animate-ping"
        />
      )}
    </svg>
  );
};

const NeuralNetworkVisualization = () => {
  const [activeNeurons, setActiveNeurons] = useState<Set<string>>(new Set());
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSimulation, setCurrentSimulation] = useState(0);

  const inputNeurons = Array.from({ length: 7 }, (_, i) => ({
    id: `input-${i}`,
    x: 50,
    y: 50 + i * 40,
    layer: 'input'
  }));

  const hidden1Neurons = Array.from({ length: 10 }, (_, i) => ({
    id: `hidden1-${i}`,
    x: 200,
    y: 30 + i * 30,
    layer: 'hidden1'
  }));

  const hidden2Neurons = Array.from({ length: 8 }, (_, i) => ({
    id: `hidden2-${i}`,
    x: 350,
    y: 50 + i * 35,
    layer: 'hidden2'
  }));

  const hidden3Neurons = Array.from({ length: 4 }, (_, i) => ({
    id: `hidden3-${i}`,
    x: 500,
    y: 80 + i * 50,
    layer: 'hidden3'
  }));

  const outputNeurons = Array.from({ length: 3 }, (_, i) => ({
    id: `output-${i}`,
    x: 650,
    y: 100 + i * 60,
    layer: 'output'
  }));

  const allNeurons = [...inputNeurons, ...hidden1Neurons, ...hidden2Neurons, ...hidden3Neurons, ...outputNeurons];

  const simulations = [
    {
      name: "Pacient risc scăzut",
      sequence: [
        { inputs: [0, 3], hidden1: [1, 4, 7], hidden2: [2, 5], hidden3: [1], outputs: [0] },
      ]
    },
    {
      name: "Pacient risc moderat", 
      sequence: [
        { inputs: [1, 2, 4, 5], hidden1: [0, 2, 5, 7, 8], hidden2: [1, 3, 6], hidden3: [0, 2], outputs: [1] },
      ]
    },
    {
      name: "Pacient risc crescut",
      sequence: [
        { inputs: [0, 1, 2, 4, 5, 6], hidden1: [1, 3, 4, 6, 7, 8, 9], hidden2: [0, 2, 4, 6, 7], hidden3: [1, 2, 3], outputs: [2] },
      ]
    }
  ];

  const animate = () => {
    setIsAnimating(true);
    const currentSim = simulations[currentSimulation];
    
    // Reset all neurons
    setActiveNeurons(new Set());
    
    let stepIndex = 0;
    const animateStep = () => {
      if (stepIndex >= currentSim.sequence.length) {
        setTimeout(() => {
          setActiveNeurons(new Set());
          setIsAnimating(false);
          setCurrentSimulation((prev) => (prev + 1) % simulations.length);
        }, 2000);
        return;
      }

      const step = currentSim.sequence[stepIndex];
      const newActive = new Set<string>();

      // Activate neurons progressively
      setTimeout(() => {
        step.inputs.forEach(i => newActive.add(`input-${i}`));
        setActiveNeurons(new Set(newActive));
      }, 0);

      setTimeout(() => {
        step.hidden1.forEach(i => newActive.add(`hidden1-${i}`));
        setActiveNeurons(new Set(newActive));
      }, 400);

      setTimeout(() => {
        step.hidden2.forEach(i => newActive.add(`hidden2-${i}`));
        setActiveNeurons(new Set(newActive));
      }, 800);

      setTimeout(() => {
        step.hidden3.forEach(i => newActive.add(`hidden3-${i}`));
        setActiveNeurons(new Set(newActive));
      }, 1200);

      setTimeout(() => {
        step.outputs.forEach(i => newActive.add(`output-${i}`));
        setActiveNeurons(new Set(newActive));
      }, 1600);

      stepIndex++;
      setTimeout(animateStep, 2400);
    };

    animateStep();
  };

  const getConnections = () => {
    const connections: Array<{ x1: number; y1: number; x2: number; y2: number; isActive: boolean }> = [];
    
    // Input to Hidden1
    inputNeurons.forEach(input => {
      hidden1Neurons.forEach(hidden => {
        connections.push({
          x1: input.x,
          y1: input.y,
          x2: hidden.x,
          y2: hidden.y,
          isActive: activeNeurons.has(input.id) && activeNeurons.has(hidden.id)
        });
      });
    });

    // Hidden1 to Hidden2
    hidden1Neurons.forEach(h1 => {
      hidden2Neurons.forEach(h2 => {
        connections.push({
          x1: h1.x,
          y1: h1.y,
          x2: h2.x,
          y2: h2.y,
          isActive: activeNeurons.has(h1.id) && activeNeurons.has(h2.id)
        });
      });
    });

    // Hidden2 to Hidden3
    hidden2Neurons.forEach(h2 => {
      hidden3Neurons.forEach(h3 => {
        connections.push({
          x1: h2.x,
          y1: h2.y,
          x2: h3.x,
          y2: h3.y,
          isActive: activeNeurons.has(h2.id) && activeNeurons.has(h3.id)
        });
      });
    });

    // Hidden3 to Output
    hidden3Neurons.forEach(h3 => {
      outputNeurons.forEach(output => {
        connections.push({
          x1: h3.x,
          y1: h3.y,
          x2: output.x,
          y2: output.y,
          isActive: activeNeurons.has(h3.id) && activeNeurons.has(output.id)
        });
      });
    });

    return connections;
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold">Arhitectura Detaliată - Rețea Neuronală</h3>
          {isAnimating && (
            <p className="text-sm text-muted-foreground mt-1">
              Simulare: {simulations[currentSimulation].name}
            </p>
          )}
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-sm text-muted-foreground">
            Simulare {currentSimulation + 1}/{simulations.length}
          </div>
          <button
            onClick={animate}
            disabled={isAnimating}
            className="flex items-center space-x-2 px-4 py-2 bg-medical-blue text-white rounded-lg hover:bg-medical-blue/80 disabled:opacity-50 transition-colors"
          >
            <Play className="w-4 h-4" />
            <span>{isAnimating ? 'În procesare...' : 'Simulează Predicția'}</span>
          </button>
        </div>
      </div>

      {/* Network Visualization */}
      <div className="relative w-full h-96 bg-gradient-to-br from-background/50 to-secondary/20 rounded-xl border overflow-hidden">
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
          />
        ))}

        {/* Layer Labels */}
        <div className="absolute top-2 left-8 text-sm font-medium text-medical-blue bg-white/90 px-2 py-1 rounded">Input Layer</div>
        <div className="absolute top-2 left-44 text-sm font-medium text-medical-green bg-white/90 px-2 py-1 rounded">Hidden 1 (64)</div>
        <div className="absolute top-2 left-80 text-sm font-medium text-medical-orange bg-white/90 px-2 py-1 rounded">Hidden 2 (32)</div>
        <div className="absolute top-2 left-[480px] text-sm font-medium text-medical-red bg-white/90 px-2 py-1 rounded">Hidden 3 (16)</div>
        <div className="absolute top-2 right-8 text-sm font-medium text-medical-purple bg-white/90 px-2 py-1 rounded">Output Layer</div>
        
        {/* Risk Level Labels */}
        {activeNeurons.has('output-0') && (
          <div className="absolute right-4 top-20 text-sm font-medium text-medical-blue bg-green-100 px-3 py-2 rounded-lg border-l-4 border-green-500">
            RISC SCĂZUT
          </div>
        )}
        {activeNeurons.has('output-1') && (
          <div className="absolute right-4 top-20 text-sm font-medium text-medical-orange bg-yellow-100 px-3 py-2 rounded-lg border-l-4 border-yellow-500">
            RISC MODERAT
          </div>
        )}
        {activeNeurons.has('output-2') && (
          <div className="absolute right-4 top-20 text-sm font-medium text-medical-red bg-red-100 px-3 py-2 rounded-lg border-l-4 border-red-500">
            RISC CRESCUT
          </div>
        )}
      </div>

      {/* Layer Details */}
      <div className="grid grid-cols-5 gap-4 mt-6 text-sm">
        <div className="text-center">
          <div className="w-4 h-4 bg-medical-blue rounded-full mx-auto mb-2"></div>
          <div className="font-semibold">Date clinice multiparametrice</div>
          <div className="text-muted-foreground text-xs mt-1">7 parametri</div>
        </div>
        <div className="text-center">
          <div className="w-4 h-4 bg-medical-green rounded-full mx-auto mb-2"></div>
          <div className="font-semibold">Extracție pattern-uri medicale complexe</div>
          <div className="text-muted-foreground text-xs mt-1">64 neuroni</div>
        </div>
        <div className="text-center">
          <div className="w-4 h-4 bg-medical-orange rounded-full mx-auto mb-2"></div>
          <div className="font-semibold">Integrare date clinice complexe</div>
          <div className="text-muted-foreground text-xs mt-1">32 neuroni</div>
        </div>
        <div className="text-center">
          <div className="w-4 h-4 bg-medical-red rounded-full mx-auto mb-2"></div>
          <div className="font-semibold">Analiză evoluție temporală</div>
          <div className="text-muted-foreground text-xs mt-1">16 neuroni</div>
        </div>
        <div className="text-center">
          <div className="w-4 h-4 bg-medical-purple rounded-full mx-auto mb-2"></div>
          <div className="font-semibold">Stratificare risc IAAM</div>
          <div className="text-muted-foreground text-xs mt-1">3 categorii</div>
        </div>
      </div>
    </div>
  );
};

export default NeuralNetworkVisualization;