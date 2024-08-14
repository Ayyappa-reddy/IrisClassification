import tensorflow as tf

# Load the existing model
model = tf.keras.models.load_model('models/tf_model.h5')

# Save the model in the new format or with the updated TensorFlow version
model.save('models/tf_model_2_17.h5')  # Save in HDF5 format
# OR
# model.save('models/tf_model_2_17')    # Save in SavedModel format
