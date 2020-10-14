from django.http import HttpResponse
from django.shortcuts import render

from rest_framework import generics

from .serializers import *
from .models import *


class SupercategoryListCreate(generics.ListCreateAPIView):
    queryset = Supercategory.objects.all()
    serializer_class = SuperategorySerializer


class SupercategoryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Supercategory.objects.all()
    serializer_class = SuperategorySerializer


class CategoryListCreate(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ServiceListCreate(generics.ListCreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class SeviceRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class SubcategoryListCreate(generics.ListCreateAPIView):
    queryset = Subcategory.objects.all()
    serializer_class = SubcategorySerializer


class SubcategoryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subcategory.objects.all()
    serializer_class = SubcategorySerializer