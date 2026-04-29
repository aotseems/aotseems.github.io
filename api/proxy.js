export default async function handler(req, res) {
  // 1. Set CORS headers so your GitHub Page can access this
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'https://github.com/aotseems/aotseems.github.io'); // Or your specific GitHub URL
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle the pre-flight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 2. Use your secret key safely on the server
  const apiKey = process.env.MY_API_KEY; 

  // 3. Example: Fetching from a real API
  try {
    const apiRes = await fetch(`https://external.com{apiKey}`);
    const data = await apiRes.json();
    
    // 4. Send the result back to your GitHub Page
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
