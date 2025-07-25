import Link from 'next/link';

const portfolioItems = [
  { 
    slug: 'satisfaction-dashboard', 
    title: '讲次评价分析平台',
    description: '智能分析学生课程评价数据，提供多维度可视化分析报告'
  },
  { 
    slug: 'gesture-master', 
    title: '手势大师',
    description: '革命性手势控制3D模型预览器，支持GLB/GLTF文件预览，内置手势控制和精选模型库'
  },
  { 
    slug: 'digital-pet', 
    title: '数字宠物屏保',
    description: '20,000粒子打造的炫酷动画屏保，支持5种形态模式、实时控制和丰富的视觉效果'
  },
  { 
    slug: 'project-4', 
    title: '听写demo',
    description: '语音识别听写练习工具'
  },
];

const PortfolioPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">个人作品</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <Link href={`/portfolio/${item.slug}`} key={item.slug}>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
              <div className="flex items-center text-blue-600 text-sm font-medium">
                <span>查看详情</span>
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage; 