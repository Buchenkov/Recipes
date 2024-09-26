from django.contrib import admin
from .models import Category, Recipe

# Регистрация моделей
admin.site.register(Category)
admin.site.register(Recipe)
