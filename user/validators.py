import phonenumbers
from phonenumbers import carrier
from phonenumbers.phonenumberutil import number_type

def phone_validate(phone: str) -> bool:
    return carrier._is_mobile(number_type(phonenumbers.parse(phone)))