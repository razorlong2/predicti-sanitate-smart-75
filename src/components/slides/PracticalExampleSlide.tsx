import { Database, Brain, Target, ArrowRight, Activity, AlertTriangle } from "lucide-react";

const PracticalExampleSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Cum Funcționează Predicția - Caz Real
        </h1>
        <p className="text-xl text-muted-foreground">
          Demonstrație practică cu cazul de bacteriemie CVC
        </p>
      </div>

      {/* Main Example Flow */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl p-8 border-2 border-blue-100 shadow-xl">
        
        {/* Case Header */}
        <div className="text-center mb-8 bg-red-50 rounded-2xl p-6 border border-red-200">
          <h2 className="text-2xl font-bold text-red-800 mb-2">CAZ 1: BACTERIEMIE CATETER VENOS CENTRAL</h2>
          <p className="text-red-700">Pacientă 67 ani, cancer pancreatic, port-a-cath chimioterapie</p>
          <p className="text-sm text-red-600 mt-2">Ziua 3: Frisoane, CRP 85, PCT 2.1</p>
        </div>

        {/* Processing Flow */}
        <div className="grid grid-cols-4 gap-6 items-center">
          
          {/* INPUT Section */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg glow-pulse mx-auto mb-2">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-700">INPUT</h3>
            </div>
            
            <div className="space-y-2">
              <div className="bg-white border border-blue-200 rounded-lg p-3 hover-scale animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="text-sm font-semibold text-blue-700">Temperatură:</div>
                <div className="text-lg font-bold">37.8°C</div>
              </div>
              
              <div className="bg-white border border-blue-200 rounded-lg p-3 hover-scale animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="text-sm font-semibold text-blue-700">CRP:</div>
                <div className="text-lg font-bold">85 mg/L</div>
              </div>
              
              <div className="bg-white border border-blue-200 rounded-lg p-3 hover-scale animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="text-sm font-semibold text-blue-700">PCT:</div>
                <div className="text-lg font-bold">2.1 ng/ml</div>
              </div>
              
              <div className="bg-white border border-blue-200 rounded-lg p-3 hover-scale animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="text-sm font-semibold text-blue-700">Zile cateter:</div>
                <div className="text-lg font-bold">3</div>
              </div>
            </div>
          </div>

          {/* Arrow 1 */}
          <div className="flex justify-center">
            <div className="text-center space-y-2">
              <ArrowRight className="w-8 h-8 text-gray-400 animate-pulse mx-auto" />
              <div className="text-xs text-gray-600">Normalizare</div>
            </div>
          </div>

          {/* PROCESSING Section */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg glow-pulse mx-auto mb-2">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-purple-700">PROCESARE</h3>
            </div>
            
            <div className="space-y-2">
              <div className="bg-gradient-to-r from-purple-100 to-purple-50 border border-purple-200 rounded-lg p-3 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="text-sm font-semibold text-purple-700">Feed-forward</div>
                <div className="text-xs">Prin 4 straturi</div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-100 to-pink-50 border border-pink-200 rounded-lg p-3 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="text-sm font-semibold text-pink-700">Agregare</div>
                <div className="text-xs">Pattern-uri medicale</div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 rounded-lg p-3 animate-fade-in" style={{animationDelay: '0.7s'}}>
                <div className="text-sm font-semibold text-orange-700">Softmax</div>
                <div className="text-xs">Probabilități finale</div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                120 neuroni activi
              </div>
            </div>
          </div>

          {/* Arrow 2 */}
          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-gray-400 animate-pulse" />
          </div>
        </div>

        {/* OUTPUT Section - Full Width */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-lg glow-pulse mx-auto mb-4">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-700 mb-6">OUTPUT</h3>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-700 mb-2">28%</div>
                  <div className="text-lg font-semibold text-orange-600">RISC</div>
                  <div className="text-sm text-orange-500 mt-1">Probabilitate IAAM</div>
                </div>
              </div>
              
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-6 animate-fade-in" style={{animationDelay: '0.9s'}}>
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-700 mb-2">Clasificare:</div>
                  <div className="text-2xl font-bold text-blue-800">MODERAT</div>
                  <div className="text-sm text-blue-500 mt-1">Nivel de risc</div>
                </div>
              </div>
              
              <div className="bg-green-100 border border-green-300 rounded-lg p-6 animate-fade-in" style={{animationDelay: '1.0s'}}>
                <div className="text-center">
                  <div className="text-lg font-semibold text-green-700 mb-2">Acțiune:</div>
                  <div className="text-xl font-bold text-green-800 flex items-center justify-center">
                    <span>MONITORIZARE</span>
                    <Activity className="w-5 h-5 ml-2" />
                  </div>
                  <div className="text-sm text-green-500 mt-1">Urmărire atentă</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Evolution Prediction */}
      <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-2xl p-8 border-2 border-yellow-300 animate-fade-in" style={{animationDelay: '1.2s'}}>
        <div className="text-center space-y-6">
          <h3 className="text-xl font-bold text-red-800 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 mr-2" />
            PREDICȚIA S-A CONFIRMAT
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/70 rounded-lg p-4">
              <div className="font-bold text-red-700 mb-2">ZIUA 4:</div>
              <div className="text-sm text-red-600">
                Hipotensiune, PCT 12 → <strong>Risc: 78% ALERTĂ!</strong>
              </div>
            </div>
            
            <div className="bg-white/70 rounded-lg p-4">
              <div className="font-bold text-red-700 mb-2">ZIUA 5:</div>
              <div className="text-sm text-red-600">
                Hemoculturi: <strong>S. epidermidis CONFIRMAT</strong>
              </div>
            </div>
          </div>
          
          <div className="bg-green-200 border border-green-400 rounded-lg p-4">
            <div className="font-bold text-green-800">
              ✓ Vancomicină la &gt;75% ar fi prevenit sepsisul
            </div>
          </div>
        </div>
      </div>

      {/* Technical Flow */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200 animate-fade-in" style={{animationDelay: '1.4s'}}>
        <div className="text-center space-y-4">
          <h3 className="text-lg font-bold text-gray-800">Fluxul Tehnic de Procesare</h3>
          <div className="grid grid-cols-4 gap-4 text-center text-sm">
            <div className="space-y-2">
              <div className="bg-blue-100 rounded-lg p-3">
                <Database className="w-6 h-6 mx-auto text-blue-600" />
              </div>
              <div className="font-semibold text-blue-700">Fiecare parametru</div>
              <div className="text-gray-600">Colectare date</div>
            </div>
            
            <div className="space-y-2">
              <div className="bg-purple-100 rounded-lg p-3">
                <ArrowRight className="w-6 h-6 mx-auto text-purple-600" />
              </div>
              <div className="font-semibold text-purple-700">Normalizare</div>
              <div className="text-gray-600">Standardizare</div>
            </div>
            
            <div className="space-y-2">
              <div className="bg-green-100 rounded-lg p-3">
                <Brain className="w-6 h-6 mx-auto text-green-600" />
              </div>
              <div className="font-semibold text-green-700">Propagare</div>
              <div className="text-gray-600">Prin rețea</div>
            </div>
            
            <div className="space-y-2">
              <div className="bg-red-100 rounded-lg p-3">
                <Target className="w-6 h-6 mx-auto text-red-600" />
              </div>
              <div className="font-semibold text-red-700">Predicție</div>
              <div className="text-gray-600">Rezultat final</div>
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

export default PracticalExampleSlide;