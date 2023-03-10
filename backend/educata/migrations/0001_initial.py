# Generated by Django 4.1.4 on 2022-12-26 03:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Annonce',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('categorie', models.CharField(choices=[('primaire', 'primaire'), ('college', 'college'), ('lycee', 'lycee')], max_length=200)),
                ('theme', models.CharField(choices=[('maths', 'maths'), ('physique', 'physique'), ('sciences', 'sciences'), ('francais', 'francais'), ('anglais', 'anglais'), ('arabe', 'arabe'), ('histoire', 'histoire'), ('geographie', 'geographie'), ('svt', 'svt'), ('technologie', 'technologie'), ('informatique', 'informatique'), ('musique', 'musique'), ('dessin', 'dessin'), ('sport', 'sport'), ('autre', 'autre')], max_length=200)),
                ('modalite', models.CharField(choices=[('offline', 'offline'), ('online', 'online')], max_length=200)),
                ('description', models.CharField(max_length=200)),
                ('tarif', models.IntegerField()),
                ('dateCreated', models.DateTimeField(auto_now_add=True)),
                ('dateUpdated', models.DateTimeField(auto_now_add=True)),
                ('photo', models.ImageField(upload_to='images/Announces/${id}')),
            ],
        ),
        migrations.CreateModel(
            name='Lieu',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('wilaya', models.CharField(max_length=200)),
                ('commune', models.CharField(max_length=200)),
                ('adresse', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('firstName', models.CharField(max_length=200)),
                ('lastName', models.CharField(max_length=200)),
                ('password', models.CharField(max_length=200)),
                ('email', models.CharField(max_length=200)),
                ('telephone', models.CharField(max_length=200)),
                ('photo', models.ImageField(upload_to='Images/Users')),
                ('lieu', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='educata.lieu')),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('dateCreated', models.DateTimeField(auto_now_add=True)),
                ('photo', models.ImageField(upload_to='images/Notifications/${id}')),
                ('annonce', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='educata.annonce')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='educata.user')),
            ],
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('dateCreated', models.DateTimeField(auto_now_add=True)),
                ('dateUpdated', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='educata.user')),
            ],
        ),
        migrations.AddField(
            model_name='annonce',
            name='contact',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='educata.contact'),
        ),
        migrations.AddField(
            model_name='annonce',
            name='lieu',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='educata.lieu'),
        ),
    ]
