import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const pricingData = [
    {
      category: "💅 МАНИКЮР",
      services: [
        { name: "Классический маникюр + покрытие", price: "1500" },
        { name: "Европейский маникюр + покрытие", price: "1800" },
        { name: "Аппаратный маникюр + покрытие", price: "2000" },
        { name: "Снятие старого покрытия", price: "300" },
        { name: "Укрепление ногтей", price: "500" },
      ],
    },
    {
      category: "🦶 ПЕДИКЮР",
      services: [
        { name: "Классический педикюр", price: "2500" },
        { name: "Аппаратный педикюр", price: "3000" },
        { name: "SPA-педикюр", price: "3500" },
        { name: "Медицинский педикюр", price: "4000" },
        { name: "Обработка пяток", price: "800" },
      ],
    },
    {
      category: "🎨 ДИЗАЙН",
      services: [
        { name: "Простой дизайн (1-2 ногтя)", price: "500" },
        { name: "Сложный дизайн", price: "1500" },
        { name: "Френч классический", price: "800" },
        { name: "Френч цветной", price: "1000" },
        { name: "Стразы (за 1 шт)", price: "50" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Прайс-лист
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Честные цены на качественные услуги
          </p>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingData.map((category) => (
              <div
                key={category.category}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-800">{service.name}</span>
                      <span className="font-bold text-pink-600">
                        {service.price} ₽
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              💎 Дополнительная информация
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h3 className="font-semibold text-pink-600 mb-3">
                  Способы оплаты:
                </h3>
                <ul className="space-y-2">
                  <li>💳 Банковские карты</li>
                  <li>💰 Наличные</li>
                  <li>📱 СБП и переводы</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-pink-600 mb-3">
                  Важная информация:
                </h3>
                <ul className="space-y-2">
                  <li>🕒 Запись обязательна</li>
                  <li>❌ Отмена за 2 часа до визита</li>
                  <li>🎁 Скидки постоянным клиентам</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-pink-600 hover:bg-pink-700 px-8 py-3 text-lg">
                Записаться сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
