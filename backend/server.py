from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

WHATSAPP_API_URL = 'https://graph.facebook.com/v19.0/<phone-number-id>/messages'
ACCESS_TOKEN = '<your-access-token>'

@app.route('/send-whatsapp', methods=['POST'])
def send_whatsapp():
    data = request.json
    phone = data.get('phone')
    message = data.get('message')
    if not phone or not message:
        return jsonify({'error': 'Missing phone or message'}), 400
    payload = {
        'messaging_product': 'whatsapp',
        'to': phone,
        'type': 'text',
        'text': {'body': message}
    }
    headers = {
        'Authorization': f'Bearer {ACCESS_TOKEN}',
        'Content-Type': 'application/json'
    }
    response = requests.post(WHATSAPP_API_URL, json=payload, headers=headers)
    if response.status_code == 200:
        return jsonify({'success': True})
    else:
        return jsonify({'error': response.text}), response.status_code

if __name__ == '__main__':
    app.run(port=5000, debug=True)
