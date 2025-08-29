import { Brain, Shield, Target } from "lucide-react";

const TitleSlide = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto space-y-8 animate-float-up">
        {/* Main Title */}
        <div className="space-y-4">
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-medical bg-clip-text text-transparent leading-tight">
            Predicția IAAM
            <br />
            cu Inteligență Artificială
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sistem AI avansat pentru predicția în timp real a infecțiilor asociate asistenței medicale
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="medical-card rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-medical-blue rounded-xl flex items-center justify-center mx-auto">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg">Machine Learning</h3>
            <p className="text-muted-foreground text-sm">
              Algoritmi avansați pentru recunoașterea tiparelor
            </p>
          </div>
          
          <div className="medical-card rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-medical-green rounded-xl flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg">Prevenție Activă</h3>
            <p className="text-muted-foreground text-sm">
              Măsuri preventive personalizate în timp real
            </p>
          </div>
          
          <div className="medical-card rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-medical-orange rounded-xl flex items-center justify-center mx-auto">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg">Precizie Ridicată</h3>
            <p className="text-muted-foreground text-sm">
              Sensibilitate &gt;85%, Specificitate &gt;80%
            </p>
          </div>
        </div>

        {/* Subtitle */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-lg text-muted-foreground">
            <strong className="text-medical-blue">Obiectiv:</strong> Reducerea incidenței IAAM cu <strong className="text-medical-green">&gt;20%</strong> prin 
            <strong className="text-medical-orange">predicție automată</strong> și <strong className="text-medical-blue">intervenție preventivă personalizată</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;