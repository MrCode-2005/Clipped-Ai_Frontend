const fs = require('fs');
const html = fs.readFileSync('public/opus_pro_live.html', 'utf8');

const targetNames = [
  "Logan Paul",
  "Jenny Hoyos",
  "Linguamarina",
  "Dhar Mann Studios",
  "TwoSetViolin",
  "Jon Youshaei",
  "Armchair Historian",
  "SaaStr",
  "Sebastien Jefferies"
];

const results = [];

targetNames.forEach(name => {
  const safeName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`<img[^>]*src="([^"]+)"[^>]*class="a_visual is-circle"(?:[^>]*>|.*?)<svg([^>]*)>(.*?)<\\/svg>.*?<strong>\\s*${safeName}\\s*<\\/strong><\\/div><div[^>]*>([^<]+)<\\/div>`, 's');
  
  const match = regex.exec(html);
  if (match) {
    results.push({
      name: name,
      image: match[1],
      followers: match[4].trim(),
      svgProps: match[2].trim(),
      svgInner: match[3].trim()
    });
  } else {
    // If not found with complex regex, just attempt simple regex for Dhar Mann
    const regex2 = new RegExp(`<strong>\\s*${safeName}\\s*<\\/strong><\\/div><div[^>]*>([^<]+)<\\/div>`, 's');
    const match2 = regex2.exec(html);
    if(match2) {
      // Find the IMAGE right before it
      const substr = html.substring(0, match2.index);
      const imgMatch = substr.match(/<img[^>]*src="([^"]+)"[^>]*class="a_visual is-circle"[^>]*>.*?(<svg(?:[^>]*)>.*?<\/svg>)[^<]*$/s);
      
      results.push({
        name: name,
        image: imgMatch ? imgMatch[1] : 'NOT_FOUND',
        followers: match2[1].trim(),
        svg: imgMatch ? imgMatch[2] : 'NOT_FOUND'
      });
    }
  }
});

fs.writeFileSync('creators.json', JSON.stringify(results, null, 2));
console.log("Written to creators.json");
