from . import views as home_views
from django.urls import path

urlpatterns = [
    path('', home_views.home),
]