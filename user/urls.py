from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import UserViewSet, UserProfileViewSet


class Router(DefaultRouter):
    def get_api_root_view(self, api_urls=None):
        root_view = super(Router, self).get_api_root_view(api_urls=api_urls)
        root_view.cls.__name__ = "Cargo api root"
        root_view.cls.__doc__ = "Some cargoes api urls for requests"
        return root_view


router = Router()
router.register('users', UserViewSet)
router.register('profile', UserProfileViewSet)
urlpatterns = router.urls

"""
urlpatterns = [
    path('registration', views.registration, name='registration'),
]
"""
