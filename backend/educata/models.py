from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.contrib.auth.models import BaseUserManager

#field option 


# Le lieu de la formation : Décrite par la Wilaya, la Commune et l’Adresse du bien immobilier.

class Lieu(models.Model):
    id = models.AutoField(primary_key=True)
    wilaya = models.CharField(max_length=200)
    commune = models.CharField(max_length=200)
    adresse = models.CharField(max_length=200)

    def __str__(self):
        return str(self.wilaya)






class UserManager(BaseUserManager):
    use_in_migrations = True
    
    def create_user(self,firstName,lastName, email, password, **extra_fields):
        """
        Create and save a user with the given email and password.
        """
        if not email:
            raise ValueError('The given email must be set')
        # email = self.normalize_email(email)
        user = self.model(email=email,firstName=firstName,lastName=lastName, **extra_fields)
        user.set_password(password)
        user.is_active=True
        user.is_staff=False

        user.save(using=self._db)

        return user


    def create_superuser(self, email, password,firstName,lastName, **extra_fields):
        # extra_fields.setdefault('is_superuser', True)
        # extra_fields.setdefault('is_staff', True)

        # if extra_fields.get('is_superuser') is not True:
        #     raise ValueError('Superuser must have is_superuser=True.')

        # return self.create_user(email, password,firstName,lastName, **extra_fields) 
        user = self.create_user(email=email,firstName=firstName,lastName=lastName,password=password, **extra_fields)
        user.set_password(password)
        user.is_staff=True
        user.is_superuser=True


        user.save(using=self._db)

        return user
    # def get_by_natural_key(self, email):
    #     return self.get(email=email)


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    telephone = models.CharField(max_length=200)
    lieu = models.ForeignKey(Lieu,null=True,blank=True, on_delete=models.CASCADE  )   
    isTeacher = models.BooleanField 
    is_staff = models.BooleanField (default=False)
    photo = models.ImageField(upload_to='Images/Users')
    objects= UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['firstName', 'lastName']
    
    # Add methods for checking JWT or Google auth token here
    def check_jwt_token(self, token):
        pass
    
    def check_google_token(self, token):
        pass
    
    def get_full_name(self):
        return f'{self.firstName} {self.lastName}'

    def get_short_name(self):
        return self.firstName








#class contact inherits from user
# class Contact(models.Model):
#     id = models.AutoField(primary_key=True)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     #date of creation
#     dateCreated = models.DateTimeField(auto_now_add=True)
#     dateUpdated = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return str(self.user)

# save model have the id of the user and the announce that saved

#announcer class








class Annonce(models.Model):
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

    id = models.AutoField(primary_key=True)
    categorie = models.CharField(max_length=200, choices=category_options)
    theme = models.CharField(max_length=200, choices=theme_options)
    modalite = models.CharField(max_length=200, choices=modalite_options)
    description = models.CharField(max_length=200)
    tarif = models.IntegerField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    lieu = models.ForeignKey(Lieu, on_delete=models.CASCADE )
    #date of creation
    dateCreated = models.DateTimeField(auto_now_add=True)
    dateUpdated = models.DateTimeField(auto_now_add=True)
    #allow multiple photos


    photo = models.ImageField(upload_to='images/Announces/${id}', )

    def __str__(self):
        return str(self.id)

# save model have the id of the user and the announce that saved
class Save(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    annonce = models.ForeignKey(Annonce, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)


# class Notification(models.Model):
#     id = models.AutoField(primary_key=True)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)

#     annonce = models.ForeignKey(Annonce, on_delete=models.CASCADE)
#     #date of creation
#     dateCreated = models.DateTimeField(auto_now_add=True)
#     #get a photo from the anouncer 
#     photo = models.ImageField(upload_to='images/Notifications/${id}')
    

#     def __str__(self):
#         return self.id







