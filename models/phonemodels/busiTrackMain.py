from __future__ import print_function
#from twilio.twiml.messaging_response import Message, MessagingResponse
#from twilio.rest import Client
import msg_handling


def lambda_handler(event, context):
    msg_recieved = event['Body']

    print(msg_recieved)

    response = msg_handling.handler(msg_recieved)

    if not response:
        msg_sending = "Command not found. Make sure everything is spelled correctly."
    else:
        msg_sending = response
    print("Received event: " + str(event))

    return '<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Message>' + msg_sending + '</Message></Response>'

