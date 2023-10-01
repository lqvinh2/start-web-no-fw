export const constBase = {
  parts : { // id of tag  like : <div id="back-drop"></div>
    header : 'header',
    sideMain : 'side-main',
    footer : 'footer',
    sideLeft: 'side-left',
    sideRight: 'side-right',
    backDrop : 'back-drop',
    allCateHeader: 'all-cate-header',
    allCateSideLeft: 'all-cate-side-left'
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
    backDrop : 'back-drop.html',
    allCate: 'all-cate.html',
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
  },
  element : {
    swiper : 'swiper-element',
  }
}
