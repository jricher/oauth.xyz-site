(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{152:function(e,t,a){"use strict";a.r(t);a(56);var n=a(77),r=a.n(n),i=a(7),o=a.n(i),s=a(0),c=a.n(s),l=a(161),m=a(160),d=a(153),h=a(171),u=a(197),p=a.n(u),g=a(396),y=a.n(g),f=function(e){var t=e.onChange,a=e.label,n=e.selected,r=e.all;return c.a.createElement(y.a,{name:a,value:r?"":n,onChange:t,size:"sm"},c.a.createElement(p.a,{variant:"link",disabled:!0,value:"label"},a,": "),c.a.createElement(p.a,{variant:r?"warning":"primary",style:{borderTopLeftRadius:"40%",borderBottomLeftRadius:"40%"},value:"full"},"Full"),c.a.createElement(p.a,{variant:r?"warning":"primary",value:"handle"},"Handle"),c.a.createElement(p.a,{variant:r?"warning":"primary",style:{borderTopRightRadius:"40%",borderBottomRightRadius:"40%"},value:"omit"},"Omit"))},E=function(e){var t=e.children.map(function(e,t){return c.a.createElement("li",{key:t},e)});return c.a.createElement("ul",{className:"selectorList"},t)},w=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).codeValues={client:{full:{name:"My Client Display Name",uri:"https://example.net/client"},handle:{handle:"VBUEOIQA82PBY2ZDJW7Q"}},interact:{full:{type:"redirect",callback:"https://client.example.net/return/123455",state:"LKLTI25DK82FX4T4QFZC"},handle:{handle:"JMMLJ6393FI7ST9B1SRS"}},user:{full:{assertion:"eyJraWQiOiIxZTlnZGs3IiwiYWxnIjoiUlMyNTYifQ.ewogImlzcyI6ICJodHRwOi8vc2VydmVyLmV4YW1wbGUuY29tIiwKICJzdWIiOiAiMjQ4Mjg5NzYxMDAxIiwKICJhdWQiOiAiczZCaGRSa3F0MyIsCiAibm9uY2UiOiAibi0wUzZfV3pBMk1qIiwKICJleHAiOiAxMzExMjgxOTcwLAogImlhdCI6IDEzMTEyODA5NzAsCiAibmFtZSI6ICJKYW5lIERvZSIsCiAiZ2l2ZW5fbmFtZSI6ICJKYW5lIiwKICJmYW1pbHlfbmFtZSI6ICJEb2UiLAogImdlbmRlciI6ICJmZW1hbGUiLAogImJpcnRoZGF0ZSI6ICIwMDAwLTEwLTMxIiwKICJlbWFpbCI6ICJqYW5lZG9lQGV4YW1wbGUuY29tIiwKICJwaWN0dXJlIjogImh0dHA6Ly9leGFtcGxlLmNvbS9qYW5lZG9lL21lLmpwZyIKfQ.rHQjEmBqn9Jre0OLykYNnspA10Qql2rvx4FsD00jwlB0Sym4NzpgvPKsDjn_wMkHxcp6CilPcoKrWHcipR2iAjzLvDNAReF97zoJqq880ZD1bwY82JDauCXELVR9O6_B0w3K-E7yM2macAAgNCUwtik6SjoSUZRcf-O5lygIyLENx882p6MtmwaL1hd6qn5RZOQ0TLrOYu0532g9Exxcm-ChymrB4xLykpDj3lUivJt63eEGGN6DH5K6o33TcxkIjNrCD4XB1CKKumZvCedgHHF3IAK4dVEDSUoGlH9z4pP_eWYNXvqQOjGs-rDaQzUHl6cQQWNiDpWOl_lxXjQEvQ",type:"oidc_id_token"},handle:{handle:"XUT2MFM1XBIKJKSDU8QM"}},resources:{full:[{actions:["read","write","dolphin"],locations:["https://server.example.net/","https://resource.local/other"],data:["metadata"]}],handle:[{handle:"dolphin-metadata"}]},key:{full:{type:"jwsd",uri:{keys:[{kty:"RSA",e:"AQAB",kid:"xyz-1",alg:"RS256",n:"kOB5rR4Jv0GMeLaY6_It_r3ORwdf8ci_JtffXyaSx8xYJCCNaOKNJn_Oz0YhdHbXTeWO5AoyspDWJbN5w_7bdWDxgpD-y6jnD1u9YhBOCWObNPFvpkTM8LC7SdXGRKx2k8Me2r_GssYlyRpqvpBlY5-ejCywKRBfctRcnhTTGNztbbDBUyDSWmFMVCHe5mXT4cL0BwrZC6S-uu-LAx06aKwQOPwYOGOslK8WPm1yGdkaA1uF_FpS6LS63WYPHi_Ap2B7_8Wbw4ttzbMS_doJvuDagW8A1Ip3fXFAHtRAcKw7rdI4_Xln66hJxFekpdfWdiPQddQ6Y1cK2U3obvUg7w"}]}},handle:{handle:"7C7C4AZ9KHRS6X63AJAO"}}},t.state={transaction:{client:t.codeValues.client.full,resources:t.codeValues.resources.handle,interact:t.codeValues.interact.omit,key:t.codeValues.key.omit,user:t.codeValues.user.full},selected:{client:"full",user:"omit",resources:"handle",interact:"full",key:"omit"}},t.change=function(e){return function(a){if("all"===e)return t.change("client")(a),t.change("interact")(a),t.change("resources")(a),t.change("user")(a),void t.change("key")(a);var n=t.codeValues[e][a],r=t.state.transaction;r[e]=n;var i=t.state.selected;i[e]=a,t.setState({transaction:r,selected:i})}},t.render=function(){return c.a.createElement("div",null,c.a.createElement(E,null,c.a.createElement(f,{onChange:t.change("client"),label:"Client",selected:t.state.selected.client}),c.a.createElement(f,{onChange:t.change("resources"),label:"Resources",selected:t.state.selected.resources}),c.a.createElement(f,{onChange:t.change("interact"),label:"Interact",selected:t.state.selected.interact}),c.a.createElement(f,{onChange:t.change("key"),label:"Key",selected:t.state.selected.key}),c.a.createElement(f,{onChange:t.change("user"),label:"User",selected:t.state.selected.user}),c.a.createElement(f,{onChange:t.change("all"),label:"All",all:!0})),c.a.createElement(h.a,{code:t.state.transaction}))},t}return o()(t,e),t}(c.a.Component),T=a(158);a.d(t,"default",function(){return M}),a.d(t,"_frontmatter",function(){return D});var b={},M=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=m.a,a}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=r()(e,["components"]);return c.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},b,a),components:t},c.a.createElement(T.a,{title:"Transaction Request",keywords:["oauth","authorization","security"]}),c.a.createElement(l.MDXTag,{name:"h1",components:t},"Transaction Request"),c.a.createElement(l.MDXTag,{name:"p",components:t},"The client begins the transaction by creating a transaction request. This is a ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"JSON")," document ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"POST"),"ed to the authorization server's transaction endpoint."),c.a.createElement(l.MDXTag,{name:"p",components:t},"The transaction request contains five parts:"),c.a.createElement(l.MDXTag,{name:"ul",components:t},c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"client")," includes information about how the client software making the request"),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"resources")," contains a list of resources that the client is requesting access tok"),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"interact")," contains information about how the client is able to get the user to interact with the AS, if necessary"),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"key")," contains information about the key the client is able to provide proof of possession for during this transaction and any related actions"),c.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"user")," contains assertions about the current user ")),c.a.createElement(l.MDXTag,{name:"p",components:t},"Each ot these sections is optional and can be also sent as a handle instead. When sent as a handle, the AS looks up the handle value to determine the values associated with that handle. The AS can also limit which values can be used together, such as only allowing certain callback URIs or keys when used with a client handle. "),c.a.createElement(l.MDXTag,{name:"p",components:t},"This example shows how the different sections can be composed with each other in a transaction request."),c.a.createElement(w,null),c.a.createElement(l.MDXTag,{name:"p",components:t},"Each of the sections is detailed below."),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Client"),c.a.createElement(l.MDXTag,{name:"p",components:t},"The ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"client")," section describes the client software that is making the request. This information can be used during any interaction with the user that the AS might need to do, and for auditing and review of authorization decisions. "),c.a.createElement(l.MDXTag,{name:"p",components:t},"The AS can statically issue a client handle to a piece of software (or its developer) to be used in place of this section. In this way, it takes the place of the ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"client_id")," and ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"client_secret")," of OAuth 2. In these cases, the AS will likely also keep references to which ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"resources")," the client can ask for, which ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"interact")," methods it is allowed to use, which ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"key"),"s it is allowed to present, and even what kinds of ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"user")," information it can assert. "),c.a.createElement(l.MDXTag,{name:"p",components:t},"A client that is accessing things of its own accord and not on behalf of a user has to be pre-registered with a handle in this way and attached to a key."),c.a.createElement(l.MDXTag,{name:"p",components:t},"An AS can also dynamically generate a client handle and return it to the client during the initial transaction response. This handle can be used by the same piece of software to identify itself in future transactions."),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Resources"),c.a.createElement(l.MDXTag,{name:"p",components:t},"The ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"resources")," paramter contains a list of all resources and APIs the client wishes to access. Each object in this array lists the types of actions the client can take, the URIs where those actions can be taken, and the kinds of data that the client expects access to. "),c.a.createElement(h.a,{code:{actions:["read","write","dolphin"],locations:["https://server.example.net/","https://resource.local/other"],data:["metadata"]}}),c.a.createElement(l.MDXTag,{name:"p",components:t},"An AS can publish pre-set resources as resource handles that can be passed by the client to the AS during a transaction request, similar to OAuth 2's ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"scope")," concept. The AS can deterine a default set of resources for a client not asking for anything specifically."),c.a.createElement(l.MDXTag,{name:"p",components:t},"An AS can also dynamically generate a resources handle and return it to the client during the initial transaction response. This handle can be used by the same piece of software to identify this same kind of request in future transactions."),c.a.createElement(l.MDXTag,{name:"p",components:t},"The client can send several of these objects of handles in a single request, which the AS interprets as the client requesting access to all of the resources. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Interact"),c.a.createElement(l.MDXTag,{name:"p",components:t},"The ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"interact")," parameter lets the client tell the AS how to get a user to interact with the AS during a transaction. "),c.a.createElement(l.MDXTag,{name:"p",components:t},"More detail is found in the ",c.a.createElement(d.a,{to:"/interaction"},"Interaction")," section."),c.a.createElement(l.MDXTag,{name:"blockquote",components:t},c.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"blockquote"},"Do we care about an interact handle? Redirect based clients need to send a new state parameter every time anyway, and could potentially send a new callback URL while they're at it.")),c.a.createElement(l.MDXTag,{name:"h2",components:t},"Key"),c.a.createElement(l.MDXTag,{name:"p",components:t},"The ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"key")," parameter lets the client tell the AS which keys it is able to prove ownership of during the course of the transaction. "),c.a.createElement(l.MDXTag,{name:"p",components:t},"The AS can statically issue a key handle to a piece of software (or its developer). An AS can also dynamically generate a key handle and return it to the client during the initial transaction. This handle can be used by the same piece of software to identify its keys in future transactions."),c.a.createElement(l.MDXTag,{name:"p",components:t},"Any keys referenced here, whether directly by value or by reference through a handle, have to be proved by the client during every request in the transaction. More detail is found in the ",c.a.createElement(d.a,{to:"/keys"},"Keys")," section. "),c.a.createElement(l.MDXTag,{name:"h2",components:t},"User"),c.a.createElement(l.MDXTag,{name:"p",components:t},"The ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"user")," parameter lets the client pass information to the AS about the current user in the form of an assertion or other set of claims gathered from a trusted source. These claims need to be able to be validated by the AS, and it should be additionally validated that the client is an authorized holder of this information. "),c.a.createElement(l.MDXTag,{name:"p",components:t},"While this does not necessarily prove that the user in question is actually present with the client, it can allow the AS to make authorization decisions without user interaction in appropriately trusted scenarios."),c.a.createElement(l.MDXTag,{name:"p",components:t},"The AS can dynamically generate a user handle and return it to the client in the transaction response. This handle can be used by the same piece of software to identify the same user in future transactions. In this way, it is similar to the persistent claims token from UMA 2."))},t}(c.a.Component),D={}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(35),c=a.n(s);a.d(t,"a",function(){return c.a});a(154);var l=r.a.createContext({}),m=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},156:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz"}}}}},157:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),i=a(0),o=a.n(i),s=a(4),c=a.n(s),l=a(57),m=a(2),d=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return a?o.a.createElement(l.a,r()({location:t,pageResources:a},a.json)):null};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=d},158:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(168),l=a.n(c),m=a(153);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(m.b,{query:h,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var h="1025518380"},159:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz",description:"A new authorization protocol based on concepts from OAuth2 and its extensions.",author:"@jricher"}}}}},160:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(153),l=(a(164),a(165),[{name:"Request",link:"/transactionrequest/"},{name:"Interaction",link:"/interaction/"},{name:"Keys",link:"/keys/"},{name:"Tokens",link:"/tokens/"},{name:"About",link:"/about/"}]),m=function(e){var t=e.siteTitle;e.currentPage;return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("nav",{style:{display:"flex",flex:1}},l.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement(c.a,{to:e.link},e.name))}))))};m.propTypes={siteTitle:s.a.string},m.defaultProps={siteTitle:""};var d=m,h=(a(166),a(167),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});h.propTypes={children:s.a.node.isRequired};t.a=h},171:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(406),o=a(405);t.a=function(e){var t=e.code,a=e.codeString;return a||(a=JSON.stringify(t,null,4)),r.a.createElement(i.a,{language:"javascript",style:o.a},a)}}}]);
//# sourceMappingURL=component---src-pages-transactionrequest-mdx-ebccd7640dc37845c348.js.map