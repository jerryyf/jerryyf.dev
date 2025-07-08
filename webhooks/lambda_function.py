import json
import os
import urllib3

http = urllib3.PoolManager()

BOT_TOKEN = os.environ.get('BOT_TOKEN')
CHAT_ID = os.environ.get('CHAT_ID')
TELEGRAM_API_URL = f'https://api.telegram.org/bot{BOT_TOKEN}/sendMessage'

def lambda_handler(event, context):
    message = 'handler error'
    if str(event['status']) == 'fail':
        ip = str(event['ip'])
        user_agent = str(event['userAgent'])
        # referrer = str(event['referrer'])
        message = f'New visit:\nUser agent: {user_agent}\nIP: {ip}\nGeo lookup failed'
    else:
        country = str(event['country'])
        region = str(event['region'])
        city = str(event['city'])
        zip = str(event['zip'])
        lat = str(event['lat'])
        lon = str(event['lon'])
        timezone = str(event['timezone'])
        isp = str(event['isp'])
        org = str(event['org'])
        ip = str(event['ip'])
        user_agent = str(event['userAgent'])
        # referrer = str(event['referrer'])
        message = f'New vist:\nUser agent: {user_agent}\nIP: {ip}\nISP: {isp}\nOrg: {org}\nCountry: {country}\nRegion: {region}\nCity: {city}\nZip: {zip}\nLat: {lat} Lon: {lon}\nTimezone: {timezone}'


    send_telegram_message(message)
    
    return {
        'statusCode': 200,
        'body': json.dumps('Function invocation success')
    }

def send_telegram_message(message):
    """
    Sends a message to the specified Telegram chat using the Bot API.
    """
    payload = {
        'chat_id': CHAT_ID,
        'text': message
    }
    print(payload)

    response = http.request('POST',
                            TELEGRAM_API_URL,
                            body = json.dumps(payload),
                            headers = {'Content-Type': 'application/json'},
                            retries = False)
