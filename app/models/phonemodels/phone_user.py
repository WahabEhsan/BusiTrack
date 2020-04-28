# Wahab Ehsan

import sys

sys.path.append('./../../controllers/phonecontrollers')
import database_translator


class User:

    def __init__(self, phone_number, msg):
        self.phone_number = phone_number
        self.msg = msg

    @staticmethod
    def check_user(number):
        response = True
        if database_translator.get_user(number) is None:
            response = False
        return response

    @classmethod
    def update_last_msg(cls, phone_number, msg):
        return database_translator.update_last_msg(phone_number, msg)
