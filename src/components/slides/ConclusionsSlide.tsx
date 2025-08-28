import { Lightbulb, Globe, TrendingUp, Heart, Award, ArrowRight } from "lucide-react";

const ConclusionsSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Contribuția Științifică și Perspective de Dezvoltare
        </h1>
        <p className="text-xl text-muted-foreground">
          Viziunea pentru transformarea abordării IAAM prin inteligența artificială
        </p>
      </div>

      {/* Main Contribution */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white">
        <div className="text-center space-y-6">
          <Award className="w-16 h-16 mx-auto" />
          <h2 className="text-3xl font-bold">Contribuția Principală</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Dezvoltarea unei metodologii sistematice pentru predicția IAAM, integrând principiile 
            machine learning cu practica clinică validată, oferind o abordare proactivă în locul celei reactive.
          </p>
        </div>
      </div>

      {/* Innovative Aspects */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-blue flex items-center">
            <Lightbulb className="w-6 h-6 mr-3" />
            Aspecte Inovatoare
          </h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-5 border-l-4 border-medical-blue">
              <h4 className="font-semibold text-medical-blue mb-2">Abordarea Holistică</h4>
              <p className="text-sm text-muted-foreground">
                Prima metodologie integrată pentru multiple tipuri de IAAM în contextul românesc, 
                cu adaptare la specificul local.
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-5 border-l-4 border-medical-green">
              <h4 className="font-semibold text-medical-green mb-2">Integrarea cu Sistemele HIS</h4>
              <p className="text-sm text-muted-foreground">
                Primul sistem AI medical integrat nativ cu platformele informatice 
                medicale românești (InfoWorld, Hipocrate).
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-5 border-l-4 border-medical-orange">
              <h4 className="font-semibold text-medical-orange mb-2">Transparența Algoritmică</h4>
              <p className="text-sm text-muted-foreground">
                Implementarea metodelor explicabile (SHAP) pentru încrederea clinicianului 
                în recomandările AI.
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-5 border-l-4 border-medical-red">
              <h4 className="font-semibold text-medical-red mb-2">Validarea în Context Local</h4>
              <p className="text-sm text-muted-foreground">
                Prima validare comprehensivă a unui sistem predictiv IAAM 
                în sistemul sanitar românesc.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green flex items-center">
            <TrendingUp className="w-6 h-6 mr-3" />
            Direcții de Dezvoltare
          </h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-medical-blue mb-2">Extinderea Scope-ului</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Includerea altor tipuri de infecții nosocomiale</p>
                <p>• Predicția rezistenței antimicrobiene</p>
                <p>• Integrarea cu sistemele de farmacovigilența</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-medical-green mb-2">Îmbunătățirea Metodelor</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Implementarea federated learning</p>
                <p>• Utilizarea transformer architectures</p>
                <p>• Integrarea genomicii microbiene</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-medical-orange mb-2">Scalarea Națională</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Implementarea în toate centrele universitare</p>
                <p>• Extinderea la spitalele județene</p>
                <p>• Integrarea cu registrele naționale</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-medical-red mb-2">Colaborări Internaționale</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Parteneriate cu ECDC și WHO</p>
                <p>• Validarea cross-culturală</p>
                <p>• Contribuții la standardele globale</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical Impact */}
      <div className="bg-card rounded-2xl p-8 shadow-card">
        <h2 className="text-2xl font-bold text-center mb-6">Implicații pentru Practica Clinică</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <Heart className="w-12 h-12 text-medical-red mx-auto" />
            <h3 className="font-bold">Îmbunătățirea Outcome-urilor</h3>
            <p className="text-sm text-muted-foreground">
              Reducerea mortalității și morbidității asociate IAAM prin identificarea 
              timpurie și intervenția preventivă țintită.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <TrendingUp className="w-12 h-12 text-medical-blue mx-auto" />
            <h3 className="font-bold">Optimizarea Resurselor</h3>
            <p className="text-sm text-muted-foreground">
              Alocarea eficientă a măsurilor preventive către pacienții cu risc crescut, 
              maximizând impactul clinic cu resurse limitate.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <Globe className="w-12 h-12 text-medical-green mx-auto" />
            <h3 className="font-bold">Standardizarea Practicii</h3>
            <p className="text-sm text-muted-foreground">
              Implementarea unor protocoale bazate pe evidență științifică, 
              reducând variabilitatea în abordarea IAAM.
            </p>
          </div>
        </div>
      </div>

      {/* Transformation Vision */}
      <div className="medical-card rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
          <ArrowRight className="w-6 h-6 mr-3 text-medical-blue" />
          Transformarea Paradigmei Medicale
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-medical-red">Abordarea Tradițională</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• <strong>Reactivă:</strong> Tratarea infecțiilor după apariție</p>
              <p>• <strong>Empirică:</strong> Bazată pe experiența clinică individuală</p>
              <p>• <strong>Intuitivă:</strong> Evaluarea subiectivă a riscului</p>
              <p>• <strong>Fragmentată:</strong> Abordare izolată per tip de infecție</p>
              <p>• <strong>Variabilă:</strong> Inconsistențe între clinicieni</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-medical-green">Abordarea Propusă</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• <strong>Proactivă:</strong> Predicția și prevenirea timpurie</p>
              <p>• <strong>Bazată pe evidență:</strong> Date validate din multiple surse</p>
              <p>• <strong>Obiectivă:</strong> Scoruri cantitative de risc</p>
              <p>• <strong>Integrată:</strong> Viziune holistică asupra IAAM</p>
              <p>• <strong>Standardizată:</strong> Protocoale uniforme bazate pe AI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Message */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white text-center">
        <div className="space-y-6">
          <Lightbulb className="w-16 h-16 mx-auto" />
          <h2 className="text-3xl font-bold">Mesajul Final</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Sistemul dezvoltat reprezintă un <strong>instrument de suport decizional</strong>, 
            nu un înlocuitor al expertizei medicale, respectând principiile fundamentale ale 
            practicii clinice etice și sigure.
          </p>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Viitorul medicinei constă în colaborarea armonioasă între inteligența artificială 
            și judecata clinică, pentru beneficiul optim al pacienților.
          </p>
        </div>
      </div>

      {/* Key Success Metrics */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-medical-blue rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-lg">87%</span>
          </div>
          <h4 className="font-semibold">Sensibilitate Achieved</h4>
          <p className="text-xs text-muted-foreground">Detectarea cazurilor cu risc crescut</p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-medical-green rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-lg">85%</span>
          </div>
          <h4 className="font-semibold">Specificitate Achieved</h4>
          <p className="text-xs text-muted-foreground">Evitarea alarmelor false</p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-medical-orange rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-lg">0.87</span>
          </div>
          <h4 className="font-semibold">AUROC Performance</h4>
          <p className="text-xs text-muted-foreground">Discriminare foarte bună</p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-medical-red rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-sm">100%</span>
          </div>
          <h4 className="font-semibold">Transparență</h4>
          <p className="text-xs text-muted-foreground">Explicabilitate completă</p>
        </div>
      </div>
    </div>
  );
};

export default ConclusionsSlide;