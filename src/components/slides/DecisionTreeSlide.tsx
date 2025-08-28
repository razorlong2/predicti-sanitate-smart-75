import { GitBranch, CheckCircle, AlertCircle, UserCheck, Activity, Target } from "lucide-react";

const DecisionTreeSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Algoritmul Clinic de Stratificare a Riscului
        </h1>
        <p className="text-xl text-muted-foreground">
          Arborele logic de decizie pentru evaluarea sistemică a riscului IAAM
        </p>
      </div>

      {/* Decision Tree Steps */}
      <div className="space-y-8">
        {/* Step 1 */}
        <div className="medical-card rounded-2xl p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-medical-blue rounded-xl flex items-center justify-center text-white font-bold text-lg">1</div>
            <h2 className="text-2xl font-bold text-medical-blue">Screening Inițial</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-medical-green" />
                <span>Verificarea criteriilor de includere (internare &gt;48h)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-medical-green" />
                <span>Evaluarea disponibilității datelor necesare</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong>Criterii excludere:</strong> Pacienți în transfer, documentație incompletă, 
                internare &lt;48h, status paliativ
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="medical-card rounded-2xl p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-medical-green rounded-xl flex items-center justify-center text-white font-bold text-lg">2</div>
            <h2 className="text-2xl font-bold text-medical-green">Evaluarea Factorilor de Risc</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-medical-blue">Demografici</h4>
              <div className="space-y-2 text-sm">
                <p>• Vârstă &gt;65 ani <span className="text-medical-blue font-semibold">(+1 punct)</span></p>
                <p>• Sex masculin <span className="text-medical-blue font-semibold">(+0.5 puncte)</span></p>
                <p>• IMC &gt;30 sau &lt;18.5 <span className="text-medical-blue font-semibold">(+1 punct)</span></p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-medical-green">Comorbidități</h4>
              <div className="space-y-2 text-sm">
                <p>• Diabet zaharat <span className="text-medical-green font-semibold">(+1 punct)</span></p>
                <p>• Insuficiență renală cronică <span className="text-medical-green font-semibold">(+2 puncte)</span></p>
                <p>• Imunosupresie <span className="text-medical-green font-semibold">(+3 puncte)</span></p>
                <p>• BPOC <span className="text-medical-green font-semibold">(+1 punct)</span></p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-medical-orange">Dispozitive</h4>
              <div className="space-y-2 text-sm">
                <p>• Cateter venos central <span className="text-medical-orange font-semibold">(+2 puncte)</span></p>
                <p>• Cateter urinar <span className="text-medical-orange font-semibold">(+1 punct)</span></p>
                <p>• Ventilator mecanic <span className="text-medical-orange font-semibold">(+3 puncte)</span></p>
                <p>• Antibioterapie recentă <span className="text-medical-orange font-semibold">(+2 puncte)</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="medical-card rounded-2xl p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-medical-orange rounded-xl flex items-center justify-center text-white font-bold text-lg">3</div>
            <h2 className="text-2xl font-bold text-medical-orange">Analiza Biomarkerilor</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Parametri Inflamatori</h4>
                <div className="space-y-2 text-sm">
                  <p>• CRP &gt;50 mg/L sau PCT &gt;0.5 ng/mL <span className="text-medical-orange font-semibold">(+1 punct)</span></p>
                  <p>• Leucocitoza &gt;12.000 sau leucopenie &lt;4.000 <span className="text-medical-orange font-semibold">(+1 punct)</span></p>
                  <p>• Febra &gt;38°C sau hipotermie &lt;36°C <span className="text-medical-orange font-semibold">(+1 punct)</span></p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Markeri Specifici</h4>
                <div className="space-y-2 text-sm">
                  <p>• Lactat &gt;2 mmol/L <span className="text-medical-red font-semibold">(+2 puncte)</span></p>
                  <p>• Trombocitopenie &lt;100.000 <span className="text-medical-red font-semibold">(+1 punct)</span></p>
                  <p>• Creatinina crescută &gt;1.5x bazală <span className="text-medical-red font-semibold">(+1 punct)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps 4-6 Combined */}
        <div className="bg-gradient-medical rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold text-center mb-8">Procesul Final de Decizie</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto font-bold text-lg">4</div>
              <h3 className="text-xl font-bold">Criterii CDC</h3>
              <p className="text-sm text-white/80">
                Evaluarea conform definițiilor CDC pentru fiecare tip de IAAM
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto font-bold text-lg">5</div>
              <h3 className="text-xl font-bold">Scor Final</h3>
              <p className="text-sm text-white/80">
                Calculul scorului și stratificarea riscului în categorii
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto font-bold text-lg">6</div>
              <h3 className="text-xl font-bold">Recomandări</h3>
              <p className="text-sm text-white/80">
                Bundle-uri preventive specifice tipului de risc
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Stratification */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="medical-card rounded-xl p-6 text-center space-y-4 border-l-4 border-medical-green">
          <Target className="w-12 h-12 text-medical-green mx-auto" />
          <h3 className="font-bold text-medical-green">RISC SCĂZUT</h3>
          <p className="text-2xl font-bold">0-3 puncte</p>
          <div className="text-sm text-muted-foreground space-y-1">
            <p><strong>Acțiune:</strong> Monitorizare standard</p>
            <p><strong>Frecvența:</strong> Evaluare zilnică</p>
            <p><strong>Bundle:</strong> Măsuri generale de prevenție</p>
          </div>
        </div>
        
        <div className="medical-card rounded-xl p-6 text-center space-y-4 border-l-4 border-medical-orange">
          <AlertCircle className="w-12 h-12 text-medical-orange mx-auto" />
          <h3 className="font-bold text-medical-orange">RISC MODERAT</h3>
          <p className="text-2xl font-bold">4-7 puncte</p>
          <div className="text-sm text-muted-foreground space-y-1">
            <p><strong>Acțiune:</strong> Măsuri preventive specifice</p>
            <p><strong>Frecvența:</strong> Evaluare bi-zilnică</p>
            <p><strong>Bundle:</strong> Protocoale îmbunătățite</p>
          </div>
        </div>
        
        <div className="medical-card rounded-xl p-6 text-center space-y-4 border-l-4 border-medical-red">
          <Activity className="w-12 h-12 text-medical-red mx-auto" />
          <h3 className="font-bold text-medical-red">RISC CRESCUT</h3>
          <p className="text-2xl font-bold">&gt;7 puncte</p>
          <div className="text-sm text-muted-foreground space-y-1">
            <p><strong>Acțiune:</strong> Intervenție activă imediată</p>
            <p><strong>Frecvența:</strong> Monitorizare continuă</p>
            <p><strong>Bundle:</strong> Protocoale intensive</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionTreeSlide;