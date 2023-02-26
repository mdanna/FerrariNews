define({ 

  newsletters: [], 

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

  reloadData(){
    this.view.flxNewsletters.removeAll();
    this.newsletters.forEach((newsletter, index) => {
      const flex = new voltmx.ui.FlexContainer({
        id: `flex${index}${new Date().valueOf()}`,
        height: `130dp`,
        responsiveConfig: {
          "span": {
            "640": 12,
            "1024": 6,
            "1366": 4
          }
        },
      }, {}, {});
      const teaser = new com.hcl.demo.ferrari.SmallTeaser({
        id: `teaser${index}${new Date().valueOf()}`,
        width: '95%',
        height: '120dp',
        centerX: '50%',
        centerY: '50%'
      }, {}, {});
      teaser.newsletterId = newsletter.number;
      teaser.newsletterImage = newsletter.image;
      teaser.newsletterDate = newsletter.date;
      teaser.newsletterText = newsletter.text;
      teaser.newsletterNumber = `Nr. ${newsletter.number}`;
      teaser.onClickTeaser = () => new voltmx.mvc.Navigation('frmNewsletter').navigate(newsletter.number);
      flex.add(teaser);
      this.view.flxNewsletters.add(flex);
    });
    this.view.flxNewsletters.forceLayout();
  }

});