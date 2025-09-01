import { ArrowDown, FileText, Database, Brain, BarChart3, TrendingUp, Target } from "lucide-react";

const DataFlowSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Flux clinico-epidemiologic pentru analiza datelor IAAM
        </h1>
        <p className="text-xl text-muted-foreground">
          Transformarea documentației medicale în parametri predictivi validați
        </p>
      </div>

      {/* Academic Flow Diagram */}
      <div className="relative bg-card rounded-3xl p-8 shadow-card">
        <h2 className="text-2xl font-bold text-center mb-8 text-medical-blue">Pipeline Academic de Procesare</h2>
        
        {/* Vertical Flow */}
        <div className="space-y-8">
          
          {/* Stage 1: Input Data */}
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-medical-blue rounded-2xl flex items-center justify-center shadow-lg">
              <FileText className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">INPUT - DOCUMENTAȚIA CLINICĂ</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Fișa observație (FOCG) + anexe medicale</p>
                <p>• Rezultate laborator: hemoleucogramă, biochimie, gaze sangvine</p>
                <p>• Microbiologie: culturi, antibiograme, markeri infecție</p>
                <p>• Scoruri validate: Charlson, APACHE II, SOFA</p>
                <p>• Istoric: zile cateter, zile ventilație, proceduri invazive</p>
              </div>
            </div>
          </div>

          {/* Academic Flow Arrow */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-medical-blue to-medical-green"></div>
              <div className="w-4 h-4 bg-medical-green rotate-45 transform border-r border-b border-medical-green"></div>
            </div>
          </div>

          {/* Stage 2: OCR Processing */}
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-medical-green rounded-2xl flex items-center justify-center shadow-lg">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">ANALIZĂ AUTOMATĂ</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Citire automată a documentelor medicale românești</p>
                <p>• Înțelege terminologia medicală locală și latină</p>
                <p>• Clasificare automată conform CIM-10</p>
                <p>• Extrage informații relevante pentru diagnostic</p>
                <p>• Verificare cu precizie peste 95%</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-medical-green to-medical-orange"></div>
              <div className="w-4 h-4 bg-medical-orange rotate-45 transform border-r border-b border-medical-orange"></div>
            </div>
          </div>

          {/* Stage 3: Feature Engineering */}
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-medical-orange rounded-2xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">IDENTIFICARE FACTORI DE RISC</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Calculează riscul de infecție pentru fiecare pacient</p>
                <p>• Scoruri de prognostic pe baza datelor clinice</p>
                <p>• Respectă ghidurile medicale internaționale</p>
                <p>• Analiză în timp: Evoluție CRP 12→45→120 mg/L</p>
                <p>• Urmărește tendința pe 72 ore pentru fiecare parametru</p>
                <p>• Conformitate cu protocoalele de supraveghere INSP și ghidurile CDC/ECDC</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-medical-orange to-medical-red"></div>
              <div className="w-4 h-4 bg-medical-red rotate-45 transform border-r border-b border-medical-red"></div>
            </div>
          </div>

          {/* Stage 4: ML Output */}
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-medical-red rounded-2xl flex items-center justify-center shadow-lg">
              <Target className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">OUTPUT STRUCTURAT</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Profil risc personalizat pacient</p>
                <p>• Categorie: scăzut/moderat/crescut cu procent exact</p>
                <p>• Plan monitorizare: evaluări la 24h, 48h, 72h</p>
                <p>• Recomandări specifice departamentului</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground bg-secondary/30 rounded-lg p-4 mt-8">
        Model în dezvoltare doctorală | Date pilot: 500 cazuri | Validare clinică: Q1 2025
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-4">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">3/4</span>
      </div>

    </div>
  );
};

export default DataFlowSlide;