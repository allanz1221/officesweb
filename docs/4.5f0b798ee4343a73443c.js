(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ZbRj:function(e,n,i){"use strict";i.r(n),i.d(n,"CreateOfficeModule",(function(){return E}));var o=i("ofXK"),a=i("QLO4"),t=i("vvyD"),c=i("tyNb"),b=i("NujS"),r=i("PSD3"),l=i.n(r),d=i("fXoL"),s=i("UdWc"),u=i("EFyh"),g=i("w1Bz"),m=i("kmnG"),f=i("qFsG"),p=i("d3UM"),M=i("FKr1");function B(e,n){1&e&&(d.Sb(0,"mat-error"),d.Bc(1,"No puedes dejar este campo vacio"),d.Rb())}function S(e,n){1&e&&(d.Sb(0,"mat-error"),d.Bc(1,"No puedes dejar este campo vacio"),d.Rb())}function h(e,n){if(1&e&&(d.Sb(0,"mat-option",36),d.Bc(1),d.Rb()),2&e){const e=n.$implicit;d.jc("value",e.nombre_pais),d.Bb(1),d.Dc(" ",e.nombre_pais," ")}}function v(e,n){1&e&&(d.Sb(0,"mat-error"),d.Bc(1,"No puedes dejar este campo vacio"),d.Rb())}function R(e,n){if(1&e&&(d.Sb(0,"mat-option",36),d.Bc(1),d.Rb()),2&e){const e=n.$implicit;d.jc("value",e.nombre_ciudad),d.Bb(1),d.Dc(" ",e.nombre_ciudad," ")}}function j(e,n){1&e&&(d.Sb(0,"mat-error"),d.Bc(1,"No puedes dejar este campo vacio"),d.Rb())}function _(e,n){if(1&e&&(d.Sb(0,"mat-option",36),d.Bc(1),d.Rb()),2&e){const e=n.$implicit;d.jc("value",e.nombre_estado),d.Bb(1),d.Dc(" ",e.nombre_estado," ")}}function C(e,n){1&e&&(d.Sb(0,"mat-error"),d.Bc(1,"No puedes dejar este campo vacio"),d.Rb())}function y(e,n){1&e&&(d.Sb(0,"mat-error"),d.Bc(1,"No puedes dejar este campo vacio"),d.Rb())}function I(e,n){1&e&&(d.Sb(0,"mat-error"),d.Bc(1,"No puedes dejar este campo vacio"),d.Rb())}function x(e,n){if(1&e&&(d.Sb(0,"mat-option",36),d.Bc(1),d.Rb()),2&e){const e=n.$implicit;d.jc("value",e.value),d.Bb(1),d.Dc(" ",e.viewValue," ")}}function w(e,n){1&e&&(d.Sb(0,"mat-error"),d.Bc(1,"No puedes dejar este campo vacio"),d.Rb())}function q(e,n){if(1&e){const e=d.Tb();d.Sb(0,"mat-form-field",18),d.Sb(1,"mat-label"),d.Bc(2,"Status"),d.Rb(),d.Sb(3,"mat-select",37,38),d.Zb("ngModelChange",(function(n){return d.sc(e),d.dc().oficina.status=n})),d.Ac(5,x,2,2,"mat-option",12),d.Rb(),d.Ac(6,w,2,0,"mat-error",6),d.Rb()}if(2&e){const e=d.qc(4),n=d.dc();d.Bb(3),d.jc("ngModel",n.oficina.status),d.Bb(2),d.jc("ngForOf",n.tiposStatus),d.Bb(1),d.jc("ngIf",e.invalid)}}function O(e,n){if(1&e&&(d.Sb(0,"mat-option",36),d.Bc(1),d.Rb()),2&e){const e=n.$implicit;d.jc("value",e.value),d.Bb(1),d.Dc(" ",e.viewValue," ")}}function A(e,n){1&e&&(d.Sb(0,"mat-error"),d.Bc(1,"No puedes dejar este campo vacio"),d.Rb())}function N(e,n){if(1&e){const e=d.Tb();d.Sb(0,"mat-form-field",18),d.Sb(1,"mat-label"),d.Bc(2,"Status"),d.Rb(),d.Sb(3,"mat-select",39,38),d.Zb("ngModelChange",(function(n){return d.sc(e),d.dc().oficina.status=n})),d.Ac(5,O,2,2,"mat-option",12),d.Rb(),d.Ac(6,A,2,0,"mat-error",6),d.Rb()}if(2&e){const e=d.qc(4),n=d.dc();d.Bb(3),d.jc("ngModel",n.oficina.status),d.Bb(2),d.jc("ngForOf",n.tiposStatus),d.Bb(1),d.jc("ngIf",e.invalid)}}function P(e,n){if(1&e&&(d.Sb(0,"mat-option",36),d.Bc(1),d.Rb()),2&e){const e=n.$implicit;d.jc("value",e.value),d.Bb(1),d.Dc(" ",e.viewValue," ")}}function Z(e,n){1&e&&(d.Sb(0,"mat-error"),d.Bc(1,"No puedes dejar este campo vacio"),d.Rb())}function k(e,n){1&e&&(d.Sb(0,"mat-error"),d.Bc(1,"No puedes dejar este campo vacio"),d.Rb())}const F=[{path:"",component:(()=>{class e{constructor(e,n,i,o){this._oficinas=e,this._login=n,this._router=i,this._ubicacion=o,this.tipos=[{value:"Ejecutiva",viewValue:"Ejecutiva"},{value:"Compartida",viewValue:"Compartida"}],this.tiposStatus=[{value:"1",viewValue:"Aceptada"},{value:"0",viewValue:"No acepatada"}],this.identity=this._login.getIdentity(),console.log(this.identity),this.oficina=new b.a(1,this.identity.sub,"","","","","","","",0,0,0,0,0)}ngOnInit(){this.obtenerDatosUbicacion()}onSubmit(e){console.log(this.oficina);var n=document.getElementById("long_ubicacion").value,i=document.getElementById("lat_ubicacion").value;this.oficina.long_ubicacion=n,this.oficina.lat_ubicacion=i,1==this.identity.role&&(this.oficina.status=0),this._oficinas.createOficina(this.oficina).subscribe(e=>{"success"==e.status&&(this.oficina=e.oficina,this._router.navigate(["oficina-servicios"]),console.log(this.oficina),l.a.fire({icon:"success",title:"Guardado",text:"Los datos de la oficina se han guardado correctamente"}))},e=>{console.log(e)})}ngAfterViewInit(){mapboxgl.accessToken="pk.eyJ1IjoicmFmYWVsYm9yIiwiYSI6ImNrZTYzand1NDE5Y20ycXB1am9mbjFuOTgifQ.RHArcX_yJnsWGVjYawixxg";const e=new mapboxgl.Map({container:"map",center:[-110.961,29.0892],zoom:10,style:"mapbox://styles/mapbox/streets-v11"});var n=new mapboxgl.Marker({draggable:!0}).setLngLat([-110.961,29.0892]).addTo(e);n.on("dragend",(function(){var e=n.getLngLat();document.getElementById("long_ubicacion").value=e.lng,document.getElementById("lat_ubicacion").value=e.lat,console.log(e.lng),console.log(e.lat)}))}obtenerDatosUbicacion(){this._ubicacion.obtenerDatos().subscribe(e=>{"success"==e.status&&(this.paises=e.paises,this.estados=e.estados,this.ciudades=e.ciudades)},e=>{console.log(e)})}}return e.\u0275fac=function(n){return new(n||e)(d.Mb(s.a),d.Mb(u.a),d.Mb(c.b),d.Mb(g.a))},e.\u0275cmp=d.Gb({type:e,selectors:[["app-create-office"]],decls:86,vars:26,consts:[[1,"contenedor-pagina"],[3,"ngSubmit"],["oficinasForm","ngForm"],[1,"block"],["matInput","","placeholder","Titulo","type","text","required","","name","nombre",3,"ngModel","ngModelChange"],["nombre","ngModel"],[4,"ngIf"],["matInput","","placeholder","Establecimiento o lugar de la oficina","type","text","required","","name","establecimiento",3,"ngModel","ngModelChange"],["establecimiento","ngModel"],[1,"separar-contenido"],["required","","name","pais",3,"ngModel","ngModelChange"],["pais","ngModel"],[3,"value",4,"ngFor","ngForOf"],["required","","name","ciudad",3,"ngModel","ngModelChange"],["ciudad","ngModel"],["required","","name","estado",3,"ngModel","ngModelChange"],["estado","ngModel"],[1,"separar"],[1,"separar-item"],["required","","type","number","matInput","","name","precio_dia",1,"example-right-align",3,"ngModel","ngModelChange"],["precio_dia","ngModel"],["matPrefix",""],["matSuffix",""],["required","","type","number","matInput","","name","precio_hora",1,"example-right-align",3,"ngModel","ngModelChange"],["class","separar-item",4,"ngIf"],["required","","name","tipo_oficina",3,"ngModel","ngModelChange"],["tipo_oficina","ngModel"],["appearance","outline",1,"block"],["required","","matInput","","name","descripcion",3,"ngModel","ngModelChange"],["descripcion","ngModel"],["id","map"],["type","hidden","required","","name","long_ubicacion","id","long_ubicacion",3,"ngModel","ngModelChange"],["long_ubicacion","ngModel"],["type","hidden","required","","name","lat_ubicacion","id","lat_ubicacion",3,"ngModel","ngModelChange"],["lat_ubicacion","ngModel"],["type","submit","value","Guardar",1,"btn"],[3,"value"],["required","","name","status",3,"ngModel","ngModelChange"],["status","ngModel"],["disabled","","name","status",3,"ngModel","ngModelChange"]],template:function(e,n){if(1&e){const e=d.Tb();d.Sb(0,"div",0),d.Sb(1,"h2"),d.Bc(2,"Ingresa los datos de tu oficina"),d.Rb(),d.Sb(3,"form",1,2),d.Zb("ngSubmit",(function(){d.sc(e);const i=d.qc(4);return n.onSubmit(i)})),d.Sb(5,"p"),d.Sb(6,"mat-form-field",3),d.Sb(7,"mat-label"),d.Bc(8,"Titulo de la oficina"),d.Rb(),d.Sb(9,"input",4,5),d.Zb("ngModelChange",(function(e){return n.oficina.nombre=e})),d.Rb(),d.Ac(11,B,2,0,"mat-error",6),d.Rb(),d.Rb(),d.Sb(12,"p"),d.Sb(13,"mat-form-field",3),d.Sb(14,"mat-label"),d.Bc(15,"Establecimiento"),d.Rb(),d.Sb(16,"input",7,8),d.Zb("ngModelChange",(function(e){return n.oficina.establecimiento=e})),d.Rb(),d.Ac(18,S,2,0,"mat-error",6),d.Rb(),d.Rb(),d.Sb(19,"div",9),d.Sb(20,"mat-form-field"),d.Sb(21,"mat-label"),d.Bc(22,"Pais"),d.Rb(),d.Sb(23,"mat-select",10,11),d.Zb("ngModelChange",(function(e){return n.oficina.pais=e})),d.Ac(25,h,2,2,"mat-option",12),d.Rb(),d.Ac(26,v,2,0,"mat-error",6),d.Rb(),d.Sb(27,"mat-form-field"),d.Sb(28,"mat-label"),d.Bc(29,"Ciudad"),d.Rb(),d.Sb(30,"mat-select",13,14),d.Zb("ngModelChange",(function(e){return n.oficina.ciudad=e})),d.Ac(32,R,2,2,"mat-option",12),d.Rb(),d.Ac(33,j,2,0,"mat-error",6),d.Rb(),d.Sb(34,"mat-form-field"),d.Sb(35,"mat-label"),d.Bc(36,"Estado"),d.Rb(),d.Sb(37,"mat-select",15,16),d.Zb("ngModelChange",(function(e){return n.oficina.estado=e})),d.Ac(39,_,2,2,"mat-option",12),d.Rb(),d.Ac(40,C,2,0,"mat-error",6),d.Rb(),d.Rb(),d.Sb(41,"div",17),d.Sb(42,"mat-form-field",18),d.Sb(43,"mat-label"),d.Bc(44,"Precio por dia"),d.Rb(),d.Sb(45,"input",19,20),d.Zb("ngModelChange",(function(e){return n.oficina.precio_dia=e})),d.Rb(),d.Sb(47,"span",21),d.Bc(48,"$\xa0"),d.Rb(),d.Sb(49,"span",22),d.Bc(50,".00"),d.Rb(),d.Ac(51,y,2,0,"mat-error",6),d.Rb(),d.Sb(52,"mat-form-field",18),d.Sb(53,"mat-label"),d.Bc(54,"Precio por hora"),d.Rb(),d.Sb(55,"input",23,20),d.Zb("ngModelChange",(function(e){return n.oficina.precio_hora=e})),d.Rb(),d.Sb(57,"span",21),d.Bc(58,"$\xa0"),d.Rb(),d.Sb(59,"span",22),d.Bc(60,".00"),d.Rb(),d.Ac(61,I,2,0,"mat-error",6),d.Rb(),d.Rb(),d.Sb(62,"div",17),d.Ac(63,q,7,3,"mat-form-field",24),d.Ac(64,N,7,3,"mat-form-field",24),d.Sb(65,"mat-form-field",18),d.Sb(66,"mat-label"),d.Bc(67,"Tipo de oficina"),d.Rb(),d.Sb(68,"mat-select",25,26),d.Zb("ngModelChange",(function(e){return n.oficina.tipo_oficina=e})),d.Ac(70,P,2,2,"mat-option",12),d.Rb(),d.Ac(71,Z,2,0,"mat-error",6),d.Rb(),d.Rb(),d.Sb(72,"mat-form-field",27),d.Sb(73,"mat-label"),d.Bc(74,"Descripcion"),d.Rb(),d.Sb(75,"textarea",28,29),d.Zb("ngModelChange",(function(e){return n.oficina.descripcion=e})),d.Rb(),d.Ac(77,k,2,0,"mat-error",6),d.Rb(),d.Sb(78,"mat-label"),d.Bc(79,"Ubicacion de su oficina"),d.Rb(),d.Nb(80,"div",30),d.Sb(81,"input",31,32),d.Zb("ngModelChange",(function(e){return n.oficina.long_ubicacion=e})),d.Rb(),d.Sb(83,"input",33,34),d.Zb("ngModelChange",(function(e){return n.oficina.lat_ubicacion=e})),d.Rb(),d.Nb(85,"input",35),d.Rb(),d.Rb()}if(2&e){const e=d.qc(10),i=d.qc(17),o=d.qc(24),a=d.qc(31),t=d.qc(46),c=d.qc(69),b=d.qc(76);d.Bb(9),d.jc("ngModel",n.oficina.nombre),d.Bb(2),d.jc("ngIf",e.invalid),d.Bb(5),d.jc("ngModel",n.oficina.establecimiento),d.Bb(2),d.jc("ngIf",i.invalid),d.Bb(5),d.jc("ngModel",n.oficina.pais),d.Bb(2),d.jc("ngForOf",n.paises),d.Bb(1),d.jc("ngIf",o.invalid),d.Bb(4),d.jc("ngModel",n.oficina.ciudad),d.Bb(2),d.jc("ngForOf",n.ciudades),d.Bb(1),d.jc("ngIf",a.invalid),d.Bb(4),d.jc("ngModel",n.oficina.estado),d.Bb(2),d.jc("ngForOf",n.estados),d.Bb(1),d.jc("ngIf",a.invalid),d.Bb(5),d.jc("ngModel",n.oficina.precio_dia),d.Bb(6),d.jc("ngIf",t.invalid),d.Bb(4),d.jc("ngModel",n.oficina.precio_hora),d.Bb(6),d.jc("ngIf",t.invalid),d.Bb(2),d.jc("ngIf",1!==n.identity.role),d.Bb(1),d.jc("ngIf",1==n.identity.role),d.Bb(4),d.jc("ngModel",n.oficina.tipo_oficina),d.Bb(2),d.jc("ngForOf",n.tipos),d.Bb(1),d.jc("ngIf",c.invalid),d.Bb(4),d.jc("ngModel",n.oficina.descripcion),d.Bb(2),d.jc("ngIf",b.invalid),d.Bb(4),d.jc("ngModel",n.oficina.long_ubicacion),d.Bb(2),d.jc("ngModel",n.oficina.lat_ubicacion)}},directives:[a.s,a.j,a.k,m.c,m.f,f.b,a.c,a.o,a.i,a.l,o.m,p.a,o.l,a.n,m.g,m.h,m.b,M.n],styles:[".contenedor-pagina[_ngcontent-%COMP%]{text-align:center}.separar-contenido[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:30px 0}.separar[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.separar-item[_ngcontent-%COMP%]{padding:20px;text-align:center}.block[_ngcontent-%COMP%]{display:block}.block[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:100px}#map[_ngcontent-%COMP%]{display:block;height:400px}.example-right-align[_ngcontent-%COMP%]{text-align:right}input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button{display:none}"]}),e})()}];let D=(()=>{class e{}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(n){return new(n||e)},imports:[[c.d.forChild(F)],c.d]}),e})(),E=(()=>{class e{}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(n){return new(n||e)},imports:[[o.c,D,t.a,a.e]]}),e})()}}]);