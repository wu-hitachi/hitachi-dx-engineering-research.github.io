
const currentUrl = window.location.href;
const siteUrl = ""; 
let updatedUrl = currentUrl.replace("", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("en-us".length > 0) {
  updatedUrl = updatedUrl.replace("/en-us", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/en-us/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en-us/publications/";
          },
        },{id: "nav-tech",
          title: "Tech",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en-us/tech/";
          },
        },{id: "nav-recruitment",
          title: "Recruitment",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en-us/recruitment/";
          },
        },{id: "dropdown-hitachi-ltd",
              title: "Hitachi, Ltd.",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "en-ushttps://www.hitachi.com/en/";
              },
            },{id: "dropdown-research-amp-development-group",
              title: "Research &amp; Development Group",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "en-ushttps://www.hitachi.com/rd/index.html";
              },
            },{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
          id: 'lang-ja-jp',
          title: 'ja-jp',
          section: 'Languages',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
