define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if(!this.initDone){
          this.view.rtTitle.doLayout = () => {
            this.view.flxText.height = `${390 - this.view.rtTitle.frame.height}dp`;
          };
          this.initDone = true;
        }
      };
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'url', () => {
        return this._url;
      });
      defineSetter(this, 'url', value => {
        this._url = value;
      });
    }
  };
});