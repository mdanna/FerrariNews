define({ 
  ANDROID_URL_PREFIX: "http://docs.google.com/gview?embedded=true&url=", 

  onViewCreated(){
    this.view.init = () => {
     this.view.headerBrowser.onClickLeft = () => new voltmx.mvc.Navigation('frmNewsletter').navigate();
    };
  },

  onNavigate(url){
    this.view.browser.htmlString = "";
    if(url){
      url = kony.os.deviceInfo().name === 'android' && url.includes('.pdf') ? this.ANDROID_URL_PREFIX + url.replace(/&/g, '%26') : url;
      this.view.browser.requestURLConfig = {
        URL: url,
        requestMethod: constants.BROWSER_REQUEST_METHOD_GET
      };
      voltmx.timer.schedule('urlTimer', () => {
        new voltmx.mvc.Navigation('frmNewsletter').navigate();
      }, 1, false);
    }
  }

});