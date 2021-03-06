# Generated by Django 4.0 on 2021-12-11 10:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0003_alter_stations_options_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='sation_data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ph', models.CharField(blank=True, default='', max_length=20)),
                ('temperature', models.CharField(blank=True, default='', max_length=20)),
                ('device_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stations.stations')),
            ],
        ),
    ]
