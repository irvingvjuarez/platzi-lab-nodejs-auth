import verifyToken from "../utils/verifyToken";

function isAuth() {
  return async (req, res, next) => {
    const auth = req.headers.authorization.replace('Bearer ', '');

    try {
      const decoded = await verifyToken(auth);
      next();
    } catch (err) {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
}

export default isAuth;