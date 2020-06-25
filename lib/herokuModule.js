const { AbstractModule } = require('adapt-authoring-core');
/**
* Abstract module for creating APIs
* @extends {AbstractModule}
*/
class HerokuModule extends AbstractModule {
  /** @override */
  constructor(app, pkg) {
    super(app, pkg);
    this.setReady();
  }
}

module.exports = HerokuModule;
