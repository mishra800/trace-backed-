import re

with open('src/pages/Partners.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

prefixes = set()
for match in re.finditer(r'className="([^"]+)-page"', text):
    prefix = match.group(1)
    if prefix not in ['sophos', 'hpe', 'aruba', 'ntx', 'veeam']: 
        prefixes.add(prefix)

print("Prefixes found:", prefixes)

for prefix in prefixes:
    print(f"Processing {prefix}...")
    
    # 1. hero-content
    text = re.sub(rf'(<div className="{prefix}-hero-content")([^>]*?)(/?)>', 
                  lambda m: m.group(1) + ('' if 'data-aos=' in m.group(2) else ' data-aos="fade-up" data-aos-duration="1000"') + m.group(2) + m.group(3) + '>', text)
    
    # 2. badge
    text = re.sub(rf'(<div className="{prefix}-badge")([^>]*?)(/?)>', 
                  lambda m: m.group(1) + ('' if 'data-aos=' in m.group(2) else ' data-aos="fade-down" data-aos-delay="200"') + m.group(2) + m.group(3) + '>', text)
    
    # 3. hero-stats
    text = re.sub(rf'(<div className="{prefix}-hero-stats")([^>]*?)(/?)>', 
                  lambda m: m.group(1) + ('' if 'data-aos=' in m.group(2) else ' data-aos="fade-up" data-aos-delay="400"') + m.group(2) + m.group(3) + '>', text)
    
    # 4. why-card
    def why_card_repl(m):
        cls = m.group(1)
        rest = m.group(2)
        if 'data-aos=' in rest:
            return m.group(0)
        if 'why-trace' in cls:
            return f'<div className="{cls}" data-aos="fade-left" data-aos-duration="1000"{rest}>'
        else:
            return f'<div className="{cls}" data-aos="fade-right" data-aos-duration="1000"{rest}>'
    
    text = re.sub(rf'<div className="({prefix}-why-card[^"]*)"([^>]*?)(/?)>', why_card_repl, text)
    
    # 5. section-header
    text = re.sub(rf'(<div className="{prefix}-section-header")([^>]*?)(/?)>', 
                  lambda m: m.group(1) + ('' if 'data-aos=' in m.group(2) else ' data-aos="fade-up"') + m.group(2) + m.group(3) + '>', text)
    
    # 6. cert-img-card
    global cert_delay
    cert_delay = 100
    def cert_repl(m):
        global cert_delay
        if 'data-aos=' in m.group(2):
            return m.group(0)
        res = f'{m.group(1)} data-aos="zoom-in" data-aos-delay="{cert_delay}"{m.group(2)}>'
        cert_delay += 50
        return res
    text = re.sub(rf'(<div className="{prefix}-cert-img-card")([^>]*?)>', cert_repl, text)
    
    # 7. add cert-card-overlay inside cert-img-card
    def add_overlay(m):
        if 'cert-card-overlay' in m.group(0):
            return m.group(0)
        return f'{m.group(1)}\n                  <img {m.group(2)}/>\n                  <div className="cert-card-overlay"></div>\n                </div>'
    text = re.sub(rf'(<div className="{prefix}-cert-img-card"[^>]*>)\s*<img ([^>]*?)/>\s*(?!<div className="cert-card-overlay"></div>)\s*</div>', add_overlay, text)

    # 8. case-card
    global case_delay
    case_delay = 100
    def case_repl(m):
        global case_delay
        if 'data-aos=' in m.group(2):
            return m.group(0)
        res = f'{m.group(1)} data-aos="fade-up" data-aos-delay="{case_delay}"{m.group(2)}>'
        case_delay += 50
        return res
    text = re.sub(rf'(<div className="{prefix}-case-card")([^>]*?)>', case_repl, text)
    
    # 9. special-offer
    text = re.sub(rf'(<section className="{prefix}-special-offer")([^>]*?)(/?)>', 
                  lambda m: m.group(1) + ('' if 'data-aos=' in m.group(2) else ' data-aos="zoom-in" data-aos-duration="1000"') + m.group(2) + m.group(3) + '>', text)
                  
    # 10. offer-glow
    def add_offer_glow(m):
        if f'className="{prefix}-offer-glow"' in m.group(0):
            return m.group(0)
        return f'<div className="{prefix}-offer-banner">\n                <div className="{prefix}-offer-glow"></div>\n                <div className="{prefix}-offer-content">'
    text = re.sub(rf'<div className="{prefix}-offer-banner">\s*<div className="{prefix}-offer-content">', add_offer_glow, text)

# header-icon-glow for all section headers
def add_icon_glow(m):
    classes = m.group(2)
    if 'header-icon-glow' in classes:
        return m.group(0)
    return f'{m.group(1)}<i className="{classes} header-icon-glow"'
text = re.sub(rf'(<div className="[^"]+-section-header"[^>]*>\s*<h2>\s*)<i className="([^"]+)"', add_icon_glow, text)


with open('src/pages/Partners.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Done updating Partners.jsx")
