from rest_framework import serializers
from .models import Member
from django.db import IntegrityError
from rest_framework.exceptions import ValidationError

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise ValidationError('A member with this combination of first name, last name, country, and city already exists.')

