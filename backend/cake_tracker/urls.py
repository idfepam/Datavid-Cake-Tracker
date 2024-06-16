from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from members.views import MemberViewSet
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


router = DefaultRouter()
router.register(r'members', MemberViewSet)

schema_view = get_schema_view(
    openapi.Info(
        title="Datavid Cake Tracker API",
        default_version='v1',
        description="API documentation for Datavid Cake Tracker",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@datavid.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
