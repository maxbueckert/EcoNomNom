import json
import os
import requests
from openai import OpenAI
import re

OpenAI.api_key = os.getenv('OPENAI_API_KEY')
client = OpenAI()
assistant_id = os.getenv('ASSISTANT_ID')


class GPTHandler:

    def __init__(self):
        self.assistant = {}

    def ask_assistant(self, recipe_text):
        # get assistant
        if self.assistant == {}:
            self.assistant = self.retrieve_assistant()
        # create thread
        thread = client.beta.threads.create()
        # add prompt to thread
        thread_message = client.beta.threads.messages.create(
            thread_id=thread.id,
            role="user",
            content=recipe_text
        )
        run = client.beta.threads.runs.create(
            thread_id=thread.id,
            assistant_id=assistant_id
        )
        # make request
        response = self.wait_for_assistant_on_thread(
            thread, thread_message, run)

        return response

    def retrieve_assistant(self):
        url = f'https://api.openai.com/v1/assistants/{assistant_id}'

        return requests.get(url=url)

    def wait_for_assistant_on_thread(self, thread, thread_message, run):
        while run.status in ["queued", "in_progress"]:
            keep_retrieving_run = client.beta.threads.runs.retrieve(
                thread_id=thread.id,
                run_id=run.id
            )

            if keep_retrieving_run.status == "completed":
                print("\n")

                # retrieve the Messages added by the Assistant to the Thread
                all_messages = client.beta.threads.messages.list(
                    thread_id=thread.id
                )
                break
            elif keep_retrieving_run.status == "queued" or keep_retrieving_run.status == "in_progress":
                pass
            else:
                print(f"Run status: {keep_retrieving_run.status}")
                break

        return all_messages.data[0].content[0].text.value

    @staticmethod
    def get_gpt_response(recommendation_string):
        print(recommendation_string)
        recommendation_string = recommendation_string.split("value='")
        recommendation_string = recommendation_string[1]
        recommendation_string = recommendation_string.split("}'")
        recommendation_string = recommendation_string[0]
        recommendation_string = recommendation_string.strip('{')
        recommendation_string = recommendation_string.strip('}')
        recommendation_string = recommendation_string.replace('"', '')
        print(recommendation_string + '\n')

        recommendation_list = recommendation_string.split(',')
        dict = {}
        for item in recommendation_list:
            print(item)
            key, value = item.split(':')
            if value[0] != '{':
                dict[key] = value.strip(' ')
            else:
                dict[key] = {}
                value = value.strip('{')
                value = value.strip('}')
                value_list = value.split(',')
                for sub_item in value_list:
                    print(sub_item)
                    sub_key, sub_value = sub_item.split(',')
                    dict[key][sub_key] = sub_value.strip(' ')
        print(dict)
        # if recommendation_string != "":
        #     dict_result = json.dumps(recommendation_string)
        #     print(dict_result + 'DICT\n')
        #     return dict_result

        return {}

    @staticmethod
    def format_gpt_response():
        '''Formats the GPT response into what our frontend expects.
        Input: {"Calories":#,
        "Ing1":{
        "original":[carbon #, amount #],
        "replacement1":[carbon #, amount #],
        ...
        },
        "Ing2":...}

        Output: {"Calories":#,
        "Ing1":{
        "original":{"carbon":#, "amount":#},
        "replacement1":{"carbon":#, "amount":#},
        ...
        },
        "Ing2":...}'''
        pass
