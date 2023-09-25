export const constBase = {
  parts : {
    header : 'header',
    sideMain : 'side-main',
    footer : 'footer',
    sideLeft: 'side-left',
    sideRight: 'side-right',
  },
  partsHTML : {
    footer : 'footer.html',
    header : 'header.html',
    indexMain : 'indexMain.html',
    contactMain : 'contact-main.html',
    aboutMain : 'aboutMain.html',
    contactIDMain:'contact-id-main.html',
    contactIDEditMain:'contact-id-edit-main.html',
    sideLeft:'side-left.html',
    sideRight:'side-right.html',
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
