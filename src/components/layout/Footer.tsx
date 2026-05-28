import { Link } from 'react-router-dom';
import { solutionNavDropdownItems } from '@/data/content';
import Github from '@/assets/github.svg';
import QQ from '@/assets/qq.svg';
import Douyin from '@/assets/抖音.svg';
import Wechat from '@/assets/微信.svg';
import Zhihu from '@/assets/知乎.svg';
import Bilibili from '@/assets/b站.svg';
import OSChina from '@/assets/开源中国.svg';
import Logo from '@/assets/黑白logo.png';

export default function Footer() {
  const saasProducts = ['JetLinks IoT', 'JetLinks View', 'JetLinks Edge', 'JetLinks AI'];
  const docsAndCommunity = ['物联网平台', '云边协同', '大屏可视化', '人工智能'];
  const socialIcons = [
    { icon: Github, name: 'github' },
    { icon: QQ, name: 'QQ' },
    { icon: Douyin, name: '抖音' },
    { icon: Wechat, name: '微信' },
    { icon: Zhihu, name: '知乎' },
    { icon: Bilibili, name: 'B站' },
    { icon: OSChina, name: '开源中国' },
  ];

  return (
    <footer className="bg-[#070033] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* 主体部分 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* SaaS产品 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">SaaS产品</h3>
            <ul className="space-y-3">
              {saasProducts.map((product) => (
                <li key={product}>
                  <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 解决方案 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">解决方案</h3>
            <ul className="space-y-3">
              {solutionNavDropdownItems.map((item) => (
                <li key={item.title}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span className="text-sm text-white/50">{item.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 文档与社区 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">文档与社区</h3>
            <ul className="space-y-3">
              {docsAndCommunity.map((doc) => (
                <li key={doc}>
                  <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    {doc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 关注与联系我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">关注与联系我们</h3>
            
            {/* 社交图标 */}
            <div className="flex gap-4 mb-6">
              {socialIcons.map(({ icon, name }) => (
                <a
                  key={name}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  title={name}
                >
                  <img src={icon} alt={name} className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* 邮箱 */}
            <div className="text-sm text-white/80 mb-3">
              <span className="text-white mr-2">邮箱：</span>
              htservice@jetlinks.cn
            </div>

            {/* 地址 */}
            <div className="text-sm text-white/80">
              <span className="text-white mr-2">地址：</span>
              <br />
              中国重庆市南岸区玉马路8号中国智谷智能创新产业园E栋
            </div>
          </div>
        </div>

        {/* 底部部分 */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <img src={Logo} alt="JetLinks Logo" className="h-7" />
            <div className="text-center md:text-left">
              <p className="text-sm text-white/90">
                版权：Copyright © JetLinks，All Rights Reserved.打造开箱即用的SaaS平台
              </p>
              <p className="text-sm text-white/70 mt-1">
                备案：渝ICP备19017719号
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
