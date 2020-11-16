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
    services_count = serializers.ReadOnlyField(source='get_services_count')
    svg_icon = serializers.SerializerMethodField('get_image_url')

    def to_representation(self, instance):
        """
        Убирает пустые поля у Категории
        """
        result = super(CategorySerializer, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None and (result[key]) != []])

    def get_image_url(self, obj):
        if obj.svg_icon:
            return 'http://127.0.0.1:8000' + obj.svg_icon.url
        else:
            return None

    class Meta:
        model = Category
        fields = ('id', 'name', 'services_count', 'svg_icon', 'parent_id', 'children', 'services')






