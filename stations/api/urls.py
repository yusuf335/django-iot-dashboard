from django.urls import path
from stations.api.views import StationListApiView, StationDetailsApiView, StationLastDataApiView,StationDataCreateApiView, StationDataByDateApiView, StationLocationApiView, AllStationLocationApiView

app_name = 'stations'

urlpatterns = [
    path('list/', StationListApiView, name='station-list'),
    path('create', StationDataCreateApiView, name='write-data'),
    path('<slug>', StationDetailsApiView, name="station-details"),
    path('data/<slug>', StationLastDataApiView, name="sataion-data"),
    path('data-by-date/<slug>', StationDataByDateApiView, name="station-data-by-date"),
    path('station-coordinate/<slug>', StationLocationApiView, name="station-location"),
    path('all-station-coordinate/', AllStationLocationApiView, name="all-station-location"),
]
