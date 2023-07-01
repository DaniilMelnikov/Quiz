
# Это код, который не делит логику
list_name = {'step-1':'Иван', 'step-2':'Дэнчик', 'step-3':'Руслан', 'step-4':'Кирюха'}

print(list_name['step-1'])

def check_list(id):
    key = f'step-{id}'
    if key == 'step-1':
        step_1(key)
    elif key == 'step-2':
        step_2(key)
    elif key == 'step-3':
        step_3(key)
    elif key == 'step-4':
        step_4(key)


def step_1(key):
    print(list_name[key])


def step_2(key):
    print(list_name[key])


def step_3(key):
    print(list_name[key])


def step_4(key):
    print(list_name[key])


id = 1
length = len(list_name)
while True:
    click_input = input('< или >\n')
    if click_input == '>':
        id += 1
        if length < id:
            id = 1
        check_list(id)
    elif click_input == '<':
        id -= 1
        if id < 1:
            id = length
        check_list(id)
    else:
        print('Попробуй снова')
        break

###############################

# Это код, который делит логику
lsit_name = ['Иван', 'Дэнчик', 'Руслан', 'Кирюха']

def current_id(id, length):
    if length < id:
        id = 0
    elif id < 0:
        id = length
    return id


def click(input, id):
    if input == '>':
        id += 1
    elif input == '<':
        id -= 1
    else:
        print('Ты рофл?) Пока!')
        return True, id
    return False, id

id = 0
length = len(lsit_name) - 1

while True:
    id = current_id(id, length)
    print(lsit_name[id])
    click_input = input('< или >?\n')
    current_input, id = click(click_input, id)
    if current_input:
        break