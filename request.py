import requests

url = 'http://127.0.0.1:5000'
r = requests.post(url,json={'rate':5, 'sales_in_first_month':200, 'sales_in_second_month':400,'sales_in_third_month':600,'sales_in_fourth_month':900,'sales_in_fifth_month':1000})

print(r.json())