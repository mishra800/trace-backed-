const fs = require('fs');
const path = 'src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

// I'll extract everything between <div className="portfolio-two__carousel-container" and </section>
// And manually rewrite the closing tags.

let start = content.indexOf('<div className="portfolio-two__carousel-container"');
let end = content.indexOf('</section>', start) + '</section>'.length;

let sectionContent = content.substring(start, end);
// Just find all opening and closing tags and see where they mismatch.
// Actually, it's easier to just replace all the closing tags at the very end of this section.
// The end of this section should be:
/*
                                    <p className="portfolio-two__text">
                                        Optimize configurations for maximum security and performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>
</section>
*/

content = content.replace(
/<\/ul>[\s\n<\/div>]*<\/section>/g,
`</ul>
            </div>
        </div>
    </div>
</div>
</div>
</section>`);

fs.writeFileSync(path, content);
console.log("Fixed again");
