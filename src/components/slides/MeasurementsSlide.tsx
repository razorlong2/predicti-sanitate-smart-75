import { Target, Clock, AlertTriangle, Database } from "lucide-react";

const MeasurementsSlide = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Ce vreau să măsor
        </h1>
        <p className="text-xl text-muted-foreground">
          Întrebări simple la care vreau răspuns
        </p>
      </div>

      {/* Questions */}
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Question 1 */}
        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">1. Cât de corect putem prezice?</h3>
              <p className="text-muted-foreground text-lg">
                (60%? 70%? 80%? <strong>Habar n-am, vom vedea</strong>)
              </p>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-2">2. Cu cât timp înainte?</h3>
              <p className="text-muted-foreground text-lg">
                (24 ore? 48? O săptămână? <strong>Să vedem</strong>)
              </p>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-600 mb-2">3. Câte alarme false?</h3>
              <p className="text-muted-foreground text-lg">
                (Că dacă sună mereu, <strong>nu mai ascultă nimeni</strong>)
              </p>
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-600 mb-2">4. Ce date sunt esențiale?</h3>
              <p className="text-muted-foreground text-lg">
                (Poate <strong>nu trebuie 100 de parametri</strong>)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Emphasis Box */}
      <div className="max-w-2xl mx-auto mt-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
          <p className="text-xl font-semibold text-yellow-800">
            Sunt întrebări oneste - <br />
            <strong>nu știu încă răspunsurile</strong>
          </p>
          <p className="text-yellow-700 mt-2">
            Tocmai de aceea fac cercetarea
          </p>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center text-sm text-muted-foreground mt-8">
        <span className="bg-secondary/20 px-3 py-1 rounded-full">7/8</span>
      </div>
    </div>
  );
};

export default MeasurementsSlide;