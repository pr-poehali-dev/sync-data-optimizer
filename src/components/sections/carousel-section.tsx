import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/19acf493-00c8-424d-a38a-c2da20f39f01/files/6d55d2c8-0352-49d9-b2e2-a197331419a2.jpg",
  "https://cdn.poehali.dev/projects/19acf493-00c8-424d-a38a-c2da20f39f01/files/518a9a4d-994e-475b-9fbf-6ace91d06f76.jpg",
  "https://cdn.poehali.dev/projects/19acf493-00c8-424d-a38a-c2da20f39f01/files/6277aa23-9115-4665-8e60-5c859930155d.jpg",
  "https://cdn.poehali.dev/projects/19acf493-00c8-424d-a38a-c2da20f39f01/files/6d55d2c8-0352-49d9-b2e2-a197331419a2.jpg",
  "https://cdn.poehali.dev/projects/19acf493-00c8-424d-a38a-c2da20f39f01/files/518a9a4d-994e-475b-9fbf-6ace91d06f76.jpg",
  "https://cdn.poehali.dev/projects/19acf493-00c8-424d-a38a-c2da20f39f01/files/6277aa23-9115-4665-8e60-5c859930155d.jpg",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Одноклассники. Друзья. Навсегда.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Пример портфолио ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}