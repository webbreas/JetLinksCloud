import { motion } from 'framer-motion';
import 资质 from '@/assets/资质.png';
import 项目分布 from '@/assets/项目分布.png';

export default function Trust() {
  return (
    <section className="relative py-32 pb-5 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            从深耕到领航 <span className="text-gradient">以严苛成就卓越</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            7年深厚行业履历，严苛的交付流程，是对客户承诺的忠实守护
          </p>
        </motion.div>
      </div>

      <div className="space-y-0">
        <motion.img
          src={资质}
          alt="资质"
          className="w-full h-auto block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src={项目分布}
          alt="项目分布"
          className="w-full h-auto block -mt-px"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
    </section>
  );
}
