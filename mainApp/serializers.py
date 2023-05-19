from rest_framework import serializers
from .models import Shipment, Status, PayType, PayStatus, Events, Cargoes, WorkStatus, AcceptType
from felials.serializers import FelialsSerializer
from user.models import User
from countries.models import Countries, Cities
from felials.models import Felials
from user.serializers import UserSerializer
from countries.serializers import CountriesSerializator, CitiesSerializator
from django.db import models


class ShipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipment
        fields = ('__all__')


class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = ('__all__')


class PayStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = PayStatus
        fields = ('__all__')


class PayTypeSerializator(serializers.ModelSerializer):
    class Meta:
        model = PayType
        fields = ('__all__')


class WorkStatusSerializator(serializers.ModelSerializer):
    class Meta:
        model = WorkStatus
        fields = ('__all__')


class AcceptTypeSerializator(serializers.ModelSerializer):
    class Meta:
        model = AcceptType
        fields = ('__all__')


class EventsSerialzer(serializers.ModelSerializer):
    before = serializers.CharField(source='before.name')
    after = serializers.CharField(source='after.name')

    class Meta:
        model = Events
        fields = ('id', 'date', 'before', 'after')


class CargoesSerializer(serializers.HyperlinkedModelSerializer):
    date_create = serializers.DateTimeField(read_only=True, format="%Y-%m-%d")
    pay_type = PayTypeSerializator()
    pay_status = PayStatusSerializer()
    # events = EventsSerialzer(read_only=True)
    shipping_type = ShipmentSerializer()
    status = StatusSerializer()
    felial = FelialsSerializer()
    work_status = WorkStatusSerializator()
    accept_type = AcceptTypeSerializator()
    #recipient = serializers.CharField(source='recipient.phone')
    #sender = serializers.CharField(source='sender.phone')
    sender_country = CountriesSerializator()
    recipient_country = CountriesSerializator()
    sender_city = CitiesSerializator()
    recipient_city = CitiesSerializator()
    events = EventsSerialzer(many=True)

    class Meta:
        model = Cargoes
        fields = (
            'id',
            'name',
            'date_create',
            'shipping_date',
            'shipping_type',
            'felial',
            'sender_phone',
            'sender_fullname',
            'sender_email',
            'recipient_phone',
            'recipient_fullname',
            'recipient_email',
            'status',
            'weight',
            'weight_type',
            'delivery_price',
            'customs_clearance',
            'extra_expenses',
            'sender_country',
            'recipient_country',
            'sender_city',
            'recipient_city',
            'delivery_day',
            'pay_type',
            'pay_status',
            'payment_date',
            'total_price',
            'work_status',
            'accept_type',
            'qr_code',
            'slug',
            'events'
        )


class CargoesCreateSerializer(serializers.HyperlinkedModelSerializer):
    felial = serializers.PrimaryKeyRelatedField(queryset=Felials.objects.all(), many=False)
    pay_type = serializers.PrimaryKeyRelatedField(queryset=PayType.objects.all(), many=False)
    pay_status = serializers.PrimaryKeyRelatedField(queryset=PayStatus.objects.all(), many=False)
    status = serializers.PrimaryKeyRelatedField(queryset=Status.objects.all(), many=False)
    shipping_type = serializers.PrimaryKeyRelatedField(queryset=Shipment.objects.all(), many=False)
    #recipient = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), many=False)
    #sender = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), many=False)
    sender_country = serializers.PrimaryKeyRelatedField(queryset=Countries.objects.all(), many=False)
    recipient_country = serializers.PrimaryKeyRelatedField(queryset=Countries.objects.all(), many=False)
    sender_city = serializers.PrimaryKeyRelatedField(queryset=Cities.objects.all(), many=False)
    recipient_city = serializers.PrimaryKeyRelatedField(queryset=Cities.objects.all(), many=False)
    work_status = serializers.PrimaryKeyRelatedField(queryset=WorkStatus.objects.all(), many=False)
    accept_type = serializers.PrimaryKeyRelatedField(queryset=AcceptType.objects.all(), many=False)

    class Meta:
        model = Cargoes
        fields = ("__all__")
