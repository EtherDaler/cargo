(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2720001a"],{"1e49":function(e,t,s){"use strict";s("43eb")},2677:function(e,t,s){"use strict";var i=s("8654");t["a"]=i["a"]},"2bfd":function(e,t,s){},"43eb":function(e,t,s){},5803:function(e,t,s){},c6a6:function(e,t,s){"use strict";s("2bfd");var i=s("b974"),a=s("8654"),n=s("d9f7"),l=s("80d2");const o={...i["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:()=>o},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(l["q"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=i["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...o,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=i["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){e!==t&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===l["x"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l["x"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l["x"].backspace&&e!==l["x"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,a=e!==i-1?e:e-1,n=this.selectedItems[a];n?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=a},clearableCallback(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput(){const e=a["a"].options.methods.genInput.call(this);return e.data=Object(n["a"])(e.data,{attrs:{"aria-activedescendant":Object(l["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["o"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=i["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[l["x"].home,l["x"].end].includes(t)||i["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){i["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){i["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],a=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",a),null==(s=e.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",a),e.preventDefault()}}})},f3cb:function(e,t,s){"use strict";s.r(t);var i=s("8336"),a=s("62ad"),n=s("a523"),l=s("8fea"),o=s("ce7e"),r=s("0fd9"),c=s("8654"),h=s("71d9"),u=s("2a7f"),d=function(){var e=this,t=e._self._c;return t(n["a"],{attrs:{"fill-height":""}},[t(r["a"],{attrs:{"justify-md":"center",wrap:""}},[t(a["a"],{staticClass:"d-flex justify-center",attrs:{md12:""}},[t(l["a"],{staticClass:"elevation-1 secondary",attrs:{headers:e.headersCountry,items:e.countriesList,"sort-by":"id","mobile-breakpoint":0,search:e.search_country},scopedSlots:e._u([{key:"top",fn:function(){return[t(h["a"],{attrs:{color:"primary",flat:""}},[t(u["a"],[e._v("Countries")]),t(o["a"],{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t(c["a"],{staticClass:"ma-2 px-8",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",color:"secondary"},model:{value:e.search_country,callback:function(t){e.search_country=t},expression:"search_country"}}),t("CountryCreateView",{attrs:{onCreate:e.updateCountries}})],1)]},proxy:!0},{key:"item.name",fn:function({item:s}){return[t("router-link",{staticClass:"text-dec-none",attrs:{to:"/crud-detail/"+s.id}},[e._v(" "+e._s(s.name)+" ")])]}},{key:"item.id",fn:function({item:t}){return[e._v(" "+e._s(t.id)+" ")]}},{key:"no-data",fn:function(){return[t(i["a"],{attrs:{color:"primary"},on:{click:e.getcountries}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1),t(r["a"],{attrs:{"justify-md":"center",wrap:""}},[t(a["a"],{staticClass:"d-flex justify-center",attrs:{md12:""}},[t(l["a"],{staticClass:"elevation-1 secondary",attrs:{headers:e.headersCity,items:e.citiesList,"sort-by":"id","mobile-breakpoint":0,search:e.search_city},scopedSlots:e._u([{key:"top",fn:function(){return[t(h["a"],{attrs:{color:"primary",flat:""}},[t(u["a"],[e._v("Cities")]),t(o["a"],{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t(c["a"],{staticClass:"ma-2 px-8",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",color:"secondary"},model:{value:e.search_city,callback:function(t){e.search_city=t},expression:"search_city"}}),t("CityCreateView",{attrs:{onCreate:e.updateCities}})],1)]},proxy:!0},{key:"item.name",fn:function({item:s}){return[t("router-link",{staticClass:"text-dec-none",attrs:{to:"/crud-detail/"+s.id}},[e._v(" "+e._s(s.name)+" ")])]}},{key:"item.id",fn:function({item:t}){return[e._v(" "+e._s(t.id)+" ")]}},{key:"no-data",fn:function(){return[t(i["a"],{attrs:{color:"primary"},on:{click:e.getcities}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)},p=[],m=(s("14d9"),s("be3b")),f=s("b0af"),g=s("99d9"),y=s("169a"),I=(s("13d5"),s("5803"),s("2677")),v=s("cc20"),x=s("80d2"),b=s("d9bd"),C=s("d9f7"),S=I["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"===typeof e||[1e3,1024].includes(e)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:e=>Object(x["F"])(e).every(e=>null!=e&&"object"===typeof e)}},computed:{classes(){return{...I["a"].options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const e=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);const t=this.internalArrayValue.reduce((e,{size:t=0})=>e+t,0);return this.$vuetify.lang.t(this.counterSizeString,e,Object(x["v"])(t,1024===this.base))},internalArrayValue(){return Object(x["F"])(this.internalValue)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},isMultiple(){return this.$attrs.hasOwnProperty("multiple")},text(){return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map(e=>{const{name:t="",size:s=0}=e,i=this.truncateText(t);return this.showSize?`${i} (${Object(x["v"])(s,1024===this.base)})`:i}):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(e){!0===e&&Object(b["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value(e){const t=this.isMultiple?e:e?[e]:[];Object(x["i"])(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map((e,t)=>this.$createElement(v["a"],{props:{small:this.smallChips},on:{"click:close":()=>{const e=this.internalValue;e.splice(t,1),this.internalValue=e}}},[e])):[]},genControl(){const e=I["a"].options.methods.genControl.call(this);return this.hideInput&&(e.data.style=Object(C["c"])(e.data.style,{display:"none"})),e},genInput(){const e=I["a"].options.methods.genInput.call(this);return delete e.data.domProps.value,delete e.data.on.input,e.data.on.change=this.onInput,[this.genSelections(),e]},genPrependSlot(){if(!this.prependIcon)return null;const e=this.genIcon("prepend",()=>{this.$refs.input.click()});return this.genSlot("prepend","outer",[e])},genSelectionText(){const e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections(){const e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((t,s)=>{this.$scopedSlots.selection&&e.push(this.$scopedSlots.selection({text:this.text[s],file:t,index:s}))}):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot(){const e=I["a"].options.methods.genTextFieldSlot.call(this);return e.data.on={...e.data.on||{},click:()=>this.$refs.input.click()},e},onInput(e){const t=[...e.target.files||[]];this.internalValue=this.isMultiple?t:t[0],this.initialValue=this.internalValue},onKeyDown(e){this.$emit("keydown",e)},truncateText(e){if(e.length<Number(this.truncateLength))return e;const t=Math.floor((Number(this.truncateLength)-1)/2);return`${e.slice(0,t)}…${e.slice(e.length-t)}`}}}),k=s("2fa4"),w=function(){var e=this,t=e._self._c;return t(y["a"],{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:a}){return[t(i["a"],e._g(e._b({staticClass:"mb-2",attrs:{color:"yellow",dark:""}},"v-btn",a,!1),s),[e._v(" New Item ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(f["a"],[t(g["d"],[t("span",{staticClass:"text-h5"},[e._v("Add Country")])]),t(g["c"],[t(n["a"],[t(r["a"],[t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(c["a"],{attrs:{rules:[e.required],label:"Название"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(c["a"],{attrs:{rules:[e.required],label:"Инициалы"},model:{value:e.initials,callback:function(t){e.initials=t},expression:"initials"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(c["a"],{attrs:{rules:[e.required],label:"Код"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(S,{attrs:{label:"Флаг",filled:"","prepend-icon":"mdi-camera"},model:{value:e.flag,callback:function(t){e.flag=t},expression:"flag"}})],1)],1)],1)],1),t(g["a"],[t(k["a"]),t(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),t(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)},D=[],_={name:"CountryCreateView",props:{onCreate:Function},data:()=>({snack:!1,max25chars:e=>e.length<=25||"Input too long!",pagination:{},editedIndex:-1,dialog:!1,name:"",initials:"",code:"",flag:null,dialogDelete:!1}),computed:{formTitle(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()},userList(){this.getHeaders()}},methods:{callTableAction(e,t,s){const i=this.userList.indexOf(e);let a=this.editedItem;this.$store.dispatch("updateTableItem",{endpoint:t,tableItem:a,method:s}).then(()=>{this.userList.splice(i,1),this.saveInline()}).catch(e=>{console.log(e),this.cancelInline})},deleteItem(e){if(confirm("Are you sure you want to delete this item?")){this.editedItem=Object.assign({},e);let t="users/delete/"+this.editedItem.username,s="delete";this.callTableAction(e,t,s)}},close(){this.dialog=!1,this.name="",this.initials="",this.code="",this.flag=null,setTimeout(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},300)},send(e){this.onCreate(e)},async save(){var e=new FormData;e.append("name",this.name),e.append("initials",this.initials),e.append("code",this.code),e.append("flag",this.flag);let t={};await m["a"].post("locations/countries/",e,{body:e}).then(e=>{t=e.data}).catch(e=>{console.log(e)}),this.send(t),this.close()},saveInline(){this.snack=!0,this.snackColor="success",this.snackText="Data saved"},cancelInline(){this.snack=!0,this.snackColor="error",this.snackText="Canceled"},reset(){this.snack=!0,this.snackColor="success",this.snackText="Data reset to default"},openInline(){this.snack=!0,this.snackColor="info",this.snackText="Dialog opened"},closeInline(){console.log("Dialog closed")},required:function(e){return!!e||"This field is required."}}},V=_,T=s("2877"),$=Object(T["a"])(V,w,D,!1,null,"dcf8e470",null),L=$.exports,j=s("c6a6"),O=function(){var e=this,t=e._self._c;return t(y["a"],{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:a}){return[t(i["a"],e._g(e._b({staticClass:"mb-2",attrs:{color:"yellow",dark:""}},"v-btn",a,!1),s),[e._v(" New Item ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(f["a"],[t(g["d"],[t("span",{staticClass:"text-h5"},[e._v("Add City")])]),t(g["c"],[t(n["a"],[t(r["a"],[t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(c["a"],{attrs:{rules:[e.required],label:"Название"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(j["a"],{attrs:{autocomplete:"new-password",rules:[e.required],label:"Страна",items:e.countriesList},on:{click:e.getCountries},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}})],1)],1)],1)],1),t(g["a"],[t(k["a"]),t(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),t(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)},z=[],A={name:"CityCreateView",props:{onCreate:Function},data:()=>({snack:!1,max25chars:e=>e.length<=25||"Input too long!",pagination:{},editedIndex:-1,dialog:!1,countriesList:[],countriesDict:[],name:"",country:"",dialogDelete:!1}),computed:{formTitle(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()},userList(){this.getHeaders()}},methods:{getCountries(){0==this.countriesList.length&&m["a"].get("/locations/countries/?format=json").then(e=>{for(let t=0;t<e.data.length;t++)this.countriesDict[e.data[t].name]=e.data[t].id,this.countriesList.push(e.data[t].name)}).catch(e=>console.log(e))},callTableAction(e,t,s){const i=this.userList.indexOf(e);let a=this.editedItem;this.$store.dispatch("updateTableItem",{endpoint:t,tableItem:a,method:s}).then(()=>{this.userList.splice(i,1),this.saveInline()}).catch(e=>{console.log(e),this.cancelInline})},deleteItem(e){if(confirm("Are you sure you want to delete this item?")){this.editedItem=Object.assign({},e);let t="users/delete/"+this.editedItem.username,s="delete";this.callTableAction(e,t,s)}},close(){this.dialog=!1,this.name="",this.country="",setTimeout(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},300)},send(e){this.onCreate(e)},async save(){let e={name:this.name,country:this.countriesDict[this.country]},t={};await m["a"].post("locations/cities/",e,{body:e}).then(e=>{t=e.data}).catch(e=>{console.log(e)}),this.send(t),this.close()},saveInline(){this.snack=!0,this.snackColor="success",this.snackText="Data saved"},cancelInline(){this.snack=!0,this.snackColor="error",this.snackText="Canceled"},reset(){this.snack=!0,this.snackColor="success",this.snackText="Data reset to default"},openInline(){this.snack=!0,this.snackColor="info",this.snackText="Dialog opened"},closeInline(){console.log("Dialog closed")},required:function(e){return!!e||"This field is required."}}},F=A,M=Object(T["a"])(F,O,z,!1,null,"79966e53",null),N=M.exports,q={components:{CountryCreateView:L,CityCreateView:N},name:"LocationsView",data:()=>({snack:!1,snackColor:"",snackText:"",max25chars:e=>e.length<=25||"Input too long!",pagination:{},countriesList:[],citiesList:[],rowsAmount:[15,20,25,{text:"$vuetify.dataIterator.rowsPerPageAll",value:-1}],dialog:!1,search_country:"",search_city:"",headersCountry:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Name",value:"name"},{text:"Initials",value:"initials"},{text:"Code",value:"code"}],headersCity:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Name",value:"name"},{text:"Country",value:"country"}],editedIndex:-1,dialogDelete:!1}),computed:{formTitle(){return-1===this.editedIndex?"New Item":"Edit Item"}},created(){this.getcountries(),this.getcities()},methods:{getcountries(){m["a"].get("/locations/countries/?format=json").then(e=>{this.countriesList=e.data}).catch(e=>console.log(e))},getcities(){m["a"].get("/locations/cities/?format=json").then(e=>{this.citiesList=e.data}).catch(e=>console.log(e))},updateCountries(e){this.countriesList.push(e)},updateCities(e){this.citiesList.push(e)}}},B=q,P=(s("1e49"),Object(T["a"])(B,d,p,!1,null,null,null));t["default"]=P.exports}}]);
//# sourceMappingURL=chunk-2720001a.b4736210.js.map