from django.conf.urls import url
from CompanyApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^product/$',views.productApi),
    url(r'^product/([0-9]+)$',views.productApi),

     url(r'^company/$',views.companyApi),
    url(r'^company/([0-9]+)$',views.companyApi),
    
     url(r'^category/$',views.categoryApi),
    url(r'^category/([0-9]+)$',views.categoryApi),

    url(r'^SaveFile$', views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)