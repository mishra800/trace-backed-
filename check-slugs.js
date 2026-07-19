const supabase = require('./db');

async function check() {
    console.log('Fetching blogs...');
    const { data: blogs, error: blogErr } = await supabase.from('blogs').select('id, title, slug');
    if (blogErr) {
        console.error('Error fetching blogs:', blogErr);
    } else {
        console.log('Blogs:');
        blogs.forEach(b => console.log(`ID: ${b.id} | Title: "${b.title}" | Slug: "${b.slug}"`));
    }

    console.log('\nFetching events...');
    const { data: events, error: eventErr } = await supabase.from('events').select('id, title, slug');
    if (eventErr) {
        console.error('Error fetching events:', eventErr);
    } else {
        console.log('Events:');
        events.forEach(e => console.log(`ID: ${e.id} | Title: "${e.title}" | Slug: "${e.slug}"`));
    }
}

check().catch(console.error);
