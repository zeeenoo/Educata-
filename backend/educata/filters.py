from django_filters import *
from .models import Annonce


class AnnonceFilter(FilterSet):
    categorie = ChoiceFilter(choices=Annonce.category_options)
    theme = ChoiceFilter(choices=Annonce.theme_options)
    modalite = ChoiceFilter(choices=Annonce.modalite_options)
    tarif = NumberFilter()
    lieu__wilaya = CharFilter(lookup_expr='iexact')
    lieu__commune = CharFilter(lookup_expr='iexact')
    dateCreated = DateFilter(lookup_expr='gte')
    dateUpdated = DateFilter(lookup_expr='lte')

    class Meta:
        model = Annonce
        fields = ['categorie', 'theme', 'modalite', 'tarif', 'lieu__wilaya', 'lieu__commune', 'dateCreated', 'dateUpdated']
