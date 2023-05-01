from django.contrib import admin
from .models import Countries, Cities


class CitiesInline(admin.StackedInline):
    model = Cities


class CountriesAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']
    inlines = [CitiesInline]


admin.site.register(Countries, CountriesAdmin)
