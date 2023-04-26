from config import Config
from flask import Flask
from models import db
from security import user_datastore, sec
from flask_restful import Api
from flask_cors import CORS

app,api=None,None

def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)
    CORS(app, resources={r'/*': {'origins': '*'}})
    db.init_app(app)
    sec.init_app(app, user_datastore)
    app.app_context().push()                                                                                                     
    api=Api(app)
    return app, api

app,api=create_app(config=Config)

from user import User_api

api.add_resource(User_api,'/users','/users/<int:id>')
