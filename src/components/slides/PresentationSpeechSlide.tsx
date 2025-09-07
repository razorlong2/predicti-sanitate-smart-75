import { FileText, Clock, Users, Target } from "lucide-react";

const PresentationSpeechSlide = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Discurs de Prezentare - Proiect Doctoral
        </h1>
        <p className="text-xl text-muted-foreground">
          Sistem Predictiv pentru Infecțiile Asociate Asistenței Medicale
        </p>
      </div>

      {/* Speech Content */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="medical-card rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-6 h-6 text-medical-blue" />
              <h3 className="text-xl font-bold">Introducere și Salutare</h3>
            </div>
            <div className="text-sm text-muted-foreground space-y-3">
              <p>
                <strong>Stimată doamnă Profesor [Nume],</strong> vă mulțumesc pentru timpul acordat acestei prezentări. 
                Astăzi vă voi expune conceptul inițial al proiectului meu doctoral, care vizează dezvoltarea unui 
                sistem inteligent pentru predicția precoce a infecțiilor asociate asistenței medicale în spitalele românești.
              </p>
            </div>
          </div>

          <div className="medical-card rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-6 h-6 text-medical-green" />
              <h3 className="text-xl font-bold">Context și Motivație</h3>
            </div>
            <div className="text-sm text-muted-foreground space-y-3">
              <p>
                Infecțiile nosocomiale reprezintă una dintre cele mai serioase provocări ale sistemului sanitar românesc. 
                Cu o incidență de >5% în spitalele noastre și costuri de peste €8,000 per caz, avem în față o problemă 
                care necesită soluții inovatoare, bazate pe evidențe științifice solide.
              </p>
            </div>
          </div>

          <div className="medical-card rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-medical-orange" />
              <h3 className="text-xl font-bold">Viziunea Proiectului</h3>
            </div>
            <div className="text-sm text-muted-foreground space-y-3">
              <p>
                Propun dezvoltarea primului sistem de predicție bazat pe inteligență artificială, 
                adaptat specific pentru realitățile sistemului sanitar românesc. Nu este doar o aplicare 
                tehnologică, ci o cercetare fundamentată metodologic, cu validare clinică riguroasă și 
                impact demonstrabil asupra sănătății publice.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="medical-card rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-medical-red" />
              <h3 className="text-xl font-bold">Originalitatea Științifică</h3>
            </div>
            <div className="text-sm text-muted-foreground space-y-3">
              <p>Contribuția noastră aduce trei elemente de noutate esențiale:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Primul</strong> - o arhitectură hibridă care integrează evoluția temporală a biomarkerilor</li>
                <li><strong>Al doilea</strong> - calibrarea specifică pentru populația românească și sistemele HIS locale</li>
                <li><strong>Al treilea</strong> - validarea prospectivă multicentricu cu un eșantion calculat rigoros</li>
              </ul>
            </div>
          </div>

          <div className="medical-card rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Rigor Metodologic</h3>
            <div className="text-sm text-muted-foreground space-y-3">
              <p>
                Proiectul se bazează pe standardele internaționale de cercetare clinică. Calculul mărimii 
                eșantionului pentru o putere statistică de >80% și detectarea unei reduceri semnificative 
                a incidenței IAAM demonstrează seriozitatea abordării noastre.
              </p>
            </div>
          </div>

          <div className="medical-card rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Impact și Sustenabilitate</h3>
            <div className="text-sm text-muted-foreground space-y-3">
              <p>
                Analiza cost-efectivitate demonstrează un ROI pozitiv în primul an, cu economii substanțiale 
                per spital. Mai important, sistemul va salva vieți prin detecția precoce, cu o sensibilitate 
                țintă de >85% și o specificitate de >80%.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Points */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Puncte Cheie ale Prezentării</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">8-10</div>
            <div className="text-sm text-white/80">minute prezentare</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-sm text-white/80">contribuții majore</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">15,000</div>
            <div className="text-sm text-white/80">pacienți în studiu</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">2025</div>
            <div className="text-sm text-white/80">implementare țintă</div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-card rounded-2xl p-8 shadow-card">
        <h2 className="text-2xl font-bold text-center mb-6">Cronologia Cercetării</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-blue rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              18
            </div>
            <h4 className="font-semibold">Primele 18 luni</h4>
            <p className="text-sm text-muted-foreground">
              Dezvoltarea algoritmilor și validarea preliminară
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-green rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              24
            </div>
            <h4 className="font-semibold">Următorii 24 luni</h4>
            <p className="text-sm text-muted-foreground">
              Validarea clinică multicentricu și optimizarea sistemului
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-orange rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              12
            </div>
            <h4 className="font-semibold">Ultimii 12 luni</h4>
            <p className="text-sm text-muted-foreground">
              Diseminarea rezultatelor și pregătirea implementării naționale
            </p>
          </div>
        </div>
      </div>

      {/* Final Message */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Mesajul Final</h2>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto">
          Stimată doamnă Profesor, acest proiect nu este doar o teză doctorală - este o contribuție 
          la îmbunătățirea sănătății publice românești prin științe exacte și inovație tehnologică. 
          Sunt conștient de responsabilitatea și complexitatea acestei întreprinderi și solicit 
          îndrumarea dumneavoastră pentru a transforma această viziune într-o realitate științifică 
          cu impact real asupra vieții pacienților români.
        </p>
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-8">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">11/11</span>
      </div>
    </div>
  );
};

export default PresentationSpeechSlide;