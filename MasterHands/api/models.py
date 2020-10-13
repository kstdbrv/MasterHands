from django.db import models
from smart_selects.db_fields import ChainedForeignKey

# Create your models here.


class Category(models.Model):
    category_name = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.category_name


class Subcategory(models.Model):
    category = models.ForeignKey(Category, related_name='subcategory', on_delete=models.CASCADE)
    subcategory_name = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.subcategory_name


class Service(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcategory = ChainedForeignKey(Subcategory, related_name='services', chained_field='category', chained_model_field='category', show_all=False, auto_choose=True, sort=True)
    service_name = models.CharField(max_length=255, null=True)
    price = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return '{}: {}'.format(self.category, self.service_name)
