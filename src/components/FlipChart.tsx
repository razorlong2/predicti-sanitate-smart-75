import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, FileText, Brain, Database, Activity, Target, GitBranch, Shield, TrendingUp, AlertTriangle, Award } from "lucide-react";
import TitleSlide from "./slides/TitleSlide";
import ArchitectureSlide from "./slides/ArchitectureSlide";
import DataFlowSlide from "./slides/DataFlowSlide";
import MLModelSlide from "./slides/MLModelSlide";
import NeuralNetworkVisualization from "./slides/NeuralNetworkVisualization";

const slides = [
  { id: 0, title: "Titlu", icon: FileText, component: TitleSlide },
  { id: 1, title: "Arhitectura Sistemului", icon: Database, component: ArchitectureSlide },
  { id: 2, title: "Fluxul de Date", icon: Activity, component: DataFlowSlide },
  { id: 3, title: "Modelul ML", icon: Brain, component: MLModelSlide },
  { id: 4, title: "Arhitectura Detaliată", icon: TrendingUp, component: () => <NeuralNetworkVisualization /> }
];

const FlipChart = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex flex-col">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-gradient-medical border-b border-white/20 shadow-medical">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {slides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-white/20 text-white shadow-lg"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="hidden md:inline-block text-sm font-medium">
                      {slide.title}
                    </span>
                  </button>
                );
              })}
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="text-white hover:bg-white/20 disabled:opacity-50"
              >
                <ChevronLeft size={20} />
              </Button>
              <span className="text-white/90 px-3 py-1 bg-white/10 rounded-full text-sm">
                {currentSlide + 1} / {slides.length}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="text-white hover:bg-white/20 disabled:opacity-50"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-8">
        <div className={`transition-all duration-500 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
          <CurrentSlideComponent />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>
              Proiect Doctoral - Predicția IAAM cu AI
            </div>
            <div className="flex items-center space-x-4">
              <span>Slide {currentSlide + 1} din {slides.length}</span>
              <div className="flex space-x-1">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FlipChart;