# Generated by Django 4.1.6 on 2023-05-04 07:17

from django.db import migrations
#


class Migration(migrations.Migration):

    dependencies = [
        ("countries", "0003_alter_cities_country"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="cities",
            options={"verbose_name": "Города", "verbose_name_plural": "Города"},
        ),
        migrations.AlterModelOptions(
            name="countries",
            options={"verbose_name": "Страны", "verbose_name_plural": "Страны"},
        ),
    ]
