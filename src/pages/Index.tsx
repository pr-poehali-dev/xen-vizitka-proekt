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
              <Icon name="Code" size={32} className="text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                TechSolutions
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
              Инновационные IT-решения для вашего бизнеса
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Разрабатываем современные технологические решения, которые
              помогают компаниям достигать целей и оптимизировать процессы
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
              О продукте
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Наша платформа объединяет передовые технологии для создания
              комплексных решений
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <Icon name="Zap" size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Высокая производительность
                </h3>
                <p className="text-gray-600">
                  Оптимизированные алгоритмы обеспечивают быструю обработку
                  данных
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <Icon name="Shield" size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Безопасность</h3>
                <p className="text-gray-600">
                  Многоуровневая защита данных и соответствие стандартам
                  безопасности
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <Icon
                  name="Settings"
                  size={48}
                  className="text-blue-600 mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">
                  Гибкость настройки
                </h3>
                <p className="text-gray-600">
                  Адаптация под специфические требования вашего бизнеса
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
                <h3 className="text-2xl font-bold mb-4">Стартовый</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₽50,000</span>
                  <span className="text-gray-600">/месяц</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    До 1000 пользователей
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Базовая поддержка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    API доступ
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
                  <span className="text-4xl font-bold">₽150,000</span>
                  <span className="text-gray-600">/месяц</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    До 10,000 пользователей
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Приоритетная поддержка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Расширенная аналитика
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Интеграции
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
                  <span className="text-4xl font-bold">₽500,000</span>
                  <span className="text-gray-600">/месяц</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Неограниченные пользователи
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Персональный менеджер
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Кастомизация
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    SLA гарантии
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
              Ответы на популярные вопросы о нашем продукте
            </p>
          </div>
          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Как быстро можно внедрить решение?
                </h3>
                <p className="text-gray-600">
                  Стандартное внедрение занимает от 2 до 4 недель в зависимости
                  от сложности проекта и требований интеграции.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Какие гарантии предоставляются?
                </h3>
                <p className="text-gray-600">
                  Мы предоставляем гарантию на все разработанные решения сроком
                  12 месяцев, включая техническую поддержку и исправление
                  ошибок.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Возможна ли интеграция с существующими системами?
                </h3>
                <p className="text-gray-600">
                  Да, наша платформа поддерживает интеграцию с большинством
                  популярных корпоративных систем через API и стандартные
                  протоколы.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Какой уровень поддержки предоставляется?
                </h3>
                <p className="text-gray-600">
                  В зависимости от тарифного плана предоставляется базовая,
                  приоритетная поддержка или персональный менеджер с SLA
                  гарантиями.
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
                <Icon name="Trophy" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">5+ лет опыта</h3>
              <p className="text-gray-600">
                Успешно реализовали более 200 проектов
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Команда экспертов</h3>
              <p className="text-gray-600">50+ специалистов высокого уровня</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 поддержка</h3>
              <p className="text-gray-600">
                Круглосуточная техническая поддержка
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Сертификации</h3>
              <p className="text-gray-600">ISO 27001, GDPR compliance</p>
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
              Свяжитесь с нами для обсуждения вашего проекта
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
                    placeholder="Расскажите о вашем проекте..."
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
                <p className="text-gray-600">info@techsolutions.ru</p>
                <p className="text-gray-600">sales@techsolutions.ru</p>
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
                <p className="text-gray-600">г. Москва, ул. Тверская, 1</p>
                <p className="text-gray-600">БЦ "Технопарк", офис 505</p>
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
              Мы — команда профессионалов, которая создает инновационные
              IT-решения для современного бизнеса. Наша миссия — помочь
              компаниям достичь цифровой трансформации и повысить эффективность
              через технологии.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Наша история</h3>
              <p className="text-gray-600 mb-4">
                Основанная в 2019 году, компания TechSolutions быстро
                зарекомендовала себя как надежный партнер в области разработки
                программного обеспечения и цифровых решений.
              </p>
              <p className="text-gray-600 mb-6">
                За годы работы мы накопили богатый опыт в различных отраслях и
                технологиях, что позволяет нам создавать решения любой
                сложности.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600">Клиентов</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <Icon name="Building" size={64} className="text-gray-400" />
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
                <Icon name="Code" size={32} className="text-blue-400" />
                <span className="ml-2 text-xl font-bold">TechSolutions</span>
              </div>
              <p className="text-gray-400">
                Инновационные IT-решения для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Разработка ПО
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Консалтинг
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Поддержка
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Интеграции
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
                <p className="text-gray-400">info@techsolutions.ru</p>
                <p className="text-gray-400">г. Москва, ул. Тверская, 1</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 TechSolutions. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
