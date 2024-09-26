from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, RecipeViewSet
from . import views

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    # Маршрут для получения рецептов категории
    path('api/categories/<int:id>/recipes/', views.category_recipes, name='category-recipes'),
]
