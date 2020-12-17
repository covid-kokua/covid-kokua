module.exports = {
  servers: {
    one: {
      host: '104.236.11.85',
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
      ROOT_URL: 'http://104.236.11.85',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      image: 'abernix/meteord:node-12-base',
    },

    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },
};