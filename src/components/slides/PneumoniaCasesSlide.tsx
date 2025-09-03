import { HelpCircle } from "lucide-react";

const PneumoniaCasesSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Cazuri pe care vreau să le testez
        </h1>
        <p className="text-lg text-muted-foreground">(continuare)</p>
      </div>

      {/* Pneumonii de ventilator */}
      <div>
        <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
          <div className="w-6 h-6 bg-red-600 rounded"></div>
          Pneumonii de ventilator:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Caz 5 */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-red-600">CAZ 5: Pacient ATI, intubare 3 zile</h3>
            <div className="space-y-2 text-sm mb-4">
              <p>• <strong>Ziua 2:</strong> secreții mai multe</p>
              <p>• <strong>Ziua 3:</strong> modificări pe radiografie</p>
              <p>• <strong>Ziua 4:</strong> Pseudomonas confirmat</p>
            </div>
            <div className="bg-red-50 p-3 rounded flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-sm font-medium text-red-700">Putea fi prevenit?</p>
            </div>
          </div>

          {/* Caz 6 */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-red-600">CAZ 6: Politraumă, ventilat mecanic</h3>
            <div className="space-y-2 text-sm mb-4">
              <p>• <strong>Ziua 5:</strong> febră inexplicabilă</p>
              <p>• <strong>Ziua 6:</strong> secreții verzui</p>
              <p>• <strong>Ziua 7:</strong> Acinetobacter multirezistent</p>
            </div>
            <div className="bg-red-50 p-3 rounded flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-sm font-medium text-red-700">De ce atât de târziu?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary box */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-700">
            Obiectivul pentru toate cazurile
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-medium text-blue-600">Detecție precoce</p>
              <p className="text-sm text-muted-foreground mt-1">Cu 1-2 zile mai devreme</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-medium text-green-600">Intervenție rapidă</p>
              <p className="text-sm text-muted-foreground mt-1">Tratament la timp</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-medium text-purple-600">Rezultat măsurabil</p>
              <p className="text-sm text-muted-foreground mt-1">Prognostic îmbunătățit</p>
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

export default PneumoniaCasesSlide;