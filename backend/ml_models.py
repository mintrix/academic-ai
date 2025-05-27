import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.neural_network import MLPClassifier
import sqlite3

mlp_model = None

def predict_next_grade(grades):
    X = np.arange(len(grades)).reshape(-1, 1)
    y = np.array(grades)
    model = LinearRegression()
    model.fit(X, y)
    next_grade = model.predict([[len(grades)]])[0]
    return round(float(next_grade), 2)

def train_mlp():
    global mlp_model
    conn = sqlite3.connect('students.db')
    df = pd.read_sql_query("SELECT * FROM students", conn)
    conn.close()
    if df.empty:
        return None
    df['grades'] = df['grades'].apply(lambda x: list(map(float, x.split(','))))
    X = [g for g in df['grades'] if len(g) > 1]
    y = df['goals']
    if len(X) > 0:
        mlp_model = MLPClassifier(hidden_layer_sizes=(10,), max_iter=500, random_state=42)
        mlp_model.fit(X, y)

def get_mlp_recommendation(grades):
    global mlp_model
    if mlp_model:
        return mlp_model.predict([grades])[0]
    return "Model not trained yet."
