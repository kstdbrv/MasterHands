from .base import *

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}