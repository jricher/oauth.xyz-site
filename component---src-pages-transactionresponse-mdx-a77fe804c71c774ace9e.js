(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{153:function(e,t,n){"use strict";n.r(t);n(56);var a=n(77),r=n.n(a),i=n(7),c=n.n(i),o=n(0),s=n.n(o),l=n(165),u=n(161),d=n(155),p=n(11),m=n.n(p),h=(n(79),n(58),n(36),n(175),n(162)),f=n(182),y=n(185),v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).interactionValues={label:"Next Step",redirect:{interaction_url:"https://server.example.com/interact/4CF492MLVMSW9MKMXKHQ"},device:{interaction_url:"https://server.example.com/interact/device",user_code:"A1BC-3DFF"},wait:{wait:30},access_token:{access_token:{value:"OS9M2PMHKUR64TB8N6BW7OZB8CDFONP219RP1LT0",type:"bearer"}}},t.codeValues={handle:{label:"Transaction Handle",on:{value:"80UPRY5NM33OMUKMKSKU",type:"bearer"}},client_handle:{label:"Client Handle",on:{value:"VBUEOIQA82PBY2ZDJW7Q",type:"bearer"}},interact_handle:{label:"Interact Handle",on:{value:"JMMLJ6393FI7ST9B1SRS",type:"bearer"}},user_handle:{label:"User Handle",on:{value:"XUT2MFM1XBIKJKSDU8QM",type:"bearer"}},resources_handle:{label:"Resources Handle",on:{value:"KLKP36N7GPOKRF3KGH5N",type:"bearer"}},key_handle:{label:"Key Handle",on:{value:"7C7C4AZ9KHRS6X63AJAO",type:"bearer"}}},t.state={selected:{handle:"on",client_handle:"on",resources_handle:"off",interact_handle:"off",key_handle:"on",user_handle:"off",interaction:"redirect"}},t.change=function(e){return function(n){if("all"!==e){var a=t.state.selected;a[e]=n,t.setState({selected:a})}else Object.keys(t.state.selected).forEach(function(e){t.change(e)(n)})}},t.render=function(){var e=Object.keys(t.codeValues).reduce(function(e,n){return e[n]=t.codeValues[n][t.state.selected[n]],e},{}),n=t.interactionValues[t.state.selected.interaction],a=m()({},n,e),r=[s.a.createElement(f.a,{onChange:t.change("interaction"),label:t.interactionValues.label,selected:t.state.selected.interaction,options:{redirect:"Redirect",device:"Device",wait:"Wait",access_token:"Token"}})].concat(Object.keys(t.codeValues).map(function(e){return s.a.createElement(f.a,{onChange:t.change(e),label:t.codeValues[e].label,selected:t.state.selected[e]})}));return s.a.createElement("div",null,s.a.createElement(y.a,null,r),s.a.createElement(h.a,{code:a}))},t}return c()(t,e),t}(s.a.Component),g=n(159);n.d(t,"default",function(){return E}),n.d(t,"_frontmatter",function(){return k});var b={},E=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=u.a,n}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=r()(e,["components"]);return s.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},b,n),components:t},s.a.createElement(g.a,{title:"Transaction Request",keywords:["oauth","authorization","security"]}),s.a.createElement(l.MDXTag,{name:"h1",components:t},"Transaction Response"),s.a.createElement(l.MDXTag,{name:"p",components:t},"The response from the transaciton endpoint tells the client what it needs to do next, including if it needs to ",s.a.createElement(d.a,{to:"/interaction"},"interact with the user")," and any ",s.a.createElement(d.a,{to:"/tokens"},"tokens that have been issued"),". "),s.a.createElement(l.MDXTag,{name:"p",components:t},"If the transaction can be continued by the client, the AS includes a transaction handle in the response as well. This handle is used by the client for any subsequent references to this transaciton. "),s.a.createElement(l.MDXTag,{name:"p",components:t},"The response can also include handles that the client can use in future transactions in lieu of any of the request sections."),s.a.createElement(v,null))},t}(s.a.Component),k={}},155:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(35),s=n.n(o);n.d(t,"a",function(){return s.a});n(156);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},156:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},157:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz"}}}}},158:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),i=n(0),c=n.n(i),o=n(4),s=n.n(o),l=n(57),u=n(2),d=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return n?c.a.createElement(l.a,r()({location:t,pageResources:n},n.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},159:function(e,t,n){"use strict";var a=n(160),r=n(0),i=n.n(r),c=n(4),o=n.n(c),s=n(170),l=n.n(s),u=n(155);function d(e){var t=e.description,n=e.lang,r=e.meta,c=e.keywords,o=e.title;return i.a.createElement(u.b,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:o},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:a}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var p="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz",description:"A new authorization protocol based on concepts from OAuth2 and its extensions.",author:"@jricher"}}}}},161:function(e,t,n){"use strict";var a=n(157),r=n(0),i=n.n(r),c=n(4),o=n.n(c),s=n(155),l=(n(166),n(167),[{name:"Request",link:"/transactionrequest/"},{name:"Response",link:"/transactionresponse/"},{name:"Interaction",link:"/interaction/"},{name:"Keys",link:"/keys/"},{name:"Tokens",link:"/tokens/"},{name:"Examples",link:"/examples/"},{name:"About",link:"/about/"}]),u=function(e){var t=e.siteTitle;e.currentPage;return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("nav",null,l.map(function(e){return i.a.createElement(s.a,{to:e.link},e.name)}))))};u.propTypes={siteTitle:o.a.string},u.defaultProps={siteTitle:""};var d=u,p=(n(168),n(169),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});p.propTypes={children:o.a.node.isRequired};t.a=p},162:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(412),c=n(411);t.a=function(e){var t=e.code,n=e.codeString;return n||(n=JSON.stringify(t,null,4)),r.a.createElement(i.a,{language:"javascript",style:c.a},n)}},182:function(e,t,n){"use strict";n(79),n(58),n(36),n(175);var a=n(0),r=n.n(a),i=n(183),c=n.n(i),o=n(202),s=n.n(o);t.a=function(e){var t=e.onChange,n=e.label,a=e.selected,i=e.all,o=e.options;o||(o={on:"On",off:"Off"});var l=[r.a.createElement(c.a,{variant:"link",disabled:!0,value:"label"},n,": ")].concat(Object.keys(o).map(function(e){return r.a.createElement(c.a,{variant:i?"warning":"primary",value:e},o[e])}));return r.a.createElement(s.a,{name:n,value:i?"":a,onChange:t,size:"sm",className:"selector"},l)}},185:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children.map(function(e,t){return r.a.createElement("li",{key:t},e)});return r.a.createElement("ul",{className:"selectorList"},t)}}}]);
//# sourceMappingURL=component---src-pages-transactionresponse-mdx-a77fe804c71c774ace9e.js.map