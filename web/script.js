console.log("JavaScript file is loaded");

document.getElementById('iris-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let sepalLength = document.getElementById('sepal-length').value;
    let sepalWidth = document.getElementById('sepal-width').value;
    let petalLength = document.getElementById('petal-length').value;
    let petalWidth = document.getElementById('petal-width').value;

    let data = {
        sepalLength: parseFloat(sepalLength),
        sepalWidth: parseFloat(sepalWidth),
        petalLength: parseFloat(petalLength),
        petalWidth: parseFloat(petalWidth)
    };

    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);

        // Set result text
        let resultText = 'Predicted Iris: ' + data.result;

        // Set image URL based on prediction
        let imageUrl = `images/${data.result.toLowerCase()}.jpg`; // Update with your image path

        // Display result text
        document.getElementById('prediction-text').innerText = resultText;

        // Check if the image exists
        fetch(imageUrl, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    // If image exists, display it
                    let resultImage = document.getElementById('result-image');
                    resultImage.src = imageUrl;
                    resultImage.style.display = 'block'; // Show the image
                } else {
                    // If image does not exist, hide image and show fallback text
                    let resultImage = document.getElementById('result-image');
                    resultImage.style.display = 'none'; // Hide the image
                    document.getElementById('prediction-text').innerText += ' (Image not available)';
                }
            })
            .catch(error => {
                console.error('Error checking image:', error);
                document.getElementById('prediction-text').innerText += ' (Error loading image)';
                let resultImage = document.getElementById('result-image');
                resultImage.style.display = 'none'; // Hide the image
            });
    })
    .catch(error => console.error('Error:', error));
});
