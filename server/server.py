from flask import Flask, request, jsonify
from flask_cors import CORS
from html_text_processor import HTMLTextProcessor

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return 'Hello World!'

if __name__ == '__main__':
    app.run()

@app.route('/recommend', methods=['GET'])
def method_name():

    if request.method != 'GET':
        return jsonify(status="error", message=f'invalid request type ({request.method}) made to /recommend')
    
    # code for handling request
    raw_html_text = request.args['html_text'] # may need to chnage depending on frontend
    processed_html_text = HTMLTextProcessor.process_raw_html_text(raw_html_text)
    recommendation = {} # send to gpt and get response
 
    # error checking for recommendation
    #   did we get a response from GPT?
    #   does the response have all three recipe recommendations?
    #   do all the recipe recommendations contain all ingredients from the original recipe?

    # send final json to frontend
    