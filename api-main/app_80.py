from flask import Flask, jsonify
import glob
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')

def order_sku():

    order_list = []
    sku_list=[]
    sku_list1 = []
    sku_list2 = []

    with open('Orders.dat','r') as f:
        for line in f.readlines():
            curLine = line.strip().split(" ")
            order_list.append(curLine[0])
            sku_list.append(curLine[1])
    f.close()

    current_dir = os.getcwd()
    pdf_dir = current_dir+'/pdf_folder'

    tmp3 = sorted(glob.glob(os.path.join(pdf_dir,'*'+str(order_list[0])+'*.pdf')))
    tmp4 = sorted(glob.glob(os.path.join(pdf_dir,'*'+str(order_list[1])+'*.pdf')))

    if len(tmp3)==0:
        order_list[0] = 'error!'
    if len(tmp4)==0:
        order_list[1] = 'error!'

    tmp1 = sorted(glob.glob(os.path.join(pdf_dir,'*'+str(sku_list[0])+'*.pdf')))
    tmp2 = sorted(glob.glob(os.path.join(pdf_dir,'*'+str(sku_list[1])+'*.pdf')))

    
    if len(tmp1)==0:
        tmp1 = ['error!','error!']
    if len(tmp1)==1:
        mystring = tmp1[0]
        if mystring[0] == 'P':
            tmp1.append('error!')
        if mystring[0] == 'S':
            tmp1.insert(0,'error!')
    
    if len(tmp2)==0:
        tmp2 = ['error!','error!']
    if len(tmp2)==1:
        mystring = tmp2[0]
        if mystring[0] == 'P':
            tmp2.append('error!')
        if mystring[0] == 'S':
            tmp2.insert(0,'error!')

    # os.path.basename
    sku_list1.append(os.path.basename(tmp1[0]))
    sku_list1.append(os.path.basename(tmp1[1]))
    sku_list2.append(os.path.basename(tmp2[0]))
    sku_list2.append(os.path.basename(tmp2[1]))

    return jsonify([order_list[0], order_list[1], sku_list1[0],sku_list2[0],sku_list1[1],sku_list2[1]])

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5080)