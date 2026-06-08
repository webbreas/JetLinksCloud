import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cctv,
  MonitorPlay,
  Film,
  Archive,
  Sparkles,
  ScanSearch,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { videoCapabilities, type VideoCapabilityIconKey } from '@/shared/data/content';
import videoCardBg from '@/assets/rgzn/sy-rgzn-bj04.png';
import videoIllustration from '@/assets/ShiLian/视联-插画01.png';

type VideoCapability = (typeof videoCapabilities)[number];

const SELECTED_ITEM_HEIGHT = 280;
const CARD_MIN_HEIGHT = 830;
const GRID_MIN_HEIGHT = 814;

const capabilityIconMap: Record<VideoCapabilityIconKey, LucideIcon> = {
  cctv: Cctv,
  monitorPlay: MonitorPlay,
  film: Film,
  archive: Archive,
  sparkles: Sparkles,
  scanSearch: ScanSearch,
};

function VideoListItem({
  item,
  isSelected,
  onSelect,
}: {
  item: VideoCapability;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const Icon = capabilityIconMap[item.icon];

  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`flex cursor-pointer flex-col transition-all duration-300 ${
        isSelected
          ? 'relative z-10 shrink-0 bg-white shadow-[0_-4px_12px_rgba(15,23,42,0.06),0_6px_16px_rgba(15,23,42,0.08)]'
          : 'min-h-0 flex-1 bg-white'
      }`}
      style={isSelected ? { height: SELECTED_ITEM_HEIGHT } : undefined}
    >
      {isSelected ? (
        <div className="flex h-full flex-col px-5 py-4 lg:px-6">
          <div className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100 lg:h-11 lg:w-11">
            <Icon
              className="h-5 w-5 text-[#1677ff] lg:h-[1.375rem] lg:w-[1.375rem]"
              strokeWidth={1.75}
              aria-hidden
            />
          </div>
          <h3 className="shrink-0 text-lg font-bold text-gray-900 lg:text-xl">{item.title}</h3>
          <p className="mt-2 min-h-0 flex-1 text-sm leading-relaxed text-slate-500 lg:text-[0.875rem] lg:leading-[1.6]">
            {item.desc}
          </p>
          <button
            type="button"
            className="mt-3 inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg border border-gray-200 bg-white px-4 py-2 text-base font-medium leading-none text-gray-900 transition-colors hover:border-[#1677ff] hover:text-[#1677ff]"
          >
            查看文档
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
          </button>
        </div>
      ) : (
        <div className="flex h-full min-h-0 items-center gap-4 overflow-hidden px-5 lg:px-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-100 lg:h-11 lg:w-11">
            <Icon
              className="h-5 w-5 text-[#1677ff] lg:h-[1.375rem] lg:w-[1.375rem]"
              strokeWidth={1.75}
              aria-hidden
            />
          </div>
          <div className="min-w-0 flex-1 overflow-hidden">
            <h3 className="text-sm font-bold text-gray-900 lg:text-base">{item.title}</h3>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Video() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-6 py-[calc(8rem+50px)]">
      <div className="relative z-10 mx-auto max-w-[calc(80rem+200px)]">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            会说话的 <span className="text-gradient">视频中台</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            告警秒级回溯，AI 自动打包证据，让视频从此不再是死档案
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat p-2"
          style={{ backgroundImage: `url(${videoCardBg})`, minHeight: CARD_MIN_HEIGHT }}
        >
          <div
            className="flex flex-col gap-4 lg:grid lg:grid-cols-[558px_1fr] lg:grid-rows-[auto_1fr] lg:gap-x-6 lg:gap-y-4"
            style={{ minHeight: GRID_MIN_HEIGHT }}
          >
            <div className="px-2 pt-2 text-left lg:col-start-1 lg:row-start-1 lg:px-3 lg:pt-3">
              <p className="mb-1 text-base font-medium text-gray-500">视联平台</p>
              <h3 className="text-2xl font-bold leading-snug text-gray-900 lg:text-3xl">
                视频融合智能，洞察更多价值
              </h3>
            </div>
            <div className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm lg:col-start-1 lg:row-start-2">
              <div className="flex h-full flex-col">
                {videoCapabilities.map((item, idx) => (
                  <VideoListItem
                    key={item.title}
                    item={item}
                    isSelected={selectedIndex === idx}
                    onSelect={() => setSelectedIndex(idx)}
                  />
                ))}
              </div>
            </div>

            <div className="relative flex h-full min-h-[240px] items-center justify-center px-2 lg:col-start-2 lg:row-start-2 lg:min-h-0">
              <motion.img
                src={videoIllustration}
                alt="视联能力架构插画"
                className="max-h-full w-full max-w-full object-contain"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
