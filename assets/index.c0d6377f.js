var F=Object.defineProperty,T=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var k=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))R.call(t,n)&&k(e,n,t[n]);if(h)for(var n of h(t))E.call(t,n)&&k(e,n,t[n]);return e},d=(e,t)=>T(e,A(t));import{m as v,a as C,l as m,V as p,b as $,B as V}from"./vendor.cc17e59c.js";const M=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};M();var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"pot p-1"},[n("legend",{staticClass:"p-1"},[e._v("pot...")]),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",{staticClass:"art",class:[e.artClass]})]),n("div",{staticClass:"column"},[n("div",[e._v("temperature")]),n("b-progress",{attrs:{type:"is-danger",value:e.pot.temperature,"show-value":""}},[e._v(e._s(e.pot.temperature.toFixed(2))+" C")]),n("div",[e._v("state: "+e._s(e.pot.state))]),n("div",[e._v("mass: "+e._s(e.pot.mass)+"g")]),n("div",[e._v("joules: "+e._s(e.pot.joules.toFixed(2)))]),n("div",[e._v("joules / s: "+e._s(e.pot.joulesPerSecond.toFixed(2)))])],1)])])},B=[];function _(e,t,n,o,s,r,l,j){var a=typeof e=="function"?e.options:e;t&&(a.render=t,a.staticRenderFns=n,a._compiled=!0),o&&(a.functional=!0),r&&(a._scopeId="data-v-"+r);var c;if(l?(c=function(i){i=i||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!i&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(i=__VUE_SSR_CONTEXT__),s&&s.call(this,i),i&&i._registeredComponents&&i._registeredComponents.add(l)},a._ssrRegister=c):s&&(c=j?function(){s.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(a.functional){a._injectStyles=c;var P=a.render;a.render=function(x,y){return c.call(y),P(x,y)}}else{var g=a.beforeCreate;a.beforeCreate=g?[].concat(g,c):[c]}return{exports:e,options:a}}const I={name:"PotBlock",computed:d(u({},v(["pot"])),{artClass(){return"pot-"+this.pot.state}})},w={};var L=_(I,O,B,!1,K,null,null,null);function K(e){for(let t in w)this[t]=w[t]}var N=function(){return L.exports}(),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"fire p-1"},[n("legend",{staticClass:"p-1"},[e._v("fire...")]),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",{staticClass:"art",class:[e.artClass]})]),n("div",{staticClass:"column"},[n("div",[e._v("state: "+e._s(e.fire.state))]),n("div",[e._v("fuel:")])])])])},H=[];const G={name:"FireBlock",computed:d(u({},v(["fire"])),{artClass(){return"fire-"+this.fire.state}})},b={};var X=_(G,U,H,!1,z,null,null,null);function z(e){for(let t in b)this[t]=b[t]}var W=function(){return X.exports}(),D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"p-1 actions"},[n("legend",{staticClass:"p-1"},[e._v(e._s(e.title))]),e._l(e.items,function(o,s){return[o.unlocked?n("b-button",{key:s,staticClass:"m-1",on:{click:function(r){return e.trigger(o)}}},[e._v(e._s(o.name))]):e._e()]})],2)},J=[];const Q={name:"ActionList",props:{items:{required:!0,default(){return[]}},title:{required:!0,default(){return""}}},methods:u({},C(["trigger"]))},S={};var Y=_(Q,D,J,!1,Z,null,null,null);function Z(e){for(let t in S)this[t]=S[t]}var ee=function(){return Y.exports}(),te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"container"},[n("h1",{staticClass:"title p-4"},[e._v("a watched pot...")]),n("pre",{ref:"log",staticClass:"log"},[e._v(e._s(e.messages))]),n("div",{staticClass:"row"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column m-1"},[n("pot"),n("fire")],1),n("div",{staticClass:"column m-1"},[e._l(e.mappedActions,function(o,s){return[n("actions",{key:s,attrs:{items:o,title:s}})]}),n("fieldset",{staticClass:"p-1"},[n("legend",{staticClass:"p-1"},[e._v("inventory...")]),e._l(e.inventory,function(o,s){return n("div",{key:s},[e._v(" "+e._s(s)+": "+e._s(Math.round(o.count))+" ")])})],2)],2)])])])])},ne=[];const se={name:"App",components:{Pot:N,Fire:W,Actions:ee},methods:u({},C(["tick","trigger"])),computed:d(u({},v(["actions","messages","inventory"])),{mappedActions(){var e=m.exports.filter(this.actions,t=>t.unlocked);return m.exports.groupBy(e,"type")}}),created(){setInterval(()=>{this.tick()},1e3)},watch:{messages(){this.$nextTick(()=>{this.$refs.log.scrollTop=this.$refs.log.scrollHeight})}}},q={};var oe=_(se,te,ne,!1,re,null,null,null);function re(e){for(let t in q)this[t]=q[t]}var ae=function(){return oe.exports}(),ie={watch:{type:"pot",name:"watch",unlocked:!0,count:0,messages:[`you watch the pot...
`,`you watch the pot some more...
`,`you continue watching the pot...
`]},blow:{type:"pot",name:"blow",unlocked:!1,count:0,requirement:{type:"actions",name:"watch",count:3},messages:[`you blow on the pot...
`,`you blow on the pot again...
`,`you blow on the pot and think you should look for another way...
`]},rub:{type:"fire",name:"rub",unlocked:!1,count:0,requirement:{type:"inventory",name:"sticks",count:2},handler:{name:"kindle",args:[{type:"inventory",name:"sticks",count:2,message:`you don't have two sticks to rub together...
`},{type:"inventory",name:"kindling",count:1,message:`you rub the sticks and see a brief flame...
`}]}},kindle:{type:"fire",name:"kindle",unlocked:!1,count:0,requirement:{type:"inventory",name:"kindling",count:5}},place:{type:"fire",name:"place",unlocked:!1,count:0,requirement:{type:"fire",name:"state",notValue:"cold"}},stack:{type:"fire",name:"stack",unlocked:!1,count:0,requirement:{type:"inventory",name:"logs",count:1}},look:{type:"environment",name:"look",unlocked:!1,count:0,requirement:{type:"actions",name:"blow",count:3},messages:[`you look around...
`,`you look around some more, but it is very dark...
`,`you take one last look and notice that you are surrounded by sticks and leaves...
`]},gather:{type:"environment",name:"gather",unlocked:!1,count:0,requirement:{type:"actions",name:"look",count:3},messages:[`you try to gather some sticks and leaves...
`],gains:[{type:"inventory",name:"kindling",count:2},{type:"inventory",name:"sticks",count:.2}]},chop:{type:"environment",name:"chop",requirement:{type:"fire",name:"state",notValue:"cold"},messages:[`you chop at a log, this is real work...
`],gains:[{type:"inventory",name:"logs",count:.1}]}};p.use($);const ce={Playing:"playing",Paused:"paused"},le={Ice:"ice",Puddle:"puddle",Simmer:"simmer",Boil:"boil"},f={Cold:"cold",Kindled:"kindled",Crackling:"crackling",Roaring:"roaring"};var ue=new $.Store({state:{messages:"",ambientTemperature:22,gameState:ce.Playing,time:{min:0,max:12*60*60,currentTime:0},pot:{state:le.Ice,joules:-380,joulesPerSecond:0,min:-380,max:38e4,temperature:0,mass:1e3,specificHeatC:4.186},fire:{temp:0,state:f.Cold,fuel:[]},items:{kindling:{name:"kindling",decay:.1,weight:1},sticks:{name:"sticks",decay:1,weight:100},logs:{name:"logs",decay:1,weight:1e3}},inventory:{kindling:{count:0},sticks:{count:0},logs:{count:0}},actions:ie},mutations:{changeGameState(e,t){e.gameState=t}},actions:{async tick({state:e,dispatch:t}){e.pot.joulesPerSecond=(e.ambientTemperature-e.pot.temperature)/10,e.time.currentTime++,e.pot.joules+=e.pot.joulesPerSecond;var n=e.pot.joules/(e.pot.specificHeatC*e.pot.mass);e.pot.temperature=n<0?0:n,await t("checkUnlocks")},async kindle({state:e},t){var n=!1;m.exports.forEach(t,o=>{if(o.count>e[o.type][o.name].count){e.messages+=o.message,n=!0;return}}),e.fire.state===f.Kindled&&(e.messages+=`there's no point when the firse is started...
`),!n&&e.fire.state!==f.Kindled&&(e.fire.state=f.Kindled)},async handleMessages({state:e},t){t.messages&&t.messages[t.count]?e.messages+=t.messages[t.count]:t.messages&&(e.messages+=t.messages[0])},async addInventory({state:e},t){t.gains&&m.exports.forEach(t.gains,n=>{e[n.type][n.name].count+=n.count})},async trigger({dispatch:e},t){t.count++,await e("handleMessages",t),await e("addInventory",t),t.handler&&await e(t.handler.name,t.handler.args),await e("checkUnlocks")},async checkUnlocks({state:e}){Object.keys(e.actions).forEach(t=>{if(!e.actions[t].unlocked&&e.actions[t].requirement){var n=e[e.actions[t].requirement.type][e.actions[t].requirement.name];e.actions[t].requirement.count&&n.count>=e.actions[t].requirement.count&&(e.actions[t].unlocked=!0),e.actions[t].requirement.notValue&&n!==e.actions[t].requirement.notValue&&(e.actions[t].unlocked=!0)}})}}});p.use(V);p.config.productionTip=!1;new p({store:ue,render:e=>e(ae)}).$mount("#app");
