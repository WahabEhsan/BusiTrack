from command import Command


def handler(msg_command, number):
    if msg_command.endswith("+"):
        msg_command = msg_command[:-1]

    msg_list = msg_command.split("+")
    incoming_command = msg_list[0].lower()

    command_object = Command(incoming_command)

    return command_object.check_command(msg_list, number)

