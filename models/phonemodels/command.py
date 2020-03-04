# Wahab Ehsan


class Command:

    available_command_str = ["add", "withdraw", "h", "view"]

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
            elif self.command_str == "view":
                response = self.view_initiate()
            elif self.command_str == "h":
                response = self.h_initiate()
            else:
                response = False
            return response

    @classmethod
    def add_initiate(cls, msg_list):
        amount = msg_list[1]
        return "$" + amount + " added."

    @classmethod
    def withdraw_initiate(cls, msg_list):
        amount = msg_list[1]
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
        return_msg = "You have typed the help command for BusiTrack.\n\n To use the command" \
                     " features, follow these instructions: \n\n 1) Add Command: Use this command to keep track of " \
                     "profits or earnings.\nUsage: Add (amount in digits) to (Your Business).\n\n 2) Withdraw " \
                     "Command: Use this command to keep track of losses or expenses.\nUsage: Withdraw " \
                     "(amount in digits) from (Your Business).\n\n 3) View Command: Use this command to show your" \
                     " added businesses to BusiTrack.\nUsage: View."
        return return_msg
