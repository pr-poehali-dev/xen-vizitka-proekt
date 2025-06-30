import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Icon name="Map" size={32} className="text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                GeoSystem
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#product"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                О продукте
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Цены
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                FAQ
              </a>
              <a
                href="#advantages"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Преимущества
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                О нас
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Заказать консультацию
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-r from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Геоинформационная система нового поколения
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Мощная ГИС-платформа для анализа пространственных данных,
              картографии и управления геоинформацией
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Начать проект
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              О нашей ГИС
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Профессиональная геоинформационная система для работы с картами,
              анализа территорий и управления пространственными данными
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <Icon name="MapPin" size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Точная геолокация
                </h3>
                <p className="text-gray-600">
                  Высокоточные алгоритмы обработки координат и пространственных
                  данных
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <Icon name="Layers" size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Многослойные карты
                </h3>
                <p className="text-gray-600">
                  Работа с векторными и растровыми слоями, наложение данных
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <Icon
                  name="BarChart3"
                  size={48}
                  className="text-blue-600 mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">
                  Пространственная аналитика
                </h3>
                <p className="text-gray-600">
                  Инструменты для анализа территорий, расчета расстояний и
                  площадей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Тарифные планы
            </h2>
            <p className="text-lg text-gray-600">
              Выберите подходящий план для вашей компании
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Базовый</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₽25,000</span>
                  <span className="text-gray-600">/месяц</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    До 5 одновременных пользователей
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Базовые картографические функции
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Импорт/экспорт данных
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
            <Card className="border-blue-600 border-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 text-sm font-medium rounded-full">
                  Популярный
                </span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Профессиональный</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₽75,000</span>
                  <span className="text-gray-600">/месяц</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    До 25 одновременных пользователей
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Пространственный анализ
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    3D визуализация
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    API для интеграций
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Корпоративный</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₽200,000</span>
                  <span className="text-gray-600">/месяц</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Неограниченное количество пользователей
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Собственный сервер
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Индивидуальная настройка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Техподдержка 24/7
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Связаться с нами
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-gray-600">
              Ответы на популярные вопросы о нашей ГИС
            </p>
          </div>
          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Какие форматы геоданных поддерживает система?
                </h3>
                <p className="text-gray-600">
                  Наша ГИС поддерживает все основные форматы: Shapefile,
                  GeoJSON, KML, GPX, WMS, WFS и многие другие векторные и
                  растровые форматы.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Можно ли интегрировать систему с существующими базами данных?
                </h3>
                <p className="text-gray-600">
                  Да, система поддерживает интеграцию с PostgreSQL/PostGIS,
                  Oracle Spatial, SQL Server и другими СУБД через стандартные
                  протоколы.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Какая точность позиционирования доступна?
                </h3>
                <p className="text-gray-600">
                  Система обеспечивает точность от сантиметровой (при
                  использовании RTK) до метровой в зависимости от источника
                  данных и настроек.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Есть ли возможность работы в офлайн режиме?
                </h3>
                <p className="text-gray-600">
                  Да, система поддерживает кэширование карт и данных для работы
                  без интернета с последующей синхронизацией.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши преимущества
            </h2>
            <p className="text-lg text-gray-600">Почему выбирают именно нас</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Мировые стандарты</h3>
              <p className="text-gray-600">
                Соответствие международным стандартам OGC и ISO
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Высокая производительность
              </h3>
              <p className="text-gray-600">
                Обработка больших объемов данных в реальном времени
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Безопасность данных
              </h3>
              <p className="text-gray-600">
                Многоуровневая защита и шифрование геоданных
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Экспертная поддержка
              </h3>
              <p className="text-gray-600">
                Команда профессиональных картографов и разработчиков
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Оставить заявку
            </h2>
            <p className="text-lg text-gray-600">
              Свяжитесь с нами для обсуждения вашего ГИС-проекта
            </p>
          </div>
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Компания
                  </label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    placeholder="Название компании"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Расскажите о вашем ГИС-проекте..."
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-lg text-gray-600">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Phone"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
                <p className="text-gray-600">+7 (800) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Mail"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@geosystem.ru</p>
                <p className="text-gray-600">sales@geosystem.ru</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6 text-center">
                <Icon
                  name="MapPin"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600">г. Москва, ул. Карта, 15</p>
                <p className="text-gray-600">БЦ "ГеоТех", офис 301</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О нас</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Мы — команда экспертов в области геоинформационных технологий.
              Наша миссия — предоставить мощные инструменты для работы с
              пространственными данными и помочь организациям принимать
              обоснованные решения на основе географической информации.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Наша история</h3>
              <p className="text-gray-600 mb-4">
                Основанная в 2018 году, компания GeoSystem стала лидером в
                разработке геоинформационных решений. Мы объединили опыт
                картографов, геодезистов и IT-специалистов для создания
                инновационной ГИС-платформы.
              </p>
              <p className="text-gray-600 mb-6">
                За годы работы мы успешно реализовали проекты в области
                кадастра, городского планирования, экологии, лесного хозяйства и
                многих других сферах.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600">ГИС-проектов</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Клиентов</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <Icon name="Map" size={64} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Map" size={32} className="text-blue-400" />
                <span className="ml-2 text-xl font-bold">GeoSystem</span>
              </div>
              <p className="text-gray-400">
                Геоинформационные решения нового поколения
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Разработка ГИС
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Картографирование
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Анализ данных
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Консультации
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Новости
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <p className="text-gray-400">+7 (495) 123-45-67</p>
                <p className="text-gray-400">info@geosystem.ru</p>
                <p className="text-gray-400">г. Москва, ул. Карта, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 GeoSystem. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
