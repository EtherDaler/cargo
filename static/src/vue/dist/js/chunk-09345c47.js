(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09345c47"],{2834:function(e,t,s){"use strict";s.r(t);var i=s("8336"),a=s("62ad"),l=s("a523"),n=s("8fea"),r=s("ce7e"),c=s("0fd9"),o=s("8654"),h=s("71d9"),u=s("2a7f"),d=function(){var e=this,t=e._self._c;return t(l["a"],{attrs:{"fill-height":""}},[t(c["a"],{attrs:{"justify-md":"center",wrap:""}},[t(a["a"],{staticClass:"d-flex justify-center",attrs:{md12:""}},[t(n["a"],{staticClass:"elevation-1 secondary",attrs:{headers:e.headers,items:e.filialsList,"sort-by":"id","mobile-breakpoint":0,search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[t(h["a"],{attrs:{color:"primary",flat:""}},[t(u["a"],[e._v("Filials")]),t(r["a"],{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t(o["a"],{staticClass:"ma-2 px-8",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",color:"secondary"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),t("FilialCreateView",{attrs:{onCreate:e.onUpdateData}})],1)]},proxy:!0},{key:"item.name",fn:function({item:s}){return[t("router-link",{staticClass:"text-dec-none",attrs:{to:"/filial-detail/"+s.id}},[e._v(" "+e._s(s.name)+" ")])]}},{key:"item.id",fn:function({item:t}){return[e._v(" "+e._s(t.id)+" ")]}},{key:"no-data",fn:function(){return[t(i["a"],{attrs:{color:"primary"},on:{click:e.getfilials}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)},m=[],p=(s("14d9"),s("be3b")),f=s("c6a6"),I=s("b0af"),g=s("99d9"),v=s("ac7c"),x=s("169a"),b=s("2fa4"),y=function(){var e=this,t=e._self._c;return t(x["a"],{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:a}){return[t(i["a"],e._g(e._b({staticClass:"mb-2",attrs:{color:"yellow",dark:""}},"v-btn",a,!1),s),[e._v(" New Item ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(I["a"],[t(g["d"],[t("span",{staticClass:"text-h5"},[e._v("Create Filial")])]),t(g["c"],[t(l["a"],[t(c["a"],[t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(f["a"],{attrs:{autocomplete:"new-password",rules:[e.required],label:"Владелец",items:e.userList},on:{click:e.getusers},model:{value:e.owner,callback:function(t){e.owner=t},expression:"owner"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{rules:[e.required],label:"Название"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{rules:[e.required],label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{rules:[e.required],label:"Телефон"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(f["a"],{attrs:{autocomplete:"new-password",rules:[e.required],label:"Страна",items:e.countriesList},on:{click:e.getcountries},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(f["a"],{attrs:{autocomplete:"new-password",rules:[e.required],label:"Город",items:e.citiesList},on:{click:function(t){return e.getcities(e.country)}},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{rules:[e.required],label:"Адресс"},model:{value:e.adres,callback:function(t){e.adres=t},expression:"adres"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(v["a"],{attrs:{label:"Статус"},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{rules:[e.required,e.numeric],label:"Стоимость самовывоза"},model:{value:e.pickup_price,callback:function(t){e.pickup_price=t},expression:"pickup_price"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{rules:[e.required,e.numeric],label:"Стоимость пользовательской доставки"},model:{value:e.user_delivery_price,callback:function(t){e.user_delivery_price=t},expression:"user_delivery_price"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{rules:[e.required,e.numeric],label:"Стоимость доставки по умолчанию"},model:{value:e.default_price,callback:function(t){e.default_price=t},expression:"default_price"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{rules:[e.required,e.numeric],label:"Налог по умолчанию"},model:{value:e.default_tax,callback:function(t){e.default_tax=t},expression:"default_tax"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{rules:[e.required,e.numeric],label:"Страхование по умолчанию"},model:{value:e.default_safe,callback:function(t){e.default_safe=t},expression:"default_safe"}})],1),t(a["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(o["a"],{attrs:{rules:[e.required,e.numeric],label:"Стоимость возвращенной доставки по умолчанию"},model:{value:e.back_deliv_price,callback:function(t){e.back_deliv_price=t},expression:"back_deliv_price"}})],1)],1)],1)],1),t(g["a"],[t(b["a"]),t(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),t(i["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)},_=[],k={name:"FilialCreateView",props:{onCreate:Function},data:()=>({snack:!1,max25chars:e=>e.length<=25||"Input too long!",pagination:{},userList:[],userDict:[],countriesList:[],countriesDict:[],citiesList:[],citiesDict:[],editedIndex:-1,dialog:!1,owner:"",name:"",email:"",phone:"",country:"",city:"",adres:"",status:"",pickup_price:"",user_delivery_price:"",default_price:"",default_tax:"",default_safe:"",back_deliv_price:"",dialogDelete:!1}),computed:{formTitle(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()},userList(){this.getHeaders()}},methods:{getusers(){0==this.userList.length&&p["a"].get("auth/users/?format=json").then(e=>{for(let t=0;t<e.data.length;t++)this.userDict[e.data[t].phone]=e.data[t].id,this.userList.push(e.data[t].phone)}).catch(e=>console.log(e))},getcountries(){0==this.countriesList.length&&p["a"].get("/locations/countries/?format=json").then(e=>{for(let t=0;t<e.data.length;t++)this.countriesDict[e.data[t].name]=e.data[t].id,this.countriesList.push(e.data[t].name)}).catch(e=>console.log(e))},getcities(e){this.citiesList=[],p["a"].get("/locations/cities/?format=json&country="+e).then(e=>{for(let t=0;t<e.data.length;t++)this.citiesDict[e.data[t].name]=e.data[t].id,this.citiesList.push(e.data[t].name)}).catch(e=>console.log(e))},callTableAction(e,t,s){const i=this.userList.indexOf(e);let a=this.editedItem;this.$store.dispatch("updateTableItem",{endpoint:t,tableItem:a,method:s}).then(()=>{this.userList.splice(i,1),this.saveInline()}).catch(e=>{console.log(e),this.cancelInline})},deleteItem(e){if(confirm("Are you sure you want to delete this item?")){this.editedItem=Object.assign({},e);let t="users/delete/"+this.editedItem.username,s="delete";this.callTableAction(e,t,s)}},close(){this.dialog=!1,this.owner="",this.name="",this.email="",this.phone="",this.country="",this.city="",this.adres="",this.status="",this.pickup_price="",this.user_delivery_price="",this.default_price="",this.default_tax="",this.default_safe="",this.back_deliv_price="",setTimeout(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},300)},send(e){this.onCreate(e)},async save(){let e={owner:this.userDict[this.owner],name:this.name,email:this.email,phone:this.phone,country:this.countriesDict[this.country],city:this.citiesDict[this.city],adres:this.adres,status:this.status,pickup_price:this.pickup_price,user_delivery_price:this.user_delivery_price,default_price:this.default_price,default_tax:this.default_tax,default_safe:this.default_safe,back_deliv_price:this.back_deliv_price},t={};await p["a"].post("felials/",e,{body:e}).then(e=>{t=e.data}).catch(e=>{console.log(e)}),this.send(t),this.close()},saveInline(){this.snack=!0,this.snackColor="success",this.snackText="Data saved"},cancelInline(){this.snack=!0,this.snackColor="error",this.snackText="Canceled"},reset(){this.snack=!0,this.snackColor="success",this.snackText="Data reset to default"},openInline(){this.snack=!0,this.snackColor="info",this.snackText="Dialog opened"},closeInline(){console.log("Dialog closed")},required:function(e){return!!e||"This field is required."},isNumber(e){if("string"===typeof e)return!isNaN(e)},numeric:function(e){return!(!this.isNumber(e)&&"number"!==typeof e)||"This field must be numeric"}}},S=k,w=s("2877"),D=Object(w["a"])(S,y,_,!1,null,"3918a546",null),C=D.exports,L={components:{FilialCreateView:C},name:"CargoesView",data:()=>({snack:!1,snackColor:"",snackText:"",max25chars:e=>e.length<=25||"Input too long!",pagination:{},filialsList:[],checkboxAdmin:!0,checkboxActive:!1,rowsAmount:[15,20,25,{text:"$vuetify.dataIterator.rowsPerPageAll",value:-1}],dialog:!1,search:"",headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Name",value:"name"},{text:"Owner",value:"owner.phone"},{text:"Phone",value:"phone"},{text:"Email",value:"email"},{text:"Country",value:"country"},{text:"City",value:"city"},{text:"Address",value:"adres"}],editedIndex:-1,defaultItem:{owner:"",name:"",email:"",phone:"",country:"",city:"",adres:"",status:"",image:"",pickup_price:"",user_delivery_price:"",default_price:"",default_tax:"",default_safe:"",back_deliv_price:""},dialogDelete:!1}),computed:{formTitle(){return-1===this.editedIndex?"New Item":"Edit Item"}},created(){this.getfilials()},methods:{getfilials(){p["a"].get("/felials/?format=json").then(e=>{this.filialsList=e.data}).catch(e=>console.log(e))},onUpdateData(e){this.filialsList.push(e)}}},T=L,F=(s("9807"),Object(w["a"])(T,d,m,!1,null,null,null));t["default"]=F.exports},"2bfd":function(e,t,s){},4853:function(e,t,s){},9807:function(e,t,s){"use strict";s("4853")},c6a6:function(e,t,s){"use strict";s("2bfd");var i=s("b974"),a=s("8654"),l=s("d9f7"),n=s("80d2");const r={...i["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(n["q"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=i["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...r,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=i["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){e!==t&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===n["x"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===n["x"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==n["x"].backspace&&e!==n["x"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,a=e!==i-1?e:e-1,l=this.selectedItems[a];l?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=a},clearableCallback(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput(){const e=a["a"].options.methods.genInput.call(this);return e.data=Object(l["a"])(e.data,{attrs:{"aria-activedescendant":Object(n["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(n["o"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=i["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[n["x"].home,n["x"].end].includes(t)||i["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){i["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){i["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],a=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",a),null==(s=e.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",a),e.preventDefault()}}})}}]);
//# sourceMappingURL=chunk-09345c47.js.map