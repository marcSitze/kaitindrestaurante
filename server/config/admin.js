module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '638cfdfed1e4e086575e590cf16f01ae'),
  },
});
