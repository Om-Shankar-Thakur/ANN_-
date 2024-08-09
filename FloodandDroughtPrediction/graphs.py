import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error
from sklearn.linear_model import ElasticNet
import pickle

# Define the plot_graphs function
def plot_graphs(y_true, y_pred, title):
    plt.figure(figsize=(12, 6))
    sns.scatterplot(x=y_true, y=y_pred, alpha=0.5)
    sns.regplot(x=y_true, y=y_pred, scatter=False, color='r')
    plt.xlabel('True Values')
    plt.ylabel('Predicted Values')
    plt.title(title)
    plt.show()

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
state = 'COASTAL ANDHRA PRADESH'  # Replace this with the user's state selection
fn = state_file_dict[state]
data = pd.read_csv(f'Data/{fn}.csv')

# Convert 'YEAR' column to numeric type
data['YEAR'] = pd.to_numeric(data['YEAR'])

# Exclude 'SUBDIVISION' and 'YEAR' columns
X_cols = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
y_col = 'DEC'
X = data[X_cols]
y = data[y_col]

# Handle missing values
X.fillna(X.mean(), inplace=True)
y.fillna(y.mean(), inplace=True)

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.01, random_state=42)

# Define and train the model
def train_model(X_train, y_train, alpha=0.5):
    reg = ElasticNet(alpha=alpha)
    reg.fit(X_train, y_train)
    return reg

reg = train_model(X_train, y_train)

# Test the model on 2010 and 2015
def test_model(reg, year):
    temp = data[data['YEAR'] == year]
    X_year = temp[X_cols]
    y_year = temp[y_col]
    y_year_pred = reg.predict(X_year)
    print(f"Mean {year}:", np.mean(y_year), np.mean(y_year_pred))
    print(f"Standard deviation {year}:", np.sqrt(np.var(y_year)), np.sqrt(np.var(y_year_pred)))
    # Plot for the year
    plot_graphs(y_year, y_year_pred, f"Year-{year}")

test_year = 2015  # Replace this with the user's year selection
test_model(reg, test_year)

# Save the model
Pkl_Filename = f"trained/{fn}.pkl"
with open(Pkl_Filename, 'wb') as file:
    pickle.dump(reg, file)

# Calculate total rainfall and classify the state for the selected year
def classify_state(reg, year, data):
    temp = data[data['YEAR'] == year]
    X_year = temp[X_cols]
    y_year_pred = reg.predict(X_year)
    total_rainfall = np.sum(y_year_pred)
    avg_rainfall = np.mean(y_year_pred)
    if total_rainfall > 1000:
        classification = 'Floody State'
    elif avg_rainfall > 50:
        classification = 'Wet State'
    elif avg_rainfall > 25:
        classification = 'Dry State'
    else:
        classification = 'Drought State'
    print(f"Total Rainfall: {total_rainfall:.2f} mm")
    print(f"Average Rainfall: {avg_rainfall:.2f} mm")
    print(f"Classification: {classification}")

classify_state(reg, test_year, data)