from django.urls import path
from . import views

urlpatterns = [
    path('api/categories/', views.CategoryListCreate.as_view()),
    path('api/categories/<int:pk>', views.CategoryRetrieveUpdateDestroy.as_view()),
    path('api/services/', views.ServiceListCreate.as_view()),
    path('api/services/<int:pk>', views.SeviceRetrieveUpdateDestroy.as_view()),
    path('api/subcategories/', views.SubcategoryListCreate.as_view()),
    path('api/subcategories/<int:pk>', views.SubcategoryRetrieveUpdateDestroy.as_view()),
]