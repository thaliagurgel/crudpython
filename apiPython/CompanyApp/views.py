from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from CompanyApp.models import Product,Companies, Category
from CompanyApp.serializers import ProductSerializer,CompanySerializer, CategorySerializer

from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def productApi(request,id=0):
    if request.method=='GET':
        products = Product.objects.all()
        products_serializer = ProductSerializer(products, many=True)
        return JsonResponse(products_serializer.data, safe=False)

    elif request.method=='POST':
        product_data=JSONParser().parse(request)
        product_serializer = ProductSerializer(data=product_data)
        if product_serializer.is_valid():
            product_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        product_data = JSONParser().parse(request)
        product=Product.objects.get(ProductId=product_data['ProductId'])
        product_serializer=ProductSerializer(product,data=product_data)
        if product_serializer.is_valid():
            product_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        product=Product.objects.get(ProductId=id)
        product.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def companyApi(request,id=0):
    if request.method=='GET':
        companies = Companies.objects.all()
        companies_serializer = CompanySerializer(companies, many=True)
        return JsonResponse(companies_serializer.data, safe=False)

    elif request.method=='POST':
        company_data=JSONParser().parse(request)
        company_serializer = CompanySerializer(data=company_data)
        if company_serializer.is_valid():
            company_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        company_data = JSONParser().parse(request)
        company=Companies.objects.get(CompanyId=company_data['CompanyId'])
        company_serializer=CompanySerializer(company,data=company_data)
        if company_serializer.is_valid():
            company_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        company=Companies.objects.get(CompanyId=id)
        company.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def categoryApi(request,id=0):
    if request.method=='GET':
        categories = Category.objects.all()
        categories_serializer = CategorySerializer(categories, many=True)
        return JsonResponse(categories_serializer.data, safe=False)

    elif request.method=='POST':
        category_data=JSONParser().parse(request)
        category_serializer = CategorySerializer(data=category_data)
        if category_serializer.is_valid():
            category_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        category_data = JSONParser().parse(request)
        category=Category.objects.get(EmployeeId=category_data['CategoryId'])
        category_serializer=CategorySerializer(category,data=category_data)
        if category_serializer.is_valid():
            category_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        category=Category.objects.get(CategoryId=id)
        category.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)


@csrf_exempt
def SaveFile(request):
    file=request.FILES['uploadedFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)