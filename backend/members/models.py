from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator
from datetime import date

# Validators
name_validator = RegexValidator(
    regex=r'^[a-zA-Z]+$',
    message="Only alphabetic characters are allowed in names."
)
location_validator = RegexValidator(
    regex=r'^[a-zA-Z\s]+$',
    message="Only alphabetic characters and spaces are allowed in location fields."
)

def validate_age(value):
    today = date.today()
    age = today.year - value.year - ((today.month, today.day) < (value.month, value.day))
    if age < 18:
        raise ValidationError('Member must be at least 18 years old.')

class Member(models.Model):
    first_name = models.CharField(max_length=100, validators=[name_validator])
    last_name = models.CharField(max_length=100, validators=[name_validator])
    birth_date = models.DateField(validators=[validate_age])
    country = models.CharField(max_length=100, validators=[location_validator])
    city = models.CharField(max_length=100, validators=[location_validator])

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['first_name', 'last_name', 'country', 'city'],
                name='unique_member'
            )
        ]
