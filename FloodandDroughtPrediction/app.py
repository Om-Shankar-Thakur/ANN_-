import streamlit as st
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import ElasticNet
import pickle

# Constants
TEST_SIZE = 0.01
RANDOM_STATE = 42
MIN_YEAR = 1901
MAX_YEAR = 2100

# Define the plot_graphs function
def plot_graphs(y_pred, title):
    plt.figure(figsize=(12, 6))
    plt.plot(y_pred)
    plt.xlabel('Month')
    plt.ylabel('Predicted Rainfall')
    plt.title(title)
    return plt

# Define a dictionary that maps state names to file names
state_file_dict = {
    'JHARKHAND': 'JHARKHAND',
    'ODISHA': 'ODISHA',
    'COASTAL ANDHRA PRADESH': 'COASTAL ANDHRA PRADESH',
    'BIHAR':'BIHAR',
    'PUNJAB':'PUNJAB',
    # Add more states as needed
}

# Load data based on the user's state selection
state = st.sidebar.selectbox("Select State", list(state_file_dict.keys()))
fn = state_file_dict[state]
data = pd.read_csv(f'Data/{fn}.csv')

# Convert 'YEAR' column to numeric type
data['YEAR'] = pd.to_numeric(data['YEAR'])

# Exclude 'SUBDIVISION' and 'YEAR' columns
X_cols = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
y_col = 'DEC'
X = data[X_cols]
y = data[y_col]

# Handle missing values for X and y
X.fillna(X.mean(), inplace=True)
y.fillna(y.mean(), inplace=True)

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=TEST_SIZE, random_state=RANDOM_STATE)

# Define and train the model
def train_model(X_train, y_train, alpha=0.5):
    reg = ElasticNet(alpha=alpha)
    reg.fit(X_train, y_train)
    return reg

reg = train_model(X_train, y_train, alpha=0.5)

# Test the model on a selected year
test_year = st.sidebar.slider("Select Year", min_value=MIN_YEAR, max_value=MAX_YEAR, value=2015)
temp = data[data['YEAR'] == test_year]


if temp.empty:
    dummy_data = pd.DataFrame(np.random.rand(1, len(X_cols)), columns=X_cols)
    X_year = dummy_data
else:
    X_year = temp[X_cols]

y_year_pred = reg.predict(X_year)

# Display mean and standard deviation
if temp.empty:
    #st.write(f"No actual data available for the year {test_year}.")
    st.write(f"Mean (Predicted): {np.mean(y_year_pred)}")
    st.write(f"Standard deviation (Predicted): {np.sqrt(np.var(y_year_pred))}")
else:
    y_year = temp[y_col]
    st.write(f"Mean {test_year}: {np.mean(y_year)} ({np.mean(y_year_pred)})")
    st.write(f"Standard deviation {test_year}: {np.sqrt(np.var(y_year))} ({np.sqrt(np.var(y_year_pred))})")


# Calculate total rainfall and average rainfall for the selected year
total_rainfall = np.sum(y_year_pred)
avg_rainfall = np.mean(y_year_pred)
classification = 'Normal'  # Default classification

if total_rainfall > 10:
    classification = 'Floody'
elif total_rainfall < 5:
    classification = 'Drought'
elif avg_rainfall > 5:
    classification = 'Wet'

st.write(f"Total Rainfall (Predicted): {total_rainfall:.2f} mm")
st.write(f"Average Rainfall (Predicted): {avg_rainfall:.2f} mm")
st.write(f"Classification: {classification}")

# Predict future values from 1900 to 2100
future_years = np.arange(1900, 2101)
future_X = pd.DataFrame(np.random.rand(len(future_years), len(X_cols)), columns=X_cols)
future_y_pred = reg.predict(future_X)

# Combine past and future data
all_years = np.concatenate((data['YEAR'], future_years))
all_y_pred = np.concatenate((y, future_y_pred))

# Plot all data from 1900 to 2100
fig = plt.figure(figsize=(12, 6))
plt.plot(all_years, all_y_pred)
plt.xlabel('Year')
plt.ylabel('Predicted Rainfall')
plt.title('Predicted Rainfall from 1900 to 2100')
st.pyplot(fig)

# Plot future predictions
fig = plt.figure(figsize=(12, 6))
plt.plot(future_years, future_y_pred)
plt.xlabel('Year')
plt.ylabel('Predicted Rainfall')
plt.title('Future Predictions')
st.pyplot(fig)

# Save the model
Pkl_Filename = f"trained/{fn}.pkl"
with open(Pkl_Filename, 'wb') as file:
    pickle.dump(reg, file)