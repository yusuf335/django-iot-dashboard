# Generated by Django 4.0 on 2022-01-08 01:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0014_station_data_date_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='station_data',
            name='latitude',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='station_data',
            name='longitude',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
