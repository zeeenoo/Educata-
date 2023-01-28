"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.views.generic import TemplateView
from educata import views
from rest_framework import routers




router = routers.DefaultRouter()
# router.register(r'annonce', AnnonceViewSet, basename='annonce')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('educata.urls')),
    path('',TemplateView.as_view(template_name= 'index.html')),
    path('accounts/', include('allauth.urls')),
    # path('api-overview/', apiOverview, name='api-overview'),
    # path('api-token-auth/', obtain_jwt_token),
    # path('api-token-refresh/', refresh_jwt_token),
    # path('api-token-verify/', verify_jwt_token),




]
