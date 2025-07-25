import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-300">
          <Link href="/">我的个人网站</Link>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300 pb-1">
                首页
              </Link>
            </li>
            <li>
              <Link href="/resume" className="text-gray-300 hover:text-white border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300 pb-1">
                个人简历
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-gray-300 hover:text-white border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300 pb-1">
                个人作品
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 