import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        res.status(429).json({
          success: false,
          message: "Too many requests",
        });
      }
      if (decision.reason.isBot()) {
        res.status(403).json({
          success: false,
          message: "Bot detected",
        });
      }
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }
    next();
  } catch (error) {
    console.log("Error in arcjet middleware", error);
    next(error);
  }
};

export default arcjetMiddleware;
