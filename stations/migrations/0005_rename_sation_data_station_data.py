# Generated by Django 4.0 on 2021-12-11 11:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0004_sation_data'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='sation_data',
            new_name='station_data',
        ),
    ]
