import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    productType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  const products = [
    {
      id: 1,
      title: "Чехлы на матрасы",
      description: "Водонепроницаемые чехлы для полной защиты матраса от жидкостей",
      image: "/img/a4822c79-cd61-4341-ae7a-fbb79f5492fe.jpg",
      features: ["Гипоаллергенные", "Дышащие", "Машинная стирка"]
    },
    {
      id: 2, 
      title: "Наволочки на подушки",
      description: "Защитные наволочки с непромокаемым барьером",
      image: "/img/9fa2c988-f170-49ed-97ee-f49af5e13238.jpg",
      features: ["Мягкие на ощупь", "Антибактериальные", "Долговечные"]
    },
    {
      id: 3,
      title: "Пелёнки медицинские", 
      description: "Одноразовые и многоразовые впитывающие пелёнки",
      image: "/img/c77acd96-4415-485b-83f1-83bc7f94a8f4.jpg", 
      features: ["Высокая впитываемость", "Стерильные", "Экологичные"]
    }
  ];

  const advantages = [
    {
      icon: "Shield",
      title: "Полная защита",
      description: "100% защита от жидкостей и бактерий"
    },
    {
      icon: "Heart",
      title: "Гипоаллергенность",
      description: "Безопасные материалы для чувствительной кожи"
    },
    {
      icon: "Zap",
      title: "Быстрая доставка",
      description: "Отправка заказов в течение 24 часов"
    },
    {
      icon: "Award",
      title: "Сертификация",
      description: "Медицинские сертификаты качества"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Навигация */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Cross" className="h-8 w-8 text-primary mr-3" />
              <span className="text-xl font-bold text-gray-900">МедТекстиль</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#products" className="text-gray-700 hover:text-primary transition-colors">Продукция</a>
              <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Главный экран */}
      <section id="hero" className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Медицинские <span className="text-primary">непромокаемые чехлы</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Профессиональная защита постельных принадлежностей от жидкостей. 
              Гипоаллергенные материалы для медицинских учреждений и дома.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
                Посмотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="Download" className="h-5 w-5 mr-2" />
                Скачать прайс
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Продукция */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наша продукция
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр защитных изделий для медицинских учреждений и домашнего использования
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{product.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-primary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="advantages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы гарантируем высочайшее качество и надежность наших изделий
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О компании */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                О компании МедТекстиль
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Более 10 лет мы специализируемся на производстве высококачественных 
                медицинских защитных изделий. Наша продукция используется в ведущих 
                медицинских учреждениях страны.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Сертифицированное производство</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Контроль качества на каждом этапе</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Собственная лаборатория тестирования</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8 text-center">
                <Icon name="Factory" className="h-20 w-20 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+</h3>
                <p className="text-gray-600">Довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты и заказ */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Готовы ответить на все вопросы и помочь с выбором подходящих изделий
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Контактная информация */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Phone" className="h-5 w-5 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">+7 (495) 123-45-67</p>
                      <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" className="h-5 w-5 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">info@medtextile.ru</p>
                      <p className="text-gray-600">Ответим в течение часа</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" className="h-5 w-5 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">г. Москва, ул. Медицинская, 15</p>
                      <p className="text-gray-600">Офис и склад</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Быстрый заказ по телефону</h4>
                <p className="text-gray-600 mb-4">
                  Позвоните нам, и мы поможем выбрать подходящие изделия и рассчитаем стоимость
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  Заказать звонок
                </Button>
              </div>
            </div>

            {/* Форма заказа */}
            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="productType"
                      placeholder="Интересующая продукция"
                      value={formData.productType}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Дополнительная информация"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" className="h-4 w-4 mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Cross" className="h-8 w-8 text-primary mr-3" />
                <span className="text-xl font-bold">МедТекстиль</span>
              </div>
              <p className="text-gray-400">
                Надежная защита постельных принадлежностей от жидкостей
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Чехлы на матрасы</li>
                <li>Наволочки</li>
                <li>Пелёнки</li>
                <li>Пододеяльники</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Сертификаты</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@medtextile.ru</p>
                <p>г. Москва, ул. Медицинская, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МедТекстиль. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;