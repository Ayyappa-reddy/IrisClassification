from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import joblib
import numpy as np
import tensorflow as tf
from sklearn.datasets import load_iris

app = Flask(__name__)
CORS(app)

# Load the TensorFlow model and scaler
model = tf.keras.models.load_model('models/tf_model_2_17.h5')
scaler = joblib.load('models/scaler.pkl')
iris = load_iris()

@app.route('/')
def index():
    return send_from_directory('web', 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('web', filename)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    input_data = np.array([[data['sepalLength'], data['sepalWidth'], data['petalLength'], data['petalWidth']]])
    input_data = scaler.transform(input_data)  # Scale the input data
    prediction = model.predict(input_data)
    predicted_class = np.argmax(prediction, axis=1)[0]
    return jsonify({'result': iris.target_names[predicted_class]})

if __name__ == '__main__':
    app.run(debug=True)
