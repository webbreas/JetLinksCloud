import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { aiCoreFeatures } from '@/data/aiDetail';

const ease = [0.22, 1, 0.36, 1] as const;

export default function AICoreFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = aiCoreFeatures[activeIndex];

  return (
    <section className="bg-[#F5F7FA] py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="text-[36px] font-bold text-[#1D1D1F]">核心能力</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#424245]">
            从智能体到模型训练，覆盖 AI 落地全链路
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          {aiCoreFeatures.map((tab, idx) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeIndex === idx
                  ? 'bg-[#0066FF] text-white shadow-[0_4px_16px_rgba(0,102,255,0.35)]'
                  : 'border border-gray-200 bg-white text-[#424245] hover:border-[#0066FF]/30 hover:text-[#0066FF]'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease }}
          >
            <div>
              <h3 className="text-[28px] font-bold text-[#1D1D1F]">{active.title}</h3>
              <p className="mt-3 text-lg text-[#424245]">{active.subtitle}</p>
              <ul className="mt-8 space-y-4">
                {active.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-[#424245]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0066FF]/10 text-[#0066FF]">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-white to-blue-50 shadow-[0_20px_60px_rgba(0,102,255,0.12)] ring-1 ring-blue-100/80">
              <img src={active.image} alt="" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0066FF]/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
