# Wahab Ehsan

import sys

sys.path.append( './../../controllers/phonecontrollers')
import database_translator


class User:

    def __init__(self, phone_number):
        self.phone_number = phone_number

    @staticmethod
    def check_user(number):
        response = True
        if not database_translator.get_one(number):
            response = False
        return response

    @classmethod
    def test_method(cls, user_info):
        return True
