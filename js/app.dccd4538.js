(function(e){function t(t){for(var n,i,o=t[0],r=t[1],c=t[2],m=0,p=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(p.length)p.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,o=1;o<a.length;o++){var r=a[o];0!==s[r]&&(n=!1)}n&&(l.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},l=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=r;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"0dd6":function(e,t,a){"use strict";a("5ef9")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("HelloWorld")],1)},l=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{position:"relative"}},[a("div",{staticClass:"container",attrs:{id:"canvas"}},[a("div",{staticClass:"title-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.pageConfig.title,expression:"pageConfig.title"}],staticClass:"title-wrap",staticStyle:{width:"300px"},attrs:{placeholder:"请输入标题"},domProps:{value:e.pageConfig.title},on:{input:function(t){t.target.composing||e.$set(e.pageConfig,"title",t.target.value)}}})]),a("div",{staticClass:"select-house"},[a("div",[a("span",[e._v(" 楼栋： ")]),a("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择","allow-create":"",filterable:""},on:{change:function(t){return e.selectHouseFromCache()}},model:{value:e.pageConfig.id,callback:function(t){e.$set(e.pageConfig,"id",t)},expression:"pageConfig.id"}},e._l(e.houstOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("div",{staticClass:"title-wrap",staticStyle:{"margin-left":"8px"}},[e._v(" "+e._s(e.pageConfig.id)+"号楼 ")])],1),a("div",{staticStyle:{"padding-bottom":"8px"}},[e._v("更新时间："+e._s(e.dateStr))])]),a("div",{staticClass:"hello"},e._l(e.houseList,(function(t,n){return a("div",{key:n,staticClass:"house-item"},[a("div",{staticClass:"house-item-left"},[a("el-popover",{attrs:{placement:"right",width:"200",height:"400",trigger:"click"}},[a("div",[a("div",{staticClass:"select-item"},[a("span",[e._v(" 住户名称: ")]),a("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择",maxlength:"6"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"house.name"}})],1),a("div",{staticClass:"select-item"},[a("span",[e._v(" 家庭人数: ")]),a("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择","allow-create":"",filterable:""},model:{value:t.members,callback:function(a){e.$set(t,"members",a)},expression:"house.members"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"select-item"},[a("span",[e._v(" 居住类型: ")]),a("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"house.type"}},e._l(e.peopleTypeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("div",{staticClass:"link house-info",staticStyle:{height:"100px"},attrs:{slot:"reference"},slot:"reference"},[a("div",{staticClass:"house-info-name",staticStyle:{width:"100%"}},[e._v(" "+e._s(t.name)+e._s(t.members)+"人 ")])])])],1),"zh"===t.type?a("div",{staticClass:"house-item-right"},e._l(t.count,(function(n,s){return a("div",{key:s,staticClass:"cout-item",class:e.getClass(n.results)},[a("el-popover",{attrs:{placement:"right",width:"300",trigger:"click"}},[a("div",[a("el-button",{staticClass:"mark-btn select-item",attrs:{round:""},on:{click:function(a){return e.markYin(n,t.members)}}},[e._v("标记全阴")]),a("el-button",{staticClass:"mark-btn select-item",attrs:{round:""},on:{click:function(t){return e.resetYin(n)}}},[e._v("重置标记")]),a("div",{staticClass:"select-item"},[a("span",{staticClass:"test-ying-text"},[e._v(" 阴性: ")]),a("el-select",{attrs:{placeholder:"请选择","allow-create":"",filterable:""},model:{value:n.results.yin,callback:function(t){e.$set(n.results,"yin",t)},expression:"countItem.results.yin"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"select-item"},[a("span",{staticClass:"test-yang-text"},[e._v(" 阳性: ")]),a("el-select",{attrs:{placeholder:"请选择","allow-create":"",filterable:""},model:{value:n.results.yang,callback:function(t){e.$set(n.results,"yang",t)},expression:"countItem.results.yang"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("div",{staticClass:"link",attrs:{slot:"reference"},slot:"reference"},[e._v(" "+e._s(e.getStateText(n.results))+" ")])])],1)})),0):"exclude"===t.type?a("div",{staticClass:"empty-view"},[a("div",{staticClass:"house-info-name"},[e._v(" "+e._s("不参与统计")+" ")])]):0===t.members&&"no"!==t.type||"no"===t.type?a("div",{staticClass:"empty-view"},[a("div",{staticClass:"house-info-name"},[e._v(" "+e._s("无住户")+" ")])]):e._e()])})),0),a("h6",{attrs:{contenteditable:"true"}},[e._v(" 备注:点击房间:设置房间信息，点击待测区域:进行结果统计 ")])]),a("div",{staticClass:"bottom-area"},[a("el-button",{staticClass:"mark-btn select-item",attrs:{round:""},on:{click:function(t){return e.saveDataInfo()}}},[e._v("保存数据")]),a("el-button",{staticClass:"mark-btn select-item",attrs:{round:""},on:{click:function(t){return e.resetInfo()}}},[e._v("重置数据")]),a("el-button",{staticClass:"mark-btn select-item",attrs:{round:""},on:{click:function(t){return e.exportPic()}}},[e._v("导出图片")]),a("el-button",{attrs:{round:""},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("新增房间")]),a("el-button",{attrs:{round:""},on:{click:function(t){return e.delHouse()}}},[e._v("删除房间")]),e._m(0)],1),a("el-dialog",{attrs:{title:"新建住户信息填写",width:"300",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"住户名称"}},[a("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{label:"住户人数"}},[a("el-input",{model:{value:e.formData.members,callback:function(t){e.$set(e.formData,"members",t)},expression:"formData.members"}})],1),a("el-form-item",{attrs:{label:"住户类型"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}},e._l(e.peopleTypeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")])],1)],1)],1)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h5",[e._v(" 声明：本程序只为有需要的邻友提供统计便利，不做任何数据存储分析，使用人行为与本程序无关 ")])])}],r=a("ade3"),c=a("5530");a("d81d"),a("cb29"),a("e9c4"),a("81b2"),a("0eb6"),a("b7ef"),a("8bd4"),a("ac1f"),a("1276"),a("d3b7"),a("5cc6"),a("907a"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("99af");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return new Array(e).fill(1).map((function(e,t){return{id:t,results:{yin:0,yang:0}}}))}var m=[{label:"有人居住",value:"zh"},{label:"无人居住",value:"no"},{label:"不参与统计",value:"exclude"}],p=[{name:"101室",members:2,type:"zh",count:u()},{name:"102室",members:1,type:"zh",count:u()},{name:"103室",members:0,type:"exclude",note:"不参与统计",count:u()},{name:"104室",members:4,type:"zh",count:u()},{name:"201室",members:2,type:"zh",count:u()},{name:"202室",members:0,type:"no",count:u()},{name:"203室",members:0,type:"no",count:u()},{name:"204室",members:1,type:"zh",count:u()},{name:"301室",members:2,type:"zh",count:u()},{name:"302室",members:0,type:"no",count:u()},{name:"303室",members:1,type:"no",count:u()},{name:"304室",members:1,type:"zh",count:u()},{name:"401室",members:2,type:"zh",count:u()},{name:"402室",members:0,type:"no",count:u()},{name:"403室",members:2,type:"zh",count:u()},{name:"404室",members:3,type:"zh",count:u()},{name:"501室",members:1,type:"zh",count:u()},{name:"502室",members:1,type:"zh",count:u()},{name:"503室",members:3,type:"zh",count:u()},{name:"504室",members:2,type:"zh",count:u()},{name:"601室",members:1,type:"zh",count:u()},{name:"602室",members:4,type:"zh",count:u()},{name:"603室",members:0,type:"no",count:u()},{name:"604室",members:2,type:"zh",count:u()},{name:"701室",members:1,type:"zh",count:u()},{name:"702室",members:1,type:"zh",count:u()},{name:"703室",members:2,type:"zh",count:u()},{name:"704室",members:0,type:"no",count:u()}],f=a("c0e9"),d=a.n(f),h="抗原、核酸检测汇总",v=new Array(200).fill(1).map((function(e,t){var a=t+1;return{label:a,value:a}})),b={name:"HelloWorld",props:{msg:String},data:function(){return{houstOptions:v,formData:{name:"xxx室",type:"no",members:0},dialogFormVisible:!1,pageConfig:{title:h,id:99},houseList:JSON.parse(JSON.stringify(p)),selectValue:"",options:[{label:0,value:0},{label:1,value:1},{label:2,value:2},{label:3,value:3},{label:4,value:4},{label:5,value:5},{label:6,value:6},{label:7,value:7}],peopleTypeOptions:m,dateStr:(new Date).toLocaleString()}},watch:{houseList:{deep:!0,handler:function(){this.saveData()}}},mounted:function(){this.selectHouseFromCache()},methods:{onSubmit:function(){if(this.houseList.length>=300)this.$message({message:"最多添加300间住户",type:"warning"});else{var e=JSON.parse(JSON.stringify(this.formData));e.count=u(),this.houseList.push(e),this.dialogFormVisible=!1,this.$message({message:"成功",type:"success"})}},delHouse:function(){this.houseList.length<=1?this.$message({message:"请至少保留一名住户",type:"warning"}):(this.houseList.pop(),this.$message({message:"成功",type:"success"}))},exportPic:function(){var e=document.getElementById("canvas"),t=e.clientWidth,a=e.clientHeight,n=document.createElement("canvas"),s=1;n.width=t*s,n.height=a*s,n.style.width=e.clientWidth*s+"px",n.style.height=e.clientHeight*s+"px",n.getContext("2d").scale(s,s);var l={scale:s,canvas:n,logging:!1,width:t,height:a,useCORS:!0};d()(e,l).then((function(e){var t=e.toDataURL("image/png");if(window.navigator.msSaveOrOpenBlob){var a=atob(t.split(",")[1]),n=a.length,s=new Uint8Array(n);while(n--)s[n]=a.charCodeAt(n);var l=new Blob([s]);window.navigator.msSaveOrOpenBlob(l,"chart-download.png")}else{var i=document.createElement("a");i.href=t,i.setAttribute("download","chart-download"),i.click()}}))},reset:function(){localStorage.setItem("houseList",JSON.stringify([])),this.houseList=JSON.parse(JSON.stringify(p)),this.pageConfig.title=h,this.saveData()},resetInfo:function(){this.reset(),this.$message({message:"成功",type:"success"})},saveDataInfo:function(){this.saveData(),this.$message({message:"成功",type:"success"})},saveData:function(){var e=this.pageConfig.id,t=JSON.parse(localStorage.getItem("houseStore"))||{},a=Object(c["a"])(Object(c["a"])({},t),{},Object(r["a"])({},e,{pageConfig:this.pageConfig,houseList:this.houseList}));localStorage.setItem("houseStore",JSON.stringify(a))},selectHouseFromCache:function(){var e=this.pageConfig.id,t=JSON.parse(localStorage.getItem("houseStore"))||{},a=t[e];if(a){var n=a.pageConfig,s=void 0===n?{}:n,l=a.houseList,i=void 0===l?[]:l;this.pageConfig=s,this.houseList=i}else this.reset()},getStateText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e||{},a=t.yin,n=t.yang;return n&&a?"".concat(a,"人阴，").concat(n,"人阳"):n?"".concat(n,"人阳"):a?"".concat(a,"人阴"):"待测"},getClass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e||{},a=t.yin,n=t.yang;return n?"test-yang":a>0?"test-ying":"test-wait"},markYin:function(e,t){var a=e.results;this.$set(a,"yin",t),this.$set(a,"yang",0)},resetYin:function(e){var t=e.results;this.$set(t,"yin",0),this.$set(t,"yang",0)}}},g=b,y=(a("0dd6"),a("2877")),C=Object(y["a"])(g,i,o,!1,null,"e95420ac",null),_=C.exports,w={name:"App",components:{HelloWorld:_}},x=w,S=(a("034f"),Object(y["a"])(x,s,l,!1,null,null,null)),k=S.exports,O=a("5c96"),$=a.n(O);a("0fae");n["default"].use($.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(k)}}).$mount("#app")},"5ef9":function(e,t,a){},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.dccd4538.js.map