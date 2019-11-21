name = input("What's your name? ")
phone = input("What's your telephone? ")
email = input("What's your email? ")
lastJob_name = input("What's your last job? ")
lastJob_start = input("Start: ")
lastJob_end = input("End: ")
 
html = """
<html>
\t<body>
\t\t<p>
\t\t\tName: {name} 
\t\t\tPhone: {phone}
\t\t\tEmail: {email} \n
\t\t\tLast job: {lastJob_name}
\t\t\tFrom: {lastJob_start}
\t\t\tUntil: {lastJob_end}
\t\t</p>
\t</body>
</html>
""".format(name=name,phone=phone,email=email,lastJob_name=lastJob_name, lastJob_start=lastJob_start,lastJob_end=lastJob_end)

f = open('CV.html', 'w')
f.writelines(html)
f.close()
	