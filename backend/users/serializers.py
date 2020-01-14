from rest_framework import serializers
from django.contrib.auth import authenticate
from . import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ('id', 'username',)


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        print("validate", data)
        user = authenticate(**data)
        if user:
            return user
        raise serializers.ValidationError(
            "Unable to log in with provided credentials.")
