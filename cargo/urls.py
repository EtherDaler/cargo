from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/user/", include('user.urls')),
    path("api/v1/cargoes/", include('mainApp.urls')),
    path("api/v1/felials/", include('felials.urls')),
    path("api/v1/locations/", include('countries.urls')),
    path('api/v1/oauth/', include('drf_social_oauth2.urls',)),
    path('api/v1/auth/', include('djoser.urls')),
    path('api/v1/auth/', include('djoser.urls.authtoken')),
    path('api/v1/auth/', include('djoser.urls.jwt')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
