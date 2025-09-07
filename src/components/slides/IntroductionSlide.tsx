import { AlertTriangle, Target, Users, TrendingUp } from "lucide-react";

const IntroductionSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Sistem Predictiv Machine Learning pentru IAAM
        </h1>
        <p className="text-xl text-muted-foreground">
          Dezvoltarea unei metodologii de analiză a riscului infecțiilor nosocomiale
        </p>
      </div>

      {/* Problem Context */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="medical-card rounded-2xl p-6 text-center space-y-4">
          <div className="w-16 h-16 bg-medical-red rounded-2xl flex items-center justify-center mx-auto">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-lg">Contextul Problemei</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><strong>Incidența IAAM în România:</strong> 5-8% din internări</p>
            <p><strong>Impact:</strong> mortalitate crescută, costuri majore</p>
            <p><strong>Provocarea:</strong> lipsa predicției timpurii</p>
          </div>
        </div>

        <div className="medical-card rounded-2xl p-6 text-center space-y-4">
          <div className="w-16 h-16 bg-medical-blue rounded-2xl flex items-center justify-center mx-auto">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-lg">Obiectivul Cercetării</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Dezvoltarea unei metodologii de analiză predictivă pentru identificarea pacienților cu risc crescut de IAAM</p>
          </div>
        </div>

        <div className="medical-card rounded-2xl p-6 text-center space-y-4">
          <div className="w-16 h-16 bg-medical-green rounded-2xl flex items-center justify-center mx-auto">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-lg">Beneficiile Așteptate</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Orientarea măsurilor preventive și reducerea incidențelor IAAM</p>
          </div>
        </div>
      </div>

      {/* Methodological Components */}
      <div className="bg-card rounded-2xl p-8 shadow-card">
        <h2 className="text-2xl font-bold text-center mb-6">Componente Metodologice</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-blue rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              1
            </div>
            <h4 className="font-semibold">Colectarea și Standardizarea</h4>
            <p className="text-sm text-muted-foreground">Datelor clinice din sistemele informaționale</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-green rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              2
            </div>
            <h4 className="font-semibold">Dezvoltarea Algoritmului</h4>
            <p className="text-sm text-muted-foreground">Predictiv machine learning</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-orange rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              3
            </div>
            <h4 className="font-semibold">Validarea Clinică</h4>
            <p className="text-sm text-muted-foreground">Și implementarea pilot</p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gradient-medical rounded-2xl p-6 text-white">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <TrendingUp className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">5-8%</div>
            <div className="text-sm text-white/80">Incidența IAAM România</div>
          </div>
          <div>
            <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">2x</div>
            <div className="text-sm text-white/80">Creșterea mortalității</div>
          </div>
          <div>
            <Target className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">&gt;85%</div>
            <div className="text-sm text-white/80">Sensibilitate țintă</div>
          </div>
          <div>
            <Users className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">&gt;80%</div>
            <div className="text-sm text-white/80">Specificitate țintă</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlide;