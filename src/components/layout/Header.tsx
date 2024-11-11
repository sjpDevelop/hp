import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <Link to="/" className="text-xl font-bold">
            SJP
          </Link>

          {/* ハンバーガーメニューボタン */}
          <button
            onClick={toggleMenu}
            className="z-50 space-y-1.5 cursor-pointer"
            aria-label="メニュー"
          >
            <span className={`block w-8 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* オーバーレイメニュー */}
      <div className={`fixed inset-0 bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="space-y-8 text-xl">
            <li>
              <Link to="/" onClick={toggleMenu} className="hover:text-blue-600">
                ホーム
              </Link>
            </li>
            <li>
              <Link to="/company" onClick={toggleMenu} className="hover:text-blue-600">
                会社概要
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;