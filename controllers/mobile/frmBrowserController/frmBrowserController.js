define({ 
  ANDROID_URL_PREFIX: "http://docs.google.com/gview?embedded=true&url=", 

  onViewCreated(){
    this.view.init = () => {
      this.view.headerBrowser.onClickLeft = () => new voltmx.mvc.Navigation('frmNewsletter').navigate();
      this.view.browser.onPageFinished = () => {
        voltmx.application.dismissLoadingScreen();
        this.view.browser.isVisible = true;
      };
    };
  },

  onNavigate(url){
    this.view.browser.htmlString = "";
    this.view.browser.isVisible = false;
    if(url){
      url = kony.os.deviceInfo().name === 'android' && url.includes('.pdf') ? this.ANDROID_URL_PREFIX + url.replace(/&/g, '%26') : url;
      this.view.browser.requestURLConfig = {
        URL: url,
        requestMethod: constants.BROWSER_REQUEST_METHOD_GET
      };
      if(voltmx.os.deviceInfo().name === voltmx.sdk.constants.PLATFORM_THIN_CLIENT || 
         voltmx.os.deviceInfo().name === voltmx.sdk.constants.PLATFORM_SPA){
        voltmx.timer.schedule('urlTimer', () => {
          new voltmx.mvc.Navigation('frmNewsletter').navigate();
        }, 1, false);
      } else {
        voltmx.application.showLoadingScreen(null, 'Loading...', constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
      }
    }
  }

});