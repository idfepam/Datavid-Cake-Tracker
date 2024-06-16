from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Member
from .serializers import MemberSerializer
from drf_yasg.utils import swagger_auto_schema
from django.db.models.functions import ExtractMonth, ExtractDay
from datetime import date

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

    @swagger_auto_schema(operation_description="Retrieve the list of all members")
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @swagger_auto_schema(operation_description="Create a new member")
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @swagger_auto_schema(operation_description="Retrieve the list of all members sorted by closest birthdays")
    @action(detail=False, methods=['get'])
    def sorted_by_birthday(self, request):
        today = date.today()
        queryset = Member.objects.annotate(
            month=ExtractMonth('birth_date'),
            day=ExtractDay('birth_date')
        ).order_by(
            'month', 'day', 'birth_date'
        )
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
