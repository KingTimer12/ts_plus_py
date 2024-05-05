from flask import Flask, jsonify
from flask_cors import CORS
from create_template import create_restapi

app = Flask(__name__)
CORS(app)

@app.route('/api/<project>', methods=['POST'])
def create_api(project):
    create_restapi(project)
    return jsonify({'result': f'{project} criado com sucesso.'})

if __name__ == '__main__':
    app.run(debug=True)