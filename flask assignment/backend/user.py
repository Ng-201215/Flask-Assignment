from flask_restful import Resource,fields, reqparse,marshal
from users import User as user_model

user_req = reqparse.RequestParser()
user_req.add_argument('email', required=True, help="email required")
user_req.add_argument('username', required=True, help="username required")
user_req.add_argument('password', required=True, help="password required")

user_res_fields = {
    'id':fields.Integer,
    'email': fields.String,
    'username': fields.String,
    'password': fields.String,
    'active': fields.Boolean
}

class User_api(Resource):

    def get(self,id=None):
        if id:
            data = user_model.query.filter_by(id=id).first()
            return marshal(data,user_res_fields)
        else:
            data = user_model.query.all()
        return marshal(data,user_res_fields)
    
