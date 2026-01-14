from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    
    if not data:
        return jsonify({"status": "error", "message": "No data received"}), 400
    
    name = data.get('name', 'Anonymous')
    message_body = data.get('message', '')
    
    # CONFIGURATION - REPLACE WITH YOUR DETAILS
    sender_email = "amitsingh6394366374@gmail.com"
    sender_password = "bwxs izeo tpwt ubrv"
    recipient_email = "amitsingh6394366374@gmail.com"  # Where you want to receive emails

    # Create Message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = f"New Portfolio Message from {name}"
    
    body = f"Name: {name}\n\nMessage:\n{message_body}"
    msg.attach(MIMEText(body, 'plain'))
    
    try:
        # Connect to Gmail SMTP Server
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()  # Secure the connection
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, recipient_email, text)
        server.quit()
        
        return jsonify({"status": "success", "message": "Email sent successfully"}), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/send-feedback', methods=['POST'])
def send_feedback():
    data = request.json
    
    if not data:
        return jsonify({"status": "error", "message": "No data received"}), 400
    
    rating = data.get('rating', 0)
    comment = data.get('comment', 'No comment provided')
    
    # CONFIGURATION - REPLACE WITH YOUR DETAILS
    sender_email = "amitsingh6394366374@gmail.com"
    sender_password = "bwxs izeo tpwt ubrv"
    recipient_email = "amitsingh6394366374@gmail.com"

    # Create Message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = f"New Portfolio Feedback: {rating}/5 Stars"
    
    body = f"Rating: {rating}/5 Stars\n\nFeedback:\n{comment}"
    msg.attach(MIMEText(body, 'plain'))
    
    try:
        # Connect to Gmail SMTP Server
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, recipient_email, text)
        server.quit()
        
        return jsonify({"status": "success", "message": "Feedback sent successfully"}), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    print("Starting Python Email Server on port 5000...")
    app.run(debug=True, port=5000)
