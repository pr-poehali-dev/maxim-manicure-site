import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6 font-montserrat">
          Салон красоты <span className="text-pink-600">Maxim</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Профессиональный маникюр и педикюр в уютной атмосфере. Мы создаем
          красоту, которая вдохновляет каждый день.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg">
            Записаться онлайн
          </Button>
          <Button
            variant="outline"
            className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg"
          >
            Посмотреть услуги
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Качественно</h3>
            <p className="text-gray-600">
              Используем только премиальные материалы
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">Быстро</h3>
            <p className="text-gray-600">Запись онлайн и без очередей</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">💖</div>
            <h3 className="text-xl font-semibold mb-2">С заботой</h3>
            <p className="text-gray-600">
              Индивидуальный подход к каждому клиенту
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
