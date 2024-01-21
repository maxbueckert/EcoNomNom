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


@app.route('/recommend', methods=['POST'])
def recommend():
    print("WHAT THE HELL")
    # get body from request
    # web_text_json = request.get_json()
    # print(web_text_json)
    # code for handling request
    assistants = GPTHandler()
    print('Created assistants \n')
    # may need to chnage depending on frontend
    raw_text = request.get_json()['web_text']
    print('Got param\n')
    print(raw_text)
    # raw_text = 'This is a recipe called the best chicken wings ever and i love it a lot and it is 1000 calories. The ingredients that you need are: 2 pounds of chicken wings, 1/2 cup barbeque sauce, 1/2 tsp salt, 2 stems of cilatro.'
    # processed_text = HTMLTextProcessor.process_raw_html_text(raw_text)
    # print('Processe text\n')
    # print(processed_text)
    parsed_recipe = assistants.ask_assistant(raw_text, 'parser')
    print('Parsed Recipe\n')
    print(parsed_recipe)
    original_recipe_json = assistants.ask_assistant(parsed_recipe, 'emissions')
    print('Got Original Recipe\n')
    print(original_recipe_json)
    optimized_recipe_json = assistants.ask_assistant(
        original_recipe_json, 'optimizer')
    print('Got Optimized Recipe\n')
    print(optimized_recipe_json)
    veg_recipe_json = assistants.ask_assistant(
        original_recipe_json, 'veg')
    print('Got Vegetarian Recipe\n')
    print(veg_recipe_json)
    vegan_recipe_json = assistants.ask_assistant(
        original_recipe_json, 'vegan')
    print('Got Vegan Recipe\n')
    print(vegan_recipe_json)

    original_recipe_dict = GPTHandler.format_gpt_response(
        original_recipe_json)
    optimized_recipe_dict = GPTHandler.format_gpt_response(
        optimized_recipe_json)
    veg_recipe_dict = GPTHandler.format_gpt_response(
        veg_recipe_json)
    vegan_recipe_dict = GPTHandler.format_gpt_response(
        vegan_recipe_json)
    print('Converted all recipes to dicts\n')

    ultimate_dict = {}
    ultimate_dict['original'] = original_recipe_dict
    ultimate_dict['optimized'] = optimized_recipe_dict
    ultimate_dict['vegetarian'] = veg_recipe_dict
    ultimate_dict['vegan'] = vegan_recipe_dict
    print('Compiled all recipes\n')

    return json.dumps(ultimate_dict)

    # format gpt response for frontend

    # error checking for recommendation
    #   did we get a response from GPT?
    #   does the response have all three recipe recommendations?
    #   do all the recipe recommendations contain all ingredients from the original recipe?

    # send final json to frontend


if __name__ == '__main__':
    app.run(debug=True)
