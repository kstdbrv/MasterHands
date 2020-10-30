from mptt.templatetags.mptt_tags import cache_tree_children

from rest_framework import generics

from .serializers import *
from .models import *


class ServiceListCreate(generics.ListCreateAPIView):
    """
    Возвращает сериализованный список всех услуг
    """
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class ServiceRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    """
    Возвращает сериализованную услугу по id, а так же
    обрабатывает POST, PUT, DELETE
    """
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class CategoryListCreate(generics.ListCreateAPIView):

    def get_queryset(self):
        return cache_tree_children(Category.objects.filter(level=self.kwargs['lvl']))

    serializer_class = CategorySerializer


class CategoryRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
