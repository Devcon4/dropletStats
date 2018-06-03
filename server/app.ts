import * as procfs from 'procfs-stats';
import * as express from 'express';

let ps = procfs(9850);

let app = express();

let logging = (req) => {
    console.log(`request: {req.path}`);    
}

let error = (err) => {
    if(err) {
        console.error(err);
    }
}

app.get('/api/io', (req, res) => {
    logging(req);
    ps.io((err, r) => {
        error(err);
        res.send(r);
    });
});

app.get('/api/stat', (req, res) => {
    logging(req);
    ps.stat((err, r) => {
        error(err);
        res.send(r);
    });
});

app.get('/api/statm', (req, res) => {
    logging(req);
    ps.statm((err, r) => {
        error(err);
        res.send(r);
    });
});

app.get('/api/status', (req, res) => {
    logging(req);
    ps.status((err, r) => {
        error(err);
        res.send(r);
    });
});

app.get('/api/cpu', (req, res) => {
    logging(req);
    ps.cpu((err, r) => {
        error(err);
        res.send(r);
    });
});

app.get('/api/meminfo', (req, res) => {
    logging(req);
    ps.meminfo((err, r) => {
        error(err);
        res.send(r);
    });
});

app.use(express.static(__dirname + '/public'));

console.log('Express starting!');

app.listen(80);