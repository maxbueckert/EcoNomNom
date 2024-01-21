from flask import Flask, request, jsonify
from flask_cors import CORS
import json

from html_text_processor import HTMLTextProcessor
from gpt_handler import GPTHandler

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello():
    return 'Hello World!'


@app.route('/recommend')
def recommend():
    if request.method != 'GET':
        return jsonify(status="error", message=f'invalid request type ({request.method}) made to /recommend')
    # elif 'html_text' not in request.args:
    #     return jsonify(status="error", message=f'invalid request via missing html text argument')

    # code for handling request
    assistant = GPTHandler()
    # may need to chnage depending on frontend
    # raw_text = request.args['html_text']
    raw_text = 'This is a recipe called the best chicken wings ever and i love it a lot and it is 1000 calories. The ingredients that you need are: 2 pounds of chicken wings, 1/2 cup barbeque sauce, 1/2 tsp salt, 2 stems of cilatro.'
    processed_text = HTMLTextProcessor.process_raw_html_text(raw_text)
    recommendation = assistant.ask_assistant(
        processed_text)  # send to gpt and get response
    recommendation = json.loads(recommendation)
    # get response drom recommendation

    return "worked!"

    # format gpt response for frontend

    # error checking for recommendation
    #   did we get a response from GPT?
    #   does the response have all three recipe recommendations?
    #   do all the recipe recommendations contain all ingredients from the original recipe?

    # send final json to frontend


if __name__ == '__main__':
    app.run(debug=True)
