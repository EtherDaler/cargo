# Generated by Django 4.1.6 on 2023-02-04 13:48

import datetime
from django.db import migrations, models

#


class Migration(migrations.Migration):

    dependencies = [
        ("user", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="date_of_register",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(2023, 2, 4, 16, 48, 8, 652638),
                null=True,
                verbose_name="Дата регистрации",
            ),
        ),
        migrations.AlterField(
            model_name="user",
            name="last_visit",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(2023, 2, 4, 16, 48, 8, 652638),
                verbose_name="Последняя активность",
            ),
        ),
    ]
