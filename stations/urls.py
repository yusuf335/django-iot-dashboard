from django.urls import path
from stations import views

urlpatterns = [
    path ('', views.stationListView, name="station-view"),

    path ('<slug>', views.stationDetailsView, name="station-data"),
]
