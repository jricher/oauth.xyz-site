(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{pfKO:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c})),a.d(t,"_frontmatter",(function(){return l}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/");var n=a("q1tI"),o=a.n(n),r=a("6qfE"),i=a("Bl7J"),s=a("Wbzz"),m=a("vrFN");var p={},c=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).layout=i.a,a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},o.a.createElement(m.a,{title:"Home",keywords:["oauth","authorization","security","xyz","gnap"]}),o.a.createElement(r.MDXTag,{name:"h1",components:t},"What is XYZ?"),o.a.createElement(r.MDXTag,{name:"p",components:t},"XYZ is a proposed delegation protocol in the spirit of OAuth 2, but designed with the decade of experience that we have now with OAuth 2 and its extensions. The XYZ protocol is ",o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"strong"},"not intended to be directly compatible with OAuth 2")),", much in the same way that OAuth 2 was not directly compatible with OAuth 1. However, the concepts and many of the goals should feel familiar to developers used to these existing protocols and their extensions. Concepts from OAuth 2, OIDC, PKCE, UMA, CIBA, OBUK, FAPI, and a host of other extensions and profiles were analyzed and adapted in the design of XYZ, but with a mind toward taking the best aspects of all of them and applying them in a consistent way. "),o.a.createElement(r.MDXTag,{name:"p",components:t},"XYZ has several core features that drive its design principles, and these are key to providing a consistent data model:"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Intent registration. This allows the client to start the process off the same way every time by doing ",o.a.createElement(s.Link,{to:"/transactionrequest/"},"requeset to the authorization server"),"."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Don't assume the user has a browser. Interaction needs to happen in a ",o.a.createElement(s.Link,{to:"/interaction/"},"variety of ways depending on the capabilities of the client"),", and only sometimes will a browser be involved."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Minimize the front channel. When a browser ",o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"li"},"is involved"),", the protocol seeks to minimize the amount and kind of information that passes through the URLs of the front channel."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Polymorphic JSON. The protocol elements have different data types that convey additional contextual meaning, allowing us to avoid mutually exclusive protocol elements and design a more succinct and readable protocol. This lets us pass things by reference or by value using the same element field, among other things."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Key proofing and presentation. While OAuth 2 thrived on client secrets and bearer tokens, XYZ seeks to ",o.a.createElement(s.Link,{to:"/keys/"},"move beyond that at the base level"),", making use of a variety of security technologies."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Ease of transition from OAuth 2. Even though this is not backwards compatible, there should be a ",o.a.createElement(s.Link,{to:"/specs/"},"clear translation path from OAuth 2 based systems to XYZ"),"."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Inline negotiation. Whenever possible, the protocol is designed such that ",o.a.createElement(s.Link,{to:"/discovery/"},"discovery and registration are not needed"),", but they can still be supported.")),o.a.createElement(r.MDXTag,{name:"p",components:t},"And most importantly, XYZ seeks to build out a protocol that ",o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"doesn't have the same assumptions as OAuth 2")," by carefully examining and questioning all aspects of OAuth 2 and its extensions. Nothing is considered ",o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"p"},"sacred"),", even as we build in a world already full of OAuth 2. This lets us question the utility of protocol elements like the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"client_id")," and figure out if and how they fit into the new world."),o.a.createElement(r.MDXTag,{name:"h1",components:t},"GNAP"),o.a.createElement(r.MDXTag,{name:"p",components:t},"The XYZ protocol is one of the inputs in the newly-formed ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://datatracker.ietf.org/wg/gnap/about/"}},"Grant Negotiation Authorization Protocol (GNAP)")," working group in the IETF. This is a new working group, and discussion is happening now on the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.ietf.org/mailman/listinfo/txauth"}},"txauth@ietf.org")," mailing list. The XYZ protocol has been ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://tools.ietf.org/html/draft-richer-transactional-authz"}},"submitted as an individual draft"),", but the GNAP protocol will take its own shape after the working group is officially formed."),o.a.createElement(r.MDXTag,{name:"p",components:t},"GNAP will one day be a formal standard, and as that standardization process takes place, XYZ will transition to being an implementation of that standard. "),o.a.createElement(r.MDXTag,{name:"h1",components:t},"Presentations and Materials"),o.a.createElement(r.MDXTag,{name:"p",components:t},"This website is the most comprehensive and complete collections of information about the XYZ project, and it tends to get updated before other artifacts do. "),o.a.createElement(r.MDXTag,{name:"p",components:t},"In addition to the website, I've been fortunate to present XYZ and its concepts at a few different places so far. "),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.youtube.com/watch?v=U9i7YaN8v9c"}},"Identiverse 2019, Transactional Authorization")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.youtube.com/watch?v=TE3Fzb5-Jz0&t=3764"}},"IETF 105 Montreal 2019, OAuth Working Group")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.youtube.com/watch?v=q096sY6L9-E"}},"IETF 106 Singapore, TXAuth BoF Meeting"))),o.a.createElement(r.MDXTag,{name:"p",components:t},"I've also written a number of articles on the topic of XYZ and the choices behind the protocol design."),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://medium.com/@justinsecurity/moving-on-from-oauth-2-629a00133ade"}},"Moving On from OAuth 2")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://medium.com/@justinsecurity/the-case-for-oauth-3-0-5c7537e3f9c3"}},"The Case for OAuth 3")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://medium.com/@justinsecurity/xyz-why-b855970fdd89"}},"XYZ: Why?")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://medium.com/@justinsecurity/xyz-handles-passing-by-reference-and-polymorphic-json-e1af8892f371"}},"XYZ: Handles, Passing by Reference, and Polymorphic JSON")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://medium.com/@justinsecurity/xyz-interaction-a84091d2a8c8"}},"XYZ: Interaction")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://medium.com/@justinsecurity/xyz-compatibility-with-oauth-2-f7b490be536d"}},"XYZ: Compatibility with OAuth 2")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://medium.com/@justinsecurity/xyz-cryptographic-binding-db367f6581e6"}},"XYZ: Cryptographic Binding and Agility"))),o.a.createElement(r.MDXTag,{name:"p",components:t},"Several others in the wider OAuth community have also provided some great discussions on XYZ and the concepts driving this new work."),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://medium.com/oauth-2/transaction-authorization-or-why-we-need-to-re-think-oauth-scopes-2326e2038948"}},"Transaction Authorization: Or why we need to re-think OAuth scopes")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://aaronparecki.com/2019/07/18/17/adding-identity-to-xyz"}},"Adding Identity to XYZ"))),o.a.createElement(r.MDXTag,{name:"h1",components:t},"Implementations"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Protocol proposals without implementations are merely thought experiments, and XYZ has always sought to ground all of its ideas in trial implementations. To date there are several code bases that can be downloaded, examined, and tried out. These have changed as the protocol has changed, and will continue to do so as GNAP takes shape. As such, things might be quirky or in a somewhat unfinished, experimental state at any time."),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/bspk/oauth.xyz-java"}},"AS and Client in Java, with SPA in React")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/securekey/oauth-xyz-nodejs"}},"AS and Client in NodeJS")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/interop-alliance/oauth-xyz-client-js"}},"Client in JavaScript for SPAs"))),o.a.createElement(r.MDXTag,{name:"p",components:t},"If you have feedback for this website, please see ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/bspk/oauth.xyz-site"}},"its repository")," or ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://bspk.io/contact/"}},"get in touch directly"),"."))},n}(o.a.Component),l={}}}]);
//# sourceMappingURL=component---src-pages-index-mdx-19a23f09402de0d9dc1b.js.map