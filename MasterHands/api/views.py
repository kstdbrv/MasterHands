from django.http import HttpResponse
from django.shortcuts import render

from rest_framework import generics

from .serializers import *
from .models import *


class SupercategoryListCreate(generics.ListCreateAPIView):
    """
    Возвращает сериализованный список всех разделов,
    категорий, подкатегорий, услуг, в
    иерархическом порядке
    """
    queryset = Supercategory.objects.all()
    serializer_class = SupercategorySerializer


class SupercategoryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    """
    Возвращает сериализованый раздел по id,
    вместе со входящими в него категориями, подкатегориями,
    услугами, а так же обрабатывает POST, PUT, DELETE
    """
    queryset = Supercategory.objects.all()
    serializer_class = SupercategorySerializer


class CategoryListCreate(generics.ListCreateAPIView):
    """
    Возвращает сериализованный список всех
    категорий, подкатегорий, услуг, в
    иерархическом порядке
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    """
    Возвращает сериализованную категорию по id,
    вместе со входящими в нее подкатегориями,
    услугами, а так же обрабатывает POST, PUT, DELETE
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class SubcategoryListCreate(generics.ListCreateAPIView):
    """
    Возвращает сериализованный список всех
    подкатегорий и услуг, в иерархическом порядке
    """
    queryset = Subcategory.objects.all()
    serializer_class = SubcategorySerializer


class SubcategoryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    """
    Возвращает сериализованную подкатегорию по id,
    вместе со входящими в нее услугами, а так же
    обрабатывает POST, PUT, DELETE
    """
    queryset = Subcategory.objects.all()
    serializer_class = SubcategorySerializer


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
