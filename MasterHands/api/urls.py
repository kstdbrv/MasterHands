from django.urls import path
from django.views.decorators.cache import cache_page

from . import views

urlpatterns = [
    path('services/', cache_page(60*60*24*30)(views.ServiceListCreate.as_view())),
    path('services/<int:pk>', cache_page(60*60*24*30)(views.ServiceRetrieveUpdateDestroy.as_view())),
    path('categories/<int:lvl>', cache_page(60*60*24*30)(views.CategoryListCreate.as_view())),
    path('categories/get/<int:pk>', cache_page(60*60*24*30)(views.CategoryRetrieveUpdateDestroyAPIView.as_view())),
]