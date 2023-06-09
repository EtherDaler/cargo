# Generated by Django 4.1.6 on 2023-02-09 22:31

from django.db import migrations, models
#


class Migration(migrations.Migration):

    dependencies = [
        ("countries", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="countries",
            name="code",
            field=models.PositiveIntegerField(null=True, verbose_name="Код страны"),
        ),
        migrations.AddField(
            model_name="countries",
            name="initials",
            field=models.CharField(
                max_length=255, null=True, verbose_name="Сокращенное название"
            ),
        ),
    ]
