from flask import Blueprint
from __init__ import db
import pickle

from flask import Flask , request, jsonify, json, Response


from models import  User,Product,Comment

comment = Blueprint('Comment', __name__)

pickled_model = pickle.load(open('IA/finalized_model.pkl', 'rb'))
vectorizer=pickle.load(open("IA/vectorizer.pkl", 'rb'))


        



@comment.route('/comment/add' , methods=['POST'])
def add_comment():  
    comment_text = request.form.get("content")
    comment_to_add = Comment(content=comment_text)
    db.session.add(comment_to_add)
    db.session.commit()
    return jsonify(comment_to_add.serialize)

@comment.route('/comment/predict' , methods=['GET','POST'])
def predict():  
    
    textinput1 = vectorizer.transform([" peoduit yesser heyel w fih barcha zebi"])
    print(textinput1)

    svm_test=pickled_model.predict(textinput1)
    svm_test=svm_test-1
    predict =svm_test[0]
    if predict==1 :
        return ({"sentiemnt":"postive"})
    else :
        return ({"sentiemnt":"negative"})
    
    