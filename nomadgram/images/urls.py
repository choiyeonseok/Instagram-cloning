from django.urls import path
from . import views

app_name = "images"

urlpatterns = [
    path('', views.Feed.as_view(), name='feed'),
    
]
