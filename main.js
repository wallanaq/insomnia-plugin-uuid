// For help writing plugins, visit the documentation to get started:
//   https://support.insomnia.rest/article/173-plugins

const { v4: uuidv4 } = require('uuid');

module.exports.templateTags = [{
  name: 'uuid',
  displayName: 'UUID',
  description: 'generate UUID',

  async run() {
    return uuidv4();
  }

}]