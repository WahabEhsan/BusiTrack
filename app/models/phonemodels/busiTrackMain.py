from __future__ import print_function
#from twilio.twiml.messaging_response import Message, MessagingResponse
#from twilio.rest import Client
import msg_handling
from phone_user import User


def lambda_handler(event, context):
    msg_received = event['Body']
    num_from = event['From'].replace('%2B', '+')
    print(num_from)
    print(context)
    print(msg_received)

    user_object = User(event['From'], msg_received)

    if not user_object.check_user(str(num_from)):
        msg_sending = "Hello! Welcome To BusiTrack. In order to use this service you have to signup at our website: " \
               "\nhttp://ec2-52-15-53-59.us-east-2.compute.amazonaws.com:3000/"
    else:

        response = msg_handling.handler(msg_received, num_from)

        if not response:
            msg_sending = "Command not found. Make sure everything is spelled correctly."
        else:
            msg_sending = response
        print("Received event: " + str(event))

    user_object.update_last_msg(num_from, msg_received)
    
    return '<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Message>' + str(msg_sending) + '</Message></Response>'
