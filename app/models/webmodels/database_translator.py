import sys

sys.path.append('./../../dbms/phone_dbmodel')
import phone_db


def get_user(phone_number):
    return phone_db.get_user(phone_number)


def update_db(phone_number, message_list):
    return phone_db.insert_entry(phone_number, message_list)


def update_last_msg(phone_number, msg):
    return phone_db.update_last_msg(phone_number, msg)


def get_businesses(user_phone):
    return phone_db.get_businesses(user_phone)
