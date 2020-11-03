from rest_framework import generics

from .serializers import *
from .models import *


class ServiceListCreate(generics.ListCreateAPIView):
    """
    Возвращает сериализованный список всех Услуг,
    либо создает новую Услугу, если POST
    """
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class ServiceRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    """
    Возвращает сериализованную услугу по pk, а так же
    обрабатывает PUT, DELETE
    """
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class CategoryListCreate(generics.ListCreateAPIView):
    """
    Возвращает сериализованный список Категорий c дочерними элементами,
    в зависимости от их уровня в иерархии(пременная lvl, передается аргументом
    из urls)
    0 - Вернет все Разделы -> Категории -> Подкатегории -> Услуги
    1 - Вернет все Категории -> Подкатегории -> Услуги
    2 - Вернет все Подкатегории -> Услуги

    Так же созает новую Категорию, если POST
    """

    def get_queryset(self):
        """
        Возвращает queryset в зависимости от требуемого уровня.
        (Пременная lvl, передается аргументом из urls)
        """
        return Category.objects.filter(level=self.kwargs['lvl'])

    serializer_class = CategorySerializer


class CategoryRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    Возвращает конкретную категорию cо всеми ее
    дочерними элементами по pk, а так же
    обрабатывает PUT, DELETE
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
