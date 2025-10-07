#conditional statements
ticket_price = 90
wallet_size = 80

if (ticket_price <= wallet_size):
    print("Hurry! you can watch the movie")
else:
    print('you dont have enough balance')

#elif
marks = 46
if (marks >= 90):
    print('A+')
elif (marks >= 80):
    print('A')
elif (marks >= 70):
    print('B+')
elif (marks >= 60):
    print('B')
else:
    print('Fail')