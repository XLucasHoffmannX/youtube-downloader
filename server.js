const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());


app.listen(3030, ()=>{console.log('Server on in port 3030')})

app.get('/dowload', (req, res)=>{
    let URL = req.query.URL;
    let nameArchive = "dwlYtd";
    res.header('Content-Disposition', `attachment; filename="${nameArchive}.mp4"`);
    ytdl(URL, { format: 'mp4', quality: '137'}).pipe(res);
})
