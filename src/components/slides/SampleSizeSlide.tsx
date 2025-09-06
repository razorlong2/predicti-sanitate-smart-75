import { Calculator, Target, TrendingUp, CheckCircle2 } from "lucide-react";

const SampleSizeSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Calculul Mărimii Eșantionului și Puterea Statistică
        </h1>
        <p className="text-xl text-muted-foreground">
          Justificare metodologică pentru dimensiunea studiului
        </p>
      </div>

      {/* Sample Size Calculation */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Parametrii de Calcul</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <Calculator className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Puterea Studiului</h3>
            <p className="text-3xl font-bold">80%</p>
            <p className="text-sm opacity-90">β = 0.20</p>
          </div>
          <div>
            <Target className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Nivel α</h3>
            <p className="text-3xl font-bold">0.05</p>
            <p className="text-sm opacity-90">Bilateral</p>
          </div>
          <div>
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Incidența IAAM</h3>
            <p className="text-3xl font-bold">7%</p>
            <p className="text-sm opacity-90">Literatura română</p>
          </div>
          <div>
            <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Reducerea Țintă</h3>
            <p className="text-3xl font-bold">25%</p>
            <p className="text-sm opacity-90">Efect clinic semnificativ</p>
          </div>
        </div>
      </div>

      {/* Detailed Calculation */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-blue">Formula Aplicată</h2>
          
          <div className="medical-card rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4 text-center">Pentru Studii de Cohortă</h3>
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-center text-lg">
              n = [(Z<sub>α/2</sub> + Z<sub>β</sub>)<sup>2</sup> × (p₁(1-p₁) + p₂(1-p₂))] / (p₁ - p₂)<sup>2</sup>
            </div>
            
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Z<sub>α/2</sub> (bilateral, α=0.05):</span>
                <span className="font-semibold">1.96</span>
              </div>
              <div className="flex justify-between">
                <span>Z<sub>β</sub> (puterea 80%):</span>
                <span className="font-semibold">0.84</span>
              </div>
              <div className="flex justify-between">
                <span>p₁ (incidența control):</span>
                <span className="font-semibold">0.07</span>
              </div>
              <div className="flex justify-between">
                <span>p₂ (incidența intervențio):</span>
                <span className="font-semibold">0.0525</span>
              </div>
            </div>
          </div>

          <div className="bg-medical-blue/10 rounded-xl p-4 border border-medical-blue/30">
            <h4 className="font-semibold text-medical-blue mb-2">Rezultat Calculat</h4>
            <p className="text-2xl font-bold">n = 4,847 pacienți / grup</p>
            <p className="text-sm text-muted-foreground mt-2">
              Total necesar: 9,694 pacienți pentru putere statistică adecvată
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green">Ajustări Metodologice</h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-orange mb-2">Pierderi din Urmărire</h4>
              <p className="text-sm text-muted-foreground mb-2">Rate estimată: 15%</p>
              <p className="font-bold">Eșantion ajustat: 11,147 pacienți</p>
            </div>

            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-blue mb-2">Analiză de Subgrupuri</h4>
              <p className="text-sm text-muted-foreground mb-2">ATI vs. Secții generale</p>
              <p className="font-bold">Majorare 20%: 13,376 pacienți</p>
            </div>

            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-green mb-2">Validare Externă</h4>
              <p className="text-sm text-muted-foreground mb-2">3 centre medicale</p>
              <p className="font-bold">Eșantion final: 15,000 pacienți</p>
            </div>

            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-red mb-2">Perioada de Recrutare</h4>
              <p className="text-sm text-muted-foreground mb-2">Admisii/lună/centru: ~200</p>
              <p className="font-bold">Durata estimată: 30 de luni</p>
            </div>
          </div>
        </div>
      </div>

      {/* Power Analysis Chart */}
      <div className="bg-card rounded-2xl p-8 shadow-card">
        <h2 className="text-2xl font-bold text-center mb-6">Analiza Puterii Statistice</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-lg">65%</span>
            </div>
            <h3 className="font-bold">Putere pentru 15% reducere</h3>
            <p className="text-sm text-muted-foreground">Efect clinic minimal detectabil</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-lg">80%</span>
            </div>
            <h3 className="font-bold">Putere pentru 25% reducere</h3>
            <p className="text-sm text-muted-foreground">Efect clinic semnificativ (țintă)</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-medical-orange rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-lg">95%</span>
            </div>
            <h3 className="font-bold">Putere pentru 35% reducere</h3>
            <p className="text-sm text-muted-foreground">Efect clinic major</p>
          </div>
        </div>
      </div>

      {/* Sensitivity Analysis */}
      <div className="medical-card rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Analiza de Sensibilitate</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-medical-blue mb-2">Variații în Incidența Baseline</h4>
            <div className="space-y-1">
              <p>• La 5% incidență: n = 6,890 / grup</p>
              <p>• La 7% incidență: n = 4,847 / grup (calculat)</p>
              <p>• La 10% incidența: n = 3,363 / grup</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-medical-green mb-2">Impact Puterii Statistice</h4>
            <div className="space-y-1">
              <p>• Putere 70%: n = 4,021 / grup</p>
              <p>• Putere 80%: n = 4,847 / grup (selectat)</p>
              <p>• Putere 90%: n = 6,473 / grup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleSizeSlide;