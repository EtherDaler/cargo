from django.db import models
from user.models import User
from countries.models import Countries, Cities


class Felials(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Владелец", related_name="felials")
    name = models.CharField(max_length=255, verbose_name="Название")
    email = models.EmailField(verbose_name="Email")
    phone = models.CharField(max_length=20, verbose_name="Телефон")
    country = models.ForeignKey(Countries, on_delete=models.CASCADE, verbose_name="Страна")
    city = models.ForeignKey(Cities, on_delete=models.CASCADE, verbose_name="Город")
    adres = models.CharField(max_length=512, verbose_name="Адрес")
    status = models.BooleanField(default=True, verbose_name="Работает")
    image = models.ImageField(upload_to="felials/image", verbose_name="Лого", default="felials/image/no-image.jpg", blank=True)
    pickup_price = models.PositiveIntegerField(verbose_name="Стоимость самовывоза ($)")
    user_delivery_price = models.PositiveIntegerField(verbose_name="Стоимость пользовательской доставки ($)")
    default_price = models.PositiveIntegerField(verbose_name="Стоимость доставки по умолчанию ($)")
    default_tax = models.PositiveIntegerField(verbose_name="Налог по умолчанию (%)")
    default_safe = models.PositiveIntegerField(verbose_name="Страхование по умолчанию ($)")
    back_deliv_price = models.PositiveIntegerField(verbose_name="Стоимость возвращенной доставки по умолчанию($)")

    class Meta:
        verbose_name = 'Филиалы'
        verbose_name_plural = 'Филиалы'

    def __str__(self):
        return self.name


class ExtraAdresFelials(models.Model):
    felial = models.ForeignKey(Felials, on_delete=models.CASCADE, verbose_name="Фелиал", related_name="extra_adres")
    country = models.ForeignKey(Countries, on_delete=models.CASCADE, verbose_name="Страна")
    city = models.ForeignKey(Cities, on_delete=models.CASCADE, verbose_name="Город")
    adres = models.CharField(max_length=512, verbose_name="Адрес")

    class Meta:
        verbose_name = 'Дополнительные адреса'
        verbose_name_plural = 'Дополнительные адреса'

    def __str__(self):
        return self.felial


class Positions(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название")

    class Meta:
        verbose_name = 'Должности'
        verbose_name_plural = 'Должности'

    def __str__(self):
        return self.name


class Crew(models.Model):
    felial = models.ForeignKey(Felials, on_delete=models.CASCADE, verbose_name="Фелиал", related_name="crew")
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Пользователь")
    position = models.ForeignKey(Positions, on_delete=models.SET_NULL, null=True, related_name="work_in")

    class Meta:
        verbose_name = 'Сотрудники'
        verbose_name_plural = 'Сотрудники'

    def __str__(self):
        return self.user
