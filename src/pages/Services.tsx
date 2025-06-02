import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      category: "Маникюр",
      items: [
        {
          name: "Классический маникюр",
          description: "Обрезной маникюр с покрытием",
          price: "1500 ₽",
        },
        {
          name: "Европейский маникюр",
          description: "Необрезной маникюр с покрытием",
          price: "1800 ₽",
        },
        {
          name: "Аппаратный маникюр",
          description: "Современная технология обработки",
          price: "2000 ₽",
        },
      ],
    },
    {
      category: "Педикюр",
      items: [
        {
          name: "Классический педикюр",
          description: "Полная обработка стоп",
          price: "2500 ₽",
        },
        {
          name: "SPA-педикюр",
          description: "Педикюр с расслабляющими процедурами",
          price: "3500 ₽",
        },
        {
          name: "Медицинский педикюр",
          description: "Лечебный уход за стопами",
          price: "4000 ₽",
        },
      ],
    },
    {
      category: "Дизайн ногтей",
      items: [
        {
          name: "Простой дизайн",
          description: "1-2 цвета, блестки",
          price: "от 500 ₽",
        },
        {
          name: "Сложный дизайн",
          description: "Роспись, стразы, объемные элементы",
          price: "от 1500 ₽",
        },
        {
          name: "Френч",
          description: "Классический или цветной френч",
          price: "800 ₽",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Наши услуги
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Полный спектр услуг для красоты ваших ногтей
          </p>

          <div className="grid gap-12">
            {services.map((category) => (
              <div
                key={category.category}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
                  {category.category}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((service) => (
                    <div
                      key={service.name}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-semibold mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-pink-600">
                          {service.price}
                        </span>
                        <Button className="bg-pink-600 hover:bg-pink-700">
                          Записаться
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
