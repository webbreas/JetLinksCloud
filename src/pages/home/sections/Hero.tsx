import { useState, useEffect, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Phone, Waypoints, ChartPie, Cpu, ShieldCheck } from 'lucide-react';
import heroBg from '@/assets/首屏背景2_4K.png';

const featureItems: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: '海量设备接入', desc: '稳定可靠', icon: Waypoints },
  { title: '实时数据分析', desc: '洞察业务', icon: ChartPie },
  { title: 'AI 智能应用', desc: '预测与优化', icon: Cpu },
  { title: '安全合规保障', desc: '企业级防护', icon: ShieldCheck },
];

/** 首屏文案水平偏移（负值向左，单位 px） */
const HERO_CONTENT_OFFSET_X = 130;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function HeroContent({ isFlipped }: { isFlipped: boolean }) {
  return (
    <div className="flex w-full min-w-0 flex-col">
      <motion.h1
        className="text-left font-bold tracking-tight text-slate-900"
        {...fadeUp}
        transition={{ duration: 0.75, delay: 0.15 }}
      >
        <span className="block text-[clamp(3rem,7vw,6rem)] leading-[1.05] text-slate-900">
          连接无界
        </span>
        <span className="mt-1 block overflow-hidden text-[clamp(3rem,7vw,6rem)] leading-[1.05]">
          <AnimatePresence mode="wait">
            <motion.span
              key={isFlipped ? 'evolve' : 'reach'}
              className="inline-block text-gradient"
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: 90, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {isFlipped ? '智慧进化' : '触手可及'}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-xl text-left text-lg leading-8 text-slate-600 lg:text-xl"
        {...fadeUp}
        transition={{ duration: 0.75, delay: 0.3 }}
      >
        告别繁琐开发，提供全链路 SaaS 服务。按需订阅，零代码快速构建，助力企业极速释放数据价值
      </motion.p>

      <motion.div
        className="mt-8"
        {...fadeUp}
        transition={{ duration: 0.75, delay: 0.45 }}
      >
        <div className="flex flex-nowrap items-center gap-4">
          <motion.button
            type="button"
            className="inline-flex h-[68px] shrink-0 items-center gap-2 rounded-[40px] bg-[#1677ff] px-10 text-[22px] font-bold text-white transition-colors hover:bg-[#4096ff] active:bg-[#0958d9]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            立即开始
            <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2} />
          </motion.button>
          <motion.button
            type="button"
            className="border-gradient-brand inline-flex h-[68px] shrink-0 items-center gap-2 rounded-[40px] px-10 text-[22px] font-medium text-[rgba(0,0,0,0.88)] transition-opacity hover:opacity-90 active:opacity-80"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="h-5 w-5 shrink-0 text-gray-900" strokeWidth={2} aria-hidden />
            联系我们
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="mt-12 flex w-fit max-w-full items-stretch"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.6 }}
      >
        {featureItems.map((item, index) => {
          const FeatureIcon = item.icon;
          return (
            <Fragment key={item.title}>
              {index > 0 && (
                <div className="w-px shrink-0 self-stretch bg-slate-300/70" aria-hidden />
              )}
              <div className="flex shrink-0 flex-col items-center px-5 text-center sm:px-8">
                <FeatureIcon
                  className="h-11 w-11 shrink-0 text-[#1677ff]"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="mt-4 whitespace-nowrap text-base font-semibold leading-snug text-slate-900">
                  {item.title}
                </p>
                <p className="mt-1.5 whitespace-nowrap text-sm leading-snug text-slate-500">
                  {item.desc}
                </p>
              </div>
            </Fragment>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[100svh] min-h-screen w-full overflow-x-clip overflow-y-visible bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="flex min-h-[100svh] min-h-screen w-full flex-col justify-center px-6 pb-16 pt-24 sm:pb-20 sm:pt-28">
        <div className="mx-auto w-full md:grid md:grid-cols-[1fr_min(100%,80rem)_1fr]">
          <div className="md:col-span-2">
            <div
              className="max-w-4xl"
              style={{ transform: `translateX(${HERO_CONTENT_OFFSET_X}px)` }}
            >
              <HeroContent isFlipped={isFlipped} />
            </div>
          </div>
          <div className="hidden md:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}
