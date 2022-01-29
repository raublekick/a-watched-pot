var O=Object.defineProperty,K=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var b=(e,s,t)=>s in e?O(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,d=(e,s)=>{for(var t in s||(s={}))I.call(s,t)&&b(e,t,s[t]);if(w)for(var t of w(s))z.call(s,t)&&b(e,t,s[t]);return e},v=(e,s)=>K(e,E(s));import{m as f,l as u,a as y,V as _,b as B,B as R}from"./vendor.cc17e59c.js";const A=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};A();var D=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("fieldset",{staticClass:"pot p-1"},[t("legend",{staticClass:"p-1"},[e._v("pot...")]),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"art",class:[e.artClass]})]),t("div",{staticClass:"column"},[t("div",[e._v("temperature")]),t("b-progress",{attrs:{type:"is-danger",value:e.pot.temperature,"show-value":""}},[e._v(e._s(e.pot.temperature.toFixed(2))+" C")]),t("div",[e._v("state: "+e._s(e.pot.state))]),t("div",[e._v("mass: "+e._s(e.pot.mass)+"g")]),t("div",[e._v("joules: "+e._s(e.pot.joules.toFixed(2)))]),t("div",[e._v("joules / s: "+e._s(e.pot.joulesPerSecond.toFixed(2)))])],1)])])},G=[];function m(e,s,t,n,i,o,a,T){var r=typeof e=="function"?e.options:e;s&&(r.render=s,r.staticRenderFns=t,r._compiled=!0),n&&(r.functional=!0),o&&(r._scopeId="data-v-"+o);var c;if(a?(c=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(l=__VUE_SSR_CONTEXT__),i&&i.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(a)},r._ssrRegister=c):i&&(c=T?function(){i.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(r.functional){r._injectStyles=c;var F=r.render;r.render=function(q,C){return c.call(C),F(q,C)}}else{var k=r.beforeCreate;r.beforeCreate=k?[].concat(k,c):[c]}return{exports:e,options:r}}const W={name:"PotBlock",computed:v(d({},f(["pot"])),{artClass(){return"pot-"+this.pot.state}})},$={};var M=m(W,D,G,!1,V,null,null,null);function V(e){for(let s in $)this[s]=$[s]}var L=function(){return M.exports}(),N=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("fieldset",{staticClass:"fire p-1"},[t("legend",{staticClass:"p-1"},[e._v("fire...")]),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"art",class:[e.artClass]})]),t("div",{staticClass:"column"},[t("div",[e._v("state: "+e._s(e.fire.state))]),t("div",[e._v("fuel:")]),e._l(e.mappedFuel,function(n,i){return t("div",{key:i},[e._v(" "+e._s(i)+": "+e._s(n.length)+" ")])})],2)])])},U=[];const H={name:"FireBlock",computed:v(d({},f(["fire"])),{artClass(){return"fire-"+this.fire.state},mappedFuel(){return u.exports.groupBy(this.fire.fuel,"name")}})},P={};var X=m(H,N,U,!1,J,null,null,null);function J(e){for(let s in P)this[s]=P[s]}var Q=function(){return X.exports}(),Y={watch:{type:"pot",name:"watch",unlocked:!0,count:0,messages:[`you watch the pot...
`,`you watch the pot some more...
`,`you continue watching the pot...
`]},blow:{type:"pot",name:"blow",unlocked:!1,count:0,requirement:{type:"actions",name:"watch",count:3},messages:[`you blow on the pot...
`,`you blow on the pot again...
`,`you blow on the pot and think you should look for another way...
`]},rub:{type:"fire",name:"rub",unlocked:!1,count:0,requirement:{type:"inventory",name:"sticks",count:2},handler:{name:"kindle",args:[{type:"inventory",name:"sticks",count:2,message:`you don't have two sticks to rub together...
`},{type:"inventory",name:"kindling",count:1,message:`you rub the sticks and see a brief flame...
`}]}},kindle:{type:"fire",name:"kindle",unlocked:!1,count:0,requirement:{type:"inventory",name:"kindling",count:5},handler:{name:"fuel",args:[{type:"inventory",name:"kindling",count:5}]}},place:{type:"fire",name:"place",unlocked:!1,count:0,requirement:{type:"fire",name:"state",notValue:"cold"},handler:{name:"fuel",args:[{type:"inventory",name:"sticks",count:1}]}},stack:{type:"fire",name:"stack",unlocked:!1,count:0,requirement:{type:"inventory",name:"logs",count:1},handler:{name:"fuel",args:[{type:"inventory",name:"logs",count:1}]}},look:{type:"environment",name:"look",unlocked:!1,count:0,requirement:{type:"actions",name:"blow",count:3},messages:[`you look around...
`,`you look around some more, but it is very dark...
`,`you take one last look and notice that you are surrounded by sticks and leaves...
`]},gather:{type:"environment",name:"gather",unlocked:!1,count:0,requirement:{type:"actions",name:"look",count:3},messages:[`you try to gather some sticks and leaves...
`],gains:[{type:"inventory",name:"kindling",count:2},{type:"inventory",name:"sticks",count:.2}]},chop:{type:"environment",name:"chop",requirement:{type:"fire",name:"state",notValue:"cold"},messages:[`you chop at a log, this is real work...
`],gains:[{type:"inventory",name:"logs",count:.1}]}};const h={Playing:"playing",Paused:"paused",TimeOut:"timeout"},g={Ice:"ice",Puddle:"puddle",Simmer:"simmer",Boil:"boil"},p={Cold:"cold",Kindled:"kindled",Crackling:"crackling",Roaring:"roaring"},Z={messages:"",ambientTemperature:22,gameState:h.Playing,prestige:{level:1,woodWeightBonus:1,woodGainsBonus:1,woodDecayBonus:1,joulesPerSecondBonus:1,joulesPenaltyBonus:1,timeBonus:1,autoKindle:{unlocked:!1,active:!1},autoChop:{unlocked:!1,active:!1},autoStack:{unlocked:!1,active:!1}},time:{min:0,max:12*60*60,current:0,rate:3600},pot:{state:g.Ice,joules:-380,joulesPerSecond:0,min:-380,max:38e4,temperature:0,mass:1e3,specificHeatC:4.186},fire:{temp:0,state:p.Cold,fuel:[]},items:{kindling:{name:"kindling",decay:1,weight:1},sticks:{name:"sticks",decay:5,weight:20},logs:{name:"logs",decay:10,weight:60}},inventory:{kindling:{count:0},sticks:{count:0},logs:{count:0}},actions:Y};var ee=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("b-progress",{staticClass:"mb-1 mt-1",attrs:{value:e.time.current,max:e.time.max}}),t("b-modal",{attrs:{"can-cancel":!1},model:{value:e.timedOut,callback:function(n){e.timedOut=n},expression:"timedOut"}},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-content"},[t("pre",{staticClass:"log small-log"},[e._v("the day has ended, your eyes have closed...")]),t("fieldset",{staticClass:"p-1"},[t("legend",{staticClass:"p-1"},[e._v("choose...")]),t("div",{staticClass:"columns mt-1 mb-1 has-text-centered is-vcentered"},[t("div",{staticClass:"column prestige"},[t("b-button",{attrs:{size:"is-large","icon-left":"head-snowflake"},on:{click:function(n){return e.upgradePrestige("mind")}}}),t("div",[e._v("work smarter...")]),t("div",[e._v("lvl "+e._s(e.prestige.woodWeightBonus))])],1),t("div",{staticClass:"column prestige"},[t("b-button",{attrs:{size:"is-large","icon-left":"arm-flex"},on:{click:function(n){return e.upgradePrestige("body")}}}),t("div",[e._v("work harder...")]),t("div",[e._v("lvl "+e._s(e.prestige.woodGainsBonus))])],1),t("div",{staticClass:"column prestige"},[t("b-button",{attrs:{size:"is-large","icon-left":"hands-pray"},on:{click:function(n){return e.upgradePrestige("spirit")}}}),t("div",[e._v("look inward...")]),t("div",[e._v("lvl "+e._s(e.prestige.woodDecayBonus))])],1)]),e.showTierTwo?t("div",{staticClass:"columns mt-1 mb-1 has-text-centered is-vcentered"},[t("div",{staticClass:"column prestige"},[t("b-button",{attrs:{size:"is-large","icon-left":"magic-staff"},on:{click:function(n){return e.upgradePrestige("elements")}}}),t("div",[e._v("control the elements...")]),t("div",[e._v("lvl "+e._s(e.prestige.joulesPerSecondBonus))])],1),t("div",{staticClass:"column prestige"},[t("b-button",{attrs:{size:"is-large","icon-left":"wizard-hat"},on:{click:function(n){return e.upgradePrestige("channel")}}}),t("div",[e._v("channel your spirit...")]),t("div",[e._v("lvl "+e._s(e.prestige.joulesPenaltyBonus))])],1)]):e._e(),e.showTierThree?t("div",{staticClass:"columns mt-1 mb-1 has-text-centered is-vcentered"},[t("div",{staticClass:"column prestige"},[t("b-button",{attrs:{size:"is-large","icon-left":"timer-sand-paused"},on:{click:function(n){return e.upgradePrestige("time")}}}),t("div",[e._v("control gravity itself to bend time in your favor...")]),t("div",[e._v("lvl "+e._s(e.prestige.timeBonus))])],1)]):e._e(),e.showTierFour?t("div",{staticClass:"columns mt-1 mb-1 has-text-centered is-vcentered"},[t("div",{staticClass:"column prestige"},[t("b-button",{attrs:{size:"is-large","icon-left":"campfire"},on:{click:function(n){return e.upgradePrestige("autoKindle")}}}),t("div",[e._v("fire starter...")])],1),t("div",{staticClass:"column prestige"},[t("b-button",{attrs:{size:"is-large","icon-left":"axe"},on:{click:function(n){return e.upgradePrestige("autoChop")}}}),t("div",[e._v("wood cutter...")])],1),t("div",{staticClass:"column prestige"},[t("b-button",{attrs:{size:"is-large","icon-left":"state-machine"},on:{click:function(n){return e.upgradePrestige("autoStack")}}}),t("div",[e._v("builder...")])],1)]):e._e()])])])])],1)},te=[];const se={name:"TimeBlock",data(){return{timedOut:!1}},computed:v(d({},f(["time","gameState","prestige"])),{showTierTwo(){return this.prestige.woodWeightBonus>=3&&this.prestige.woodGainsBonus>=3&&this.prestige.woodDecayBonus>=3},showTierThree(){return this.prestige.joulesPerSecondBonus>=3&&this.prestige.joulesPenaltyBonus>=3},showTierFour(){return this.prestige.woodWeightBonus>=3&&this.prestige.woodGainsBonus>=3&&this.prestige.woodDecayBonus>=3&&this.prestige.joulesPerSecondBonus>=3&&this.prestige.joulesPenaltyBonus>=3&&this.prestige.timeBonus>=3}}),methods:d({},y(["upgradePrestige"])),watch:{gameState(){this.gameState===h.TimeOut?this.timedOut=!0:this.timedOut=!1}}},S={};var ne=m(se,ee,te,!1,ie,null,null,null);function ie(e){for(let s in S)this[s]=S[s]}var oe=function(){return ne.exports}(),re=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("fieldset",{staticClass:"p-1 actions"},[t("legend",{staticClass:"p-1"},[e._v(e._s(e.title))]),e._l(e.items,function(n,i){return[n.unlocked?t("b-button",{key:i,staticClass:"m-1",on:{click:function(o){return e.trigger(n)}}},[e._v(e._s(n.name))]):e._e()]})],2)},ae=[];const le={name:"ActionList",props:{items:{required:!0,default(){return[]}},title:{required:!0,default(){return""}}},methods:d({},y(["trigger"]))},j={};var ue=m(le,re,ae,!1,ce,null,null,null);function ce(e){for(let s in j)this[s]=j[s]}var de=function(){return ue.exports}(),pe=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("section",{staticClass:"container"},[t("h1",{staticClass:"title p-4"},[e._v("a watched pot...")]),t("pre",{ref:"log",staticClass:"log big-log"},[e._v(e._s(e.messages))]),t("time-block"),t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column m-1"},[t("pot"),t("fire")],1),t("div",{staticClass:"column m-1"},[e._l(e.mappedActions,function(n,i){return[t("actions",{key:i,attrs:{items:n,title:i}})]}),e.prestige.autoKindle.unlocked||e.prestige.autoChop.unlocked||e.prestige.autoStack.unlocked?t("fieldset",{staticClass:"p-1"},[t("legend",{staticClass:"p-1"},[e._v("tools")]),e.prestige.autoKindle.unlocked?t("b-button",{key:e.index,staticClass:"m-1",on:{click:function(n){e.prestige.autoKindle.active=!e.prestige.autoKindle.active}}},[e._v("fire starter "+e._s(e.prestige.autoKindle.active?"(active)":"(inactive)")+" ")]):e._e(),e.prestige.autoChop.unlocked?t("b-button",{key:e.index,staticClass:"m-1",on:{click:function(n){e.prestige.autoChop.active=!e.prestige.autoChop.active}}},[e._v("wood cutter "+e._s(e.prestige.autoChop.active?"(active)":"(inactive)")+" ")]):e._e(),e.prestige.autoStack.unlocked?t("b-button",{key:e.index,staticClass:"m-1",on:{click:function(n){e.prestige.autoStack.active=!e.prestige.autoStack.active}}},[e._v("builder "+e._s(e.prestige.autoStack.active?"(active)":"(inactive)")+" ")]):e._e()],1):e._e(),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("fieldset",{staticClass:"p-1"},[t("legend",{staticClass:"p-1"},[e._v("inventory...")]),e._l(e.inventory,function(n,i){return t("div",{key:i},[e._v(" "+e._s(i)+": "+e._s(Math.floor(n.count))+" ")])})],2),e.prestige.level>1?t("fieldset",{staticClass:"p-1"},[t("legend",{staticClass:"p-1"},[e._v("stats...")]),t("div",[e._v("level: "+e._s(e.prestige.level))]),e.prestige.woodWeightBonus>1?t("div",[e._v(" mind: "+e._s(e.prestige.woodWeightBonus)+" ")]):e._e(),e.prestige.woodGainsBonus>1?t("div",[e._v(" body: "+e._s(e.prestige.woodGainsBonus)+" ")]):e._e(),e.prestige.woodDecayBonus>1?t("div",[e._v(" spirit: "+e._s(e.prestige.woodDecayBonus)+" ")]):e._e(),e.prestige.joulesPerSecondBonus>1?t("div",[e._v(" elements: "+e._s(e.prestige.joulesPerSecondBonus)+" ")]):e._e(),e.prestige.joulesPenaltyBonus>1?t("div",[e._v(" channeling: "+e._s(e.prestige.joulesPenaltyBonus)+" ")]):e._e(),e.prestige.timeBonus>1?t("div",[e._v(" chronos: "+e._s(e.prestige.timeBonus)+" ")]):e._e()]):e._e()]),t("div",{staticClass:"column"},[t("fieldset",{staticClass:"p-1"},[t("legend",{staticClass:"p-1"},[e._v("items...")]),e._l(e.items,function(n,i){return t("div",{key:i,staticClass:"columns"},[t("div",{staticClass:"column"},[e._v(e._s(i))]),t("div",{staticClass:"column"},[e._v(" weight: "+e._s((n.weight*e.prestige.woodWeightBonus).toFixed(2))+" ")]),t("div",{staticClass:"column"},[e._v(" decay: "+e._s((n.decay/e.prestige.woodDecayBonus).toFixed(2))+" ")])])})],2)])])],2)])])],1)])},ve=[];const me={name:"App",components:{Pot:L,Fire:Q,Actions:de,TimeBlock:oe},methods:d({},y(["tick","trigger"])),computed:v(d({},f(["actions","messages","inventory","items","time","prestige"])),{mappedActions(){var e=u.exports.filter(this.actions,s=>s.unlocked);return u.exports.groupBy(e,"type")}}),created(){setInterval(()=>{this.tick()},1e3)},watch:{messages(){this.$nextTick(()=>{this.$refs.log.scrollTop=this.$refs.log.scrollHeight})}}},x={};var ge=m(me,pe,ve,!1,fe,null,null,null);function fe(e){for(let s in x)this[s]=x[s]}var _e=function(){return ge.exports}();_.use(B);const he=1,ye=he*3600;var ke=new B.Store({state:Z,mutations:{changeGameState(e,s){e.gameState=s}},actions:{async tick({state:e,dispatch:s}){if(e.time.current+=e.time.rate/2,e.time.current>=e.time.max){e.gameState=h.TimeOut;return}if(e.prestige.autoKindle.active&&await s("kindle",[{type:"inventory",name:"sticks",count:2,message:`you don't have two sticks to rub together...
`},{type:"inventory",name:"kindling",count:1,message:`you rub the sticks and see a brief flame...
`}]),e.prestige.autoChop.active&&(await s("addInventory",e.actions.gather),await s("addInventory",e.actions.chop)),e.prestige.autoStack.active&&await s("fuel",[{type:"inventory",name:"logs",count:1}]),e.pot.joulesPerSecond=(e.ambientTemperature-e.pot.temperature)/10,e.fire.state!==p.Cold){var t=0;u.exports.forEach(e.fire.fuel,o=>{var a=ye*(o.weight/1e3);t+=a,o.weight-=o.decay}),e.pot.joulesPerSecond+=t,e.fire.fuel=u.exports.filter(e.fire.fuel,o=>o.weight>0)}var n=(100-e.pot.temperature)/(100-e.prestige.joulesPenaltyBonus+1);e.pot.joulesPerSecond=e.pot.joulesPerSecond*n*e.prestige.joulesPerSecondBonus,e.pot.joules+=e.pot.joulesPerSecond;var i=e.pot.joules/(e.pot.specificHeatC*e.pot.mass);e.pot.temperature=i<0?0:i,e.fire.fuel.length===0&&(e.fire.state=p.Cold),e.pot.temperature<0?e.pot.state=g.Ice:e.pot.temperature>0&&e.pot.temperature<70?e.pot.state=g.Puddle:e.pot.temperature>=70&&e.pot.temperature<=100&&(e.pot.state=g.Simmer),await s("checkUnlocks")},async kindle({state:e},s){var t=!1;u.exports.forEach(s,n=>{if(n.count>e[n.type][n.name].count){e.messages+=n.message,t=!0;return}}),e.fire.state===p.Kindled&&(e.messages+=`there's no point when the fire is started...
`),!t&&e.fire.state!==p.Kindled&&(e.fire.state=p.Kindled,e.actions.chop.unlocked||(e.messages+=`with the fire lit, you see the glint of an axe blade...
`))},async handleMessages({state:e},s){s.messages&&s.messages[s.count]?e.messages+=s.messages[s.count]:s.messages&&(e.messages+=s.messages[0])},async addInventory({state:e},s){s.gains&&u.exports.forEach(s.gains,t=>{e[t.type][t.name].count+=t.count*e.prestige.woodGainsBonus})},async removeInventory({state:e},s){var t=!1;return u.exports.forEach(s,n=>{if(n.count>e[n.type][n.name].count){t=!0;return}e[n.type][n.name].count-=n.count}),!t},async fuel({state:e,dispatch:s},t){var n=await s("removeInventory",t);if(!n){e.messages+=`you don't have enough for that...
`;return}u.exports.forEach(t,i=>{var o=Object.assign({},e.items[i.name]);o.weight=o.weight*e.prestige.woodWeightBonus,o.decay=o.decay/e.prestige.woodDecayBonus;for(var a=0;a<i.count;a++)e.fire.fuel.push(o)})},async trigger({dispatch:e},s){s.count++,await e("handleMessages",s),await e("addInventory",s),s.handler&&await e(s.handler.name,s.handler.args),await e("checkUnlocks")},async checkUnlocks({state:e}){Object.keys(e.actions).forEach(s=>{if(!e.actions[s].unlocked&&e.actions[s].requirement){var t=e[e.actions[s].requirement.type][e.actions[s].requirement.name];e.actions[s].requirement.count&&t.count>=e.actions[s].requirement.count&&(e.actions[s].unlocked=!0),e.actions[s].requirement.notValue&&t!==e.actions[s].requirement.notValue&&(e.actions[s].unlocked=!0)}})},async upgradePrestige({state:e},s){s==="mind"?e.prestige.woodWeightBonus++:s==="body"?e.prestige.woodGainsBonus++:s==="spirit"?e.prestige.woodDecayBonus++:s==="elements"?e.prestige.joulesPerSecondBonus++:s==="channel"?e.prestige.joulesPenaltyBonus++:s==="time"?e.prestige.timeBonus++:e==="autoKindle"?(e.prestige.autoKindle.active=!0,e.prestige.autoKindle.unlocked=!0):e==="autoChop"?(e.prestige.autoChop.active=!0,e.prestige.autoChop.unlocked=!0):e==="autoStack"&&(e.prestige.autoStack.active=!0,e.prestige.autoChop.unlocked=!0),e.prestige.level++,e.time.current=0,e.pot.joulesPerSecond=0,e.pot.joules=e.pot.min,e.pot.state=g.Ice,e.fire.fuel=[],e.fire.state=p.Cold,e.gameState=h.Playing}}});_.use(R);_.config.productionTip=!1;new _({store:ke,render:e=>e(_e)}).$mount("#app");
