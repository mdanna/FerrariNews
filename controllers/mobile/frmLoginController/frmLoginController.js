define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.flxLoginButton.onClick = () => {
          VMXFoundry.getIntegrationService('FerrariNewsletter').invokeOperation('getNewsletter', {}, {}, (response) => {
            data.newslettercatalogue = response.newslettercatalogue;
            new voltmx.mvc.Navigation('frmMain'). navigate();
          }, (error) => alert('Error retrieving newsletter data'));
          
        };
      };
    }

});