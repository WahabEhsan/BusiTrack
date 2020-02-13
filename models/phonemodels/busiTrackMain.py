from __future__ import print_function
#from twilio.twiml.messaging_response import Message, MessagingResponse
#from twilio.rest import Client
import msg_handling


# Twilio account information for authentication
#twilio_account_sid = "ACad16d9d046ada22e5c4f2f7b18eccf59"
#twilio_auth_token = "fab573b3784c72b40ccfc2d4ca52843b"
#twilio_account_num = "+18125452602"
#twilio_client = Client(twilio_account_sid, twilio_auth_token)


def lambda_handler(event, context):
    msg_recieved = event['Body']
    msg_sending = ""

    print(msg_recieved)

    if not msg_handling.handler(msg_recieved):
        msg_sending = "Command not found. Make sure everything spelled correctly."
    else:
        msg_sending = "Understand"
    print("Received event: " + str(event))

    return '<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Message>' + msg_sending + '</Message></Response>'

