import time

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = {
    'praven@live.com': 'password',
    'murice@live.com': '12345',
    'jack@live.com': 'peter'
}


cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)


@app.route('/login/<email>/<password>')
def login(email, password):

    time.sleep(4);
    if email in users:
        if users.get(email) == password:
            return jsonify({
                "authenticated": True,
                "message": "",
                "status": 0
            })

    return jsonify({
        "authenticated": False,
        "message": "The given email and password was incorrect",
        "status": -1
    })


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
