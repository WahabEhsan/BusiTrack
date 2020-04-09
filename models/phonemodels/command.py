# Wahab Ehsan

import sys

sys.path.append('./../../controllers/phonecontrollers')
import database_translator


class Command:

    available_command_str = ["add", "withdraw", "h", "view"]

    def __init__(self, command_str):
        self.command_str = command_str

    def check_command(self, msg_list, number):
        response = False
        if self.command_str not in self.available_command_str:
            return response
        else:
            if self.command_str == "add":
                response = self.add_initiate(msg_list, number)
            elif self.command_str == "withdraw":
                response = self.withdraw_initiate(msg_list, number)
            elif self.command_str == "view":
                response = self.view_initiate()
            elif self.command_str == "h":
                response = self.h_initiate()
            else:
                response = False
            return response

    @classmethod
    def amount_commands_check(cls, msg_list):
        if len(msg_list) != 4:
            return "Incorrect Format. Type 'h' for help."
        amount = msg_list[1]
        if not str(amount).isdigit():
            return "Incorrect Format. Make sure to type command properly. Type 'h' for help."
        return True

    @classmethod
    def add_initiate(cls, msg_list, phone_number):
        amount = msg_list[1]
        response = cls.amount_commands_check(msg_list)
        if response is not True:
            return response
        db_update = database_translator.update_db(phone_number, msg_list)
        if db_update is not True:
            return db_update
        return "$" + amount + " added."

    @classmethod
    def withdraw_initiate(cls, msg_list, phone_number):
        amount = msg_list[1]
        response = cls.amount_commands_check(msg_list)
        if response is not True:
            return response
        db_update = database_translator.update_db(phone_number, msg_list)
        if db_update is not True:
            return db_update
        return "$" + amount + " withdrawn."

    @classmethod
    def view_initiate(cls):
        businesses_info = "Your added businesses: \n\n" \
                          "1) Business1\n" \
                          "2) Business2\n" \
                          "3) Business3\n"
        return businesses_info

    @classmethod
    def h_initiate(cls):
        return_msg = "You have typed the help command for BusiTrack.\n\n " \
                     "To use the command" \
                     " features, follow these instructions: \n\n " \
                     "1) Add Command: Use this command to keep track of " \
                     "profits or earnings.\n" \
                     "Usage: Add (amount in digits) to (Your Business).\n\n " \
                     "2) Withdraw " \
                     "Command: Use this command to keep track of losses or expenses.\n" \
                     "Usage: Withdraw " \
                     "(amount in digits) from (Your Business).\n\n " \
                     "3) View Command: Use this command to show your" \
                     " added businesses to BusiTrack.\n" \
                     "Usage: View."
        return return_msg
