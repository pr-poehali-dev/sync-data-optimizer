import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const showcaseImages = [
  "https://cdn.poehali.dev/projects/19acf493-00c8-424d-a38a-c2da20f39f01/files/6d55d2c8-0352-49d9-b2e2-a197331419a2.jpg",
  "https://cdn.poehali.dev/projects/19acf493-00c8-424d-a38a-c2da20f39f01/files/518a9a4d-994e-475b-9fbf-6ace91d06f76.jpg",
  "https://cdn.poehali.dev/projects/19acf493-00c8-424d-a38a-c2da20f39f01/files/6277aa23-9115-4665-8e60-5c859930155d.jpg",
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80])

  const yValues = [y1, y2, y3]

  return (
    <section ref={containerRef} className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Галерея класса
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-serif text-foreground mb-16 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Мгновения, которые останутся навсегда.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {showcaseImages.map((src, i) => (
            <motion.div
              key={i}
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group"
              style={{ y: yValues[i] }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-clickable
            >
              <motion.img
                src={src}
                alt={`Фото класса ${i + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-serif text-lg">
                  {["Первый день", "Школьные будни", "Выпускной"][i]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}