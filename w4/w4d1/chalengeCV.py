name = input("What's your name? ")
phone = input("What's your telephone? ")
email = input("What's your email? ")
lastJob_name = input("What's your last job? ")
lastJob_start = input("Start: ")
lastJob_end = input("End: ")
 
cv = " Name: {name}\n \t \t Phone: {phone}\n \t \t Email: {email}\n \n \t \t Last job: {lastJob_name}\n \t \t From: {lastJob_start}\n \t \t Until: {lastJob_end}\n"

html = "<html>\n\t <body>\n\t\t <p>"+ cv.format(name=name,phone=phone,email=email,lastJob_name=lastJob_name, lastJob_start=lastJob_start,lastJob_end=lastJob_end) + "\t \t </p>\n \t</body>\n </html>"

print(html)