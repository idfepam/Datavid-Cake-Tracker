from django.db import models
from django.core.exceptions import ValidationError
from datetime import date

def validate_age(value):
    today = date.today()
    age = today.year - value.year - ((today.month, today.day) < (value.month, value.day))
    if age < 18:
        raise ValidationError('Member must be at least 18 years old.')

class Member(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    birth_date = models.DateField(validators=[validate_age])
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)

    class Meta:
        unique_together = ('first_name', 'last_name', 'country', 'city')
