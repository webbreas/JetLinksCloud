import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { aiHero } from '@/data/aiDetail';

const ease = [0.22, 1, 0.36, 1] as const;

const barHeights = [42, 68, 55, 82, 48, 72, 38, 88, 52, 76, 44, 64, 58, 90, 46, 70, 50, 84, 40, 62, 56, 78, 36, 66];

function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-white via-white to-blue-50/90 p-5 shadow-[0_30px_80px_-20px_rgba(0,102,255,0.25)]"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute right-4 top-4 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-2 shadow-lg shadow-blue-500/10 backdrop-blur-sm"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        >
          <p className="text-[10px] font-medium text-[#86868B]">视觉识别</p>
          <p className="text-sm font-bold text-[#0066FF]">98.6%</p>
        </motion.div>

        <motion.div
          className="absolute bottom-16 left-3 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-2 shadow-lg shadow-blue-500/10 backdrop-blur-sm"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        >
          <p className="text-[10px] font-medium text-[#86868B]">大模型</p>
          <p className="text-sm font-bold text-[#0066FF]">在线</p>
        </motion.div>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-[#86868B]">AI 运营看板</p>
            <p className="text-lg font-bold text-[#1D1D1F]">实时概览</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
            运行中
          </span>
        </div>

        <motion.div
          className="mb-4 grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          {[
            { label: '接入设备', value: '12,480' },
            { label: '今日告警', value: '325' },
            { label: '模型调用', value: '82,716' },
          ].map((kpi) => (
            <motion.div
              key={kpi.label}
              className="rounded-xl bg-white/90 p-3 shadow-sm ring-1 ring-blue-100/60"
              whileHover={{ y: -2 }}
            >
              <p className="text-[10px] text-[#86868B]">{kpi.label}</p>
              <p className="mt-1 text-base font-bold text-[#1D1D1F]">{kpi.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="rounded-xl bg-white/70 p-3 ring-1 ring-blue-100/50">
          <p className="mb-2 text-xs font-medium text-[#86868B]">近 24 小时推理量</p>
          <motion.div
            className="flex h-24 items-end justify-between gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
          >
            {barHeights.map((h, i) => (
              <motion.div
                key={i}
                className="w-full rounded-t-sm bg-gradient-to-t from-[#0066FF] to-[#3399FF]"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.02, ease }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function AIHero() {
  return (
    <section className="relative overflow-x-clip overflow-y-visible bg-white pb-20 pt-32 lg:pb-28 lg:pt-36">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.10)_0%,transparent_70%)]"
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="w-full shrink-0 lg:w-[600px]">
          <motion.span
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0066FF]/15 bg-[#0066FF]/5 px-4 py-1.5 text-sm font-medium text-[#0066FF]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <Sparkles className="h-4 w-4" strokeWidth={2} aria-hidden />
            {aiHero.capsule}
          </motion.span>

          <motion.h1
            className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
          >
            <span className="text-[#1D1D1F]">能</span>
            <span className="text-[#0066FF]">看</span>
            <span className="text-[#1D1D1F]">、会</span>
            <span className="text-[#0066FF]">学</span>
            <span className="text-[#1D1D1F]">、懂你</span>
            <span className="text-[#0066FF]">业务</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-[17px] leading-[1.6] text-[#424245]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
          >
            {aiHero.description}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
          >
            <motion.a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-[#0066FF] px-8 py-3.5 text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgba(0,102,255,0.5)] transition-transform hover:-translate-y-0.5"
              whileTap={{ scale: 0.98 }}
              onClick={(e) => e.preventDefault()}
            >
              立即体验
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#0066FF] bg-transparent px-8 py-3.5 text-base font-semibold text-[#0066FF] transition-colors hover:bg-[#0066FF]/5"
              whileTap={{ scale: 0.98 }}
              onClick={(e) => e.preventDefault()}
            >
              联系我们
            </motion.a>
          </motion.div>
        </div>

        <motion.div className="w-full lg:translate-x-[200px]">
          <HeroDashboard />
        </motion.div>
      </motion.div>
    </section>
  );
}
