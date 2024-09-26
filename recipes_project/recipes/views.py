from rest_framework import viewsets
from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer

from django.http import JsonResponse
from .models import Recipe

def category_recipes(request, id):
    recipes = Recipe.objects.filter(category_id=id)  # Фильтрация по категории
    recipes_list = list(recipes.values('id', 'title', 'description'))  # Преобразование в список
    return JsonResponse(recipes_list, safe=False)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
