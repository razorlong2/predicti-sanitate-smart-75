import { Target, BarChart3, Shield } from "lucide-react";

const MeasurementSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Stabilirea Nivelului de Predicție
        </h1>
        <p className="text-xl text-muted-foreground">
          Măsurarea capacității reale de predicție în România
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Ce Măsurăm */}
        <div className="medical-card rounded-2xl p-6 space-y-4">
          <div className="w-16 h-16 bg-medical-blue rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-xl text-center">CE MĂSURĂM</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-2">
              <span className="text-medical-blue font-semibold">•</span>
              <span>Performanța maximă posibilă (AUROC țintă &gt;0.85)</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-medical-blue font-semibold">•</span>
              <span>Timpul optim de alertă (24-72h înainte)</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-medical-blue font-semibold">•</span>
              <span>Pragul decizional cost-eficient</span>
            </div>
          </div>
        </div>

        {/* Cum Măsurăm */}
        <div className="medical-card rounded-2xl p-6 space-y-4">
          <div className="w-16 h-16 bg-medical-green rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-xl text-center">CUM MĂSURĂM</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-2">
              <span className="text-medical-green font-semibold">•</span>
              <span>10.000 pacienți retrospectiv</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-medical-green font-semibold">•</span>
              <span>Validare încrucișată 10-fold</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-medical-green font-semibold">•</span>
              <span>Test pe 3 spitale independente</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-medical-green font-semibold">•</span>
              <span>Interval încredere 95%</span>
            </div>
          </div>
        </div>

        {/* Ce Stabilim */}
        <div className="medical-card rounded-2xl p-6 space-y-4">
          <div className="w-16 h-16 bg-medical-orange rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-xl text-center">CE STABILIM</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-2">
              <span className="text-medical-orange font-semibold">•</span>
              <span>Capacitatea reală de predicție în România</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-medical-orange font-semibold">•</span>
              <span>Setul minim de parametri necesari</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-medical-orange font-semibold">•</span>
              <span>Limitările și constrângerile sistemului</span>
            </div>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-8">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">3/6</span>
      </div>
    </div>
  );
};

export default MeasurementSlide;