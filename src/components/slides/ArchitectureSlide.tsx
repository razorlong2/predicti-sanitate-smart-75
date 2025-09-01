import { Database, ArrowRight, Activity, Brain, Monitor, Target } from "lucide-react";

const ArchitectureSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Arhitectura Sistemului Predictiv pentru IAAM
        </h1>
        <p className="text-xl text-muted-foreground">
          Fluxul de Analiză Clinică
        </p>
      </div>

      {/* Architecture Flow */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {/* Step 1: Data Collection */}
          <div className="relative">
            <div className="medical-card rounded-2xl p-6 text-center space-y-4 h-full">
              <div className="w-16 h-16 bg-medical-blue rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">Colectarea Datelor</h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>• Fișa de observație clinică generală (FOCG)</p>
                <p>• Rezultate investigații paraclinice</p>
                <p>• Examene microbiologice</p>
                <p>• Parametri demografici și comorbidități</p>
                <p>• Istoricul dispozitivelor medicale invazive</p>
              </div>
            </div>
            <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-6 h-6 text-medical-blue" />
            </div>
          </div>

          {/* Step 2: Preprocessing */}
          <div className="relative">
            <div className="medical-card rounded-2xl p-6 text-center space-y-4 h-full">
              <div className="w-16 h-16 bg-medical-green rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">Preprocesare</h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>• OCR adaptat documentelor medicale (&gt;95% acuratețe)</p>
                <p>• NLP pentru terminologia clinică română</p>
                <p>• Recunoașterea entităților medicale (ICD-10)</p>
                <p>• Extracția parametrilor clinici relevanți</p>
              </div>
            </div>
            <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-6 h-6 text-medical-green" />
            </div>
          </div>

          {/* Step 3: Processing */}
          <div className="relative">
            <div className="medical-card rounded-2xl p-6 text-center space-y-4 h-full">
              <div className="w-16 h-16 bg-medical-orange rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">Procesare</h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>• Standardizarea conform ghidurilor medicale internaționale</p>
                <p>• Codificarea variabilelor categorice în format numeric</p>
                <p>• Pregătirea setului de date pentru modelarea predictivă</p>
              </div>
            </div>
            <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-6 h-6 text-medical-orange" />
            </div>
          </div>

          {/* Step 4: ML Prediction */}
          <div className="relative">
            <div className="medical-card rounded-2xl p-6 text-center space-y-4 h-full">
              <div className="w-16 h-16 bg-medical-red rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">Predicție ML</h3>
              <p className="text-xs text-muted-foreground/80 mb-3 italic">Algoritm care învață din date medicale</p>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>• Rețea neuronală cu 3 straturi ascunse</p>
                <p>• Învață din patterns-urile clinice complexe</p>
                <p>• Procesează 25 de parametri medicali simultan</p>
                <p>• Performanță: Găsește 92% din infecții reale</p>
                <p>• Discriminare clinică foarte bună (AUROC &gt;0.87)</p>
              </div>
            </div>
            <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-6 h-6 text-medical-red" />
            </div>
          </div>

          {/* Step 5: Output */}
          <div className="relative">
            <div className="medical-card rounded-2xl p-6 text-center space-y-4 h-full">
              <div className="w-16 h-16 bg-medical-blue rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">Output</h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>• Risc IAAM (%)</p>
                <p>• Tipuri probabile IAAM</p>
                <p>• Măsuri preventive</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conformity Section */}
      <div className="bg-gradient-medical rounded-2xl p-6 text-white text-center">
        <h2 className="text-xl font-bold mb-4">Conformitate</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-lg font-semibold">Criterii CDC/NHSN</div>
            <div className="text-sm text-white/80">Definițiile standardizate</div>
          </div>
          <div>
            <div className="text-lg font-semibold">Ghiduri ECDC</div>
            <div className="text-sm text-white/80">Protocoale europene</div>
          </div>
          <div>
            <div className="text-lg font-semibold">Normele INSP România</div>
            <div className="text-sm text-white/80">Respectă ghidurile naționale</div>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-8">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">2/4</span>
      </div>
    </div>
  );
};

export default ArchitectureSlide;