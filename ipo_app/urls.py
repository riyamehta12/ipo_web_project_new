from django.urls import path
from .views import home_view, ipo_detail, IPOCreateView, IPOUpdateView, IPODeleteView, IPOListAPIView, IPODetailAPIView

urlpatterns = [
    path('', home_view, name='ipo_home'),
    path('ipo/<int:pk>/', ipo_detail, name='ipo_detail'),
    path('ipo/add/', IPOCreateView.as_view(), name='ipo_add'),
    path('ipo/<int:pk>/edit/', IPOUpdateView.as_view(), name='ipo_edit'),
    path('ipo/<int:pk>/delete/', IPODeleteView.as_view(), name='ipo_delete'),
    # API endpoints
    path('api/ipos/', IPOListAPIView.as_view(), name='ipo_list_api'),
    path('api/ipos/<int:pk>/', IPODetailAPIView.as_view(), name='ipo_detail_api'),
]
