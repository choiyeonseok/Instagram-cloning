from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
from django.shortcuts import get_object_or_404
from nomadgram.notifications import views as notification_views
from nomadgram.users import serializers as user_serializers
from nomadgram.users import models as user_models


class Images(APIView):

    def get(self, request, format=None):

        user = request.user

        following_users = user.following.all()

        image_list = []

        for following_user in following_users:
            
            user_images = following_user.images.all()[:2]
        
            for image in user_images:
                
                image_list.append(image)

        my_images = user.images.all()[:2]
        
        for image in my_images:

            image_list.append(image)

        sorted_list = sorted(image_list, key=lambda image: image.created_at, reverse=True)


        serializer = serializers.ImageSerializer(sorted_list, many=True)

        return Response(serializer.data)
        

    def post(self, request, format=None):

        user = request.user

        serializer = serializers.InputImageSerializer(data=request.data)

        if serializer.is_valid():

            serializer.save(creator=user)

            return Response(data=serializer.data, status=status.HTTP_201_CREATED)

        else:

            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        




class UnlikeImage(APIView):

    def delete(self, request, image_id, format=None):
        
        user = request.user

        found_image = get_object_or_404(models.Image, id=image_id)

        try:
            preexisting_like = models.Like.objects.get(
                creator=user,
                image=found_image
            )
        
            preexisting_like.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)


        except models.Like.DoesNotExist:
            
            return Response(status=status.HTTP_304_NOT_MODIFIED)


        return Response(status=201)


class LikeImage(APIView):

    def get(self, request, image_id, format=None):

        likes = models.Like.objects.filter(image__id=image_id)

        like_creators_ids = likes.values('creator_id')

        users = user_models.User.objects.filter(id__in=like_creators_ids)

        serializer = user_serializers.ListUserSerializer(users, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


    def post(self, request, image_id, format=None):

        user = request.user

        found_image = get_object_or_404(models.Image, id=image_id)

        try:
            preexisting_like = models.Like.objects.get(
                creator=user,
                image=found_image
            )
        
            return Response(status=status.HTTP_304_NOT_MODIFIED)

        except models.Like.DoesNotExist:
            new_like = models.Like.objects.create(
                creator=user,
                image = found_image
            )

            new_like.save()
            
            notification_views.create_notification(user, found_image.creator, 'like', found_image)

        return Response(status=201)


class CommentOnImage(APIView):

    def post(self, request, image_id, format=None):

        user = request.user

        found_image = get_object_or_404(models.Image, id=image_id)
    
        serializer = serializers.CommentSerializer(data=request.data)

        if serializer.is_valid():

            serializer.save(creator=user, image=found_image)

            notification_views.create_notification(user, found_image.creator, "comment", found_image, serializer.data['message'])

            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        
        else:

            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class Comment(APIView):

    def delete(self, request, comment_id, format=None):

        user = request.user

        comment = get_object_or_404(models.Comment, id=comment_id, creator=user)
        
        comment.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)


class Search(APIView):

    def get(self, request, format=None):
        
        hashtags = request.query_params.get('hashtags', None)

        if hashtags is not None:
            
            hashtags = hashtags.split(',')

            images = models.Image.objects.filter(tags__name__in=hashtags).distinct()

            serializer = serializers.CountImageSerializer(images, many=True)

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        else:

            return Response(status.HTTP_400_BAD_REQUEST)


class ModerateComments(APIView):

    def delete(self, request, image_id, comment_id, format=None):

        user = request.user

        comment_to_delete = get_object_or_404(models.Comment, id=comment_id, image__id=image_id, image_creator=user)

        comment_to_delete.delete()

        return Response(status=status.HTTP_204__NO_CONTENT)



class ImageDetail(APIView):


    def get(self, request, image_id, format=None):

        user = request.user

        image = get_object_or_404(models.Image, id=image_id)

        serializer = serializers.ImageSerializer(image)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


    def put(self, request, image_id, format=None):

        user = request.user

        image = get_object_or_404(models.Image, id=image_id, creator=user)

        serializer = serializers.InputImageSerializer(image, data=request.data, partial=True)

        if serializer.is_valid():

            serializer.save(creator=user)

            return Response(data=serializer.data, status=status.HTTP_204_NO_CONTENT)


        else:

            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)



    def delete(self, request, image_id, format=None):

        user = request.user

        image = get_object_or_404(models.Image, id=image_id, creator=user)

        if image is None:

            return Response(status=status.HTTP_401_UNAUTHORIZED)

        image.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)




































