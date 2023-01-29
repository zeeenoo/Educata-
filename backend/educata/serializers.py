from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=255, required=True)
    password = serializers.CharField(max_length=128, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)
   
    def validate(self, data):
        email = data.get("email", None)
        password = data.get("password", None)
        user = authenticate(email=email, password=password)
        if user is None:
            raise serializers.ValidationError(
                'A user with this email and password was not found.'
            )
        if not user.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )
        return {
            'email': user.email,
            'token': user.token
        }





class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  
        fields = ('email', 'firstName', 'lastName', 'telephone', 'lieu', 'isTeacher', 'photo')
        # extra_kwargs = {'password': {'write_only': True, 'min_length': 8}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = get_user_model()
#         fields = ('email', 'firstName', 'lastName', 'telephone', 'lieu', 'isTeacher', 'photo', 'password')
#         extra_kwargs = {'password': {'write_only': True, 'min_length': 8}}

#     def create(self, validated_data):
#         return get_user_model().objects.create_user(**validated_data)

# class LoginSerializer(serializers.Serializer):
#     email = serializers.CharField()
#     password = serializers.CharField(min_length=8, write_only=True)
#     token = serializers.CharField(read_only=True)


class LieuSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lieu
        fields = '__all__'


# class UserSerializer(serializers.ModelSerializer):
#     lieu= LieuSerializer(read_only=False,many=False)
#     class Meta:
#         model = User
#         fields = '__all__'




class AnnonceSerializer(serializers.ModelSerializer):
    lieu= LieuSerializer(read_only=False,many=False)
    # user= UserSerializer(read_only=False,many=False)
    class Meta:
        model = Annonce
        fields = '__all__'


class SaveSerializer(serializers.ModelSerializer):
    annonce= AnnonceSerializer(read_only=False,many=False)
    user= UserSerializer(read_only=False,many=False)
    class Meta:
        model = Save
        fields = '__all__'

    













