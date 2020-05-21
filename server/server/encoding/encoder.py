from datetime import datetime

LETTER_TO_NUMBER_KEY = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,        
}

NUMBER_TO_LETTER_KEY = {
     1:'a',
     2:'b',
     3:'c',
     4:'d',
     5:'e',
     6:'f',
     7:'g',
     8:'h',
     9:'i',
     10:'j',
     11:'k',
     12:'l',
     13:'m',
     14:'n',
     15:'o',
     16:'p',
     17:'q',
     18:'r',
     19:'s',
     20:'t',
     21:'u',
     22:'v',
     23:'w',
     24:'x',
     25:'y',
     26:'z',
}

class Encoder:
    def __init__(self):
        pass

    def shift_cipher(self, message: str, shift: int, should_save=True) -> str:
        shift_result: str = ""
        
        for letter in message:
            if letter in LETTER_TO_NUMBER_KEY:
                letter_value = LETTER_TO_NUMBER_KEY[letter]
                
                new_letter_value = letter_value + shift

                if new_letter_value > 26: 
                    new_letter_value = new_letter_value % 26
                
                shift_result += NUMBER_TO_LETTER_KEY[new_letter_value]
            elif letter == ' ': 
                shift_result += letter
            else:
                raise NotImplementedError("Character not in cipher key.")
        
        
        if should_save:
            self.save(shift_result)

        return shift_result
    
    def save(self, message: str) -> None: 
        date_time = datetime.now()
        
        file_name = 'result_{year}_{month}_{day}_{msec}.txt'.format(
            year=date_time.year,
            month=date_time.month,
            day=date_time.day,
            msec=date_time.microsecond
        )

        with open(file_name, 'w') as f: 
            f.write(message)
