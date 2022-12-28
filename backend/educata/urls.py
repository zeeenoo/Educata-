from django.urls import path
from . import views
urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('annonce-list/', views.annoncesList, name="annonce-list"),
    path('annonce-detail/<str:pk>/', views.annonceDetail, name="annonce-detail"),
    path('annonce-create/', views.annonceCreate, name="annonce-create"),
    path('annonce-update/<str:pk>/', views.annonceUpdate, name="annonce-update"),
    path('annonce-delete/<str:pk>/', views.annonceDelete, name="annonce-delete"),
    path('contact-list/', views.contactsList, name="contact-list"),
    path('contact-detail/<str:pk>/', views.contactDetail, name="contact-detail"),
    path('contact-create/', views.contactCreate, name="contact-create"),
    path('contact-update/<str:pk>/', views.contactUpdate, name="contact-update"),
    path('contact-delete/<str:pk>/', views.contactDelete, name="contact-delete"),
    path('lieu-list/', views.lieusList, name="lieu-list"),
    path('lieu-detail/<str:pk>/', views.lieuDetail, name="lieu-detail"),
    path('lieu-create/', views.lieuCreate, name="lieu-create"),
    path('lieu-update/<str:pk>/', views.lieuUpdate, name="lieu-update"),
    path('lieu-delete/<str:pk>/', views.lieuDelete, name="lieu-delete"),




    




]