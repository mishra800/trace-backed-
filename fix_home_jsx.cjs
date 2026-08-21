const fs = require('fs');
const path = 'src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
`                </ul>
</div>
</div>
</div>
</div>
</div>

            </div>
        </section>`,
`                </ul>
            </div>
        </div>
    </div>
</div>

            </div>
        </section>`
);

fs.writeFileSync(path, content);
console.log('Fixed Home.jsx JSX structure');
