const fs = require('fs');

const html = fs.readFileSync('public/opus_pro_live.html', 'utf8');

const results = [];
// Looking for chunks like:
// <div class="a_customer-stories_customers-text-wrapper..."><div><strong>Logan Paul</strong></div><div class="...">23.6M</div>
// And before that: <img width="60" ... src="https://cdn.prod.website-files.com/...logans_face.jpg">

const regex = /<img[^>]*src="([^"]+)"[^>]*class="a_visual is-circle"(?:[^>]*>|.*?)<svg[^>]*>.*?<\/svg>.*?<strong>([^<]+)<\/strong><\/div><div[^>]*>([^<]+)<\/div>/gs;

let match;
while ((match = regex.exec(html)) !== null) {
  results.push({
    name: match[2].trim(),
    followers: match[3].trim(),
    image: match[1].trim()
  });
}

console.log(JSON.stringify(results, null, 2));
