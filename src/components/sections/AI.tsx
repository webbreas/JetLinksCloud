import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aiFeatures } from '@/data/content';

export default function AI() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedFeature = aiFeatures[selectedIndex];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            打造工业级 <span className="text-gradient">全链路AI引擎</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            从一句话生成业务系统，到训练自己的AI模型，AI 贯穿整个SaaS平台
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl shadow-blue-500/10 border border-gray-200 overflow-hidden"
        >
          <div className="grid lg:grid-cols-3 h-[720px]">
            <div className="lg:col-span-1 border-r border-gray-200 bg-gray-50/50 flex flex-col">
              {aiFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`flex-1 w-full px-6 py-6 cursor-pointer transition-all duration-300 flex items-center ${
                    selectedIndex === idx
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                      : 'hover:bg-gray-100'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 flex-shrink-0">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold text-lg ${
                        selectedIndex === idx ? 'text-white' : 'text-gray-900'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm mt-1 ${
                        selectedIndex === idx ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex h-full min-h-0 flex-col lg:col-span-2">
              <div
                className="grid min-h-0 flex-1"
                style={{ gridTemplateRows: '632px minmax(0,1fr)' }}
              >
                <div className="relative min-h-0 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedIndex}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={selectedFeature.image}
                        alt={selectedFeature.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="rounded-full bg-white/20 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                          {selectedFeature.title}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="relative min-h-0 overflow-y-auto border-t border-slate-200/70 bg-gradient-to-b from-slate-50/95 via-white to-blue-50/20 px-5 py-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] sm:px-6 sm:py-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedIndex}
                      className="-ml-[10px] flex items-start gap-3 sm:gap-4"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div
                        className="w-1 shrink-0 self-stretch rounded-full bg-gradient-to-b from-[#103EF3] via-blue-500 to-sky-400 shadow-sm shadow-blue-500/20 min-h-[1.25rem]"
                        aria-hidden
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-left text-[0.8125rem] leading-relaxed text-slate-600 sm:text-[0.9375rem] sm:leading-[1.65]">
                          {selectedFeature.detailText}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
