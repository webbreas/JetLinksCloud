import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scenarios } from '@/data/content';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function SaaSFeatures() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const groupedScenarios = [];
  for (let i = 0; i < scenarios.length; i += 3) {
    groupedScenarios.push(scenarios.slice(i, i + 3));
  }

  const CARD_HEIGHT = 280;

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            场景预置 <span className="text-gradient">开箱即用</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            像订阅APP一样简单，预置违停、摔倒、吸烟等场景，按需订阅快速组合
          </p>
        </motion.div>

        <div className="space-y-6">
          {groupedScenarios.map((group, groupIdx) => (
            <div key={groupIdx} className="flex gap-6" style={{ height: CARD_HEIGHT }}>
              {group.map((scenario, idx) => {
                const isExpanded = expandedId === scenario.id;
                const hasExpandedInGroup = group.some(s => expandedId === s.id);
                
                let flexGrow = 1;
                if (isExpanded) {
                  flexGrow = 2;
                } else if (hasExpandedInGroup) {
                  flexGrow = 0.5;
                }

                return (
                  <motion.div
                    key={scenario.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                    style={{ height: CARD_HEIGHT }}
                    animate={{ 
                      flex: flexGrow,
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <AnimatePresence mode="wait">
                      {isExpanded ? (
                        <motion.div
                          key={`expanded-${scenario.id}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex h-full"
                        >
                          <div className="w-1/2 p-6 bg-white flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-4">
                              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                              <span className="text-xs text-blue-600 uppercase tracking-wider">
                                AI 视觉
                              </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {scenario.title}
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                              {scenario.desc}
                            </p>

                            <motion.button
                              onClick={() => handleExpand(scenario.id)}
                              className="self-start w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ChevronLeft className="w-5 h-5 text-gray-600" />
                            </motion.button>
                          </div>

                          <div className="w-1/2 relative h-full overflow-hidden">
                            <img
                              src={scenario.image}
                              alt={scenario.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
                            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
                            <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent z-10" />
                            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent z-10" />
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`collapsed-${scenario.id}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="relative h-full"
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

                          <img
                            src={scenario.image}
                            alt={scenario.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />

                          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                                <span className="text-xs text-blue-300 uppercase tracking-wider">
                                  AI 视觉
                                </span>
                              </div>

                              <motion.button
                                onClick={() => handleExpand(scenario.id)}
                                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors z-30"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ChevronRight className="w-5 h-5 text-white" />
                              </motion.button>
                            </div>

                            <h3 className="text-xl font-bold text-white">
                              {scenario.title}
                            </h3>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
