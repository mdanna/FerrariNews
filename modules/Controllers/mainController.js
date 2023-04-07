const mainController = {
  onViewCreated(){
    this.view.init = () => {
      this.view.headerMain.onClickLeft = () => this.view.hamburgerMenu.toggle(true);

      this.view.headerMain.onClickRight = () => {
        this.view.flxSearchWrapper.isVisible = true;
        this.view.flxNewsletters.top = '70dp';
        this.view.flxContent.forceLayout();
      };

      this.view.lblIconClose.onTouchEnd = () => {
        this.view.flxSearchWrapper.isVisible = false;
        this.view.flxNewsletters.top = '20dp';
        this.view.flxContent.forceLayout();
        this.view.txtSearch.text = '';
        this.newsletters = [...data.getTeasers()];
        this.reloadData();
      };

      this.view.txtSearch.onTextChange = () => {
        const searchText  = this.view.txtSearch.text;
        if(searchText){
          this.newsletters = this.newsletters.filter((teaser) => teaser.text.includes(searchText));
        } else {
          this.newsletters = [...data.getTeasers()];
        }
        this.reloadData();
      };

      this.view.hamburgerMenu.onItemSelected = (item) => {
        item === 'logout' && (new voltmx.mvc.Navigation('frmLogin').navigate());
      };

      this.newsletters = [...data.getTeasers()];
    };

    this.view.preShow = () => this.reloadData();
  },
  
};