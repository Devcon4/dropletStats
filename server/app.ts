import * as procfs from 'procfs-stats';
import * as express from 'express';

let ps = procfs(9850);

let app = express();

app.get('/api/io', (req, res) => {
    ps.status(r => {
        res.send(r);
    });
});

app.get('/api/stat', (req, res) => {
    ps.status(r => {
        res.send(r);
    });
});

app.get('/api/statm', (req, res) => {
    ps.status(r => {
        res.send(r);
    });
});

app.get('/api/status', (req, res) => {
    ps.status(r => {
        res.send(r);
    });
});

app.get('/api/cpu', (req, res) => {
    ps.status(r => {
        res.send(r);
    });
});

app.get('/api/meminfo', (req, res) => {
    ps.status(r => {
        res.send(r);
    });
});

app.use(express.static(__dirname + '/public'));

app.listen(80);