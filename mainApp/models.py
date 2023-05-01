import datetime
import qrcode

from django.db import models
from user.models import User
from countries.models import Countries, Cities
from felials.models import Felials
from pytils.translit import slugify


def default_datetime():
    return datetime.datetime.now()


class Shipment(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название")

    class Meta:
        verbose_name = 'Способы отгрузки'
        verbose_name_plural = 'Способы отгрузки'

    def __str__(self):
        return self.name


class Status(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название")

    class Meta:
        verbose_name = 'Статусы доставки'
        verbose_name_plural = 'Статусы доставки'

    def __str__(self):
        return self.name


class PayType(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название")

    class Meta:
        verbose_name = 'Способы оплаты'
        verbose_name_plural = 'Способы оплаты'

    def __str__(self):
        return self.name


class PayStatus(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название")

    class Meta:
        verbose_name = 'Статусы оплаты'
        verbose_name_plural = 'Статусы оплаты'

    def __str__(self):
        return self.name


class Cargoes(models.Model):
    date_create = models.DateTimeField(verbose_name="Дата и время создания", blank=True)
    name = models.CharField(max_length=255, verbose_name="Название груза", null=True)
    shipping_date = models.DateField(verbose_name="Дата отправки")
    shipping_type = models.ForeignKey(Shipment, on_delete=models.SET_NULL, null=True, verbose_name="Способ отправки")
    felial = models.ForeignKey(Felials, on_delete=models.SET_NULL, null=True, verbose_name="Фелиал",
                               related_name="cargoes")
    sender = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, verbose_name="Отправитель",
                               related_name="cargoes_send")
    recipient = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, verbose_name="Получатель",
                                  related_name="cargoes_recipient")
    status = models.ForeignKey(Status, on_delete=models.SET_NULL, null=True, verbose_name="Статус")
    weight = models.PositiveIntegerField(verbose_name="Общий вес")
    weight_type = models.CharField(max_length=255, verbose_name="Единица измерения")
    delivery_price = models.PositiveIntegerField(verbose_name="Стоимость доставки")
    customs_clearance = models.PositiveIntegerField(verbose_name="Растаможка")
    extra_expenses = models.PositiveIntegerField(verbose_name="Дополнительные расходы")
    sender_country = models.ForeignKey(Countries, on_delete=models.SET_NULL, null=True,
                                       verbose_name="Страна отправителя", related_name="cargoes_send")
    recipient_country = models.ForeignKey(Countries, on_delete=models.SET_NULL, null=True,
                                          verbose_name="Страна получателя", related_name="cargoes_recipient")
    sender_city = models.ForeignKey(Cities, on_delete=models.SET_NULL, null=True, verbose_name="Город отправителя",
                                    related_name="cargoes_sender")
    recipient_city = models.ForeignKey(Cities, on_delete=models.SET_NULL, null=True, verbose_name="Город получателя",
                                       related_name="cargoes_recipient")
    delivery_day = models.PositiveIntegerField(verbose_name="Дни доставки")
    pay_type = models.ForeignKey(PayType, on_delete=models.SET_NULL, null=True, verbose_name="Способ оплаты")
    pay_status = models.ForeignKey(PayStatus, on_delete=models.SET_NULL, null=True, verbose_name="Статус оплаты")
    payment_date = models.DateField(verbose_name="Дата оплаты")
    total_price = models.PositiveIntegerField(verbose_name="Общая стоимость")
    qr_code = models.ImageField(upload_to="mainApp/images/qr_code", verbose_name="QR", blank=True)
    bar_code = models.ImageField(upload_to="mainApp/images/bar_code", verbose_name="BAR", blank=True)
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name="URL", null=True)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.date_create = default_datetime()
            id = Cargoes.objects.last().id
            self.slug = slugify(self.name + '-' + str(id + 1) + '-' + str(self.date_create.day * self.date_create.second)
                                + '-' + str(self.date_create.month * self.date_create.minute)
                                + '-' + str(self.date_create.year * self.date_create.hour))
            qr_code = qrcode.make('http://127.0.0.1:8000/api/v1/cargoes/' + self.slug)
            url = 'media/mainApp/images/qr_code/qr_' + self.slug + '-' + str(default_datetime().hour) + '-' \
                  + str(default_datetime().minute) + '-' + str(default_datetime().second) + '.png'
            file = qr_code.save(url)
            # print(str(url[6:]))
            self.qr_code = str(url[6:])
        super(Cargoes, self).save(*args, **kwargs)


    class Meta:
        verbose_name = 'Грузы'
        verbose_name_plural = 'Грузы'

    def __str__(self):
        return self.name


class Events(models.Model):
    cargo = models.ForeignKey(Cargoes, on_delete=models.CASCADE, related_name="events", blank=True)
    date = models.DateField(verbose_name="Дата")
    before = models.ForeignKey(Status, on_delete=models.CASCADE, related_name='before')
    after = models.ForeignKey(Status, on_delete=models.CASCADE, related_name='after')

    class Meta:
        verbose_name = 'События'
        verbose_name_plural = 'События'

    def __str__(self):
        return self.cargo.name