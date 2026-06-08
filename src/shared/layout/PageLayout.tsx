import { useEffect, type ReactNode } from 'react';
import Navbar from '@/shared/layout/Navbar';
import Footer from '@/shared/layout/Footer';

type PageLayoutProps = {
  children: ReactNode;
  title?: string;
};

export default function PageLayout({ children, title = 'JetLinks' }: PageLayoutProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
