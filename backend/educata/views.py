from telnetlib import STATUS
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.request import Request
from rest_framework import status
from .models import Annonce
from .serializers import AnnonceSerializer
# from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from allauth.socialaccount.models import SocialAccount
from rest_framework.decorators import authentication_classes, permission_classes
# from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django_filters.rest_framework import DjangoFilterBackend
from .filters import AnnonceFilter
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import generics
from .models import Annonce
from .serializers import AnnonceSerializer
# from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework_jwt.settings import api_settings
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UserSerializer
from .models import User
import jwt, datetime
# from rest_framework_simplejwt.authentication import TokenAuthentication
# from rest_framework.authentication import SessionAuthentication

# class MyView(APIView):
#     authentication_classes = [TokenAuthentication, SessionAuthentication]
#     # ...

# from rest_framework.authentication import JSONWebTokenAuthentication
# from rest_framework_jwt.authentication import JSONWebTokenAuthentication

@api_view(['POST'])
@permission_classes([])
def googleSignup(request):
    data = request.data

    # Extract the required user information from the request data
    email = data.get('email')
    first_name = data.get('first_name')
    last_name = data.get('last_name')

    # Create a new user object with the provided information
    user = User.objects.create(
        email=email,
        first_name=first_name,
        last_name=last_name
    )

    # Send a response to the front-end indicating that the user has been created
    return Response({'message': 'User created successfully'})









# class GoogleOAuth2Authentication(BaseAuthentication):
#     def authenticate(self, request):
#         google_user = SocialAccount.objects.filter(provider='google', user=request.user)
#         if not google_user.exists():
#             raise AuthenticationFailed('User is not authenticated with Google')
#         return (request.user, None)


class TeacherListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetailView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field= 'id'



# Create your views here.
############################################

# @api_view(['GET'])
# def apiOverview(request):
#     api_urls = {
#         'annoncesList':'/annonce-list/',
#         'annonceDetail':'/annonce-detail/<str:pk>/',
#         'annonceCreate':'/annonce-create/',
#         'annonceUpdate':'/annonce-update/<str:pk>/',
#         'annonceDelete':'/annonce-delete/<str:pk>/',
#         'contactList':'/contact-list/',
#         'contactDetail':'/contact-detail/<str:pk>/',
#         'contactCreate':'/contact-create/',
#         'contactUpdate':'/contact-update/<str:pk>/',
#         'contactDelete':'/contact-delete/<str:pk>/',
        
        


#         }
#     return Response(api_urls)

# from rest_framework import viewsets
# from .models import Annonce
# from .serializers import AnnonceSerializer

# class AnnonceViewSet(viewsets.ModelViewSet):
#     queryset = Annonce.objects.all()
#     serializer_class = AnnonceSerializer
#     lookup_field = 'pk'







# class LoginView(APIView):
#     serializer_class = LoginSerializer

#     def post(self, request):
#         serializer = self.serializer_class(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data
#         jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
#         jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
#         payload = jwt_payload_handler(user)
#         token = jwt_encode_handler(payload)
#         return Response({'token': token}, status=status.HTTP_200_OK)


# class SignupView(APIView):
#     serializer_class = SignupSerializer

#     def post(self, request):
#         serializer = self.serializer_class(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.save()
#         jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
#         jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
#         payload = jwt_payload_handler(user)
#         token = jwt_encode_handler(payload)
#         return Response({'token': token}, status=status.HTTP_201_CREATED)


class SignupView(APIView):
    serializer_class = UserSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)



class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256').decode('utf-8')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response


class UserView(APIView):

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response



@api_view(['GET'])
def apiOverview(request):
    print(request)
    api_urls = {
        'List':'/annonce-list/',
        'Detail View':'/annonce-detail/<str:pk>/',
        'Create':'/annonce-create/',
        'Update':'/annonce-update/<str:pk>/',
        'Delete':'/annonce-delete/<str:pk>/',
    }

    return Response(api_urls)

