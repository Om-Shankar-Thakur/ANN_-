# Flood and Drought Prediction Model

This is a Python-based application that predicts the likelihood of floods, droughts, or normal rainfall conditions based on historical rainfall data. The model uses the ElasticNet regression algorithm from the scikit-learn library to make predictions.

## Features

- Select a state from the available options to load the corresponding rainfall data
- Visualize the predicted rainfall values for a selected year
- Calculate and display the mean, standard deviation, total rainfall, average rainfall, and classification (floody, drought, wet, or normal) for the selected year
- Predict future rainfall values from 1900 to 2100 and visualize the predictions
- Save the trained model for future use

## Prerequisites

- Python 3.x
- Required Python packages: streamlit, numpy, pandas, matplotlib, seaborn, scikit-learn

## Installation

1. Clone the repository or download the source code.
2. Install the required packages using pip:

```
pip install streamlit numpy pandas matplotlib seaborn scikit-learn
```

3. Make sure you have the data files (CSV files containing historical rainfall data) in a directory named `Data` within the project directory.

## Usage

1. Navigate to the project directory in your terminal or command prompt.
2. Run the Streamlit application with the following command:

```
streamlit run app.py
```

3. The application will open in your default web browser.
4. Select a state from the dropdown menu in the sidebar.
5. Adjust the year slider or enter a custom year to view the predictions for that year.
6. The application will display the predicted rainfall values, mean, standard deviation, total rainfall, average rainfall, and classification for the selected year.
7. Additionally, the application will plot the predicted rainfall from 1900 to 2100 and the future predictions separately.

## Data Files

The application expects the historical rainfall data to be provided in CSV files, with each file representing a different state. The CSV files should have the following columns:

- `SUBDIVISION`: The subdivision name (optional)
- `YEAR`: The year
- `JAN`: Rainfall value for January
- `FEB`: Rainfall value for February
- `MAR`: Rainfall value for March
- `APR`: Rainfall value for April
- `MAY`: Rainfall value for May
- `JUN`: Rainfall value for June
- `JUL`: Rainfall value for July
- `AUG`: Rainfall value for August
- `SEP`: Rainfall value for September
- `OCT`: Rainfall value for October
- `NOV`: Rainfall value for November
- `DEC`: Rainfall value for December

The application assumes that the CSV files are located in the `Data` directory within the project directory.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
