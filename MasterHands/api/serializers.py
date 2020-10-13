from rest_framework import serializers

from .models import *


class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = '__all__'


class SubcategorySerializer(serializers.ModelSerializer):
    services = ServiceSerializer(many=True)

    class Meta:
        model = Subcategory
        fields = ('id', 'subcategory_name', 'category', 'services')


class CategorySerializer(serializers.ModelSerializer):
    subcategory = SubcategorySerializer(many=True)

    class Meta:
        model = Category
        fields = ('id', 'category_name', 'subcategory')







