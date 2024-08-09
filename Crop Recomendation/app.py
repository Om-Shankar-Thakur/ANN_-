import streamlit as st
import joblib

def predict_crop(Nitrogen, Phosphorus, Potassium, Temperature, Humidity, ph, Rainfall):
    model = joblib.load(r'crop_model.pkl')
    values = [Nitrogen, Phosphorus, Potassium, Temperature, Humidity, ph, Rainfall]
    prediction = model.predict([values])
    return prediction[0]

def main():
    st.title('Crop Recommendation System')

    st.sidebar.title('Input Parameters')
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
