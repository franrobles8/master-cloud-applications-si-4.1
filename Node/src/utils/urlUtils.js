const url = require('url');

const fullUrl = (req) => {
  const fullUrlStr = url.format({
    protocol: req.protocol,
    host: req.get("host"),
    pathname: req.originalUrl,
  });

  return fullUrlStr + (fullUrlStr.endsWith("/") ? "" : "/");
};

module.exports = {
    fullUrl
};