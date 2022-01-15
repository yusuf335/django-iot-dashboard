# Generated by Django 4.0 on 2021-12-11 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0007_station_data_date_station_data_time'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='station_data',
            options={'verbose_name_plural': 'Stations Data'},
        ),
        migrations.AlterField(
            model_name='station_data',
            name='device_id',
            field=models.CharField(default='', max_length=50),
        ),
    ]
