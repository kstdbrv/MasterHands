from django.contrib import admin

from mptt.admin import MPTTModelAdmin, DraggableMPTTAdmin, TreeRelatedFieldListFilter

from .models import *


class CategoryInline(admin.TabularInline):
    model = Category


class ServiceInline(admin.TabularInline):
    model = Service


@admin.register(Category)
class MyModelAdmin(DraggableMPTTAdmin):
    """
    Добавление в админу возможности создавать и
    редактировать дочерние элементы прямо из родительского,
    а так же добавлен фильтр
    """
    inlines = [CategoryInline, ServiceInline]
    mptt_level_indent = 30
    list_filter = (
        ('parent', TreeRelatedFieldListFilter),
    )

    def service_name(self, obj):
        return obj.services.name


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    """
    Добавлен фильтр в админку
    """
    list_filter = (
        ('category', TreeRelatedFieldListFilter),
    )
