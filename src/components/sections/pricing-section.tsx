import { motion } from "framer-motion"

const students = [
  {
    name: "Иван Петров",
    role: "Капитан команды",
    emoji: "⚽",
    description: "Мечтает стать инженером. Любит футбол и программирование.",
    tags: ["Спорт", "Технологии", "Музыка"],
  },
  {
    name: "Анна Смирнова",
    role: "Отличница",
    emoji: "📚",
    description: "Планирует поступить на медицинский. Обожает читать и рисовать.",
    tags: ["Медицина", "Искусство", "Путешествия"],
    popular: true,
  },
  {
    name: "Максим Козлов",
    role: "Душа компании",
    emoji: "🎸",
    description: "Играет на гитаре и мечтает о своей группе. Всегда поднимает настроение.",
    tags: ["Музыка", "Кино", "Дружба"],
  },
]

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Наши ученики</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Познакомьтесь с классом</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">Каждый из нас — уникальная личность со своей историей и мечтой.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {students.map((student, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-xl p-8 ticket-edge ${student.popular ? "ring-2 ring-primary" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 0.98 }}
              data-clickable
            >
              {student.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime text-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Лучший ученик
                </span>
              )}

              <div className="text-center pb-6 border-b border-dashed border-border">
                <div className="text-6xl mb-4">{student.emoji}</div>
                <h3 className="font-serif text-xl text-foreground">{student.name}</h3>
                <p className="text-primary text-sm mt-1 font-medium">{student.role}</p>
                <p className="text-muted-foreground text-sm mt-3">{student.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {student.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs bg-secondary text-muted-foreground px-3 py-1 rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
