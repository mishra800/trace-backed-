import zipfile, xml.etree.ElementTree as ET

with zipfile.ZipFile('Top HPE Server.docx', 'r') as z:
    with z.open('word/document.xml') as doc:
        content = doc.read().decode('utf-8')

W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'

rids = {'rId5': 'image1.jpeg', 'rId6': 'image2.jpeg', 'rId7': 'image3.png', 'rId8': 'image4.jpeg'}

root = ET.fromstring(content)
body = root.find('{%s}body' % W)
for i, child in enumerate(body):
    blips = child.findall('.//{http://schemas.openxmlformats.org/drawingml/2006/main}blip')
    if blips:
        for b in blips:
            rid = b.get('{%s}embed' % R)
            print('Para %d: IMAGE %s -> %s' % (i, rid, rids.get(rid, rid)))
    else:
        texts = []
        for t in child.iter('{%s}t' % W):
            if t.text:
                texts.append(t.text)
        line = ''.join(texts).strip()
        if line:
            print('Para %d: TEXT: %s' % (i, line[:100]))
