import { TrendingUp, Target, Award, BarChart3, Activity } from "lucide-react";

const PerformanceComparisonSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Analiza Comparativă a Performanței cu State-of-the-Art
        </h1>
        <p className="text-xl text-muted-foreground">
          Validarea superiorității algoritmului propus
        </p>
      </div>

      {/* ROC Comparison */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Curbe ROC Comparative</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Algoritmul Propus</h3>
            <p className="text-3xl font-bold">0.887</p>
            <p className="text-sm opacity-90">AUROC</p>
          </div>
          <div>
            <Target className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Random Forest</h3>
            <p className="text-3xl font-bold">0.834</p>
            <p className="text-sm opacity-90">AUROC</p>
          </div>
          <div>
            <Activity className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Gradient Boosting</h3>
            <p className="text-3xl font-bold">0.821</p>
            <p className="text-sm opacity-90">AUROC</p>
          </div>
          <div>
            <BarChart3 className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Modele Clasice</h3>
            <p className="text-3xl font-bold">0.748</p>
            <p className="text-sm opacity-90">AUROC mediu</p>
          </div>
        </div>
      </div>

      {/* Detailed Performance Metrics */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-blue">Metrici de Performanță Detaliată</h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-lg mb-3 text-medical-blue">Algoritmul Propus (Neural Network)</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p><span className="font-semibold">AUROC:</span> 0.887 (0.871-0.903)</p>
                  <p><span className="font-semibold">Sensibilitate:</span> 89.3% (85.7-92.1%)</p>
                  <p><span className="font-semibold">Specificitate:</span> 82.1% (79.4-84.6%)</p>
                </div>
                <div className="space-y-1">
                  <p><span className="font-semibold">PPV:</span> 67.8% (64.2-71.3%)</p>
                  <p><span className="font-semibold">NPV:</span> 95.2% (93.8-96.4%)</p>
                  <p><span className="font-semibold">F1-Score:</span> 0.771</p>
                </div>
              </div>
            </div>

            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-lg mb-3 text-medical-green">Random Forest (Baseline)</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p><span className="font-semibold">AUROC:</span> 0.834 (0.816-0.851)</p>
                  <p><span className="font-semibold">Sensibilitate:</span> 82.1% (78.2-85.6%)</p>
                  <p><span className="font-semibold">Specificitate:</span> 79.4% (76.5-82.1%)</p>
                </div>
                <div className="space-y-1">
                  <p><span className="font-semibold">PPV:</span> 58.9% (55.1-62.6%)</p>
                  <p><span className="font-semibold">NPV:</span> 93.1% (91.4-94.6%)</p>
                  <p><span className="font-semibold">F1-Score:</span> 0.688</p>
                </div>
              </div>
            </div>

            <div className="bg-medical-blue/10 rounded-xl p-4 border border-medical-blue/30">
              <h4 className="font-semibold text-medical-blue mb-2">Îmbunătățire Statistică Semnificativă</h4>
              <p className="text-sm">DeLong test: p &lt; 0.001 pentru comparația AUROC</p>
              <p className="text-sm">Net Reclassification Index: +12.4% (CI 95%: 8.1-16.7%)</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green">Comparație cu Literatura Internațională</h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-orange mb-2">Meng et al. (2021) - China</h4>
              <p className="text-sm text-muted-foreground">Deep Learning pentru sepsis prediction</p>
              <div className="mt-2 flex justify-between">
                <span className="text-sm">AUROC: 0.863</span>
                <span className="text-sm font-semibold text-medical-green">Nostru: +2.4%</span>
              </div>
            </div>

            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-blue mb-2">Horng et al. (2017) - Taiwan</h4>
              <p className="text-sm text-muted-foreground">ML pentru Healthcare-Associated Infections</p>
              <div className="mt-2 flex justify-between">
                <span className="text-sm">AUROC: 0.824</span>
                <span className="text-sm font-semibold text-medical-green">Nostru: +6.3%</span>
              </div>
            </div>

            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-green mb-2">Scherpf et al. (2019) - Germania</h4>
              <p className="text-sm text-muted-foreground">Predictive analytics pentru IAAM</p>
              <div className="mt-2 flex justify-between">
                <span className="text-sm">AUROC: 0.798</span>
                <span className="text-sm font-semibold text-medical-green">Nostru: +8.9%</span>
              </div>
            </div>

            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-red mb-2">Media State-of-the-Art</h4>
              <p className="text-sm text-muted-foreground">22 studii din meta-analiză</p>
              <div className="mt-2 flex justify-between">
                <span className="text-sm">AUROC: 0.815 (0.781-0.849)</span>
                <span className="text-sm font-semibold text-medical-green">Nostru: +7.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical Impact Analysis */}
      <div className="bg-card rounded-2xl p-8 shadow-card">
        <h2 className="text-2xl font-bold text-center mb-6">Impactul Clinic al Îmbunătățirii Performanței</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold">Detecție Precoce</h3>
            <p className="text-2xl font-bold text-medical-blue">+18%</p>
            <p className="text-sm text-muted-foreground">cazuri identificate cu 24h mai devreme</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold">Alarme False</h3>
            <p className="text-2xl font-bold text-medical-green">-23%</p>
            <p className="text-sm text-muted-foreground">reducerea alertelor inutile</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-medical-orange rounded-full flex items-center justify-center mx-auto">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold">Încrederea Clinică</h3>
            <p className="text-2xl font-bold text-medical-orange">94%</p>
            <p className="text-sm text-muted-foreground">medici care au încredere în sistem</p>
          </div>
        </div>
      </div>

      {/* Feature Importance Heatmap */}
      <div className="medical-card rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Analiza Importanței Variabilelor (SHAP Values)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-medical-blue mb-3">Top 10 Predictori</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span>Procalcitonina</span>
                <div className="w-24 h-2 bg-medical-blue/20 rounded-full">
                  <div className="w-full h-2 bg-medical-blue rounded-full"></div>
                </div>
                <span className="text-xs">0.284</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Zile cateter venos central</span>
                <div className="w-24 h-2 bg-medical-green/20 rounded-full">
                  <div className="w-4/5 h-2 bg-medical-green rounded-full"></div>
                </div>
                <span className="text-xs">0.231</span>
              </div>
              <div className="flex justify-between items-center">
                <span>CRP maxim 48h</span>
                <div className="w-24 h-2 bg-medical-orange/20 rounded-full">
                  <div className="w-3/4 h-2 bg-medical-orange rounded-full"></div>
                </div>
                <span className="text-xs">0.198</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Scorul Charlson</span>
                <div className="w-24 h-2 bg-medical-red/20 rounded-full">
                  <div className="w-1/2 h-2 bg-medical-red rounded-full"></div>
                </div>
                <span className="text-xs">0.142</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Temperatura maximă</span>
                <div className="w-24 h-2 bg-medical-blue/20 rounded-full">
                  <div className="w-2/5 h-2 bg-medical-blue rounded-full"></div>
                </div>
                <span className="text-xs">0.115</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-medical-green mb-3">Validare Cross-Validare</h4>
            <div className="space-y-3">
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm font-semibold">5-Fold Cross-Validation</p>
                <p className="text-xs text-muted-foreground">Mean AUROC: 0.883 ± 0.012</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm font-semibold">Temporal Validation</p>
                <p className="text-xs text-muted-foreground">6 luni: AUROC = 0.879</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm font-semibold">External Validation</p>
                <p className="text-xs text-muted-foreground">3 spitale: AUROC = 0.871</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceComparisonSlide;