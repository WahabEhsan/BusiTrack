from command import Command


def handler(msg_command, number):
    msg_list = msg_command.split(" ")
    incoming_command = msg_list[0]

    command_object = Command(incoming_command)

    return command_object.check_command(msg_list, number, msg_command)

