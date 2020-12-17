module.exports = {
  servers: {
    one: {
      host: 'kokua-hawaii.xyz',
      username: 'root',
      password: 'NaMenehune1998AC'
    }
  },

  app: {
    name: 'Kokua-Hawaii',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      ROOT_URL: 'https://kokua-hawaii.xyz',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      image: 'abernix/meteord:node-12-base',
    },

    enableUploadProgressBar: true
  },

  proxy: {
    domains: 'kokua-hawaii.xyz',
    ssl: {
      letsEncryptEmail: 'chonga3@hawaii.edu',
      forceSSL: true
    }
  },


  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },
};