class AnnoncesList(generics.ListAPIView):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = AnnonceFilter

class AnnonceDetail(generics.RetrieveAPIView):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    lookup_field = 'pk'


class AnnonceCreate(generics.CreateAPIView):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    # authentication_classes = (JSONWebTokenAuthentication,)
    permission_classes = [IsAuthenticated]

class AnnonceUpdate(generics.UpdateAPIView):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    # authentication_classes = (JSONWebTokenAuthentication,)
    permission_classes = [IsAuthenticated]
    lookup_field = 'pk'

class AnnonceDelete(generics.DestroyAPIView):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    # authentication_classes = (JSONWebTokenAuthentication,)
    permission_classes = [IsAuthenticated]
    lookup_field = 'pk'

class SaveView(generics.CreateAPIView):
    # authentication_classes = (JSONWebTokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    queryset = Save.objects.all()
    serializer_class = SaveSerializer

class UnsaveView(generics.DestroyAPIView):
    # authentication_classes = (JSONWebTokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    queryset = Save.objects.all()
    serializer_class = SaveSerializer





# @api_view(['GET'])
# def annoncesList(request):
#     annonces = Annonce.objects.all()
#     serializer = AnnonceSerializer(annonces, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def annonceDetail(request, pk):
#     annonce = Annonce.objects.get(id=pk)
#     serializer = AnnonceSerializer(annonce)
#     return Response(serializer.data)

# @authentication_classes([SessionAuthentication, BasicAuthentication, TokenAuthentication])
# @permission_classes([IsAuthenticated])
# @api_view(['POST'])
# def annonceCreate(request):
#     authentication_classes = (GoogleOAuth2Authentication,)

#     serializer = AnnonceSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['PUT'])
# def annonceUpdate(request, pk):
#     annonce = Annonce.objects.get(id=pk)
#     serializer = AnnonceSerializer(instance=annonce, data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['DELETE'])
# def annonceDelete(request, pk):
#     annonce = Annonce.objects.get(id=pk)
#     annonce.delete()
#     return Response(status=STATUS.HTTP_204_NO_CONTENT)






#views for annonce

# # to show all the annonces
# @api_view(['GET']) 
# def annoncesList(request):
#         annonces = Annonce.objects.all()
#         serializer = AnnonceSerializer(annonces, many=True)
#         return Response(serializer.data)

# # to show a single annonce
# @api_view(['GET'])
# def annonceDetail(request, pk):
#         annonces = Annonce.objects.get(id=pk)
#         serializer = AnnonceSerializer(annonces, many=False)
#         return Response(serializer.data)


# # to create a annonce
# @api_view(['POST'])
# def annonceCreate(request):
#         serializer = AnnonceSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#         return Response(serializer.data)



# # to update a annonce
# # @action(detail=True, methods=['put'])
# # def annonceUpdate(request, pk):
# #         annonce = Annonce.objects.get(id=pk)
# #         serializer = AnnonceSerializer(instance=annonce, data=request.data)
# #         if serializer.is_valid():
# #             serializer.save()
# #         return Response(serializer.data)
# @api_view(['PUT'])
# def annonceUpdate(request, pk):
#     request = request
#     annonce = Annonce.objects.get(id=pk)
#     serializer = AnnonceSerializer(instance=annonce, data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return HttpResponse(serializer.data)

# # @action(detail=True, methods=['put'])
# # def annonce_update(self, request, pk=None):
# #     annonce = self.get_object()
# #     serializer = self.get_serializer(annonce, data=request.data)
# #     serializer.is_valid(raise_exception=True)
# #     self.perform_update(serializer)
# #     return Response(serializer.data)

# # to delete a annonce
# @api_view(['DELETE'])
# def annonceDelete(request, pk):
#         annonce = Annonce.objects.get(id=pk)
#         annonce.delete()
#         return Response('Item succsesfully delete!')

