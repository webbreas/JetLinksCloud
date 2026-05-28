import { motion } from 'framer-motion';
import { advantages } from '@/data/content';
import { Zap, Brain, Shield } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Brain,
  Shield,
};

const colorClasses: Record<string, { border: string; glow: string; icon: string; gradient: string; iconBg: string }> = {
  cyan: {
    border: 'border-blue-200',
    glow: 'shadow-blue-500/10',
    icon: 'text-blue-600',
    gradient: 'from-blue-50/50 to-transparent',
    iconBg: 'bg-blue-100',
  },
  purple: {
    border: 'border-indigo-200',
    glow: 'shadow-indigo-500/10',
    icon: 'text-indigo-600',
    gradient: 'from-indigo-50/50 to-transparent',
    iconBg: 'bg-indigo-100',
  },
  green: {
    border: 'border-teal-200',
    glow: 'shadow-teal-500/10',
    icon: 'text-teal-600',
    gradient: 'from-teal-50/50 to-transparent',
    iconBg: 'bg-teal-100',
  },
};

export default function Advantages() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            全新的 <span className="text-gradient">SaaS交付体验</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => {
            const Icon = iconMap[adv.icon] || Zap;
            const colors = colorClasses[adv.color];

            return (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 102, 255, 0.15)' }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${colors.gradient} border ${colors.border} backdrop-blur-sm hover:shadow-xl ${colors.glow} transition-all duration-300 bg-white`}
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-6 ${colors.icon}`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={32} />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {adv.title}
                </h3>

                <div className="space-y-4">
                  {adv.features.map((feature, fIdx) => (
                    <motion.div
                      key={fIdx}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.2 + fIdx * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-medium mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className={`absolute -bottom-1 -right-1 w-32 h-32 bg-gradient-to-br ${colors.gradient} blur-3xl opacity-50`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
