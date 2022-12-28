from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *
from rest_framework import viewsets


# Create your views here.
############################################

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'annonceList':'/annonce-list/',
        'annonceDetail':'/annonce-detail/<str:pk>/',
        'annonceCreate':'/annonce-create/',
        'annonceUpdate':'/annonce-update/<str:pk>/',
        'annonceDelete':'/annonce-delete/<str:pk>/',
        'contactList':'/contact-list/',
        'contactDetail':'/contact-detail/<str:pk>/',
        'contactCreate':'/contact-create/',
        'contactUpdate':'/contact-update/<str:pk>/',
        'contactDelete':'/contact-delete/<str:pk>/',
        


        }
    return Response(api_urls)

#views for annonce

# to show all the annonces
@api_view(['GET']) 
def annoncesList(request):
        annonces = Annonce.objects.all()
        serializer = AnnonceSerializer(annonces, many=True)
        return Response(serializer.data)

# to show a single annonce
@api_view(['GET'])
def annonceDetail(request, pk):
        annonces = Annonce.objects.get(id=pk)
        serializer = AnnonceSerializer(annonces, many=False)
        return Response(serializer.data)


# to create a annonce
@api_view(['POST'])
def annonceCreate(request):
        serializer = AnnonceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)



# to update a annonce
@api_view(['POST'])
def annonceUpdate(request, pk):
        annonce = Annonce.objects.get(id=pk)
        serializer = AnnonceSerializer(instance=annonce, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)


# to delete a annonce
@api_view(['DELETE'])
def annonceDelete(request, pk):
        annonce = Annonce.objects.get(id=pk)
        annonce.delete()
        return Response('Item succsesfully delete!')




############################################

#views for contact

# to show all the contacts
@api_view(['GET'])
def contactsList(request):
        contacts = Contact.objects.all()
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data)

# to show a single contact
@api_view(['GET'])
def contactDetail(request, pk):
        contacts = Contact.objects.get(id=pk)
        serializer = ContactSerializer(contacts, many=False)
        return Response(serializer.data)


# to create a contact
@api_view(['POST'])
def contactCreate(request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)



# to update a contact
@api_view(['POST'])
def contactUpdate(request, pk):
        contact = Contact.objects.get(id=pk)
        serializer = ContactSerializer(instance=contact, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)


# to delete a contact
@api_view(['DELETE'])
def contactDelete(request, pk):
        contact = Contact.objects.get(id=pk)
        contact.delete()
        return Response('Item succsesfully delete!')


############################################

#views for lieu

# to show all the lieus
@api_view(['GET'])
def lieusList(request):
        lieus = Lieu.objects.all()
        serializer = LieuSerializer(lieus, many=True)
        return Response(serializer.data)

# to show a single lieu

@api_view(['GET'])
def lieuDetail(request, pk):
        lieus = Lieu.objects.get(id=pk)
        serializer = LieuSerializer(lieus, many=False)
        return Response(serializer.data)


# to create a lieu
@api_view(['POST'])
def lieuCreate(request):
        serializer = LieuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)



# to update a lieu
@api_view(['POST'])
def lieuUpdate(request, pk):
        lieu = Lieu.objects.get(id=pk)
        serializer = LieuSerializer(instance=lieu, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)


# to delete a lieu

@api_view(['DELETE'])
def lieuDelete(request, pk):
        lieu = Lieu.objects.get(id=pk)
        lieu.delete()
        return Response('Item succsesfully delete!')








        
        


 
# # create a class for the Todo model viewsets
# class taskView(viewsets.ModelViewSet):
 
#     # create a serializer class and
#     # assign it to the TodoSerializer class
#     serializer_class = TaskSerializer
 
#     # define a variable and populate it
#     # with the Todo list objects
#     queryset = Task.objects.all()

