import { FileText, Users, Calendar, Shield, Database, CheckCircle2 } from "lucide-react";

const MethodologySlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Design-ul Studiului și Metodologia
        </h1>
        <p className="text-xl text-muted-foreground">
          Abordare observațională prospectivă cu validare externă
        </p>
      </div>

      {/* Study Design */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <FileText className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Tip Studiu</h3>
            <p>Observațional, prospectiv</p>
          </div>
          <div>
            <Database className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Setting</h3>
            <p>Centre medicale universitare</p>
          </div>
          <div>
            <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Validare</h3>
            <p>Externă multicentricu</p>
          </div>
        </div>
      </div>

      {/* Inclusion Criteria */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-blue flex items-center">
            <Users className="w-6 h-6 mr-3" />
            Criterii de Includere
          </h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-4 flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-medical-blue" />
              <div>
                <h4 className="font-semibold">Durata internării</h4>
                <p className="text-sm text-muted-foreground">&gt;48 ore pentru definirea IAAM</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-4 flex items-center space-x-3">
              <Users className="w-5 h-5 text-medical-green" />
              <div>
                <h4 className="font-semibold">Vârsta pacienților</h4>
                <p className="text-sm text-muted-foreground">&gt;18 ani (populația adultă)</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-4 flex items-center space-x-3">
              <FileText className="w-5 h-5 text-medical-orange" />
              <div>
                <h4 className="font-semibold">Documentația medicală</h4>
                <p className="text-sm text-muted-foreground">Completă și accesibilă pentru analiză</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green flex items-center">
            <Database className="w-6 h-6 mr-3" />
            Variabile Colectate
          </h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-blue mb-2">Demografice</h4>
              <p className="text-sm text-muted-foreground">Vârstă, sex, IMC, comorbidități</p>
            </div>
            
            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-green mb-2">Clinice</h4>
              <p className="text-sm text-muted-foreground">Biomarkeri inflamatori, scoruri prognostice</p>
            </div>
            
            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-orange mb-2">Expunerea</h4>
              <p className="text-sm text-muted-foreground">Dispozitive medicale, antibioterapie</p>
            </div>
            
            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-red mb-2">Outcome</h4>
              <p className="text-sm text-muted-foreground">Dezvoltarea IAAM conform CDC</p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Variables Detail */}
      <div className="bg-card rounded-2xl p-8 shadow-card">
        <h2 className="text-2xl font-bold text-center mb-6">Specificarea Variabilelor de Studiu</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-blue rounded-xl flex items-center justify-center mx-auto">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold">Demographics</h4>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• Vârstă (ani)</p>
              <p>• Sex (M/F)</p>
              <p>• IMC (kg/m²)</p>
              <p>• Indexul Charlson</p>
            </div>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-green rounded-xl flex items-center justify-center mx-auto">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold">Biomarkeri</h4>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• CRP (mg/L)</p>
              <p>• Procalcitonina</p>
              <p>• Leucocite</p>
              <p>• Temperatura</p>
            </div>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-orange rounded-xl flex items-center justify-center mx-auto">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold">Proceduri</h4>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• Cateter venos central</p>
              <p>• Cateter urinar</p>
              <p>• Ventilația mecanică</p>
              <p>• Intervenții chirurgicale</p>
            </div>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-red rounded-xl flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold">Outcomes</h4>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• CAUTI</p>
              <p>• VAP</p>
              <p>• CLABSI</p>
              <p>• SSI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ethical Considerations */}
      <div className="medical-card rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="w-6 h-6 text-medical-green" />
          <h3 className="text-xl font-bold">Considerații Etice</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
          <div>
            <p><strong>Aprobare etică:</strong> Comitet de etică al instituțiilor participante</p>
            <p><strong>Consimțământ informat:</strong> Conform legislației în vigoare</p>
          </div>
          <div>
            <p><strong>Confidențialitatea:</strong> Pseudonimizarea datelor pacienților</p>
            <p><strong>Securitatea:</strong> Protocoale de protecție a datelor medicale</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologySlide;