(this["webpackJsonpswaroop-gupta-voleti"]=this["webpackJsonpswaroop-gupta-voleti"]||[]).push([[3],{28:function(e,a,t){},29:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAB3CAMAAADb2TmwAAAA1VBMVEUAAAAhhsYhhsYhhsb1ggD1ggD1ggAhhsb1ggAhhsb1ggAhhsYhhsb1ggD1ggAhhsYhhsYhhsb1ggD1ggD1ggD1ggAhhsb1ggAhhsb1ggAhhsYhhsb1ggAhhsb1ggD1ggD1ggD1ggAhhsYhhsYhhsb1ggD1ggAhhsb1ggAhhsYhhsb1ggD1ggD1ggD1ggD1ggAhhsb1ggAhhsYhhsb1ggAhhsb1ggD1ggD1ggD1ggD1ggD1ggAhhsb1ggAhhsYhhsYhhsb1ggAhhsb1ggAhhsb1ggAhhsZ2jAd/AAAARXRSTlMABa/UWkf1taz0gn8HBQLyPTRuUsQcDDnblLeRbHYfl74qS+6kBtzXxV4fD3xfBCERh4V+Tirowbino2tpCJiTPvjJOhcJeJO+AAACXUlEQVR42u3Zb1PaMBzA8V+YHXYrFWF2EwWErritthQRRHHO/aHv/yUNrtXe0gupa5JG/H0f8CDX3n0uSa+5AjAIgmBPWMEAShberoTWh5J5+5qBGghC0O5u6p9vyyQMFN6skkZXRpnmwpfsGko1Kg6yGUPUkn2QCOKHoOJ5uoHCG7GgiS5LNh4k+bClQZuXTy2Z5PorXgY0VILecUEfpYOIbiAgCEKQNk/ZsCasiANq9zOQxwRNY2F9o0FAFWQgm/ku68oDfQGqU96SOUQq6AqoWvw99LpALd1ApzsGqtc2Jb9Zn9OykfQiqvUF95FQkOmQdZZFCmTlBjb3AYgFESiZaJCFIAQhCEEyQaFaEP9t798+fdKzH5MOajNBv+HoEXRGg+5kgPgHNHs/f86lQA6IarJK2mOCxuAxQZfyZshggnrQYILep6ADIhy01A3UKgVyJZyHECQCdK0baH6cZtCbWjmIaqIb6IICmRaClIOWQLWsGNSyqS4qBo0WZ/+0mGcgb0GDJjJBvHpgB8dURrWgdfR/XFWDbN+3gY4AXFYFAvu7XjMEoUagsZYgAFUgv3e0vbFXDKRHCGKWP6DpkbYgF0GMpgqW7OQ8qavJHiKdOOmHJo/9E+gEQQiSD2IcYXf8KYOXvWQIQhCClIEISKv+XyCHlMnZUvSsGZrGaZ36us7mN4s1lBuo/frE7NyNnzdD8kMQgpSCprGiip8Y1XUPBRq+UVcXMH3S5dsJtilq8nt4aDb/gKKGcbHugJNq0FfG/QhCEIK4oAM6MzfguqapDDQ75DebHc4iKN5fGanc0CQwGVsAAAAASUVORK5CYII="},32:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var r=t(1),s=t(2),l=t(4),c=t(3),n=t(0),m=t.n(n),o=(t(28),t(29)),i=t.n(o),p=t(30),d=t.n(p),h=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).state={loadmore:!0,loadmorePP:!0},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){d()(".professional-projects",{animation:{perspectiveDistance:"2000px",easing:"ease-in-out"}})}},{key:"toggleAnimation",value:function(e){e.currentTarget.closest(".projects-wrapper").classList.toggle("animated-view"),this.setState({loadmore:!1,loadmorePP:!1})}},{key:"loadmore",value:function(){this.setState({loadmore:!1})}},{key:"loadmorePP",value:function(){this.setState({loadmorePP:!1})}},{key:"render",value:function(){var e=this,a=this.state,t=a.loadmore,r=a.loadmorePP;return m.a.createElement("section",{className:"projects-wrapper",id:"projects"},m.a.createElement("div",{className:"toggle-view-btns",onClick:function(a){return e.toggleAnimation(a)}},m.a.createElement("span",null,"3D"),m.a.createElement("span",null,"2D")),m.a.createElement("div",{className:"container"},m.a.createElement("h3",null,m.a.createElement("img",{src:i.a,alt:"projects"}),"Projects"),m.a.createElement("div",{className:"projects-completion-container"},m.a.createElement("div",{className:"left-aligned"},m.a.createElement("div",{className:"number-field"},m.a.createElement("span",{className:"free-fall-animation"},"3"),m.a.createElement("span",{className:"free-fall-animation"},"0"),m.a.createElement("span",{className:"free-fall-animation superscript"},"+"))),m.a.createElement("div",{className:"right-aligned"},m.a.createElement("p",{className:"projects-title"},"PROJECTS COMPLETED"),m.a.createElement("span",null,"Over the past Eight and half years, I have completed more than ",m.a.createElement("b",null,"32")," responsive or adapative web apps, each of them is completely from the scratch."))),m.a.createElement("h2",null,"My professional projects"),m.a.createElement("div",{className:"projects-wrapper"},t?null:m.a.createElement("div",{className:"project-type"},m.a.createElement("button",{className:"filter","data-filter":"all"},"All"),m.a.createElement("button",{className:"filter","data-filter":".react"},"ReactJs"),m.a.createElement("button",{className:"filter","data-filter":".javascript"},"JavaScript"),m.a.createElement("button",{className:"filter","data-filter":".cssfw"},"CSS framework"),m.a.createElement("button",{className:"filter","data-filter":".magento"},"Magento"),m.a.createElement("button",{className:"filter","data-filter":".drupal"},"Drupal"),m.a.createElement("button",{className:"filter","data-filter":".wordpress"},"Wordpress")),m.a.createElement("div",{className:"portfolio-list professional-projects ".concat(t?"loadmore":null)},m.a.createElement("div",{style:{"--item-number":"1"},className:"mix project-item drupal javascript react cssfw"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.epocrates.com/"},m.a.createElement("p",{className:"project-name"},"Epocrates"),m.a.createElement("div",{className:"tech-stack"},"ReactJs, Javascript, HTML, Stylus, Material form and Drupal"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2020")),m.a.createElement("div",{style:{"--item-number":"2"},className:"mix project-item drupal javascript react"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://athenahealth.com/knowledge-hub"},m.a.createElement("p",{className:"project-name"},"Insights athenahealth"),m.a.createElement("div",{className:"tech-stack"},"ReactJs, Javascript, HTML, Stylus and Drupal"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"Revamped @2016 - Redesigned @2019")),m.a.createElement("div",{style:{"--item-number":"3"},className:"mix project-item drupal javascript react cssfw"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.athenahealth.com/"},m.a.createElement("p",{className:"project-name"},"Athenahealth"),m.a.createElement("div",{className:"tech-stack"},"ReactJs, Javascript, HTML, Stylus, Material form and Drupal"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"Revamped @2017 - Redesigned @2018")),m.a.createElement("div",{style:{"--item-number":"4"},className:"mix project-item bootstrap javascript cssfw"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.bankbazaar.com/"},m.a.createElement("p",{className:"project-name"},"Bankbazaar"),m.a.createElement("div",{className:"tech-stack"},"Javascript, jQuery, HTML, SCSS and Flat UI"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2016")),m.a.createElement("div",{style:{"--item-number":"5"},className:"mix project-item bootstrap material magento javascript cssfw"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.hihonor.com/global/"},m.a.createElement("p",{className:"project-name"},"Huawei global"),m.a.createElement("div",{className:"tech-stack"},"Javascript, jQuery, HTML, SCSS, CSSLint, Material UI, Angular Ui and Magento"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2015")),m.a.createElement("div",{style:{"--item-number":"6"},className:"mix project-item magento bootstrap cssfw"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.bodyguardz.com/"},m.a.createElement("p",{className:"project-name"},"Bodyguardz"),m.a.createElement("div",{className:"tech-stack"},"jQuery, HTML, CSS, Bootstrap and Magento"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2014")),m.a.createElement("div",{style:{"--item-number":"7"},className:"mix project-item cmsdrupal magento wordpress javascript"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://tennishub.in/"},m.a.createElement("p",{className:"project-name"},"Tennishub"),m.a.createElement("div",{className:"tech-stack"},"Javascript, jQuery, HTML, CSS, Magento, Drupal and Wordpress"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2013")),m.a.createElement("div",{style:{"--item-number":"8"},className:"mix project-item cms magento wordpress"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.olovesm.com"},m.a.createElement("p",{className:"project-name"},"Olovesm"),m.a.createElement("div",{className:"tech-stack"},"jQuery, HTML, CSS, Magento and Wordpress"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2012")),m.a.createElement("div",{style:{"--item-number":"9"},className:"mix project-item cms magento wordpress"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.genesisdiamonds.net/"},m.a.createElement("p",{className:"project-name"},"Genesisdiamonds"),m.a.createElement("div",{className:"tech-stack"},"jQuery, HTML, CSS, Magento and Wordpress"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2012")),m.a.createElement("div",{style:{"--item-number":"10"},className:"mix project-item cms magento"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.weddingrings.net/"},m.a.createElement("p",{className:"project-name"},"Weddingrings"),m.a.createElement("div",{className:"tech-stack"},"jQuery, HTML, CSS and Magento"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2012"))),t?m.a.createElement("button",{className:"load-more-btn",onClick:function(){return e.loadmore()}},"Loadmore"):null,m.a.createElement("h2",{className:"personal-projects-title"},"Personal learning projects"),m.a.createElement("div",{className:"portfolio-list personal-projects  ".concat(r?"loadmore":null)},m.a.createElement("div",{style:{"--item-number":"1"},className:"mix project-item javascript react"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://voletiswaroop.github.io/shuffle-and-sort/"},m.a.createElement("p",{className:"project-name"},"Shuffle & Sort"),m.a.createElement("div",{className:"tech-stack"},"React, Javascript, HTML and CSS"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2020")),m.a.createElement("div",{style:{"--item-number":"2"},className:"mix project-item javascript react"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://voletiswaroop.github.io/sp-tiktok/"},m.a.createElement("p",{className:"project-name"},"Tiktok Clone"),m.a.createElement("div",{className:"tech-stack"},"React, Javascript, HTML and CSS"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2020")),m.a.createElement("div",{style:{"--item-number":"3"},className:"mix project-item javascript react"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://voletiswaroop.github.io/covid19"},m.a.createElement("p",{className:"project-name"},"COVID 19"),m.a.createElement("div",{className:"tech-stack"},"React, Javascript, CanvasJS, HTML & CSS"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2020")),m.a.createElement("div",{style:{"--item-number":"4"},className:"mix project-item javascript react"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://voletiswaroop.github.io/stopwatch/"},m.a.createElement("p",{className:"project-name"},"React Stopwatch"),m.a.createElement("div",{className:"tech-stack"},"React, Javascript, HTML and CSS"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2019")),m.a.createElement("div",{style:{"--item-number":"5"},className:"mix project-item javascript"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://voletiswaroop.github.io/match-mania/"},m.a.createElement("p",{className:"project-name"},"Match Mania JS Game"),m.a.createElement("div",{className:"tech-stack"},"Javascript, HTML and CSS"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2019")),m.a.createElement("div",{style:{"--item-number":"6"},className:"mix project-item javascript react"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/voletiswaroop/ATM-dispencer"},m.a.createElement("p",{className:"project-name"},"ATM dispencer"),m.a.createElement("div",{className:"tech-stack"},"React, Javascript, HTML and CSS"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2019")),m.a.createElement("div",{style:{"--item-number":"7"},className:"mix project-item cms bootstrap wordpress disabled"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.tuts.alljobsindia.in/"},m.a.createElement("p",{className:"project-name"},"Online Tutorials for web developer"),m.a.createElement("div",{className:"tech-stack"},"Javascript, jQuery, HTML, CSS, Bootstrap and Wordpress"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},m.a.createElement("i",{className:"fas fa-sunset"}),"Released @2015 - Shutdown @2017")),m.a.createElement("div",{style:{"--item-number":"8"},className:"mix project-item cms javascript bootstrap disabled wordpress cssfw"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.alljobsindia.in/"},m.a.createElement("p",{className:"project-name"},"Alljobsindia"),m.a.createElement("div",{className:"tech-stack"},"Javascript, jQuery, HTML, SCSS, Bootstrap and Wordpress"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},m.a.createElement("i",{className:"fas fa-sunset"}),"Released @2013 - Shutdown @2017"))),r?m.a.createElement("button",{className:"load-more-btn",onClick:function(){return e.loadmorePP()}},"Loadmore"):null,m.a.createElement("h2",null,"Npm packages"),m.a.createElement("div",{className:"portfolio-list personal-projects npm-projects"},m.a.createElement("div",{className:"mix project-item react javascript"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.npmjs.com/package/react-material-ui-form"},m.a.createElement("p",{className:"project-name"},"React Material UI Form"),m.a.createElement("div",{className:"tech-stack"},"ReactJs and Javascript"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2018")),m.a.createElement("div",{className:"mix project-item react javascript"},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.npmjs.com/package/react-easy-tabs-component"},m.a.createElement("p",{className:"project-name"},"React Easy Tabs"),m.a.createElement("div",{className:"tech-stack"},"ReactJs, Javascript, Fontawesome & CSS"),m.a.createElement("span",{className:"arrow"})),m.a.createElement("span",{className:"released-date"},"2020"))))))}}]),t}(n.Component)}}]);
//# sourceMappingURL=3.4480c177.chunk.js.map