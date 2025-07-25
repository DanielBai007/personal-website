'use client';

import { useState, useEffect } from 'react';

type Props = {
  params: Promise<{ slug: string }>;
};

// 预定义所有可能的动态路由 - GitHub Pages静态导出必需
export async function generateStaticParams() {
  return [
    { slug: 'satisfaction-dashboard' },
    { slug: 'gesture-master' },
    { slug: 'digital-pet' },
    { slug: 'project-4' }, // 听写demo的预留
  ];
}

// 加载界面组件
const SatisfactionDashboardLoader = ({ iframeLoaded }: { iframeLoaded: boolean }) => {
  const [progress, setProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('正在初始化分析平台...');

  useEffect(() => {
    // 进度条动画
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        // 如果iframe已加载，快速完成到100%
        if (iframeLoaded && prev < 100) {
          return Math.min(100, prev + 10);
        }
        // 否则停在95%，等待iframe加载或30秒超时
        if (prev >= 95) return 95;
        return prev + Math.random() * 3;
      });
    }, 500);

    // 加载消息更新
    const messageInterval = setInterval(() => {
      if (iframeLoaded) {
        setLoadingMessage('数据加载完成，正在初始化界面...');
        return;
      }
      
      setLoadingMessage(prev => {
        const messages = [
          '正在初始化分析平台...',
          '正在加载演示数据...',
          '正在准备数据可视化组件...',
          '正在配置分析引擎...',
          '即将完成加载...'
        ];
        const currentIndex = messages.indexOf(prev);
        return messages[(currentIndex + 1) % messages.length];
      });
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [iframeLoaded]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
        {/* 图标和标题 */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <div className="text-2xl animate-spin">📊</div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">讲次评价分析平台</h2>
          <p className="text-gray-600">正在为您准备专业的数据分析环境</p>
        </div>

        {/* 进度条 */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>加载进度</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 加载状态信息 */}
        <div className="text-center mb-6">
          <p className="text-blue-600 font-medium mb-2">{loadingMessage}</p>
          <p className="text-sm text-gray-500">
            正在准备数据分析环境，请耐心等待...
          </p>
        </div>

        {/* 功能预览 */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-3 text-center">🚀 即将为您呈现</h4>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              <span>智能数据解析引擎</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              <span>多维度评价分析图表</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              <span>主讲老师专项分析</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-blue-500 mr-2">⚡</span>
              <span>交互式数据探索界面</span>
            </div>
          </div>
        </div>

        {/* 提示信息 */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            正在加载演示数据和可视化组件，请稍候...
          </p>
        </div>
      </div>
    </div>
  );
};

// 数字宠物屏保加载界面组件
const DigitalPetLoader = ({ iframeLoaded }: { iframeLoaded: boolean }) => {
  const [progress, setProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('正在初始化粒子系统...');

  useEffect(() => {
    // 进度条动画
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        // 如果iframe已加载，快速完成到100%
        if (iframeLoaded && prev < 100) {
          return Math.min(100, prev + 10);
        }
        // 否则停在95%，等待iframe加载
        if (prev >= 95) return 95;
        return prev + Math.random() * 4;
      });
    }, 400);

    // 加载消息更新
    const messageInterval = setInterval(() => {
      if (iframeLoaded) {
        setLoadingMessage('数字宠物屏保加载完成，即将展示...');
        return;
      }
      
      setLoadingMessage(prev => {
        const messages = [
          '正在初始化粒子系统...',
          '正在加载20,000个粒子...',
          '正在准备5种动画形态...',
          '正在配置控制面板...',
          '正在启动视觉效果引擎...'
        ];
        const currentIndex = messages.indexOf(prev);
        return messages[(currentIndex + 1) % messages.length];
      });
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [iframeLoaded]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
        {/* 图标和标题 */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
            <div className="text-2xl animate-pulse">🎮</div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">数字宠物屏保</h2>
          <p className="text-gray-600">20,000粒子打造的炫酷动画屏保</p>
        </div>

        {/* 进度条 */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>加载进度</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 加载状态信息 */}
        <div className="text-center mb-6">
          <p className="text-cyan-600 font-medium mb-2">{loadingMessage}</p>
          <p className="text-sm text-gray-500">
            正在从GitHub Pages加载炫酷屏保...
          </p>
        </div>

        {/* 功能预览 */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-3 text-center">✨ 炫酷特性</h4>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              <span>🌀 5种动画形态模式</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              <span>🎮 实时控制面板</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              <span>🌈 拖尾和渐变效果</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-cyan-500 mr-2">⚡</span>
              <span>📊 实时性能监控</span>
            </div>
          </div>
        </div>

        {/* 快捷键提示 */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            支持快捷键控制：空格播放/暂停、F全屏、1-5切换速度
          </p>
          <p className="text-xs text-green-600 mt-1">
          </p>
        </div>
      </div>
    </div>
  );
};

// 数字宠物屏保主组件
const DigitalPetWithLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    // 最少显示12秒的加载界面，给粒子系统足够的初始化时间
    const minLoadTime = setTimeout(() => {
      if (iframeLoaded) {
        setIsLoading(false);
      }
    }, 12000);

    return () => clearTimeout(minLoadTime);
  }, [iframeLoaded]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    // 给一个小延迟让用户看到100%完成
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="w-full h-screen relative">
      {/* 加载界面 */}
      {isLoading && <DigitalPetLoader iframeLoaded={iframeLoaded} />}
      
      {/* iframe - 始终加载，但在加载期间被遮罩 */}
      <iframe
        src="https://danielbai007.github.io/digitalLife/enhanced.html"
        className="w-full h-full border-0"
        title="数字宠物屏保 - 20,000粒子动画系统"
        onLoad={handleIframeLoad}
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}
        allowFullScreen
        allow="fullscreen"
      />
    </div>
  );
};

// 手势大师加载界面组件
const GestureMasterLoader = ({ iframeLoaded }: { iframeLoaded: boolean }) => {
  const [progress, setProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('正在连接手势大师服务器...');

  useEffect(() => {
    // 进度条动画
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        // 如果iframe已加载，快速完成到100%
        if (iframeLoaded && prev < 100) {
          return Math.min(100, prev + 10);
        }
        // 否则停在95%，等待iframe加载
        if (prev >= 95) return 95;
        return prev + Math.random() * 3;
      });
    }, 500);

    // 加载消息更新
    const messageInterval = setInterval(() => {
      if (iframeLoaded) {
        setLoadingMessage('手势大师加载完成，即将为您展示...');
        return;
      }
      
      setLoadingMessage(prev => {
        const messages = [
          '正在连接手势大师服务器...',
          '正在加载3D渲染引擎...',
          '正在初始化手势识别系统...',
          '正在准备模型库...',
          '即将完成加载...'
        ];
        const currentIndex = messages.indexOf(prev);
        return messages[(currentIndex + 1) % messages.length];
      });
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [iframeLoaded]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
        {/* 图标和标题 */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <div className="text-2xl animate-bounce">🎯</div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">手势大师</h2>
          <p className="text-gray-600">革命性手势控制3D模型预览器</p>
        </div>

        {/* 进度条 */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>加载进度</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 加载状态信息 */}
        <div className="text-center mb-6">
          <p className="text-purple-600 font-medium mb-2">{loadingMessage}</p>
          <p className="text-sm text-gray-500">
            正在从GitHub Pages加载项目资源...
          </p>
        </div>

        {/* 功能预览 */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-3 text-center">🚀 核心功能</h4>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              <span>🖐️ 手势控制3D模型</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              <span>📁 GLB/GLTF文件上传</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              <span>🎨 8个内置精选模型</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-purple-500 mr-2">⚡</span>
              <span>🎯 MediaPipe手势识别</span>
            </div>
          </div>
        </div>

        {/* 提示信息 */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            加载完成后请允许摄像头权限以体验手势控制
          </p>
        </div>
      </div>
    </div>
  );
};

// 手势大师主组件
const GestureMasterWithLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    // 最少显示15秒的加载界面，给GitHub Pages足够的加载时间
    const minLoadTime = setTimeout(() => {
      if (iframeLoaded) {
        setIsLoading(false);
      }
    }, 15000);

    return () => clearTimeout(minLoadTime);
  }, [iframeLoaded]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    // 给一个小延迟让用户看到100%完成
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full h-screen relative">
      {/* 加载界面 */}
      {isLoading && <GestureMasterLoader iframeLoaded={iframeLoaded} />}
      
      {/* iframe - 始终加载，但在加载期间被遮罩 */}
      <iframe
        src="https://danielbai007.github.io/GestureMaster/"
        className="w-full h-full border-0"
        title="手势大师 - 3D模型手势控制预览器"
        allow="camera; microphone; fullscreen"
        allowFullScreen
        onLoad={handleIframeLoad}
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}
      />
    </div>
  );
};

// 满意度分析平台主组件
const SatisfactionDashboardWithLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    // 最少显示20秒的加载界面，给用户足够的视觉反馈
    const minLoadTime = setTimeout(() => {
      if (iframeLoaded) {
        setIsLoading(false);
      }
    }, 20000);

    return () => clearTimeout(minLoadTime);
  }, [iframeLoaded]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    // 如果已经显示了30秒，立即隐藏加载界面
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 给一个小延迟让用户看到100%完成
  };

  return (
    <div className="w-full h-screen relative">
      {/* 加载界面 */}
      {isLoading && <SatisfactionDashboardLoader iframeLoaded={iframeLoaded} />}
      
      {/* iframe - 始终加载，但在加载期间被遮罩 */}
      <iframe
        src="/satisfaction_dashboard/index.html?autoload=true"
        className="w-full h-full border-0"
        title="讲次评价分析平台"
        onLoad={handleIframeLoad}
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}
        allowFullScreen
        allow="fullscreen"
      />
    </div>
  );
};

const ProjectDetailPage = async ({ params }: Props) => {
  // Next.js 15 requires awaiting params
  const { slug } = await params;
  
  // 如果是满意度分析平台，显示特殊的加载界面
  if (slug === 'satisfaction-dashboard') {
    return <SatisfactionDashboardWithLoader />;
  }

  // 如果是手势大师，嵌入GitHub Pages网站
  if (slug === 'gesture-master') {
    return <GestureMasterWithLoader />;
  }

  // 如果是数字宠物屏保，嵌入GitHub Pages网站
  if (slug === 'digital-pet') {
    return <DigitalPetWithLoader />;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">作品详情</h1>
      <p className="text-xl">
        这里是项目 <span className="font-bold text-blue-600">{slug}</span> 的详细介绍。
      </p>
      <p>稍后我们会在这里填充每个项目的具体信息。</p>
    </div>
  );
};

export default ProjectDetailPage; 