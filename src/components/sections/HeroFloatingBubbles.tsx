import { useId } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Activity } from 'lucide-react';
import heroIllustration from '@/assets/shouping/首屏图片.png';

const DEVICE_TOTAL = 21798;

function MiniFakeLineChart({ variant }: { variant: 'a' | 'b' }) {
  const uid = useId().replace(/:/g, '');
  const gradId = `hero-mini-fill-${variant}-${uid}`;
  const pointsA = '0,34 12,28 24,30 38,20 52,24 68,14 82,18 100,10';
  const pointsB = '0,30 14,26 30,18 44,22 58,12 72,16 88,8 100,14';
  const points = variant === 'a' ? pointsA : pointsB;
  const fillPoints = `0,40 ${points} 100,40`;

  return (
    <svg
      viewBox="0 0 100 40"
      className="h-12 w-[5.5rem] shrink-0"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={fillPoints} fill={`url(#${gradId})`} />
      <polyline
        points={points}
        fill="none"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

const breath = {
  scale: [1, 1.018, 1],
  opacity: [1, 0.96, 1],
};

const breathTransition = {
  duration: 3.2,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

export default function HeroFloatingBubbles() {
  return (
    <div className="relative z-20 inline-block max-w-full">
      <img
        src={heroIllustration}
        alt=""
        className="relative z-0 block max-h-[min(92svh,920px)] w-auto max-w-full origin-right -translate-y-[10px] scale-110 object-contain object-right"
      />

      {/* 外层只做定位：top 用百分比相对「主图包裹层」高度；不要用 max(0,8%-Npx) 否则 8% 远小于 N 时会被钳成 0，上移无效 */}
      <div className="pointer-events-none absolute right-[2%] top-[calc(8%-80px)] z-20 w-[min(252px,39.6vw)]">
        <motion.div
          className="rounded-2xl border border-gray-100/80 bg-white p-4 shadow-lg shadow-gray-400/15"
          animate={breath}
          transition={{ ...breathTransition, delay: 0 }}
        >
          <div className="mb-3 flex items-center gap-2">
            <LayoutGrid className="h-5 w-5 shrink-0 text-blue-600" strokeWidth={2} />
            <span className="text-sm font-bold text-gray-900">设备总数</span>
          </div>
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-2xl font-bold leading-none text-gray-900">
                {DEVICE_TOTAL.toLocaleString('zh-CN')}
                <span className="ml-1 text-base font-semibold text-gray-600">台</span>
              </p>
              <p className="mt-2 text-xs text-gray-500">在线设备实时统计</p>
            </div>
            <div className="relative flex shrink-0 flex-col items-end">
              <MiniFakeLineChart variant="a" />
              <span className="absolute bottom-0 right-0 text-[10px] font-semibold text-emerald-600">
                +12.5%
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-[calc(10%-40px)] right-[calc(7%+180px)] z-20 w-[min(270px,41.4vw)]">
        <motion.div
          className="rounded-2xl border border-gray-100/80 bg-white p-4 shadow-lg shadow-gray-400/15"
          animate={breath}
          transition={{ ...breathTransition, delay: 0.55 }}
        >
          <div className="mb-3 flex items-center gap-2">
            <Activity className="h-5 w-5 shrink-0 text-emerald-600" strokeWidth={2} />
            <span className="text-sm font-bold text-gray-900">处理情况</span>
          </div>
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-2xl font-bold leading-none text-blue-600">
                {(8192304).toLocaleString('zh-CN')}
              </p>
              <p className="mt-2 text-xs text-gray-500">今日累计处理消息量</p>
            </div>
            <div className="relative flex shrink-0 flex-col items-end">
              <MiniFakeLineChart variant="b" />
              <span className="absolute bottom-0 right-0 text-[10px] font-semibold text-emerald-600">
                +12.5%
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
