import { AlertTriangle, CheckCircle, Clock, TrendingUp, Shield, Target } from "lucide-react";

const ResultsSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Rezultate & Predicții
        </h1>
        <p className="text-xl text-muted-foreground">
          Output predictiv și recomandări clinice personalizate
        </p>
      </div>

      {/* Risk Assessment Display */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* CAUTI Risk - Based on CDC data */}
        <div className="medical-card rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-medical-red rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Risc CAUTI</h3>
                <p className="text-sm text-muted-foreground">Sondă urinară &gt;7 zile</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-medical-red">68%</div>
              <div className="text-sm text-muted-foreground">Risc ridicat</div>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-medical-red h-2 rounded-full" style={{width: '68%'}}></div>
          </div>
          <div className="text-xs text-muted-foreground">
            <p>Factori: E.coli (+), CRP 147 mg/L, vârstă 72 ani</p>
          </div>
        </div>

        {/* VAP Risk - Literature based */}
        <div className="medical-card rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-medical-orange rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Risc VAP</h3>
                <p className="text-sm text-muted-foreground">Ventilație mecanică 4 zile</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-medical-orange">34%</div>
              <div className="text-sm text-muted-foreground">Risc moderat</div>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-medical-orange h-2 rounded-full" style={{width: '34%'}}></div>
          </div>
          <div className="text-xs text-muted-foreground">
            <p>Factori: Intubare 4 zile, APACHE II: 18, sedare</p>
          </div>
        </div>

        {/* CLABSI Risk - CDC guidelines */}
        <div className="medical-card rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-medical-green rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Risc CLABSI</h3>
                <p className="text-sm text-muted-foreground">CVC subclavia 2 zile</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-medical-green">12%</div>
              <div className="text-sm text-muted-foreground">Risc scăzut</div>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-medical-green h-2 rounded-full" style={{width: '12%'}}></div>
          </div>
          <div className="text-xs text-muted-foreground">
            <p>Factori: Bundle compliance 95%, asepsie strictă</p>
          </div>
        </div>
      </div>

      {/* Risk Interpretation */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Interpretarea Scorurilor</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg">&lt;30%</h3>
            <p className="text-white/80">Monitorizare standard</p>
            <p className="text-sm text-white/60">Protocoale uzuale de prevenție</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg">30-60%</h3>
            <p className="text-white/80">Vigilență crescută</p>
            <p className="text-sm text-white/60">Măsuri preventive suplimentare</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg">&gt;60%</h3>
            <p className="text-white/80">Intervenție activă</p>
            <p className="text-sm text-white/60">Acțiune imediată necesară</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-blue">Recomandări Automate</h2>
          
          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Target className="w-6 h-6 text-medical-red" />
              <h3 className="font-semibold text-medical-red">Prioritate Înaltă - CAUTI</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-medical-red rounded-full mt-1.5"></div>
                <p>Evaluare urgentă pentru retragerea sondei urinare</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-medical-red rounded-full mt-1.5"></div>
                <p>Monitorizare zilnică a necesității sondei</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-medical-red rounded-full mt-1.5"></div>
                <p>Aplicarea protocolului de igienă strictă</p>
              </div>
            </div>
          </div>

          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-6 h-6 text-medical-orange" />
              <h3 className="font-semibold text-medical-orange">Monitorizare VAP</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-medical-orange rounded-full mt-1.5"></div>
                <p>Evaluare zilnică pentru extubație</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-medical-orange rounded-full mt-1.5"></div>
                <p>Bundle de prevenție VAP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green">Evoluție Probabilă</h2>
          
          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-medical-blue" />
              <h3 className="font-semibold">Predicții Temporale</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                <span className="font-medium">24 ore</span>
                <span className="text-medical-red font-bold">Risc CAUTI: 72%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                <span className="font-medium">48 ore</span>
                <span className="text-medical-red font-bold">Risc CAUTI: 78%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                <span className="font-medium">72 ore</span>
                <span className="text-medical-red font-bold">Risc CAUTI: 84%</span>
              </div>
            </div>
          </div>

          <div className="medical-card rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-medical-green" />
              <h3 className="font-semibold">Bacterie Probabilă</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span>E. coli</span>
                <span className="font-bold text-medical-orange">65%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Klebsiella</span>
                <span className="font-bold text-medical-blue">20%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Pseudomonas</span>
                <span className="font-bold text-medical-green">15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
          <div>
            <h3 className="font-bold text-yellow-800 mb-2">⚠️ Notă Importantă</h3>
            <p className="text-yellow-700">
              <strong>ML este SUPORT DECIZIONAL</strong> - Validarea clinică este obligatorie. 
              Sistemul oferă predicții bazate pe date istorice și tipare învățate, 
              dar decizia finală aparține întotdeauna echipei medicale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSlide;