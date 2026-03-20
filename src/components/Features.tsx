import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Landmark",
    title: "История института",
    description: "От создания в 2000 году до сегодняшнего дня: как менялась роль полпредов в системе власти России.",
  },
  {
    icon: "Scale",
    title: "Правовой статус",
    description: "Конституционные основы, указы президента и нормативная база, регулирующая деятельность полпредов.",
  },
  {
    icon: "Map",
    title: "Федеральные округа",
    description: "Структура восьми федеральных округов, особенности каждого региона и специфика работы полпредов.",
  },
  {
    icon: "Users",
    title: "Практические кейсы",
    description: "Реальные примеры координации между федеральным центром и регионами с разбором ключевых решений.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Программа</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Что вы изучите на тренинге
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-sage/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors duration-500">
                <Icon name={feature.icon} size={24} className="text-sage" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}