from rest_framework import serializers
from . import models


class ImageSerializer(serializers.Serializer):

    class Meta:
        model = models.Image
        fields = "__all__"


class CommentSeiralizer(serializers.Serializer):

    class Meta:
        medel = models.Comment
        fields = '__all__'


class LikeSeiralizer(serializers.Serializer):

    class Meta:
        medel = models.Like
        fields = '__all__'

