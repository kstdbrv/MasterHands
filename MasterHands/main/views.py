from django.shortcuts import render
from django.views.generic import TemplateView

from .services import react_render


def index(request):
    """
    Принимает запросы со всех необработанных URL для отправки
    их на Express.js сервер для рендера готового HTML
    """
    return react_render({}, request)