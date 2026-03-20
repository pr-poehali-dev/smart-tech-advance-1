export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/4d16ab47-36b5-4420-80f2-a4d061567936/files/3e2c6619-ffb0-447e-ad95-ae4c96bdf214.jpg"
              alt="Государственное управление России"
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                «Полпреды — это глаза и руки президента в регионах, инструмент единства государственной власти.»
              </p>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-widest text-sage">О тренинге</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight text-balance">
              Зачем изучать институт полпредов
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Институт полномочных представителей президента — ключевой элемент вертикали власти в России.
                Понимание его работы необходимо каждому, кто изучает государственное управление и политическую систему страны.
              </p>
              <p>
                Тренинг объединяет теоретическую базу и практические кейсы. Студенты и преподаватели получат глубокое
                понимание механизмов координации между федеральным центром и регионами, актуальное для академической
                и профессиональной деятельности.
              </p>
            </div>
            <div className="pt-4">
              <a href="#features" className="inline-flex items-center gap-2 text-foreground group">
                <span className="border-b border-foreground pb-0.5">Программа тренинга</span>
                <span className="text-terracotta group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}