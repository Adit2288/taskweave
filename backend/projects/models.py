from django.core.validators import MinValueValidator
from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    budget = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(1)],
    )
    deadline = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title