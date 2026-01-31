
const requests = {};
const rateLimiter = (req,rex,next) => {
    const ip = req.ip;
    const now = Date.now();

    requests[ip] = requests[ip]  || {};
    requests[ip] = requests[ip].filter(t=>now-t < 60000);
    if(requests[ip].length >= 3){
        return req.status(429).json({message : "Too many requests"});

    }
    requests[ip].push(now);
    next();
};

export default rateLimiter;