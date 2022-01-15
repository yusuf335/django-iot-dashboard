from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from stations.models import stations, station_data
from datetime import datetime

# Create your views here.

@login_required
def stationListView (request):
    greeting = {}
    greeting['heading'] = "Stations"
    greeting['pageview'] = "Stations" 

    station_list = stations.objects.all()
  
    return render(request, 'stations/stations.html', {
        "greeting": greeting,
        "station_list": station_list,
    })

@login_required
def stationDetailsView (request, slug):
    greeting = {}
    greeting['heading'] = "Station Details"
    greeting['pageview'] = "Station Details" 

    stationDetail = stations.objects.get(device_id = slug)
    deviceID = stations.objects.filter(device_id = stationDetail).values()[0]['id']
    stationData = station_data.objects.filter(device = deviceID)
    stationData_Latest = station_data.objects.filter(device = deviceID).last()
    
    return render(request, 'stations/station_data.html', {
        "greeting": greeting,
        "station_detail": stationDetail,
        "station_data": stationData,
        "station_data_latest": stationData_Latest,
    })


