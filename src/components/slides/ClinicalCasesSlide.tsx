import { AlertTriangle, Heart, Thermometer, Activity, Droplets, Shield } from "lucide-react";

const ClinicalCasesSlide = () => {
  const cases = [
    {
      id: 1,
      title: "BACTERIEMIE ASOCIATĂ CATETERULUI VENOS CENTRAL",
      icon: Heart,
      color: "bg-red-500",
      patient: "Femeie 67 ani, chimioterapie pentru neoplasm pancreatic",
      timeline: [
        { day: 0, event: "Port-a-cath funcțional, chimio administrată", risk: null },
        { day: 2, event: "Temp 37.8°C", risk: "28%" },
        { day: 3, event: "Frisoane, CRP 85 mg/L", risk: "52%" },
        { day: 4, event: "Hipotensiune, PCT 12 ng/ml", risk: "78%" },
        { day: 5, event: "Hemoculturi: S. epidermidis", risk: null }
      ],
      conclusion: "La risc >75% → Vancomicină empirică ar fi prevenit sepsis"
    },
    {
      id: 2,
      title: "INFECȚIE URINARĂ - SONDĂ VEZICALĂ",
      icon: Droplets,
      color: "bg-blue-500",
      patient: "Bărbat 74 ani, AVC, sondă Foley 7 zile",
      timeline: [
        { day: 5, event: "Urină tulbure", risk: "31%" },
        { day: 6, event: "Leucociturie masivă", risk: "48%" },
        { day: 7, event: "Febră 38.3°C", risk: "72%" },
        { day: 8, event: "Urocultură: Proteus >10^5 UFC/ml", risk: null }
      ],
      conclusion: "Schimbare sondă la risc >70% previne urosepsis"
    },
    {
      id: 3,
      title: "INFECȚIE PLAGĂ CHIRURGICALĂ PROFUNDĂ",
      icon: Shield,
      color: "bg-orange-500",
      patient: "Femeie 62 ani, bypass gastric, obezitate morbidă",
      timeline: [
        { day: 3, event: "Durere locală crescută", risk: "24%" },
        { day: 4, event: "Eritem periincizional", risk: "45%" },
        { day: 5, event: "Secreție seroasă", risk: "68%" },
        { day: 6, event: "Dehiscență + puroi → Cultură: E.coli", risk: null }
      ],
      conclusion: "Antibioterapie la risc >65% evită reintervenție"
    },
    {
      id: 4,
      title: "PNEUMONIE ASOCIATĂ VENTILAȚIEI - PRECOCE",
      icon: Activity,
      color: "bg-green-500",
      patient: "Bărbat 52 ani, politraumă, intubare ziua 2",
      timeline: [
        { day: 3, event: "Secreții claire", risk: "22%" },
        { day: 4, event: "Infiltrat Rx", risk: "51%" },
        { day: 5, event: "Leucocite 16000, febră", risk: "74%" },
        { day: 6, event: "Aspirat: H. influenzae", risk: null }
      ],
      conclusion: "Kineto intensivă la risc >50% reduce VAP"
    },
    {
      id: 5,
      title: "PNEUMONIE ASOCIATĂ VENTILAȚIEI - TARDIVĂ",
      icon: AlertTriangle,
      color: "bg-purple-500",
      patient: "Femeie 48 ani, ARDS post-COVID, IOT 14 zile",
      timeline: [
        { day: 12, event: "Oxigenare scade", risk: "35%" },
        { day: 13, event: "Secreții verzui", risk: "61%" },
        { day: 14, event: "Instabilitate", risk: "83%" },
        { day: 15, event: "BAL: Acinetobacter MDR", risk: null }
      ],
      conclusion: "Colistin precoce la risc >80% salvează vieți"
    },
    {
      id: 6,
      title: "INFECȚIE ASOCIATĂ DIALIZEI",
      icon: Thermometer,
      color: "bg-indigo-500",
      patient: "Bărbat 58 ani, hemodializă, cateter femural",
      timeline: [
        { day: 4, event: "Eritem la inserție", risk: "33%" },
        { day: 5, event: "Febră intradialitică", risk: "57%" },
        { day: 6, event: "Frisoane severe", risk: "81%" },
        { day: 7, event: "Hemoculturi: MRSA", risk: null }
      ],
      conclusion: "Înlocuire cateter la risc >75% obligatorie"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-2">
          Cazuri Clinice Realiste
        </h1>
        <p className="text-lg text-muted-foreground">
          Testarea modelului pe scenarii din practica clinică
        </p>
      </div>

      {/* Cases Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {cases.map((case_item) => {
          const Icon = case_item.icon;
          return (
            <div key={case_item.id} className="medical-card rounded-xl p-4 space-y-3">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-8 h-8 ${case_item.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-sm text-primary">{case_item.title}</h3>
              </div>
              
              <p className="text-xs font-medium text-muted-foreground mb-3">
                {case_item.patient}
              </p>

              <div className="space-y-2">
                {case_item.timeline.map((event, index) => (
                  <div key={index} className="flex items-center justify-between text-xs">
                    <span className="flex-1">
                      <span className="font-medium">Ziua {event.day}:</span> {event.event}
                    </span>
                    {event.risk && (
                      <span className={`ml-2 px-2 py-1 rounded-full font-bold ${
                        parseInt(event.risk) > 70 ? 'bg-red-100 text-red-700' :
                        parseInt(event.risk) > 50 ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {event.risk}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-2 mt-3">
                <p className="text-xs text-green-700 font-medium">
                  ✓ {case_item.conclusion}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-4">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">5/6</span>
      </div>
    </div>
  );
};

export default ClinicalCasesSlide;