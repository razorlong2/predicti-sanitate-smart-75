import { AlertTriangle, TrendingUp, Shield, Heart, Zap, Activity } from "lucide-react";

const ClinicalCasesSlide = () => {
  const cases = [
    {
      id: 1,
      title: "BACTERIEMIE CATETER VENOS CENTRAL",
      subtitle: "Pacientă 67 ani, cancer pancreatic, port-a-cath chimioterapie",
      icon: Activity,
      color: "from-red-500 to-red-700",
      borderColor: "border-red-200",
      bgColor: "bg-red-50",
      evolution: [
        { day: "Ziua 0", event: "Chimio administrată, leucocite 3200", risk: "15%" },
        { day: "Ziua 2", event: "Subfebrilitate 37.8°C seara", risk: "28%" },
        { day: "Ziua 3", event: "Frisoane, CRP 85, PCT 2.1", risk: "52%" },
        { day: "Ziua 4", event: "Hipotensiune, PCT 12", risk: "78%", alert: true },
        { day: "Ziua 5", event: "Hemoculturi: S. epidermidis", risk: "CONFIRMAT" }
      ],
      outcome: "✓ Vancomicină la 75% ar fi prevenit sepsisul"
    },
    {
      id: 2,
      title: "INFECȚIE URINARĂ - SONDĂ VEZICALĂ",
      subtitle: "Bărbat 74 ani, AVC, sondă Foley 7 zile",
      icon: Shield,
      color: "from-blue-500 to-blue-700",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50",
      evolution: [
        { day: "Ziua 5", event: "Urină tulbure", risk: "31%" },
        { day: "Ziua 6", event: "Leucociturie 50-100/câmp", risk: "48%" },
        { day: "Ziua 7", event: "Febră 38.3°C, urină fetidă", risk: "72%", alert: true },
        { day: "Ziua 8", event: "Proteus mirabilis >10^5 UFC/ml", risk: "CONFIRMAT" }
      ],
      outcome: "✓ Schimbare sondă la 70% previne urosepsis"
    },
    {
      id: 3,
      title: "INFECȚIE PLAGĂ CHIRURGICALĂ",
      subtitle: "Femeie 62 ani, bypass gastric, obezitate morbidă",
      icon: AlertTriangle,
      color: "from-orange-500 to-orange-700",
      borderColor: "border-orange-200",
      bgColor: "bg-orange-50",
      evolution: [
        { day: "Ziua 3", event: "Durere locală crescută", risk: "24%" },
        { day: "Ziua 4", event: "Eritem 3cm periincizional", risk: "45%" },
        { day: "Ziua 5", event: "Secreție seroasă, CRP 156", risk: "68%", alert: true },
        { day: "Ziua 6", event: "Dehiscență, E.coli + Enterococcus", risk: "CONFIRMAT" }
      ],
      outcome: "✓ Antibioterapie la 65% evită reintervenție"
    },
    {
      id: 4,
      title: "PNEUMONIE VENTILATOR - PRECOCE",
      subtitle: "Bărbat 52 ani, politraumă, intubare ziua 2",
      icon: Heart,
      color: "from-green-500 to-green-700",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
      evolution: [
        { day: "Ziua 3", event: "Secreții albe moderate", risk: "22%" },
        { day: "Ziua 4", event: "Infiltrat Rx bazal drept", risk: "51%" },
        { day: "Ziua 5", event: "Febră 38.8°C, leucocite 16000", risk: "74%", alert: true },
        { day: "Ziua 6", event: "H. influenzae în aspirat", risk: "CONFIRMAT" }
      ],
      outcome: "✓ Kineto intensivă la 50% reduce VAP cu 40%"
    },
    {
      id: 5,
      title: "PNEUMONIE VENTILATOR - TARDIVĂ",
      subtitle: "Femeie 48 ani, ARDS post-COVID, IOT 14 zile",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-700",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50",
      evolution: [
        { day: "Ziua 12", event: "PaO2/FiO2 scade", risk: "35%" },
        { day: "Ziua 13", event: "Secreții verzui abundente", risk: "61%" },
        { day: "Ziua 14", event: "Instabilitate hemodinamică", risk: "83%", alert: true },
        { day: "Ziua 15", event: "Acinetobacter baumanii XDR", risk: "CONFIRMAT" }
      ],
      outcome: "✓ Colistin la 80% reduce mortalitate 65%→35%"
    },
    {
      id: 6,
      title: "INFECȚIE CATETER HEMODIALIZĂ",
      subtitle: "Bărbat 58 ani, IRC, cateter Mahurkar femural",
      icon: Zap,
      color: "from-pink-500 to-pink-700",
      borderColor: "border-pink-200",
      bgColor: "bg-pink-50",
      evolution: [
        { day: "Ziua 4", event: "Eritem la inserție", risk: "33%" },
        { day: "Ziua 5", event: "Subfebră intradialitic", risk: "57%" },
        { day: "Ziua 6", event: "Frisoane severe", risk: "81%", alert: true },
        { day: "Ziua 7", event: "MRSA în hemoculturi", risk: "CONFIRMAT" }
      ],
      outcome: "✓ Înlocuire cateter la 75% obligatorie"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Cazuri Clinice Realiste
        </h1>
        <p className="text-xl text-muted-foreground">
          Demonstrația practică a algoritmului de predicție IAAM
        </p>
      </div>

      {/* Cases Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((case_item, index) => {
          const IconComponent = case_item.icon;
          
          return (
            <div 
              key={case_item.id} 
              className={`${case_item.bgColor} rounded-2xl p-6 border-2 ${case_item.borderColor} hover-scale animate-fade-in transition-all duration-300 hover:shadow-lg`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Case Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${case_item.color} rounded-xl flex items-center justify-center shadow-lg glow-pulse`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{case_item.title}</h3>
                  <p className="text-sm text-gray-600">{case_item.subtitle}</p>
                </div>
              </div>

              {/* Evolution Timeline */}
              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-bold text-gray-700 mb-2">EVOLUȚIE CLINICĂ:</h4>
                {case_item.evolution.map((step, stepIndex) => (
                  <div 
                    key={stepIndex} 
                    className={`flex items-center justify-between p-2 rounded-lg transition-all duration-300 ${
                      step.alert 
                        ? 'bg-red-100 border border-red-300 animate-pulse' 
                        : 'bg-white/70'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-gray-600">{step.day}:</span>
                        <span className="text-xs text-gray-700">{step.event}</span>
                      </div>
                    </div>
                    <div className={`text-xs font-bold px-2 py-1 rounded ${
                      step.risk === 'CONFIRMAT' 
                        ? 'bg-red-600 text-white' 
                        : step.alert
                        ? 'bg-orange-500 text-white'
                        : 'bg-blue-500 text-white'
                    }`}>
                      {step.risk === 'CONFIRMAT' ? 'CONFIRMAT' : `MODEL: ${step.risk}`}
                      {step.alert && step.risk !== 'CONFIRMAT' && (
                        <span className="ml-1 animate-ping">🚨</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Outcome */}
              <div className="bg-green-100 border border-green-300 rounded-lg p-3">
                <p className="text-sm font-semibold text-green-800">{case_item.outcome}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Statistics */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 border border-blue-200 animate-fade-in" style={{animationDelay: '0.8s'}}>
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-gray-800">Rezultate Demonstrative</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/70 rounded-lg p-3">
              <div className="text-2xl font-bold text-green-600 mb-2">>80%</div>
              <div className="text-gray-700">Acuratețe țintă</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <div className="text-2xl font-bold text-blue-600 mb-2">24-48h</div>
              <div className="text-gray-700">Timp mediu alertă precoce</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <div className="text-2xl font-bold text-orange-600 mb-2">>50%</div>
              <div className="text-gray-700">Reducere costuri țintă</div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-8">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">5/8</span>
      </div>
    </div>
  );
};

export default ClinicalCasesSlide;