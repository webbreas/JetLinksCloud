import PageLayout from '@/shared/layout/PageLayout';

export default function SmartBusinessPage() {
  return (
    <PageLayout title="JetLinks 智慧商业">
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 pb-20 pt-32">
        <h1 className="text-3xl font-bold text-[#1D1D1F]">智慧商业</h1>
        <p className="mt-4 max-w-lg text-center text-[#424245]">
          智能识别风险行为并告警，数据回溯归档留存
        </p>
        <a href="/" className="mt-8 text-sm font-medium text-[#0066FF] hover:underline">
          返回首页
        </a>
      </div>
    </PageLayout>
  );
}
