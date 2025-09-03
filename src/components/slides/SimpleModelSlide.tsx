import { ArrowRight, Thermometer, Activity, Calendar, User } from "lucide-react";

const SimpleModelSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Modelul
        </h1>
        <p className="text-xl text-muted-foreground">
          Fără pretenții - o abordare simplă
        </p>
      </div>

      {/* Neural Network Diagram */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <h2 className="text-2xl font-bold text-center mb-8">Rețea neuronală simplă:</h2>
          
          <div className="grid grid-cols-4 gap-8 items-center">
            
            {/* Input */}
            <div className="text-center">
              <h3 className="font-bold text-lg mb-4">Date intrare</h3>
              <p className="text-sm text-muted-foreground mb-4">(ce avem)</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm bg-blue-50 p-2 rounded">
                  <Thermometer className="w-4 h-4 text-blue-600" />
                  <span>Temperatură</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-blue-50 p-2 rounded">
                  <Activity className="w-4 h-4 text-blue-600" />
                  <span>Leucocite</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-blue-50 p-2 rounded">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>Zile spitalizare</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-blue-50 p-2 rounded">
                  <User className="w-4 h-4 text-blue-600" />
                  <span>Vârstă</span>
                </div>
                <div className="text-xs text-muted-foreground">etc.</div>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="text-center">
              <ArrowRight className="w-8 h-8 text-blue-600 mx-auto" />
            </div>

            {/* Processing */}
            <div className="text-center">
              <h3 className="font-bold text-lg mb-4">Procesare</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="text-sm font-medium">ALGORITM</div>
                  <div className="text-xs text-muted-foreground mt-1">nivel 1</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl">
                  <div className="text-sm font-medium">ALGORITM</div>
                  <div className="text-xs text-muted-foreground mt-1">nivel 2</div>
                </div>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="text-center">
              <ArrowRight className="w-8 h-8 text-green-600 mx-auto" />
            </div>

            {/* Output */}
            <div className="text-center">
              <h3 className="font-bold text-lg mb-4">Rezultat</h3>
              <p className="text-sm text-muted-foreground mb-4">(risc IAAM)</p>
              
              <div className="space-y-3">
                <div className="bg-green-100 p-3 rounded text-sm font-medium text-green-700">
                  • Risc mic
                </div>
                <div className="bg-yellow-100 p-3 rounded text-sm font-medium text-yellow-700">
                  • Risc mediu
                </div>
                <div className="bg-red-100 p-3 rounded text-sm font-medium text-red-700">
                  • Risc mare
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <p className="text-lg font-medium text-yellow-800">
            Nu știu încă cât de bine va merge. <br />
            <strong>Asta vreau să aflu.</strong>
          </p>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-8">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">4/8</span>
      </div>
    </div>
  );
};

export default SimpleModelSlide;