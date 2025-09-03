import { AlertTriangle, HelpCircle } from "lucide-react";

const CasesSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Cazuri pe care vreau să le testez
        </h1>
      </div>

      {/* Infecții urinare */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded"></div>
          Infecții urinare:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Caz 1 */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-blue-600">CAZ 1: Bătrân cu sondă de 5 zile</h3>
            <div className="space-y-2 text-sm mb-4">
              <p>• <strong>Ziua 3:</strong> urina începe să se tulbure</p>
              <p>• <strong>Ziua 4:</strong> febră ușoară</p>
              <p>• <strong>Ziua 5:</strong> confirmare Klebsiella în urocultură</p>
            </div>
            <div className="bg-blue-50 p-3 rounded flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <p className="text-sm font-medium text-blue-700">Puteam prezice din ziua 3?</p>
            </div>
          </div>

          {/* Caz 2 */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-blue-600">CAZ 2: Femeie după operație ginecologică</h3>
            <div className="space-y-2 text-sm mb-4">
              <p>• <strong>Ziua 2:</strong> ușoară jenă la urinat</p>
              <p>• <strong>Ziua 3:</strong> febră și frisoane</p>
              <p>• <strong>Ziua 4:</strong> E.coli rezistent</p>
            </div>
            <div className="bg-blue-50 p-3 rounded flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <p className="text-sm font-medium text-blue-700">Ce semne am ratat?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Infecții de plagă */}
      <div>
        <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-600 rounded"></div>
          Infecții de plagă:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Caz 3 */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-orange-600">CAZ 3: După colecistectomie, pacient obez</h3>
            <div className="space-y-2 text-sm mb-4">
              <p>• <strong>Ziua 2:</strong> plaga puțin roșie</p>
              <p>• <strong>Ziua 3:</strong> începe să elimine lichid</p>
              <p>• <strong>Ziua 4:</strong> puroi evident</p>
            </div>
            <div className="bg-orange-50 p-3 rounded flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <p className="text-sm font-medium text-orange-700">Când trebuia să intervenim?</p>
            </div>
          </div>

          {/* Caz 4 */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-orange-600">CAZ 4: După cezariană</h3>
            <div className="space-y-2 text-sm mb-4">
              <p>• <strong>Ziua 3:</strong> margini ușor întărite</p>
              <p>• <strong>Ziua 4:</strong> dehiscență parțială</p>
              <p>• <strong>Ziua 5:</strong> Stafilococ auriu</p>
            </div>
            <div className="bg-orange-50 p-3 rounded flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <p className="text-sm font-medium text-orange-700">Care erau semnele precoce?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-8">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">5/8</span>
      </div>
    </div>
  );
};

export default CasesSlide;