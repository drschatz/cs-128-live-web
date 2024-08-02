import pandas as pd

csv_file_path = 'public/schedules/calendar24.csv'
df = pd.read_csv(csv_file_path)

json_file_path = 'public/schedules/calendar24.json'
df.to_json(json_file_path, orient='records', lines=True)
