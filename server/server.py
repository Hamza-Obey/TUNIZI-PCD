from flask import Flask , request, jsonify, json, Response

from flask_sqlalchemy import SQLAlchemy


app = Flask (__name__)
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///PCD.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Comment(db.Model):
       id = db.Column('comment_id', db.Integer, primary_key = True)
       content = db.Column(db.String(400))
       
       def __init__(self, content):
        self.content = content


class Product(db.Model):
        id=db.Column('product_id', db.Integer, primary_key = True)
        name=db.Column(db.String(30))
        
        def __init__(self, name):
            self.name = name
            
            
@app.route('/produit/get/<id>' , methods = ['GET'])
def get_produit(id):
    produit_to_get = Product.query.get(id)
    return Product.jsonify(produit_to_get)


@app.route('/produit/add' , methods=['POST'])
def add_produit():
    product_name = request.form.get('product_name')
    produit = Product(name=product_name)
    db.session.add(produit)
    db.session.commit()
    return Product.jsonify(produit)

@app.route('/produit/delete/<id>' , methods=['DELETE']) 
def delete_produit(id):
    produit_to_delete = Product.query.get(id)
    db.session.delete(produit_to_delete)
    db.session.commit()
    return "object deleted successfully !"





@app.route('/comment/add' , methods=['POST'])
def add_categorie():  
    comment_text = request.form.get('comment_text')
    comment_to_add = Comment(content=comment_text)
    db.session.add(comment_to_add)
    db.session.commit()
    return comment_to_add.jsonify(comment_to_add)


@app.route('/comment/delete/<id>' , methods=['DELETE'] )
def delete_comment(id):
    comment_to_delete = Comment.query.get(id)
    db.session.delete(comment_to_delete)
    db.session.commit()
    return "object deleted successfully !"
        










@app.route("/home")
def home():
    return "hello home"
    

if __name__=="__main__":
    app.run(debug=True,port=5000)
    