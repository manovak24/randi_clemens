(this["webpackJsonprandi-clemens"]=this["webpackJsonprandi-clemens"]||[]).push([[0],{56:function(e,t,a){e.exports=a(80)},61:function(e,t,a){},62:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){e.exports=a.p+"static/media/randi.d77a732f.jpg"},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(22),r=a.n(i),o=(a(61),a(14)),c=a(15),s=a(19),m=a(18),u=(a(62),a(8)),d=a(6),h=a(16),b=a(26),p=a(53),E=a(21),f=a(12),g=a(24),v=a(25);a(68);var k=function(e){return l.a.createElement("div",{className:"social-container"},l.a.createElement("a",{href:"https://www.facebook.com/randi.clemens",className:"facebook social",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(g.a,{icon:v.a,size:"2x"})),l.a.createElement("a",{href:"https://www.instagram.com/randi_c_/?igshid=4ziuxur0oux3",className:"instagram social",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(g.a,{icon:v.b,size:"2x"})),l.a.createElement("a",{href:"https://twitter.com/randiclem?lang=en",className:"twitter social",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(g.a,{icon:v.d,size:"2x"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/randi-clemens-47aa3a108",className:"linkedin social",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(g.a,{icon:v.c,size:"2x"})))},w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",{className:"mt-2"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"border-top justify-content-between p-3 mt-1 d-flex"},l.a.createElement(f.a,{style:{textAlign:"left",padding:"0"}},l.a.createElement(k,null)),l.a.createElement(f.a,{style:{textAlign:"right",padding:"0"}},"Novak North Designs"))))}}]),a}(l.a.Component),N=a(82);a(69);var y=function(e){return l.a.createElement(N.a,{className:"jumbotron-container bg-transparent"},l.a.createElement(h.a,{className:"jumbotron-elements"},e.title&&l.a.createElement("h1",null,e.title),e.subTitle&&l.a.createElement("h2",null,e.subTitle)))};a(70);var C=function(e){return l.a.createElement("div",{className:"HomePage"},l.a.createElement("div",{className:"hero-home-container"},l.a.createElement(y,{title:e.title,subTitle:e.subTitle})),l.a.createElement("div",{className:"ButtonContainer"},l.a.createElement(u.b,{className:"HomePage-Button-Link",to:"/about"},"About"),l.a.createElement(u.b,{className:"HomePage-Button-Link",to:"/publications"},"Publications"),l.a.createElement(u.b,{className:"HomePage-Button-Link",to:"/editorials"},"Editorial Work"),l.a.createElement(u.b,{className:"HomePage-Button-Link",to:"/contact"},"Contact")))},x=a(83);a(73);var j=function(e){var t=a(74);return l.a.createElement("div",null,l.a.createElement("div",{className:"hero-about-container"},l.a.createElement(y,{title:e.title,className:"hero"})),l.a.createElement("div",{className:"about-container"},l.a.createElement(E.a,null,l.a.createElement(f.a,{xs:12,md:4,className:"image-container"},l.a.createElement(x.a,{src:t,roundedCircle:!0})),l.a.createElement(f.a,{xs:12,md:8,className:"bio-container"},l.a.createElement("p",null,"Randi Clemens is a poet, editor, and educator who lives in the Upper Peninsula of Michigan. She received her BA in Creative Writing from the University of Illinois at Urbana-Champaign and her MFA in poetry from Northern Michigan University where she also taught composition and creative writing. Her poetry has been published in various online journals and has been nominated for the Best of the Net. She has worked as an editor for Ninth Letter and served as the Managing Editor of Passages North. She is interested in contemporary poetry, science writing, museum studies, feminist literary theory, women and gender studies, visual poetics, and social justice pedagogy. She is actively seeking a home for her full-length manuscript and freelance opportunities as a creative consultant and/or editor.")))))},L=a(46);var O=function(e){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-center"},l.a.createElement(f.a,{md:10},e.children)))},P=a(11),S=a(48),_=a(47),T=a.n(_),A=a(40),B=a.n(A),M=a(54),F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(L.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),T.a.sendForm("gmail","testing",e.target,"NEED TO UPDATE USER ID").then((function(e){B.a.fire({title:"Email Successfully Sent",icon:"success"})})).catch((function(e){B.a.fire({title:"Email Failed to Send",icon:"error"}),console.error("Email Error:",e)}))},n.state={user_name:"",user_email:"",message:"",disabled:!1,emailSent:null},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y,{title:this.props.title}),l.a.createElement(O,null,l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement(f.a,{xs:"auto",md:5,className:"mb-4 mt-1"},l.a.createElement("p",null,"Please feel free to contact me via my social media pages, email address provided below or the contact form. I will respond as soon as possible"),l.a.createElement("a",{href:"mailto:randiclemens@gmail.com"},l.a.createElement(M.a,null)," randiclemens@gmail.com"),l.a.createElement(k,null)),l.a.createElement(f.a,{xs:12,md:7},l.a.createElement(P.a,{onSubmit:this.handleSubmit},l.a.createElement(P.a.Group,null,l.a.createElement(P.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(P.a.Control,{id:"full-name",name:"user_name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(P.a.Group,null,l.a.createElement(P.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(P.a.Control,{id:"email",name:"user_email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(P.a.Group,null,l.a.createElement(P.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(P.a.Control,{id:"message",name:"message",as:"textarea",row:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(S.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.user_name<1||this.state.user_email<1||this.state.message<1},"Send")))))))}}]),a}(l.a.Component),H=(a(78),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).pubList=function(e){return l.a.createElement("ul",{className:"pub-container"},e.slice(0).reverse().map((function(e){return l.a.createElement("li",{key:e.id,className:"list-container"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h5",null,e.title),l.a.createElement("p",null,"Publisher: ",e.publisher)),l.a.createElement("div",{className:"pub-link-container"},l.a.createElement("a",{className:"publication-launch-button",href:e.link,target:"_blank",rel:"noopener noreferrer"},"Link to Publication"))))})))},n.state={publications:[{id:1,title:"MCBH",publisher:"Montage Arts Journal",link:"https://issuu.com/montagejournal/docs/montage__final_"},{id:2,title:"For Catherine, 1938",publisher:"KNOB Book Review",link:"https://knobbookreview.wixsite.com/website/single-post/2017/05/16/For-Catherine-1938"},{id:3,title:"Nesting",publisher:"Up North Lit",link:"https://upnorthlit.org/randi-clemens-poetry"},{id:4,title:"Science and Industry",publisher:"Pidgeonholes",link:"http://pidgeonholes.com/2019/12/two-poems-37/"},{id:5,title:"Replication",publisher:"Pidgeonholes",link:"http://pidgeonholes.com/2019/12/two-poems-37/"},{id:6,title:"The American Family in the Diorama",publisher:"Meow Meow Pow Pow Lit",link:"https://www.meowmeowpowpowlit.com/recent/the-american-family-in-the-diorama-by-randi-clemens"},{id:7,title:"Northwind Article",publisher:"The Northwind",link:"https://www.thenorthwindonline.com/graduate-thesis-explores-poetry-and-human-body/"},{id:8,title:"The American Daughter in the Diorama",publisher:"LandLocked",link:"https://indd.adobe.com/view/1053f6b5-6a21-4c50-864b-a892db2b1d43"},{id:9,title:"Rapunzel Birthing",publisher:"LandLocked",link:"https://indd.adobe.com/view/1053f6b5-6a21-4c50-864b-a892db2b1d43"},{id:10,title:"Hysterectomy",publisher:"LandLocked",link:"https://indd.adobe.com/view/1053f6b5-6a21-4c50-864b-a892db2b1d43"}]},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,this.pubList(this.state.publications))}}]),a}(l.a.Component));var D=function(e){return l.a.createElement("div",null,l.a.createElement(y,{title:e.title}),l.a.createElement(O,null,l.a.createElement(H,null)))};var R=function(e){return l.a.createElement("div",null,l.a.createElement(y,{title:e.title}),l.a.createElement(O,null,l.a.createElement("p",null,"Add"),l.a.createElement("p",null,"Publications"),l.a.createElement("p",null,"List")))};var U=Object(d.e)((function(e){var t=e.history,a=e.children;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}})),l.a.createElement(n.Fragment,null,a)})),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setNavExpanded=function(e){n.setState({navExpanded:e})},n.setNavClose=function(){n.setState({navExpanded:!1})},n.state={title:"Randi Clemens",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Publications",path:"/publications"},{title:"Editorials",path:"/editorials"},{title:"Contact",path:"/contact"}],home:{title:"Randi Clemens",subTitle:"Writer \u2219 Editor \u2219 Educator"},publications:{title:"Publications"},editorials:{title:"Editorial Work"},about:{title:"About Me"},contact:{title:"Contact Me"}},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(U,null,l.a.createElement(h.a,{className:"p-0",fluid:!0},l.a.createElement(b.a,{className:"border-bottom",expand:"md",bg:"light",onToggle:this.setNavExpanded,expanded:this.state.navExpanded},l.a.createElement(b.a.Brand,null,l.a.createElement(u.b,{className:"nav-brand",to:"/"},"Randi Clemens")),l.a.createElement(b.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(b.a.Collapse,{id:"navbar-toggle"},l.a.createElement(p.a,{className:"ml-auto",onClick:this.setNavClose},l.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(u.b,{className:"nav-link",to:"/publications"},"Publications"),l.a.createElement(u.b,{className:"nav-link",to:"/editorials"},"Editorial Work"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(C,{title:e.state.home.title,subTitle:e.state.home.subTitle})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(j,{title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/publications",render:function(){return l.a.createElement(D,{title:e.state.publications.title})}}),l.a.createElement(d.a,{path:"/editorials",render:function(){return l.a.createElement(R,{title:e.state.editorials.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement(F,{title:e.state.contact.title})}}),l.a.createElement(w,null))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.f39e4de4.chunk.js.map