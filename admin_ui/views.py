from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from ipo_app.models import IPO

def login_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, username=email, password=password)
        if user:
            login(request, user)
            return redirect('admin_dashboard')
    return render(request, 'admin_ui/login.html')

def register_view(request):
    form = UserCreationForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('admin_login')
    return render(request, 'admin_ui/register.html', {'form': form})

@login_required
def dashboard_view(request):
    upcoming = IPO.objects.filter(status='upcoming').count()
    ongoing = IPO.objects.filter(status='ongoing').count()
    listed = IPO.objects.filter(status='listed').count()
    return render(request, 'admin_ui/dashboard.html', {
        'upcoming': upcoming,
        'ongoing': ongoing,
        'listed': listed
    })

@login_required
def ipo_list_view(request):
    ipos = IPO.objects.all()
    return render(request, 'admin_ui/ipo_list.html', {'ipos': ipos})
