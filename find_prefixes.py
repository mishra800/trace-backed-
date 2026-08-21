import re

with open('src/pages/Partners.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

partners = ['seceon', 'peoplelink', 'hp', 'lenovo', 'dell', 'motadata', 'accops', 'apple', 'safetica', 'logrythm', 'manageengine', 'microsoft365', 'azure', '42gears', 'arcon', 'cymmetri', 'gfisoftware', 'poly', 'paloalto', 'forcepoint', 'vmware', 'solarwinds', 'sify']

for p in partners:
    m = re.search(r'show' + p + r' && \(\s*<div className="([^"]+)-page"', text, re.IGNORECASE)
    if m:
        print(f'{p}: {m.group(1)}')
    else:
        # Fallback check
        m2 = re.search(r'show' + p + r'\s+=\s+partnerParam', text, re.IGNORECASE)
        print(f'{p}: NOT FOUND (var exists: {bool(m2)})')
