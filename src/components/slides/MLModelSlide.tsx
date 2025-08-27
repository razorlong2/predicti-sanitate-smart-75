import { Brain, Layers, Target, TrendingUp } from "lucide-react";

const MLModelSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Modelul Machine Learning
        </h1>
        <p className="text-xl text-muted-foreground">
          Rețea neuronală hibridă pentru predicția precisă a riscului IAAM
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
              <div className="text-sm mt-2">25 parametri</div>
            </div>
            <div className="space-y-1 text-sm text-white/80">
              <p>• Vârstă</p>
              <p>• Leucocite</p>
              <p>• CRP</p>
              <p>• Zile cu sondă</p>
              <p>• Bacterii identificate</p>
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
              <p>• Pattern recognition</p>
              <p>• Feature combinations</p>
              <p>• LSTM sequences</p>
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
              <p>• Risc CAUTI: 75%</p>
              <p>• Risc VAP: 12%</p>
              <p>• Risc CLABSI: 8%</p>
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
              <p>• <strong>Input:</strong> 25 parametri medicali</p>
              <p>• <strong>Hidden layers:</strong> Pattern recognition</p>
              <p>• <strong>LSTM:</strong> Secvențe temporale</p>
              <p>• <strong>Output:</strong> Probabilități IAAM</p>
            </div>
          </div>

          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Brain className="w-6 h-6 text-medical-green" />
              <h3 className="font-semibold">Algoritmi Utilizați</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Random Forest / XGBoost</p>
              <p>• Rețele neuronale profunde</p>
              <p>• Ensemble methods</p>
              <p>• SHAP pentru explicabilitate</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green">Procesul de Învățare</h2>
          
          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Target className="w-6 h-6 text-medical-orange" />
              <h3 className="font-semibold">Ce "Vede" Rețeaua</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-medical-blue rounded-full mt-1.5"></div>
                <div>
                  <strong>Strat 1:</strong> Tipare simple (febră + leucocite = inflamație)
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-medical-green rounded-full mt-1.5"></div>
                <div>
                  <strong>Strat 2:</strong> Combinații (sondă + E.coli + vârstă = risc specific)
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-medical-orange rounded-full mt-1.5"></div>
                <div>
                  <strong>Strat 3:</strong> Tipare complexe (interacțiuni între 10+ factori)
                </div>
              </div>
            </div>
          </div>

          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-6 h-6 text-medical-red" />
              <h3 className="font-semibold">Performanțe Țintă</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• <strong>Sensibilitate:</strong> 87.2% (CI 95%: 84.1-90.3)</p>
              <p>• <strong>Specificitate:</strong> 84.5% (CI 95%: 81.2-87.8)</p>
              <p>• <strong>AUC-ROC:</strong> 0.87 (validation set)</p>
              <p>• <strong>F1-Score:</strong> 0.86 (balanced accuracy)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Process */}
      <div className="bg-card rounded-2xl p-8 shadow-card">
        <h2 className="text-2xl font-bold text-center mb-6">Procesul de Antrenament</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-blue rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              1
            </div>
            <h4 className="font-semibold">Date Istorice</h4>
            <p className="text-sm text-muted-foreground">Colectare și curățare date medicale</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-green rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              2
            </div>
            <h4 className="font-semibold">Antrenament</h4>
            <p className="text-sm text-muted-foreground">Învățarea tiparelor din date</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-orange rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              3
            </div>
            <h4 className="font-semibold">Validare</h4>
            <p className="text-sm text-muted-foreground">Testare pe date noi</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-red rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              4
            </div>
            <h4 className="font-semibold">Deployment</h4>
            <p className="text-sm text-muted-foreground">Implementare clinică</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLModelSlide;