define({ 

  newsletters: [], 

  onViewCreated(){
    mainController.onViewCreated.call(this);
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