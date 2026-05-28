import { motion } from 'framer-motion';
import computerFrame from '@/assets/AI/LiaoJie/电脑框.png';
import introVideo from '@/assets/AI/video/人工智能.mp4';
import { aiProductIntro } from '@/data/aiDetail';

const ease = [0.22, 1, 0.36, 1] as const;

export default function AIProductIntro() {
  return (
    <section className="overflow-x-clip bg-[#F5F7FA] py-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          className="order-2 w-full shrink-0 lg:order-1 lg:w-[800px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="relative w-full lg:-translate-x-[200px]">
            <img
              src={computerFrame}
              alt=""
              className="relative z-[1] block w-full object-contain"
            />
            <video
              className="absolute left-[11px] top-[10px] z-[2] h-[448px] w-[778px] object-cover"
              src={introVideo}
              autoPlay
              loop
              muted
              playsInline
              aria-label="人工智能产品介绍视频"
            />
          </div>
        </motion.div>

        <motion.div
          className="order-1 w-full shrink-0 lg:order-2 lg:w-[600px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
        >
          <div className="lg:-translate-x-[150px] lg:-translate-y-[80px]">
            <h2 className="text-[28px] font-bold leading-tight text-[#1D1D1F] lg:text-[32px]">
              {aiProductIntro.title}
            </h2>
            <p className="mt-5 w-full text-[15px] leading-[1.75] text-[#424245] lg:mt-6 lg:text-[16px]">
              {aiProductIntro.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
