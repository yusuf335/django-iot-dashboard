from django.shortcuts import render
from django.views import View   
from django.contrib.auth.mixins import LoginRequiredMixin
from allauth.account.views import PasswordSetView,PasswordChangeView
from django.urls import reverse_lazy
from stations.models import stations


# utillity
class DashboardView(LoginRequiredMixin,View):
    def get(self, request):
        greeting = {}
        greeting['heading'] = "Dashboard"
        greeting['pageview'] = "Dashboards" 

        # Get the total number of station registered
        station_count = stations.objects.all().count()
        station_list = stations.objects.all()
        
        return render(request, 'dashboard/dashboard.html',{
            "greeting":greeting,
            "staion_count": station_count,
            "station_list": station_list,
            })



class MyPasswordChangeView(LoginRequiredMixin, PasswordChangeView):
    success_url = reverse_lazy('dashboard')
class MyPasswordSetView(LoginRequiredMixin, PasswordSetView):
    success_url = reverse_lazy('dashboard')
