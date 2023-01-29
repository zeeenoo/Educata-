from django.urls import path
from . import views
# from .views import AnnonceViewSet, apiOverview
from rest_framework import routers


# urlpatterns = [
#     # path('api-overview/', apiOverview, name='api-overview'),
#     # path('', views.apiOverview, name="api-overview"),
#     # path('annonce-list/', views.annoncesList, name="annonce-list"),
#     # path('annonce-detail/<str:pk>/', views.annonceDetail, name="annonce-detail"),
#     # path('annonce-create/', views.annonceCreate, name="annonce-create"),
#     # path('annonce-update/<str:pk>/', views.annonceUpdate, name="annonce-update"),
#     # path('annonce-delete/<str:pk>/', views.annonceDelete, name="annonce-delete"),
#     # path('contact-list/', views.contactsList, name="contact-list"),
#     # path('contact-detail/<str:pk>/', views.contactDetail, name="contact-detail"),
#     # path('contact-create/', views.contactCreate, name="contact-create"),
#     # path('contact-update/<str:pk>/', views.contactUpdate, name="contact-update"),
#     # path('contact-delete/<str:pk>/', views.contactDelete, name="contact-delete"),
#     # path('lieu-list/', views.lieusList, name="lieu-list"),
#     # path('lieu-detail/<str:pk>/', views.lieuDetail, name="lieu-detail"),
#     # path('lieu-create/', views.lieuCreate, name="lieu-create"),
#     # path('lieu-update/<str:pk>/', views.lieuUpdate, name="lieu-update"),
#     # path('lieu-delete/<str:pk>/', views.lieuDelete, name="lieu-delete"),
#     path('google-signup/', views.googleSignup, name='google_signup'),

    





    




# ]

# from django.urls import path, include
# from .views import AnnonceViewSet

# annonce_list = AnnonceViewSet.as_view({'get': 'list', 'post': 'create'})
# annonce_detail = AnnonceViewSet.as_view({
#     'get': 'retrieve',
#     'put': 'update',
#     'patch': 'partial_update',
#     'delete': 'destroy'
# })

# urlpatterns = [
#     path('annonce-list/', annonce_list, name='annonce-list'),
#     path('annonce-detail/<str:pk>/',annonce_detail, name='annonce-detail'),
# path('annonce-create/', annonce_list, name='annonce-create'),
# path('annonce-update/str:pk/', annonce_detail, name='annonce-update'),
# path('annonce-delete/str:pk/', annonce_detail, name='annonce-delete'),
# ]
from django.urls import path
from .views import *

urlpatterns = [
    path('', apiOverview),
    # path('annonce-list/', AnnoncesList.as_view()),
    # path('annonce-detail/<str:pk>/', AnnonceDetail.as_view()),
    # path('annonce-create/', AnnonceCreate.as_view()),
    # path('annonce-update/<str:pk>/', AnnonceUpdate.as_view()),
    # path('annonce-delete/<str:pk>/', AnnonceDelete.as_view()),
    path('login/', LoginView.as_view(), name='login'),
    path('signup/', SignupView.as_view(), name='signup'),

    # path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
      #  For the list view:
    path('annonces/', AnnoncesList.as_view(), name='annonces-list'),

   # For the detail view:
    path('annonces/int:pk/', AnnonceDetail.as_view(), name='annonce-detail'),

   # For the create view:
    path('annonces/create/', AnnonceCreate.as_view(), name='annonce-create'),

   # For the update view:
    path('annonces/int:pk/update/', AnnonceUpdate.as_view(), name='annonce-update'),

   # For the delete view:
    path('annonces/int:pk/delete/', AnnonceDelete.as_view(), name='annonce-delete'),

    path('teachers/', TeacherListView.as_view(), name='teacher-list'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('saves/',SaveView.as_view())

]
