
const currentUrl = window.location.href;
const siteUrl = ""; 
let updatedUrl = currentUrl.replace("", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-概要",
    title: "概要",
    section: "",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-研究業績",
          title: "研究業績",
          description: "",
          section: "",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-技術",
          title: "技術",
          description: "",
          section: "",
          handler: () => {
            window.location.href = "/tech/";
          },
        },{id: "nav-募集要項",
          title: "募集要項",
          description: "",
          section: "",
          handler: () => {
            window.location.href = "/recruitment/";
          },
        },{
        id: 'social-email',
        title: '',
        section: '',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: '',
        handler: () => {
          window.open("https://inspirehep.net/authors/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: '',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: '',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: '',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
          id: 'lang-English',
          title: 'English',
          section: '',
          handler: () => {
            window.location.href = "/English" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("system");
      },
    },];
