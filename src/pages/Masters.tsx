import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Masters = () => {
  const masters = [
    {
      name: "Анна Максимова",
      position: "Топ-мастер маникюра",
      experience: "8 лет",
      specialization: "Сложный дизайн, роспись",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba940fe?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Елена Петрова",
      position: "Мастер педикюра",
      experience: "5 лет",
      specialization: "SPA-процедуры, медицинский педикюр",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Мария Иванова",
      position: "Мастер-универсал",
      experience: "6 лет",
      specialization: "Маникюр, педикюр, наращивание",
      image:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Наши мастера
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Профессионалы с многолетним опытом и авторскими техниками
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {masters.map((master) => (
              <div
                key={master.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={master.image}
                  alt={master.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {master.name}
                  </h3>
                  <p className="text-pink-600 font-semibold mb-2">
                    {master.position}
                  </p>
                  <p className="text-gray-600 mb-2">
                    Опыт: {master.experience}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Специализация:</span>{" "}
                    {master.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Запишитесь к любимому мастеру
            </h2>
            <p className="text-gray-600 mb-6">
              Все наши специалисты регулярно повышают квалификацию и следят за
              трендами
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Masters;
