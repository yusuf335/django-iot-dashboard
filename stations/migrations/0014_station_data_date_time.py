# Generated by Django 4.0 on 2021-12-18 01:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0013_station_data_device_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='station_data',
            name='date_time',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
