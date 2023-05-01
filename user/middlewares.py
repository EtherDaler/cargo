import datetime
import asyncio
from django.utils.decorators import sync_and_async_middleware
import pytz
from django.conf import settings
from django.utils.timezone import localtime


@sync_and_async_middleware
def last_visit_middleware(get_response):
    utc = pytz.utc.localize(datetime.datetime.utcnow())
    instance_time_zone = pytz.timezone(settings.TIME_ZONE)
    now = instance_time_zone.normalize(utc.astimezone(instance_time_zone))
    # One-time configuration and initialization goes here.
    if asyncio.iscoroutinefunction(get_response):
        async def middleware(request):
            if request.user.is_authenticated:
                request.user.last_visit = localtime(now)
                request.user.save()
            response = await get_response(request)
            return response

    else:
        def middleware(request):
            if request.user.is_authenticated:
                request.user.last_visit = localtime(now)
                request.user.save()
            response = get_response(request)
            return response

    return middleware
