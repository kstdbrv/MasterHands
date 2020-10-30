from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from collections import OrderedDict

from .models import *


class ServiceSerializer(serializers.ModelSerializer):
    """
    Сериализует услуги в JSON
    """
    class Meta:
        model = Service
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    """
    Сериализует Категории в JSON, в иерархическом порядке
    с помощью рекурсивного обхода дочерних веток(RecursiveField),
    с сылкой на id родительского элемента.
    Так же убирает пустые поля, что бы в итоговом JSON их не было
    """
    children = RecursiveField(many=True, required=False)
    services = ServiceSerializer(many=True)

    def to_representation(self, instance):
        """
        Убирает пустые поля у Категории
        """
        result = super(CategorySerializer, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None and result[key] != []])

    class Meta:
        model = Category
        fields = ('id', 'name', 'svg_icon', 'parent', 'children', 'services')






