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

from .serializers import FelialsSerializer, FelialsCreateSerializer
from .models import Felials, ExtraAdresFelials


class FelialsViewSet(ModelViewSet):
    queryset = Felials.objects.all()
    serializer_class = FelialsSerializer
    http_method_names = ['get', 'post']
    permission_classes = [HasAPIKey, IsAuthenticated]

    def list(self, request, *args, **kwargs):
        queryset = Felials.objects.all()
        serializer = FelialsSerializer(queryset, many=True, context={'request': request})
        permission_classes = [HasAPIKey, IsStaff]
        return Response(serializer.data)

    def retrieve(self, request, id=None):
        queryset = Felials.objects.all()
        felial = get_object_or_404(queryset, id=id)
        serializer = FelialsSerializer(felial, context={'request': request})
        return Response(serializer.data)

    def create(self, request):
        user_check = request.user.is_authenticated and \
                     (request.user.is_admin or request.user.is_superuser
                      or request.user.is_staff or request.user.is_manager)
        if user_check is True:
            self.serializer_class = FelialsCreateSerializer
            serializer = FelialsCreateSerializer(data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response({'data': "HAVE NOT PERMISSIONS"}, status=status.HTTP_403_FORBIDDEN)
