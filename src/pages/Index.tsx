import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/img/00a3c869-3a1b-4e2e-925b-261a24673a91.jpg"
              alt="Viking Glass"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold text-slate-100">
                Viking Glass
              </h1>
              <p className="text-sm text-slate-400">
                Душевые перегородки премиум-класса
              </p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="text-slate-300 hover:text-white transition-colors"
            >
              О компании
            </a>
            <a
              href="#catalog"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Каталог
            </a>
            <a
              href="#contact"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-slate-100">
            Премиум душевые перегородки
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Закаленное стекло, алюминиевый профиль, индивидуальные размеры.
            Гарантия качества и профессиональная установка.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 text-lg">
              Заказать замер
            </Button>
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-3 text-lg"
            >
              Посмотреть каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-100">
            Наши преимущества
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600">
              <CardHeader className="text-center">
                <Icon
                  name="Shield"
                  size={48}
                  className="text-slate-300 mx-auto mb-4"
                />
                <CardTitle className="text-slate-100">
                  Закаленное стекло
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400 text-center">
                  Безопасность и долговечность. Устойчивость к ударам и
                  температурным перепадам.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader className="text-center">
                <Icon
                  name="Wrench"
                  size={48}
                  className="text-slate-300 mx-auto mb-4"
                />
                <CardTitle className="text-slate-100">
                  Алюминиевый профиль
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400 text-center">
                  Легкость, прочность и коррозионная стойкость. Современный
                  внешний вид.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader className="text-center">
                <Icon
                  name="Ruler"
                  size={48}
                  className="text-slate-300 mx-auto mb-4"
                />
                <CardTitle className="text-slate-100">
                  Индивидуальные размеры
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400 text-center">
                  Изготовление по вашим размерам. Идеальное соответствие
                  интерьеру.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-100">
            Типы конструкций
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-600 overflow-hidden">
              <div className="h-48 bg-slate-700 flex items-center justify-center">
                <img
                  src="/img/f4ccec31-b7c8-4705-9356-288665c38798.jpg"
                  alt="Раздвижные"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-slate-100">Раздвижные</CardTitle>
                <CardDescription className="text-slate-400">
                  Экономия пространства и удобство использования
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Идеальны для небольших ванных комнат
                </p>
                <Button className="w-full bg-slate-700 hover:bg-slate-600">
                  Узнать цену
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600 overflow-hidden">
              <div className="h-48 bg-slate-700 flex items-center justify-center">
                <img
                  src="/img/adf23044-6a9a-4b28-92e8-70bb44a7c5d5.jpg"
                  alt="Распашные"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-slate-100">Распашные</CardTitle>
                <CardDescription className="text-slate-400">
                  Классическое решение для просторных ванных
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Широкий проход и элегантный вид
                </p>
                <Button className="w-full bg-slate-700 hover:bg-slate-600">
                  Узнать цену
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600 overflow-hidden">
              <div className="h-48 bg-slate-700 flex items-center justify-center">
                <Icon name="Layers" size={64} className="text-slate-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-slate-100">Складные</CardTitle>
                <CardDescription className="text-slate-400">
                  Компактность и функциональность
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Максимальная экономия места
                </p>
                <Button className="w-full bg-slate-700 hover:bg-slate-600">
                  Узнать цену
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-100">
            Наши услуги
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Icon
                name="Ruler"
                size={48}
                className="text-slate-300 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-slate-100 mb-2">
                Замер
              </h4>
              <p className="text-slate-400">
                Бесплатный выезд и точные измерения
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Wrench"
                size={48}
                className="text-slate-300 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-slate-100 mb-2">
                Установка
              </h4>
              <p className="text-slate-400">Профессиональный монтаж</p>
            </div>
            <div className="text-center">
              <Icon
                name="Shield"
                size={48}
                className="text-slate-300 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-slate-100 mb-2">
                Гарантия
              </h4>
              <p className="text-slate-400">5 лет на все изделия</p>
            </div>
            <div className="text-center">
              <Icon
                name="Headphones"
                size={48}
                className="text-slate-300 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-slate-100 mb-2">
                Сервис
              </h4>
              <p className="text-slate-400">Обслуживание и ремонт</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-100">
            Заказать замер
          </h3>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800 border-slate-600">
              <CardHeader>
                <CardTitle className="text-slate-100">
                  Оставьте заявку
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Мы свяжемся с вами в течение 30 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Имя
                    </label>
                    <Input
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Телефон
                    </label>
                    <Input
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Комментарий
                  </label>
                  <Textarea
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Опишите ваши пожелания"
                  />
                </div>
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/img/00a3c869-3a1b-4e2e-925b-261a24673a91.jpg"
                  alt="Viking Glass"
                  className="w-8 h-8 rounded-full"
                />
                <h4 className="text-xl font-bold text-slate-100">
                  Viking Glass
                </h4>
              </div>
              <p className="text-slate-400">
                Премиум душевые перегородки из закаленного стекла
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-100 mb-4">
                Контакты
              </h4>
              <div className="space-y-2 text-slate-400">
                <p>📞 +7 (999) 123-45-67</p>
                <p>📧 info@vikingglass.ru</p>
                <p>📍 Москва, ул. Примерная, 123</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-100 mb-4">
                Режим работы
              </h4>
              <div className="space-y-2 text-slate-400">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Viking Glass. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
