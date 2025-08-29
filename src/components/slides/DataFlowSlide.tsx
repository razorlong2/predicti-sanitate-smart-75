import { ArrowDown, FileText, Database, Brain, BarChart3, TrendingUp, Target } from "lucide-react";

const DataFlowSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Pipeline de Procesare Date
        </h1>
        <p className="text-xl text-muted-foreground">
          Transformarea datelor medicale brute în predicții clinice precise
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
              <h3 className="text-xl font-semibold mb-2">Input - Date Medicale Brute</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="font-medium text-medical-blue">Documente scanate</p>
                  <p className="text-xs text-muted-foreground">PDF-uri analize, FOCG</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="font-medium text-medical-blue">Parametri biologici</p>
                  <p className="text-xs text-muted-foreground">CRP, leucocite, urocultură</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="font-medium text-medical-blue">Date clinice</p>
                  <p className="text-xs text-muted-foreground">Dispozitive, antibiotice</p>
                </div>
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
              <h3 className="text-xl font-semibold mb-2">Procesare OCR + NLP</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="font-medium text-medical-green">Tehnici OCR</p>
                  <p className="text-xs text-muted-foreground mb-2">Tesseract + CNN-RNN</p>
                  <div className="space-y-1 text-xs">
                    <p>• Acuratețe: 95.8% (Liu et al., 2023)</p>
                    <p>• F1-score: 0.94 (documente structurate)</p>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="font-medium text-medical-green">NLP Medical</p>
                  <p className="text-xs text-muted-foreground mb-2">Named Entity Recognition</p>
                  <div className="space-y-1 text-xs">
                    <p>• Conditional Random Fields</p>
                    <p>• Entități: 97.1% precizie</p>
                  </div>
                </div>
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
              <h3 className="text-xl font-semibold mb-2">Feature Engineering Medical</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="font-medium text-medical-orange">Transformări numerice</p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>• MinMax normalizare (0-1)</p>
                    <p>• Log transform (CRP, leucocite)</p>
                    <p>• Z-score standardizare</p>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="font-medium text-medical-orange">Features clinice</p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>• Scor Charlson (comorbidități)</p>
                    <p>• Zile cu dispozitiv invaziv</p>
                    <p>• APACHE II score</p>
                  </div>
                </div>
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
              <h3 className="text-xl font-semibold mb-2">Output Predictiv</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="font-medium text-medical-red">CAUTI</p>
                  <p className="text-xs text-muted-foreground">Infecție tract urinar</p>
                  <p className="text-xs font-bold">Risc: 0-100%</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="font-medium text-medical-red">VAP</p>
                  <p className="text-xs text-muted-foreground">Pneumonie asociată</p>
                  <p className="text-xs font-bold">Risc: 0-100%</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="font-medium text-medical-red">CLABSI</p>
                  <p className="text-xs text-muted-foreground">Infecție linie centrală</p>
                  <p className="text-xs font-bold">Risc: 0-100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Steps */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-blue">Intrare Date Brute</h2>
          
          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-medical-blue" />
              <h3 className="font-semibold">Exemplu Concret</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-muted/50 rounded p-3">
                <p className="font-mono">Vârstă: "68 ani"</p>
                <p className="font-mono">CRP: "120 mg/L"</p>
                <p className="font-mono">Sondă: "DA, 5 zile"</p>
                <p className="font-mono">Bacterie: "E.coli 10⁵"</p>
              </div>
            </div>
          </div>

          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Database className="w-6 h-6 text-medical-green" />
              <h3 className="font-semibold">Tehnologii OCR</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• CNN-RNN pentru recunoașerea textului</p>
              <p>• LSTM pentru contextul medical</p>
              <p>• Acuratețe 78.84% - 95.8%</p>
              <p>• Tesseract + Vision API</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green">Date Procesate</h2>
          
          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-6 h-6 text-medical-orange" />
              <h3 className="font-semibold">Output Structurat</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-muted/50 rounded p-3">
                <p className="font-mono">age_normalized: 0.68</p>
                <p className="font-mono">crp_log: 4.78</p>
                <p className="font-mono">catheter_days: 5</p>
                <p className="font-mono">ecoli_flag: 1</p>
              </div>
            </div>
          </div>

          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Brain className="w-6 h-6 text-medical-red" />
              <h3 className="font-semibold">Feature Engineering</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Normalizare numerică (0-1 scaling)</p>
              <p>• Log transform pentru valori extreme</p>
              <p>• Codificare categorică (one-hot)</p>
              <p>• Scoruri de risc combinate</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DataFlowSlide;