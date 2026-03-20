import { Check } from "lucide-react";

const plans = [
  {
    name: "Студент",
    price: "Бесплатно",
    description: "Для студентов и аспирантов по предъявлению студенческого билета",
    features: ["Доступ к лекциям", "Раздаточные материалы", "Тестирование по итогам", "Сертификат участника"],
    cta: "Записаться",
    highlighted: false,
  },
  {
    name: "Преподаватель",
    price: "2 500 ₽",
    period: "/чел",
    description: "Для педагогов и научных сотрудников вузов",
    features: [
      "Всё из формата Студент",
      "Методические разработки",
      "Кейсы для использования в курсах",
      "Доступ к записям тренинга",
      "Удостоверение о повышении квалификации",
      "Нетворкинг с коллегами",
    ],
    cta: "Записаться",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-amber mb-4 block">Форматы участия</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4 text-balance">
            Выберите свой формат
          </h2>
          <p className="text-muted-foreground text-lg">Для студентов — бесплатно. Для преподавателей — с методической поддержкой.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 rounded-2xl border ${
                plan.highlighted ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
              }`}
            >
              <h3 className={`text-xl mb-2 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-serif text-5xl tracking-tight">{plan.price}</span>
                {plan.period && (
                  <span className={plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p className={`mb-8 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={18} className="text-sage" />
                    <span className={plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3.5 rounded-full text-center transition-opacity duration-300 hover:opacity-90 ${
                  plan.highlighted ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}