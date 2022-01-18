const https = require('https');

module.exports = (req, res) => {
    https.get(process.env.VIDEO_PATH, (stream) => {
        stream.pipe(res);
    });
};
