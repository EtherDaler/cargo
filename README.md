# AjamCargo

## Instructions how to run
- install python3
- install npm
- install node js
- clone repo
- run ```python -m venv myvenv```
- activate virtual environment 
  - ```myvenv\Script\activate``` on Windows
  - ```myvenv/bin/run``` on Linux
- install all needed python libraries with command ``pip install requirements.txt``
- create file `secrets.json` in folder cargo
- fill `secrets.json`
```json
{
    "SECRET_KEY": <your secret key>,
    "DATABASES": {
        "default": {
            "ENGINE": "django.db.backends.postgresql",
            "NAME": <database name>,
            "USER": <database owner name>,
            "PASSWORD": <database owner password>,
            "HOST": "localhost",
            "PORT": <database port>
        }
    }
}
```
- install vue-cli
- изнутри папки frontend запустить ``npm install`` чтобы установить все необходимые пакеты
- можно просто следовать инструкции из ридмишника внутри папки frontend
- build vue project inside frontend folder with command `npm run build`
- run ``python manage.py makemigrations`` and then `python manage.py migrate` to create migrations in database
- edit ``ALLOWED_HOSTS = []`` to ``ALLOWED_HOSTS = [<your website domen>, <your website ip>]``
- create django superuser with command ``python manage.py createsuperuser``
- run django server with command ``python manage.py runserver 0.0.0.0``
- helpful links for deploying:
  - https://medium.com/@miladshiri/a-complete-guide-to-deploy-a-full-stack-application-based-on-django-and-vuejs-django-and-vue-b3d4d22775ef - django and vue deploy
  - https://betterprogramming.pub/vue-django-using-vue-files-and-the-vue-cli-d6dd8c9145eb - django and vue deploy
  - https://render.com/docs/deploy-vue-js - vue deploy
  - https://docs.djangoproject.com/en/4.2/howto/deployment/ - django deploy
  - https://habr.com/ru/articles/645757/ - django deploy
  - https://cli.vuejs.org/guide/deployment.html - vue deploy
