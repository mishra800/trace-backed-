import re

jsx = open(r'c:\Users\Abhishek Mishra\Downloads\TRACE_WEBSITE_ORIGNAL-main\src\pages\Partners.jsx', encoding='utf-8', errors='replace').read()
css = open(r'c:\Users\Abhishek Mishra\Downloads\TRACE_WEBSITE_ORIGNAL-main\src\pages\Partners.css', encoding='utf-8', errors='replace').read()

classes = set()
for m in re.finditer(r'className=["\']([^"\']+)["\']', jsx):
    for c in m.group(1).split():
        classes.add(c)

missing = [c for c in sorted(classes) if ('.' + c) not in css]
print('MISSING classes (%d):' % len(missing))
for c in missing:
    print(' ', c)
