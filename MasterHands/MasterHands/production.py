from .base import *

DEBUG = False
STATIC_ROOT = os.path.join(BASE_DIR, 'static/')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'master_db',
        'USER': 'dbmaster',
        'PASSWORD': 'HxAygw',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
