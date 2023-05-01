from rest_framework.routers import DefaultRouter
from .views import CitiesViewSet, CountriesViewSet


class Router(DefaultRouter):
    def get_api_root_view(self, api_urls=None):
        root_view = super(Router, self).get_api_root_view(api_urls=api_urls)
        root_view.cls.__name__ = "Locations api root"
        root_view.cls.__doc__ = "Some locations api urls for requests"
        return root_view


router = Router()
router.register('cities', CitiesViewSet)
router.register('countries', CountriesViewSet)
urlpatterns = router.urls