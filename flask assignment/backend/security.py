from flask_security import SQLAlchemyUserDatastore
from models import db
from users import User, Role
import flask_security.core as fc

user_datastore = SQLAlchemyUserDatastore(db, User, Role)
sec = fc.Security()

