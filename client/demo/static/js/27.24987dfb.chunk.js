(this["webpackJsonpreservierungssystem-tennis"]=this["webpackJsonpreservierungssystem-tennis"]||[]).push([[27,28],{400:function(e,r,n){"use strict";n.r(r),n.d(r,"demoControl",(function(){return g})),n.d(r,"DemoControls",(function(){return p}));var t=n(33),i=n(3),a=n(189),s=n(278),u=n(72),o=n(0),d=n(30),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}}]},name:"experiment",theme:"outlined"},l=n(36),m=function(e,r){return o.createElement(l.a,Object.assign({},e,{ref:r,icon:c}))};m.displayName="ExperimentOutlined";var v=o.forwardRef(m),f=n(57),b=n(85),h=n(86),g={};function p(){var e=Object(o.useContext)(f.b),r=e.user,n=e.setUser,c=Object(o.useState)(!0),l=Object(t.a)(c,2),m=l[0],p=l[1],k=Object(h.a)(b.i,n),I=Object(t.a)(k,2)[1],y=Object(d.g)();g.history=y;var j=Object(d.h)();return Object(o.useEffect)((function(){m?a.a.info({key:"demo",message:"Demo Modus",duration:0,placement:"bottomRight",icon:Object(i.jsx)(v,{}),onClose:function(){return p(!1)},description:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("p",{children:"Dies ist eine Demo, gef\xfcllt mit Beispieldaten."}),Object(i.jsxs)(s.b,{direction:"vertical",children:["/kiosk"===j.pathname?Object(i.jsx)(u.a,{size:"middle",onClick:function(){return y.push("/")},children:"Kiosk Modus verlassen"}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u.a,{size:"middle",onClick:function(){return y.push("/kiosk")},children:"Kiosk Modus"}),2!==(null===r||void 0===r?void 0:r.userId)&&Object(i.jsx)(u.a,{size:"middle",onClick:function(){return I(null,{type:"plain",mail:"otto@example.com",password:"demo"})},children:"Als Admin (Otto) anmelden"}),9!==(null===r||void 0===r?void 0:r.userId)&&Object(i.jsx)(u.a,{size:"middle",onClick:function(){return I(null,{type:"plain",mail:"max@example.com",password:"demo"})},children:"Als Nutzer (Max) anmelden"})]}),Object(i.jsx)(u.a,{size:"middle",type:"primary",onClick:function(){return p(!1)},children:"Ausblenden"})]})]})}):a.a.close("demo")}),[m,y,j,r,I]),m?null:Object(i.jsx)(u.a,{style:{position:"fixed",bottom:5,right:5},type:"primary",onClick:function(){return p(!0)},children:"Demosteuerung einblenden"})}},580:function(e,r,n){"use strict";n.r(r),n.d(r,"patchFetch",(function(){return z}));var t=n(63),i=n(94),a=n(18),s=n(130),u=n.n(s),o=n(165),d=n(3),c=n(189),l=n(72),m=n(85),v=n(121),f=n(122),b=n(29),h=n.n(b),g=h()().startOf("day"),p={config:{announcement:"Dienstags muss nicht mehr reserviert werden!",visibleHours:[8,22],orgName:"TV Großen-Linden",serverMail:"info@tt-linden.de",url:"https://reservierung.tt-linden.de",reservationDaysInAdvance:8,reservationMaxActiveCount:3,timeZone:h.a.tz.guess()},mailTemplates:{reservationConfirmation:{subject:"Reservierungsbest\xe4tigung - TV Großen-Linden",body:"Hallo {{name}}.<div><br>Sie haben soeben folgende Reservierung get\xe4tigt:<br><br>{{reservierung}}<br><br>Eine verbindliche Buchung kommt erst durch Einwurf der Wertmarke in den Wertmarkenautomaten zustande.<br>Aus dem Reservierungssystem k\xf6nnen keine Rechtsanspr\xfcche abgeleitet werden.<br><br>Sie bekommen die Wertmarken und den Zugangscode bei unserern Partnern:<br>xyz<br><br>---</div><div><br></div><div>TV Großen-Linden&nbsp;</div>"},reservationCancelled:{subject:"Stornierung Ihrer Reservierung - TV Großen-Linden",body:"Hallo {{name}}.<div><br>Ihre Reservierung wurde soeben storniert:<br><br>{{reservierung}}<br><br>Grund der Stornierung:</div><div><br></div><div>{{grund}}<br><br><br>---</div><div><br></div><div>TV Großen-Linden&nbsp;</div>"},confirmMail:{subject:"Registrierung: Best\xe4tigen Sie Ihre E-Mail - TV Großen-Linden",body:"Hallo {{name}}.<div><br>Bitte best\xe4tigen Sie Ihre E-Mail Adresse, indem Sie auf folgenden Link klicken:<br><br>{{link}}<br></div><div><br></div><div>---</div><div><br></div><div>TV Großen-Linden&nbsp;</div>"},resetPassword:{subject:"Passwort zur\xfccksetzen - TV Großen-Linden",body:"Hallo {{name}}.<div><br>Klicken Sie auf folgenden Link, um Ihr Passwort zur\xfcckzusetzen:<br><br>{{link}}<br><br></div><div>---</div><div><br></div><div>TV Großen-Linden&nbsp;</div>"}},templates:{reservationTos:{body:"<h1>Preis</h1><div>15,- Euro pro Wertmarke<br>145,- Euro pro 10 Wertmarken<br></div><div><br></div><h1>Nutzungsordnung</h1><ul>\n    <li>\n        Zur Nutzung ben\xf6tigen Sie Wertmarken und einen Zugangscode. Diese erhalten Sie bei unserern Partnern: <br>\nxyz asfdlkafsd, asdfkj 012387878 <br>\nxbasdfyz aad, asdfkj 129388 8123 <br>\n    </li>\n    <li>\n        Am Eingang der Halle ist ein Codeschlo\xdf angebracht, in das ein 4-stelliger Zahlencode eingegeben werden mu\xdf, um den T\xfcr\xf6ffner zu bet\xe4tigen.\n    </li>\n    <li>\n        Auf den Pl\xe4tzen befindet sich f\xfcr jeden Tisch ein Wertmarkenautomat. Eine Wertmarke schaltet f\xfcr 1 Stunde (+ etwas Nachlauf) das Licht ein und gibt die Heizungssteuerung frei.\n    </li>\n    <li>\n        Eine Nutzung nach 22.00 und vor 8.00 Uhr ist ohne Reservierung m\xf6glich.\n    </li>\n    <li>\n        Aus dem Reservierungssystem k\xf6nnen keine Rechtsanspr\xfcche abgeleitet werden.\n    </li>\n</ul>"},systemTos:{body:"<ul>\n    <li>\n        Aus dem Reservierungssystem k\xf6nnen keine Rechtsanspr\xfcche abgeleitet werden.\n    </li>\n    <li>\n        Ihr Anzeigename wird \xf6ffentlich auf dem Reservierungskalender angezeigt.\n    </li>\n    <li>\n        Sie sind damit einverstanden, dass eine zu Cookies \xe4hnliche Technologie verwendet wird, um die Funktionalit\xe4t des Systems zu gew\xe4hrleisten. Es erfolgt kein Tracking, o.\xe4.\n    </li>\n    <li>\n        Sie k\xf6nnen Ihre gespeicherten Daten (Benutzerkonto, Reservierungen) zu jedem Zeitpunkt einsehen und endg\xfcltig l\xf6schen.\n    </li>\n    <li>\n        Ihre E-Mail wird dazu verwendet, um Reservierungen zu best\xe4tigen und Sie ggf. zu benachrichtigen. Ihre E-Mail wird nicht mit Dritten geteilt.\n    </li>\n</ul>"},infoPage:{body:'<h1>Allgemeine Informationen zur Hallennutzung</h1><div><br><ul><li>Es handelt sich hier um ein Reservierungssystem und nicht um ein Buchungssystem.</li><li>Eine verbindliche Buchung kommt erst durch Einwurf der Wertmarke in den Wertmarkenautomaten zustande.</li><li>Aus dem Reservierungssystem k\xf6nnen keine Rechtsanspr\xfcche abgeleitet werden.</li><li>Sie m\xfcssen dieses Reservierungssystem nicht nutzen. Sie k\xf6nnen die Halle auch ohne Reservierung nutzen, bitte beachten Sie aber, da\xdf Reservierungen Vorrang haben.</li><li>Es ist auch eine Nutzung nach 22.00 und vor 8.00 m\xf6glich. Diese Zeiten werden nur selten nachgefragt und sind deshalb wegen der \xdcbersichtlichkeit nicht im Reservierungsplan aufgef\xfchrt.</li><li>Am Eingang der Halle ist ein Codeschlo\xdf angebracht, in das ein 4-stelliger Zahlencode eingegeben werden mu\xdf, um den T\xfcr\xf6ffner zu bet\xe4tigen.</li><li>Auf den Pl\xe4tzen befindet sich f\xfcr jeden Tisch ein Wertmarkenautomat. Eine Wertmarke schaltet f\xfcr 1 Stunde (+ etwas Nachlauf) das Licht ein und gibt die Heizungssteuerung frei.</li><li>Sie bekommen die Wertmarken und den Zugangscode bei unserern Partnern:</li><li>relexa hotel Harz-Wald Braunlage, Karl-R\xf6hrig Str. 5a, Tel. 05520/8070</li><li>BTG Braunlage (Tourist-Information), Elbinger\xf6derstr. 17, Tel. 05520/93070</li><li>Eine Wertmarke kostet 15,- Euro</li><li>10 Wertmarken kosten 145,- Euro</li><li>Ein Abo im eigentlichen Sinn gibt es nicht, nur den Rabatt ab 10 Wertmarken.</li><li>Bei wesentlich h\xf6herem Bedarf, z.B. Buchung der ganzen Halle f\xfcr ein Wochenende setzen Sie sich bitte mit uns in Verbindung.</li></ul></div><div><br></div><h1>Nutzung des Reservierungssystems</h1><div><ul><li>Neu hier?<br>Bevor sie das Reservierungssystem nutzen k\xf6nnen, m\xfcssen sie sich registrieren.</li><li>Wie reserviere ich eine Stunde?<br>Klicken Sie die gew\xfcnschte Stunde einfach an. Falls Sie nicht angemeldet sind erscheint die Anmeldemaske. Melden Sie sich an, dann k\xf6nnen Sie die gew\xfcnschte Stunde durch einfaches anklicken reservieren.</li><li>Wie storniere ich eine Reservierung?<br>Sie k\xf6nnen Reservierungen einfach durch anklicken der Reservierung wieder stornieren. Sie k\xf6nnen nur ihre eigenen Reservierungen stornieren. Sie m\xfcssen dazu angemeldet sein.</li><li>Welche Einschr\xe4nkungen gibt es f\xfcr Reservierungen?<br>Reservierungen k\xf6nnen maximal 3 Monate im voraus get\xe4tigt werden.</li><li>Passwort, E-Mail oder Nutzername \xe4ndern<br>Sie k\xf6nnen ihre Daten unter "Mein Benutzerkonto" \xe4ndern.</li><li>DSGVO: Daten l\xf6schen / anfordern<br>Sie k\xf6nnen all ihre Daten unter "Mein Benutzerkonto" anfordern.</li></ul></div>'},legalPrivacy:{body:"<h1>Impressum</h1><h1>Datenschutzerkl\xe4rung</h1>"}},courts:[{courtId:1,name:"Tisch 1"},{courtId:2,name:"Tisch 2"},{courtId:3,name:"Tisch 3"},{courtId:4,name:"Tisch 4"}],users:[{userId:9,name:"Max Mustermann",mail:"max@example.com",verified:!0,admin:!1,registeredAt:h()()},{userId:2,name:"Otto Probiermal",mail:"otto@example.com",verified:!0,admin:!0,registeredAt:h()()},{userId:3,name:"J\xfcrgen M.",mail:"juergen@example.com",verified:!0,admin:!1,registeredAt:h()()},{userId:8,name:"H. M\xfcller",mail:"mueller@example.com",verified:!0,admin:!1,registeredAt:h()()},{userId:661,name:"Nick Sample",mail:"test.franz.mein.mail@franz.de",verified:!0,admin:!1,registeredAt:h()()},{userId:41,name:"Franz Test",mail:"test.franz.mein.mail@franz.de",verified:!1,admin:!1,registeredAt:h()()}],reservations:[{id:0,from:g.add(-1,"day").hour(17),to:g.add(3,"day").hour(24),courtId:2,groupId:0,created:g.add(-2,"day").hour(11)},{id:1,from:g.add(-1,"day").hour(11),to:g.add(-1,"day").hour(12),courtId:1,groupId:1,created:g.add(-2,"day").hour(11)},{id:2,from:g.add(3,"day").hour(20),to:g.add(3,"day").hour(21),courtId:1,groupId:3,created:g.add(-2,"day").hour(11)},{id:3,from:g.add(-2,"day").hour(15),to:g.add(-2,"day").hour(16),courtId:1,groupId:2,created:g.add(-4,"day").hour(11)},{id:4,from:g.add(-1,"day").hour(15),to:g.add(-1,"day").hour(16),courtId:1,groupId:2,created:g.add(-4,"day").hour(11)},{id:5,from:g.add(-0,"day").hour(15),to:g.add(-0,"day").hour(16),courtId:1,groupId:2,created:g.add(-4,"day").hour(11)},{id:6,from:g.add(1,"day").hour(15),to:g.add(1,"day").hour(16),courtId:1,groupId:2,created:g.add(-4,"day").hour(11)},{id:7,from:g.add(0,"day").hour(17),to:g.add(0,"day").hour(18),courtId:1,groupId:4,created:g.add(-4,"day").hour(11)},{id:8,from:g.add(7,"day").hour(17),to:g.add(7,"day").hour(18),courtId:1,groupId:4,created:g.add(-4,"day").hour(11)},{id:9,from:g.add(14,"day").hour(17),to:g.add(14,"day").hour(18),courtId:1,groupId:4,created:g.add(-4,"day").hour(11)},{id:10,from:g.add(21,"day").hour(17),to:g.add(21,"day").hour(18),courtId:1,groupId:4,created:g.add(-4,"day").hour(11)}],reservationGroups:[{groupId:0,userId:null,text:"Pflegearbeiten",type:f.a.DISABLE},{groupId:1,userId:9,text:null,type:f.a.NORMAL},{groupId:3,userId:9,text:null,type:f.a.NORMAL},{groupId:2,userId:3,text:null,type:f.a.NORMAL},{groupId:4,userId:2,text:null,type:f.a.NORMAL}]};window.getFakeDb=function(){return p},window.addFakeReservation=function(){p.reservationGroups.push({groupId:999,userId:2,text:"Fake",type:f.a.NORMAL}),p.reservations.push({from:g.hour(8),to:g.hour(9),courtId:1,groupId:999,created:g})};var k=n(400),I=function(e){return new Promise((function(r){return setTimeout(r,e)}))},y=function(e){var r=e.url,n=e.method||"GET",t=r.indexOf(":");return n+(-1!==t?r.slice(0,t):r)};function j(e,r){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(u.a.mark((function e(r,n){var s,o,b,g,I,j,O,x,z,w,R,S,A,E,M,B,N,T,P,D;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b=n.body?JSON.parse(n.body):null,g=r.indexOf("?"),I=-1!==g?r.slice(0,g):r,j=Object(v.d)(r.slice(g)),O=I.lastIndexOf("/"),x=I.slice(0,O+1),z=I.slice(O+1),w=(w=null===(s=n.headers)||void 0===s||null===(o=s.Authorization)||void 0===o?void 0:o.split(".")[1])&&parseInt(w),R=["".concat(n.method).concat(I),"".concat(n.method).concat(x)],S=0,A=R;case 11:if(!(S<A.length)){e.next=55;break}E=A[S],e.t0=E,e.next=e.t0===y(m.b)?16:e.t0===y(m.f)?17:e.t0===y(m.o)?19:e.t0===y(m.c)?21:e.t0===y(m.p)?22:e.t0===y(m.q)?24:e.t0===y(m.e)?26:e.t0===y(m.h)?27:e.t0===y(m.k)?29:e.t0===y(m.i)?34:e.t0===y(m.j)?37:e.t0===y(m.a)?38:e.t0===y(m.m)?40:e.t0===y(m.n)?43:e.t0===y(m.d)?46:e.t0===y(m.g)||e.t0===y(m.l)?49:52;break;case 16:return e.abrupt("return",{config:p.config,courts:p.courts,templates:p.templates});case 17:return p.config=Object(a.a)(Object(a.a)({},p.config),b),e.abrupt("return",{success:!0});case 19:return p.courts=b,e.abrupt("return",{success:!0});case 21:return e.abrupt("return",p.mailTemplates);case 22:return p.mailTemplates=Object(a.a)(Object(a.a)({},p.mailTemplates),{},Object(i.a)({},b.id,b)),e.abrupt("return",{success:!0});case 24:return p.templates=Object(a.a)(Object(a.a)({},p.templates),{},Object(i.a)({},b.id,b)),e.abrupt("return",{success:!0});case 26:return e.abrupt("return",p.users.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{upcomingReservationCount:123,totalReservationCount:1234,lastActivity:h()()})})));case 27:return p.users=p.users.map((function(e){return e.userId===b.userId?Object(a.a)(Object(a.a)(Object(a.a)({},e),b),{},{verified:(!b.mail||e.mail===b.mail)&&e.verified}):e})),e.abrupt("return",{success:!0});case 29:if(!p.users.some((function(e){return e.mail===b.mail}))){e.next=31;break}return e.abrupt("return",{__status:400,json:{message:"mail already registered"}});case 31:return M={name:b.name,mail:b.mail,password:"hashedPw",userId:Math.floor(Math.random()*Number.MAX_SAFE_INTEGER),verified:!1,admin:!1,registeredAt:h()()},p.users.push(M),e.abrupt("return",{token:"demo-token.".concat(M.userId),userId:M.userId,name:M.name,mail:M.mail,verified:M.verified,admin:M.admin});case 34:if("object"!==typeof(B=function(){var e=b.type,r=b.token,n=b.mail,t=void 0;if("token"===e){var i=parseInt(r.split(".")[1]);t=p.users.find((function(e){return e.userId===i}))}else t=p.users.find((function(e){return e.mail===n}));return t?{v:{token:"demo-token.".concat(t.userId),userId:t.userId,name:t.name,mail:t.mail,verified:t.verified,admin:t.admin}}:{v:{__status:401,json:{message:"wrong login"}}}}())){e.next=37;break}return e.abrupt("return",B.v);case 37:return e.abrupt("return",{success:!0});case 38:return p.users=p.users.filter((function(e){return e.userId!==b.userId})),e.abrupt("return",{success:!0});case 40:if("object"!==typeof(N=function(){var e=btoa(b.mail);return c.a.warn({key:"fake-verification",message:"Demo E-Mail Verifikation",duration:0,placement:"bottomRight",description:Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Dies simuliert den Verifikationsprozess f\xfcr ",Object(d.jsx)("strong",{children:b.mail}),"."]}),Object(d.jsx)(l.a,{onClick:function(){var r;null===(r=k.demoControl.history)||void 0===r||r.push("/verify-mail/".concat(e)),c.a.close("fake-verification")},children:"E-Mail Verifizieren (Demo)"})]})}),{v:{success:!0}}}())){e.next=43;break}return e.abrupt("return",N.v);case 43:if("object"!==typeof(T=function(){var e=atob(b.token),r=p.users.find((function(r){return r.mail===e}));return r?(r.verified=!0,{v:{success:!0}}):{v:{__status:404,json:{message:"user not found"}}}}())){e.next=46;break}return e.abrupt("return",T.v);case 46:if("object"!==typeof(P=function(){var e=j.start&&h()(j.start),r=j.end&&h()(j.end),n=j["group-id"]&&parseInt(j["group-id"]),t=j["user-id"]&&parseInt(j["user-id"]),i=[];return p.reservations.forEach((function(s){(function(n){var t=n.from,i=n.to,a=!0;return e&&(a=a&&e.isSameOrBefore(i)),r&&(a=a&&r.isSameOrAfter(t)),a})(s)&&p.reservationGroups.forEach((function(e){if(e.groupId===s.groupId&&(o=e.groupId,!n||n===o)){var r=p.users.find((function(r){return e.userId===r.userId}));u=null===r||void 0===r?void 0:r.userId,t&&t!==u||i.push(Object(a.a)(Object(a.a)(Object(a.a)({},s),e),{},{name:(null===r||void 0===r?void 0:r.name)||void 0,created:void 0}))}var u,o}))})),{v:i}}())){e.next=49;break}return e.abrupt("return",P.v);case 49:if("object"!==typeof(D=function(){var e,r,n=void 0;try{n=parseInt(z),isNaN(n)&&(n=null)}catch(P){}n=null!==(e=n)&&void 0!==e?e:p.reservationGroups.reduce((function(e,r){return Math.max(e,r.groupId)}),0)+1;var i=null===b||void 0===b?void 0:b.text,s=null===b||void 0===b||null===(r=b.reservations)||void 0===r?void 0:r.map((function(e){var r=e.courtId,n=e.from,t=e.to;return{courtId:r,from:h()(n),to:h()(t)}}));if(null===s||void 0===s?void 0:s.length){var u=p.reservationGroups.find((function(e){return e.groupId===n}));i&&u&&(u.text=i);var o=p.reservations.reduce((function(e,r){return r.groupId===n?e.groupReservations.push(r):e.rest.push(r),e}),{groupReservations:[],rest:[]}),d=o.groupReservations,c=o.rest,l=s.reduce((function(e,r){var t=r.courtId,i=r.from,a=r.to,s=d.find((function(e){return e.from.isSame(i,"hour")&&e.to.isSame(a,"hour")&&e.courtId===t}));return s?e.keepReservations.push(s):e.newReservations.push({from:i,to:a,courtId:t,groupId:n,created:h()()}),e}),{keepReservations:Object(t.a)(c),newReservations:[]}),m=l.keepReservations,g=l.newReservations,k=(null===u||void 0===u?void 0:u.userId)||w,I=p.users.find((function(e){return e.userId===k})),y=h()(),j=y.add(p.config.reservationDaysInAdvance,"day"),O=g.reduce((function(e,r){var n,i=m.filter((function(e){return Object(v.e)(r,e)}));i.length?((n=e.conflicts).push.apply(n,Object(t.a)(i)),e.unavailableReservations.push(r)):(!I.admin&&r.to.isAfter(j,"day")||!I.admin&&r.from.isBefore(y,"hour"))&&e.unavailableReservations.push(r);return e}),{conflicts:[],unavailableReservations:[]}),x=O.conflicts,R=O.unavailableReservations;if(((null===b||void 0===b?void 0:b.type)||u.type)===f.a.DISABLE){var S=x.reduce((function(e,r){return p.reservationGroups.find((function(e){return e.groupId===r.groupId})).type===f.a.DISABLE?e.disabled.push(r):e.normal.push(r),e}),{normal:[],disabled:[]}),A=S.normal,E=S.disabled;if(E.length)return{v:{__status:409,json:{unavailableReservations:E}}};A.length&&(m=m.filter((function(e){return!A.some((function(r){return r.from.isSame(e.from,"hour")&&r.to.isSame(e.to,"hour")&&r.courtId===e.courtId}))})))}else if(R.length>0)return{v:{__status:409,json:{unavailableReservations:R}}};var M=[].concat(Object(t.a)(m),Object(t.a)(g));if(!I.admin){var B=[n].concat(Object(t.a)(p.reservationGroups.filter((function(e){return e.userId===k})).map((function(e){return e.groupId})))),N=M.reduce((function(e,r){return B.includes(r.groupId)&&r.from.isSameOrAfter(y,"hour")?e+1:e}),0);if(N>p.config.reservationMaxActiveCount)return{v:{__status:403,json:{message:"too many active reservations",value:N,max:p.config.reservationMaxActiveCount}}}}if(p.reservations=M,!d.length){var T={groupId:n,text:i,type:(null===b||void 0===b?void 0:b.type)||f.a.NORMAL,userId:k};return p.reservationGroups.push(T),{v:g.map((function(e){return Object(a.a)(Object(a.a)(Object(a.a)({},e),T),{},{name:I.name,created:void 0})}))}}}else p.reservationGroups=p.reservationGroups.filter((function(e){return e.groupId!==n})),p.reservations=p.reservations.filter((function(e){return e.groupId!==n}));return{v:{success:!0}}}())){e.next=52;break}return e.abrupt("return",D.v);case 52:S++,e.next=11;break;case 55:return e.abrupt("return",null);case 56:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var r="string"===typeof e?e:JSON.stringify(e),n=encodeURIComponent(r).match(/%[89ABab]/g);return r.length+(n?n.length:0)}function z(){var e=window.fetch;window.fetch=function(){var r=Object(o.a)(u.a.mark((function r(n,t){var i,a;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,I(200);case 2:return r.prev=2,r.next=5,j(n,t||{});case 5:a=r.sent,r.next=12;break;case 8:r.prev=8,r.t0=r.catch(2),console.log(r.t0),a={__status:500,json:{error:!0}};case 12:if(console.log("Fake API:",{request:{url:n,options:t},response:a,db:p,totalKb:x({res:a})/1024}),!(null===(i=a)||void 0===i?void 0:i.__status)){r.next=17;break}return r.abrupt("return",Promise.resolve({ok:!1,status:a.__status,json:function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve(JSON.parse(JSON.stringify(a.json))));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}));case 17:if(!a){r.next=19;break}return r.abrupt("return",Promise.resolve({ok:!0,json:function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve(JSON.parse(JSON.stringify(a))));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}));case 19:return r.abrupt("return",e(n,t));case 20:case"end":return r.stop()}}),r,null,[[2,8]])})));return function(e,n){return r.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=27.24987dfb.chunk.js.map