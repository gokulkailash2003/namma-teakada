import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

SMTP_SERVER = 'smtp.gmail.com'  # Change if using another provider
SMTP_PORT = 587
SENDER_EMAIL = 'nammateakada2k17@gmail.com'  # <-- Replace with your email
SENDER_PASSWORD = 'mpxw aqjq vhum tfbs'  # <-- Replace with your app password
RECEIVER_EMAIL = 'nammateakada2k17@gmail.com'  # <-- Replace with receiver email

@app.route('/send-mail', methods=['POST'])
def send_mail():
    data = request.json
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

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, RECEIVER_EMAIL, msg.as_string())
        server.quit()
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5001, debug=True)
