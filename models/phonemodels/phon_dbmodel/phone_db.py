import pymongo
from pymongo import MongoClient
import datetime
now = datetime.datetime.now().isoformat()

cluster = MongoClient("mongodb+srv://bt_general:287Y4sdwEh1iVh7s@sandbox-0zyvs.mongodb.net/test?retryWrites=true&w=majority")
db = cluster['busitrack']
collection = db['bt_user']


def insert_entry(user_phone, message_list):
    user_info = get_user(user_phone)
    #for busi in user_info['businesses']:
     #   if busi['phoneAbrv'] == message_list[3]:
    #user_info['businesses'][2]
    if message_list[0].lower() == 'withdraw':
        amount = float((message_list[1])) * -1
    else:
        amount = message_list[1]
    collection.update_one({'phone': user_phone, 'businesses.phoneAbrv': message_list[3]}, {'$push': {'expenses': {'date': now, 'amount': float(amount)}}})

      #      return True
    return False


def get_user(user_phone):
    user_info = collection.find_one({'phone': user_phone})
    return user_info


insert_entry("13364024550", ["withdraw", "100", "to", "Gift"])

print(get_user('13364024550'))
