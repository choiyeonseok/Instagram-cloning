from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
from django.shortcuts import get_object_or_404


class ExploreUsers(APIView):

    def get(self, request, format=None):
        
        last_five = models.User.objects.all().order_by('-date_joined')[:5]

        serializer = serializers.ListUserSerializer(last_five, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class FollowUser(APIView):

    def post(self, request, user_id, format=None):

        user = request.user

        user_to_follow = get_object_or_404(models.User, id=user_id)

        user.following.add(user_to_follow)
       
        user.save()

        return Response(status=status.HTTP_200_OK)


class UnfollowUser(APIView):

    def post(self, request, user_id, format=None):

        user = request.user

        user_to_follow = get_object_or_404(models.User, id=user_id)

        user.following.remove(user_to_follow)
       
        user.save()

        return Response(status=status.HTTP_200_OK)


class UserProfile(APIView):

    def get(self, request, username, format=None):

        found_user = get_object_or_404(models.User, username=username)

        serializer = serializers.UserProfileSerializer(found_user)

        return Response(data=serializer.data, status=status.HTTP_200_OK)
            


class UserFollowers(APIView):

    def get(self, request, username, format=None):

        found_user = get_object_or_404(models.User, username=username)

        user_followers = found_user.followers.all()

        serializer = serializers.ListUserSerializer(user_followers, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserFollowing(APIView):

    def get(self, request, username, format=None):

        found_user = get_object_or_404(models.User, username=username)

        user_following = found_user.following.all()

        serializer = serializers.ListUserSerializer(user_following, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class Search(APIView):

    def get(self, reqeust, format=None):

        username = reqeust.query_params.get('username', None)

        print(username)

        if username is not None:

            users = models.User.objects.filter(username__istartwith=username)

            serializer = serializers.ListUserSerializer(users, many=True)

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        else:

            return Response(status=status.HTTP_400_BAD_REQEUST)

        