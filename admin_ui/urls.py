# admin_ui/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='admin_login'),
    path('register/', views.register_view, name='admin_register'),
    path('dashboard/', views.dashboard_view, name='admin_dashboard'),
    path('ipos/', views.ipo_list_view, name='admin_ipo_list'),
]
