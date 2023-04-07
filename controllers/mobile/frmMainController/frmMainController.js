define({ 

  newsletters: [], 

  onViewCreated(){
    mainController.onViewCreated.call(this);
  },

  reloadData(){
    this.view.flxNewsletters.removeAll();
    this.newsletters.forEach((newsletter, index) => {
      const teaser = new com.hcl.demo.ferrari.SmallTeaser({
        id: `teaser${index}${new Date().valueOf()}`,
        bottom: '5dp'
      }, {}, {});
      teaser.newsletterId = newsletter.number;
      teaser.newsletterImage = newsletter.image;
      teaser.newsletterDate = newsletter.date;
      teaser.newsletterText = newsletter.text;
      teaser.newsletterNumber = `Nr. ${newsletter.number}`;
      teaser.onClickTeaser = () => new voltmx.mvc.Navigation('frmNewsletter').navigate(newsletter.number);
      this.view.flxNewsletters.add(teaser);
    });
    this.view.flxNewsletters.forceLayout();
  }

});