class Command:

    availible_command_str = ["add", "withdraw", "help", "change", "view"]

    def __init__(self, command_str):
        self.command_str = command_str

    def check_command(self, command_str):
        if command_str not in self.availible_command_str:
            return False


def handler(msg_command):
    msg_list = msg_command.split(" ")
    command_object = Command(msg_list[0])

