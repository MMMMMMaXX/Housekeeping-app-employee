(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e7aa040"],{"057f":function(t,e,r){var n=r("fc6a"),a=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return a(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?c(t):a(n(t))}},"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),o=r("17c2"),i=r("9112");for(var c in a){var f=n[c],u=f&&f.prototype;if(u&&u.forEach!==o)try{i(u,"forEach",o)}catch(s){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),o=a("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");var n=r("ade3");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var n=r("428f"),a=r("5135"),o=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});a(e,t)||i(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),a=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?a.f(t,i,o(0,r)):t[i]=r}},"91d4":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-sticky",{attrs:{"offset-top":0}},[r("van-nav-bar",{attrs:{title:"实名认证","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}})],1),t._m(0),r("van-divider",{style:{color:"#1989fa",borderColor:"#1989fa",padding:"0 16px"}}),r("van-form",{on:{submit:t.onSubmit}},[r("van-field",{attrs:{name:"realname",label:"真实姓名",placeholder:"真实姓名",rules:[{required:!0,message:"请填写真实姓名"}]},model:{value:t.realname,callback:function(e){t.realname=e},expression:"realname"}}),r("van-field",{attrs:{name:"idCard",label:"身份证号",placeholder:"身份证号",rules:[{required:!0,message:"请填写身份证号"}]},model:{value:t.idCard,callback:function(e){t.idCard=e},expression:"idCard"}}),r("van-field",{attrs:{name:"bankCard",label:"银行卡号",placeholder:"银行卡号",rules:[{required:!0,message:"请填写银行卡号"}]},model:{value:t.bankCard,callback:function(e){t.bankCard=e},expression:"bankCard"}}),r("van-field",{attrs:{name:"idcardPhotoPositive",label:"身份证正面照"},scopedSlots:t._u([{key:"input",fn:function(){return[r("van-uploader",{attrs:{"max-count":1,"after-read":t.afterRead1},model:{value:t.idcardPhotoPositive,callback:function(e){t.idcardPhotoPositive=e},expression:"idcardPhotoPositive"}})]},proxy:!0}])}),r("van-field",{attrs:{name:"idcardPhotoNegative",label:"身份证反面照"},scopedSlots:t._u([{key:"input",fn:function(){return[r("van-uploader",{attrs:{"max-count":1,"after-read":t.afterRead2},model:{value:t.idcardPhotoNegative,callback:function(e){t.idcardPhotoNegative=e},expression:"idcardPhotoNegative"}})]},proxy:!0}])}),r("van-field",{attrs:{name:"bankCardPhoto",label:"银行卡照片"},scopedSlots:t._u([{key:"input",fn:function(){return[r("van-uploader",{attrs:{"max-count":1,"after-read":t.afterRead3},model:{value:t.bankCardPhoto,callback:function(e){t.bankCardPhoto=e},expression:"bankCardPhoto"}})]},proxy:!0}])}),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{staticClass:"addBtn",attrs:{round:"",block:"",type:"info",color:"linear-gradient(to right, #c2e59c, #64b3f4)","native-type":"submit"}},[t._v("提交")])],1),r("div",{staticStyle:{height:"100px"}})],1)],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticStyle:{"text-align":"center",color:"#1989fa"}},[t._v("进行实名认证")]),r("p",{staticStyle:{"text-align":"center",color:"#1989fa"}},[t._v(" 用于保障账号的安全及快速接收订单信息 ")])])}],o=r("1da1"),i=r("5530"),c=(r("96cf"),r("dac6")),f=r("2f62"),u="http://121.199.29.84:8888/group1/",s="http://121.199.29.84:8001/file/upload",l=r("bc3a"),d=r.n(l),b=r("d399"),p={data:function(){return{uploadFileURL:s,realname:"",idCard:"",bankCard:"",idcardPhotoPositive:[],idcardPhotoNegative:[],bankCardPhoto:[],imageUrl1:"",imageUrl2:"",imageUrl3:""}},computed:Object(i["a"])({},Object(f["d"])("user",["userInfo"])),methods:Object(i["a"])(Object(i["a"])({},Object(f["b"])("user",["getUserInfo"])),{},{onClickLeft:function(){this.$router.go(-1)},onSubmit:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={realname:e.realname,idCard:e.idCard,bankCard:e.bankCard,idcardPhotoPositive:e.imageUrl1,idcardPhotoNegative:e.imageUrl2,bankCardPhoto:e.imageUrl3,userId:e.userInfo.id},t.next=3,Object(c["b"])("/certification/submitCertificationApply",Object(i["a"])({},r));case 3:n=t.sent,200===n.status?(b["a"].success(n.data.message),setTimeout((function(){e.$router.go(-1)}),1e3)):b["a"].fail(n.data.message);case 5:case"end":return t.stop()}}),t)})))()},afterRead1:function(t){var e=this;console.log(t);var r=new FormData;r.append("file",t.file),d.a.post(s,r,{headers:{"content-type":"multer/form-data"}}).then((function(t){e.imageUrl1=u+t.data.data.id,console.log(e.imageUrl1)}))},afterRead2:function(t){var e=this;console.log(t);var r=new FormData;r.append("file",t.file),d.a.post(s,r,{headers:{"content-type":"multer/form-data"}}).then((function(t){e.imageUrl2=u+t.data.data.id,console.log(e.imageUrl2)}))},afterRead3:function(t){var e=this;console.log(t);var r=new FormData;r.append("file",t.file),d.a.post(s,r,{headers:{"content-type":"multer/form-data"}}).then((function(t){e.imageUrl3=u+t.data.data.id,console.log(e.imageUrl3)}))}}),created:function(){this.getUserInfo()},mounted:function(){}},v=p,m=(r("e7bf"),r("2877")),h=Object(m["a"])(v,n,a,!1,null,"5501323a",null);e["default"]=h.exports},a4d3:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),o=r("d066"),i=r("c430"),c=r("83ab"),f=r("4930"),u=r("fdbf"),s=r("d039"),l=r("5135"),d=r("e8b5"),b=r("861d"),p=r("825a"),v=r("7b0b"),m=r("fc6a"),h=r("c04e"),g=r("5c6c"),y=r("7c73"),O=r("df75"),P=r("241c"),w=r("057f"),j=r("7418"),k=r("06cf"),S=r("9bf2"),x=r("d1e7"),C=r("9112"),U=r("6eeb"),E=r("5692"),N=r("f772"),_=r("d012"),D=r("90e3"),R=r("b622"),F=r("e538"),I=r("746f"),J=r("d44e"),$=r("69f3"),q=r("b727").forEach,L=N("hidden"),T="Symbol",A="prototype",B=R("toPrimitive"),Q=$.set,W=$.getterFor(T),z=Object[A],G=a.Symbol,H=o("JSON","stringify"),K=k.f,M=S.f,V=w.f,X=x.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),rt=E("wks"),nt=a.QObject,at=!nt||!nt[A]||!nt[A].findChild,ot=c&&s((function(){return 7!=y(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=K(z,e);n&&delete z[e],M(t,e,r),n&&t!==z&&M(z,e,n)}:M,it=function(t,e){var r=Y[t]=y(G[A]);return Q(r,{type:T,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ft=function(t,e,r){t===z&&ft(Z,e,r),p(t);var n=h(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,L)&&t[L][n]&&(t[L][n]=!1),r=y(r,{enumerable:g(0,!1)})):(l(t,L)||M(t,L,g(1,{})),t[L][n]=!0),ot(t,n,r)):M(t,n,r)},ut=function(t,e){p(t);var r=m(e),n=O(r).concat(pt(r));return q(n,(function(e){c&&!lt.call(r,e)||ft(t,e,r[e])})),t},st=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=h(t,!0),r=X.call(this,e);return!(this===z&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,L)&&this[L][e])||r)},dt=function(t,e){var r=m(t),n=h(e,!0);if(r!==z||!l(Y,n)||l(Z,n)){var a=K(r,n);return!a||!l(Y,n)||l(r,L)&&r[L][n]||(a.enumerable=!0),a}},bt=function(t){var e=V(m(t)),r=[];return q(e,(function(t){l(Y,t)||l(_,t)||r.push(t)})),r},pt=function(t){var e=t===z,r=V(e?Z:m(t)),n=[];return q(r,(function(t){!l(Y,t)||e&&!l(z,t)||n.push(Y[t])})),n};if(f||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),r=function(t){this===z&&r.call(Z,t),l(this,L)&&l(this[L],e)&&(this[L][e]=!1),ot(this,e,g(1,t))};return c&&at&&ot(z,e,{configurable:!0,set:r}),it(e,t)},U(G[A],"toString",(function(){return W(this).tag})),U(G,"withoutSetter",(function(t){return it(D(t),t)})),x.f=lt,S.f=ft,k.f=dt,P.f=w.f=bt,j.f=pt,F.f=function(t){return it(R(t),t)},c&&(M(G[A],"description",{configurable:!0,get:function(){return W(this).description}}),i||U(z,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:G}),q(O(rt),(function(t){I(t)})),n({target:T,stat:!0,forced:!f},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=G(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!c},{create:st,defineProperty:ft,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:s((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(v(t))}}),H){var vt=!f||s((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,a=[t],o=1;while(arguments.length>o)a.push(arguments[o++]);if(n=e,(b(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),a[1]=e,H.apply(null,a)}})}G[A][B]||C(G[A],B,G[A].valueOf),J(G,T),_[L]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ade3:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},b64b:function(t,e,r){var n=r("23e7"),a=r("7b0b"),o=r("df75"),i=r("d039"),c=i((function(){o(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return o(a(t))}})},dbb4:function(t,e,r){var n=r("23e7"),a=r("83ab"),o=r("56ef"),i=r("fc6a"),c=r("06cf"),f=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),a=c.f,u=o(n),s={},l=0;while(u.length>l)r=a(n,e=u[l++]),void 0!==r&&f(s,e,r);return s}})},e439:function(t,e,r){var n=r("23e7"),a=r("d039"),o=r("fc6a"),i=r("06cf").f,c=r("83ab"),f=a((function(){i(1)})),u=!c||f;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e7bf:function(t,e,r){"use strict";r("fb50")},fb50:function(t,e,r){}}]);
//# sourceMappingURL=chunk-6e7aa040.b8de5c6c.js.map