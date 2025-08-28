import { Shield, Database, Users, Settings, CheckCircle2, AlertTriangle } from "lucide-react";

const ValidationSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-4">
          Protocolul de Validare Clinică și Integrarea în Practica Medicală
        </h1>
        <p className="text-xl text-muted-foreground">
          Implementarea sistemului cu măsuri de siguranță și transparență
        </p>
      </div>

      {/* Validation Design */}
      <div className="bg-gradient-medical rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Design-ul Validării</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Studiu Pilot</h3>
            <p>Centre medicale selectate cu expertiză în controlul infecțiilor</p>
          </div>
          <div>
            <Database className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Control Istoric</h3>
            <p>Comparația cu practica standard anterioară implementării</p>
          </div>
          <div>
            <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Monitoring Prospectiv</h3>
            <p>Urmărirea outcome-urilor la 30 de zile post-implementare</p>
          </div>
        </div>
      </div>

      {/* Integrated Workflow */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-medical-blue">Workflow-ul Integrat în Practica Clinică</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-5 flex items-center space-x-4">
              <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold">Colectarea Automată</h4>
                <p className="text-sm text-muted-foreground">Extracția datelor din HIS în timp real</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5 flex items-center space-x-4">
              <div className="w-8 h-8 bg-medical-green rounded-lg flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold">Procesarea Rapidă</h4>
                <p className="text-sm text-muted-foreground">Analiză completă în &lt;5 minute</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5 flex items-center space-x-4">
              <div className="w-8 h-8 bg-medical-orange rounded-lg flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold">Alerta Medicală</h4>
                <p className="text-sm text-muted-foreground">Notificare personalizată pentru clinicieni</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-5 flex items-center space-x-4">
              <div className="w-8 h-8 bg-medical-red rounded-lg flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <h4 className="font-semibold">Validarea Obligatorie</h4>
                <p className="text-sm text-muted-foreground">Confirmarea medicului responsabil</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5 flex items-center space-x-4">
              <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center text-white font-bold text-sm">5</div>
              <div>
                <h4 className="font-semibold">Implementarea Măsurilor</h4>
                <p className="text-sm text-muted-foreground">Bundle-uri preventive aprobate</p>
              </div>
            </div>
            
            <div className="medical-card rounded-xl p-5 flex items-center space-x-4">
              <div className="w-8 h-8 bg-medical-green rounded-lg flex items-center justify-center text-white font-bold text-sm">6</div>
              <div>
                <h4 className="font-semibold">Monitorizarea Feedback</h4>
                <p className="text-sm text-muted-foreground">Urmărirea evolutiei și ajustări</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Measures */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-green flex items-center">
            <Shield className="w-6 h-6 mr-3" />
            Măsuri de Siguranță
          </h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-4 space-y-2">
              <h4 className="font-semibold text-medical-green">Validare Medicală Obligatorie</h4>
              <p className="text-sm text-muted-foreground">
                Toate recomandările sistemului necesită aprobarea explicită a clinicianului responsabil
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-4 space-y-2">
              <h4 className="font-semibold text-medical-blue">Audit Trail Complet</h4>
              <p className="text-sm text-muted-foreground">
                Înregistrarea detaliată a fiecărei decizii pentru transparență și responsabilitate
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-4 space-y-2">
              <h4 className="font-semibold text-medical-orange">Training Personalizat</h4>
              <p className="text-sm text-muted-foreground">
                Programul de instruire pentru personalul medical utilizator
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-4 space-y-2">
              <h4 className="font-semibold text-medical-red">Proceduri de Urgență</h4>
              <p className="text-sm text-muted-foreground">
                Protocoale clare pentru situații excepționale și bypass manual
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-medical-orange flex items-center">
            <Settings className="w-6 h-6 mr-3" />
            Considerații de Implementare
          </h2>
          
          <div className="space-y-4">
            <div className="medical-card rounded-xl p-4 space-y-2">
              <h4 className="font-semibold text-medical-blue">Integrarea cu HIS</h4>
              <p className="text-sm text-muted-foreground">
                Compatibilitate cu InfoWorld, Hipocrate și alte sisteme medicale românești
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-4 space-y-2">
              <h4 className="font-semibold text-medical-green">Securitate și GDPR</h4>
              <p className="text-sm text-muted-foreground">
                Criptare end-to-end, pseudonimizare, respectarea reglementărilor de protecție a datelor
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-4 space-y-2">
              <h4 className="font-semibold text-medical-orange">Scalabilitate</h4>
              <p className="text-sm text-muted-foreground">
                Arhitectură cloud-native pentru extinderea la nivel național
              </p>
            </div>
            
            <div className="medical-card rounded-xl p-4 space-y-2">
              <h4 className="font-semibold text-medical-red">Mentenanța Sistemului</h4>
              <p className="text-sm text-muted-foreground">
                Actualizări regulate, backup-uri, monitorizarea performanței
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="bg-card rounded-2xl p-8 shadow-card">
        <h2 className="text-2xl font-bold text-center mb-6">Cronograma de Implementare</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-blue rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              M1-3
            </div>
            <h4 className="font-semibold">Faza Pilot</h4>
            <p className="text-sm text-muted-foreground">
              Testarea în 2-3 centre selectate cu monitoring intensiv
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-green rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              M4-6
            </div>
            <h4 className="font-semibold">Evaluarea</h4>
            <p className="text-sm text-muted-foreground">
              Analiza rezultatelor și optimizarea algoritmilor
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-orange rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              M7-9
            </div>
            <h4 className="font-semibold">Extinderea</h4>
            <p className="text-sm text-muted-foreground">
              Implementarea în centre medicale suplimentare
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-medical-red rounded-xl flex items-center justify-center mx-auto text-white font-bold">
              M10-12
            </div>
            <h4 className="font-semibold">Scalarea</h4>
            <p className="text-sm text-muted-foreground">
              Implementarea la nivel național cu suport tehnic complet
            </p>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="medical-card rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <CheckCircle2 className="w-5 h-5 mr-2 text-medical-green" />
          Metrici de Succes pentru Validare
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <p><strong>Reducerea incidențelor IAAM:</strong> Ținta &gt;20%</p>
            <p><strong>Timpului de identificare:</strong> Îmbunătățire &gt;50%</p>
            <p><strong>Satisfacția utilizatorilor:</strong> Scor &gt;4/5</p>
          </div>
          <div className="space-y-2">
            <p><strong>Acuratețea predictiilor:</strong> AUROC &gt;0.85</p>
            <p><strong>Alarmele false:</strong> Reducere &lt;15%</p>
            <p><strong>Timp de răspuns sistem:</strong> &lt;5 secunde</p>
          </div>
          <div className="space-y-2">
            <p><strong>Adoptarea clinică:</strong> Utilizare &gt;80%</p>
            <p><strong>Integrarea HIS:</strong> &gt;95% uptime</p>
            <p><strong>Cost-eficiența:</strong> ROI pozitiv în 12 luni</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidationSlide;