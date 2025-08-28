import { GitBranch, Brain, CheckCircle2, AlertTriangle, TrendingUp, Settings } from "lucide-react";

const DecisionProcessSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Arhitectura Decizională și Transparența Algoritmică
        </h1>
        <p className="text-xl text-muted-foreground">
          Fluxul decizional integrat cu validare medicală obligatorie
        </p>
      </div>

      {/* Decision Flow */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Fluxul Decizional</h2>
        <div className="flex items-center justify-between">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
              <Settings className="w-8 h-8" />
            </div>
            <h4 className="font-semibold">INPUT</h4>
            <p className="text-sm text-white/80">Parametri clinici</p>
          </div>
          
          <div className="flex-1 h-0.5 bg-white/30 mx-4"></div>
          
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
              <Brain className="w-8 h-8" />
            </div>
            <h4 className="font-semibold">PROCESARE</h4>
            <p className="text-sm text-white/80">ML inference</p>
          </div>
          
          <div className="flex-1 h-0.5 bg-white/30 mx-4"></div>
          
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-semibold">VALIDARE</h4>
            <p className="text-sm text-white/80">Criterii medicale</p>
          </div>
          
          <div className="flex-1 h-0.5 bg-white/30 mx-4"></div>
          
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h4 className="font-semibold">OUTPUT</h4>
            <p className="text-sm text-white/80">Stratificare + recomandări</p>
          </div>
        </div>
      </div>

      {/* Decision Components */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-blue">Componentele Decizionale</h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-medical-blue rounded-full"></div>
                <h4 className="font-semibold">Modulul de Risk Scoring</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Calcularea probabilității prin algoritmi ML cu calibrare clinică
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-medical-green rounded-full"></div>
                <h4 className="font-semibold">Modulul de Validare Medicală</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Verificarea consistenței cu ghidurile clinice naționale și internaționale
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-medical-orange rounded-full"></div>
                <h4 className="font-semibold">Modulul de Personalizare</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Adaptarea la contextul individual al pacientului și instituției
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-medical-red rounded-full"></div>
                <h4 className="font-semibold">Modulul de Explicabilitate</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Generarea ratiunii deciziei prin SHAP values și interpretare clinică
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green">Exemplu de Procesare</h2>
          
          <div className="bg-card rounded-xl p-6 space-y-4">
            <div className="border-l-4 border-medical-blue pl-4">
              <h4 className="font-semibold text-medical-blue">Profilul Pacientului</h4>
              <p className="text-sm text-muted-foreground">
                Bărbat 67 ani, diabet tip 2, CVC 4 zile, CRP 45 mg/L
              </p>
            </div>
            
            <div className="border-l-4 border-medical-green pl-4">
              <h4 className="font-semibold text-medical-green">Analiza ML</h4>
              <p className="text-sm text-muted-foreground">
                Risk score: 0.68 (68% probabilitate CLABSI)
              </p>
            </div>
            
            <div className="border-l-4 border-medical-orange pl-4">
              <h4 className="font-semibold text-medical-orange">Stratificarea</h4>
              <p className="text-sm text-muted-foreground">
                Categorie: risc moderat-crescut (0.5-0.8)
              </p>
            </div>
            
            <div className="border-l-4 border-medical-red pl-4">
              <h4 className="font-semibold text-medical-red">Recomandarea</h4>
              <p className="text-sm text-muted-foreground">
                Bundle CLABSI + monitorizare zilnică CRP
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Algorithmic Transparency */}
      <div className="bg-card rounded-2xl p-8 shadow-card">
        <h2 className="text-2xl font-bold text-center mb-6">Transparența Algoritmică</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <GitBranch className="w-12 h-12 text-medical-blue mx-auto" />
            <h3 className="font-bold">SHAP Explainability</h3>
            <p className="text-sm text-muted-foreground">
              Contribuția fiecărui parametru la decizia finală cu scoruri cantitative
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <AlertTriangle className="w-12 h-12 text-medical-orange mx-auto" />
            <h3 className="font-bold">Validare Medicală</h3>
            <p className="text-sm text-muted-foreground">
              Toate recomandările necesită confirmarea unui clinician calificat
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-medical-green mx-auto" />
            <h3 className="font-bold">Audit Trail</h3>
            <p className="text-sm text-muted-foreground">
              Înregistrarea completă a procesului decizional pentru transparență
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="medical-card rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Brain className="w-5 h-5 mr-2 text-medical-blue" />
          Caracteristici Cheie ale Sistemului
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <p><strong>Timp de răspuns:</strong> &lt;5 secunde pentru analiza completă</p>
            <p><strong>Disponibilitate:</strong> 24/7 cu redundanță și backup</p>
            <p><strong>Actualizare:</strong> Reantrenare lunară cu date noi</p>
          </div>
          <div className="space-y-2">
            <p><strong>Interfață:</strong> Integrare în sistemele HIS existente</p>
            <p><strong>Scalabilitate:</strong> Suport pentru multiple centre</p>
            <p><strong>Securitate:</strong> Criptare end-to-end a datelor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionProcessSlide;