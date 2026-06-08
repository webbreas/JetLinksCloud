import { motion } from 'framer-motion';
import { Rocket, Phone, ArrowRight } from 'lucide-react';
import ctaBg from '@/assets/用户引导-地球云朵.png';

export default function CTA() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center bg-no-repeat px-6 sm:px-10 lg:px-14 xl:px-20"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="relative z-10 w-full max-w-4xl text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            想进一步了解产品或解决方案
          </h2>

          <p className="mb-12 max-w-2xl text-xl text-white">
            欢迎咨询，我们将一对一为您提供服务方案
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <motion.button
              type="button"
              className="flex w-full items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 px-10 py-5 text-lg font-semibold text-white transition-all hover:shadow-xl hover:shadow-orange-500/25 sm:w-auto"
              style={{ borderRadius: '45px' }}
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(249, 115, 22, 0.25)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="h-5 w-5" />
              立即开始
              <ArrowRight className="h-5 w-5" />
            </motion.button>

            <motion.button
              type="button"
              className="flex w-full items-center justify-center gap-2 border-2 border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
              style={{ borderRadius: '45px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5" />
              联系我们
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
