(function(e){function t(t){for(var a,o,i=t[0],r=t[1],c=t[2],m=0,p=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&p.push(l[o][0]),l[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==l[r]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},l={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=r;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0714":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"container",attrs:{id:"canvas"}},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title-wrap"},[e._v(e._s(e.pageConfig.id)+"号楼")]),n("el-input",{staticClass:"title-wrap",staticStyle:{width:"300px"},attrs:{placeholder:"请输入标题"},model:{value:e.pageConfig.title,callback:function(t){e.$set(e.pageConfig,"title",t)},expression:"pageConfig.title"}})],1),n("div",{staticClass:"select-house"},[n("div",[n("span",[e._v(" 楼栋： ")]),n("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择","allow-create":"",filterable:""},on:{change:function(t){return e.selectHouseFromCache()}},model:{value:e.pageConfig.id,callback:function(t){e.$set(e.pageConfig,"id",t)},expression:"pageConfig.id"}},e._l(e.houstOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("div",{staticStyle:{"padding-bottom":"8px"}},[e._v("更新时间："+e._s(e.dateStr))])]),n("div",{staticClass:"hello"},e._l(e.houseList,(function(t,a){return n("div",{key:a,staticClass:"house-item"},[n("div",{staticClass:"house-item-left"},[n("el-popover",{attrs:{placement:"right",width:"200",height:"400",trigger:"click"}},[n("div",[n("div",{staticClass:"select-item"},[n("span",[e._v(" 家庭人数: ")]),n("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择","allow-create":"",filterable:""},model:{value:t.members,callback:function(n){e.$set(t,"members",n)},expression:"house.members"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("div",{staticClass:"select-item"},[n("span",[e._v(" 居住类型: ")]),n("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.type,callback:function(n){e.$set(t,"type",n)},expression:"house.type"}},e._l(e.peopleTypeOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),n("div",{staticClass:"link house-info",staticStyle:{height:"100%"},attrs:{slot:"reference"},slot:"reference"},[n("div",[e._v(e._s(t.name)+e._s(t.members)+"人")])])])],1),"zh"===t.type?n("div",{staticClass:"house-item-right"},e._l(t.count,(function(a,l){return n("div",{key:l,staticClass:"cout-item",class:e.getClass(a.results)},[n("el-popover",{attrs:{placement:"right",width:"300",trigger:"click"}},[n("div",[n("el-button",{staticClass:"mark-btn select-item",attrs:{round:""},on:{click:function(n){return e.markYin(a,t.members)}}},[e._v("标记全阴")]),n("el-button",{staticClass:"mark-btn select-item",attrs:{round:""},on:{click:function(t){return e.resetYin(a)}}},[e._v("重置标记")]),n("div",{staticClass:"select-item"},[n("span",{staticClass:"test-ying-text"},[e._v(" 阴性: ")]),n("el-select",{attrs:{placeholder:"请选择","allow-create":"",filterable:""},model:{value:a.results.yin,callback:function(t){e.$set(a.results,"yin",t)},expression:"countItem.results.yin"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("div",{staticClass:"select-item"},[n("span",{staticClass:"test-yang-text"},[e._v(" 阳性: ")]),n("el-select",{attrs:{placeholder:"请选择","allow-create":"",filterable:""},model:{value:a.results.yang,callback:function(t){e.$set(a.results,"yang",t)},expression:"countItem.results.yang"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),n("div",{staticClass:"link",attrs:{slot:"reference"},slot:"reference"},[e._v(" "+e._s(e.getStateText(a.results))+" ")])])],1)})),0):"exclude"===t.type?n("div",{staticClass:"empty-view"},[n("span",{attrs:{contenteditable:"true"}},[e._v(" "+e._s(t.note||"不参与统计")+" ")])]):0===t.members&&"no"!==t.type||"no"===t.type?n("div",{staticClass:"empty-view"},[n("span",{attrs:{contenteditable:"true"}},[e._v(" "+e._s("无住户")+" ")])]):e._e()])})),0),n("h6",{attrs:{contenteditable:"true"}},[e._v(" 备注:点击房间:设置房间信息，点击待测区域:进行结果统计 ")])]),n("el-button",{staticClass:"mark-btn select-item",attrs:{round:""},on:{click:function(t){return e.saveData()}}},[e._v("保存数据")]),n("el-button",{staticClass:"mark-btn select-item",attrs:{round:""},on:{click:function(t){return e.reset()}}},[e._v("重置数据")]),n("el-button",{staticClass:"mark-btn select-item",attrs:{round:""},on:{click:function(t){return e.exportPic()}}},[e._v("导出图片")]),n("el-button",{attrs:{round:""},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("新增房间")]),n("el-button",{attrs:{round:""},on:{click:function(t){return e.delHouse()}}},[e._v("删除房间")]),e._m(0),n("el-dialog",{attrs:{title:"新建住户信息填写",width:"300",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"form",attrs:{model:e.formData,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"住户名称"}},[n("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),n("el-form-item",{attrs:{label:"住户人数"}},[n("el-input",{model:{value:e.formData.members,callback:function(t){e.$set(e.formData,"members",t)},expression:"formData.members"}})],1),n("el-form-item",{attrs:{label:"住户类型"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}},e._l(e.peopleTypeOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")])],1)],1)],1)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h5",[e._v(" 声明：本程序只为有需要的邻友提供统计便利，不做任何数据存储分析，使用人行为与本程序无关 ")])])}],r=n("ade3"),c=n("5530");n("d81d"),n("cb29"),n("e9c4"),n("81b2"),n("0eb6"),n("b7ef"),n("8bd4"),n("ac1f"),n("1276"),n("d3b7"),n("5cc6"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("99af");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return new Array(e).fill(1).map((function(e,t){return{id:t,results:{yin:0,yang:0}}}))}var m=[{label:"有人居住",value:"zh"},{label:"无人居住",value:"no"},{label:"不参与统计",value:"exclude"}],p=[{name:"101室",members:2,type:"zh",count:u()},{name:"102室",members:1,type:"zh",count:u()},{name:"103室",members:0,type:"exclude",note:"不参与统计",count:u()},{name:"104室",members:4,type:"zh",count:u()},{name:"201室",members:2,type:"zh",count:u()},{name:"202室",members:0,type:"no",note:"无住户",count:u()},{name:"203室",members:0,type:"no",note:"无住户",count:u()},{name:"204室",members:1,type:"zh",count:u()},{name:"301室",members:2,type:"zh",count:u()},{name:"302室",members:0,type:"no",count:u()},{name:"303室",members:1,type:"no",note:"无住户",count:u()},{name:"304室",members:1,type:"zh",count:u()},{name:"401室",members:2,type:"zh",count:u()},{name:"402室",members:0,type:"no",note:"无住户",count:u()},{name:"403室",members:2,type:"zh",count:u()},{name:"404室",members:3,type:"zh",count:u()},{name:"501室",members:1,type:"zh",count:u()},{name:"502室",members:1,type:"zh",count:u()},{name:"503室",members:3,type:"zh",count:u()},{name:"504室",members:2,type:"zh",count:u()},{name:"601室",members:1,type:"zh",count:u()},{name:"602室",members:4,type:"zh",count:u()},{name:"603室",members:0,type:"no",note:"无住户",count:u()},{name:"604室",members:2,type:"zh",count:u()},{name:"701室",members:1,type:"zh",count:u()},{name:"702室",members:1,type:"zh",count:u()},{name:"703室",members:2,type:"zh",count:u()},{name:"704室",members:0,type:"no",count:u()}],f=n("c0e9"),d=n.n(f),b="抗原自测邻友汇总",v=new Array(100).fill(1).map((function(e,t){var n=t+1;return{label:n,value:n}})),h={name:"HelloWorld",props:{msg:String},data:function(){return{houstOptions:v,formData:{name:"xxx室",type:"no",members:0},dialogFormVisible:!1,pageConfig:{title:b,id:26},houseList:JSON.parse(JSON.stringify(p)),selectValue:"",options:[{label:0,value:0},{label:1,value:1},{label:2,value:2},{label:3,value:3},{label:4,value:4},{label:5,value:5},{label:6,value:6},{label:7,value:7}],peopleTypeOptions:m,dateStr:(new Date).toLocaleString()}},watch:{houseList:{deep:!0,handler:function(){this.saveData()}}},mounted:function(){this.selectHouseFromCache()},methods:{onSubmit:function(){var e=JSON.parse(JSON.stringify(this.formData));e.count=u(),this.houseList.push(e),this.dialogFormVisible=!1},delHouse:function(){this.houseList.pop()},exportPic:function(){var e=document.getElementById("canvas"),t=e.clientWidth,n=e.clientHeight,a=document.createElement("canvas"),l=1;a.width=t*l,a.height=n*l,a.style.width=e.clientWidth*l+"px",a.style.height=e.clientHeight*l+"px",a.getContext("2d").scale(l,l);var s={scale:l,canvas:a,logging:!1,width:t,height:n,useCORS:!0};d()(e,s).then((function(e){var t=e.toDataURL("image/png");if(window.navigator.msSaveOrOpenBlob){var n=atob(t.split(",")[1]),a=n.length,l=new Uint8Array(a);while(a--)l[a]=n.charCodeAt(a);var s=new Blob([l]);window.navigator.msSaveOrOpenBlob(s,"chart-download.png")}else{var o=document.createElement("a");o.href=t,o.setAttribute("download","chart-download"),o.click()}}))},reset:function(){localStorage.setItem("houseList",JSON.stringify([])),this.houseList=JSON.parse(JSON.stringify(p)),this.pageConfig.title=b,this.saveData()},saveData:function(){var e=this.pageConfig.id,t=JSON.parse(localStorage.getItem("houseStore"))||{},n=Object(c["a"])(Object(c["a"])({},t),{},Object(r["a"])({},e,{pageConfig:this.pageConfig,houseList:this.houseList}));localStorage.setItem("houseStore",JSON.stringify(n))},selectHouseFromCache:function(){var e=this.pageConfig.id,t=JSON.parse(localStorage.getItem("houseStore"))||{},n=t[e];if(n){var a=n.pageConfig,l=void 0===a?{}:a,s=n.houseList,o=void 0===s?[]:s;this.pageConfig=l,this.houseList=o}else this.reset()},getStateText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e||{},n=t.yin,a=t.yang;return a&&n?"".concat(n,"人阴，").concat(a,"人阳"):a?"".concat(a,"人阳"):n?"".concat(n,"人阴"):"待测"},getClass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e||{},n=t.yin,a=t.yang;return a?"test-yang":n>0?"test-ying":"test-wait"},markYin:function(e,t){var n=e.results;this.$set(n,"yin",t),this.$set(n,"yang",0)},resetYin:function(e){var t=e.results;this.$set(t,"yin",0),this.$set(t,"yang",0)}}},g=h,y=(n("c02a"),n("2877")),_=Object(y["a"])(g,o,i,!1,null,"1df565bc",null),C=_.exports,w={name:"App",components:{HelloWorld:C}},k=w,S=(n("034f"),Object(y["a"])(k,l,s,!1,null,null,null)),x=S.exports,O=n("5c96"),z=n.n(O);n("0fae");a["default"].use(z.a),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,t,n){},c02a:function(e,t,n){"use strict";n("0714")}});
//# sourceMappingURL=app.4df967b2.js.map