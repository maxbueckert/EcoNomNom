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
        pass

    @staticmethod
    def reduce_html_text(recipe_page_html_text):
        '''Reduces html text before sending to GPT. Assumes that input html text is from a recipe page. 
        Returns the reduced text as a string'''
        pass

