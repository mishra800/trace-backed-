const fs = require('fs');
const path = 'src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/<\/ul>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/, `</ul>
            </div>
        </div>
    </div>
</div>

            </div>
        </section>`);

fs.writeFileSync(path, content);
console.log("Fixed JSX closing div");
