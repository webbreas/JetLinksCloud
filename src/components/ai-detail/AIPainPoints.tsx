import { Fragment } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Database,
  Target,
  Eye,
  BarChart3,
  User,
  Layers,
  ShieldCheck,
  PieChart,
  Frown,
  ChevronDown,
  Code2,
} from 'lucide-react';
import { aiPainSection } from '@/data/aiDetail';

const ease = [0.22, 1, 0.36, 1] as const;

const solutionIcons = [Rocket, Code2, Database, Target, Eye];
const valueIcons = [BarChart3, User, Layers, ShieldCheck, PieChart];

const rowStartClasses = [
  'lg:row-start-2',
  'lg:row-start-3',
  'lg:row-start-4',
  'lg:row-start-5',
  'lg:row-start-6',
] as const;

export default function AIPainPoints() {
  return (
    <section className="bg-white py-[120px]">
      <motion.div
        className="mx-auto max-w-[1200px] px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
      >
        <motion.div className="text-center">
          <h2 className="text-[36px] font-bold text-[#1D1D1F]">{aiPainSection.headline}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#424245]">
            {aiPainSection.subheadline}
          </p>
        </motion.div>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-6 w-1 rounded-full bg-[#0066FF]" aria-hidden />
            <h3 className="text-xl font-bold text-[#1D1D1F]">{aiPainSection.painTitle}</h3>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {aiPainSection.pains.map((pain, idx) => (
              <motion.div
                key={pain.num}
                className="flex flex-col rounded-2xl border border-gray-100 bg-[#F6F9FD] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease }}
              >
                <div className="mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0066FF] text-xs font-bold text-white">
                    {pain.num}
                  </span>
                </div>
                <div className="mx-auto mb-4 flex h-[88px] w-[88px] items-center justify-center">
                  <img
                    src={pain.image}
                    alt=""
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h4 className="text-base font-bold text-[#1D1D1F]">{pain.title}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#424245]">{pain.desc}</p>
                <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600">
                  <Frown className="h-3.5 w-3.5" aria-hidden />
                  {pain.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <div className="flex flex-col items-center gap-1 text-[#0066FF]">
            <ChevronDown className="h-6 w-6 animate-bounce" strokeWidth={2.5} aria-hidden />
            <ChevronDown className="-mt-3 h-6 w-6 animate-bounce opacity-60" strokeWidth={2.5} aria-hidden />
          </div>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h3 className="text-[32px] font-bold text-[#1D1D1F]">{aiPainSection.solutionHeadline}</h3>
          <p className="mx-auto mt-4 max-w-3xl text-base text-[#424245]">
            {aiPainSection.solutionSubheadline}
          </p>
        </motion.div>

        <motion.div
          className="mt-12 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_40px_rgba(0,102,255,0.08)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_72px_1fr]">
            <motion.div className="bg-[#0066FF] px-6 py-4 text-center text-base font-bold text-white lg:col-start-1 lg:row-start-1">
              我们的解决方案
            </motion.div>

            <div className="hidden flex-col items-center justify-center gap-2 bg-[#F5F7FA] px-3 lg:col-start-2 lg:row-start-1 lg:row-span-6 lg:flex">
              {Array.from({ length: 4 }).map((_, i) => (
                <ChevronDown
                  key={i}
                  className="h-5 w-5 rotate-[-90deg] text-[#0066FF]"
                  strokeWidth={2.5}
                  aria-hidden
                />
              ))}
              <span className="rounded-full bg-[#0066FF] px-4 py-2 text-sm font-bold text-white">
                实现
              </span>
              {Array.from({ length: 4 }).map((_, i) => (
                <ChevronDown
                  key={`r-${i}`}
                  className="h-5 w-5 rotate-[-90deg] text-[#0066FF]"
                  strokeWidth={2.5}
                  aria-hidden
                />
              ))}
            </div>

            <motion.div className="bg-[#0066FF] px-6 py-4 text-center text-base font-bold text-white lg:col-start-3 lg:row-start-1">
              为您带来的价值
            </motion.div>

            {aiPainSection.solutions.map((item, idx) => {
              const value = aiPainSection.values[idx];
              const SolutionIcon = solutionIcons[idx];
              const ValueIcon = valueIcons[idx];
              const rowStart = rowStartClasses[idx];

              return (
                <Fragment key={item.title}>
                  <div
                    className={`flex gap-4 border-gray-100 px-6 py-5 lg:col-start-1 lg:border-t ${rowStart} ${idx > 0 ? 'max-lg:border-t' : ''}`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                      <SolutionIcon className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-[#1D1D1F]">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#424245]">{item.desc}</p>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-4 border-gray-100 px-6 py-5 lg:col-start-3 lg:border-t ${rowStart} ${idx > 0 ? 'max-lg:border-t' : ''}`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF]">
                      <ValueIcon className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-[#1D1D1F]">{value.title}</p>
                      <p className="text-sm text-[#86868B]">{value.desc}</p>
                    </div>
                    <span className="shrink-0 text-2xl font-bold text-[#0066FF]">{value.metric}</span>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
