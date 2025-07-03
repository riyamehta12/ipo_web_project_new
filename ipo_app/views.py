from django.shortcuts import render, get_object_or_404
from .models import IPO
from rest_framework import generics, filters
from .models import IPO
from .serializers import IPOSerializer
from django.urls import reverse_lazy
from django.views.generic import CreateView, UpdateView, DeleteView
class IPOListAPIView(generics.ListAPIView):
    queryset = IPO.objects.all()
    serializer_class = IPOSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['company_name', 'status']
    ordering_fields = ['open_date', 'close_date', 'listing_date']


class IPODetailAPIView(generics.RetrieveAPIView):
    queryset = IPO.objects.all()
    serializer_class = IPOSerializer

class IPOCreateView(CreateView):
    model = IPO
    fields = '__all__'
    template_name = 'ipo_app/ipo_form.html'
    success_url = reverse_lazy('ipo_home')

class IPOUpdateView(UpdateView):
    model = IPO
    fields = '__all__'
    template_name = 'ipo_app/ipo_form.html'
    success_url = reverse_lazy('ipo_home')

class IPODeleteView(DeleteView):
    model = IPO
    template_name = 'ipo_app/ipo_confirm_delete.html'
    success_url = reverse_lazy('ipo_home')

def home_view(request):
    ipos = IPO.objects.all().order_by('-open_date')
    context = {
        'ipos': ipos
    }
    return render(request, 'ipo_app/home.html', context)

def ipo_detail(request, pk):
    ipo = get_object_or_404(IPO, pk=pk)
    context = {'ipo': ipo}
    return render(request, 'ipo_app/ipo_detail.html', context)

