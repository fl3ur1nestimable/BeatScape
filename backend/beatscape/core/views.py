from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

def test(request):
    return JsonResponse({'test': 'test'})