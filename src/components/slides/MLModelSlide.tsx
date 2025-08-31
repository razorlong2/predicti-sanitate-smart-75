import { Brain, Layers, Target, TrendingUp } from "lucide-react";
import NeuralNetworkVisualization from "./NeuralNetworkVisualization";

const MLModelSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Modelul Machine Learning
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
              <p>• Date demografice</p>
              <p>• Biomarkeri inflamatori</p>
              <p>• Factori de risc</p>
              <p>• Dispozitive invazive</p>
              <p>• Comorbidități</p>
            </div>
          </div>

          {/* Hidden Layers */}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Hidden Layers</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="w-3 h-3 bg-white/80 rounded-full mx-auto"></div>
                <div className="w-3 h-3 bg-white/80 rounded-full mx-auto"></div>
                <div className="w-3 h-3 bg-white/80 rounded-full mx-auto"></div>
                <div className="w-3 h-3 bg-white/80 rounded-full mx-auto"></div>
              </div>
              <div className="space-y-2">
                <div className="w-3 h-3 bg-white/60 rounded-full mx-auto"></div>
                <div className="w-3 h-3 bg-white/60 rounded-full mx-auto"></div>
                <div className="w-3 h-3 bg-white/60 rounded-full mx-auto"></div>
                <div className="w-3 h-3 bg-white/60 rounded-full mx-auto"></div>
              </div>
              <div className="space-y-2">
                <div className="w-3 h-3 bg-white/40 rounded-full mx-auto"></div>
                <div className="w-3 h-3 bg-white/40 rounded-full mx-auto"></div>
                <div className="w-3 h-3 bg-white/40 rounded-full mx-auto"></div>
                <div className="w-3 h-3 bg-white/40 rounded-full mx-auto"></div>
              </div>
            </div>
            <div className="space-y-1 text-sm text-white/80">
              <p>• Deep feature extraction</p>
              <p>• Analiza pattern-urilor medicale</p>
              <p>• Integrare date clinice complexe</p>
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
              <p>• Probabilitate dezvoltare IAAM</p>
              <p>• Stratificare risc: Scăzut/Mediu/Ridicat</p>
              <p>• Suport decizie clinică</p>
            </div>
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
              <p>• <strong>Sensibilitate:</strong> &gt;78% (CI 95%: 72-84%)</p>
              <p>• <strong>Specificitate:</strong> &gt;73% (CI 95%: 68-78%)</p>
              <p>• <strong>AUC-ROC:</strong> &gt;0.78 (validation set)</p>
              <p>• <strong>F1-Score:</strong> &gt;0.75 (balanced accuracy)</p>
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

    </div>
  );
};

export default MLModelSlide;