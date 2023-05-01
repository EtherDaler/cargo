from django.shortcuts import render

from rest_framework import status
from rest_framework.mixins import RetrieveModelMixin
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.views import APIView
from rest_framework_api_key.permissions import HasAPIKey

from .models import Cargoes, Status, Shipment, PayType, PayStatus
from .serializers import CargoesSerializer, StatusSerializer, ShipmentSerializer, PayStatusSerializer, \
    PayTypeSerializator, CargoesCreateSerializer
from .permissions import IsOwner, IsStaff


def simpleUser(user):
    if user.is_superuser or user.is_staff() or user.is_manager() or user.is_delivery():
        return False
    return True


def notSimpleUser(user):
    return user.is_authenticated and (user.is_admin or user.is_superuser or user.is_staff or user.is_manager)


class CargoesViewSet(ModelViewSet):
    queryset = Cargoes.objects.all()
    http_method_names = ['get', 'post']
    permission_classes = [HasAPIKey, IsAuthenticated]
    lookup_field = 'slug'
    serializer_class = CargoesSerializer

    def list(self, request, *args, **kwargs):
        self.serializer_class = CargoesSerializer
        if simpleUser(request.user):
            queryset = Cargoes.objects.filter(recipient=request.user.id)
        else:
            queryset = Cargoes.objects.all()
        serializer = CargoesSerializer(queryset, many=True, context={'request': request})
        permission_classes = [HasAPIKey, IsStaff]
        return Response(serializer.data)

    def retrieve(self, request, slug=None):
        self.serializer_class = CargoesSerializer
        if simpleUser(request.user):
            queryset = Cargoes.objects.filter(recipient=request.user.id)
        else:
            queryset = Cargoes.objects.all()
        cargo = get_object_or_404(queryset, slug=slug)
        serializer = CargoesSerializer(cargo, context={'request': request})
        return Response(serializer.data)

    def create(self, request):
        if notSimpleUser(request.user) is True:
            self.serializer_class = CargoesCreateSerializer
            serializer = CargoesCreateSerializer(data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response({'data': "HAVE NOT PERMISSIONS"}, status=status.HTTP_403_FORBIDDEN)


class MyCargoesViewSet(ModelViewSet):
    queryset = Cargoes.objects.all()
    http_method_names = ['get']

    def list(self, request):
        queryset = Cargoes.objects.filter(recipient=request.user.id)
        serializer = CargoesSerializer(queryset, many=True, context={'request': request})
        permission_classes = [IsOwner]
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Cargoes.objects.filter(recipient=request.user.id)
        serializer = CargoesSerializer(queryset, pk=pk, context={'request': request})
        permission_classes = [IsOwner]
        return Response(serializer.data)


class LastCargoesView(APIView):
    permission_classes = [HasAPIKey, IsAuthenticated]

    def get(self, request, format=None):
        cargoes = Cargoes.objects.filter(recipient=request.user).order_by('-id')[:3]
        serializer = CargoesSerializer(cargoes, many=True, context={'request': request})
        return Response({"data": serializer.data})


class StatusViewSet(ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer
    http_method_names = ['get', 'post']
    permission_classes = [HasAPIKey, IsAuthenticated]

    def list(self, request, *args, **kwargs):
        queryset = Status.objects.all()
        serializer = StatusSerializer(queryset, many=True, context={'request': request})
        permission_classes = [HasAPIKey, IsStaff]
        return Response(serializer.data)

    def retrieve(self, request, id=None):
        queryset = Status.objects.all()
        status = get_object_or_404(queryset, id=id)
        serializer = StatusSerializer(status, context={'request': request})
        return Response(serializer.data)

    def create(self, request):
        if notSimpleUser(request.user) is True:
            self.serializer_class = StatusSerializer
            serializer = StatusSerializer(data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response({'data': "HAVE NOT PERMISSIONS"}, status=status.HTTP_403_FORBIDDEN)


class PayTypeViewSet(ModelViewSet):
    queryset = PayType.objects.all()
    serializer_class = PayTypeSerializator
    http_method_names = ['get', 'post']
    permission_classes = [HasAPIKey, IsAuthenticated]

    def list(self, request, *args, **kwargs):
        queryset = PayType.objects.all()
        serializer = PayTypeSerializator(queryset, many=True, context={'request': request})
        permission_classes = [HasAPIKey, IsStaff]
        return Response(serializer.data)

    def retrieve(self, request, id=None):
        queryset = PayType.objects.all()
        pay_type = get_object_or_404(queryset, id=id)
        serializer = PayTypeSerializator(pay_type, context={'request': request})
        return Response(serializer.data)

    def create(self, request):
        if notSimpleUser(request.user) is True:
            self.serializer_class = PayTypeSerializator
            serializer = PayTypeSerializator(data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response({'data': "HAVE NOT PERMISSIONS"}, status=status.HTTP_403_FORBIDDEN)


class PayStatusViewSet(ModelViewSet):
    queryset = PayStatus.objects.all()
    serializer_class = PayStatusSerializer
    http_method_names = ['get', 'post']
    permission_classes = [HasAPIKey, IsAuthenticated]

    def list(self, request, *args, **kwargs):
        queryset = PayStatus.objects.all()
        serializer = PayStatusSerializer(queryset, many=True, context={'request': request})
        permission_classes = [HasAPIKey, IsStaff]
        return Response(serializer.data)

    def retrieve(self, request, id=None):
        queryset = PayStatus.objects.all()
        pay_type = get_object_or_404(queryset, id=id)
        serializer = PayStatusSerializer(pay_type, context={'request': request})
        return Response(serializer.data)

    def create(self, request):
        if notSimpleUser(request.user) is True:
            self.serializer_class = PayStatusSerializer
            serializer = PayStatusSerializer(data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response({'data': "HAVE NOT PERMISSIONS"}, status=status.HTTP_403_FORBIDDEN)


class ShipmentViewSet(ModelViewSet):
    queryset = Shipment.objects.all()
    serializer_class = ShipmentSerializer
    http_method_names = ['get', 'post']
    permission_classes = [HasAPIKey, IsAuthenticated]

    def list(self, request, *args, **kwargs):
        queryset = Shipment.objects.all()
        serializer = ShipmentSerializer(queryset, many=True, context={'request': request})
        permission_classes = [HasAPIKey, IsStaff]
        return Response(serializer.data)

    def retrieve(self, request, id=None):
        queryset = Shipment.objects.all()
        pay_type = get_object_or_404(queryset, id=id)
        serializer = ShipmentSerializer(pay_type, context={'request': request})
        return Response(serializer.data)

    def create(self, request):
        if notSimpleUser(request.user) is True:
            self.serializer_class = ShipmentSerializer
            serializer = ShipmentSerializer(data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response({'data': "HAVE NOT PERMISSIONS"}, status=status.HTTP_403_FORBIDDEN)
