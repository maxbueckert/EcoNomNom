import json
import os
import requests
from openai import OpenAI
import re

OpenAI.api_key = os.getenv('OPENAI_API_KEY')
client = OpenAI()


class GPTHandler:

    def __init__(self):
        self.assistant_ids = {
            'parser': os.getenv('PARSER_ASSISTANT_ID'),
            'emissions': os.getenv('EMISSIONS_ASSISTANT_ID'),
            'optimizer': os.getenv('OPTIMIZER_ASSISTANT_ID')
        }

    def ask_assistant(self, recipe_text, parser_type):
        # get assistant
        assistant = self.retrieve_assistant(self.assistant_ids[parser_type])
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
            assistant_id=self.assistant_ids[parser_type]
        )
        # make request
        response = self.wait_for_assistant_on_thread(
            thread, thread_message, run)

        return response

    def retrieve_assistant(self, assistant_id):
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
    def format_gpt_response(text_response):
        text_response = text_response.replace("```", "")
        text_response = text_response.replace('json', "")
        text_response_dict = json.loads(text_response)

        return text_response_dict
