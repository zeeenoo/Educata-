from rest_framework import serializers
from .models import *

class LieuSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lieu
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    lieu= LieuSerializer(read_only=False,many=False)
    class Meta:
        model = User
        fields = '__all__'



class ContactSerializer(serializers.ModelSerializer):
    user= UserSerializer(read_only=False,many=False)

    class Meta:
        model = Contact
        fields = '__all__'

class AnnonceSerializer(serializers.ModelSerializer):
    lieu= LieuSerializer(read_only=False,many=False)
    contact= ContactSerializer(read_only=False,many=False)
    class Meta:
        model = Annonce
        fields = '__all__'













