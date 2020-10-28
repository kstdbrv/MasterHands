from django.shortcuts import render
import requests


def react_render(content, request):
    """
    Отправляет данные на Express.js сервер(URl необходимой странички,
    данные для инициализации state), для получения отрендеренной странички React,
    возвращает готовую и наполненную HTML страцу со всеми React метками
    """
    render_assets = {
        'url': request.path_info,
    }
    # Now we add the sandwich. We use the Dict#update method so that the
    # key could be anything, like pizza or cake or burger.

    try:
        # All right, let's send it! Note that we set the content type to json.
        res = requests.post('http://localhost:8001/render',
                            json=render_assets,
                            headers={'content_type': 'application/json'})
    except Exception as e:
        raise e
    return render(request, 'main/index.html', res.json())
