import pandas as pd
import sys

root_link = "./"
strains = pd.read_csv(root_link + "Strains.csv")
strains_lookup = strains.set_index("name")

strain_name = sys.argv[1]

if len(sys.argv) == 1 or strain_name not in strains_lookup.index:
    image = "not found"
else:
    image = strains_lookup.loc[strain_name]["image"]

print(image)
sys.stdout.flush()