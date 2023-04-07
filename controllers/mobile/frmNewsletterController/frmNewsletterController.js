define({ 
  teaserId: null,

  onViewCreated(){
    this.view.init = () => {
      this.view.headerNewsletter.onClickLeft = () => new voltmx.mvc.Navigation('frmMain').navigate();
    };
    
    this.view.postShow = ()  => this.view.headerNewsletter.title = `${data.getTeaser(this.navigationContext || this.teaserId).text}`;
  },

  onNavigate(teaserId){
    newsletterController.onNavigate.call(this, teaserId);
  }

});