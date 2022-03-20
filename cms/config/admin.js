module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '07aaac6b483fef28fdfdd8c33f47c4df'),
  },
});
