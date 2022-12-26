from rest_framework import serializers
from .models import *



class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class AnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annonce
        fields = '__all__'

class LieuSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lieu
        fields = '__all__'









