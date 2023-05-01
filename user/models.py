import datetime
import pytz
import qrcode

from django.conf import settings
from django.core.mail import send_mail
from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
from django.contrib.auth.models import PermissionsMixin
from countries.models import Countries, Cities
from django.utils.timezone import localtime

def default_datetime():
    return datetime.datetime.now()

def now():
    utc = pytz.utc.localize(datetime.datetime.utcnow())
    instance_time_zone = pytz.timezone(settings.TIME_ZONE)
    return instance_time_zone.normalize(utc.astimezone(instance_time_zone))


class UserManager(BaseUserManager):
    def create_user(self, phone, password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not phone:
            raise ValueError('Users must have a phone number')

        user = self.model(
            phone=phone,
        )
        qr_code = qrcode.make('http://127.0.0.1:8000/user/' + str(phone))
        url = 'media/user/images/qr_code/qr_' + str(phone) + '-' + str(default_datetime().hour) + '-' \
              + str(default_datetime().minute) + '-' + str(default_datetime().second) + '.png'
        file = qr_code.save('media/user/images/qr_code/qr_' + str(phone) + '-' + str(default_datetime().hour) + '-' \
              + str(default_datetime().minute) + '-' + str(default_datetime().second) + '.png')
        #print(str(url[6:]))
        user.qr_code = str(url[6:])
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, phone, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            password=password,
            phone=phone,
        )
        user.admin = True
        user.staff = True
        user.manager = True
        user.delivery = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        verbose_name='email адрес',
        max_length=255,
    )
    phone = models.CharField(max_length=255, verbose_name="Телефон", unique=True)
    first_name = models.CharField(max_length=255, blank=True, verbose_name="Имя")
    last_name = models.CharField(max_length=255, blank=True, verbose_name="Фамилия")
    country = models.ForeignKey(Countries, on_delete=models.CASCADE, verbose_name="Страна", null=True)
    city = models.ForeignKey(Cities, on_delete=models.CASCADE, verbose_name="Город", null=True)
    adres = models.CharField(max_length=512, blank=True, verbose_name="Адрес")
    qr_code = models.ImageField(upload_to="user/images/qr_code", verbose_name="QR")
    manager = models.BooleanField(default=False, verbose_name="Мэнеджер")
    delivery = models.BooleanField(default=False, verbose_name="Ответственный за доставку")
    partner = models.BooleanField(default=False, verbose_name='Партнер')
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    date_of_register = models.DateTimeField(default=localtime(now()), null=True, blank=True,
                                            verbose_name='Дата регистрации')
    last_visit = models.DateTimeField(verbose_name='Последняя активность', default=localtime(now()), blank=True)
    login_count = models.PositiveIntegerField(verbose_name='Количество входов на сайт', default=1, blank=True)
    edit_count = models.PositiveIntegerField(verbose_name='Количество редактирований профиля', default=1, blank=True)
    is_active = models.BooleanField(default=True)
    objects = UserManager()

    USERNAME_FIELD = 'phone'

    #REQUIRED_FIELDS = []

    def __str__(self):
        return self.phone

    class Meta:
        verbose_name = 'Пользователей'
        verbose_name_plural = 'Пользователи'

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.admin and self.is_active

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return self.admin and self.is_active

    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.staff

    def is_partner(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.partner

    def is_manager(self):
        return self.manager

    def is_delivery(self):
        return self.delivery

    def is_banned(self):
        return self.is_active

    @property
    def is_admin(self):
        "Is the user a member of admins?"
        # Simplest possible answer: All admins are staff
        return self.admin

    def get_full_name(self):
        return '%s %s' % (self.first_name, self.last_name)

    def email_user(self, subject, message, from_email=None, **kwargs):
        '''
        Отправляет электронное письмо этому пользователю.
        '''
        send_mail(subject, message, from_email, [self.email], **kwargs)

    def save(self, *args, **kwargs):
        self.edit_count += 1
        super().save()


class ExtraAdresUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Пользователь", related_name="extra_adres")
    country = models.ForeignKey(Countries, on_delete=models.CASCADE, verbose_name="Страна")
    city = models.ForeignKey(Cities, on_delete=models.CASCADE, verbose_name="Город")
    adres = models.CharField(max_length=512, verbose_name="Адрес")