# Generated by Django 4.1.6 on 2023-02-14 00:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("user", "0004_alter_user_date_of_register_alter_user_last_visit"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="date_of_register",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(
                    2023, 2, 14, 0, 43, 53, 349121, tzinfo=datetime.timezone.utc
                ),
                null=True,
                verbose_name="Дата регистрации",
            ),
        ),
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.EmailField(max_length=255, verbose_name="email адрес"),
        ),
        migrations.AlterField(
            model_name="user",
            name="last_visit",
            field=models.DateTimeField(
                blank=True,
                default=datetime.datetime(
                    2023, 2, 14, 0, 43, 53, 405140, tzinfo=datetime.timezone.utc
                ),
                verbose_name="Последняя активность",
            ),
        ),
    ]