webpackJsonp([1],{23:function(t,e,n){"use strict";e.default={props:{id:String},data:function(){return{link:{name:"userEdit",params:{id:this.id},query:{locale:"en",q:100},hash:"#data"}}},beforeRouteEnter:function(t,e,n){n()}}},26:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Some User Details")]),t._v(" "),n("p",[t._v("User loaded has ID: "+t._s(t.id))]),t._v(" "),n("router-link",{staticClass:"btn btn-primary",attrs:{tag:"button",to:t.link}},[t._v("\n    Edit User\n  ")])],1)},staticRenderFns:[]}},7:function(t,e,n){var r,a;r=n(23);var i=n(26);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=r}});