const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const USERNAME = process.env.FTP_USERNAME || 'set.in.env.var';
const PASSWORD = process.env.FTP_PASSWORD;

const config = {
  user: USERNAME,
  password: PASSWORD,
  host: 'ftp.zeddic.com',
  port: 21,
  localRoot: __dirname + '/public',
  remoteRoot: '/public_html/gatsby/',
  include: ['*', '**/*', '.*'],
  exclude: [
    'dist/**/*.map',
    'node_modules/**',
    'node_modules/**/.*',
    '.git/**',
  ],
  deleteRemote: true,
};

ftpDeploy
  .deploy(config)
  .then(res => console.log('finished:', res))
  .catch(err => console.log(err));
