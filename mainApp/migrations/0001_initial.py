# Generated by Django 4.1.6 on 2023-02-04 13:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("felials", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Cargoes",
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
                (
                    "date_create",
                    models.DateTimeField(verbose_name="Дата и время создания"),
                ),
                ("shipment", models.CharField(max_length=255, verbose_name="Груз")),
                ("shipping_date", models.DateField(verbose_name="Дата отправки")),
                ("weight", models.PositiveIntegerField(verbose_name="Общий вес")),
                (
                    "weight_type",
                    models.CharField(max_length=255, verbose_name="Единица измерения"),
                ),
                (
                    "delivery_price",
                    models.PositiveIntegerField(verbose_name="Стоимость доставки"),
                ),
                (
                    "customs_clearance",
                    models.PositiveIntegerField(verbose_name="Растаможка"),
                ),
                (
                    "extra_expenses",
                    models.PositiveIntegerField(verbose_name="Дополнительные расходы"),
                ),
                (
                    "delivery_day",
                    models.PositiveIntegerField(verbose_name="Дни доставки"),
                ),
                ("payment_date", models.DateField(verbose_name="Дата оплаты")),
                (
                    "total_price",
                    models.PositiveIntegerField(verbose_name="Общая стоимость"),
                ),
                (
                    "qr_code",
                    models.ImageField(
                        upload_to="mainApp/images/qr_code", verbose_name="QR"
                    ),
                ),
                (
                    "bar_code",
                    models.ImageField(
                        upload_to="mainApp/images/bar_code", verbose_name="BAR"
                    ),
                ),
                (
                    "felial",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="cargoes",
                        to="felials.felials",
                        verbose_name="Фелиал",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="PayStatus",
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
            name="PayType",
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
            name="Shipment",
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
            name="Status",
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
            name="Events",
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
                ("date", models.DateField(verbose_name="Дата")),
                (
                    "after",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="after",
                        to="mainApp.status",
                    ),
                ),
                (
                    "before",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="before",
                        to="mainApp.status",
                    ),
                ),
                (
                    "cargo",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="events",
                        to="mainApp.cargoes",
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="cargoes",
            name="pay_status",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="mainApp.paystatus",
                verbose_name="Статус оплаты",
            ),
        ),
        migrations.AddField(
            model_name="cargoes",
            name="pay_type",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="mainApp.paytype",
                verbose_name="Способ оплаты",
            ),
        ),
    ]