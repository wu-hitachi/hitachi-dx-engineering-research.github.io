
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
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/assets/pdf/en-us/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2018/distill/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "",
        handler: () => {
          
            window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/books/English/the_godfather/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/books/%E6%97%A5%E6%9C%AC%E8%AA%9E/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "",},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "",handler: () => {
              window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/news/English/announcement_2/";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "",handler: () => {
              window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/news/%E6%97%A5%E6%9C%AC%E8%AA%9E/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "",},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "",},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "",handler: () => {
              window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "",handler: () => {
              window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "",handler: () => {
              window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/projects/9_project/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "",handler: () => {
              window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/projects/%E6%97%A5%E6%9C%AC%E8%AA%9E/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "",handler: () => {
              window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/projects/%E6%97%A5%E6%9C%AC%E8%AA%9E/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "",handler: () => {
              window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/projects/%E6%97%A5%E6%9C%AC%E8%AA%9E/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "",handler: () => {
              window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/projects/%E6%97%A5%E6%9C%AC%E8%AA%9E/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "",handler: () => {
              window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/projects/%E6%97%A5%E6%9C%AC%E8%AA%9E/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "",handler: () => {
              window.location.href = "/hitachi-dx-engineering-research.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E/projects/%E6%97%A5%E6%9C%AC%E8%AA%9E/6_project/";
            },},{
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
          window.open("https://inspirehep.net/authors/1010907", "_blank");
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
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
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
