import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cardData = [
  {
    title: '海量模版随选随用',
    desc: '业务人员 5 分钟自主搭建专属数据大屏。内置海量行业模版开箱即用。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  {
    title: '自然语言智绘大屏',
    desc: '内置AI智绘，通过自然对话的方式快速创建适合业务的大屏及报表。',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
  },
  {
    title: '告警态势实时弹窗',
    desc: '关键异常在大屏上自动弹窗预警，让指挥中心第一时间掌握突发状况，快速响应。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  },
  {
    title: '自动生成管理汇报',
    desc: '自动汇总运行数据生成合规报表，用数据说话，让周月报与审计工作轻松高效。',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop'
  },
  {
    title: '指挥中心统一叙事',
    desc: '将空间、设备、视频、告警融合在一张图上，为高层决策提供全面、统一的指挥视角。',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
  }
];

export default function Visualization() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff + cardData.length) % cardData.length + cardData.length) % cardData.length;
    
    let translateX = 0;
    let scale = 0.7;
    let opacity = 0.4;
    let zIndex = 0;

    if (normalizedDiff === 0) {
      translateX = 0;
      scale = 1;
      opacity = 1;
      zIndex = 10;
    } else if (normalizedDiff === 1) {
      translateX = 70;
      scale = 0.85;
      opacity = 0.7;
      zIndex = 5;
    } else if (normalizedDiff === cardData.length - 1) {
      translateX = -70;
      scale = 0.7;
      opacity = 0.3;
      zIndex = 1;
    } else if (normalizedDiff <= cardData.length / 2) {
      translateX = 140;
      scale = 0.7;
      opacity = 0;
      zIndex = 0;
    } else {
      translateX = -140;
      scale = 0.7;
      opacity = 0;
      zIndex = 0;
    }

    return { translateX, scale, opacity, zIndex };
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            一句话搭建 <span className="text-gradient">专属数据大屏</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            海量模板 + AI 智绘，业务人员也能轻松实现数据上屏
          </p>
        </div>

        <div
          className="relative h-[600px] md:h-[700px] flex items-center justify-center"
        >
          {cardData.map((card, index) => {
            const { translateX, scale, opacity, zIndex } = getCardStyle(index);
            
            return (
              <motion.div
                key={index}
                className="absolute w-[520px] md:w-[690px] h-[500px] md:h-[600px] bg-white rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                style={{
                  zIndex,
                  transform: `translateX(${translateX}%) scale(${scale})`,
                  opacity,
                  transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)'
                }}
                onClick={() => index === currentIndex + 1 || index === 0 ? handleNext() : handlePrev()}
              >
                <div className="flex flex-col h-full">
                  <div className="h-1/5 flex flex-col items-center justify-center p-6 bg-white">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 text-center">
                      {card.desc}
                    </p>
                  </div>
                  <div className="h-4/5 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}

          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {cardData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
