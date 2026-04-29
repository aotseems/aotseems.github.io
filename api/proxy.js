export default async function handler(req, res) {
  const secretKey = process.env.AI_APIKEY; // Accesses your secret securely
  
  const response = await fetch(`https://external.com{secretKey}`);
  const data = await response.json();

  res.status(200).json(data); // Send only the data back to the client
}