# from rest_framework import viewsets
# from rest_framework.decorators import action
# from rest_framework.response import Response
# from .models import Annonce
# from .serializers import AnnonceSerializer

# class AnnonceViewSet(viewsets.ModelViewSet):
#     queryset = Annonce.objects.all()
#     serializer_class = AnnonceSerializer

#     @action(detail=False, methods=['get'])
#     def annonces_list(self, request):
#         annonces = self.get_queryset()
#         serializer = self.get_serializer(annonces, many=True)
#         return Response(serializer.data)

#     @action(detail=True, methods=['get'])
#     def annonce_detail(self, request, pk=None):
#         annonce = self.get_object()
#         serializer = self.get_serializer(annonce)
#         return Response(serializer.data)

#     @action(detail=False, methods=['post'])
#     def annonce_create(self, request):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         self.perform_create(serializer)
#         headers = self.get_success_headers(serializer.data)
#         return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

#     @action(detail=True, methods=['put', 'patch'])
#     def annonce_update(self, request, pk=None):
#         annonce = self.get_object()
#         serializer = self.get_serializer(annonce, data=request.data, partial=True)
#         serializer.is_valid(raise_exception=True)
#         self.perform_update(serializer)
#         return Response(serializer.data)

#     @action(detail=True, methods=['delete'])
#     def annonce_delete(self, request, pk=None):
#         annonce = self.get_object()
#         self.perform_destroy(annonce)
#         return Response(status=status.HTTP_204_NO_CONTENT)




############################################

#views for contact

# to show all the contacts
# @api_view(['GET'])
# def contactsList(request):
#         contacts = Contact.objects.all()
#         serializer = ContactSerializer(contacts, many=True)
#         return Response(serializer.data)

# # to show a single contact
# @api_view(['GET'])
# def contactDetail(request, pk):
#         contacts = Contact.objects.get(id=pk)
#         serializer = ContactSerializer(contacts, many=False)
#         return Response(serializer.data)


# # to create a contact
# @api_view(['POST'])
# def contactCreate(request):
#         serializer = ContactSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#         return Response(serializer.data)



# # to update a contact
# @api_view(['POST'])
# def contactUpdate(request, pk):
#         contact = Contact.objects.get(id=pk)
#         serializer = ContactSerializer(instance=contact, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#         return Response(serializer.data)


# # to delete a contact
# @api_view(['DELETE'])
# def contactDelete(request, pk):
#         contact = Contact.objects.get(id=pk)
#         contact.delete()
#         return Response('Item succsesfully delete!')


############################################

#views for lieu

# to show all the lieus
# @api_view(['GET'])
# def lieusList(request):
#         lieus = Lieu.objects.all()
#         serializer = LieuSerializer(lieus, many=True)
#         return Response(serializer.data)

# # to show a single lieu

# @api_view(['GET'])
# def lieuDetail(request, pk):
#         lieus = Lieu.objects.get(id=pk)
#         serializer = LieuSerializer(lieus, many=False)
#         return Response(serializer.data)


# # to create a lieu
# @api_view(['POST'])
# def lieuCreate(request):
#         serializer = LieuSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#         return Response(serializer.data)



# # to update a lieu
# @api_view(['POST'])
# def lieuUpdate(request, pk):
#         lieu = Lieu.objects.get(id=pk)
#         serializer = LieuSerializer(instance=lieu, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#         return Response(serializer.data)


# to delete a lieu

# @api_view(['DELETE'])
# def lieuDelete(request, pk):
#         lieu = Lieu.objects.get(id=pk)
#         lieu.delete()
#         return Response('Item succsesfully delete!')








        
        


 
# # create a class for the Todo model viewsets
# class taskView(viewsets.ModelViewSet):
 
#     # create a serializer class and
#     # assign it to the TodoSerializer class
#     serializer_class = TaskSerializer
 
#     # define a variable and populate it
#     # with the Todo list objects
#     queryset = Task.objects.all()

