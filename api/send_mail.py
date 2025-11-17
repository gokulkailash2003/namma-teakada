import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import json

SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
SENDER_EMAIL = 'nammateakada2k17@gmail.com'
SENDER_PASSWORD = 'mpxw aqjq vhum tfbs'
RECEIVER_EMAIL = 'nammateakada2k17@gmail.com'

def handler(event, context):
    try:
        data = json.loads(event['body'])
        name = data.get('name')
        email = data.get('email')
        phone = data.get('phone')
        service = data.get('service')
        package = data.get('package')
        query = data.get('query')

        subject = f'New Booking for {service}'
        body = f"""
        Name: {name}
        Email: {email}
        Phone: {phone}
        Service: {service}
        Package: {package}
        Query: {query}
        """

        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = RECEIVER_EMAIL
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))

        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, RECEIVER_EMAIL, msg.as_string())
        server.quit()

        return {
            'statusCode': 200,
            'body': json.dumps({'success': True})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }