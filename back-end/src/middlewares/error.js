module.exports = (error, req, res, next) => {
  if (error.status === 404) {
    return res.status(error.status).json({ message: error.message });
  }
  return res.status(500).json({ message: 'Internal server error' });
};
