const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
  // const token = req.headers['x-access-token'];
  const token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

  jwt.verify(token, 'sempreIT', function (err, decoded) {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyJWT;