(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-92d63aba"],{"2bfd":function(e,t,s){},"8e05":function(e,t,s){"use strict";s("b288")},a50a:function(e,t,s){"use strict";s.r(t);var i=s("8336"),a=s("62ad"),n=s("a523"),l=s("8fea"),r=s("ce7e"),c=s("0fd9"),o=s("8654"),h=s("71d9"),d=s("2a7f"),u=function(){var e=this,t=e._self._c;return t(n["a"],{attrs:{"fill-height":""}},[t(c["a"],{attrs:{"justify-md":"center",wrap:""}},[t(a["a"],{staticClass:"d-flex justify-center",attrs:{md12:""}},[t(l["a"],{staticClass:"elevation-1 secondary",attrs:{headers:e.headers,items:e.cargoesList,"sort-by":"id","mobile-breakpoint":0,search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[t(h["a"],{attrs:{color:"primary",flat:""}},[t(d["a"],[e._v("Cargoes")]),t(r["a"],{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t(o["a"],{staticClass:"ma-2 px-8",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",color:"secondary"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),t("CargoCreateVue")],1)]},proxy:!0},{key:"item.name",fn:function({item:s}){return[t("router-link",{staticClass:"text-dec-none",attrs:{to:"/crud-detail/"+s.slug}},[e._v(" "+e._s(s.name)+" ")])]}},{key:"item.id",fn:function({item:t}){return[e._v(" "+e._s(t.id)+" ")]}},{key:"no-data",fn:function(){return[t(i["a"],{attrs:{color:"primary"},on:{click:e.getcargoes}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)},p=[],m=s("be3b"),y=s("c6a6"),g=s("b0af"),f=s("99d9"),_=s("169a"),x=s("2fa4"),v=function(){var e=this,t=e._self._c;return t(_["a"],{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:a}){return[t(i["a"],e._g(e._b({staticClass:"mb-2",attrs:{color:"yellow",dark:""}},"v-btn",a,!1),s),[e._v(" New Item ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(g["a"],[t(f["d"],[t("span",{staticClass:"text-h5"},[e._v("Create Cargo")])]),t(f["c"],[t(n["a"],[t(c["a"],[t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{label:"Name",rules:[e.required]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{directives:[{name:"mask",rawName:"v-mask",value:"####-##-##",expression:"'####-##-##'"}],attrs:{label:"Shipping Date",rules:[e.required]},model:{value:e.shipping_date,callback:function(t){e.shipping_date=t},expression:"shipping_date"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(y["a"],{attrs:{autocomplete:"new-password",label:"Shipping Type",items:e.shippingTypeList,rules:[e.required]},on:{click:e.getshipmentType},model:{value:e.shipping_type,callback:function(t){e.shipping_type=t},expression:"shipping_type"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(y["a"],{attrs:{autocomplete:"new-password",label:"Filial",items:e.filialsList,rules:[e.required]},on:{click:e.getfilials},model:{value:e.felial,callback:function(t){e.felial=t},expression:"felial"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(y["a"],{attrs:{autocomplete:"new-password",label:"Sender",items:e.userList,rules:[e.required]},on:{click:e.getusers},model:{value:e.sender,callback:function(t){e.sender=t},expression:"sender"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(y["a"],{attrs:{autocomplete:"new-password",label:"Sender Country",items:e.countriesList,rules:[e.required]},on:{click:e.getcountries},model:{value:e.sender_country,callback:function(t){e.sender_country=t},expression:"sender_country"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(y["a"],{attrs:{autocomplete:"new-password",label:"Sender City",items:e.citiesList,rules:[e.required]},on:{click:function(t){return e.getcities(e.sender_country)}},model:{value:e.sender_city,callback:function(t){e.sender_city=t},expression:"sender_city"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(y["a"],{attrs:{autocomplete:"new-password",label:"Recipient",items:e.userList,rules:[e.required]},on:{click:e.getusers},model:{value:e.recipient,callback:function(t){e.recipient=t},expression:"recipient"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(y["a"],{attrs:{autocomplete:"new-password",label:"Recipient Country",items:e.countriesList,rules:[e.required]},on:{click:e.getcountries},model:{value:e.recipient_country,callback:function(t){e.recipient_country=t},expression:"recipient_country"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(y["a"],{attrs:{autocomplete:"new-password",label:"Recipient City",items:e.citiesList2,rules:[e.required]},on:{click:function(t){return e.getcities2(e.recipient_country)}},model:{value:e.recipient_city,callback:function(t){e.recipient_city=t},expression:"recipient_city"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(y["a"],{attrs:{autocomplete:"new-password",label:"Status",items:e.statusList,rules:[e.required]},on:{click:e.getstatus},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{label:"Weight",rules:[e.required,e.numeric]},model:{value:e.weight,callback:function(t){e.weight=t},expression:"weight"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{label:"Weight Type",rules:[e.required]},model:{value:e.weight_type,callback:function(t){e.weight_type=t},expression:"weight_type"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{label:"Delivery Day",rules:[e.required,e.numeric]},model:{value:e.delivery_day,callback:function(t){e.delivery_day=t},expression:"delivery_day"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{label:"Delivery Price",rules:[e.required,e.numeric]},model:{value:e.delivery_price,callback:function(t){e.delivery_price=t},expression:"delivery_price"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{label:"Customs Clearance",rules:[e.required,e.numeric]},model:{value:e.customs_clearance,callback:function(t){e.customs_clearance=t},expression:"customs_clearance"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{label:"Extra Expenses",rules:[e.required,e.numeric]},model:{value:e.extra_expenses,callback:function(t){e.extra_expenses=t},expression:"extra_expenses"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(y["a"],{attrs:{autocomplete:"new-password",label:"Payment Type",items:e.payTypeList,rules:[e.required]},on:{click:e.getpayType},model:{value:e.pay_type,callback:function(t){e.pay_type=t},expression:"pay_type"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(y["a"],{attrs:{autocomplete:"new-password",rules:[e.required],label:"Payment Status",items:e.payStatusList},on:{click:e.getpayStatus},model:{value:e.pay_status,callback:function(t){e.pay_status=t},expression:"pay_status"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{directives:[{name:"mask",rawName:"v-mask",value:"####-##-##",expression:"'####-##-##'"}],attrs:{rules:[e.required],label:"Payment Date"},model:{value:e.payment_date,callback:function(t){e.payment_date=t},expression:"payment_date"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{rules:[e.required,e.numeric],label:"Total Price"},model:{value:e.total_price,callback:function(t){e.total_price=t},expression:"total_price"}})],1)],1)],1)],1),t(f["a"],[t(x["a"]),t(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),t(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)},I=[],b=(s("14d9"),{name:"CargoCreateVue",data:()=>({snack:!1,max25chars:e=>e.length<=25||"Input too long!",pagination:{},userList:[],userDict:[],countriesList:[],countriesDict:[],citiesList:[],citiesDict:[],citiesList2:[],citiesDict2:[],statusList:[],statusDict:[],filialsList:[],filialsDict:[],payTypeList:[],payTypeDict:[],payStatusList:[],payStatusDict:[],shippingTypeList:[],shippingTypeDict:[],rowsAmount:[15,20,25,{text:"$vuetify.dataIterator.rowsPerPageAll",value:-1}],dialog:!1,search:"",headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Name",value:"name"},{text:"Weight",value:"weight"},{text:"Status",value:"status.name"},{text:"Felial",value:"felial.name"},{text:"Days for delivery",value:"delivery_day",sortable:!1},{text:"From",value:"recipient_city"},{text:"Price",value:"total_price"}],editedIndex:-1,name:"",shipping_date:"",shipping_type:"",felial:"",sender:"",recipient:"",status:"",weight:"",weight_type:"",delivery_price:"",customs_clearance:"",extra_expenses:"",sender_country:"",recipient_country:"",sender_city:"",recipient_city:"",delivery_day:"",pay_type:"",pay_status:"",payment_date:"",total_price:"",dialogDelete:!1}),computed:{formTitle(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()},userList(){this.getHeaders()}},methods:{getusers(){0==this.userList.length&&m["a"].get("auth/users/?format=json").then(e=>{for(let t=0;t<e.data.length;t++)this.userDict[e.data[t].phone]=e.data[t].id,this.userList.push(e.data[t].phone)}).catch(e=>console.log(e))},getcountries(){0==this.countriesList.length&&m["a"].get("/locations/countries/?format=json").then(e=>{for(let t=0;t<e.data.length;t++)this.countriesDict[e.data[t].name]=e.data[t].id,this.countriesList.push(e.data[t].name)}).catch(e=>console.log(e))},getcities(e){this.citiesList=[],m["a"].get("/locations/cities/?format=json&country="+e).then(e=>{for(let t=0;t<e.data.length;t++)this.citiesDict[e.data[t].name]=e.data[t].id,this.citiesList.push(e.data[t].name)}).catch(e=>console.log(e))},getcities2(e){this.citiesList2=[],m["a"].get("/locations/cities/?format=json&country="+e).then(e=>{for(let t=0;t<e.data.length;t++)this.citiesDict2[e.data[t].name]=e.data[t].id,this.citiesList2.push(e.data[t].name)}).catch(e=>console.log(e))},getstatus(){0==this.statusList.length&&m["a"].get("/cargoes/status/?format=json").then(e=>{for(let t=0;t<e.data.length;t++)this.statusDict[e.data[t].name]=e.data[t].id,this.statusList.push(e.data[t].name)}).catch(e=>console.log(e))},getpayType(){0==this.payTypeList.length&&m["a"].get("/cargoes/pay_type/?format=json").then(e=>{this.payTypeDict=e.data;for(let t=0;t<e.data.length;t++)this.payTypeDict[e.data[t].name]=e.data[t].id,this.payTypeList.push(e.data[t].name)}).catch(e=>console.log(e))},getpayStatus(){0==this.payStatusList.length&&m["a"].get("/cargoes/pay_status/?format=json").then(e=>{for(let t=0;t<e.data.length;t++)this.payStatusDict[e.data[t].name]=e.data[t].id,this.payStatusList.push(e.data[t].name)}).catch(e=>console.log(e))},getshipmentType(){0==this.shippingTypeList.length&&m["a"].get("/cargoes/shipment/?format=json").then(e=>{for(let t=0;t<e.data.length;t++)this.shippingTypeDict[e.data[t].name]=e.data[t].id,this.shippingTypeList.push(e.data[t].name)}).catch(e=>console.log(e))},getfilials(){0==this.filialsList.length&&m["a"].get("/felials/?format=json").then(e=>{for(let t=0;t<e.data.length;t++)this.filialsDict[e.data[t].name]=e.data[t].id,this.filialsList.push(e.data[t].name)}).catch(e=>console.log(e))},editItem(e,t=!0){this.editedIndex=this.userList.indexOf(e),e.isAdmin=this.checkboxAdmin,e.isActive=this.checkboxActive,this.editedItem=Object.assign({},e),this.dialog=t},callTableAction(e,t,s){const i=this.userList.indexOf(e);let a=this.editedItem;this.$store.dispatch("updateTableItem",{endpoint:t,tableItem:a,method:s}).then(()=>{this.userList.splice(i,1),this.saveInline()}).catch(e=>{console.log(e),this.cancelInline})},deleteItem(e){if(confirm("Are you sure you want to delete this item?")){this.editedItem=Object.assign({},e);let t="users/delete/"+this.editedItem.username,s="delete";this.callTableAction(e,t,s)}},close(){this.dialog=!1,setTimeout(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},300)},save(){let e={name:this.name,shipping_date:this.shipping_date,shipping_type:this.shippingTypeDict[this.shipping_type],sender:this.userDict[this.sender],recipient:this.userDict[this.recipient],status:this.statusDict[this.status],weight:this.weight,weight_type:this.weight_type,delivery_price:this.delivery_day,customs_clearance:this.customs_clearance,extra_expenses:this.extra_expenses,sender_country:this.countriesDict[this.sender_country],recipient_country:this.countriesDict[this.recipient_country],sender_city:this.citiesDict[this.sender_city],recipient_city:this.citiesDict2[this.recipient_city],delivery_day:this.delivery_day,pay_type:this.payTypeDict[this.pay_type],pay_status:this.payStatusDict[this.pay_status],payment_date:this.payment_date,total_price:this.total_price,felial:this.filialsDict[this.felial]};m["a"].post("cargoes/cargoes/",e,{body:e}).then(e=>{console.log(e)}).catch(e=>{console.log(e)}),this.close()},saveInline(){this.snack=!0,this.snackColor="success",this.snackText="Data saved"},cancelInline(){this.snack=!0,this.snackColor="error",this.snackText="Canceled"},reset(){this.snack=!0,this.snackColor="success",this.snackText="Data reset to default"},openInline(){this.snack=!0,this.snackColor="info",this.snackText="Dialog opened"},closeInline(){console.log("Dialog closed")},required:function(e){return!!e||"This field is required."},isNumber(e){if("string"===typeof e)return!isNaN(e)},numeric:function(e){return!(!this.isNumber(e)&&"number"!==typeof e)||"This field must be numeric"}}}),k=b,S=s("2877"),D=Object(S["a"])(k,v,I,!1,null,"38cc3768",null),w=D.exports,L={components:{CargoCreateVue:w},name:"CargoesView",data:()=>({snack:!1,snackColor:"",snackText:"",max25chars:e=>e.length<=25||"Input too long!",pagination:{},cargoesList:[],checkboxAdmin:!0,checkboxActive:!1,rowsAmount:[15,20,25,{text:"$vuetify.dataIterator.rowsPerPageAll",value:-1}],dialog:!1,search:"",headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Name",value:"name"},{text:"Weight",value:"weight"},{text:"Status",value:"status.name"},{text:"Felial",value:"felial.name"},{text:"Days for delivery",value:"delivery_day",sortable:!1},{text:"From",value:"recipient_city"},{text:"Price",value:"total_price"}],editedIndex:-1,defaultItem:{name:"",shipping_date:"",shipping_type:"",felial:"",sender:"",recipient:"",status:"",weight:"",weight_type:"",delivery_price:"",customs_clearance:"",extra_expenses:"",sender_country:"",recipient_country:"",sender_city:"",recipient_city:"",delivery_day:"",pay_type:"",pay_status:"",payment_date:"",total_price:""},dialogDelete:!1}),computed:{formTitle(){return-1===this.editedIndex?"New Item":"Edit Item"}},created(){this.getcargoes()},methods:{getcargoes(){m["a"].get("/cargoes/cargoes/?format=json").then(e=>{this.cargoesList=e.data}).catch(e=>console.log(e))}}},C=L,T=(s("8e05"),Object(S["a"])(C,u,p,!1,null,null,null));t["default"]=T.exports},b288:function(e,t,s){},c6a6:function(e,t,s){"use strict";s("2bfd");var i=s("b974"),a=s("8654"),n=s("d9f7"),l=s("80d2");const r={...i["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(l["q"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=i["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...r,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=i["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){e!==t&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===l["x"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l["x"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l["x"].backspace&&e!==l["x"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,a=e!==i-1?e:e-1,n=this.selectedItems[a];n?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=a},clearableCallback(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput(){const e=a["a"].options.methods.genInput.call(this);return e.data=Object(n["a"])(e.data,{attrs:{"aria-activedescendant":Object(l["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["o"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=i["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[l["x"].home,l["x"].end].includes(t)||i["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){i["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){i["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],a=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",a),null==(s=e.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",a),e.preventDefault()}}})}}]);
//# sourceMappingURL=chunk-92d63aba.dbc8c42b.js.map