import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Search, ChevronDown, LayoutGrid, Volume2, PictureInPicture2, Maximize2 } from 'lucide-react';
import baimoImg from '@/assets/白模-白底.png';
import cameraIcon from '@/assets/摄像头.png';
import iconShishi from '@/assets/ShiLian/实时画面.png';
import iconPreview from '@/assets/ShiLian/实时预览.png';
import iconYuyi from '@/assets/ShiLian/语义联想.png';
import iconGuidang from '@/assets/ShiLian/归档.png';
import iconDitu from '@/assets/ShiLian/地图类_地图.png';

interface CameraData {
  id: number;
  position: { top: string; left: string };
  alignRight: boolean;
}

const cameraData: CameraData[] = [
  { id: 1, position: { top: '20%', left: '15%' }, alignRight: true },
  { id: 2, position: { top: '35%', left: '75%' }, alignRight: false },
  { id: 3, position: { top: '55%', left: '20%' }, alignRight: true },
  { id: 4, position: { top: '45%', left: '50%' }, alignRight: true },
  { id: 5, position: { top: '70%', left: '70%' }, alignRight: false },
];

function parsePct(v: string) {
  return parseFloat(v.replace('%', '')) || 0;
}

/** 白模上从左到右：left → top → id，决定气泡内容 feature 序号 0～4 */
const cameraContentRankById: Record<number, number> = (() => {
  const sorted = [...cameraData].sort((a, b) => {
    const dl = parsePct(a.position.left) - parsePct(b.position.left);
    if (dl !== 0) return dl;
    const dt = parsePct(a.position.top) - parsePct(b.position.top);
    if (dt !== 0) return dt;
    return a.id - b.id;
  });
  const map: Record<number, number> = {};
  sorted.forEach((c, idx) => {
    map[c.id] = idx;
  });
  return map;
})();

function getCameraContentRank(camera: CameraData) {
  return cameraContentRankById[camera.id] ?? 0;
}

const features = [
  {
    id: 0,
    title: '实时画面展示',
    headerImage: iconShishi,
    description: '支持1/4/9布局看实时画面、看边缘回放，还可选择不同视频源保存监控墙。',
  },
  {
    id: 1,
    title: '实时预览/回放',
    headerImage: iconPreview,
    description: '支持实时预览和历史回放功能，拖动进度条快速定位关键片段。',
  },
  {
    id: 2,
    title: '语义搜索画面',
    headerImage: iconYuyi,
    description: '无需人工盯着屏幕，直接告诉系统查找特定画面，AI自动为您打包证据。',
  },
  {
    id: 3,
    title: '图片归档留存',
    headerImage: iconGuidang,
    description: '重要证据自动分类存储，轻松应对合规审计与事后追责。',
  },
  {
    id: 4,
    title: '地图查看摄像头',
    headerImage: iconDitu,
    description: '在地图上直观查看所有摄像头位置，快速定位目标区域设备。',
  },
];

const thumbOffice =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=225&fit=crop';
const thumbHall =
  'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=200&h=120&fit=crop';

