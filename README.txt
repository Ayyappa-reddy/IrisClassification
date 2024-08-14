Iris Classification Project


Overview:

This project involves building a machine learning model to classify iris flowers based on their features. The classification model is developed using Python with scikit-learn and TensorFlow. The project includes a web interface for users to input flower features and receive classification results.

------------------------------------------------------------------------

Project Structure:

IrisClassification/
├── data/                 # Directory for storing dataset files
├── models/               # Directory for storing trained models
│   ├── tf_model.h5       # TensorFlow model file
│   └── scaler.pkl        # Scaler used for feature normalization
├── notebooks/            # Jupyter notebooks for experimentation
├── web/                  # Frontend files for the web interface
│   ├── index.html        # HTML file for the web interface
│   ├── style.css         # CSS file for styling the web interface
│   └── script.js         # JavaScript files for the web interface
├── README.txt            # This file
├── .gitignore            # Git ignore file to exclude unnecessary files
└── requirements.txt      # File listing Python dependencies

---------------------------------------------------------------------------

Installation: 

1. Clone the Repository

git clone https://github.com/yourusername/IrisClassification.git

cd IrisClassification

2. Set Up a Virtual Environment
For Windows:

python -m venv venv
venv\Scripts\activate

For macOS/Linux:

python3 -m venv venv
source venv/bin/activate


3. Install Dependencies

pip install -r requirements.txt


4. Download or Train Models

Ensure you have the tf_model.h5 (TensorFlow model) and scaler.pkl (scaler for feature normalization) in the models/ directory. You can train the model and save it as described in the Jupyter notebooks.

------------------------------------------------------------------------------------------------


Running the Application

1. Start the Flask Server

Navigate to the project root directory and run:

python app.py

The server will start and listen on http://127.0.0.1:5000.

2. Access the Web Interface

Open your web browser and go to:

http://127.0.0.1:5500/web/index.html

Use the web interface to input flower features and get predictions.

----------------------------------------------------------------


API Endpoints

/predict

Method: POST

Description: 

Predicts the iris flower class based on input features.

Request Payload:

{
    "sepalLength": 5.1,
    "sepalWidth": 3.5,
    "petalLength": 1.4,
    "petalWidth": 0.2
}

Response:

{
    "result": "setosa"
}

-----------------------------------------------------------------------------

Development

Frontend: Located in the web/ directory. The web interface uses HTML, CSS, and JavaScript.

Backend: The Flask application is located in app.py.


Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Ensure your changes are tested and do not break existing functionality.



Contact
For any questions or issues, please contact:

Name: Ayyappa Reddy
Email: ayyappareddyyennam@gmail.com