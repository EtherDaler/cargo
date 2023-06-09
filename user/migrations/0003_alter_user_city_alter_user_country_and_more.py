# Generated by Django 4.1.6 on 2023-02-05 01:52

import datetime
from django.db import migrations, models
import django.db.models.deletion
#


class Migration(migrations.Migration):

    dependencies = [
        ("countries", "0001_initial"),
        ("user", "0002_alter_user_date_of_register_alter_user_last_visit"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="city",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="countries.cities",
                verbose_name="Город",
            ),
        ),
        migrations.AlterField(
            model_name="user",
            name="country",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="countries.countries",
                verbose_name="Страна",
            ),
        ),
        migrations.AlterField(
            model_name="user",
            name="date_of_register",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(2023, 2, 5, 4, 52, 48, 616464),
                null=True,
                verbose_name="Дата регистрации",
            ),
        ),
        migrations.AlterField(
            model_name="user",
            name="last_visit",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(2023, 2, 5, 4, 52, 48, 616464),
                verbose_name="Последняя активность",
            ),
        ),
    ]
