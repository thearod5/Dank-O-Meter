
import sys
import pandas as pd
from sklearn.pipeline import make_pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import Normalizer
from sklearn.neighbors import KNeighborsRegressor

import warnings
warnings.filterwarnings('ignore') # counts are being converted into floats

import os
dir_path = os.path.dirname(os.path.realpath(__file__))
root_link = dir_path + "/"

combined_ratings_raw = pd.read_csv(root_link + "combined_ratings.csv")
combined_ratings = combined_ratings_raw[["Rating", "Qualities"]].dropna()
combined_ratings.head()

x_train = combined_ratings["Qualities"]
y_train = combined_ratings["Rating"]

# cleaning
pipeline = make_pipeline(TfidfVectorizer(max_features=10), Normalizer(norm="l2"), KNeighborsRegressor(n_neighbors=30))
pipeline.fit(x_train, y_train)

if len(sys.argv) == 1 or sys.argv == "":
    predicted_rating = -1
else:
    predicted_rating = pipeline.predict([sys.argv[1]])[0]

print(predicted_rating)
sys.stdout.flush()