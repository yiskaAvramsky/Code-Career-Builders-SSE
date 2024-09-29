const express = require('express');
const app = express();
const PORT = 3000;

// מאפשר גישה לקבצים סטטיים (כמו index.html)
app.use(express.static('public'));

// יצירת ה-Route ל-SSE
app.get('/time', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    
    // שליחת השעה הנוכחית בכל שנייה
    setInterval(() => {
        const now = new Date().toLocaleTimeString();
        res.write(`data: ${now}\n\n`);
    }, 1000);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
