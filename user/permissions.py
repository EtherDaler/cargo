from .models import User ## Default Django User Model
from rest_framework import permissions


class IsOwner(permissions.BasePermission):
      def has_permission(self, request, view):
           return request.user == User.objects.get(pk=view.kwargs['id']) or request.user.is_admin()