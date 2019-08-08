from django.contrib import admin
from . import models
# Register your models here.



@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):
    
    list_display = [
        'file', 
        'location',
        'caption',
        'created_at',
        'updated_at'
        ]

    list_display_links = [
        'location'
        
    ] 

    search_fields = [
        'file',
        'location'
    ]



@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Comment)
class CommnetAdmin(admin.ModelAdmin):
    
    list_display = [
        'message', 
        'creator',
        'image',
        'created_at',
        'updated_at'
        ]
