import { AlertTriangle, HelpCircle, ArrowRight } from "lucide-react";

const ProblemSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Problema Reală
        </h1>
        <p className="text-xl text-muted-foreground">
          Ce știm și ce nu știm despre infecțiile nosocomiale
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Ce știm */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-600">CE ȘTIM:</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-foreground">În România, cam <strong>1 din 10 pacienți</strong> face o infecție nosocomială</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-foreground">Le detectăm <strong>târziu</strong> - după 3-4 zile când e deja gravă</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-foreground"><strong>Costă spitalul mult</strong> și pacientul suferă</p>
            </div>
          </div>
        </div>

        {/* Ce nu știm */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-red-600">CE NU ȘTIM:</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-foreground"><strong>Cât de devreme</strong> putem să le prevedem?</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-foreground">Cu <strong>ce date minime?</strong></p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-foreground"><strong>Cât de siguri</strong> putem fi?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-3 bg-blue-50 px-8 py-4 rounded-2xl">
          <ArrowRight className="w-6 h-6 text-blue-600" />
          <p className="text-xl font-semibold text-blue-600">
            Asta vreau să aflu
          </p>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-8">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">2/8</span>
      </div>
    </div>
  );
};

export default ProblemSlide;