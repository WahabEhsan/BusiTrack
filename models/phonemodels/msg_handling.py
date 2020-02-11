class Command:

    available_command_str = ["add", "withdraw", "help", "change", "view"]

    def __init__(self, command_str):
        self.command_str = command_str

    def check_command(self, command_str):
        if command_str not in self.available_command_str:
            return False


available_command = ["add", "withdraw", "help", "change", "view"]


def handler(msg_command):
    msg_list = msg_command.split(" ")
    command_object = Command(msg_list[0])
    if str(command_object) in available_command:
        command_object = False
    return command_object

