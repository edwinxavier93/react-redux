const environment = {
  development: {
    isProduction: false,
    assetsPath: `http://${process.env.HOST || 'localhost'}:${+process.env.PORT + 1 || 3001}/dist/`
  },
  production: {
    isProduction: true,
    assetsPath: '/dist/'
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(
  {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT,
    apiHost: 'localhost',
    apiPort: '8090',
    app: {
      title: 'React Redux Example',
      description: 'All the modern best practices in one example.',
      head: {
        titleTemplate: 'CANTWAITTOTRADE | %s',
        meta: [
          { name: 'description', content: '' },
          { charset: 'utf-8' },
          { property: 'og:site_name', content: 'CANTWAITTOTRADE' },
          { property: 'og:title', content: 'CANTWAITTOTRADE' }
        ]
      }
    }
  },
  environment
);
