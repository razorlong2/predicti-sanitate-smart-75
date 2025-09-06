import { DollarSign, TrendingDown, Clock, Shield, PieChart, Calculator } from "lucide-react";

const CostEffectivenessSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Analiza Cost-Efectivitate și Impact Economic
        </h1>
        <p className="text-xl text-muted-foreground">
          Justificarea economică pentru implementarea sistemului predictiv
        </p>
      </div>

      {/* Cost Overview */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Analiza Economică Anuală</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <DollarSign className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Cost IAAM/caz</h3>
            <p className="text-3xl font-bold">€8,450</p>
            <p className="text-sm opacity-90">Media română</p>
          </div>
          <div>
            <TrendingDown className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Cazuri Prevenite</h3>
            <p className="text-3xl font-bold">127</p>
            <p className="text-sm opacity-90">Per spital/an</p>
          </div>
          <div>
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Zile Reduse</h3>
            <p className="text-3xl font-bold">1,143</p>
            <p className="text-sm opacity-90">Spitalizare</p>
          </div>
          <div>
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">ROI</h3>
            <p className="text-3xl font-bold">485%</p>
            <p className="text-sm opacity-90">În primul an</p>
          </div>
        </div>
      </div>

      {/* Detailed Cost Analysis */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-blue">Structura Costurilor de Implementare</h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-lg mb-3 text-medical-blue">Costuri Inițiale (An 1)</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Dezvoltare software</span>
                  <span className="font-semibold">€45,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Integrare HIS</span>
                  <span className="font-semibold">€25,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Training personal</span>
                  <span className="font-semibold">€15,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Hardware dedicat</span>
                  <span className="font-semibold">€12,000</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Total inițial</span>
                  <span>€97,000</span>
                </div>
              </div>
            </div>

            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-lg mb-3 text-medical-green">Costuri Operaționale Anuale</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Licențe software</span>
                  <span className="font-semibold">€18,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Mentenanță tehnică</span>
                  <span className="font-semibold">€12,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Suport utilizatori</span>
                  <span className="font-semibold">€8,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Actualizări</span>
                  <span className="font-semibold">€5,000</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Total anual</span>
                  <span>€43,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green">Beneficii Economice Calculate</h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-lg mb-3 text-medical-orange">Economii Directe</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Reducerea zilelor de spitalizare</span>
                  <span className="font-semibold">€685,800</span>
                </div>
                <div className="flex justify-between">
                  <span>Economii antibioterapie</span>
                  <span className="font-semibold">€127,300</span>
                </div>
                <div className="flex justify-between">
                  <span>Reducerea investigațiilor</span>
                  <span className="font-semibold">€89,400</span>
                </div>
                <div className="flex justify-between">
                  <span>Costuri evitate ATI</span>
                  <span className="font-semibold">€234,600</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-medical-green">
                  <span>Total economii</span>
                  <span>€1,137,100</span>
                </div>
              </div>
            </div>

            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-lg mb-3 text-medical-red">Beneficii Indirecte</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Îmbunătățirea reputației</span>
                  <span className="font-semibold">€75,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Reducerea litigiilor</span>
                  <span className="font-semibold">€45,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Eficiența personalului</span>
                  <span className="font-semibold">€35,000</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-medical-red">
                  <span>Total beneficii indirecte</span>
                  <span>€155,000</span>
                </div>
              </div>
            </div>

            <div className="bg-medical-green/10 rounded-xl p-4 border border-medical-green/30">
              <h4 className="font-semibold text-medical-green mb-2">Beneficiu Net Anual</h4>
              <p className="text-2xl font-bold">€1,292,100 - €43,000 = €1,249,100</p>
              <p className="text-sm text-muted-foreground mt-2">
                Payback period: 0.9 luni (primul an include costurile inițiale)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Impact Model */}
      <div className="bg-card rounded-2xl p-8 shadow-card">
        <h2 className="text-2xl font-bold text-center mb-6">Modelul de Impact Bugetar - Perspectiva pe 5 Ani</h2>
        <div className="grid md:grid-cols-5 gap-4">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-blue rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              An 1
            </div>
            <h4 className="font-semibold">Implementare</h4>
            <p className="text-sm text-medical-red">-€97,000</p>
            <p className="text-xs text-muted-foreground">Investiție inițială</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-green rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              An 2
            </div>
            <h4 className="font-semibold">Adoptare</h4>
            <p className="text-sm text-medical-green">+€1,249,100</p>
            <p className="text-xs text-muted-foreground">Beneficiu net</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-orange rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              An 3
            </div>
            <h4 className="font-semibold">Optimizare</h4>
            <p className="text-sm text-medical-green">+€1,312,400</p>
            <p className="text-xs text-muted-foreground">Eficiență crescută</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-red rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              An 4
            </div>
            <h4 className="font-semibold">Maturitate</h4>
            <p className="text-sm text-medical-green">+€1,378,200</p>
            <p className="text-xs text-muted-foreground">Performanță maximă</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-blue rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              An 5
            </div>
            <h4 className="font-semibold">Sustenabilitate</h4>
            <p className="text-sm text-medical-green">+€1,447,100</p>
            <p className="text-xs text-muted-foreground">Beneficiu susținut</p>
          </div>
        </div>
        
        <div className="mt-6 text-center p-4 bg-medical-green/10 rounded-lg">
          <h3 className="font-bold text-lg text-medical-green">
            Valoarea Actualizată Netă (NPV): €5,847,200
          </h3>
          <p className="text-sm text-muted-foreground">
            Rata de actualizare: 3% | IRR: 1,287% | Payback: 0.9 luni
          </p>
        </div>
      </div>

      {/* Sensitivity Analysis */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="medical-card rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Calculator className="w-5 h-5 mr-2 text-medical-blue" />
            Analiza de Sensibilitate
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <h4 className="font-semibold text-medical-green mb-2">Scenarii Optimist/Pesimist</h4>
              <div className="space-y-1">
                <p>• <strong>Optimist (+30% eficiență):</strong> ROI = 631%</p>
                <p>• <strong>Realistic (baseline):</strong> ROI = 485%</p>
                <p>• <strong>Pesimist (-20% eficiență):</strong> ROI = 388%</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-medical-orange mb-2">Variabilele Cheie</h4>
              <div className="space-y-1">
                <p>• Costul mediu IAAM: ±€2,000 → ROI: 420-580%</p>
                <p>• Rata de adopție: 60-95% → ROI: 350-620%</p>
                <p>• Costurile implementare: ±25% → ROI: 450-520%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="medical-card rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <PieChart className="w-5 h-5 mr-2 text-medical-green" />
            Comparație cu Alternative
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <h4 className="font-semibold text-medical-blue mb-2">Fără Intervenție (Status Quo)</h4>
              <p>• Cost anual IAAM: €2,847,000</p>
              <p>• Tendința crescătoare: +8% anual</p>
            </div>
            <div>
              <h4 className="font-semibold text-medical-orange mb-2">Măsuri Tradiționale</h4>
              <p>• Personal adițional: ROI = 180%</p>
              <p>• Training intensiv: ROI = 220%</p>
            </div>
            <div>
              <h4 className="font-semibold text-medical-green mb-2">Sistemul Propus</h4>
              <p>• <strong>ROI = 485%</strong> (cel mai eficient)</p>
              <p>• Scalabilitate națională</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostEffectivenessSlide;