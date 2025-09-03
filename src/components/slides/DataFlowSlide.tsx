import { ArrowDown, FileText, Database, Brain, BarChart3, TrendingUp, Target } from "lucide-react";

const DataFlowSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Etapele analizei datelor IAAM
        </h1>
        <p className="text-xl text-muted-foreground">
          Transformarea documentației medicale în parametri predictivi
        </p>
      </div>

      {/* Horizontal Flow Diagram */}
      <div className="relative bg-card rounded-3xl p-8 shadow-card">
        <h2 className="text-2xl font-bold text-center mb-8 text-medical-blue">Procesul de analiză</h2>
        
        {/* Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Stage 1: Input Data */}
          <div className="relative animate-fade-in">
            <div className="medical-card rounded-2xl p-6 text-center space-y-4 h-full hover-scale">
              <div className="w-16 h-16 bg-medical-blue rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold">Date din foaia de observație</h3>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>• Fișa pacientului</p>
                <p>• Analize de laborator</p>
                <p>• Examene microbiologice</p>
                <p>• Istoric medical</p>
              </div>
            </div>
            <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowDown className="w-6 h-6 text-medical-blue rotate-90" />
            </div>
          </div>

          {/* Stage 2: OCR Processing */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="medical-card rounded-2xl p-6 text-center space-y-4 h-full hover-scale">
              <div className="w-16 h-16 bg-medical-green rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold">Analiză automată</h3>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>• Citire documente</p>
                <p>• Înțelegere terminologie</p>
                <p>• Clasificare CIM-10</p>
                <p>• Extragere informații</p>
              </div>
            </div>
            <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowDown className="w-6 h-6 text-medical-green rotate-90" />
            </div>
          </div>

          {/* Stage 3: Feature Engineering */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="medical-card rounded-2xl p-6 text-center space-y-4 h-full hover-scale">
              <div className="w-16 h-16 bg-medical-orange rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold">Identificare factori de risc</h3>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>• Calculare risc infecție</p>
                <p>• Scoruri prognostice</p>
                <p>• Analiză în timp</p>
                <p>• Respectă ghiduri INSP</p>
              </div>
            </div>
            <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowDown className="w-6 h-6 text-medical-orange rotate-90" />
            </div>
          </div>

          {/* Stage 4: ML Output */}
          <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="medical-card rounded-2xl p-6 text-center space-y-4 h-full hover-scale">
              <div className="w-16 h-16 bg-medical-red rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold">Rezultate finale</h3>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>• Profil risc pacient</p>
                <p>• Categorie risc</p>
                <p>• Plan monitorizare</p>
                <p>• Recomandări</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-4">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">3/4</span>
      </div>

    </div>
  );
};

export default DataFlowSlide;