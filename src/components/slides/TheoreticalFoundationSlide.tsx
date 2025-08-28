import { BookOpen, Search, Lightbulb, CheckCircle } from "lucide-react";

const TheoreticalFoundationSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Cadrul Științific și Metodologic
        </h1>
        <p className="text-xl text-muted-foreground">
          Fundamentarea teoretică și identificarea lacunelor din literatură
        </p>
      </div>

      {/* Scientific Literature */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-blue flex items-center">
            <BookOpen className="w-6 h-6 mr-3" />
            Literatura Științifică
          </h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-4 space-y-2">
              <h4 className="font-semibold text-medical-blue">Criteriile CDC/NHSN</h4>
              <p className="text-sm text-muted-foreground">
                Standardele internaționale pentru supravegherea și definirea IAAM
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-4 space-y-2">
              <h4 className="font-semibold text-medical-green">Ghidurile ECDC</h4>
              <p className="text-sm text-muted-foreground">
                Recomandări europene pentru prevenția infecțiilor nosocomiale
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-4 space-y-2">
              <h4 className="font-semibold text-medical-orange">Standardele WHO</h4>
              <p className="text-sm text-muted-foreground">
                Cadrul global pentru siguranța pacientului și controlul infecțiilor
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-red flex items-center">
            <Search className="w-6 h-6 mr-3" />
            Lacunele Identificate
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-medical-red rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">Abordarea Reactivă</h4>
                <p className="text-sm text-muted-foreground">
                  Predominantă în practica medicală actuală
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-medical-red rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">Lipsa Instrumentelor Predictive</h4>
                <p className="text-sm text-muted-foreground">
                  Validate în contextul sistemului sanitar românesc
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-medical-red rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold">Integrarea Tehnologiilor</h4>
                <p className="text-sm text-muted-foreground">
                  Necesitatea adoptării AI în workflow-ul clinic
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Hypothesis */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white">
        <div className="text-center space-y-4">
          <Lightbulb className="w-12 h-12 mx-auto" />
          <h2 className="text-2xl font-bold">Ipoteza de Cercetare</h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            Un model predictiv bazat pe machine learning poate identifica cu acuratețe 
            pacienții cu risc crescut de IAAM, facilitând implementarea măsurilor 
            preventive țintite și îmbunătățind outcome-urile clinice.
          </p>
        </div>
      </div>

      {/* Methodological Framework */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="medical-card rounded-xl p-6 text-center space-y-4">
          <CheckCircle className="w-10 h-10 text-medical-blue mx-auto" />
          <h3 className="font-bold">Validare Statistică</h3>
          <p className="text-sm text-muted-foreground">
            Metrici robuste pentru evaluarea performanței modelului
          </p>
        </div>
        
        <div className="medical-card rounded-xl p-6 text-center space-y-4">
          <CheckCircle className="w-10 h-10 text-medical-green mx-auto" />
          <h3 className="font-bold">Validare Clinică</h3>
          <p className="text-sm text-muted-foreground">
            Testarea în condiții reale de practică medicală
          </p>
        </div>
        
        <div className="medical-card rounded-xl p-6 text-center space-y-4">
          <CheckCircle className="w-10 h-10 text-medical-orange mx-auto" />
          <h3 className="font-bold">Implementabilitate</h3>
          <p className="text-sm text-muted-foreground">
            Integrare practică în sistemele medicale existente
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheoreticalFoundationSlide;