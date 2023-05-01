from django.contrib import admin
from .models import Cargoes, Events, Shipment, PayType, PayStatus, Status

admin.site.register(Shipment)
admin.site.register(PayType)
admin.site.register(PayStatus)
admin.site.register(Status)


class EventsInline(admin.StackedInline):
    model = Events


class CargoesAdmin(admin.ModelAdmin):
    list_display = ['felial', 'name', 'status', 'delivery_price', 'weight', 'pay_status', 'shipping_date']
    list_filter = ['status', 'pay_status', 'shipping_type', 'recipient_country', 'shipping_date']
    # list_editable = ['discount', 'active'] # используется для задания полей, которые могут быть отредактированы на странице отображения списка сайта администрирования
    prepopulated_fields = {'slug': ('name', 'felial', 'date_create')}
    search_fields = ['name', 'slug']
    inlines = [EventsInline]


admin.site.register(Cargoes, CargoesAdmin)
