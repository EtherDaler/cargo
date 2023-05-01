from rest_framework import serializers
from .models import Countries, Cities
import datetime
from django.db import models


class CitiesSerializator(serializers.HyperlinkedModelSerializer):
    country = serializers.ReadOnlyField(source='country.name')

    class Meta:
        model = Cities
        fields = ('id', 'country', 'name')


class CitiesCreateSerializator(serializers.ModelSerializer):
    class Meta:
        model = Cities
        fields = ('id', 'country', 'name')


class CountriesSerializator(serializers.HyperlinkedModelSerializer):
    cities = CitiesSerializator(many=True)
    cities_num = serializers.SerializerMethodField()

    def get_cities_num(self, country):
        return Cities.objects.filter(country=country).count()

    class Meta:
        model = Countries
        fields = ('id', 'name', 'initials', 'code', 'flag', 'cities_num', 'cities')


class CountriesCreateSerializator(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Countries
        fields = ('__all__')
