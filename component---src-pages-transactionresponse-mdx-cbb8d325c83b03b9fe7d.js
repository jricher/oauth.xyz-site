(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"19Mb":function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var a=n("q1tI"),r=n.n(a),o=(n("pJf4"),n("wx14")),c=n("zLVn"),i=n("TSYQ"),s=n.n(i),l=n("vUet"),m=n("dbZe"),u=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.variant,i=e.size,u=e.active,d=e.className,p=e.block,h=e.type,f=e.as,b=Object(c.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),g=Object(l.a)(n,"btn"),y=s()(d,g,u&&"active",g+"-"+a,p&&g+"-block",i&&g+"-"+i);if(b.href)return r.a.createElement(m.a,Object(o.a)({},b,{as:f,ref:t,className:s()(y,b.disabled&&"disabled")}));t&&(b.ref=t),f||(b.type=h);var v=f||"button";return r.a.createElement(v,Object(o.a)({},b,{className:y}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var d=u,p=function(){},h=r.a.forwardRef((function(e,t){var n=e.children,i=e.name,l=e.className,m=e.checked,u=e.type,h=e.onChange,f=e.value,b=e.disabled,g=e.inputRef,y=Object(c.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef"]),v=Object(a.useState)(!1),E=v[0],T=v[1],M=Object(a.useCallback)((function(e){"INPUT"===e.target.tagName&&T(!0)}),[]),D=Object(a.useCallback)((function(e){"INPUT"===e.target.tagName&&T(!1)}),[]);return r.a.createElement(d,Object(o.a)({},y,{ref:t,className:s()(l,E&&"focus",b&&"disabled"),type:null,active:!!m,as:"label"}),r.a.createElement("input",{name:i,type:u,value:f,ref:g,autoComplete:"off",checked:!!m,disabled:!!b,onFocus:M,onBlur:D,onChange:h||p}),n)}));h.displayName="ToggleButton";var f=h,b=(n("OeI1"),n("sc67"),n("QLaP")),g=n.n(b),y=n("JCAc"),v=n("Qg85");n("JHok"),n("AqHK");var E=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.size,i=e.toggle,m=e.vertical,u=e.className,d=e.as,p=void 0===d?"div":d,h=Object(c.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),f=Object(l.a)(n,"btn-group"),b=f;return m&&(b=f+"-vertical"),r.a.createElement(p,Object(o.a)({},h,{ref:t,className:s()(u,b,a&&f+"-"+a,i&&f+"-toggle")}))}));E.displayName="ButtonGroup",E.defaultProps={vertical:!1,toggle:!1,role:"group"};var T=E,M=r.a.forwardRef((function(e,t){var n=Object(y.a)(e,{value:"onChange"}),a=n.children,i=n.type,s=n.name,l=n.value,m=n.onChange,u=Object(c.a)(n,["children","type","name","value","onChange"]),d=function(){return null==l?[]:[].concat(l)};return"radio"!==i||s||g()(!1),r.a.createElement(T,Object(o.a)({},u,{ref:t,toggle:!0}),function(e,t){var n=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,n++):e}))}(a,(function(e){var t=d(),n=e.props,a=n.value,o=n.onChange;return r.a.cloneElement(e,{type:i,name:e.name||s,checked:-1!==t.indexOf(a),onChange:Object(v.a)(o,(function(e){return function(e,t){var n=d(),a=-1!==n.indexOf(e);"radio"!==i?m(a?n.filter((function(t){return t!==e})):[].concat(n,[e]),t):a||m(e,t)}(a,e)}))})})))}));M.defaultProps={type:"radio"},M.Button=f;var D=M;t.a=function(e){var t=e.onChange,n=e.label,a=e.selected,o=e.all,c=e.options;c||(c={on:"On",off:"Off"});var i=[r.a.createElement(f,{variant:"link",disabled:!0,value:"label"},n,": ")].concat(Object.keys(c).map((function(e){return r.a.createElement(f,{variant:o?"warning":"primary",value:e},c[e])})));return r.a.createElement(D,{name:n,value:o?"":a,onChange:t,size:"sm",className:"selector"},i)}},gDrd:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.children.map((function(e,t){return r.a.createElement("li",{key:t},e)}));return r.a.createElement("ul",{className:"selectorList"},t)}},k1ze:function(e,t,n){"use strict";n.r(t);n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/");var a=n("q1tI"),r=n.n(a),o=n("6qfE"),c=n("Bl7J"),i=n("Wbzz"),s=(n("4DPX"),n("BXTI")),l=n("19Mb"),m=n("gDrd");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){d(e,t,n[t])}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).interactionValues={label:"Next Step",redirect:{interaction_url:"https://server.example.com/interact/4CF492MLVMSW9MKMXKHQ",server_nonce:"MBDOFXG4Y5CVJCX821LH"},user_code:{user_code:{url:"https://server.example.com/interact/device",code:"A1BC-3DFF"}},both:{interaction_url:"https://server.example.com/interact/4CF492MLVMSW9MKMXKHQ",server_nonce:"MBDOFXG4Y5CVJCX821LH",user_code:{url:"https://server.example.com/interact/device",code:"A1BC-3DFF"}},didcomm:{didcomm:{"...":"..."}},wait:{wait:30},access_token:{access_token:{value:"OS9M2PMHKUR64TB8N6BW7OZB8CDFONP219RP1LT0",type:"bearer"}}},t.codeValues={handle:{label:"Transaction Handle",on:{value:"80UPRY5NM33OMUKMKSKU",type:"bearer"}},display_handle:{label:"Display Handle",on:{value:"VBUEOIQA82PBY2ZDJW7Q",type:"bearer"}},user_handle:{label:"User Handle",on:{value:"XUT2MFM1XBIKJKSDU8QM",type:"bearer"}},resources_handle:{label:"Resources Handle",on:{value:"KLKP36N7GPOKRF3KGH5N",type:"bearer"}},key_handle:{label:"Key Handle",on:{value:"7C7C4AZ9KHRS6X63AJAO",type:"bearer"}},capabilities:{label:"Capabilities",on:["mtls","jwsd"]},claims:{label:"Claims",on:{subject:"I6W52R97IH",email:"user@example.com",phone:"555-USER",updated_at:"2020-01-01T12:43:29+0000",auth_time:"2020-02-17T21:23:39+0000"}},claims_handle:{label:"Claims Handle",on:{value:"14XF3WKRPKW4RN9AROOC",type:"bearer"}}},t.state={selected:{handle:"on",interaction:"redirect",display_handle:"off",resources_handle:"off",key_handle:"on",user_handle:"off",capabilities:"off",claims:"off",claims_handle:"off"}},t.change=function(e){return function(n){var a=t.state.selected;a[e]=n,"handle"===e&&"off"===n&&(a.interaction="access_token"),"interaction"===e&&"access_token"!==n&&(a.handle="on"),t.setState({selected:a})}},t.render=function(){var e=Object.keys(t.codeValues).reduce((function(e,n){return e[n]=t.codeValues[n][t.state.selected[n]],e}),{}),n=u({},t.interactionValues[t.state.selected.interaction],e),a=[r.a.createElement(l.a,{onChange:t.change("interaction"),label:t.interactionValues.label,selected:t.state.selected.interaction,options:{redirect:"Redirect",user_code:"User Code",both:"Both",didcomm:"DIDComm",wait:"Wait",access_token:"Token"}})].concat(Object.keys(t.codeValues).map((function(e){return r.a.createElement(l.a,{onChange:t.change(e),label:t.codeValues[e].label,selected:t.state.selected[e]})})));return r.a.createElement("div",null,r.a.createElement(m.a,null,a),r.a.createElement(s.a,{from:"as",to:"client",code:n}))},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a}(r.a.Component),h=n("vrFN");n.d(t,"default",(function(){return b})),n.d(t,"_frontmatter",(function(){return g}));var f={},b=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).layout=c.a,n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},f,n),components:t},r.a.createElement(h.a,{title:"Transaction Response",keywords:["oauth","authorization","security"]}),r.a.createElement(o.MDXTag,{name:"h1",components:t},"Transaction Response"),r.a.createElement(o.MDXTag,{name:"p",components:t},"The response from the transaction endpoint tells the client what it needs to do next, including if it needs to ",r.a.createElement(i.Link,{to:"/interaction"},"interact with the user")," and any ",r.a.createElement(i.Link,{to:"/tokens"},"tokens that have been issued"),". "),r.a.createElement(o.MDXTag,{name:"p",components:t},"If the transaction can be continued by the client, the AS includes a transaction handle in the response as well. This handle is used by the client for any subsequent references to this transaction. "),r.a.createElement(o.MDXTag,{name:"p",components:t},"The response can also include handles that the client can use in future transactions in lieu of any of the request sections."),r.a.createElement(p,null),r.a.createElement(o.MDXTag,{name:"p",components:t},"Each of these sections is detailed below."),r.a.createElement(o.MDXTag,{name:"h2",components:t},"Next action"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Foremost, the AS needs to tell the client what to do next. This may be getting the user to ",r.a.createElement(i.Link,{to:"/interaction"},"interact with the AS directly"),", waiting until polling again, or heading to the resource server to ",r.a.createElement(i.Link,{to:"/tokens"},"use the token"),". "),r.a.createElement(o.MDXTag,{name:"p",components:t},"Both the interaction and poll-wait style responses require the transaction handle, below, in order to continue. If a transaction handle is included with the access token response, the client can use this handle to get a new access token in the event the first one expires or is revoked, so long as the transaction handle is still valid. "),r.a.createElement(o.MDXTag,{name:"h2",components:t},"Transaction Handle"),r.a.createElement(o.MDXTag,{name:"p",components:t},"This ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"handle")," is used by the client to continue the transaction from its previous state. The value returned by the AS is unique, random, and not reused by the AS. That is to say, an ongoing transaction will be represented by a single handle at a given time, and that handle will change over time. This is used in the ",r.a.createElement(i.Link,{to:"/transactionrequest"},"transaction continuation request"),". "),r.a.createElement(o.MDXTag,{name:"h2",components:t},"Display Handle"),r.a.createElement(o.MDXTag,{name:"p",components:t},"If a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"display_handle")," is returned by the AS, the client can use this handle in lieu of the information sent in the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"display")," block in the request for future transactions. "),r.a.createElement(o.MDXTag,{name:"h2",components:t},"User Handle"),r.a.createElement(o.MDXTag,{name:"p",components:t},"If a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"user_handle")," is returned by the AS, the client can use this handle in lieu of the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"user")," portion of the transaction request to represent the same user in future requests, akin to UMA 2's PCT."),r.a.createElement(o.MDXTag,{name:"h2",components:t},"Resource Handle"),r.a.createElement(o.MDXTag,{name:"p",components:t},"If a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"resources_handle")," is returned by the AS, the client can use this handle in lieu of the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"resource")," portions of the transaction request to request the same set of resources in a future transaction. "),r.a.createElement(o.MDXTag,{name:"h2",components:t},"Key Handle"),r.a.createElement(o.MDXTag,{name:"p",components:t},"If a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"key_handle")," is returned by the AS, the client can use this handle in lieu of the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"key")," section of the transaction request to reference the same key presented and proved by the client in this transaction. When presenting such key handles in a future request, the client must still ",r.a.createElement(i.Link,{to:"/keys"},"bind the request to the referenced key"),"."),r.a.createElement(o.MDXTag,{name:"h2",components:t},"Capabilities"),r.a.createElement(o.MDXTag,{name:"p",components:t},"If a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"capabilities")," section is sent by the client, the AS parses it and returns an array of all the capabilities that this AS can support for this transaction. This allows the client to dynamically self-configure for the transaction. "),r.a.createElement(o.MDXTag,{name:"blockquote",components:t},r.a.createElement(o.MDXTag,{name:"p",components:t,parentName:"blockquote"},"This piece is effectively a discovery response, but tied directly to the transaction endpoint. This means the client knows the AS as only its transaction endpoint URL and can get everything else it needs from there. ")),r.a.createElement(o.MDXTag,{name:"h2",components:t},"Claims"),r.a.createElement(o.MDXTag,{name:"p",components:t},"If a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"claims")," section is returned by the AS, it contains information about the user currently logged in to the AS. This information should be minimal to avoid privacy and data consistency problems. "),r.a.createElement(o.MDXTag,{name:"h2",components:t},"Claims Handle"),r.a.createElement(o.MDXTag,{name:"p",components:t},"If a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"claims_handle")," is returned by the AS, the client can use this handle in lieu of the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"claims")," section of the transaction request to reference the same set of claims information in future requests."))},a}(r.a.Component),g={}}}]);
//# sourceMappingURL=component---src-pages-transactionresponse-mdx-cbb8d325c83b03b9fe7d.js.map