import { FileText, Search, Target } from "lucide-react";

const DoctoralTitleSlide = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        {/* Main Title */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Stabilirea nivelului de predicție pentru<br />
            <span className="text-blue-600">infecțiile asociate asistenței medicale (IAAM)</span>
          </h1>
          
          <div className="text-xl text-muted-foreground border-t border-border pt-6 mt-6">
            <strong className="text-blue-600">Proiect de cercetare doctorală</strong>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Analiză date clinice reale</h3>
            <p className="text-muted-foreground text-sm">
              Folosind foi de observație și analize existente din spitalele românești
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Testare modele predictive</h3>
            <p className="text-muted-foreground text-sm">
              Evaluarea diferitelor abordări pentru detectarea precoce
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Măsurare performanță efectivă</h3>
            <p className="text-muted-foreground text-sm">
              Determinarea acurateței reale în contextul medical românesc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctoralTitleSlide;