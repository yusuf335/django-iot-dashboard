from rest_framework import serializers
from stations.models import station_data, stations


class StationDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = station_data
        fields = ['id', 'device_id', 'device_name', 'ph', 'temperature', 'turbidity', 'ammonia', 'date', 'time', 'date_time', 'longitude', 'latitude']

class StationNewDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = station_data
        fields = ['id', 'device', 'device_name', 'ph', 'temperature', 'turbidity', 'ammonia', 'date', 'time', 'date_time', 'longitude', 'latitude']

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = stations
        fields = ['id', 'station_name', 'device_id', 'date_of_installation']

