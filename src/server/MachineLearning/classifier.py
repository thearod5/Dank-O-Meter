
import pandas as pd
from sklearn.pipeline import make_pipeline
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.preprocessing import Normalizer
from sklearn.neighbors import KNeighborsClassifier
import sys

import os
dir_path = os.path.dirname(os.path.realpath(__file__))
root_link = dir_path + "/"

combined_raw = pd.read_csv(root_link + "combined_names.csv")
combined = combined_raw[["name", "keywords"]].dropna()

x_train = combined["keywords"]
y_train = combined["name"]

pipeline = make_pipeline(CountVectorizer(),
                         Normalizer(norm="l1"),
                         KNeighborsClassifier(n_neighbors=8))

pipeline.fit(x_train, y_train)

if len(sys.argv) == 1 or sys.argv == "":
    predicted_strain = -1
else:
    predicted_strain = pipeline.predict([sys.argv[1]])[0]

print(predicted_strain)
sys.stdout.flush()