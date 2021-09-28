from django.db.models import fields
from django.db.models.base import Model
from rest_framework import serializers
from CompanyApp.models import Product, Companies, Category

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('ProductId',
                'Company_CompanyId' ,
                'Category_CategoryId',
                'ProductName',
                'ProductQnt')
               

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Companies
        fields = ('CompanyId',
                'CompanyName',
                'CompanyCNPJ',
                'CompanyAdress')
          

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'CategoryId',
            'CategoryName'
        )