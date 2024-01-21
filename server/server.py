from flask import Flask, request, jsonify
from flask_cors import CORS
from html_text_processor import HTMLTextProcessor
from gpt_handler import GPTHandler

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
    elif 'html_text' not in request.args:
        return jsonify(status="error", message=f'invalid request via missing html text argument')

    # code for handling request
    assistant = GPTHandler()
    # may need to chnage depending on frontend
    raw_text = request.args['html_text']
    processed_text = HTMLTextProcessor.process_raw_html_text(raw_text)
    recommendation = assistant.ask_assistant(
        processed_text)  # send to gpt and get response

    # format gpt response for frontend

    # error checking for recommendation
    #   did we get a response from GPT?
    #   does the response have all three recipe recommendations?
    #   do all the recipe recommendations contain all ingredients from the original recipe?

    # send final json to frontend
