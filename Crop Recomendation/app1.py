import streamlit as st
import joblib
import pandas as pd

# Load the crop dataset
crop_data = pd.read_csv('Crop_recommendation.csv')

def predict_crop(Nitrogen, Phosphorus, Potassium, Temperature, Humidity, ph, Rainfall):
    model = joblib.load(r'crop_model.pkl')
    values = [Nitrogen, Phosphorus, Potassium, Temperature, Humidity, ph, Rainfall]
    prediction = model.predict([values])
    return prediction[0]

def get_crop_info(crop_name):
    crop_info = crop_data[crop_data['label'] == crop_name].iloc[0]
    return crop_info

def main():
    st.title('Crop Recommendation System')
    st.sidebar.title('Input Parameters')

    # Search for a crop
    search_crop = st.sidebar.text_input('Search for a crop', '')
    if search_crop:
        crop_info = get_crop_info(search_crop)
        if not crop_info.empty:
            st.subheader(f'Information for {search_crop}')
            st.write(f"Nitrogen: {crop_info['N']}")
            st.write(f"Phosphorus: {crop_info['P']}")
            st.write(f"Potassium: {crop_info['K']}")
            st.write(f"Temperature (°C): {crop_info['temperature']}")
            st.write(f"Humidity (%): {crop_info['humidity']}")
            st.write(f"pH: {crop_info['ph']}")
            st.write(f"Rainfall (mm): {crop_info['rainfall']}")
        else:
            st.write(f"No information found for '{search_crop}'")

    # Input parameters for prediction
    Nitrogen = st.sidebar.number_input('Nitrogen', min_value=0, max_value=100, value=50, step=1)
    Phosphorus = st.sidebar.number_input('Phosphorus', min_value=0, max_value=100, value=50, step=1)
    Potassium = st.sidebar.number_input('Potassium', min_value=0, max_value=100, value=50, step=1)
    Temperature = st.sidebar.number_input('Temperature (°C)', min_value=0, max_value=100, value=25, step=1)
    Humidity = st.sidebar.number_input('Humidity (%)', min_value=0, max_value=100, value=50, step=1)
    ph = st.sidebar.number_input('pH', min_value=0.0, max_value=14.0, value=7.0, step=0.1)
    Rainfall = st.sidebar.number_input('Rainfall (mm)', min_value=0, max_value=10000, value=500, step=1)

    if st.sidebar.button('Predict'):
        prediction = predict_crop(Nitrogen, Phosphorus, Potassium, Temperature, Humidity, ph, Rainfall)
        st.write(f'Predicted Crop: {prediction}')

if __name__ == '__main__':
    main()