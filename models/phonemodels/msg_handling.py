class Command:

    available_command_str = ["add", "withdraw", "help", "change", "view"]

    def __init__(self, command_str):
        self.command_str = command_str

    def check_command(self):
        if self.command_str not in self.available_command_str:
            return False
        else:
            return True


def handler(msg_command):
    msg_list = msg_command.split("+")
    incoming_command = msg_list[0].lower()

    command_object = Command(incoming_command)
    if not command_object.check_command():
        return False

    return command_object