function useViewportNarrow(breakpoint: number) {
  const [narrow, setNarrow] = useState(
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false,
  );
  useEffect(() => {
    const onResize = () => setNarrow(window.innerWidth < breakpoint);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);
  return narrow;
}

function BubbleContent({ featureId }: { featureId: number }) {
  switch (featureId) {
    case 0:
      return (
        <div className="space-y-4">
          <p className="text-xs text-gray-500">1 / 4 / 9 屏切换</p>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600"
            >
              1
            </button>
            <button
              type="button"
              className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm"
            >
              4
            </button>
            <button
              type="button"
              className="flex flex-1 items-center justify-center rounded-lg bg-gray-100 py-2 text-gray-600"
            >
              <LayoutGrid className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`relative aspect-video overflow-hidden rounded-lg bg-gray-200 ${
                  i === 0 ? 'ring-2 ring-blue-500 ring-offset-1' : ''
                }`}
              >
                <img
                  src={i % 2 === 0 ? thumbHall : thumbOffice}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/15">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-blue-600 shadow">
                    <Play className="h-5 w-5 fill-current" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 1:
      return (
        <div className="space-y-3">
          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              type="button"
              className="flex-1 rounded-md border-b-2 border-blue-500 bg-white py-2 text-center text-sm font-medium text-blue-600 shadow-sm"
            >
              实时预览
            </button>
            <button
              type="button"
              className="flex-1 rounded-md py-2 text-center text-sm text-gray-500"
            >
              回放
            </button>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-900">
            <img src={thumbOffice} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-center gap-2 border-t border-gray-100 pt-2 text-xs text-gray-500">
            <button
              type="button"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white"
            >
              <Play className="h-4 w-4 fill-current" />
            </button>
            <span className="shrink-0 tabular-nums">10:20:15</span>
            <div className="mx-1 h-1 flex-1 rounded-full bg-gray-200">
              <div className="h-full w-2/5 rounded-full bg-blue-500" />
            </div>
            <Volume2 className="h-4 w-4 shrink-0 text-gray-400" />
            <PictureInPicture2 className="h-4 w-4 shrink-0 text-gray-400" />
            <Maximize2 className="h-4 w-4 shrink-0 text-gray-400" />
          </div>
        </div>
      );
    case 2:
      return (
        <div className="space-y-4">
          <div className="relative">
            <div className="w-full rounded-lg border border-blue-400 bg-white py-2.5 pl-3 pr-10 text-left text-sm text-gray-600">
              搜索：穿黑色外套的人
            </div>
            <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-500" />
          </div>
          <div className="flex gap-2">
            {[
              { label: '10:21:18' },
              { label: '09:42:33' },
              { label: '昨天 18:07' },
            ].map((item, i) => (
              <div key={i} className="min-w-0 flex-1">
                <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-200">
                  <img src={thumbOffice} alt="" className="h-full w-full object-cover" />
                </div>
                <p className="mt-1 text-center text-xs text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
          <button type="button" className="text-sm font-medium text-blue-600">
            查看更多结果 &gt;
          </button>
        </div>
      );
    case 3:
      return (
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h4 className="text-base font-bold text-gray-900">大厅区域归档</h4>
            <span className="shrink-0 rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">
              已归档
            </span>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500">归档时间</dt>
              <dd className="text-right text-gray-800">2024-05-20 00:00 - 23:59</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500">内容</dt>
              <dd className="text-right text-gray-800">276 个文件 (120 GB)</dd>
            </div>
          </dl>
          <div className="flex gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="relative h-14 flex-1 overflow-hidden rounded-md bg-gray-200">
                <img src={thumbHall} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <button type="button" className="text-sm font-medium text-blue-600">
            查看归档 &gt;
          </button>
        </div>
      );
    case 4:
      return (
        <div className="space-y-3">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-left text-sm text-gray-800"
          >
            一楼平面图
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="absolute inset-4 rounded-lg border border-gray-200/80 bg-white/60" />
            <div className="absolute left-[42%] top-[38%] flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/40 ring-4 ring-blue-200/50">
              <img src={cameraIcon} alt="" className="h-6 w-6 brightness-0 invert" />
            </div>
            <div className="absolute left-[28%] top-[55%] h-3 w-3 rounded-full bg-blue-500 ring-2 ring-white" />
            <div className="absolute right-[30%] top-[48%] h-3 w-3 rounded-full bg-blue-500 ring-2 ring-white" />
            <div className="absolute right-[22%] top-[62%] h-3 w-3 rounded-full bg-blue-500 ring-2 ring-white" />
          </div>
          <button type="button" className="text-sm font-medium text-blue-600">
            查看详情 &gt;
          </button>
        </div>
      );
    default:
      return null;
  }
}

export default function Video() {
  const [selectedCamera, setSelectedCamera] = useState<CameraData | null>(null);
  const [hoveredCamera, setHoveredCamera] = useState<number | null>(null);
  const narrow = useViewportNarrow(640);

  const handleCameraClick = (camera: CameraData) => {
    setSelectedCamera(selectedCamera?.id === camera.id ? null : camera);
  };

  const getFeatureById = (id: number) => {
    return features.find((f) => f.id === id) || features[0];
  };

  const handleVideoAreaMouseDown = (e: React.MouseEvent) => {
    const el = e.target as HTMLElement;
    if (el.closest('[data-camera-pin]') || el.closest('[data-chat-bubble]')) return;
    setSelectedCamera(null);
  };

  const openContentRank = selectedCamera ? getCameraContentRank(selectedCamera) : null;

  return (
    <section className="relative bg-white px-6 py-[calc(8rem+20px)] overflow-hidden">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            会说话的 <span className="text-gradient">视频中台</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            告警秒级回溯，AI 自动打包证据，让视频从此不再是死档案
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-600">
            {features.map((feature, idx) => (
              <div key={feature.id} className="flex items-center">
                {idx > 0 && <div className="mx-4 h-4 w-px bg-gray-300" />}
                <button
                  type="button"
                  onClick={() => {
                    const camera = cameraData.find(
                      (c) => getCameraContentRank(c) === feature.id,
                    );
                    if (camera) setSelectedCamera(camera);
                  }}
                  className="flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 hover:bg-gray-100"
                >
                  <img
                    src={feature.headerImage}
                    alt=""
                    className="h-4 w-4 object-contain"
                  />
                  <span className="text-sm font-medium">{feature.title}</span>
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10"
            onMouseDown={handleVideoAreaMouseDown}
          >
            <img src={baimoImg} alt="2.5D 房屋结构图" className="w-full h-auto" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-50/30 via-transparent to-transparent" />

            {cameraData.map((camera) => (
              <motion.div
                key={camera.id}
                data-camera-pin
                className="absolute z-20 cursor-pointer"
                style={{ top: camera.position.top, left: camera.position.left }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: camera.id * 0.1 }}
                whileHover={{ scale: 1.1 }}
                onHoverStart={() => setHoveredCamera(camera.id)}
                onHoverEnd={() => setHoveredCamera(null)}
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCameraClick(camera);
                }}
              >
                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                    hoveredCamera === camera.id || selectedCamera?.id === camera.id
                      ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
                      : 'border-2 border-blue-400 bg-white shadow-lg'
                  }`}
                >
                  <img src={cameraIcon} alt="摄像头" className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedCamera && openContentRank !== null && (
              <motion.div
                key={selectedCamera.id}
                className={`z-30 ${
                  narrow
                    ? 'pointer-events-auto fixed bottom-6 left-4 right-4 top-auto max-h-[min(70vh,calc(100vh-8rem))] overflow-y-auto'
                    : 'pointer-events-none absolute'
                }`}
                style={
                  narrow
                    ? undefined
                    : {
                        top: selectedCamera.position.top,
                        left: selectedCamera.position.left,
                      }
                }
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onMouseDown={(e) => e.stopPropagation()}
              >
                <div
                  data-chat-bubble
                  className={`pointer-events-auto ${
                    narrow
                      ? 'mx-auto w-full max-w-full'
                      : selectedCamera.alignRight
                        ? 'relative ml-12 mt-3 w-[min(calc(100vw-2rem),440px)] max-w-[440px]'
                        : 'relative -ml-3 mt-3 w-[min(calc(100vw-2rem),440px)] max-w-[440px] -translate-x-full'
                  }`}
                >
                  <div
                    className={`relative z-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl shadow-gray-200 ${
                      narrow ? 'max-h-none' : ''
                    }`}
                  >
                    <div className="relative mb-4 flex min-h-5 items-center gap-3 border-b border-gray-100 pb-3">
                      {!narrow && (
                        <div
                          className={`pointer-events-none absolute top-1/2 z-0 h-6 w-6 -translate-y-1/2 rotate-45 border border-gray-100 bg-white ${
                            selectedCamera.alignRight ? '-left-3' : '-right-3'
                          }`}
                          aria-hidden
                        />
                      )}
                      <img
                        src={getFeatureById(openContentRank).headerImage}
                        alt=""
                        className="relative z-10 h-5 w-5 shrink-0 object-contain"
                      />
                      <h3 className="relative z-10 min-w-0 flex-1 truncate text-base font-semibold leading-tight text-gray-900">
                        {getFeatureById(openContentRank).title}
                      </h3>
                    </div>
                    <BubbleContent featureId={openContentRank} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
