import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PageTransition } from "../animations/PageTransition";
import CustomCursor from "../components/CustomCursor";
import { ThemeProvider } from "../ThemeContext";
import Lenis from "lenis";
import { projects } from "../components/Projects";

function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return <>{children}</>;
}

function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)] flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4 text-[var(--theme-text-heading)]">Project not found</h2>
        <button onClick={() => navigate("/")} className="px-6 py-2 glass rounded-full border border-[var(--theme-border)]">Go Home</button>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <CustomCursor />
      <SmoothScroll>
        <PageTransition>
          <div className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]">
            <nav className="fixed top-0 w-full p-6 z-50 mix-blend-difference">
              <button onClick={() => navigate(-1)} className="text-white text-sm font-medium hover:opacity-70 transition-opacity uppercase tracking-widest">
                ← Back
              </button>
            </nav>
            
            <header className="h-[80vh] flex flex-col justify-end p-8 md:p-24 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--theme-bg)] z-10" />
              <div className="absolute inset-0 bg-[var(--theme-surface)] opacity-50 z-0" />
              
              <div className="relative z-20 max-w-4xl">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-[var(--theme-text-heading)]">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-4">
                  {project.tags.map(t => (
                    <span key={t} className="px-4 py-2 rounded-full border border-[var(--theme-border)] text-sm tracking-wider uppercase bg-[var(--theme-surface)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            <main className="max-w-4xl mx-auto p-8 md:p-24">
              <div className="mb-16 rounded-3xl overflow-hidden border border-[var(--theme-border)] shadow-2xl glass">
                <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
              </div>

              <section className="mb-16">
                <h2 className="text-3xl mb-8 text-[var(--theme-text-heading)] font-semibold">Overview</h2>
                <p className="text-xl leading-relaxed text-[var(--theme-text-muted)]">
                  {project.description}
                </p>
              </section>

              <section className="border-t border-[var(--theme-border)] py-16">
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-8 py-4 rounded-full glass text-[var(--theme-text-heading)] hover:bg-[var(--theme-surface-hover)] transition-all font-medium border border-[var(--theme-border)]"
                >
                  View Repository →
                </a>
              </section>
            </main>
          </div>
        </PageTransition>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default CaseStudy;
