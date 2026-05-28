import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { FileText, Tag, ArrowRight, Zap, Server, ShieldCheck } from 'lucide-react';
import HeroFloatingBubbles from '@/components/sections/HeroFloatingBubbles';

const featureItems: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: '极速接入',
    desc: '多协议设备快速接入',
    icon: Zap,
  },
  {
    title: '稳定可靠',
    desc: '99.99% 高可用保障',
    icon: Server,
  },
  {
    title: '安全合规',
    desc: '多重防护 数据无忧',
    icon: ShieldCheck,
  },
];

export default function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] min-h-screen w-full overflow-x-clip overflow-y-visible bg-[#f5f7fb]">
      <div className="grid min-h-[100svh] min-h-screen w-full grid-cols-1 lg:grid-cols-2">
        <div className="flex min-h-[100svh] min-h-screen flex-col justify-center px-6 pb-16 pt-10 sm:px-10 sm:pb-20 sm:pt-12 lg:max-w-none lg:pl-14 lg:pr-8 xl:pl-20 xl:pr-12">
          <div className="w-full translate-x-[60px] translate-y-[40px]">
          <motion.h1
            className="text-left font-bold tracking-tight text-slate-900"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <span
              className="block text-slate-900"
              style={{ fontSize: 96, lineHeight: 1.05 }}
            >
              连接无界
            </span>
            <br />
            <span className="inline-block overflow-hidden align-top">
              <AnimatePresence mode="wait">
                <motion.span
                  key={isFlipped ? 'evolve' : 'reach'}
                  className="inline-block text-gradient leading-none"
                  style={{
                    fontSize: 96,
                    lineHeight: 1.05,
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
            className="mt-6 max-w-xl text-left text-[0.9375rem] leading-relaxed text-slate-600 sm:text-base lg:text-[1.0625rem] lg:leading-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
          >
            告别繁琐开发，提供全链路SaaS服务。按需订阅，零代码快速构建，
            <br />
            助力企业极速释放数据价值
          </motion.p>

          <motion.div
            className="mt-9 flex w-fit max-w-full flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45 }}
          >
            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-blue-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                立即体验
                <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.25} />
              </motion.button>
              <motion.button
                type="button"
                className="inline-flex w-[156px] shrink-0 items-center justify-center rounded-xl border-2 border-blue-500 bg-white py-3.5 text-base font-semibold text-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                联系我们
              </motion.button>
            </div>

            <motion.div
              className="flex w-full flex-wrap items-center justify-center gap-4 text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#"
                className="flex items-center gap-2 text-[0.9375rem] transition-opacity hover:opacity-70"
              >
                <FileText className="h-5 w-5 shrink-0 text-slate-500" />
                <span>查看文档</span>
              </a>
              <div className="hidden h-4 w-px bg-gray-300 sm:block" />
              <a
                href="#"
                className="flex items-center gap-2 text-[0.9375rem] transition-opacity hover:opacity-70"
              >
                <Tag className="h-5 w-5 shrink-0 text-slate-500" />
                <span>查看定价</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 grid max-w-2xl grid-cols-1 gap-8 border-t border-slate-200/80 pt-10 sm:grid-cols-3 sm:gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.75 }}
          >
            {featureItems.map((item) => {
              const FeatureIcon = item.icon;
              return (
                <div key={item.title} className="flex gap-3 text-left">
                  <FeatureIcon
                    className="h-10 w-10 shrink-0 text-[#103EF3] sm:h-11 sm:w-11"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <p className="text-[0.9375rem] font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-[0.8125rem] leading-snug text-slate-500">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
          </div>
        </div>

        <div className="relative hidden min-h-[100svh] bg-gradient-to-r from-transparent to-[rgba(30,134,255,0.05)] lg:flex lg:min-h-screen lg:items-center lg:justify-end lg:pr-6 xl:pr-10">
          <HeroFloatingBubbles />
        </div>
      </div>
    </section>
  );
}
