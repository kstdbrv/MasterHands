from django.db import models
from django.core import validators

from smart_selects.db_fields import ChainedForeignKey


class Supercategory(models.Model):
    supercategory_name = models.CharField(max_length=255, null=True, verbose_name='Имя раздела')

    def __str__(self):
        return self.supercategory_name

    class Meta:
        verbose_name = 'Раздел'
        verbose_name_plural = 'Разделы'
        ordering = ['supercategory_name']


class Category(models.Model):
    supercategory_name = models.ForeignKey(Supercategory,
                                           related_name='category',
                                           null=True,
                                           on_delete=models.CASCADE,
                                           verbose_name='Раздел')
    category_name = models.CharField(max_length=255, null=True, verbose_name='Имя категории')
    svg_icon = models.FileField(upload_to='svg/',
                                null=True,
                                blank=True,
                                validators=[validators.FileExtensionValidator(['svg'])],
                                verbose_name='Иконка')

    def __str__(self):
        return self.category_name

    class Meta:
        ordering = ['category_name']
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Subcategory(models.Model):
    category = models.ForeignKey(Category, related_name='subcategory', on_delete=models.CASCADE, verbose_name='Категория')
    subcategory_name = models.CharField(max_length=255, null=True, verbose_name='Имя подкатегории')

    def __str__(self):
        return self.subcategory_name

    class Meta:
        ordering = ['subcategory_name']
        verbose_name = 'Подкатегория'
        verbose_name_plural = 'Подкатегории'


class Service(models.Model):

    subcategory = models.ForeignKey(Subcategory,
                                    related_name='services',
                                    verbose_name='Подкатегория',
                                    on_delete=models.CASCADE)
    service_name = models.CharField(max_length=255, null=True, verbose_name='Название услуги')
    description = models. TextField(null=True, blank=True, verbose_name='Описание')
    price = models.IntegerField(null=True, blank=True, verbose_name='Цена')

    def __str__(self):
        return self.service_name

    class Meta:
        ordering = ['service_name']
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'
