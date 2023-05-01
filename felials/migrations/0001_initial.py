# Generated by Django 4.1.6 on 2023-02-04 13:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("countries", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Crew",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="ExtraAdresFelials",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("adres", models.CharField(max_length=512, verbose_name="Адрес")),
            ],
        ),
        migrations.CreateModel(
            name="Positions",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255, verbose_name="Название")),
            ],
        ),
        migrations.CreateModel(
            name="Felials",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255, verbose_name="Название")),
                ("email", models.EmailField(max_length=254, verbose_name="Email")),
                ("phone", models.CharField(max_length=20, verbose_name="Телефон")),
                ("adres", models.CharField(max_length=512, verbose_name="Адрес")),
                ("status", models.BooleanField(default=True, verbose_name="Работает")),
                (
                    "image",
                    models.ImageField(upload_to="felials/image", verbose_name="Лого"),
                ),
                (
                    "pickup_price",
                    models.PositiveIntegerField(
                        verbose_name="Стоимость самовывоза ($)"
                    ),
                ),
                (
                    "user_delivery_price",
                    models.PositiveIntegerField(
                        verbose_name="Стоимость пользовательской доставки ($)"
                    ),
                ),
                (
                    "default_price",
                    models.PositiveIntegerField(
                        verbose_name="Стоимость доставки по умолчанию ($)"
                    ),
                ),
                (
                    "default_tax",
                    models.PositiveIntegerField(verbose_name="Налог по умолчанию (%)"),
                ),
                (
                    "default_safe",
                    models.PositiveIntegerField(
                        verbose_name="Страхование по умолчанию ($)"
                    ),
                ),
                (
                    "back_deliv_price",
                    models.PositiveIntegerField(
                        verbose_name="Стоимость возвращенной доставки по умолчанию($)"
                    ),
                ),
                (
                    "city",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="countries.cities",
                        verbose_name="Город",
                    ),
                ),
                (
                    "country",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="countries.countries",
                        verbose_name="Страна",
                    ),
                ),
            ],
        ),
    ]
