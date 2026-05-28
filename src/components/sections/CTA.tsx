import { motion } from 'framer-motion';
import { Rocket, Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative min-h-screen px-6 overflow-hidden flex items-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
              开启您的物联网之旅
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            超 350 家企业用户的共同选择，利用 JetLinks快速构建稳定、可靠、智能的物联网应用
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
              style={{ borderRadius: '45px' }}
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(249, 115, 22, 0.25)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="w-5 h-5" />
              立即开始
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              style={{ borderRadius: '45px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              联系我们
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
