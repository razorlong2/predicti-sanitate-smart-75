import { Lightbulb, Star, Globe, Trophy, Rocket, BookOpen } from "lucide-react";

const InnovationContributionSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Contribuția Originală și Inovația Științifică
        </h1>
        <p className="text-xl text-muted-foreground">
          Avansuri metodologice față de literatura existentă
        </p>
      </div>

      {/* Key Innovations */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Elemente de Noutate Științifică</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <Lightbulb className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Arhitectură Hibridă</h3>
            <p className="text-sm opacity-90">
              Prima implementare CNN-LSTM pentru IAAM în România
            </p>
          </div>
          <div>
            <Star className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Integrare Temporală</h3>
            <p className="text-sm opacity-90">
              Analiza tendințelor biomarkerilor în timp real
            </p>
          </div>
          <div>
            <Globe className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Adaptare Locală</h3>
            <p className="text-sm opacity-90">
              Calibrare pentru populația și practica românească
            </p>
          </div>
        </div>
      </div>

      {/* Scientific Contribution */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-blue">Contribuția la Cunoașterea Științifică</h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-lg mb-3 text-medical-blue flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Metodologic
              </h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Prima validare externă multicentricu în România pentru IAAM prediction</li>
                <li>• Dezvoltarea unei metodologii de features engineering specifică pentru date românești</li>
                <li>• Introducerea conceptului de "risc dinamic" cu actualizare în timp real</li>
                <li>• Adaptarea algoritmilor ML pentru sistemele HIS locale</li>
              </ul>
            </div>

            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-lg mb-3 text-medical-green flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                Clinic
              </h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Primul sistem de alertă precoce implementat în practica clinică românească</li>
                <li>• Identificarea pattern-urilor specifice de IAAM pentru populația României</li>
                <li>• Dezvoltarea protocoalelor de intervenție bazate pe niveluri de risc</li>
                <li>• Demonstrarea impactului clinic real în mediul spitalicesc românesc</li>
              </ul>
            </div>

            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-lg mb-3 text-medical-orange flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Tehnologic
              </h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Arhitectură scalabilă pentru implementarea la nivel național</li>
                <li>• Integrare seamless cu sisteme HIS existente în România</li>
                <li>• Algoritmi optimizați pentru resurse computaționale limitate</li>
                <li>• Dashboard interactiv personalizabil pentru fiecare secție medicală</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green">Poziționarea în Context Internațional</h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-lg mb-3 text-medical-red">Lacunele din Literatura Actuală</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
                  <p className="font-semibold text-medical-red">Problema identificată:</p>
                  <p>Majoritatea studiilor se concentrează pe sepsis general, nu pe IAAM specifice</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg">
                  <p className="font-semibold text-medical-orange">Limitare geografică:</p>
                  <p>Studiile sunt predominant din SUA, Marea Britanie, Germania - lipsesc date din Europa de Est</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg">
                  <p className="font-semibold text-medical-blue">Gap temporal:</p>
                  <p>Modelele existente nu integrează evoluția temporală a biomarkerilor</p>
                </div>
              </div>
            </div>

            <div className="medical-card rounded-xl p-5">
              <h4 className="font-semibold text-lg mb-3 text-medical-green">Soluția Propusă</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                  <p className="font-semibold text-medical-green">Specificitate IAAM:</p>
                  <p>Focus exclusiv pe infecțiile asociate asistenței medicale cu validare CDC</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg">
                  <p className="font-semibold text-medical-blue">Adaptare locală:</p>
                  <p>Calibrare pentru practica medicală și resursele disponibile în România</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg">
                  <p className="font-semibold text-purple-600">Inovație temporală:</p>
                  <p>Integrarea dinamicii biomarkerilor cu arhitectură LSTM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison with State-of-the-Art */}
      <div className="bg-card rounded-2xl p-8 shadow-card">
        <h2 className="text-2xl font-bold text-center mb-6">Comparația cu State-of-the-Art Internațional</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2">Studiu</th>
                <th className="text-left py-3 px-2">An</th>
                <th className="text-left py-3 px-2">Populație</th>
                <th className="text-left py-3 px-2">Metodă</th>
                <th className="text-left py-3 px-2">AUROC</th>
                <th className="text-left py-3 px-2">Limitări</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 px-2 font-semibold">Studiul Nostru</td>
                <td className="py-3 px-2">2024</td>
                <td className="py-3 px-2">România (15,000)</td>
                <td className="py-3 px-2">CNN-LSTM hibrid</td>
                <td className="py-3 px-2 font-bold text-medical-green">0.887</td>
                <td className="py-3 px-2 text-medical-green">Validare prospectivă</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="py-3 px-2">Meng et al.</td>
                <td className="py-3 px-2">2021</td>
                <td className="py-3 px-2">China (8,900)</td>
                <td className="py-3 px-2">Deep Learning</td>
                <td className="py-3 px-2">0.863</td>
                <td className="py-3 px-2">Doar sepsis, nu IAAM specific</td>
              </tr>
              <tr>
                <td className="py-3 px-2">Horng et al.</td>
                <td className="py-3 px-2">2017</td>
                <td className="py-3 px-2">Taiwan (5,400)</td>
                <td className="py-3 px-2">Random Forest</td>
                <td className="py-3 px-2">0.824</td>
                <td className="py-3 px-2">Doar VAP, validare retrospectivă</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="py-3 px-2">Scherpf et al.</td>
                <td className="py-3 px-2">2019</td>
                <td className="py-3 px-2">Germania (3,200)</td>
                <td className="py-3 px-2">Logistic Regression</td>
                <td className="py-3 px-2">0.798</td>
                <td className="py-3 px-2">Eșantion mic, o singură instituție</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Future Directions and Patent Potential */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="medical-card rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Rocket className="w-5 h-5 mr-2 text-medical-blue" />
            Direcții Viitoare de Cercetare
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <h4 className="font-semibold text-medical-green mb-2">Extinderi Metodologice</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Integrarea cu IoT și senzori medicali în timp real</li>
                <li>• Personalizarea algoritmului pe subpopulații specifice</li>
                <li>• Dezvoltarea modelelor pentru alte tipuri de infecții nosocomiale</li>
                <li>• Implementarea explicabilității AI pentru decizia clinică</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-medical-orange mb-2">Colaborări Internaționale</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Validare în alte țări din Europa de Est</li>
                <li>• Participarea la consorții europene de AI în sănătate</li>
                <li>• Dezvoltarea standardelor pentru IAAM prediction</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="medical-card rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Trophy className="w-5 h-5 mr-2 text-medical-green" />
            Potențialul de Transfer Tehnologic
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <h4 className="font-semibold text-medical-blue mb-2">Proprietate Intelectuală</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Patent pentru arhitectura hibridă CNN-LSTM în IAAM</li>
                <li>• Algoritm proprietar de features engineering</li>
                <li>• Metodologia de calibrare pentru HIS românești</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-medical-red mb-2">Comercializare</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Licențiere către producători de HIS</li>
                <li>• Dezvoltarea unui spin-off universitar</li>
                <li>• Implementarea în rețeaua spitalelor private</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-medical-green mb-2">Impact de Sănătate Publică</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Adoptarea în ghidurile naționale de control al infecțiilor</li>
                <li>• Integrarea în protocoalele INSP</li>
                <li>• Export către alte țări în dezvoltare</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Publications Strategy */}
      <div className="bg-gradient-medical rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold text-center mb-4">Strategia de Diseminare Științifică</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="text-center">
            <h4 className="font-semibold mb-2">Jurnale de Impact</h4>
            <ul className="space-y-1 opacity-90">
              <li>• Journal of Medical Internet Research (Q1)</li>
              <li>• Artificial Intelligence in Medicine (Q1)</li>
              <li>• BMC Medical Informatics (Q2)</li>
            </ul>
          </div>
          <div className="text-center">
            <h4 className="font-semibold mb-2">Conferințe Internaționale</h4>
            <ul className="space-y-1 opacity-90">
              <li>• MEDINFO 2025 (Sydney)</li>
              <li>• AMIA Annual Symposium</li>
              <li>• European Congress of Clinical Microbiology</li>
            </ul>
          </div>
          <div className="text-center">
            <h4 className="font-semibold mb-2">Impactul Estimat</h4>
            <ul className="space-y-1 opacity-90">
              <li>• 3-5 publicații în jurnale Q1-Q2</li>
              <li>• 50+ citări în primii 3 ani</li>
              <li>• H-index improvement pentru autori</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationContributionSlide;