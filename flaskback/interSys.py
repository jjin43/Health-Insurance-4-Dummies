import iris
import os
import ssl

def acessDB(age, sex, bmi, children, smoker, region):
    sslcontext = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH, cafile="./data/certificateSQLaaS.pem")

    connection_str = "k8s-5d4d2570-ac3b7b37-2679e1cec3-b1751f8c2e7cd8ef.elb.us-east-1.amazonaws.com"
    port = 443
    namespace = "USER"
    username = "SQLAdmin"
    password = "JJin413007!"
    arr = []

    connection = iris.connect(connection_str, port, namespace, username, password, sslcontext=sslcontext)
    cursor = connection.cursor()
    try:
        cursor.execute("INSERT INTO PredictInput(age, sex, bmi, children, smoker, region) VALUES(%s, %s, %s, %s, %s, %s)" % (age, sex, bmi, children, smoker, region))
        cursor.execute("SELECT TOP(1) PREDICT(HealthInsuranceModel use HealthInsuranceModel_v1) as prediction FROM SQLUser.PredictInput")
        arr = cursor.fetchmany(1)
        cursor.execute("DELETE From PredictInput")
        pass
    except Exception as ex:
        print(ex)
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()
        print(arr[0])
        return arr[0]