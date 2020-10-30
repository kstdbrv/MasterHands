from django.contrib import admin

from mptt.admin import MPTTModelAdmin, DraggableMPTTAdmin, TreeRelatedFieldListFilter

from .models import *


class CategoryInline(admin.TabularInline):
    model = Category


class ServiceInline(admin.TabularInline):
    model = Service


@admin.register(Category)
class MyModelAdmin(DraggableMPTTAdmin):
    inlines = [CategoryInline, ServiceInline]
    mptt_level_indent = 30
    list_filter = (
        ('parent', TreeRelatedFieldListFilter),
    )


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_filter = (
        ('category', TreeRelatedFieldListFilter),
    )
