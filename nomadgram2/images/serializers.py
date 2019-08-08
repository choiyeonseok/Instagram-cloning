from rest_framework import serializers
from . import models
from nomadgram2.users import models as user_models
from taggit_serializer.serializers import (TagListSerializerField,
                                            TaggitSerializer)


class SmallImageSerializer(serializers.ModelSerializer):
    
    '''used for the notifications'''
    
    class Meta:
        model = models.Image
        fields = (
            'file',
        )

class CountImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'file',
            'comment_count',
            'like_count'

        )

class FeedUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = user_models.User
        fields = (
            'username',
            'profile_image'
        )


class CommentSerializer(serializers.ModelSerializer):

    creator = FeedUserSerializer(read_only=True)

    class Meta:
        model = models.Comment
        fields = (
            'id',
            'message',
            'creator'
        )

class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Like
        fields = "__all__"



class ImageSerializer(TaggitSerializer, serializers.ModelSerializer):

    comments = CommentSerializer(many=True)
    creator = FeedUserSerializer()
    tags = TagListSerializerField()
    is_liked = serializers.SerializerMethodField()

    class Meta: 
        model = models.Image
        fields = (
            'id',
            'file',
            'location',
            'caption',
            'creator',
            "comments",
            "like_count",
            "tags",
            "natural_time",
            "is_liked",
            )

    def get_is_liked(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            try:
                models.Like.objects.get(
                    creator_id=request.user.id, image_id=obj.id)
                return True
            except models.Like.DoesNotExist:
                return False
        return False            

class InputImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'file',
            'location',
            'caption'
        )


