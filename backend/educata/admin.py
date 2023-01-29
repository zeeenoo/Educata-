from django.contrib import admin
from .models import *
from .filters import AnnonceFilter
# Register your models here.
admin.site.register(Lieu)
admin.site.register(User)
admin.site.register(Save)
admin.site.register(Annonce)
# admin.site.register(AnnonceFilter)
# admin.site.register(UserManager)




