import { AlertTriangle, Shield, Scale, Clock, Database, Users } from "lucide-react";

const LimitationsSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Limitări Metodologice și Aspecte Critice
        </h1>
        <p className="text-xl text-muted-foreground">
          Transparența privind constrângerile sistemului și măsurile de atenuare
        </p>
      </div>

      {/* Identified Limitations */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-red flex items-center">
            <AlertTriangle className="w-6 h-6 mr-3" />
            Limitări Identificate
          </h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-5 border-l-4 border-medical-red">
              <h4 className="font-semibold text-medical-red mb-2">Dependența de Calitatea Datelor</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Performanța sistemului este direct proporțională cu completitudinea și acuratețea documentației medicale.
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Documentare incompletă poate genera predicții eronate</p>
                <p>• Variabilitatea în stilurile de documentare</p>
                <p>• Dependența de sistemele informatice existente</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5 border-l-4 border-medical-orange">
              <h4 className="font-semibold text-medical-orange mb-2">Variabilitatea Inter-Instituțională</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Diferențele în practicile medicale și resursele disponibile între instituții.
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Protocoale clinice diferite</p>
                <p>• Resurse diagnostice variabile</p>
                <p>• Politici de antibioterapie distincte</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5 border-l-4 border-medical-blue">
              <h4 className="font-semibold text-medical-blue mb-2">Necesitatea Actualizării Periodice</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Modelul necesită reantrenare regulată pentru menținerea acurateței.
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Schimbări în rezistența antimicrobiană</p>
                <p>• Evoluția practicilor clinice</p>
                <p>• Apariția patogenilor noi</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5 border-l-4 border-medical-green">
              <h4 className="font-semibold text-medical-green mb-2">Interpretabilitatea Limitată</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Complexitatea interacțiunilor între multiple variabile clinice.
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Interacțiuni non-liniare complexe</p>
                <p>• Efecte de confundare multiple</p>
                <p>• Cauzalitatea vs. corelația</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green flex items-center">
            <Shield className="w-6 h-6 mr-3" />
            Măsuri de Atenuare
          </h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-5 border-l-4 border-medical-green">
              <h4 className="font-semibold text-medical-green mb-2">Standardizarea Proceselor</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Implementarea protocoalelor standardizate de colectare și documentare.
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Template-uri standardizate pentru documentare</p>
                <p>• Training pentru personalul medical</p>
                <p>• Proceduri de validare a datelor</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5 border-l-4 border-medical-blue">
              <h4 className="font-semibold text-medical-blue mb-2">Calibrarea Locală</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Adaptarea modelului pentru specificul fiecărei instituții medicale.
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Fine-tuning pe datele locale</p>
                <p>• Validarea în contextul specific</p>
                <p>• Ajustarea threshold-urilor de decizie</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5 border-l-4 border-medical-orange">
              <h4 className="font-semibold text-medical-orange mb-2">Monitorizarea Continuă</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Urmărirea performanței sistemului în timp real și alertarea la degradări.
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Dashboard-uri de monitoring</p>
                <p>• Alertă automată la scăderea performanței</p>
                <p>• Rapoarte periodice de evaluare</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5 border-l-4 border-medical-red">
              <h4 className="font-semibold text-medical-red mb-2">Explicabilitatea Îmbunătățită</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Dezvoltarea metodelor avansate pentru interpretarea deciziilor AI.
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• SHAP values pentru transparență</p>
                <p>• Vizualizări intuitive pentru clinicieni</p>
                <p>• Documentația deciziilor complexe</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ethical Considerations */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Considerații Etice</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center space-y-4">
            <Users className="w-12 h-12 mx-auto" />
            <h3 className="font-bold">Autonomia Medicală</h3>
            <p className="text-sm text-white/80">
              Sistemul funcționează ca suport decizional, nu înlocuitor al judecății clinice
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <Shield className="w-12 h-12 mx-auto" />
            <h3 className="font-bold">Transparența</h3>
            <p className="text-sm text-white/80">
              Comunicarea clară a limitărilor și incertitudinilor către utilizatori
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <Scale className="w-12 h-12 mx-auto" />
            <h3 className="font-bold">Echitatea</h3>
            <p className="text-sm text-white/80">
              Accesul echitabil la tehnologie independent de resursele instituției
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <Database className="w-12 h-12 mx-auto" />
            <h3 className="font-bold">Protecția Datelor</h3>
            <p className="text-sm text-white/80">
              Conformitatea strictă cu GDPR și reglementările medicale
            </p>
          </div>
        </div>
      </div>

      {/* Sustainability Aspects */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-orange flex items-center">
            <Clock className="w-6 h-6 mr-3" />
            Aspecte de Sustenabilitate
          </h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-red mb-2">Costuri de Dezvoltare și Mentenanță</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Investiție inițială în infrastructura IT</p>
                <p>• Costuri recurente pentru cloud și licențe</p>
                <p>• Personal specializat pentru mentenanță</p>
                <p>• Training continuu al utilizatorilor</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-blue mb-2">Necesarul de Expertiză Tehnică</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Data scientists pentru optimizare</p>
                <p>• Ingineri software pentru întreținere</p>
                <p>• Specialiști în securitatea datelor</p>
                <p>• Suport tehnic 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-blue flex items-center">
            <TrendingUp className="w-6 h-6 mr-3" />
            Adaptarea la Schimbări
          </h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-green mb-2">Evoluția Practicii Medicale</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Noi ghiduri clinice și protocoale</p>
                <p>• Tehnologii medicale emergente</p>
                <p>• Modificări în epidemiologia locală</p>
                <p>• Schimbări în structura populației</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-4">
              <h4 className="font-semibold text-medical-orange mb-2">Flexibilitatea Sistemului</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Arhitectură modulară pentru adaptări</p>
                <p>• API-uri pentru integrări noi</p>
                <p>• Configurabilitate per instituție</p>
                <p>• Extensibilitate pentru noi tipuri IAAM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Management */}
      <div className="medical-card rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-medical-red" />
          Managementul Riscurilor și Măsuri Preventive
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <p><strong>Riscuri tehnice:</strong> Backup redundant, monitoring continuu</p>
            <p><strong>Riscuri clinice:</strong> Validare medicală obligatorie</p>
            <p><strong>Riscuri legale:</strong> Conformitate GDPR, audit trail</p>
          </div>
          <div className="space-y-2">
            <p><strong>Riscuri operaționale:</strong> Proceduri de urgență, support 24/7</p>
            <p><strong>Riscuri financiare:</strong> Model de cost predictibil</p>
            <p><strong>Riscuri reputaționale:</strong> Transparență, comunicare proactivă</p>
          </div>
          <div className="space-y-2">
            <p><strong>Plan de contingență:</strong> Funcționare în mod degradat</p>
            <p><strong>Actualizări de securitate:</strong> Patch management automat</strong></p>
            <p><strong>Business continuity:</strong> Planuri de recuperare în caz de dezastru</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitationsSlide;