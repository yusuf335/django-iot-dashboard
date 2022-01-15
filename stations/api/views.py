from datetime import datetime
from django.db.models import Q
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view



from stations.models import station_data, stations
from stations.api.serializers import StationDataSerializer, StationNewDataSerializer,StationSerializer


@api_view(['GET',])
def StationListApiView(request):

    try:
        data = stations.objects.all()
    except stations.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = StationSerializer(data, many=True)
        return Response(serializer.data)


@api_view(['GET', ])
def StationDetailsApiView(request, slug):

    try:
        data = stations.objects.get(device_id = slug)
    except stations.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = StationSerializer(data)
        return Response(serializer.data)

@api_view(['GET', ])
def StationLastDataApiView(request, slug):

    try:
        data = station_data.objects.filter(device = slug).order_by('id').first()

    except stations.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = StationDataSerializer(data, many=True)
        return Response(serializer.data)

@api_view(['GET', ])
def StationDataByDateApiView(request, slug):

    try:
        data = station_data.objects.filter(Q(device = slug) & Q(date = datetime.date(datetime.now()))).order_by('id')

    except stations.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = StationDataSerializer(data, many=True)
        return Response(serializer.data)

@api_view(['GET',])
def StationLocationApiView(request, slug):

    try:
        location = station_data.objects.filter(device = slug).last()
    except stations.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = StationDataSerializer(location)
        return Response(serializer.data)

@api_view(['GET', ])
def AllStationLocationApiView(request):

    try:
        station_list = stations.objects.all()
        coordinate_array = []

        for x in range(len(station_list)):
            device_database_id= station_list[x].id
            station_details = station_data.objects.filter(device_id = device_database_id).values().last()
            longitude = station_details['longitude']
            latitude = station_details['latitude']
            coordinate = {}
            coordinate["longitude"] = longitude
            coordinate["latitude"] = latitude
            coordinate_array.append(coordinate)
                  
    except stations.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = StationDataSerializer(coordinate_array, many=True)
        return Response(serializer.data)


@api_view(['POST', ])
def StationDataCreateApiView(request):

    if request.method == 'POST':
        serializer = StationNewDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


