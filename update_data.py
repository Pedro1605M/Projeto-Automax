import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

with open('new_data.js', 'r') as f:
    new_data_str = f.read()

content = re.sub(r'const INITIAL_DATA = \[.*?\];', new_data_str, content, flags=re.DOTALL)

with open('app/page.tsx', 'w') as f:
    f.write(content)
