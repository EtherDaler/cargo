from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import CargoesViewSet, MyCargoesViewSet, LastCargoesView, StatusViewSet, ShipmentViewSet, PayStatusViewSet,\
    PayTypeViewSet, WorkStatusViewSet, AcceptTypeViewSet


class Router(DefaultRouter):
    def get_api_root_view(self, api_urls=None):
        root_view = super(Router, self).get_api_root_view(api_urls=api_urls)
        root_view.cls.__name__ = "Cargo api root"
        root_view.cls.__doc__ = "Some cargoes api urls for requests"
        return root_view


router = Router()
router.register('cargoes', CargoesViewSet)
router.register('status', StatusViewSet)
router.register('shipment', ShipmentViewSet)
router.register('pay_status', PayStatusViewSet)
router.register('pay_type', PayTypeViewSet)
router.register('my_cargoes', MyCargoesViewSet)
router.register('work_status', WorkStatusViewSet)
router.register('accept_type', AcceptTypeViewSet)
urlpatterns = router.urls
urlpatterns.append(path('last_cargoes/', LastCargoesView.as_view(), name='last_cargoes'))
