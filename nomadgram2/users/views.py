from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
from django.shortcuts import get_object_or_404
from nomadgram2.notifications import views as notification_views



class ExploreUsers(APIView):

    def get(self, request, format=None):
        
        last_five = models.User.objects.all().order_by('-date_joined')[:5]

        serializer = serializers.ListUserSerializer(last_five, many=True, context={"request": request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class FollowUser(APIView):

    def post(self, request, user_id, format=None):

        user = request.user

        user_to_follow = get_object_or_404(models.User, id=user_id)

        user.following.add(user_to_follow)
       
        user.save()

        notification_views.create_notification(user, user_to_follow, 'follow')

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



    def put(self, request, username, format=None):

        user = request.user

        found_user = get_object_or_404(models.User, username=username)

        
        if found_user.username != user.username:

            return Response(status=status.HTTP_400_BAD_REQUEST)

        else:

            serializer = serializers.UserProfileSerializer(found_user, data=request.data, partial=True)

        
        if serializer.is_valid():

            serializer.save()

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        else : 
            
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserFollowers(APIView):

    def get(self, request, username, format=None):

        found_user = get_object_or_404(models.User, username=username)

        user_followers = found_user.followers.all()

        serializer = serializers.ListUserSerializer(user_followers, many=True, context={"request": request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserFollowing(APIView):

    def get(self, request, username, format=None):

        found_user = get_object_or_404(models.User, username=username)

        user_following = found_user.following.all()

        serializer = serializers.ListUserSerializer(user_following, many=True, context={"request": request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class Search(APIView):

    def get(self, request, format=None):

        username = request.query_params.get('username', None)

        print(username)

        if username is not None:

            users = models.User.objects.filter(username__istartwith=username)

            serializer = serializers.ListUserSerializer(users, many=True, context={"request": request})

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        else:

            return Response(status=status.HTTP_400_BAD_REQUEST)

        

class ChangePassword(APIView):

    def put(self, request, username, format=None):
        
        user = request.user

        if user.username == username:

            current_password = request.data.get('current_password', None)

            if current_password is not None:

                passwords_match = user.check_password(current_password)

                if passwords_match:

                    new_password = request.data.get('new_password', None)

                    if new_password is not None:
                        
                        user.set_password(new_password)

                        user.save()            

                        return Response(status=status.HTTP_200_OK)

                    else:

                        return Response(status=status.HTTP_400_BAD_REQUEST)

                else:

                    return Response(status=status.HTTP_400_BAD_REQUEST)
            
            else:

                return Response(status=status.HTTP_400_BAD_REQUEST)
        
        else:
            
            return Response(status=status.HTTP_400_BAD_REQUEST)