from django.urls import path
from . import views

urlpatterns = [
    path('services/', views.ServiceListCreate.as_view()),
    path('services/<int:pk>', views.ServiceRetrieveUpdateDestroy.as_view()),
    path('categories/<int:lvl>', views.CategoryListCreate.as_view()),
    path('categories/get/<int:pk>', views.CategoryRetrieveUpdateDestroyAPIView.as_view()),
]