# Generated by Django 4.0 on 2022-01-09 12:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0018_station_data_station_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='station_data',
            name='station_name',
        ),
    ]
