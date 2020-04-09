import pymongo
from pymongo import MongoClient
import datetime
now = datetime.datetime.now().isoformat()
now_list = now.split('T')
print("=" + now_list[0])

cluster = MongoClient("mongodb+srv://bt_general:287Y4sdwEh1iVh7s@sandbox-0zyvs.mongodb.net/test?retryWrites=true&w=majority")
db = cluster['busitrack']
collection = db['bt_user']


def insert_entry(user_phone, message_list):
    response = True
    business_flag = False
    user_info = get_user(user_phone)
    if len(user_info['businesses']) == 0 or user_info['businesses'] is None:
        return "No businesses were found. Make sure to add a business first. Type 'h' for help."
    for business in user_info['businesses']:
        if business['phoneAbrv'] == message_list[3]:
            business_flag = True
    if not business_flag:
        return "Couldn't find that business. Make sure you spelled everything correctly. Type 'h' for help."

    if message_list[0].lower() == 'withdraw':
        amount = float((message_list[1])) * -1
    else:
        amount = message_list[1]

    x = user_info['businesses']
    for bus in x:
        print(bus['phoneAbrv'] + ' ' + message_list[3])
        if bus['phoneAbrv'] == message_list[3]:

            if len(bus['expenses']) == 0:
                collection.update_one({'phone': user_phone, 'businesses.phoneAbrv': message_list[3]}, {'$set': {'businesses.$.expenses': [{'date': now, 'amount': float(amount)}]}})
                return True
            else:
                for dat in bus['expenses']:
                    dt = dat['date'].split('T')

                    if dt[0] == now_list[0]:

                        amount = float(dat['amount']) + float(amount)
                        collection.update_one({'phone': user_phone, 'businesses.phoneAbrv': message_list[3]}, {'$pull': {'businesses.$.expenses': {'date': dat['date']}}})
                        collection.update_one({'phone': user_phone, 'businesses.phoneAbrv': message_list[3]}, {'$push': {'businesses.$.expenses': {'date': now, 'amount': float(amount)}}})

                        return True

                collection.update_one({'phone': user_phone, 'businesses.phoneAbrv': message_list[3]}, {'$push': {'businesses.$.expenses': {'date': now, 'amount': float(amount)}}})
    return response


def get_user(user_phone):
    user_info = collection.find_one({'phone': user_phone})
    return user_info


def update_last_msg(user_phone, msg):
    collection.update_one({'phone': user_phone}, {'$set': {'lastMsg': str(msg)}})
    return True



#insert_entry("+13364176628", ["withdraw", "2.90", "from", "kfc"])

#print(get_user('13364024550'))

#update_last_msg("+13364176628", "Testiung")
