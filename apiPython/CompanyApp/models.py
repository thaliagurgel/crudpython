from django.db import models
from django.db.models.fields.related import ForeignKey

# Create your models here.
class Companies (models.Model):
    CompanyId = models.AutoField(primary_key=True)
    CompanyName = models.CharField(max_length=100)
    CompanyCNPJ = models.CharField(max_length=20)
    CompanyAdress = models.CharField(max_length=100)


class Category (models.Model):
    CategoryId = models.AutoField(primary_key=True)
    CategoryName = models.CharField(max_length=100)

class Product (models.Model):
    ProductId = models.AutoField(primary_key=True)
    Company_CompanyId = models.ForeignKey(Companies, on_delete= models.CASCADE)
    Category_CategoryId = models.ForeignKey(Category, on_delete= models.CASCADE)
    ProductName = models.CharField(max_length=100)
    ProductQnt = models.IntegerField()