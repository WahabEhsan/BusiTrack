# Wahab Ehsan


class Command:

    available_command_str = ["add", "withdraw", "help", "change", "view"]

    def __init__(self, command_str):
        self.command_str = command_str

    def check_command(self, msg_list):
        response = False
        if self.command_str not in self.available_command_str:
            return response
        else:
            if self.command_str == "add":
                response = self.add_initiate(msg_list)
            elif self.command_str == "withdraw":
                response = self.withdraw_initiate(msg_list)
            else:
                response = "There was a problem understanding that command. Please try again later."
            return response

    @classmethod
    def add_initiate(cls, msg_list):
        amount = msg_list[1]
        return "$" + amount + " added."

    @classmethod
    def withdraw_initiate(cls, msg_list):
        amount = msg_list[1]
        return "$" + amount + " withdrawn."

