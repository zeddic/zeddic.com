const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const USERNAME = process.env.FTP_USERNAME || 'set.in.env.var';
const PASSWORD = process.env.FTP_PASSWORD;

const COMMON_CONFIG = {
  user: USERNAME,
  password: PASSWORD,
  host: 'ftp.zeddic.com',
  port: 21,
};

/**
 * Uploads the gatsby site to a /gatsby/ subfolder.
 */
function uploadGatsbyFiles() {
  const config = {
    ...COMMON_CONFIG,
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
  return runFtp(config);
}

/**
 * Uploads special files to upload into the root
 * public_html folder. At the moment, this is just an
 * .htaccess file routing unresolved urls to the gatsby
 * subfolder
 */
function uploadRootFiles() {
  const config = {
    ...COMMON_CONFIG,
    localRoot: __dirname,
    remoteRoot: '/public_html',
    include: ['.htaccess'],
    exclude: ['*/.htaccess'],
  };
  return runFtp(config);
}

function runFtp(config) {
  return ftpDeploy
    .deploy(config)
    .then(res => console.log('finished:', res))
    .catch(err => console.log(err));
}

uploadRootFiles().then(() => {
  uploadGatsbyFiles();
});
