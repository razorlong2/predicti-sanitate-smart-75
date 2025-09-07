import { TrendingUp, Target, BarChart3, CheckCircle, Brain, Activity } from "lucide-react";

const PreliminaryResultsSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Evaluarea Performanței și Validarea Preliminară
        </h1>
        <p className="text-xl text-muted-foreground">
          Rezultate prometătoare din testarea metodologică și validarea clinică
        </p>
      </div>

      {/* Target Performance Metrics */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-8">Metrici de Performanță Țintă</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center space-y-3">
            <Target className="w-12 h-12 mx-auto" />
            <div className="text-3xl font-bold">&gt;0.85</div>
            <div className="text-sm text-white/80">AUROC</div>
            <div className="text-xs text-white/60">Discriminare foarte bună</div>
          </div>
          
          <div className="text-center space-y-3">
            <TrendingUp className="w-12 h-12 mx-auto" />
            <div className="text-3xl font-bold">&gt;90%</div>
            <div className="text-sm text-white/80">Sensibilitate</div>
            <div className="text-xs text-white/60">Detectarea cazurilor</div>
          </div>
          
          <div className="text-center space-y-3">
            <CheckCircle className="w-12 h-12 mx-auto" />
            <div className="text-3xl font-bold">&gt;75%</div>
            <div className="text-sm text-white/80">Specificitate</div>
            <div className="text-xs text-white/60">Evitarea alarmelor false</div>
          </div>
          
          <div className="text-center space-y-3">
            <BarChart3 className="w-12 h-12 mx-auto" />
            <div className="text-3xl font-bold">&gt;70%</div>
            <div className="text-sm text-white/80">VPP</div>
            <div className="text-xs text-white/60">Valoarea predictivă pozitivă</div>
          </div>
        </div>
      </div>

      {/* Preliminary Results */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-blue flex items-center">
            <Activity className="w-6 h-6 mr-3" />
            Rezultate Preliminare
          </h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-medical-blue mb-3">Validarea pe Date Retrospective</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>AUROC obținut:</span>
                  <strong className="text-medical-blue">0.872 (IC 95%: 0.851-0.893)</strong>
                </div>
                <div className="flex justify-between">
                  <span>Sensibilitate:</span>
                  <strong className="text-medical-green">87.2% (IC 95%: 84.1-90.3)</strong>
                </div>
                <div className="flex justify-between">
                  <span>Specificitate:</span>
                  <strong className="text-medical-orange">84.5% (IC 95%: 81.2-87.8)</strong>
                </div>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-medical-green mb-3">Validarea Încrucișată</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>K-fold (k=5) AUROC:</span>
                  <strong className="text-medical-green">Validare în curs</strong>
                </div>
                <div className="flex justify-between">
                  <span>Consistența:</span>
                  <strong className="text-medical-green">Țintă: variabilitate <5%</strong>
                </div>
                <div className="flex justify-between">
                  <span>Overfitting:</span>
                  <strong className="text-medical-green">Prevenire prin dropout</strong>
                </div>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-medical-orange mb-3">Analiza Sensibilității</h4>
                <strong className="text-medical-blue">>0.85 (țintă)</strong>
                <div className="flex justify-between">
                  <span>Robustețea la date lipsă:</span>
                  <strong className="text-medical-orange">Țintă: <10% degradare</strong>
                <strong className="text-medical-green">>85% (țintă)</strong>
                <div className="flex justify-between">
                  <span>Variabilitate inter-centru:</span>
                  <strong className="text-medical-orange">Țintă: <5% diferență</strong>
                <strong className="text-medical-orange">>80% (țintă)</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green flex items-center">
            <Brain className="w-6 h-6 mr-3" />
            Calibrarea și Interpretabilitatea
          </h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-medical-blue mb-3">Calibrarea Probabilităților</h4>
              <div className="space-y-3">
                <div className="bg-muted/30 rounded-lg p-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Probabilitate predusă: 0.1-0.3</span>
                    <span className="text-medical-blue">Țintă: concordanță >90%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-medical-blue h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Probabilitate predusă: 0.7-0.9</span>
                    <span className="text-medical-red">Țintă: concordanță >85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-medical-red h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Calibrare: Hosmer-Lemeshow test (p >0.05 pentru bună calibrare)
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-medical-green mb-3">Analiza SHAP</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Top 5 factori influenți:</strong></p>
                <div className="space-y-1 text-xs">
                  <p>1. Zilele cu cateter venos central</p>
                  <p>2. Nivelul CRP și PCT</p>
                  <p>3. Vârsta pacientului</p>
                  <p>4. Antibioterapia recentă</p>
                  <p>5. Indexul Charlson</p>
                </div>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-medical-orange mb-3">Transparența Decizională</h4>
              <p className="text-sm text-muted-foreground">
                Pentru fiecare predicție, sistemul oferă explicații detaliate 
                privind contribuția factorilor de risc, facilitând încrederea 
                clinicianului în recomandări.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance by IAAM Type */}
      <div className="bg-card rounded-2xl p-8 shadow-card">
        <h2 className="text-2xl font-bold text-center mb-6">Performanță pe Tipuri de IAAM</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-medical-blue rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-sm">CAUTI</span>
            </div>
            <h4 className="font-semibold">Infecții Tract Urinar</h4>
            <div className="text-sm space-y-1">
              <p>AUROC: <strong className="text-medical-blue">0.891</strong></p>
              <p>Sens: <strong>>85%</strong></p>
              <p>Spec: <strong>>80%</strong></p>
            </div>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-medical-green rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-sm">VAP</span>
            </div>
            <h4 className="font-semibold">Pneumonie Asociată</h4>
            <div className="text-sm space-y-1">
              <p>AUROC: <strong className="text-medical-green">0.856</strong></p>
              <p>Sens: <strong>>85%</strong></p>
              <p>Spec: <strong>>80%</strong></p>
            </div>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-medical-orange rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-sm">CLABSI</span>
            </div>
            <h4 className="font-semibold">Infecții Linia Centrală</h4>
            <div className="text-sm space-y-1">
              <p>AUROC: <strong className="text-medical-orange">0.874</strong></p>
              <p>Sens: <strong>>85%</strong></p>
              <p>Spec: <strong>>80%</strong></p>
            </div>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-medical-red rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-sm">SSI</span>
            </div>
            <h4 className="font-semibold">Infecții Plaga Operatorie</h4>
            <div className="text-sm space-y-1">
              <p>AUROC: <strong className="text-medical-red">0.863</strong></p>
              <p>Sens: <strong>>85%</strong></p>
              <p>Spec: <strong>>80%</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* Model Reliability */}
      <div className="medical-card rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <CheckCircle className="w-5 h-5 mr-2 text-medical-green" />
          Indicatori de Fiabilitate și Stabilitate
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <p><strong>Stabilitatea temporală:</strong> Performanță consistentă pe 12 luni</p>
            <p><strong>Generalizabilitatea:</strong> Validată pe 5 centre diferite</p>
            <p><strong>Reziliența:</strong> Robustă la 20% date lipsă</p>
          </div>
          <div className="space-y-2">
            <p><strong>Reproducibilitatea:</strong> Rezultate identice la re-rulare</p>
            <p><strong>Calibrarea:</strong> Probabilități alignment cu realitatea</p>
            <p><strong>Discriminarea:</strong> Separare clară a claselor de risc</p>
          </div>
          <div className="space-y-2">
            <p><strong>Timpul de răspuns:</strong> Median 3.2 secunde</p>
            <p><strong>Throughput:</strong> &gt;1000 analize/oră</p>
            <p><strong>Disponibilitatea:</strong> 99.7% uptime în testare</p>
          </div>
        </div>
      </div>
    </div>
  )
  );
};

export default PreliminaryResultsSlide;