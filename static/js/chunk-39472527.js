(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39472527"],{6755:function(t,a,e){"use strict";e.r(a);var r=e("b0af"),s=e("62ad"),n=e("a523"),i=e("8fea"),o=e("132d"),l=e("da13"),c=e("5d23"),d=e("6b53"),u=e("0fd9"),y=e("71a3"),f=e("c671"),x=e("fe57"),m=e("aac8"),p=e("9a96"),h=function(){var t=this,a=t._self._c;return a(n["a"],{style:t.$vuetify.breakpoint.mdAndUp?"width: 1660px":"width: 100%",attrs:{fluid:""}},[a(u["a"],{staticClass:"d-flex align-start mb-1"},[a(s["a"],{attrs:{col:"",md:"4"}},[a("MaterialfyHeaderCard",{attrs:{cardTitle:"Employee Stats",cardShowInnerList:!1,cardShowActions:!1,cardShowDivider:!1},scopedSlots:t._u([{key:"crdInner",fn:function(){return[a(i["a"],{staticClass:"primary",attrs:{headers:t.tableHeaders,items:t.tableItems,"hide-default-footer":"","mobile-breakpoint":0},scopedSlots:t._u([{key:"headerCell",fn:function({header:e}){return[a("span",{staticClass:"font-weight-light text-warning text--darken-3 text--red",domProps:{textContent:t._s(e.text)}})]}},{key:"items",fn:function({index:e,item:r}){return[a("td",[t._v(t._s(e+1))]),a("td",[t._v(t._s(r.name))]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(r.salary)+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(r.country)+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(r.city)+" ")])]}}])})]},proxy:!0}])})],1),a(s["a"],{attrs:{col:"",md:"3"}},[a("MaterialfyBasicCard",{attrs:{cardShowTitle:!1},scopedSlots:t._u([{key:"crdSubHeader",fn:function(){return[a(x["a"],{staticClass:"elevation-3 mb-1",attrs:{"align-with-title":"","background-color":"tertiary","center-active":""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[a("span",{staticClass:"text-subtitle-1 mr-1 d-flex align-center"},[a(o["a"],{staticClass:"ma-1"},[t._v("mdi-ballot")]),t._v(" Tasks: ")],1),a(p["a"],{attrs:{color:"secondary"}}),t._l(t.tabItems,(function(e){return a(y["a"],{key:e.tab},[a(o["a"],{staticClass:"ma-1"},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.tab)+" ")],1)}))],2)]},proxy:!0},{key:"crdInner",fn:function(){return[a(m["a"],{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},t._l(t.tabItems,(function(e){return a(f["a"],{key:e.tab},[t._l(t.textList,(function(e,s){return[a(r["a"],{key:s,staticClass:"my-3",attrs:{flat:"",color:"primary"}},[a(u["a"],{attrs:{wrap:""}},[a(l["a"],{class:s%2?"background":"secondary"},[a(c["c"],[t._v(t._s(s+1+". "+e))])],1)],1)],1)]}))],2)})),1)]},proxy:!0}])})],1),a(s["a"],{attrs:{md:"5"}},[a("MaterialfyDataTable")],1)],1),a(u["a"],{staticClass:"d-flex align-start justify-center mb-2"},[a(s["a"],{staticClass:"my-2",attrs:{md:"4"}},[a("MaterialfyColorCard",{attrs:{cardMaxWidth:"500",cardInnerText:"Horse Power",cardShowDivider:!1,cardShowActions:!1,cardColor:"tertiary"},scopedSlots:t._u([{key:"crdInner",fn:function(){return[a("materialfy-apex-polar-map")]},proxy:!0}])})],1),a(s["a"],{attrs:{md:"4"}},[a("MaterialfyColorCard",{attrs:{cardMaxWidth:"500",cardInnerText:"Users Usering",cardShowDivider:!1,cardShowActions:!1,cardColor:"primary"},scopedSlots:t._u([{key:"crdInner",fn:function(){return[a("materialfy-apex-donut")]},proxy:!0}])})],1),a(s["a"],{attrs:{md:"4"}},[a("MaterialfyColorCard",{attrs:{cardMaxWidth:"500",cardInnerText:"User Engagement",cardShowDivider:!1,cardShowActions:!1,cardShowInnerText:!1,cardColor:"accent"},scopedSlots:t._u([{key:"crdInner",fn:function(){return[a("materialfy-apex-multiple-radial-bars")]},proxy:!0}])})],1)],1),a(u["a"],{staticClass:"d-flex align-start mb-2"},[a(s["a"],[a("MaterialfyColorCard",{attrs:{cardInnerText:"$$$$$$$ emoji",cardShowDivider:!1,cardShowActions:!1},scopedSlots:t._u([{key:"crdInner",fn:function(){return[a("materialfy-apex-y-axis")]},proxy:!0}])})],1),a(s["a"],[a("MaterialfyColorCard",{attrs:{cardInnerText:"User Engagement",cardShowDivider:!1,cardShowActions:!1,cardColor:"secondary"},scopedSlots:t._u([{key:"crdInner",fn:function(){return[a("materialfy-apex-line-graph")]},proxy:!0}])})],1)],1),a(u["a"],{staticClass:"ma-3 d-flex align-start justify-center"},[a(s["a"],{attrs:{md:"9"}},[a(d["a"],{attrs:{"aspect-ratio":16/9}},[a("MaterialfyCalendar")],1)],1)],1)],1)},b=[];e("d9e2");const g=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]];var C={data:()=>({labels:["Feb","March","April","420","May","June","July","Aug"],sparklineValue:[200,300,410,390,420,460,420,420],width:2,radius:10,padding:8,lineCap:"round",gradient:g[5],sparklineValue2:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,10],gradientDirection:"top",gradients:g,fill:!1,type:"trend",autoLineWidth:!1,tableHeaders:[{sortable:!1,text:"ID",value:"id",class:"tertiary--text text-h6"},{sortable:!1,text:"Name",value:"name",class:"tertiary--text text-h6"},{sortable:!1,text:"Salary",value:"salary",align:"float-right",class:"tertiary--text text-h6"},{sortable:!1,text:"Country",value:"country",align:"float-right",class:"tertiary--text text-h6"},{sortable:!1,text:"City",value:"city",align:"float-right",class:"tertiary--text text-h6"}],tableItems:[{name:"Dakota Rice",country:"Niger",city:"Oud-Tunrhout",salary:"$35,738"},{name:"Minerva Hooper",country:"Curaçao",city:"Sinaai-Waas",salary:"$23,738"},{name:"Sage Rodriguez",country:"Netherlands",city:"Overland Park",salary:"$56,142"},{name:"Philip Chanley",country:"Korea, South",city:"Gloucester",salary:"$38,735"},{name:"Doris Greene",country:"Malawi",city:"Feldkirchen in Kārnten",salary:"$63,542"}],tab:null,tabItems:[{tab:"Bugs",icon:"mdi-bug"},{tab:"Server Issues",icon:"mdi-cloud"},{tab:"Tickets",icon:"mdi-alert"},{tab:"New Issues",icon:"mdi-access-point"},{tab:"To-Do",icon:"mdi-alert-box-outline"}],textList:["You just read a sentence","Second sentence with a lot of merit","Fix bugs","Look at Pull Requests","Hope pull request fix bugs?","Figure out some other text to put here"]}),methods:{throwError:function(){throw new Error("Sentry Error")}}},w=C,v=(e("f3c6"),e("2877")),S=Object(v["a"])(w,h,b,!1,null,null,null);a["default"]=S.exports},"6da2":function(t,a,e){},f3c6:function(t,a,e){"use strict";e("6da2")}}]);
//# sourceMappingURL=chunk-39472527.js.map