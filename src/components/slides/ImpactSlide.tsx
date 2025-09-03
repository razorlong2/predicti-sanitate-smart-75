import { Heart, Stethoscope, Building2, CheckCircle } from "lucide-react";

const ImpactSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          De ce contează
        </h1>
        <p className="text-xl text-muted-foreground">
          Rezultate așteptate (realist)
        </p>
      </div>

      {/* Results Box */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">CE SPER SĂ OBȚIN:</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-blue-700">Un răspuns clar: "Da, putem prezice cu X% siguranță" <br />
                <span className="text-sm text-blue-600">(sau "Nu, datele sunt prea slabe")</span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-blue-700">Un set minim de parametri necesari <br />
                <span className="text-sm text-blue-600">(să nu cerem analize inutile)</span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-blue-700">Un prag rezonabil de alertă <br />
                <span className="text-sm text-blue-600">(nu prea sensibil, nu prea relaxat)</span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-blue-700">Dovada că merge în spitale românești <br />
                <span className="text-sm text-blue-600">(cu datele noastre, nu cu cele din articole)</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Areas */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Pentru pacienți */}
        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-lg font-bold text-center mb-4 text-red-600">PENTRU PACIENȚI:</h3>
          <div className="space-y-2 text-sm">
            <p>• Mai puține zile de suferință</p>
            <p>• Mai puține complicații</p>
            <p>• Externare mai rapidă</p>
          </div>
        </div>

        {/* Pentru medici */}
        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Stethoscope className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-bold text-center mb-4 text-green-600">PENTRU MEDICI:</h3>
          <div className="space-y-2 text-sm">
            <p>• Un tool în plus (nu înlocuire)</p>
            <p>• Alertă când chiar e nevoie</p>
            <p>• Mai puțină antibioterapie "în orb"</p>
          </div>
        </div>

        {/* Pentru sistem */}
        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-center mb-4 text-blue-600">PENTRU SISTEM:</h3>
          <div className="space-y-2 text-sm">
            <p>• Prima evaluare realistă din România</p>
            <p>• Bază pentru dezvoltări viitoare</p>
            <p>• Date concrete, nu estimări</p>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-8">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">8/8</span>
      </div>
    </div>
  );
};

export default ImpactSlide;