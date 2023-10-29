import subprocess
import togetherAI
import interSys
from flask import Flask, request, render_template
import json

app = Flask(__name__)

@app.route('/submit', methods=['GET','POST'])
def submit():
    # Recieving data from React
    # clear all data
    # age, sex, bmi, children, smoker, region = None,None,None,None,None,None
    dataArr = []
    aiResponse = ''
    # get atrributes from front end : 
    # age, sex, bmi, children, smoker, region
    age = request.form.get('age')
    sex = request.form.get('sex')
    children = request.form.get('children')
    bmi = request.form.get('bmi')
    smoker = request.form.get('smoker')
    region = request.form.get('region')
    # print("age="+str(age), "sex="+str(sex), "bmi="+str(bmi), "children="+str(children), "smoker="+str(smoker), "region"+str(region))
    if (age and bmi and children and sex and smoker and region):
        predict = interSys.acessDB(age, sex, bmi, children, smoker, region)
        #print(predict)

        if(sex==1):
            sex = "male"
        elif(sex==0):
            sex = "female"
        
        if(smoker==1):
            smoker = "is a smoker"
        elif(smoker==0):
            smoker = "doesn't smoke"

        if(region==1):
            region = "northwest"
        elif(region==2):
            region = "northeast"
        elif(region==3):
            region = "southwest"
        elif(region==4):
            region = "southeast"
        # pass arr to Generative AI
        predict = round(float(predict[0]),2)
        predict = str(predict)
        aiResponse = togetherAI.chat(predict, age, sex, bmi, children, smoker, region)  
        #print(aiResponse)
    else: return "Error in passing data"      
    # Send data to Reacts
    return render_template('results.html',predict=predict,age=age,sex=sex,bmi=bmi,children=children,smoker=smoker,region=region,aiResponse=aiResponse)



if __name__ == "__main__":
    app.run(host="localhost", port=5000)