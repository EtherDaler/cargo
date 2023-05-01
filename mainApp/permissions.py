from .models import Cargoes  # Default Django User Model
from rest_framework import permissions


class IsOwner(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and (request.user == view.queryset.recipient
                                                  or request.user.is_admin() or request.user.is_staff
                                                  or request.user == view.queryset.sender)

class IsStaff(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_admin() or request.user.is_superuser() or request.user.is_staff() or request.user.is_manager()


class IsAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_admin or request.user.is_superuser
