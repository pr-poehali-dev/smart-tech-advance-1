export function Testimonial() {
  return (
    <section className="py-32 px-6 bg-sage/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-8 block">Отзывы</span>

        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight mb-10 text-balance">
          «Тренинг дал мне системное понимание того, как устроена власть в России. Теперь я вижу логику решений, которые раньше казались непонятными.»
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
            <img
              src="/placeholder-user.jpg"
              alt="Михаил Петров"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-foreground font-medium">Михаил Петров</p>
            <p className="text-sm text-muted-foreground">Студент 4 курса, факультет государственного управления</p>
          </div>
        </div>
      </div>
    </section>
  );
}