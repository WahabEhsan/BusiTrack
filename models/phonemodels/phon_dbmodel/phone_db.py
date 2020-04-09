import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://bt_general:287Y4sdwEh1iVh7s@sandbox-0zyvs.mongodb.net/test?retryWrites=true&w=majority")
db = cluster['busitrack']
collection = db['bt_user']


def insert_entry(user_phone, message_list):
    user_info = get_user(user_phone)
    for busi in user_info['businesses']:
        if busi['businessName'] == message_list[3]:
            collection.update_one({'phone': user_phone}, {'$push': {'expenses': {'date': '', 'amount': 0.0}}})
            return True
    return False


def get_user(user_phone):
    user_info = collection.find_one({'phone': user_phone})
    return user_info


#print(get_user('13364024550'))
#for x in insert_entry("s", "d"):
#    print(x)

insert_entry("13364024550", ["add", "200", "to", "Gift"])