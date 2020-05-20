(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t){},122:function(e,t){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),s=(a(84),a(16)),o=a(17),i=a(19),m=a(18),u=(a(85),a(5)),d=(a(86),a(6)),p=a(7),h=r.a.createElement(d.a,{icon:p.c,size:"2x",color:"#d1d1cc"}),g=r.a.createElement(d.a,{icon:p.g,size:"2x",color:"#d1d1cc"}),E=r.a.createElement(d.a,{icon:p.d,size:"2x",color:"#d1d1cc"}),f=r.a.createElement(d.a,{icon:p.k,size:"2x",color:"#d1d1cc"}),v=function(e){return r.a.createElement("nav",{className:"Navbar"},r.a.createElement(u.c,{exact:!0,to:"/explore",className:"NavLink",activeClassName:"NavLinkActive"},r.a.createElement("i",null,h),r.a.createElement("span",null,"Explore")),r.a.createElement(u.c,{exact:!0,to:"/spot-a-place",className:"NavLink",activeClassName:"NavLinkActive"},r.a.createElement("i",null,g),r.a.createElement("span",null,"Spot a place")),r.a.createElement(u.c,{exact:!0,to:"/favorites",className:"NavLink",activeClassName:"NavLinkActive"},r.a.createElement("i",null,E),r.a.createElement("span",null,"Favorites")),r.a.createElement(u.c,{exact:!0,to:"/profile",className:"NavLink",activeClassName:"NavLinkActive"},r.a.createElement("i",null,f),r.a.createElement("span",null,"Profile")))},b=a(8),N=(a(92),function(e){return e.user?r.a.createElement(b.a,{to:"/explore"}):r.a.createElement("div",{className:"StartPage"},r.a.createElement("img",{className:"Logo",src:"../images/logo.svg",alt:"Logo"}),r.a.createElement("h1",null,"Welcome to Hidden Places!"),r.a.createElement("p",{className:"MediumText"},"There are many cool places hidden around the world which are not famous sightseeing. In this App, you can spot and find those places and have an amazing experience."),r.a.createElement("div",{className:"Container"},r.a.createElement(u.b,{to:"/login",className:"PrimaryButton"},"Sign in"),r.a.createElement(u.b,{to:"/signup",className:"SecondaryButton"},"Create an account")))}),y=a(25),C=(a(93),a(74)),j=a.n(C),x=(a(109),a(110),a(24)),O=(a(111),a(11)),S=a.n(O),k=r.a.createElement(d.a,{icon:p.h,style:{color:"#00C4CC"}});function w(e){var t=Object(n.useState)({latitude:52.5196,longitude:13.4069,width:"100%",height:"50%",zoom:10}),a=Object(y.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)([]),o=Object(y.a)(s,2),i=o[0],m=o[1];Object(n.useEffect)((function(){S.a.get("/spotaphoto/places").then((function(e){console.log(e.data),m(e.data)})).catch((function(e){console.log(e)}))}),[]);var d={autoplay:!0,dots:!1,fade:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,className:"slides",autoplaySpeed:"100"};return r.a.createElement("div",{className:"Explore"},r.a.createElement(j.a,d,i.length?i.slice(1).map((function(e,t){return r.a.createElement("div",{key:e._id},r.a.createElement("div",{className:"DescriptionPhoto"},r.a.createElement("span",null,e.name)," ",r.a.createElement("br",null),r.a.createElement("span",null,e.country," - ",e.city)),r.a.createElement("img",{src:e.imgPath,width:"100%",alt:""}))})):null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"DescriptionPhoto"},r.a.createElement("span",null,"A French railway station")," ",r.a.createElement("br",null),r.a.createElement("span",null,"Germany - Berlin")),r.a.createElement("img",{src:"http://res.cloudinary.com/dcminvnrd/image/upload/v1589581947/hidden-places/gare-francaise-french-railway-station-tegel-berlin.jpg.jpg",alt:""})))),r.a.createElement("h1",null,"Hello \xa0",e.user.username.charAt(0).toUpperCase()+e.user.username.slice(1)),r.a.createElement("form",{className:"Form"},r.a.createElement("div",{className:"InputContainer"},r.a.createElement("i",null,k),r.a.createElement("label",{htmlFor:"name"}),r.a.createElement("input",{placeholder:"Discover places",type:"text",name:"search",id:"search"}))),r.a.createElement(x.b,Object.assign({className:"Map"},l,{mapboxApiAccessToken:"pk.eyJ1Ijoiam9ueXN0biIsImEiOiJja2E3YmZncmUwMWhlMnNtdHRvOHd1N2h5In0.F84zh6Rd6D-8dVSavGN9xg",mapStyle:"mapbox://styles/jonystn/ckaedf2980f0g1ip7h8bdn246",onViewportChange:function(e){c(e)}}),i.length?i.map((function(e){return r.a.createElement(x.a,{key:e._id,latitude:e.latitude,longitude:e.longitude},r.a.createElement(u.b,{to:"/place-info/".concat(e._id)},r.a.createElement("img",{className:"Marker",src:e.imgPath,alt:""})))})):null))}a(145);var F=r.a.createElement(d.a,{icon:p.j,style:{color:"#00C4CC"}}),P=r.a.createElement(d.a,{icon:p.i,style:{color:"#ffad14"}});var D=function(e){var t=Object(n.useState)([]),a=Object(y.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){console.log(e.user),S.a.get("/user/favorites/".concat(e.user._id)).then((function(e){console.log(e.data,"USER"),c(e.data.favorites)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"Favorites"},0===l.length&&r.a.createElement("div",{className:"NoFav"},r.a.createElement("span",null,"Oh, it looks you don't have favorites yet.")),l&&l.map((function(e,t){return r.a.createElement("div",{className:"FavItem"},r.a.createElement("div",{className:"Container"},r.a.createElement(u.b,{to:"/place-info/".concat(e._id)},r.a.createElement("img",{className:"Photo",src:e.imgPath,alt:""})),r.a.createElement("span",{className:"MediumTextBold"},e.name),r.a.createElement("div",{className:"ContainerRating"},r.a.createElement("div",{className:"Rating"},r.a.createElement("i",null,P),r.a.createElement("i",null,P),r.a.createElement("i",null,P),r.a.createElement("i",null,P),r.a.createElement("i",null,P)),r.a.createElement("i",{className:"DeleteFavorite"},F))))})))},M=a(22),U=function(e,t,a){return S.a.post("/auth/signup",{username:e,password:t,email:a}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},L=function(e,t){return S.a.post("/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},I=(a(146),r.a.createElement(d.a,{icon:p.f,style:{color:"#00C4CC"}})),T=r.a.createElement(d.a,{icon:p.k,style:{color:"#00C4CC"}}),A=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",message:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(M.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;L(n,r).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/explore"))}))},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.user?r.a.createElement(b.a,{to:"/explore"}):r.a.createElement("div",{className:"Login"},r.a.createElement("div",{className:"Container"},r.a.createElement("h1",null,"Nice to meet you! Log in now!"),r.a.createElement(u.b,{to:"/signup"},r.a.createElement("span",{className:"MediumText"},"Don\u2019t you have an account yet?")," ",r.a.createElement("span",{className:"Hyperlink"},"Sing up!")),r.a.createElement("form",{className:"Form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"InputContainer"},r.a.createElement("i",null,T),r.a.createElement("label",{htmlFor:"username"}),r.a.createElement("input",{placeholder:"Username",type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username",autocomplete:"off",required:!0})),r.a.createElement("div",{className:"InputContainer"},r.a.createElement("i",null,I),r.a.createElement("label",{htmlFor:"password"}),r.a.createElement("input",{placeholder:"Password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password",required:!0})),r.a.createElement("div",{className:"Message"},"\xa0",this.state.message&&r.a.createElement("span",null,this.state.message)),r.a.createElement("button",{type:"submit",className:"PrimaryButton"},"Sing in")),r.a.createElement("span",{className:"MediumText"},"or continue with"),r.a.createElement("img",{src:"../images/facebook.svg",alt:"Facebook logo"}),r.a.createElement("img",{src:"../images/google.svg",alt:"Google logo"})))}}]),a}(n.Component),_=(a(147),r.a.createElement(d.a,{icon:p.d})),B=r.a.createElement(d.a,{icon:p.i,style:{color:"#ffad14"}}),G=r.a.createElement(d.a,{icon:p.a,style:{color:"#00C4CC"}});function R(e){var t=Object(b.g)(),a=Object(n.useState)({}),l=Object(y.a)(a,2),c=l[0],s=l[1],o=Object(n.useState)(!1),i=Object(y.a)(o,2),m=i[0],d=i[1],p=Object(n.useState)([]),h=Object(y.a)(p,2),g=h[0],E=h[1];return Object(n.useEffect)((function(){var t=e.match.params.id,a=e.user.favorites.find((function(t){return t===e.match.params.id}));d(!!a),S.a.get("/place-info/".concat(t)).then((function(e){E(e.data),s({latitude:e.data.latitude,longitude:e.data.longitude,width:"100%",height:"37%",zoom:12})})).catch((function(e){console.log(e)}))}),[]),g.length<1?r.a.createElement("div",null):r.a.createElement("div",{className:"PlaceInfo"},r.a.createElement(x.b,Object.assign({className:"Map"},c,{mapboxApiAccessToken:"pk.eyJ1Ijoiam9ueXN0biIsImEiOiJja2E3YmZncmUwMWhlMnNtdHRvOHd1N2h5In0.F84zh6Rd6D-8dVSavGN9xg",mapStyle:"mapbox://styles/jonystn/ckaedf2980f0g1ip7h8bdn246",onViewportChange:function(e){s(e)}}),r.a.createElement(u.b,{onClick:function(){return t.goBack()}},r.a.createElement("div",{className:"BackBtn"},G)),r.a.createElement(x.a,{latitude:g.latitude,longitude:g.longitude},r.a.createElement("img",{className:"Marker",src:g.imgPath,alt:""}))),r.a.createElement("div",{className:"PlaceInfoTab"},r.a.createElement("span",{className:"MediumTextBold"},g.name),r.a.createElement("div",null,r.a.createElement("div",{className:"Rating"},r.a.createElement("i",null,B),r.a.createElement("i",null,B),r.a.createElement("i",null,B),r.a.createElement("i",null,B),r.a.createElement("i",null,B)),r.a.createElement("button",{type:"button",onClick:function(){var t=!m;S.a.put("/user/favorites/".concat(e.match.params.id)).then((function(e){console.log(e.data,"USER"),d(t)})).catch((function(e){console.log(e)}))}},r.a.createElement("i",{className:m?"FavoriteActive":"Favorite"},_))),r.a.createElement("p",{className:"MediumText"},g.comment),r.a.createElement("img",{className:"Photo",src:g.imgPath,alt:""})))}a(148);var z=function(e){S.a.delete("/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))},H=function(e){return r.a.createElement("div",{className:"Profile"},r.a.createElement("img",{className:"Logo",src:"../images/logo.svg",alt:"Logo"}),r.a.createElement("h1",null,e.user.username.charAt(0).toUpperCase()+e.user.username.slice(1)),r.a.createElement("span",null,"E-mail:"),r.a.createElement("p",{className:"MediumText"},e.user.email),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(u.b,{to:"/login",onClick:function(){return z(e)},className:"PrimaryButton"},"Sign out"))))},J=(a(149),r.a.createElement(d.a,{icon:p.b,style:{color:"#00C4CC"}})),V=r.a.createElement(d.a,{icon:p.f,style:{color:"#00C4CC"}}),W=r.a.createElement(d.a,{icon:p.k,style:{color:"#00C4CC"}}),q=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",email:"",message:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(M.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password,l=a.email;U(n,r,l).then((function(t){t.message?e.setState({message:t.message,email:"",username:"",password:""}):(e.props.setUser(t),e.props.history.push("/explore"))}))},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.user?r.a.createElement(b.a,{to:"/explore"}):r.a.createElement("div",{className:"Signup"},r.a.createElement("div",{className:"Container"},r.a.createElement("h1",null,"Create your free account!"),r.a.createElement(u.b,{to:"/login"},r.a.createElement("span",{className:"MediumText"},"Do you already have an account?")," ",r.a.createElement("span",{className:"Hyperlink"},"Sign in!")),r.a.createElement("form",{className:"Form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"InputContainer"},r.a.createElement("i",null,W),r.a.createElement("label",{htmlFor:"username"}),r.a.createElement("input",{placeholder:"Username",type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username",autocomplete:"off",required:!0})),r.a.createElement("div",{className:"InputContainer"},r.a.createElement("i",null,J),r.a.createElement("label",{htmlFor:"email"}),r.a.createElement("input",{placeholder:"E-mail",value:this.state.email,onChange:this.handleChange,type:"email",name:"email",required:!0})),r.a.createElement("div",{className:"InputContainer"},r.a.createElement("i",null,V),r.a.createElement("label",{htmlFor:"password"}),r.a.createElement("input",{placeholder:"Password - Minimum 6 characters",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password",required:!0})),r.a.createElement("div",{className:"Message"},"\xa0",this.state.message&&r.a.createElement("span",null,this.state.message)),r.a.createElement("button",{type:"submit",className:"PrimaryButton"},"Sing up")),r.a.createElement("span",{className:"MediumText"},"or continue with"),r.a.createElement("img",{src:"../images/facebook.svg",alt:"Facebook logo"}),r.a.createElement("img",{src:"../images/google.svg",alt:"Google logo"})))}}]),a}(n.Component),X=a(46),Y=(a(72),{fill:"#00C4CC",stroke:"#ffffff"}),Z=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.createElement("svg",{className:"Pin",width:"65",height:"65",viewBox:"0 0 29 28",style:Y},n.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"}))}}]),a}(n.PureComponent),$=a(77),K=a(37),Q=a(47),ee=a.n(Q),te=r.a.createElement(d.a,{icon:p.e,style:{color:"#00C4CC"}}),ae=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onChange=e.onChange.bind(Object(K.a)(e)),e.state={files:[],uploadText:"Choose a photo"},e}return Object(o.a)(a,[{key:"onChange",value:function(e){var t=this;this.setState({uploadText:"Uploading \u21ba"});var a=new FormData;function n(e,t,a,n){var r=e+t/60+a/3600;return"S"!==n&&"W"!==n||(Object($.a)("dd"),r*=-1),r}a.append("imageUrl",e.target.files[0]),S.a.post("/spotaphoto/upload",a).then((function(e){console.log(e.data),t.props.handleFile(e.data),t.setState({uploadText:"Uploaded \u2714"})})),console.log(this.state.files),this.state.files&&ee.a.getData(this.state.files,(function(){if(ee.a.pretty(this)){var e=this.state.files,t=n(e.exifdata.GPSLatitude[0].numerator,e.exifdata.GPSLatitude[1].numerator,e.exifdata.GPSLatitude[2].numerator,e.exifdata.GPSLatitudeRef);console.log(t);var a=n(e.exifdata.GPSLongitude[0].numerator,e.exifdata.GPSLongitude[1].numerator,e.exifdata.GPSLongitude[2].numerator,e.exifdata.GPSLongitudeRef);console.log(a)}}))}},{key:"removeFile",value:function(e){this.setState({files:this.state.files.filter((function(t){return t!==e}))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"FileUploadContainer"},r.a.createElement("label",{className:"FileUpload"},r.a.createElement("input",{type:"file",name:"photo","data-cloudinary-field":"image_id",onChange:function(t){return e.onChange(t)}}),r.a.createElement("i",null,te),this.state.uploadText),this.state.files.map((function(t){return r.a.createElement("div",{className:"FilePreview",onClick:e.removeFile.bind(e,t)},t.name)})))}}]),a}(r.a.Component),ne=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(M.a)({},t,a))},n.handleFile=function(e){console.log("FILE",e),n.setState({file:e})},n.handleSubmit=function(e){e.preventDefault(),console.log("HERE",n.state.file),S.a.post("/spotaphoto/places",{comment:n.state.comment,name:n.state.name,latitude:n.state.marker.latitude,longitude:n.state.marker.longitude,file:n.state.file}).then((function(e){console.log(e.data),n.props.history.push("/place-info/".concat(e.data._id)),n.setState({name:" ",comment:" ",file:" "})}))},n._updateViewport=function(e){n.setState({viewport:e})},n._onMarkerDragStart=function(e){n._logDragEvent("onDragStart",e)},n._onMarkerDrag=function(e){n._logDragEvent("onDrag",e)},n._onMarkerDragEnd=function(e){n._logDragEvent("onDragEnd",e),n.setState({marker:{longitude:e.lngLat[0],latitude:e.lngLat[1]}})},n.state={viewport:{latitude:52.5196,longitude:13.4069,width:"100%",height:"37%",zoom:15},marker:{latitude:52.5196,longitude:13.4069},events:{},comment:"",name:"",file:""},n}return Object(o.a)(a,[{key:"_logDragEvent",value:function(e,t){this.setState({events:Object(X.a)(Object(X.a)({},this.state.events),{},Object(M.a)({},e,t.lngLat))})}},{key:"render",value:function(){var e=this.state,t=e.viewport,a=e.marker;return n.createElement("div",{className:"SpotAPlace"},n.createElement("form",{className:"Form",onSubmit:this.handleSubmit,enctype:"multipart/form-data"},n.createElement("div",{className:"InputContainer"},n.createElement("label",{htmlFor:"name"}),n.createElement("input",{placeholder:"Choose a nice name for your place",type:"text",name:"name",id:"name",value:this.state.name,onChange:this.handleChange,autocomplete:"off",required:!0})),n.createElement("textarea",{className:"TextBox",placeholder:"Describe your hidden place using a maximum of 180 characters. ",type:"text",name:"comment",id:"comment",value:this.state.comment,maxLength:"180",onChange:this.handleChange}),n.createElement(ae,{handleFile:this.handleFile}),n.createElement("button",{type:"submit",className:"PrimaryButton"},"Post a place")),n.createElement(x.b,Object.assign({},t,{width:"100%",height:"50%",mapStyle:"mapbox://styles/jonystn/ckaedf2980f0g1ip7h8bdn246",onViewportChange:this._updateViewport,mapboxApiAccessToken:"pk.eyJ1Ijoiam9ueXN0biIsImEiOiJja2E3YmZncmUwMWhlMnNtdHRvOHd1N2h5In0.F84zh6Rd6D-8dVSavGN9xg"}),n.createElement("span",{className:"DragAndDrop MediumTextBold"},"Drag and drop the pin to spot a hidden place"),n.createElement(x.a,{longitude:a.longitude,latitude:a.latitude,offsetTop:-20,offsetLeft:-10,draggable:!0,onDragStart:this._onMarkerDragStart,onDrag:this._onMarkerDrag,onDragEnd:this._onMarkerDragEnd},n.createElement(Z,{size:20}))))}}]),a}(n.Component);var re=a(78),le=function(e){var t=e.component,a=e.user,n=Object(re.a)(e,["component","user"]);return r.a.createElement(b.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,Object.assign({user:a},n,e)):r.a.createElement(b.a,{to:"/"})}}))},ce=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={user:e.props.user},e.setUser=function(t){e.setState({user:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",render:function(t){return r.a.createElement(N,Object.assign({user:e.state.user},t))}}),r.a.createElement(b.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(A,Object.assign({setUser:e.setUser,user:e.state.user},t))}}),r.a.createElement(b.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(q,Object.assign({setUser:e.setUser,user:e.state.user},t))}}),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.b,{exact:!0,path:"/place-info/:id",render:function(t){return r.a.createElement(R,Object.assign({setUser:e.setUser,user:e.state.user},t))}}),r.a.createElement(b.b,{exact:!0,path:"/spot-a-place",render:function(t){return r.a.createElement(ne,Object.assign({setUser:e.setUser,user:e.state.user},t))}}),r.a.createElement(b.b,{exact:!0,path:"/favorites",render:function(t){return r.a.createElement(D,Object.assign({setUser:e.setUser,user:e.state.user},t))}}),r.a.createElement(b.b,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(H,Object.assign({setUser:e.setUser,user:e.state.user},t))}}),r.a.createElement(le,{exact:!0,path:"/explore",user:this.state.user,component:w}),r.a.createElement(le,{user:this.state.user,component:v})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));S.a.get("/auth/loggedin").then((function(e){console.log(e);var t=e.data;c.a.render(r.a.createElement(u.a,null,r.a.createElement(ce,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){},79:function(e,t,a){e.exports=a(150)},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.1a26f54d.chunk.js.map