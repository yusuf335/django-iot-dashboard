# Generated by Django 4.0 on 2021-12-09 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='stations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('station_name', models.CharField(default='', max_length=50)),
                ('staion_ID', models.CharField(default='', max_length=50)),
                ('date_of_installation', models.DateField(default='', max_length=50)),
            ],
        ),
    ]
