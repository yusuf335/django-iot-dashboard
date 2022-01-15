from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.

class stations (models.Model):
    station_name            = models.CharField(max_length=50, default='')
    device_id               = models.CharField(max_length=50, default='', unique=True)
    date_of_installation    = models.DateField(max_length=50, default='')

    def __str__(self):
        return f"{self.device_id}"

    class Meta:
        verbose_name_plural = 'Stations'


class station_data (models.Model):
    device          = models.ForeignKey(stations, on_delete=models.CASCADE)
    device_name     = models.CharField(max_length=20, default='')
    ph              = models.CharField(max_length=20, default='', blank=True)
    temperature     = models.CharField(max_length=20, default='', blank=True)
    turbidity       = models.CharField(max_length=20, default='', blank=True)
    ammonia         = models.CharField(max_length=20, default='', blank=True)

    longitude       = models.CharField(max_length=100, null=True, blank=True)
    latitude        = models.CharField(max_length=100, null=True, blank=True)

    date            = models.DateField(auto_now=True, null=True)
    time            = models.TimeField(auto_now=True, null=True)
    date_time       = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return f"{self.device_id}"

    class Meta:
        verbose_name_plural = 'Stations Data'

    