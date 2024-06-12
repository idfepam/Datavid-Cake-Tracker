from rest_framework import viewsets
from .models import Member
from .serializers import MemberSerializer
from django.db.models.functions import ExtractMonth, ExtractDay
from datetime import date

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

    def get_queryset(self):
        today = date.today()
        return Member.objects.annotate(
            month=ExtractMonth('birth_date'),
            day=ExtractDay('birth_date')
        ).order_by('month', 'day', 'birth_date')
