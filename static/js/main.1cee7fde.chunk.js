(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],{48:function(e,t,c){},58:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var a=c(4),s=c.n(a),n=c(25),i=c.n(n),r=c(10),j=c(11),o=c(13),l=c(12),b=c(18),d=(c(48),c(16)),h=(c(58),c(3)),m=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container-logo",children:Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:Object(h.jsx)(d.Link,{to:"home",smooth:!0,duration:1e3,children:Object(h.jsx)("div",{className:"const-h1",children:Object(h.jsxs)("h1",{children:["M",Object(h.jsx)("span",{className:"diferent-color",children:"r"}),".",Object(h.jsx)("div",{children:Object(h.jsxs)("span",{className:"first-span",children:["Ma",Object(h.jsx)("span",{children:"te"}),"o"]})})]})})})})})})}}]),c}(a.Component),u=(c(60),c(32)),O=c(19),x=c(40),p=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container-navegation",children:Object(h.jsx)("div",{className:"nav-bar",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(d.Link,{to:"home",smooth:!0,duration:1e3,children:Object(h.jsx)(u.a,{})})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.Link,{to:"about",smooth:!0,duration:1e3,children:Object(h.jsx)(O.a,{})})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.Link,{to:"skills",smooth:!0,duration:1e3,children:Object(h.jsx)(O.c,{})})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.Link,{to:"projects",smooth:!0,duration:1e3,children:Object(h.jsx)(u.b,{})})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.Link,{to:"contact",smooth:!0,duration:1e3,children:Object(h.jsx)(x.a,{})})})]})})})}}]),c}(a.Component),v=(c(61),function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"container-nav-bar",children:Object(h.jsxs)("div",{className:"header container",children:[Object(h.jsx)(m,{}),Object(h.jsx)(p,{})]})})}}]),c}(a.Component)),f=(c(62),function(e,t,c){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(c,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1});f.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap-delete">'+this.txt+"</span>";var c=this,a=200-100*Math.random();this.isDeleting&&(a/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,a=500):(a=this.period,this.isDeleting=!0),setTimeout((function(){c.tick()}),a)},window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var c=e[t].getAttribute("data-type"),a=e[t].getAttribute("data-period");c&&new f(e[t],JSON.parse(c),a)}};var g=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"max-width home",children:Object(h.jsxs)("div",{className:"container-home",children:[Object(h.jsx)("div",{className:"text-1",children:"Hello, my name is"}),Object(h.jsx)("div",{className:"text-2",children:"Mateo Mazzucco"}),Object(h.jsx)("div",{className:"text-3",children:Object(h.jsxs)("h1",{children:[Object(h.jsx)("p",{children:"And i'm a\xa0"}),Object(h.jsx)("a",{href:"#",class:"typewrite","data-period":"3000","data-type":'[ "Developer.", "Front end.", "Junior."]',children:Object(h.jsx)("span",{class:"wrap-delete"})})]})}),Object(h.jsx)("div",{className:"btn container-button",children:Object(h.jsx)(d.Link,{to:"about",className:"here-button",smooth:!0,duration:1e3,children:"Learn more"})})]})})}}]),c}(a.Component),N=(c(63),c(14));var y=function(){return Object(h.jsx)("div",{className:"max-width about",children:Object(h.jsxs)("div",{className:"about-container",children:[Object(h.jsx)("h4",{children:"About me."}),Object(h.jsx)("div",{className:"vl-line"}),Object(h.jsx)("div",{className:"about-text",children:Object(h.jsxs)("p",{children:["Hi! How are you? I introduce myself, I am Mateo Mazzucco born in Argentina, nationalized Italian. I wrote my first line of code for 2017 in Python, for different circumstances leave. I resumed writing code in 2021 learning ",Object(h.jsx)(N.c,{className:"html"}),", ",Object(h.jsx)(N.a,{className:"css"})," and ",Object(h.jsx)(O.b,{className:"js"}),", i am currently learning and using ",Object(h.jsx)(N.f,{className:"react"})," this portfolio is written in React. I am very passionate about programming, i have created habits in my life that i have never thought about having, i am looking for my first work experience, willing to give my all to learn and study everything necessary to take myself to the next level."]})})]})})},k=(c(64),c.p+"static/media/yellow-skills.08035c35.jpg"),w=c(41);var z=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"container-skills-img",children:Object(h.jsx)("img",{src:k,alt:"cover",className:"imagen"})}),Object(h.jsxs)("div",{className:"max-width skills",children:[Object(h.jsx)("div",{className:"title-skills",children:Object(h.jsx)("h1",{children:"My Skills"})}),Object(h.jsxs)("div",{className:"wrapper-icons",children:[Object(h.jsx)("div",{className:"icon html",children:Object(h.jsx)(N.c,{})}),Object(h.jsx)("div",{className:"icon css",children:Object(h.jsx)(N.a,{})}),Object(h.jsx)("div",{className:"icon js",children:Object(h.jsx)(O.b,{})}),Object(h.jsx)("div",{className:"icon react",children:Object(h.jsx)(N.f,{})}),Object(h.jsx)("div",{className:"icon ts",children:Object(h.jsx)(O.d,{})}),Object(h.jsx)("div",{className:"icon sass",children:Object(h.jsx)(N.g,{})}),Object(h.jsx)("div",{className:"icon git",children:Object(h.jsx)(w.a,{})})]})]})]})},M=(c(65),c.p+"static/media/building.1e8a845a.png");var C=function(){return Object(h.jsxs)("div",{className:"max-width projects",children:[Object(h.jsx)("div",{className:"title-projects",children:Object(h.jsx)("h1",{children:"In construction"})}),Object(h.jsx)("div",{className:"content-img-build",children:Object(h.jsx)("img",{src:M,alt:"building",className:"build-img"})})]})},I=c(21),S=(c(66),c.p+"static/media/background-contact.ebc513ac.jpg"),D=c(43).a.initializeApp({apiKey:"AIzaSyBrZ51YNwgWvL5tVl1bZZVZ-i7nRqKFzek",authDomain:"portafolio-contact-form-9bfbe.firebaseapp.com",projectId:"portafolio-contact-form-9bfbe",storageBucket:"portafolio-contact-form-9bfbe.appspot.com",messagingSenderId:"562181168527",appId:"1:562181168527:web:bd723a87e32afdeb7ffffa"}).firestore();var L=function(){var e=Object(a.useState)(""),t=Object(I.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(I.a)(n,2),r=i[0],j=i[1],o=Object(a.useState)(""),l=Object(I.a)(o,2),d=l[0],m=l[1],u=Object(a.useState)(""),O=Object(I.a)(u,2),x=O[0],p=O[1],v=Object(a.useState)(""),f=Object(I.a)(v,2),g=f[0],y=f[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"container-background",children:Object(h.jsx)("img",{src:S,className:"img-contact"})}),Object(h.jsxs)("div",{className:"max-width contact",children:[Object(h.jsx)("div",{className:"title-contact",children:Object(h.jsx)("h1",{children:"Contact me."})}),Object(h.jsxs)("div",{className:"wrap",children:[Object(h.jsxs)("form",{className:"container-inputs",onSubmit:function(e){e.preventDefault(),y(!0),D.collection("contacts").add({name:c,email:r,subject:d,message:x}).then((function(){alert("Message has been submitted \ud83d\udc4c"),y(!1)})).catch((function(e){alert(e.message),y(!1)})),s(""),j(""),m(""),p("")},children:[Object(h.jsx)("div",{className:"input-name",children:Object(h.jsx)("input",{type:"text",className:"fullname",name:"name",placeholder:"Name",required:!0,value:c,onChange:function(e){return s(e.target.value)}})}),Object(h.jsx)("div",{className:"input-email",children:Object(h.jsx)("input",{type:"email",className:"email",name:"email",placeholder:"Email",required:!0,value:r,onChange:function(e){return j(e.target.value)}})}),Object(h.jsx)("div",{className:"input-subject",children:Object(h.jsx)("input",{type:"subject",className:"subject",name:"subject",placeholder:"Subject",required:!0,value:d,onChange:function(e){return m(e.target.value)}})}),Object(h.jsx)("div",{className:"input-message",children:Object(h.jsx)("textarea",{type:"text",className:"message",name:"message",placeholder:"Message",required:!0,value:x,onChange:function(e){return p(e.target.value)}})}),Object(h.jsx)("div",{className:"button",children:Object(h.jsx)("button",{type:"submit",style:{background:g?"#ccc":"transparent"},children:"Send message"})})]}),Object(h.jsx)("div",{className:"container-social-media",children:Object(h.jsxs)("div",{className:"social-media",children:[Object(h.jsx)(b.b,{to:{pathname:"https://github.com/mateomazzucco11"},target:"_blank",className:"icon-gh",children:Object(h.jsx)(N.b,{})}),Object(h.jsx)(b.b,{to:{pathname:"https://twitter.com/MazzuccoMateo"},target:"_blank",className:"icon-tw",children:Object(h.jsx)(N.h,{})}),Object(h.jsx)(b.b,{to:{pathname:"https://www.linkedin.com/in/mateo-mazzucco/"},target:"_blank",className:"icon-lk",children:Object(h.jsx)(N.e,{})}),Object(h.jsx)(b.b,{to:{pathname:"https://www.instagram.com/mateomazzucco/"},target:"_blank",className:"icon-ig",children:Object(h.jsx)(N.d,{})})]})})]})]})]})},A=(c(72),c.p+"static/media/test3.8b473a6d.mp4"),F=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container-video",children:Object(h.jsx)("video",{className:"video",src:A,autoPlay:!0,loop:!0,muted:!0})})})}}]),c}(a.Component),q=(c(73),c(74),function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(h.jsx)("span",{className:"span-footer",children:Object(h.jsxs)("p",{children:["Made with a lot of coffee \u2615 and patience by",Object(h.jsx)(b.b,{to:{pathname:"https://www.linkedin.com/in/mateo-mazzucco/"},target:"_blank",children:"Mateo Mazzucco"})]})})}}]),c}(a.Component)),R=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("section",{className:"home",id:"home-id",children:[Object(h.jsx)(g,{}),Object(h.jsx)(F,{})]}),Object(h.jsx)("section",{className:"about",id:"about",children:Object(h.jsx)(y,{})}),Object(h.jsx)("section",{className:"skills",id:"skills",children:Object(h.jsx)(z,{})}),Object(h.jsx)("section",{className:"projects",id:"projects",children:Object(h.jsx)(C,{})}),Object(h.jsx)("section",{className:"contact",id:"contact",children:Object(h.jsx)(L,{})}),Object(h.jsx)("footer",{children:Object(h.jsx)(q,{})})]})}}]),c}(a.Component),_=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(h.jsxs)(b.a,{children:[Object(h.jsx)(v,{}),Object(h.jsx)(R,{})]})}}]),c}(a.Component);i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.1cee7fde.chunk.js.map