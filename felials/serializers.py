from rest_framework import serializers
from .models import Felials, ExtraAdresFelials, Positions, Crew
from user.serializers import UserSerializer
from django.db import models


class PositionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Positions
        fields = ('__all__')


class CrewSerializer(serializers.ModelSerializer):
    position = PositionsSerializer()

    class Meta:
        model = Crew
        fields = ('__all__')


class ExtraAdresFelialsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtraAdresFelials
        fields = ('__all__')


class FelialsSerializer(serializers.ModelSerializer):
    owner = UserSerializer()
    crew = CrewSerializer(many=True)
    extra_adres = ExtraAdresFelialsSerializer(many=True)

    class Meta:
        model = Felials
        fields = ('__all__')


class FelialsCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Felials
        fields = ('__all__')
