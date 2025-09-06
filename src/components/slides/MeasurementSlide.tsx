import { Target, BarChart, Shield } from "lucide-react";

const MeasurementSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Stabilirea Nivelului de Predicție
        </h1>
        <p className="text-xl text-muted-foreground">
          Măsurarea capacității reale de predicție în România
        </p>
      </div>

      {/* Main Content - Three Sections */}
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* CE MĂSURĂM */}
        <div className="medical-card rounded-2xl p-8 space-y-6 hover-scale animate-fade-in">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg glow-pulse">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-medical-blue text-center">CE MĂSURĂM</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3 animate-float-up" style={{animationDelay: '0.1s'}}>
              <div className="w-2 h-2 bg-medical-blue rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground">
                <strong>Performanța maximă posibilă</strong><br />
                (AUROC țintă &gt;0.85)
              </p>
            </div>
            
            <div className="flex items-start space-x-3 animate-float-up" style={{animationDelay: '0.2s'}}>
              <div className="w-2 h-2 bg-medical-blue rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground">
                <strong>Timpul optim de alertă</strong><br />
                (24-72h înainte)
              </p>
            </div>
            
            <div className="flex items-start space-x-3 animate-float-up" style={{animationDelay: '0.3s'}}>
              <div className="w-2 h-2 bg-medical-blue rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground">
                <strong>Pragul decizional cost-eficient</strong>
              </p>
            </div>
          </div>
        </div>

        {/* CUM MĂSURĂM */}
        <div className="medical-card rounded-2xl p-8 space-y-6 hover-scale animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-lg glow-pulse">
              <BarChart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-medical-green text-center">CUM MĂSURĂM</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3 animate-float-up" style={{animationDelay: '0.3s'}}>
              <div className="w-2 h-2 bg-medical-green rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground">
                <strong>10.000 pacienți retrospectiv</strong>
              </p>
            </div>
            
            <div className="flex items-start space-x-3 animate-float-up" style={{animationDelay: '0.4s'}}>
              <div className="w-2 h-2 bg-medical-green rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground">
                <strong>Validare încrucișată 10-fold</strong>
              </p>
            </div>
            
            <div className="flex items-start space-x-3 animate-float-up" style={{animationDelay: '0.5s'}}>
              <div className="w-2 h-2 bg-medical-green rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground">
                <strong>Test pe 3 spitale independente</strong>
              </p>
            </div>
            
            <div className="flex items-start space-x-3 animate-float-up" style={{animationDelay: '0.6s'}}>
              <div className="w-2 h-2 bg-medical-green rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground">
                <strong>Interval încredere 95%</strong>
              </p>
            </div>
          </div>
        </div>

        {/* CE STABILIM */}
        <div className="medical-card rounded-2xl p-8 space-y-6 hover-scale animate-fade-in" style={{animationDelay: '0.4s'}}>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center shadow-lg glow-pulse">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-medical-orange text-center">CE STABILIM</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3 animate-float-up" style={{animationDelay: '0.5s'}}>
              <div className="w-2 h-2 bg-medical-orange rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground">
                <strong>Capacitatea reală de predicție în România</strong>
              </p>
            </div>
            
            <div className="flex items-start space-x-3 animate-float-up" style={{animationDelay: '0.6s'}}>
              <div className="w-2 h-2 bg-medical-orange rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground">
                <strong>Setul minim de parametri necesari</strong>
              </p>
            </div>
            
            <div className="flex items-start space-x-3 animate-float-up" style={{animationDelay: '0.7s'}}>
              <div className="w-2 h-2 bg-medical-orange rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground">
                <strong>Limitările și constrângerile sistemului</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Metodologie Enhanced Section */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-blue-200 animate-fade-in" style={{animationDelay: '0.6s'}}>
        <div className="text-center space-y-6">
          <h3 className="text-xl font-bold text-gray-800">Metodologie de Validare</h3>
          
          {/* Enhanced methodology */}
          <div className="grid md:grid-cols-3 gap-4 text-sm mb-6">
            <div className="bg-white/70 rounded-lg p-4 space-y-2">
              <div className="font-semibold text-blue-700">Stratificare IAAM:</div>
              <div className="text-gray-700">VAP, CLABSI, CAUTI, SSI</div>
            </div>
            <div className="bg-white/70 rounded-lg p-4 space-y-2">
              <div className="font-semibold text-green-700">Cross-validation:</div>
              <div className="text-gray-700">10-fold × 100 iterații</div>
            </div>
            <div className="bg-white/70 rounded-lg p-4 space-y-2">
              <div className="font-semibold text-orange-700">Calibrare probabilități:</div>
              <div className="text-gray-700">Platt scaling</div>
            </div>
          </div>
          
          {/* Original table */}
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                <span className="font-semibold text-blue-700">Dataset de antrenament:</span>
                <span className="text-gray-700">7.000 pacienți</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                <span className="font-semibold text-green-700">Dataset de testare:</span>
                <span className="text-gray-700">3.000 pacienți</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                <span className="font-semibold text-orange-700">Perioada de studiu:</span>
                <span className="text-gray-700">2019-2024</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                <span className="font-semibold text-red-700">Ținta de implementare:</span>
                <span className="text-gray-700">2025</span>
              </div>
            </div>
          </div>
          
          {/* Date validate */}
          <div className="mt-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Date Validate</h4>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-red-600">500 IAAM confirmate</div>
                  <div className="text-sm text-gray-600">(7% din totalul pacienților studiați)</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="font-semibold text-blue-700 mb-2">Toate tipurile IAAM:</div>
                  <div className="text-sm text-gray-700">VAP, CLABSI, CAUTI, SSI</div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="font-semibold text-green-700 mb-2">Stratificare pe secții:</div>
                  <div className="text-sm text-gray-700">ATI, Chirurgie, Medical</div>
                </div>
              </div>
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