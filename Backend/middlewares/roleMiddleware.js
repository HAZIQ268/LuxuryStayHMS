module.exports = function (allowedRoles = []) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized - No user found" });
    }

    if (!Array.isArray(allowedRoles)) {
      allowedRoles = [allowedRoles];
    }

    if (allowedRoles.length === 0) {
      return next();
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden - Insufficient role access" });
    }

    next();
  };
};
