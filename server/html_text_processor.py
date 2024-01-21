import re


class HTMLTextProcessor:

    # returns empty string if non
    @staticmethod
    def process_raw_html_text(raw_text):
        '''Processes the html text sent from the frontend. 
        If the html text is not from a recipe, returns an empty string. Otherwise, returns the processed text ready for GPT.'''
        if HTMLTextProcessor.is_recipe_page(raw_text):
            return HTMLTextProcessor.reduce_html_text(raw_text)

        return ""

    @staticmethod
    def is_recipe_page(raw_text):
        '''Determines if html text represents a recipe page. 
        Returns bool of whether recipe string or not.'''
        # check if recipe/Recipe and ingredients/Ingredients is in text
        recipe_ingredient_query = '(.*(.*((recipe|Recipe).*(ingredients|Ingredients)).*)|(.*((ingredients|Ingredients).*(recipe|Recipe)).*))'
        query_result = re.search(recipe_ingredient_query, raw_text)
        if query_result:
            # check if is in text
            quantity_query = '[0-9]+\s*((oz|ounce)|(g|gram)|cup|(tbs|TBS|tablespoon)|(tsp|TSP|teaspoon)|pound|small|large)'
            query_result = re.search(quantity_query, raw_text)
            if query_result:
                return True
            return False
        return False

    @staticmethod
    def reduce_html_text(recipe_page_text):
        '''Reduces html text before sending to GPT. Assumes that input html text is from a recipe page. 
        Returns the reduced text as a string, or empty string if no match is found.'''
        find_ingredient_list_query = '(ingredient|Ingredient|INGREDIENT)(\s*.*)*'
        text_after_ingredient = re.search(
            find_ingredient_list_query, recipe_page_text)

        if text_after_ingredient:
            return text_after_ingredient.string

        return ""
