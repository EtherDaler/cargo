from django.shortcuts import render

from rest_framework import status
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.views import APIView
from rest_framework_api_key.permissions import HasAPIKey

from mainApp.permissions import IsStaff
from mainApp.views import simpleUser

from .serializers import CountriesSerializator, CitiesSerializator, CountriesCreateSerializator, CitiesCreateSerializator
from .models import Countries, Cities


class CountriesViewSet(ModelViewSet):
    queryset = Countries.objects.all()
    serializer_class = CountriesSerializator
    http_method_names = ['get', 'post']
    permission_classes = [HasAPIKey, IsAuthenticated]

    def list(self, request, *args, **kwargs):
        queryset = Countries.objects.all()
        serializer = CountriesSerializator(queryset, many=True, context={'request': request})
        permission_classes = [HasAPIKey, IsStaff]
        return Response(serializer.data)

    def retrieve(self, request, id=None):
        queryset = Countries.objects.all()
        country = get_object_or_404(queryset, id=id)
        serializer = CountriesSerializator(country, context={'request': request})
        return Response(serializer.data)

    def create(self, request):
        user_check = request.user.is_authenticated and \
                     (request.user.is_admin or request.user.is_superuser
                      or request.user.is_staff or request.user.is_manager)
        if user_check is True:
            self.serializer_class = CountriesCreateSerializator
            serializer = CountriesCreateSerializator(data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response({'data': "HAVE NOT PERMISSIONS"}, status=status.HTTP_403_FORBIDDEN)


class CitiesViewSet(ModelViewSet):
    queryset = Cities.objects.all()
    serializer_class = CitiesSerializator
    http_method_names = ['get', 'post']
    permission_classes = [HasAPIKey, IsAuthenticated]

    def list(self, request):
        queryset = Cities.objects.all()
        country = self.request.query_params.get('country')
        if country is not None:
            queryset = queryset.filter(country__name=country)
        serializer = CitiesSerializator(queryset, many=True, context={'request': request})
        permission_classes = [HasAPIKey, IsStaff]
        return Response(serializer.data)

    def retrieve(self, request, id=None):
        queryset = Cities.objects.all()
        city = get_object_or_404(queryset, id=id)
        serializer = CitiesSerializator(city, context={'request': request})
        return Response(serializer.data)

    def create(self, request):
        user_check = request.user.is_authenticated and \
                     (request.user.is_admin or request.user.is_superuser
                      or request.user.is_staff or request.user.is_manager)
        if user_check is True:
            self.serializer_class = CitiesCreateSerializator
            serializer = CitiesCreateSerializator(data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response({'data': "HAVE NOT PERMISSIONS"}, status=status.HTTP_403_FORBIDDEN)
