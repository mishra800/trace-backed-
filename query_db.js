const supabase = require('./db');

async function main() {
    console.log("Fetching news from supabase...");
    try {
        const { data, error } = await supabase.from('news').select('*');
        if (error) {
            console.error("Error fetching news:", error);
        } else {
            console.log("NEWS DATA:", JSON.stringify(data, null, 2));
        }
    } catch (e) {
        console.error(e);
    }
    process.exit(0);
}

// Wait for database connection check to run
setTimeout(main, 1000);
