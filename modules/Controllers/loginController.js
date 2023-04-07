const loginController = {
  onViewCreated(){
    this.view.init = () => {
      this.view.flxLoginButton.onClick = () => {
        voltmx.application.showLoadingScreen(null, '', constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        VMXFoundry.getIdentityService('FerrariIdentityService').login({
          userid: this.view.txtEmail.text,
          password: this.view.txtPassword.text
        }, () => {
          VMXFoundry.getIntegrationService('FerrariNewsletter').invokeOperation('getNewsletter', {}, {}, (response) => {
            voltmx.application.dismissLoadingScreen();
            data.newslettercatalogue = response.newslettercatalogue;
            new voltmx.mvc.Navigation('frmMain'). navigate();
          }, (error) => {
            voltmx.application.dismissLoadingScreen();
            alert('Error retrieving newsletter data');
          });
        }, (error) => {
          voltmx.application.dismissLoadingScreen();
          alert(error.message);
        });
      };
    };
  }
};