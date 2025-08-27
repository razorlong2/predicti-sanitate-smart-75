import { Database, FileText, Brain, Monitor, ArrowRight, TrendingUp, Target, Activity } from "lucide-react";

const ArchitectureSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Arhitectura Completă a Sistemului
        </h1>
        <p className="text-xl text-muted-foreground">
          Pipeline integrat pentru predicția IAAM cu tehnologii AI avansate
        </p>
      </div>

      {/* Architecture Flow - Academic Style */}
      <div className="relative">
        {/* Main Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Step 1: Data Collection */}
          <div className="relative">
            <div className="medical-card rounded-2xl p-6 text-center space-y-4 h-full">
              <div className="w-20 h-20 bg-medical-blue rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-lg">Colectarea Datelor</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="bg-muted/30 rounded-lg p-2">
                  <FileText className="w-4 h-4 mx-auto mb-1 text-medical-blue" />
                  <p className="font-medium">Documente medicale</p>
                </div>
                <div className="text-xs space-y-1">
                  <p>• Foaia de observație (FOCG)</p>
                  <p>• Buletine analize (PDF)</p>
                  <p>• Fișe temperatură</p>
                  <p>• Rapoarte microbiologie</p>
                </div>
              </div>
            </div>
            {/* Elegant Arrow */}
            <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-medical-blue to-medical-green"></div>
                <div className="w-3 h-3 bg-medical-green rotate-45 transform -ml-1.5 border-r border-b border-medical-green"></div>
              </div>
            </div>
          </div>

          {/* Step 2: OCR + NLP Processing */}
          <div className="relative">
            <div className="medical-card rounded-2xl p-6 text-center space-y-4 h-full">
              <div className="w-20 h-20 bg-medical-green rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Monitor className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-lg">Procesare AI</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="bg-muted/30 rounded-lg p-2">
                  <Brain className="w-4 h-4 mx-auto mb-1 text-medical-green" />
                  <p className="font-medium">OCR + NLP</p>
                </div>
                <div className="text-xs space-y-1">
                  <p>• Tesseract OCR (95,8% acuratețe)</p>
                  <p>• Named Entity Recognition</p>
                  <p>• Terminologie medicală RO</p>
                  <p>• Extracție valori critice</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-medical-green to-medical-orange"></div>
                <div className="w-3 h-3 bg-medical-orange rotate-45 transform -ml-1.5 border-r border-b border-medical-orange"></div>
              </div>
            </div>
          </div>

          {/* Step 3: Feature Engineering */}
          <div className="relative">
            <div className="medical-card rounded-2xl p-6 text-center space-y-4 h-full">
              <div className="w-20 h-20 bg-medical-orange rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-lg">Preprocesare</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="bg-muted/30 rounded-lg p-2">
                  <TrendingUp className="w-4 h-4 mx-auto mb-1 text-medical-orange" />
                  <p className="font-medium">Feature Engineering</p>
                </div>
                <div className="text-xs space-y-1">
                  <p>• Normalizare (MinMax 0-1)</p>
                  <p>• Log transform (valori extreme)</p>
                  <p>• Codificare categorică</p>
                  <p>• Scoruri composite (Charlson)</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-medical-orange to-medical-red"></div>
                <div className="w-3 h-3 bg-medical-red rotate-45 transform -ml-1.5 border-r border-b border-medical-red"></div>
              </div>
            </div>
          </div>

          {/* Step 4: ML Prediction */}
          <div className="relative">
            <div className="medical-card rounded-2xl p-6 text-center space-y-4 h-full">
              <div className="w-20 h-20 bg-medical-red rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-lg">Predicție ML</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="bg-muted/30 rounded-lg p-2">
                  <Activity className="w-4 h-4 mx-auto mb-1 text-medical-red" />
                  <p className="font-medium">Random Forest + LSTM</p>
                </div>
                <div className="text-xs space-y-1">
                  <p>• 23 features clinice</p>
                  <p>• AUROC: 0.87 (CI 95%)</p>
                  <p>• Sensibilitate: 87.2%</p>
                  <p>• Specificitate: 84.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Components */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-blue">Surse de Date</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-medical-blue rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">PDF-uri analize medicale</h4>
                <p className="text-sm text-muted-foreground">Hemoleucogramă, urocultură, antibiogramă</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-medical-blue rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">Fișe observație clinică</h4>
                <p className="text-sm text-muted-foreground">Simptome, proceduri invazive, medicamente</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-medical-blue rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">Parametri inflamatori</h4>
                <p className="text-sm text-muted-foreground">CRP, leucocite, temperatura</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green">Tehnologii Avansate</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-medical-green rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">OCR cu AI îmbunătățit</h4>
                <p className="text-sm text-muted-foreground">CNN-RNN cu LSTM pentru context</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-medical-green rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">NLP pentru medicină</h4>
                <p className="text-sm text-muted-foreground">Named Entity Recognition cu CRF</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-medical-green rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">Rețea neuronală hibridă</h4>
                <p className="text-sm text-muted-foreground">Pattern recognition + analiză temporală</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureSlide;