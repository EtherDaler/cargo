import phonenumbers
import requests

from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.http import require_http_methods
from django.views.generic import TemplateView
from django.contrib.auth.hashers import make_password

from phonenumbers import carrier
from phonenumbers.phonenumberutil import number_type

from rest_framework import viewsets
from rest_framework import filters
from rest_framework.decorators import api_view, permission_classes
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import generics, permissions
from rest_framework.viewsets import ModelViewSet
from rest_framework_api_key.permissions import HasAPIKey
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView, CreateAPIView, ListAPIView, ListCreateAPIView, \
    RetrieveUpdateDestroyAPIView, get_object_or_404
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework import status

from .models import User
from .decorators import authenticated, unauthenticated
from .serializers import UserSerializer, MinUserSerializer
from .validators import phone_validate
from .permissions import IsOwner

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    http_method_names = ['get']

    def list(self, request):
        queryset = User.objects.all()
        serializer = MinUserSerializer(queryset, many=True)
        permission_classes = [HasAPIKey]
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = MinUserSerializer(user)

        permission_classes = [IsOwner]
        return Response(serializer.data)

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        if self.action == 'list':
            return self.queryset.filter(pk=self.request.user.id)
        return self.queryset

def activate(request):
    # email activation
    pass

@authenticated
def login_page(request):
    if request.method == 'POST':
        phone = request.POST.get('phone')
        password = request.POST.get('password')
        user = authenticate(request, phone=phone, password=password)
        if user is not None:
            login(request, user)
            return redirect('main')
        else:
            messages.error(request, 'Указан неверный логин или пароль')
        return render(request, 'user/login.html')

@unauthenticated
def logout_page(request):
    logout(request)
    return redirect('main')

def forget_password(request):
    pass

def reset_password(request):
    pass

class Profile(TemplateView):
    template_name = 'user/profile'

@unauthenticated
@require_http_methods(["POST"])
def edit(request):
    pass