from django.db import models

#field option 
category_options= [
    ('primaire', 'primaire'),
    ('college', 'college'),
    ('lycee', 'lycee'),
]

theme_options= [
    ('maths', 'maths'),

    ('physique', 'physique'),
    ('sciences', 'sciences'),
    ('francais', 'francais'),
    ('anglais', 'anglais'),
    ('arabe', 'arabe'),
    ('histoire', 'histoire'),
    ('geographie', 'geographie'),
    ('svt', 'svt'),
    ('technologie', 'technologie'),
    ('informatique', 'informatique'),
    ('musique', 'musique'),
    ('dessin', 'dessin'),
    ('sport', 'sport'),
    ('autre', 'autre'),
]

modalite_options= [
    ('offline', 'offline'),
    ('online', 'online'),
]

# Le lieu de la formation : Décrite par la Wilaya, la Commune et l’Adresse du bien immobilier.

class Lieu(models.Model):
    id = models.AutoField(primary_key=True)
    wilaya = models.CharField(max_length=200)
    commune = models.CharField(max_length=200)
    adresse = models.CharField(max_length=200)

    def __str__(self):
        return self.id

class User(models.Model):
    id = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    telephone = models.CharField(max_length=200)
    lieu = models.ForeignKey(Lieu, on_delete=models.CASCADE)   
    isTeacher = models.BooleanField 
    photo = models.ImageField(upload_to='Images/Users')

    def __str__(self):
        return self.id

#class contact inherits from user
class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    #date of creation
    dateCreated = models.DateTimeField(auto_now_add=True)
    dateUpdated = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.id





class Annonce(models.Model):

    id = models.AutoField(primary_key=True)
    categorie = models.CharField(max_length=200, choices=category_options)
    theme = models.CharField(max_length=200, choices=theme_options)
    modalite = models.CharField(max_length=200, choices=modalite_options)
    description = models.CharField(max_length=200)
    tarif = models.IntegerField()
    contact = models.ForeignKey(Contact, on_delete=models.CASCADE)
    lieu = models.ForeignKey(Lieu, on_delete=models.CASCADE)
    #date of creation
    dateCreated = models.DateTimeField(auto_now_add=True)
    dateUpdated = models.DateTimeField(auto_now_add=True)

    photo = models.ImageField(upload_to='images/Announces/${id}')

    def __str__(self):
        return self.id



class Notification(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    annonce = models.ForeignKey(Annonce, on_delete=models.CASCADE)
    #date of creation
    dateCreated = models.DateTimeField(auto_now_add=True)
    #get a photo from the anouncer 
    photo = models.ImageField(upload_to='images/Notifications/${id}')
    

    def __str__(self):
        return self.id






