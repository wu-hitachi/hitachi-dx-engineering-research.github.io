
const currentUrl = window.location.href;
const siteUrl = ""; 
let updatedUrl = currentUrl.replace("/hitachi-dx-engineering-research.github.io/", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "/hitachi-dx-engineering-research.github.io/", "");
}
if ("日本語".length > 0) {
  updatedUrl = updatedUrl.replace("/日本語", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-概要",
    title: "概要",
    section: "",
    handler: () => {
      window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/";
    },
  },{id: "nav-研究業績",
          title: "研究業績",
          description: "",
          section: "",
          handler: () => {
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/publications/";
          },
        },{id: "nav-技術",
          title: "技術",
          description: "",
          section: "",
          handler: () => {
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/tech/";
          },
        },{id: "nav-募集要項",
          title: "募集要項",
          description: "",
          section: "",
          handler: () => {
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/recruitment/";
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
          window.open("/hitachi-dx-engineering-research.github.io//feed.xml", "_blank");
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
            window.location.href = "/hitachi-dx-engineering-research.github.io/" + updatedUrl;
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
