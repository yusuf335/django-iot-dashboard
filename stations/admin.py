from django.contrib import admin
from stations.models import stations, station_data

# Register your models here.

class stationsAdmin (admin.ModelAdmin):
    list_display    = ("station_name", "device_id", "date_of_installation")

class stationDataAdmin (admin.ModelAdmin):
    list_display    = ("device_id",)

admin.site.register(stations, stationsAdmin)
admin.site.register(station_data, stationDataAdmin)