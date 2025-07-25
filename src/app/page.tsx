import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-200px)]">
      <div className="animate-fade-in-up">
        <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl">
          <span className="block">欢迎来到我的个人主页</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400 sm:text-2xl">
          在这里，你可以深入了解我的专业技能、项目经验以及个人成就
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Link
            href="/resume"
            className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
          >
            查看简历
          </Link>
          <Link
            href="/portfolio"
            className="rounded-md bg-gray-700 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-transform transform hover:scale-105"
          >
            浏览作品
          </Link>
        </div>
      </div>
    </div>
  );
}
