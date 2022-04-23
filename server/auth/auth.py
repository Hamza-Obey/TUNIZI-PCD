from os import access
from flask import Blueprint, flash,jsonify,request,Response
from numpy import identity
from models import User
from __init__ import db, bcrypt
from models import User 
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

#Creating the blueprint
auth = Blueprint('user',__name__)

@auth.route('/user/get', methods =['GET'])
def get_users():
    users= User.query.all()
    return jsonify([i.serialize for i in users])


@auth.route('/user/get/<id>' , methods =['GET'])
def get_user_by_id(id):
    user=User.query.get(id)
    return jsonify(user.serialize)

@auth.route('/user/register' , methods=['POST' , 'GET'])
def add_user():  
    username = request.json.get("username")
    password = request.json.get("password")
    company = request.json.get("company")
   
    existing_username = User.query.filter_by(username=username).first()
    
    if existing_username is None :
            hashed_password=bcrypt.generate_password_hash(password).decode('utf-8') 
            user_to_add = User(username=username,password=hashed_password,company=company)
            db.session.add(user_to_add)
            db.session.commit()
            return jsonify(user_to_add.serialize)
    elif existing_username :
        return jsonify({'error' :'username already exists !'}) , 401
    






@auth.route('/token' , methods=['POST'])
def create_token():
    username=request.form.get('username')
    password=request.form.get('password')
    if username != 'test' or password != 'test' :
        return jsonify({"msg" : "Bad email or password"}) ,401
    access_token=create_access_token(identity=username)
    return jsonify(access_token=access_token) 