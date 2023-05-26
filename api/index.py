import json
from flask import Flask
from flask import request, jsonify, session, redirect
import scrapy
import math
from scrapy.selector import Selector
from flask_cors import CORS
from flask_pymongo import PyMongo
import requests
import bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from bson import json_util
from google.oauth2 import id_token
from google.auth.transport import requests

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
app.config['MONGO_DBNAME'] = 'jatinmaincoursewebsite'
app.config['MONGO_URI'] = 'mongodb+srv://jatin:jatin123@cluster0.1zrdh.mongodb.net/jatinmaincoursewebsite?retryWrites=true&w=majority'
app.secret_key = "super secret key"
app.config['JWT_SECRET_KEY'] = 'jatinjwt-secret-key'
jwt = JWTManager(app)
CORS(app)
cors = CORS(app, resources={
    r"/*": {
       "origins": "*"
    }
})
mongo = PyMongo(app)

@app.route("/api/googlelogin", methods=['GET','POST'])
def googlelogin():
    print('11111111111111')
    if request.method == 'POST':
        # print('ssss')
        # daaa = json.load(request)
        # jtopy=json.dumps(daaa)
        # print(jtopy)
        # neww = request.form.get()
        neww = request.get_json()
        idinfo = id_token.verify_oauth2_token(neww['credential'], requests.Request(), '577101913991-3lui3759un3sfba21h201r9g8ouf7qi0.apps.googleusercontent.com')
        # print(neww['credential'])

        users = mongo.db.users

        email = users.find_one({'email': idinfo['email']})
        # for document in email:
        #     print(document)

        if(email):
            print('email already exist')
            print(email['email'])
            return jsonify({'email': email['email'], 'profilepic': email['profilepic'], 'cartcourses': email['cartcourses']})

        else:
            useremail = idinfo['email']
            userprofilepic = idinfo['picture']
            userpassword = 'googleauth'
            userdata = {'email': useremail, 'profilepic': userprofilepic, 'password': userpassword}
            users.insert_one(userdata)
            

        # print(idinfo)
        return jsonify({'email': idinfo["email"], 'profilepic': idinfo['picture']})
    

@app.route("/api/normallogin", methods=['GET','POST'])
def normallogin():
    print('11111111111111')
    if request.method == 'POST':
        # print('ssss')
        # daaa = json.load(request)
        # jtopy=json.dumps(daaa)
        # print(jtopy)
        # neww = request.form.get()
        neww = request.get_json()

        email = neww['email']
        password = neww['password']

        users = mongo.db.users

        isemail = users.find_one({'email': email})

        # print(isemail['cartcourses'])

        if(isemail):
            if(isemail['password'] == password):
                try:
                    if(isemail['cartcourses']):
                        return jsonify({'email': isemail["email"], 'cartcourses': isemail['cartcourses']})
                except:
                    return jsonify({'email': isemail["email"]})
            else:
                return jsonify({'error': 'Invalid Password'})

        else:
            return jsonify({'error': 'Email No Exists'})
        


        
@app.route("/api/createaccount", methods=['GET','POST'])
def createaccount():
    print('11111111111111')
    if request.method == 'POST':
        # print('ssss')
        # daaa = json.load(request)
        # jtopy=json.dumps(daaa)
        # print(jtopy)
        # neww = request.form.get()
        neww = request.get_json()

        email = neww['email']
        password = neww['password']

        users = mongo.db.users

        isemail = users.find_one({'email': email})

        if(isemail):
            return jsonify({'error': 'Email Already Exists'})
            

        else:
            userdata = {'email': email, 'password': password}
            users.insert_one(userdata)
            return jsonify({'success': 'Account Created Successfully'})
        
        # return jsonify({'email': idinfo["email"], 'profilepic': idinfo['picture']})

@app.route("/api/addcoursestouser", methods=['GET','POST'])
def addcoursestouser():
    # print('11111111111111')
    if request.method == 'POST':
        # print('ssss')
        # daaa = json.load(request)
        # jtopy=json.dumps(daaa)
        # print(jtopy)
        # neww = request.form.get()
        neww = request.get_json()
        email = neww['email']
        coursedata = neww['coursedata']
        users = mongo.db.users
        userinfo = users.find_one({'email': email})

        if(userinfo):
            data =  users.find_one_and_update({'email': neww['email']}, {'$push': {'cartcourses': coursedata}}, upsert = True, new = True)

            
            # print(data)
            # session['email'] = request.form['username']
            return jsonify({'success': 'Successfully Added to Cart Products','data': json.loads(json_util.dumps(data))})
        else:
            return 'Invalid User'
        

@app.route("/api/deletecartproduct", methods=['GET','POST'])
def deletecartproduct():

    if request.method == 'POST':
        neww = request.get_json()
        # print(neww)
        users = mongo.db.users

        data = users.find_one_and_update({ 'email' : neww['email'] },{ "$pull" : { "cartcourses" : { "title" : neww['title']}}}, new = True)

        # return 'Done'

        # print(data)

        if data is not None:

            return jsonify({'success': 'Successfully Removed From Tracked Products','data': json.loads(json_util.dumps(data))})
        
        else:
            return jsonify({'error': 'No Product Found'})
        

@app.route("/api/deleteallcartproduct", methods=['GET','POST'])
def deleteallcartproduct():

    if request.method == 'POST':
        neww = request.get_json()
        # print(neww)
        users = mongo.db.users

        data = users.find_one_and_update({ 'email' : neww['email'] },{ "$set" : { "cartcourses" : []}}, new = True)

        # return 'Done'

        # print(data)

        if data is not None:

            return jsonify({'success': 'Successfully Removed All Cart Products','data': json.loads(json_util.dumps(data))})
        
        else:
            return jsonify({'error': 'No Product Found'})
        
# @app.route("/api/checkcartproducts", methods=['GET','POST'])
# def checkcartproducts():

#     if request.method == 'POST':
#         neww = request.get_json()
#         # print(neww)
#         users = mongo.db.users
#         trackedpro = users.find_one({"email": neww['email']}, {'cartcourses', 'email'})

#         # print(trackedpro['trackedproducts'])
#         # print(neww['product'])

#         for i in trackedpro['cartcourses']:
#             # print(i['product'])

#             if(i['title'] == neww['title']):
#                 return jsonify({'Found': 'True'})
#         return jsonify({'NOTFound': 'True'})


@app.route("/api/getallcartproducts", methods=['GET','POST'])
def getallcartproducts():

    if request.method == 'POST':
        neww = request.get_json()
        # print(neww)
        users = mongo.db.users
        cartproducts = users.find_one({"email": neww['email']}, {'cartcourses', 'email'})

        if cartproducts is not None:
            # print(cartproducts)
            return jsonify({'data': json.loads(json_util.dumps(cartproducts))})
            
        
        else:
            return jsonify({'error': 'noooo'})
