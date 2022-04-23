from flask import Blueprint,flash
from __init__ import db,UPLOAD_FOLDER
import os
from werkzeug.utils import secure_filename
from __init__ import ALLOWED_EXTENSIONS




from flask import Flask , request, jsonify, json, Response

from models import User,Product,Comment
from __init__ import ALLOWED_EXTENSIONS

product = Blueprint('main', __name__)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS




@product.route('/produit/get', methods =['GET'])
def get_users():
    products= Product.query.all()
    return jsonify([i.serialize for i in products])
            
@product.route('/produit/get/<id>' , methods = ['GET'])
def get_produit(id):
    produit_to_get = Product.query.get(id)
    return jsonify(produit_to_get.serialize)


@product.route('/produit/add' , methods=['POST'])
def add_produit():
    product_name = request.json.get('name')
    product_desc= request.json.get('desc')
    file = request.files['file']
    if file.filename == '':
            flash('No selected file')
            
    if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(UPLOAD_FOLDER, filename))
    
    
    produit = Product(name=product_name,desc=product_desc)
    db.session.add(produit)
    db.session.commit()
    return jsonify(produit.serialize)

@product.route('/produit/delete/<id>' , methods=['DELETE']) 
def delete_produit(id):
    produit_to_delete = Product.query.get(id)
    db.session.delete(produit_to_delete)
    db.session.commit()
    return "object deleted successfully !"


