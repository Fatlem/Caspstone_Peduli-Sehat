import json
import pandas as pd
import joblib

try:
    # Load model and label encoder
    model = joblib.load("randomforest_model.joblib")
    le = joblib.load("label_encoder.joblib")

    # Load feature columns
    with open("selected_features.json", "r") as f:
        feature_columns = json.load(f)

    # Read symptoms from temporary file
    with open("temp_input.json", "r") as f:
        symptoms = json.load(f)

    # Create input dictionary with all features set to 0
    input_dict = {feat: 0 for feat in feature_columns}

    # Set selected symptoms to 1
    for symptom in symptoms:
        if symptom in input_dict:
            input_dict[symptom] = 1

    # Create input DataFrame without feature names
    input_vector = [input_dict[col] for col in feature_columns]
    input_df = pd.DataFrame([input_vector])

    # Make prediction
    predicted_class_index = model.predict(input_df)[0]
    predicted_label = le.inverse_transform([predicted_class_index])[0]

    # Return result
    result = {"success": True, "prediction": predicted_label.upper()}
    print(json.dumps(result))

except Exception as e:
    error_result = {"success": False, "error": str(e)}
    print(json.dumps(error_result))
    print(f"Error: {str(e)}", file=sys.stderr)
