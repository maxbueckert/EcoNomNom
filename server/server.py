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
    web_text_json = request.get_json()
    print(web_text_json)
    # code for handling request
    assistants = GPTHandler()
    print('Created assistants \n')
    # may need to chnage depending on frontend
    raw_text = request.get_json()['web_text']
    print('Got param\n')
    print(raw_text)
    # raw_text = 'This is a recipe called the best chicken wings ever and i love it a lot and it is 1000 calories. The ingredients that you need are: 2 pounds of chicken wings, 1/2 cup barbeque sauce, 1/2 tsp salt, 2 stems of cilatro.'
    processed_text = HTMLTextProcessor.process_raw_html_text(raw_text)
    print('Processe text\n')
    # parsed_recipe = assistants.ask_assistant(processed_text, 'parser')
    # print('Parsed Recipe\n')
    # original_recipe_json = assistants.ask_assistant(parsed_recipe, 'emissions')
    # print('Got Original Recipe\n')
    # optimized_recipe_json = assistants.ask_assistant(
    #     original_recipe_json, 'optimizer')
    # print('Got Optimized Recipe\n')
    # veg_recipe_json = assistants.ask_assistant(
    #     original_recipe_json, 'veg')
    # print('Got Vegetarian Recipe\n')
    # vegan_recipe_json = assistants.ask_assistant(
    #     original_recipe_json, 'vegan')
    print('Got Vegan Recipe\n')

    # original_recipe_dict = GPTHandler.format_gpt_response(
    #     original_recipe_json)
    # optimized_recipe_dict = GPTHandler.format_gpt_response(
    #     optimized_recipe_json)
    # veg_recipe_dict = GPTHandler.format_gpt_response(
    #     veg_recipe_json)
    # vegan_recipe_dict = GPTHandler.format_gpt_response(
    #     vegan_recipe_json)
    print('Converted all recipes to dicts\n')

    # ultimate_dict = {}
    # ultimate_dict['original'] = original_recipe_dict
    # ultimate_dict['optimized'] = optimized_recipe_dict
    # ultimate_dict['vegetarian'] = veg_recipe_dict
    # ultimate_dict['vegan'] = vegan_recipe_dict
    print('Compiled all recipes\n')

    ultimate_dict = {
        "optimized": {
            "Calories": 383,
            "Ingredient1": {
                "amount": "4 slices",
                "carbon": 0.48,
                "name": "rye bread"
            },
            "Ingredient2": {
                "amount": "4 tablespoons",
                "carbon": 0.88,
                "name": "mayonnaise"
            },
            "Ingredient3": {
                "amount": "2 ounces",
                "carbon": 2.72,
                "name": "cottage cheese"
            },
            "Ingredient4": {
                "amount": "1 medium",
                "carbon": 0.09,
                "name": "tomato"
            },
            "Ingredient5": {
                "amount": "4 leaves",
                "carbon": 0.02,
                "name": "lettuce"
            },
            "Ingredient6": {
                "amount": "6-8 slices",
                "carbon": 1.26,
                "name": "chicken breast"
            },
            "Ingredient7": {
                "amount": "1/4 cup",
                "carbon": 0.46,
                "name": "cranberry sauce"
            },
            "Title": "Optimized Turkey Sandwich"
        },
        "original": {
            "Calories": 383,
            "Ingredient1": {
                "amount": "4 slices",
                "carbon": 0.58,
                "name": "wheat bread"
            },
            "Ingredient2": {
                "amount": "4 tablespoons",
                "carbon": 0.88,
                "name": "mayonnaise"
            },
            "Ingredient3": {
                "amount": "2 ounces",
                "carbon": 4.24,
                "name": "cheese"
            },
            "Ingredient4": {
                "amount": "1 medium",
                "carbon": 0.09,
                "name": "tomato"
            },
            "Ingredient5": {
                "amount": "4 leaves",
                "carbon": 0.02,
                "name": "lettuce"
            },
            "Ingredient6": {
                "amount": "6-8 slices",
                "carbon": 1.52,
                "name": "deli turkey"
            },
            "Ingredient7": {
                "amount": "1/4 cup",
                "carbon": 0.46,
                "name": "cranberry sauce"
            },
            "Title": "Turkey Sandwich"
        },
        "vegan": {
            "Calories": 383,
            "Ingredient1": {
                "amount": "4 slices",
                "carbon": 0.58,
                "name": "wheat bread"
            },
            "Ingredient2": {
                "amount": "4 tablespoons",
                "carbon": 0.78,
                "name": "vegan mayonnaise"
            },
            "Ingredient3": {
                "amount": "2 ounces",
                "carbon": 1.55,
                "name": "vegan cheese"
            },
            "Ingredient4": {
                "amount": "1 medium",
                "carbon": 0.09,
                "name": "tomato"
            },
            "Ingredient5": {
                "amount": "4 leaves",
                "carbon": 0.02,
                "name": "lettuce"
            },
            "Ingredient6": {
                "amount": "6-8 slices",
                "carbon": 0.45,
                "name": "tofu turkey"
            },
            "Ingredient7": {
                "amount": "1/4 cup",
                "carbon": 0.46,
                "name": "cranberry sauce"
            },
            "Title": "Vegan Turkey Sandwich"
        },
        "vegetarian": {
            "Calories": 383,
            "Ingredient1": {
                "amount": "4 slices",
                "carbon": 0.58,
                "name": "wheat bread"
            },
            "Ingredient2": {
                "amount": "4 tablespoons",
                "carbon": 0.88,
                "name": "mayonnaise"
            },
            "Ingredient3": {
                "amount": "2 ounces",
                "carbon": 4.24,
                "name": "cheese"
            },
            "Ingredient4": {
                "amount": "1 medium",
                "carbon": 0.09,
                "name": "tomato"
            },
            "Ingredient5": {
                "amount": "4 leaves",
                "carbon": 0.02,
                "name": "lettuce"
            },
            "Ingredient6": {
                "amount": "6-8 slices",
                "carbon": 1.0,
                "name": "tofu"
            },
            "Ingredient7": {
                "amount": "1/4 cup",
                "carbon": 0.46,
                "name": "cranberry sauce"
            },
            "Title": "Vegetarian Turkey Sandwich"
        }
    }

    print(ultimate_dict)

    return json.dumps(ultimate_dict)


if __name__ == '__main__':
    app.run(debug=True)
