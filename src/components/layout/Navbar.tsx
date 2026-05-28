import { useState, useEffect, useRef, useCallback, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Cpu,
  Video,
  Smartphone,
  Cloud,
  Monitor,
  Layers,
  Box,
  BarChart3,
  Brain,
  Building2,
  Flame,
  Package,
  Zap,
  Building,
  Store,
  type LucideIcon,
} from 'lucide-react';
import {
  navItems,
  productNavDropdownItems,
  solutionNavDropdownItems,
  type ProductNavIconKey,
  type SolutionNavIconKey,
} from '@/data/content';
import Logo from '@/assets/logo.svg';

const productNavIconMap: Record<ProductNavIconKey, LucideIcon> = {
  Cpu,
  Video,
  Smartphone,
  Cloud,
  Monitor,
  Layers,
  Box,
  BarChart3,
  Brain,
};

const solutionNavIconMap: Record<SolutionNavIconKey, LucideIcon> = {
  Building2,
  Flame,
  Package,
  Zap,
  Building,
  Store,
};

const DROPDOWN_LEAVE_MS = 220;

type NavDropdownRow = {
  title: string;
  desc: string;
  icon: string;
  href?: string;
};

export default function Navbar() {
  const location = useLocation();
  const isProductSectionActive = location.pathname.startsWith('/products');
  const isSolutionSectionActive = location.pathname.startsWith('/solutions');
  const isHomePage = location.pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [solutionMenuOpen, setSolutionMenuOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileSolutionOpen, setMobileSolutionOpen] = useState(false);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearLeaveTimer = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  const scheduleCloseMenus = () => {
    clearLeaveTimer();
    leaveTimerRef.current = setTimeout(() => {
      setProductMenuOpen(false);
      setSolutionMenuOpen(false);
      leaveTimerRef.current = null;
    }, DROPDOWN_LEAVE_MS);
  };

  const openProductMenu = () => {
    clearLeaveTimer();
    setSolutionMenuOpen(false);
    setProductMenuOpen(true);
  };

  const openSolutionMenu = () => {
    clearLeaveTimer();
    setProductMenuOpen(false);
    setSolutionMenuOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearLeaveTimer();
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setMobileProductOpen(false);
      setMobileSolutionOpen(false);
    }
  }, [isMobileMenuOpen]);

  const closeMenus = useCallback(() => {
    setProductMenuOpen(false);
    setSolutionMenuOpen(false);
  }, []);

  const renderDropdownEntries = (
    items: NavDropdownRow[],
    iconMap: Record<string, LucideIcon>,
    opts: { compact?: boolean; onNavigate?: () => void },
  ) =>
    items.map((row) => {
      const Icon = iconMap[row.icon];
      const iconWrap = opts.compact
        ? 'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600'
        : 'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600';
      const iconSize = opts.compact ? 'h-4 w-4' : 'h-5 w-5';
      const rowClass = `flex w-full gap-3 rounded-xl text-left transition-colors ${
        opts.compact ? 'p-2.5' : 'p-3'
      }`;
      const inner = (
        <>
          <span className={iconWrap}>
            <Icon className={iconSize} strokeWidth={2} aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-semibold text-gray-900">{row.title}</span>
            <span className="mt-0.5 block text-xs leading-snug text-gray-500">{row.desc}</span>
          </span>
        </>
      );

      if (row.href) {
        return (
          <Link
            key={row.title}
            to={row.href}
            className={`${rowClass} hover:bg-slate-50`}
            onClick={() => {
              closeMenus();
              opts.onNavigate?.();
            }}
          >
            {inner}
          </Link>
        );
      }

      return (
        <div
          key={row.title}
          className={`${rowClass} cursor-default opacity-60`}
          aria-disabled
        >
          {inner}
        </div>
      );
    });

  const renderDesktopDropdown = (
    label: string,
    isOpen: boolean,
    isActive: boolean,
    onOpen: () => void,
    children: ReactNode,
  ) => (
    <div
      key={label}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={scheduleCloseMenus}
    >
      <button
        type="button"
        className={`flex items-center gap-1 font-medium transition-colors ${
          isOpen || isActive ? 'text-blue-600' : 'text-black hover:text-blue-600'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full z-[60] pt-2"
            onMouseEnter={clearLeaveTimer}
            onMouseLeave={scheduleCloseMenus}
          >
            <div className="w-[min(calc(100vw-3rem),36rem)] rounded-2xl border border-gray-100/90 bg-white p-4 shadow-xl shadow-gray-400/15">
              <div className="grid grid-cols-2 gap-x-2 gap-y-1">{children}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const renderMobileDropdown = (
    label: string,
    isActive: boolean,
    isExpanded: boolean,
    onToggle: () => void,
    children: ReactNode,
  ) => (
    <div key={label} className="flex flex-col">
      <button
        type="button"
        className={`flex w-full items-center justify-between rounded-lg py-2 text-left font-medium hover:bg-gray-50 ${
          isActive ? 'text-blue-600' : 'text-black'
        }`}
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      {isExpanded && (
        <div className="mb-2 mt-1 space-y-1 border-l-2 border-blue-100 pl-3">{children}</div>
      )}
    </div>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-gray-100 bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="px-6 py-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex flex-shrink-0 items-center gap-3">
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
              <img src={Logo} alt="JetLinks Logo" className="h-10 w-10" />
              <span className="text-xl font-bold text-black">JetLinks</span>
            </motion.div>
          </Link>

          <div className="hidden flex-1 items-center gap-8 md:flex">
            {navItems.map((item) => {
              if (item.label === '产品') {
                return renderDesktopDropdown(
                  '产品',
                  productMenuOpen,
                  isProductSectionActive,
                  openProductMenu,
                  renderDropdownEntries(productNavDropdownItems, productNavIconMap, {}),
                );
              }

              if (item.label === '解决方案') {
                return renderDesktopDropdown(
                  '解决方案',
                  solutionMenuOpen,
                  isSolutionSectionActive,
                  openSolutionMenu,
                  renderDropdownEntries(solutionNavDropdownItems, solutionNavIconMap, {}),
                );
              }

              if (item.label === '首页' && !isHomePage) {
                return (
                  <motion.div key={item.label} whileHover={{ y: -2 }}>
                    <Link
                      to="/"
                      className="group relative font-medium text-black transition-colors hover:text-blue-600"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full" />
                    </Link>
                  </motion.div>
                );
              }

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`group relative font-medium transition-colors ${
                    item.label === '首页' && isHomePage
                      ? 'text-blue-600'
                      : 'text-black hover:text-blue-600'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full" />
                </motion.a>
              );
            })}
          </div>

          <div className="ml-auto hidden flex-shrink-0 items-center gap-4 md:flex">
            <motion.button
              type="button"
              className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-2 font-medium text-white transition-shadow hover:shadow-lg hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              登录控制台
            </motion.button>
          </div>

          <button
            type="button"
            className="text-black md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pb-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                if (item.label === '产品') {
                  return renderMobileDropdown(
                    '产品',
                    isProductSectionActive,
                    mobileProductOpen,
                    () => setMobileProductOpen((v) => !v),
                    renderDropdownEntries(productNavDropdownItems, productNavIconMap, {
                      compact: true,
                      onNavigate: () => setIsMobileMenuOpen(false),
                    }),
                  );
                }

                if (item.label === '解决方案') {
                  return renderMobileDropdown(
                    '解决方案',
                    isSolutionSectionActive,
                    mobileSolutionOpen,
                    () => setMobileSolutionOpen((v) => !v),
                    renderDropdownEntries(solutionNavDropdownItems, solutionNavIconMap, {
                      compact: true,
                      onNavigate: () => setIsMobileMenuOpen(false),
                    }),
                  );
                }

                if (item.label === '首页' && !isHomePage) {
                  return (
                    <Link
                      key={item.label}
                      to="/"
                      className="rounded-lg py-2 font-medium text-black hover:bg-gray-50 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`rounded-lg py-2 font-medium ${
                      item.label === '首页' && isHomePage
                        ? 'text-blue-600'
                        : 'text-black hover:bg-gray-50 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="flex gap-4 border-t border-gray-200 pt-4">
                <button
                  type="button"
                  className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 font-medium text-white"
                >
                  登录控制台
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
