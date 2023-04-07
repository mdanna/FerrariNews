const newsletterController = {
  onNavigate(teaserId){
    if(teaserId){
      this.teaserId = teaserId;
      const newsletter = data.getNewsletter(teaserId);
      const automotiveData = newsletter.automotive || [];
      const crossData = newsletter.cross || [];
      const startupData = newsletter.startup || [];
      const numbersData = newsletter.numbers || [];
      const digitalPillsData = newsletter.digitalpills || [];

      this.view.flxScrollerHorizontalAutomotive.removeAll();
      this.view.flxContainerAutomotive.isVisible = automotiveData.length > 0;
      automotiveData.forEach((teaserData, index) => {
        const teaser = new com.hcl.demo.ferrari.BigTeaser({
          id: `automotive${index}${new Date().valueOf()}`,
          right: index === automotiveData.length - 1 ? `20dp` : '0'
        }, {}, {});
        teaser.image = teaserData.image;
        teaser.title = 'AUTOMOTIVE';
        teaser.text = teaserData.text;
        teaser.url = teaserData.url;
        teaser.onClickTeaser = () => new voltmx.mvc.Navigation('frmBrowser').navigate(teaserData.url);
        this.view.flxScrollerHorizontalAutomotive.add(teaser);
      });
      this.view.flxScrollerHorizontalAutomotive.forceLayout();

      this.view.flxContainerCross.isVisible = crossData.length > 0;
      this.view.flxScrollerHorizontalCross.removeAll();
      crossData.forEach((teaserData, index) => {
        const teaser = new com.hcl.demo.ferrari.BigTeaser({
          id: `cross${index}${new Date().valueOf()}`,
          right: index === crossData.length - 1 ? `20dp` : '0'
        }, {}, {});
        teaser.image = teaserData.image;
        teaser.title = 'CROSS';
        teaser.text = teaserData.text;
        teaser.url = teaserData.url;
        teaser.onClickTeaser = () => new voltmx.mvc.Navigation('frmBrowser').navigate(teaserData.url);
        this.view.flxScrollerHorizontalCross.add(teaser);
      });
      this.view.flxScrollerHorizontalCross.forceLayout();

      this.view.flxContainerStartup.isVisible = startupData.length > 0;
      this.view.flxScrollerHorizontalStartup.removeAll();
      startupData.forEach((teaserData, index) => {
        const teaser = new com.hcl.demo.ferrari.BigTeaser({
          id: `startup${index}${new Date().valueOf()}`,
          right: index === startupData.length - 1 ? `20dp` : '0'
        }, {}, {});
        teaser.image = teaserData.image;
        teaser.title = 'STARTUP';
        teaser.text = teaserData.text;
        teaser.url = teaserData.url;
        teaser.onClickTeaser = () => new voltmx.mvc.Navigation('frmBrowser').navigate(teaserData.url);
        this.view.flxScrollerHorizontalStartup.add(teaser);
      });
      this.view.flxScrollerHorizontalStartup.forceLayout();

      this.view.flxContainerNumbers.isVisible = numbersData.length > 0;
      this.view.flxScrollerHorizontalNumbers.removeAll();
      numbersData.forEach((teaserData, index) => {
        const teaser = new com.hcl.demo.ferrari.NumbersTeaser({
          id: `numbers${index}${new Date().valueOf()}`,
          right: index === numbersData.length - 1 ? `20dp` : '0'
        }, {}, {});
        teaser.title = teaserData.title;
        teaser.text = teaserData.text;
        if(teaserData.url){
          teaser.showButton = true;
          teaser.url = teaserData.url;
          teaser.textBottom = '70dp';
          teaser.onClickButton = () => new voltmx.mvc.Navigation('frmBrowser').navigate(teaserData.url);
        } else {
          teaser.textBottom = '0dp';
          teaser.showButton = false;
        }
        this.view.flxScrollerHorizontalNumbers.add(teaser);
      });
      this.view.flxScrollerHorizontalNumbers.forceLayout();
      
      this.view.flxContainerDigitalPills.isVisible = digitalPillsData.length > 0 && !!digitalPillsData[0].title;
      this.view.flxScrollerHorizontalDigitalPills.removeAll();
      digitalPillsData.forEach((teaserData, index) => {
        const teaser = new com.hcl.demo.ferrari.DigitalPillsTeaser({
          id: `digitalPills${index}${new Date().valueOf()}`,
          right: index === digitalPillsData.length - 1? `20dp` : '0'
        }, {}, {});
        teaser.title = teaserData.title;
        teaser.text = teaserData.text;
        this.view.flxScrollerHorizontalDigitalPills.add(teaser);
      });
      this.view.flxScrollerHorizontalDigitalPills.forceLayout();
    }
  }
};