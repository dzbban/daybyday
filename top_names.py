import json, sys, re
sys.stdout.reconfigure(encoding='utf-8')
with open('name_popularity.js', 'r', encoding='utf-8') as f:
    content = f.read()
pairs = re.findall(r'"([^"]+)":(\d+)', content)
pairs.sort(key=lambda x: int(x[1]), reverse=True)
for name, count in pairs[:30]:
    print(f'{name}: {int(count):,}')
