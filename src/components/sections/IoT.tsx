import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Map,
  LayoutDashboard,
  MessageSquareWarning,
  Building2,
  Activity,
  type LucideIcon,
} from 'lucide-react';
import { iotFeatures } from '@/data/content';

const tabIcons: LucideIcon[] = [
  Map,
  LayoutDashboard,
  MessageSquareWarning,
  Building2,
  Activity,
];

export default function IoT() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const selected = iotFeatures[selectedIndex];

  useEffect(() => {
    tabRefs.current[selectedIndex]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [selectedIndex]);

  return (
    <section className="relative py-32 px-6 overflow-x-clip bg-gradient-to-b from-teal-50 via-white to-teal-50">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            从十台到 <span className="text-gradient">千万台设备</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            一张地图、一屏掌控，按区域直观管理资产，让设备管理不再有盲区
          </p>
        </motion.div>

        <div className="mb-10 border-b border-gray-200">
          <div className="-mx-1 flex justify-center overflow-x-auto pb-px [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex shrink-0 gap-1">
              {iotFeatures.map((feature, idx) => {
                const Icon = tabIcons[idx];
                const isActive = selectedIndex === idx;
                return (
                  <button
                    key={feature.title}
                    type="button"
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    onClick={() => setSelectedIndex(idx)}
                    className={`flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors sm:text-base ${
                      isActive
                        ? 'border-teal-600 text-teal-700'
                        : 'border-transparent text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />
                    <span>{feature.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
              {selected.title}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-gray-600 md:text-lg">
              {selected.desc}
            </p>

            <div className="mt-10 h-[600px] w-full max-w-[1280px] shrink-0 overflow-hidden rounded-2xl bg-gray-100 shadow-lg ring-1 ring-black/5">
              <img
                src={selected.image}
                alt={selected.title}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
