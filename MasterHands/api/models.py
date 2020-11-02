from django.db import models
from django.core import validators

from mptt.models import MPTTModel, TreeForeignKey


class Category(MPTTModel):
    name = models.CharField(max_length=255,
                            null=True,
                            verbose_name='Имя категории')

    parent = TreeForeignKey('self',
                            on_delete=models.CASCADE,
                            null=True,
                            blank=True,
                            related_name='children',
                            verbose_name='Родительская категория')

    svg_icon = models.FileField(upload_to='svg/',
                                null=True,
                                blank=True,
                                validators=[validators.FileExtensionValidator(['svg'])],
                                verbose_name='Иконка')

    def __str__(self):
        return self.name

    def get_services_count(self, count=0):
        if self.is_leaf_node():
            return self.services.count()

        for child in self.get_children():
            count += child.get_services_count()
        return count

    class MPTTMeta:
        order_insertion_by = ['name']

    class Meta:
        ordering = ['name']
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Service(models.Model):

    category = models.ForeignKey(Category,
                                 related_name='services',
                                 verbose_name='Категория',
                                 on_delete=models.CASCADE)

    service_name = models.CharField(max_length=255,
                                    null=True,
                                    verbose_name='Название услуги')

    description = models. TextField(null=True,
                                    blank=True,
                                    verbose_name='Описание')

    price = models.IntegerField(null=True,
                                blank=True,
                                verbose_name='Цена')

    def __str__(self):
        return self.service_name

    class Meta:
        ordering = ['service_name']
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'
