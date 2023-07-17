from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS
import os
import glob

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

@app.route('/api/pdf22', methods=['GET'])
def serve_pdf():

    sku_list = []
    with open('Orders.dat','r') as f:
        for line in f.readlines():
            curLine = line.strip().split(" ")
            sku_list.append(curLine[1])
    f.close()

    pdf_folder_path = os.path.join(os.path.dirname(__file__), 'pdf_folder')

    filename = sorted(glob.glob(os.path.join(pdf_folder_path,'Shopping'+'*'+str(sku_list[1])+'*.pdf')))  # Specify the name of the PDF file to be served
    file_path = os.path.join(pdf_folder_path, os.path.basename(filename[0]))
    if not os.path.isfile(file_path):
        return jsonify({'error': 'PDF file not found.'}), 404

    return send_from_directory(pdf_folder_path, os.path.basename(filename[0]))
    # return send_from_directory('/Users/lusun/Downloads/api/pdf_folder/', '101198134.pdf')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5022)
