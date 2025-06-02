import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AuthModal from "@/components/AuthModal";

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/services" },
    { name: "Мастера", path: "/masters" },
    { name: "Прайс", path: "/pricing" },
    { name: "Галерея", path: "/gallery" },
    { name: "Акции", path: "/promotions" },
    { name: "Контакты", path: "/contacts" },
    { name: "О нас", path: "/about" },
  ];

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">💅</div>
              <h1 className="text-2xl font-bold text-pink-600 font-montserrat">
                Maxim
              </h1>
            </div>

            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium ${
                    location.pathname === item.path
                      ? "text-pink-600 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Button
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2"
            >
              Войти
            </Button>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Header;
