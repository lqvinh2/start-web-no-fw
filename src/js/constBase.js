export const constBase = {
  parts : {
    header : 'header',
    main : 'main',
    footer : 'footer',
  },
  partsHTML : {
    footer : 'footer.html',
    header : 'header.html',
    indexMain : 'indexMain.html',
    contactMain : 'contact-main.html',
    aboutMain : 'aboutMain.html',
    contactIDMain:'contact-id-main.html',
    contactIDEditMain:'contact-id-edit-main.html',
  },
  state : {
    countVisit : {
      index: 'index',
      about: 'about',
      contact: 'contact',
      contactId: 'contact-id',
      contactIdEdit: 'contact-id-edit',
    }
  },

  storage : {
    key: {
      currentUrl: 'current-url',
      beforeUrl: 'before-url',
      contactID: 'contact-id',
    },
  }
}
