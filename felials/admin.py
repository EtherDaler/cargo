from django.contrib import admin
from .models import Felials, ExtraAdresFelials, Crew, Positions

admin.site.register(Positions)


class CrewInline(admin.StackedInline):
    model = Crew


class ExtraAdresInline(admin.StackedInline):
    model = ExtraAdresFelials


class FelialsAdmin(admin.ModelAdmin):
    list_display = ['name', 'owner', 'phone', 'country', 'city', 'adres', 'status']
    list_filter = ['status', 'country']
    search_fields = ['name', 'phone']
    inlines = [CrewInline, ExtraAdresInline]


admin.site.register(Felials, FelialsAdmin)
