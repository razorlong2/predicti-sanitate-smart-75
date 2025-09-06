import { TrendingUp, AlertTriangle, CheckCircle, Target, BarChart, Shield } from "lucide-react";

const PerformanceSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Performanța și Validarea Finală
        </h1>
        <p className="text-xl text-muted-foreground">
          Rezultate țintă și metodologia de validare
        </p>
      </div>

      {/* Performance Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* AUROC Target */}
        <div className="medical-card rounded-2xl p-8 space-y-6 hover-scale animate-fade-in">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-lg glow-pulse">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-medical-green text-center">AUROC ȚINTĂ</h2>
          </div>
          
          <div className="text-center space-y-4">
            <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              &gt;0.85
            </div>
            <div className="text-sm text-muted-foreground">
              Area sub curba ROC pentru clasificare binară IAAM
            </div>
          </div>
        </div>

        {/* Sensitivity/Specificity */}
        <div className="medical-card rounded-2xl p-8 space-y-6 hover-scale animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg glow-pulse">
              <BarChart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-medical-blue text-center">SENSITIVITATE</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-semibold">Sensitivitate:</span>
              <span className="text-lg font-bold text-blue-600">&gt;80%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-semibold">Specificitate:</span>
              <span className="text-lg font-bold text-green-600">&gt;75%</span>
            </div>
          </div>
        </div>

        {/* Clinical Impact */}
        <div className="medical-card rounded-2xl p-8 space-y-6 hover-scale animate-fade-in" style={{animationDelay: '0.4s'}}>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center shadow-lg glow-pulse">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-medical-orange text-center">IMPACT CLINIC</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span className="text-sm font-semibold">Reducere mortalitate:</span>
              <span className="text-lg font-bold text-orange-600">15-25%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="text-sm font-semibold">Reducere costuri:</span>
              <span className="text-lg font-bold text-red-600">30-40%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Validation Timeline */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-blue-200 animate-fade-in" style={{animationDelay: '0.6s'}}>
        <div className="text-center space-y-6">
          <h3 className="text-xl font-bold text-gray-800">Timeline de Validare</h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/70 rounded-lg p-4 space-y-2">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto" />
              <div className="font-bold text-green-700">Faza I</div>
              <div className="text-sm text-gray-700">Dezvoltare model<br/>500+ cazuri IAAM</div>
              <div className="text-xs text-green-600">Completă</div>
            </div>
            
            <div className="bg-white/70 rounded-lg p-4 space-y-2">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto" />
              <div className="font-bold text-blue-700">Faza II</div>
              <div className="text-sm text-gray-700">Validare pe 3 spitale<br/>prospectiv 6 luni</div>
              <div className="text-xs text-blue-600">În curs</div>
            </div>
            
            <div className="bg-white/70 rounded-lg p-4 space-y-2">
              <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto" />
              <div className="font-bold text-orange-700">Faza III</div>
              <div className="text-sm text-gray-700">Implementare pilot<br/>Monitorizare continuă</div>
              <div className="text-xs text-orange-600">Planificat 2025</div>
            </div>
            
            <div className="bg-white/70 rounded-lg p-4 space-y-2">
              <Target className="w-8 h-8 text-purple-600 mx-auto" />
              <div className="font-bold text-purple-700">Faza IV</div>
              <div className="text-sm text-gray-700">Implementare națională<br/>Integrare EMR</div>
              <div className="text-xs text-purple-600">2025-2026</div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-300 animate-fade-in" style={{animationDelay: '0.8s'}}>
        <div className="flex items-start space-x-4">
          <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-800">NOTĂ IMPORTANTĂ</h3>
            
            <div className="space-y-2 text-sm text-yellow-900">
              <p><strong>Valorile reprezintă ȚINTE propuse bazate pe literatura internațională.</strong></p>
              
              <p>Nivelul REAL pentru România va fi stabilit prin:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Validare pe 10.000 pacienți (2019-2024)</li>
                <li>Testare în 3 spitale universitare</li>
                <li>Calibrare specifică pentru populația română</li>
              </ul>
              
              <p className="mt-4 font-semibold">Implementarea va respecta standardele academice și clinice românești.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Statistics */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200 animate-fade-in" style={{animationDelay: '1.0s'}}>
        <div className="text-center space-y-4">
          <h3 className="text-lg font-bold text-gray-800">Obiective Finale</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-3">
              <div className="text-2xl font-bold text-blue-600">10.000</div>
              <div className="text-gray-700">Pacienți în validare finală</div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="text-2xl font-bold text-green-600">95%</div>
              <div className="text-gray-700">Interval de încredere</div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="text-2xl font-bold text-orange-600">2025</div>
              <div className="text-gray-700">Implementare națională</div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-8">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">7/8</span>
      </div>
    </div>
  );
};

export default PerformanceSlide;