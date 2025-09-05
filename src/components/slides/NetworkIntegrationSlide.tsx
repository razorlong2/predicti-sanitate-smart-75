import { Database, Brain, TrendingUp, ArrowRight, Activity, Target } from "lucide-react";

const NetworkIntegrationSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Integrarea în Rețeaua Neuronală
        </h1>
        <p className="text-xl text-muted-foreground">
          Cum datele clinice devin predicție IAAM
        </p>
      </div>

      {/* Main Flow Diagram */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl p-8 border-2 border-blue-100 shadow-xl">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">CUM DATELE DEVIN PREDICȚIE</h2>
          <p className="text-gray-600">Procesarea în timp real a parametrilor clinici</p>
        </div>

        {/* Flow Diagram */}
        <div className="grid grid-cols-5 gap-4 items-center">
          
          {/* INPUT Column */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg glow-pulse mx-auto mb-2">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-700">INPUT</h3>
              <p className="text-xs text-gray-600">(47 parametri)</p>
            </div>
            
            <div className="space-y-2">
              <div className="bg-white border border-blue-200 rounded-lg p-3 hover-scale animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="text-sm font-semibold text-blue-700">Temperatură:</div>
                <div className="text-lg font-bold">38.2°C</div>
              </div>
              
              <div className="bg-white border border-blue-200 rounded-lg p-3 hover-scale animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="text-sm font-semibold text-blue-700">Leucocite:</div>
                <div className="text-lg font-bold">16.000</div>
              </div>
              
              <div className="bg-white border border-blue-200 rounded-lg p-3 hover-scale animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="text-sm font-semibold text-blue-700">CRP:</div>
                <div className="text-lg font-bold">156 mg/L</div>
              </div>
              
              <div className="bg-white border border-blue-200 rounded-lg p-3 hover-scale animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="text-sm font-semibold text-blue-700">Data internării:</div>
                <div className="text-lg font-bold">15.03.2024</div>
              </div>
              
              <div className="bg-white border border-blue-200 rounded-lg p-3 hover-scale animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="text-sm font-semibold text-blue-700">Zile cateter:</div>
                <div className="text-lg font-bold">5</div>
              </div>
              
              <div className="bg-white border border-blue-200 rounded-lg p-3 hover-scale animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="text-sm font-semibold text-blue-700">Data recoltării probei:</div>
                <div className="text-lg font-bold">20.03.2024</div>
              </div>
            </div>
          </div>

          {/* Arrow 1 */}
          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-gray-400 animate-pulse" />
          </div>

          {/* PROCESSING Column */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg glow-pulse mx-auto mb-2">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-purple-700">PROCESARE</h3>
              <p className="text-xs text-gray-600">(4 straturi ascunse)</p>
            </div>
            
            <div className="space-y-2">
              <div className="bg-gradient-to-r from-purple-100 to-purple-50 border border-purple-200 rounded-lg p-3 animate-fade-in" style={{animationDelay: '0.7s'}}>
                <div className="text-sm font-semibold text-purple-700">Hidden 1 (64 neur):</div>
                <div className="text-xs">Extracție caracteristici</div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-100 to-pink-50 border border-pink-200 rounded-lg p-3 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <div className="text-sm font-semibold text-pink-700">Hidden 2 (32 neur):</div>
                <div className="text-xs">Agregare informații</div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 rounded-lg p-3 animate-fade-in" style={{animationDelay: '0.9s'}}>
                <div className="text-sm font-semibold text-orange-700">Hidden 3 (16 neur):</div>
                <div className="text-xs">Rafinare pattern-uri</div>
              </div>
              
              <div className="bg-gradient-to-r from-red-100 to-red-50 border border-red-200 rounded-lg p-3 animate-fade-in" style={{animationDelay: '1.0s'}}>
                <div className="text-sm font-semibold text-red-700">Hidden 4 (8 neur):</div>
                <div className="text-xs">Clasificare finală</div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                256 neuroni total
              </div>
            </div>
          </div>

          {/* Arrow 2 */}
          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-gray-400 animate-pulse" />
          </div>

          {/* OUTPUT Column */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-lg glow-pulse mx-auto mb-2">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-green-700">OUTPUT</h3>
              <p className="text-xs text-gray-600">(3 clase)</p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 animate-fade-in" style={{animationDelay: '1.1s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-700 mb-1">74%</div>
                  <div className="text-sm font-semibold text-red-600">RISC CRESCUT</div>
                </div>
              </div>
              
              <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 animate-fade-in" style={{animationDelay: '1.2s'}}>
                <div className="text-sm font-semibold text-orange-700">Clasificare:</div>
                <div className="font-bold">CRESCUT</div>
              </div>
              
              <div className="bg-red-200 border-2 border-red-400 rounded-lg p-3 animate-pulse animate-fade-in" style={{animationDelay: '1.3s'}}>
                <div className="text-sm font-semibold text-red-800">Acțiune:</div>
                <div className="font-bold flex items-center">
                  <span>ALERTĂ</span>
                  <Activity className="w-4 h-4 ml-2 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Process Flow */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="animate-fade-in" style={{animationDelay: '1.4s'}}>
              <div className="bg-blue-100 rounded-lg p-3 mb-2">
                <TrendingUp className="w-6 h-6 mx-auto text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-blue-700">Normalizare</div>
              <div className="text-xs text-gray-600">Parametri standardizați</div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '1.5s'}}>
              <div className="bg-purple-100 rounded-lg p-3 mb-2">
                <Brain className="w-6 h-6 mx-auto text-purple-600" />
              </div>
              <div className="text-sm font-semibold text-purple-700">Propagare</div>
              <div className="text-xs text-gray-600">Procesare neurală</div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '1.6s'}}>
              <div className="bg-green-100 rounded-lg p-3 mb-2">
                <Target className="w-6 h-6 mx-auto text-green-600" />
              </div>
              <div className="text-sm font-semibold text-green-700">Predicție</div>
              <div className="text-xs text-gray-600">Probabilitate risc</div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '1.7s'}}>
              <div className="bg-red-100 rounded-lg p-3 mb-2">
                <Activity className="w-6 h-6 mx-auto text-red-600" />
              </div>
              <div className="text-sm font-semibold text-red-700">Alertă</div>
              <div className="text-xs text-gray-600">Acțiune clinică</div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200 animate-fade-in" style={{animationDelay: '1.8s'}}>
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-gray-800">Specificații Tehnice</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-semibold text-blue-700">Arhitectura rețelei:</div>
              <div className="text-gray-700">47 → 64 → 32 → 16 → 8 → 3</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-green-700">Timp de răspuns:</div>
              <div className="text-gray-700">&lt; 200ms per predicție</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-orange-700">Acuratețe țintă:</div>
              <div className="text-gray-700">AUROC &gt; 0.85</div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-8">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">6/8</span>
      </div>
    </div>
  );
};

export default NetworkIntegrationSlide;