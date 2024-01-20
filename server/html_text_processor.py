import re

class HTMLTextProcessor:

    # returns empty string if non
    @staticmethod
    def process_raw_html_text(raw_html_text):
        '''Processes the html text sent from the frontend. 
        If the html text is not from a recipe, returns an empty string. Otherwise, returns the processed text ready for GPT.'''
        pass


    @staticmethod
    def is_recipe_page(raw_html_text):
        '''Determines if html text represents a recipe page. 
        Returns bool of whether recipe string or not.'''
        # check if recipe/Recipe and ingredients/Ingredients is in text
        recipe_ingredient_query = '(.*(.*((recipe|Recipe).*(ingredients|Ingredients)).*)|(.*((ingredients|Ingredients).*(recipe|Recipe)).*))'
        query_result = raw_html_text.search(recipe_ingredient_query)
        if query_result:
            # check if is in text
            quantity_query = '[0-9]+\s*((oz|ounce)|(g|gram)|cup|(tbs|TBS|tablespoon)|(tsp|TSP|teaspoon)|pound|small|large)'
            query_result = raw_html_text.search(quantity_query)
            if query_result:
                return True
            return False
        return False

    @staticmethod
    def reduce_html_text(recipe_page_html_text):
        '''Reduces html text before sending to GPT. Assumes that input html text is from a recipe page. 
        Returns the reduced text as a string'''
        pass

