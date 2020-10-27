from django.urls import path
from . import views

urlpatterns = [
    path('supercategories/', views.SupercategoryListCreate.as_view()),
    path('supercategories/<int:pk>', views.SupercategoryRetrieveUpdateDestroy.as_view()),
    path('categories/', views.CategoryListCreate.as_view()),
    path('categories/<int:pk>', views.CategoryRetrieveUpdateDestroy.as_view()),
    path('services/', views.ServiceListCreate.as_view()),
    path('services/<int:pk>', views.SeviceRetrieveUpdateDestroy.as_view()),
    path('subcategories/', views.SubcategoryListCreate.as_view()),
    path('subcategories/<int:pk>', views.SubcategoryRetrieveUpdateDestroy.as_view()),
]