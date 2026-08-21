import re

with open('src/pages/Partners.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update adv-card with data-aos
global adv_delay
adv_delay = 100

def adv_repl(m):
    global adv_delay
    if 'data-aos=' in m.group(2):
        return m.group(0) # Already has data-aos
    res = f'{m.group(1)} data-aos="fade-up" data-aos-delay="{adv_delay}"{m.group(2)}>'
    adv_delay += 50
    if adv_delay > 400: # Reset delay after a few cards if needed, but sequential is fine
        adv_delay = 100
    return res

# We need to reset delay per section if we want it perfect, but a global reset is good enough
# Let's split by section to reset delay properly.
def process_section(section_match):
    global adv_delay
    adv_delay = 100
    content = section_match.group(0)
    
    # Add aos to adv-card
    content = re.sub(r'(<div className="[^"]*-adv-card")([^>]*?)>', adv_repl, content)
    
    return content

# We'll just replace the adv-card globally but reset delay when we see advantages-grid
parts = re.split(r'(<div className="[^"]*-advantages-grid">)', text)
for i in range(1, len(parts), 2):
    # parts[i] is the grid opening tag
    # parts[i+1] is the content until the next grid (or end)
    
    global adv_delay_local
    adv_delay_local = 100
    def adv_repl_local(m):
        global adv_delay_local
        if 'data-aos=' in m.group(2):
            return m.group(0)
        res = f'{m.group(1)} data-aos="fade-up" data-aos-delay="{adv_delay_local}"{m.group(2)}>'
        adv_delay_local += 50
        return res
        
    parts[i+1] = re.sub(r'(<div className="[^"]*-adv-card")([^>]*?)>', adv_repl_local, parts[i+1])

text = ''.join(parts)

# 2. Update logo-wrapper with data-aos="zoom-in"
text = re.sub(r'(<div className="[^"]*-logo-wrapper")([^>]*?)(/?)>',
              lambda m: m.group(1) + ('' if 'data-aos=' in m.group(2) else ' data-aos="zoom-in" data-aos-duration="1000"') + m.group(2) + m.group(3) + '>', text)

with open('src/pages/Partners.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Done updating adv-card and logo-wrapper AOS")
