(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42bf02e6"],{"09c7":function(e,t,a){"use strict";a("25d7")},"25d7":function(e,t,a){},e912:function(e,t,a){"use strict";a.r(t);var s=a("8336"),r=a("62ad"),i=a("a523"),n=a("8fea"),c=a("ce7e"),o=a("0fd9"),l=a("8654"),d=a("71d9"),u=a("2a7f"),p=function(){var e=this,t=e._self._c;return t(i["a"],{attrs:{"fill-height":""}},[t(o["a"],{attrs:{"justify-md":"center",wrap:""}},[t(r["a"],{staticClass:"d-flex justify-center",attrs:{md12:""}},[t(n["a"],{staticClass:"elevation-1 secondary",attrs:{headers:e.headers,items:e.cargoesList,"sort-by":"id","mobile-breakpoint":0,search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[t(d["a"],{attrs:{color:"primary",flat:""}},[t(u["a"],[e._v("My Cargoes")]),t(c["a"],{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t(l["a"],{staticClass:"ma-2 px-8",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",color:"secondary"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.name",fn:function({item:a}){return[t("router-link",{staticClass:"text-dec-none",attrs:{to:"/crud-detail/"+a.slug}},[e._v(" "+e._s(a.name)+" ")])]}},{key:"item.id",fn:function({item:t}){return[e._v(" "+e._s(t.id)+" ")]}},{key:"no-data",fn:function(){return[t(s["a"],{attrs:{color:"primary"},on:{click:e.getcargoes}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)},m=[],y=a("be3b"),f={data:()=>({snack:!1,snackColor:"",snackText:"",max25chars:e=>e.length<=25||"Input too long!",pagination:{},cargoesList:[],checkboxAdmin:!0,checkboxActive:!1,rowsAmount:[15,20,25,{text:"$vuetify.dataIterator.rowsPerPageAll",value:-1}],dialog:!1,search:"",headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Name",value:"name"},{text:"Weight",value:"weight"},{text:"Status",value:"status.name"},{text:"Felial",value:"felial.name"},{text:"Days for delivery",value:"delivery_day",sortable:!1},{text:"From",value:"recipient_city"},{text:"Price",value:"total_price"}],editedIndex:-1,defaultItem:{name:"",shipping_date:"",shipping_type:"",felial:"",sender:"",recipient:"",status:"",weight:"",weight_type:"",delivery_price:"",customs_clearance:"",extra_expenses:"",sender_country:"",recipient_country:"",sender_city:"",recipient_city:"",delivery_day:"",pay_type:"",pay_status:"",payment_date:"",total_price:""},dialogDelete:!1}),computed:{formTitle(){return-1===this.editedIndex?"New Item":"Edit Item"}},created(){this.getcargoes()},methods:{getcargoes(){y["a"].get("/cargoes/my_cargoes/?format=json").then(e=>{this.cargoesList=e.data}).catch(e=>console.log(e))}}},h=f,g=(a("09c7"),a("2877")),_=Object(g["a"])(h,p,m,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-42bf02e6.d81ffb37.js.map