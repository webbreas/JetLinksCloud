import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function SmartBusinessSolution() {
  useEffect(() => {
    document.title = 'JetLinks 智慧商业';
    return () => {
      document.title = 'JetLinks';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-32 pb-20">
        <h1 className="text-3xl font-bold text-[#1D1D1F]">智慧商业</h1>
        <p className="mt-4 max-w-lg text-center text-[#424245]">
          智能识别风险行为并告警，数据回溯归档留存
        </p>
        <Link
          to="/"
          className="mt-8 text-sm font-medium text-[#0066FF] hover:underline"
        >
          返回首页
        </Link>
      </main>
      <Footer />
    </div>
  );
}
