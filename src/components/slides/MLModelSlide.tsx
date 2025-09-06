import { Brain, Layers, Target, TrendingUp } from "lucide-react";
import NeuralNetworkVisualization from "./NeuralNetworkVisualization";

const MLModelSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Cum Funcționează Algoritmul de Predicție
        </h1>
        <p className="text-xl text-muted-foreground">
          Sistem ML pentru estimarea riscului de infecții asociate actului medical
        </p>
      </div>

      {/* Neural Network Visualization */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-8">Arhitectura Rețelei Neuronale</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Input Layer */}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Input Layer</h3>
            <div className="space-y-2">
              <div className="w-4 h-4 bg-white/80 rounded-full mx-auto"></div>
              <div className="w-4 h-4 bg-white/80 rounded-full mx-auto"></div>
              <div className="w-4 h-4 bg-white/80 rounded-full mx-auto"></div>
              <div className="w-4 h-4 bg-white/60 rounded-full mx-auto"></div>
              <div className="w-4 h-4 bg-white/60 rounded-full mx-auto"></div>
              <div className="text-sm mt-2">Parametri medicali multipli</div>
            </div>
            <div className="space-y-1 text-sm text-white/80">
              <p>• Date despre pacient (vârstă, sex)</p>
              <p>• Analize de inflamație (CRP, leucocite)</p>
              <p>• Zile cu cateter sau sondă</p>
              <p>• Dispozitive medicale invazive</p>
              <p>• Boli asociate (diabet, probleme renale)</p>
            </div>
          </div>

          {/* Hidden Layers */}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Hidden Layers</h3>
            <div className="grid grid-cols-4 gap-2">
              {/* Hidden 1 - 64 neurons */}
              <div className="space-y-1">
                <div className="text-xs text-white/90 mb-2">H1 (64)</div>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-white/90 rounded-full mx-auto"></div>
                ))}
                <div className="text-xs text-white/70">Extracție</div>
              </div>
              
              {/* Hidden 2 - 32 neurons */}
              <div className="space-y-1">
                <div className="text-xs text-white/90 mb-2">H2 (32)</div>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-white/75 rounded-full mx-auto"></div>
                ))}
                <div className="text-xs text-white/70">Agregare</div>
              </div>
              
              {/* Hidden 3 - 16 neurons */}
              <div className="space-y-1">
                <div className="text-xs text-white/90 mb-2">H3 (16)</div>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-white/60 rounded-full mx-auto"></div>
                ))}
                <div className="text-xs text-white/70">Rafinare</div>
              </div>
              
              {/* Hidden 4 - 8 neurons */}
              <div className="space-y-1">
                <div className="text-xs text-white/90 mb-2">H4 (8)</div>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-white/45 rounded-full mx-auto"></div>
                ))}
                <div className="text-xs text-white/70">Clasificare</div>
              </div>
            </div>
            <div className="space-y-1 text-sm text-white/80 mt-4">
              <p>• Procesare în 4 etape (Input → H1 → H2 → H3 → H4 → Output)</p>
              <p>• Găsește legături complexe între factori clinici</p>
              <p>• Combină și rafinează toate informațiile medical</p>
            </div>
          </div>

          {/* Output Layer */}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Output Layer</h3>
            <div className="space-y-2">
              <div className="w-4 h-4 bg-medical-red rounded-full mx-auto"></div>
              <div className="w-4 h-4 bg-medical-orange rounded-full mx-auto"></div>
              <div className="w-4 h-4 bg-medical-blue rounded-full mx-auto"></div>
            </div>
            <div className="space-y-1 text-sm text-white/80">
              <p>• Cât de probabil e să apară infecția (%)</p>
              <p>• Nivel de risc: Mic, Moderat sau Mare</p>
              <p>• Ce tip de infecție ar putea fi</p>
            </div>
          </div>
        </div>
        
        {/* Technical Parameters */}
        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="text-center text-sm text-white/90">
            <strong>Dropout 0.3 | Batch Normalization | Adam Optimizer | 200 Epochs</strong>
          </div>
        </div>
      </div>

      {/* Model Components */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-blue">Componentele Modelului</h2>
          
          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Layers className="w-6 h-6 text-medical-blue" />
              <h3 className="font-semibold">Rețea Neuronală Hibridă</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• <strong>Input:</strong> Date clinice multiparametrice</p>
              <p>• <strong>Hidden layers:</strong> Extracție pattern-uri medicale complexe</p>
              <p>• <strong>LSTM:</strong> Analiză evoluție temporală</p>
              <p>• <strong>Output:</strong> Stratificare risc IAAM</p>
            </div>
          </div>

          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Brain className="w-6 h-6 text-medical-green" />
              <h3 className="font-semibold">Algoritmi Utilizați</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Machine Learning clasic (Random Forest, Gradient Boosting)</p>
              <p>• Deep Learning (rețele neuronale profunde)</p>
              <p>• Procesare feed-forward cu backpropagation</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green">Performanțe</h2>
          
          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-6 h-6 text-medical-red" />
              <h3 className="font-semibold">Metrici de Evaluare</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• <strong>Sensitivitate:</strong> 92% (găsește 9 din 10 infecții reale)</p>
              <p>• <strong>Specificitate:</strong> 78% (evită alarme false)</p>
              <p>• <strong>AUROC:</strong> 0.87 (discriminare foarte bună între cazuri)</p>
              <p>• <strong>Precizie generală:</strong> 87% din predicții corecte</p>
            </div>
          </div>

          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Target className="w-6 h-6 text-medical-orange" />
              <h3 className="font-semibold">Aplicabilitate Clinică</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• <strong>Stratificare risc:</strong> Clasificarea pacienților în categorii de risc</p>
              <p>• <strong>Suport decizie:</strong> Ghidarea terapiei și monitorizării</p>
              <p>• <strong>Implementare:</strong> Integrare în workflow-ul clinic existent</p>
              <p>• <strong>Beneficii:</strong> Îmbunătățirea outcome-urilor pacienților</p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-8">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">4/4</span>
      </div>

    </div>
  );
};

export default MLModelSlide;