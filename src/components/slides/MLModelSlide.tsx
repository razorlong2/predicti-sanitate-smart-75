import { Database, Brain, Target, TrendingUp, Activity, Layers } from "lucide-react";

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

      {/* Neural Network Architecture */}
      <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Arhitectura Modelului</h2>
          <p className="text-muted-foreground">
            Input Layer → Hidden 1 → Hidden 2 → Hidden 3 → Output
          </p>
        </div>

        <div className="grid grid-cols-5 gap-4 items-center mb-8">
          {/* Input Layer */}
          <div className="text-center">
            <div className="bg-medical-blue rounded-xl p-4 mb-3">
              <Database className="w-6 h-6 text-white mx-auto" />
            </div>
            <h4 className="font-semibold text-sm mb-2">Parametri clinici</h4>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• Temperatură</p>
              <p>• Leucocite</p>
              <p>• CRP, PCT</p>
              <p>• Zile cateter</p>
              <p>• Vârstă, sex</p>
              <p>• Comorbidități</p>
            </div>
          </div>

          {/* Hidden Layer 1 */}
          <div className="text-center">
            <div className="bg-medical-green rounded-xl p-4 mb-3">
              <Brain className="w-6 h-6 text-white mx-auto" />
            </div>
            <h4 className="font-semibold text-sm">Procesare</h4>
            <h4 className="font-semibold text-sm mb-1">primară</h4>
            <p className="text-xs text-muted-foreground">32 neuroni</p>
          </div>

          {/* Hidden Layer 2 */}
          <div className="text-center">
            <div className="bg-medical-green rounded-xl p-4 mb-3">
              <Activity className="w-6 h-6 text-white mx-auto" />
            </div>
            <h4 className="font-semibold text-sm">Procesare</h4>
            <h4 className="font-semibold text-sm mb-1">secundară</h4>
            <p className="text-xs text-muted-foreground">24 neuroni</p>
          </div>

          {/* Hidden Layer 3 */}
          <div className="text-center">
            <div className="bg-medical-orange rounded-xl p-4 mb-3">
              <TrendingUp className="w-6 h-6 text-white mx-auto" />
            </div>
            <h4 className="font-semibold text-sm">Rafinare</h4>
            <h4 className="font-semibold text-sm mb-1">finală</h4>
            <p className="text-xs text-muted-foreground">16 neuroni</p>
          </div>

          {/* Output Layer */}
          <div className="text-center">
            <div className="bg-medical-red rounded-xl p-4 mb-3">
              <Target className="w-6 h-6 text-white mx-auto" />
            </div>
            <h4 className="font-semibold text-sm mb-2">Clasificare risc IAAM</h4>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• Scăzut</p>
              <p>• Moderat</p>
              <p>• Crescut</p>
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
        <span className="bg-secondary/20 px-3 py-1 rounded-full">6/6</span>
      </div>

    </div>
  );
};

export default MLModelSlide;