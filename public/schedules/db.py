import pandas as pd

csv_file_path = 'public/schedules/calendar.csv'
df = pd.read_csv(csv_file_path)

json_file_path = 'public/schedules/calendar.json'
df.to_json(json_file_path, orient='records', lines=True)
