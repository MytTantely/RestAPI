module.exports = {
    apps: [{
      name: 'BearAPI',
      script: './server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-218-114-77.us-east-2.compute.amazonaws.com',
        key: '~/tutorial.pem',
        ref: 'origin/master',
        repo: 'https://github.com/MytTantely/RestAPI.git',
        path: '/home/ubuntu/nodeSrc/RestAPI',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }