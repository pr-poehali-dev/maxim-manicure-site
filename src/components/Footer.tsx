const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">💅</div>
              <h3 className="text-xl font-bold text-pink-400">Maxim</h3>
            </div>
            <p className="text-gray-300">
              Салон красоты премиум-класса в центре города. Создаем красоту с
              2018 года.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">
              Контакты
            </h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 ул. Красоты, 15</p>
              <p>📞 +7 (999) 123-45-67</p>
              <p>📧 info@maxim-salon.ru</p>
              <p>🕒 Пн-Вс: 9:00 - 21:00</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">
              Мы в соцсетях
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-pink-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-pink-400 transition-colors"
              >
                VK
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-pink-400 transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Салон красоты Maxim. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
