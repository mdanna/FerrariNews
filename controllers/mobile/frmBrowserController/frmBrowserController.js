define({ 
  ANDROID_URL_PREFIX: "http://docs.google.com/gview?embedded=true&url=", 
  onViewCreated(){
    this.view.init = () => {
      this.view.headerBrowser.onClickLeft = () => {
        new voltmx.mvc.Navigation('frmNewsletter').navigate();
      };
    };

    this.view.preShow = () => this.view.flxBrowser.removeAll();

    this.view.postShow = () => {
      let url = this.navigationContext;
      if(url){
        if(voltmx.os.deviceInfo().name === 'iPhone'){
          voltmx.application.showLoadingScreen('sknLblRegularBlack100', 'Loading...', constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
        }
        url = kony.os.deviceInfo().name === 'android' && url.includes('.pdf') ? this.ANDROID_URL_PREFIX + url.replace(/&/g, '%26') : url;
        const browser = new voltmx.ui.Browser({
          id: `browser${new Date().valueOf()}`,
          width: '100%',
          height: '100%',
          onPageFinished() {
            voltmx.os.deviceInfo().name === 'iPhone' && (voltmx.application.dismissLoadingScreen());
          },
          requestURLConfig: {
            URL: url,
            requestMethod: constants.BROWSER_REQUEST_METHOD_GET
          },
        }, {}, {});

        this.view.flxBrowser.add(browser);

        if(voltmx.os.deviceInfo().name === voltmx.sdk.constants.PLATFORM_THIN_CLIENT || 
           voltmx.os.deviceInfo().name === voltmx.sdk.constants.PLATFORM_SPA){
          voltmx.timer.schedule('urlTimer', () => {
            new voltmx.mvc.Navigation('frmNewsletter').navigate();
          }, 1, false);
        }

      }
    };
  }
});