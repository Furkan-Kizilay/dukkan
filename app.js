const express = require('express')
const path = require('path')
const port = 3001;
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/anasayfa' , (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/hakkimizda' , (req,res) => {
   res.sendFile(path.join(__dirname , 'info.html'));
});

app.get('/urunler' , (req,res) => {
    res.sendFile(path.join(__dirname, 'products.html'));
});

app.get('/iletisim' , (req,res) => {
   res.sendFile(path.join(__dirname,'contact.html'));
});

app.listen(port, () =>{
    console.log(`Sunucu ${port} numaralı portta çalıştı! http://localhost:${port}/`);
});
