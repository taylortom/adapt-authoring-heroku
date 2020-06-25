const { AbstractModule } = require('adapt-authoring-core');
/**
* Abstract module for creating APIs
* @extends {AbstractModule}
*/
class HerokuModule extends AbstractModule {
  /** @override */
  constructor(app, pkg) {
    super(app, pkg);
    this.parsePort();
    this.parseMongoURI();
    this.setReady();
  }
  parsePort() {
    const port = process.env.PORT;
    if(port) app.config.set('adapt-authoring-server.port', port);
  }
  parseMongoURI() {
    const uri = process.env.MONGODB_URI;
    if(!uri) {
      return;
    }
    const [userDetails,rest] = uri.slice(10).split('@');
    const [username,password] = userDetails.split(':');
    const [hostDetails,dbname] = rest.split('/');
    const [host,port] = hostDetails.split(':');
    app.config.set('adapt-authoring-mongodb.username', username);
    app.config.set('adapt-authoring-mongodb.password', password);
    app.config.set('adapt-authoring-mongodb.host', host);
    app.config.set('adapt-authoring-mongodb.port', port);
    app.config.set('adapt-authoring-mongodb.dbname', dbname);
  }
}

module.exports = HerokuModule;
