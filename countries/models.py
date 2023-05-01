from django.db import models


class Countries(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название")
    initials = models.CharField(max_length=255, verbose_name="Сокращенное название", null=True)
    code = models.PositiveIntegerField(verbose_name="Код страны", null=True)
    flag = models.ImageField(upload_to="countries/flags", verbose_name="Флаг")

    class Meta:
        verbose_name = 'Страны'
        verbose_name_plural = 'Страны'

    def __str__(self):
        return self.name


class Cities(models.Model):
    country = models.ForeignKey(Countries, on_delete=models.CASCADE, verbose_name="Страна", related_name='cities')
    name = models.CharField(max_length=255, verbose_name="Название")

    class Meta:
        verbose_name = 'Города'
        verbose_name_plural = 'Города'

    def __str__(self):
        return self.name
