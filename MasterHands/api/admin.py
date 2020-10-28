from django.contrib import admin

from .models import *


class CategoryInline(admin.TabularInline):
    model = Category


class SubcategoryInline(admin.TabularInline):
    model = Subcategory


class ServiceInline(admin.TabularInline):
    model = Service


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_filter = ('supercategory_name',)
    inlines = [SubcategoryInline]


@admin.register(Subcategory)
class SubcategoryAdmin(admin.ModelAdmin):
    list_filter = ('category__supercategory_name', 'category')
    inlines = [ServiceInline]


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_filter = ('subcategory__category__supercategory_name', 'subcategory__category', 'subcategory')


@admin.register(Supercategory)
class SuperCategory(admin.ModelAdmin):
    inlines = [CategoryInline]
