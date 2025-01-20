// pages/api/data.js  
export default async function handler(req, res) {  
    const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev');  
    const data = await response.json();  
    res.status(200).json(data);  
}