"use strict";(self.webpackChunkrecipes=self.webpackChunkrecipes||[]).push([[320],{5320:(ye,h,p)=>{p.r(h),p.d(h,{AuthModule:()=>be});var g=p(6814),m=p(3403),w=p(8143),s=p(6223),c=p(8189),e=p(5879),T=p(1075);function A(t,i){1&t&&(e.TgZ(0,"span",21),e._uU(1,"email is Required"),e.qZA())}function q(t,i){1&t&&(e.TgZ(0,"span",21),e._uU(1,"email isn't Validator"),e.qZA())}function R(t,i){if(1&t&&(e.TgZ(0,"div",19),e.YNc(1,A,2,0,"span",20),e._UZ(2,"br"),e.YNc(3,q,2,0,"span",20),e.qZA()),2&t){const r=e.oxw();let o,n;e.xp6(1),e.Q6J("ngIf",null==(o=r.verifyCount.get("email"))?null:o.getError("required")),e.xp6(2),e.Q6J("ngIf",null==(n=r.verifyCount.get("email"))?null:n.getError("email"))}}function N(t,i){1&t&&(e.TgZ(0,"span",21),e._uU(1,"code is Required"),e.qZA())}function C(t,i){1&t&&(e.TgZ(0,"span",23),e._uU(1,"Min length 4"),e.qZA())}function U(t,i){if(1&t&&(e.TgZ(0,"div",19),e.YNc(1,N,2,0,"span",20),e._UZ(2,"br"),e.YNc(3,C,2,0,"span",22),e.qZA()),2&t){const r=e.oxw();let o,n;e.xp6(1),e.Q6J("ngIf",null==(o=r.verifyCount.get("code"))?null:o.getError("required")),e.xp6(2),e.Q6J("ngIf",null==(n=r.verifyCount.get("code"))?null:n.getError("minlength"))}}let I=(()=>{class t{constructor(r,o,n){this.dialogRef=r,this.data=o,this._MatDialog=n,this.message='"Welcome Again"',this.verifyCount=new s.cw({email:new s.NI(null,[s.kI.required,s.kI.email]),code:new s.NI(null,[s.kI.required,s.kI.minLength(4)])})}onNoClick(){this.dialogRef.close()}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(c.so),e.Y36(c.WI),e.Y36(c.uw))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-verify-acount"]],decls:27,vars:5,consts:[[1,"px-5","py-3"],[1,"d-flex","flex-row-reverse"],[1,"myPointer",3,"click"],[1,"fa-regular","fa-circle-xmark","text-danger","fa-2x"],[1,"text-center"],["src","../../../assets/images/logo.svg","alt","",1,"my-4"],[1,"py-2"],[3,"formGroup"],[1,"form-item"],[1,"input-group","mb-3","custom-input"],["id","basic-addon1",1,"input-group-text","px-3","py-3"],[1,"fa-solid","fa-at"],[1,"y-line","my-auto"],["type","email","placeholder","Enter your email","aria-label","email","aria-describedby","basic-addon1","formControlName","email",1,"form-control","rounded-end","py-1"],["class","text-red m-0 mx-auto p-0 text-start",4,"ngIf"],[1,"fa-solid","fa-message"],["type","code","placeholder","Enter your code","aria-label","code","aria-describedby","basic-addon1","formControlName","code",1,"form-control","rounded-end","py-1"],[1,"justify-content-around"],["mat-button","","cdkFocusInitial","",1,"main","w-100",3,"mat-dialog-close","disabled"],[1,"text-red","m-0","mx-auto","p-0","text-start"],["class","text-red",4,"ngIf"],[1,"text-red"],["class","text-red p-0 block",4,"ngIf"],[1,"text-red","p-0","block"]],template:function(o,n){if(1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"a",2),e.NdJ("click",function(){return n.onNoClick()}),e._UZ(3,"i",3),e.qZA()(),e.TgZ(4,"div",4),e._UZ(5,"img",5),e.qZA(),e.TgZ(6,"h3",6),e._uU(7,"Verify Your Account"),e.qZA(),e.TgZ(8,"mat-dialog-content")(9,"form",7)(10,"div",8)(11,"div",9)(12,"span",10),e._UZ(13,"i",11),e.qZA(),e._UZ(14,"div",12)(15,"input",13),e.qZA(),e.YNc(16,R,4,2,"div",14),e.qZA(),e.TgZ(17,"div",8)(18,"div",9)(19,"span",10),e._UZ(20,"i",15),e.qZA(),e._UZ(21,"div",12)(22,"input",16),e.qZA(),e.YNc(23,U,4,2,"div",14),e.qZA()()(),e.TgZ(24,"mat-dialog-actions",17)(25,"button",18),e._uU(26,"Verify"),e.qZA()()()),2&o){let a,l;e.xp6(9),e.Q6J("formGroup",n.verifyCount),e.xp6(7),e.Q6J("ngIf",(null==(a=n.verifyCount.get("email"))?null:a.errors)&&(null==(a=n.verifyCount.get("email"))?null:a.touched)),e.xp6(7),e.Q6J("ngIf",(null==(l=n.verifyCount.get("code"))?null:l.errors)&&(null==(l=n.verifyCount.get("code"))?null:l.touched)),e.xp6(2),e.Q6J("mat-dialog-close",n.verifyCount.value)("disabled",n.verifyCount.invalid)}},dependencies:[g.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,c.ZT,c.xY,c.H8,T.lW]})}return t})();var x=p(139),v=p(2425),_=p(4426);function P(t,i){if(1&t){const r=e.EpF();e.TgZ(0,"ngx-dropzone-image-preview",44),e.NdJ("removed",function(){const a=e.CHM(r).$implicit,l=e.oxw();return e.KtG(l.onRemove(a))}),e._UZ(1,"ngx-dropzone-label"),e.qZA()}2&t&&e.Q6J("file",i.$implicit)("removable",!0)}function J(t,i){1&t&&(e.TgZ(0,"span",47),e._uU(1,"userName is Required"),e.qZA())}function k(t,i){1&t&&(e.TgZ(0,"span",47),e._uU(1,"Invalid userName format must "),e._UZ(2,"br"),e._uU(3," contains numbers and characters"),e.qZA())}function Y(t,i){if(1&t&&(e.TgZ(0,"div",45),e.YNc(1,J,2,0,"span",46),e._UZ(2,"br"),e.YNc(3,k,4,0,"span",46),e.qZA()),2&t){const r=e.oxw();let o,n;e.xp6(1),e.Q6J("ngIf",null==(o=r.RegisterForm.get("userName"))?null:o.getError("required")),e.xp6(2),e.Q6J("ngIf",null==(n=r.RegisterForm.get("userName"))?null:n.getError("pattern"))}}function Q(t,i){1&t&&(e.TgZ(0,"span",47),e._uU(1,"email is Required"),e.qZA())}function F(t,i){1&t&&(e.TgZ(0,"span",47),e._uU(1,"email isn't Validator"),e.qZA())}function E(t,i){if(1&t&&(e.TgZ(0,"div",45),e.YNc(1,Q,2,0,"span",46),e._UZ(2,"br"),e.YNc(3,F,2,0,"span",46),e.qZA()),2&t){const r=e.oxw();let o,n;e.xp6(1),e.Q6J("ngIf",null==(o=r.RegisterForm.get("email"))?null:o.getError("required")),e.xp6(2),e.Q6J("ngIf",null==(n=r.RegisterForm.get("email"))?null:n.getError("email"))}}function S(t,i){1&t&&(e.TgZ(0,"span",47),e._uU(1,"country is Required"),e.qZA())}function L(t,i){1&t&&(e.TgZ(0,"span",47),e._uU(1,"country isn't Validator"),e.qZA())}function M(t,i){if(1&t&&(e.TgZ(0,"div",45),e.YNc(1,S,2,0,"span",46),e._UZ(2,"br"),e.YNc(3,L,2,0,"span",46),e.qZA()),2&t){const r=e.oxw();let o,n;e.xp6(1),e.Q6J("ngIf",null==(o=r.RegisterForm.get("country"))?null:o.getError("required")),e.xp6(2),e.Q6J("ngIf",null==(n=r.RegisterForm.get("country"))?null:n.getError("email"))}}function z(t,i){1&t&&(e.TgZ(0,"span",47),e._uU(1,"phoneNumber is required"),e.qZA())}function V(t,i){1&t&&(e.TgZ(0,"span",47),e._uU(1,"phoneNumber isn't Validator"),e.qZA())}function j(t,i){if(1&t&&(e.TgZ(0,"div",45),e.YNc(1,z,2,0,"span",46),e._UZ(2,"br"),e.YNc(3,V,2,0,"span",46),e.qZA()),2&t){const r=e.oxw();let o,n;e.xp6(1),e.Q6J("ngIf",null==(o=r.RegisterForm.get("phoneNumber"))?null:o.getError("required")),e.xp6(2),e.Q6J("ngIf",null==(n=r.RegisterForm.get("phoneNumber"))?null:n.getError("pattern"))}}function W(t,i){1&t&&(e.TgZ(0,"span",50),e._uU(1,"password is Required"),e.qZA())}function D(t,i){1&t&&(e.TgZ(0,"span",50),e._uU(1,"Min length 8"),e.qZA())}function O(t,i){1&t&&(e.TgZ(0,"span",50),e._uU(1,"must have at least 1 uppercase letter "),e._UZ(2,"br"),e._uU(3," at least 1 lowercase letter "),e._UZ(4,"br"),e._uU(5," at least 1 digit "),e._UZ(6,"br"),e._uU(7," at least 1 special character"),e.qZA())}function B(t,i){1&t&&(e.TgZ(0,"span",50),e._uU(1,"Max length 20"),e.qZA())}function G(t,i){if(1&t&&(e.TgZ(0,"div",48),e.YNc(1,W,2,0,"span",49),e._UZ(2,"br"),e.YNc(3,D,2,0,"span",49),e._UZ(4,"br"),e.YNc(5,O,8,0,"span",49),e._UZ(6,"br"),e.YNc(7,B,2,0,"span",49),e.qZA()),2&t){const r=e.oxw();let o,n,a,l;e.xp6(1),e.Q6J("ngIf",null==(o=r.RegisterForm.get("password"))?null:o.getError("required")),e.xp6(2),e.Q6J("ngIf",null==(n=r.RegisterForm.get("password"))?null:n.getError("minlength")),e.xp6(2),e.Q6J("ngIf",null==(a=r.RegisterForm.get("password"))?null:a.getError("pattern")),e.xp6(2),e.Q6J("ngIf",null==(l=r.RegisterForm.get("password"))?null:l.getError("maxlength"))}}function $(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"confirmPassword is Required"),e.qZA())}function X(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1," password and confirm password not match "),e.qZA())}function H(t,i){if(1&t&&(e.TgZ(0,"span",51),e.YNc(1,$,2,0,"span",43),e.YNc(2,X,2,0,"span",43),e.qZA()),2&t){const r=e.oxw();let o,n;e.xp6(1),e.Q6J("ngIf",null==(o=r.RegisterForm.get("confirmPassword"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=r.RegisterForm.get("confirmPassword"))||null==n.errors?null:n.errors.invalid)}}function K(t,i){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",52),e.qZA())}const b=function(t,i){return{"fa-eye":t,"fa-eye-slash":i}},ee=/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,20}$/;function ne(t,i){1&t&&(e.TgZ(0,"span",28),e._uU(1,"email is Required"),e.qZA())}function oe(t,i){1&t&&(e.TgZ(0,"span",28),e._uU(1,"email isn't Validator"),e.qZA())}function re(t,i){if(1&t&&(e.TgZ(0,"div",26),e.YNc(1,ne,2,0,"span",27),e._UZ(2,"br"),e.YNc(3,oe,2,0,"span",27),e.qZA()),2&t){const r=e.oxw();let o,n;e.xp6(1),e.Q6J("ngIf",null==(o=r.resetPassword.get("email"))?null:o.getError("required")),e.xp6(2),e.Q6J("ngIf",null==(n=r.resetPassword.get("email"))?null:n.getError("email"))}}function se(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Code is Required"),e.qZA())}function ie(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Min length 4"),e.qZA())}function ae(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Max length 4"),e.qZA())}function le(t,i){if(1&t&&(e.TgZ(0,"div",29),e.YNc(1,se,2,0,"span",30),e._UZ(2,"br"),e.YNc(3,ie,2,0,"span",30),e._UZ(4,"br"),e.YNc(5,ae,2,0,"span",30),e.qZA()),2&t){const r=e.oxw();let o,n,a;e.xp6(1),e.Q6J("ngIf",null==(o=r.resetPassword.get("seed"))?null:o.getError("required")),e.xp6(2),e.Q6J("ngIf",null==(n=r.resetPassword.get("seed"))?null:n.getError("minlength")),e.xp6(2),e.Q6J("ngIf",null==(a=r.resetPassword.get("seed"))?null:a.getError("maxlength"))}}function pe(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"password is Required"),e.qZA())}function de(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Min length 8"),e.qZA())}function ue(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"must have at least 1 uppercase letter "),e._UZ(2,"br"),e._uU(3," at least 1 lowercase letter "),e._UZ(4,"br"),e._uU(5," at least 1 digit "),e._UZ(6,"br"),e._uU(7," at least 1 special character"),e.qZA())}function ce(t,i){1&t&&(e.TgZ(0,"span",31),e._uU(1,"Max length 20"),e.qZA())}function ge(t,i){if(1&t&&(e.TgZ(0,"div",29),e.YNc(1,pe,2,0,"span",30),e._UZ(2,"br"),e.YNc(3,de,2,0,"span",30),e._UZ(4,"br"),e.YNc(5,ue,8,0,"span",30),e._UZ(6,"br"),e.YNc(7,ce,2,0,"span",30),e.qZA()),2&t){const r=e.oxw();let o,n,a,l;e.xp6(1),e.Q6J("ngIf",null==(o=r.resetPassword.get("password"))?null:o.getError("required")),e.xp6(2),e.Q6J("ngIf",null==(n=r.resetPassword.get("password"))?null:n.getError("minlength")),e.xp6(2),e.Q6J("ngIf",null==(a=r.resetPassword.get("password"))?null:a.getError("pattern")),e.xp6(2),e.Q6J("ngIf",null==(l=r.resetPassword.get("password"))?null:l.getError("maxlength"))}}function me(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"confirmPassword is Required"),e.qZA())}function _e(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1," password and confirm password not match "),e.qZA())}function fe(t,i){if(1&t&&(e.TgZ(0,"span",32),e.YNc(1,me,2,0,"span",25),e.YNc(2,_e,2,0,"span",25),e.qZA()),2&t){const r=e.oxw();let o,n;e.xp6(1),e.Q6J("ngIf",null==(o=r.resetPassword.get("confirmPassword"))?null:o.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=r.resetPassword.get("confirmPassword"))||null==n.errors?null:n.errors.invalid)}}function Ze(t,i){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",33),e.qZA())}const y=function(t,i){return{"fa-eye":t,"fa-eye-slash":i}},we=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:w.G,title:"login"},{path:"register",component:(()=>{class t{constructor(r,o,n,a){this._AuthService=r,this._ToastrService=o,this._Router=n,this._MatDialog=a,this.see=!0,this.see_2=!0,this.password_type="text",this.password_type_2="text",this.isLoading=!1,this.message='"Welcome in Food Recipe"',this.files=[],this.RegisterForm=new s.cw({userName:new s.NI(null,[s.kI.required,s.kI.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/)]),email:new s.NI(null,[s.kI.required,s.kI.email]),country:new s.NI(null,[s.kI.required]),phoneNumber:new s.NI(null,[s.kI.required,s.kI.pattern(/^01[0125][0-9]{8}$/)]),password:new s.NI(null,[s.kI.required,s.kI.pattern(ee),s.kI.maxLength(20),s.kI.minLength(8)]),confirmPassword:new s.NI("",[s.kI.required])},{validators:this.passwordMatchValidator})}passwordMatchValidator(r){let o=r.get("password"),n=r.get("confirmPassword");return o.value==n.value?null:(r.get("confirmPassword")?.setErrors({invalid:"password and confirm password not match"}),{invalid:"password and confirm password not match"})}handleForm(){this.isLoading=!0;let r=this.RegisterForm.value,o=new FormData;o.append("userName",r.userName),o.append("email",r.email),o.append("country",r.country),o.append("phoneNumber",r.phoneNumber),o.append("password",r.password),o.append("confirmPassword",r.confirmPassword),o.append("profileImage",this.imgSrc),console.log(o.get("userName")),console.log(o.get("email")),console.log(o.get("country")),console.log(o.get("phoneNumber")),console.log(o.get("password")),console.log(o.get("confirmPassword")),console.log(o.get("profileImage")),this.RegisterForm.valid&&this._AuthService.onRegister(r).subscribe({next:n=>{this.isLoading=!1,console.log(n)},error:n=>{this.isLoading=!1,console.log(n),this._ToastrService.error(n.error.message,"Error! ")},complete:()=>{this.isLoading=!1,this._ToastrService.success(this.message,"Register Successfuly"),this.openDialog()}})}toggleSee(){this.see=!this.see,this.password_type=this.see?"text":"password"}toggleSee_2(){this.see_2=!this.see_2,this.password_type_2=this.see_2?"text":"password"}routToLogin(){this._Router.navigate(["/auth/login"])}onSelect(r){console.log(r),this.imgSrc=r.addedFiles[0],console.log(this.imgSrc),this.files.push(...r.addedFiles)}onRemove(r){console.log(r),this.files.splice(this.files.indexOf(r),1)}openDialog(){this._MatDialog.open(I,{data:{name:""}}).afterClosed().subscribe(o=>{console.log("The dialog was closed",o),null!=o&&this.onVerifyAcount_2(o)})}onVerifyAcount_2(r){this._AuthService.onVerify(r).subscribe({next:o=>{console.log(o)},error:o=>{console.log(o),this._ToastrService.error(o.error.message,"Error!")},complete:()=>{console.log("succe"),this._ToastrService.success(this.message,"Account Activetied successfuly"),this._Router.navigate(["/auth/login"])}})}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(x.e),e.Y36(v._W),e.Y36(m.F0),e.Y36(c.uw))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:76,vars:20,consts:[["id","register"],[1,"container"],[1,"row","justify-content-center"],[1,"auth-form","py-5","col-lg-8","col-md-11","col-sm-10"],[1,"text-center"],["src","../../../assets/images/logo.svg","alt",""],[1,"px-5",3,"formGroup","ngSubmit"],[1,"row","justify-content-center","align-items-center","my-2"],["no_multiple","",1,"col-sm-6","col-md-4","col-lg-3","rounded-circle","d-flex","justify-content-center","align-items-center",3,"change"],[1,"rounded-circle"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","strokeWidth","{1.5}","stroke","currentColor","className","w-6 h-6",1,"w-25"],["strokeLinecap","round","strokeLinejoin","round","d","M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed",4,"ngFor","ngForOf"],[1,"row"],[1,"form-item","col-md-6"],[1,"input-group","mb-3","custom-input"],["id","basic-addon1",1,"input-group-text","px-3","py-3"],[1,"fa-solid","fa-user"],[1,"y-line","my-auto"],["type","text","placeholder","Enter your userName","aria-label","userName","aria-describedby","basic-addon1","formControlName","userName",1,"form-control","rounded-end","py-1"],["class","text-red m-0 mx-auto p-0 text-start",4,"ngIf"],["id","basic-addon1",1,"input-group-text","px-3","py-3","d-md-none"],[1,"fa-solid","fa-at"],["type","email","placeholder","Enter your email","aria-label","email","aria-describedby","basic-addon1","formControlName","email",1,"form-control","rounded-end","py-1"],[1,"fa-solid","fa-earth-americas"],["type","text","placeholder","Enter your country","aria-label","country","aria-describedby","basic-addon1","formControlName","country",1,"form-control","rounded-end","py-1"],[1,"fa-solid","fa-mobile-screen-button"],["type","tel","formControlName","phoneNumber","id","phoneNumber","placeholder","Enter your phoneNumber","aria-label","phoneNumber","aria-describedby","basic-addon1",1,"form-control","rounded-end","py-1"],[1,"form-item","input-group","mb-3"],[1,"fa-solid","fa-lock"],["placeholder","Enter your password","aria-label","password","aria-describedby","basic-addon1","formControlName","password",1,"form-control","py-1","rounded-0","border-end-0",3,"type"],["id","basic-addon1","role","button",1,"ayes_icon","rounded","px-3","py-3","rounded-start-0",3,"click"],[1,"fa-regular",3,"ngClass"],["class","text-red m-0 mx-auto p-0 text-start block",4,"ngIf"],[1,"col-md-6"],[1,"input-group","flex-nowrap","mb-3"],["id","addon-wrapping",1,"input-group-text","py-2","px-3"],["formControlName","confirmPassword","type","text","placeholder"," confirmPassword","aria-label","confirmPassword","aria-describedby","basic-addon1",1,"form-control","py-2","rounded-0","border-end-0",3,"type"],["class","text-danger mb-3",4,"ngIf"],[1,"d-flex","justify-content-between","align-items-center"],["role","button",1,"text-second","text-decoration-none",3,"click"],["role","button",1,"text-main","my-auto",3,"click"],["type","submit",1,"main","w-100","mt-3",3,"disabled"],[4,"ngIf"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed"],[1,"text-red","m-0","mx-auto","p-0","text-start"],["class","text-red",4,"ngIf"],[1,"text-red"],[1,"text-red","m-0","mx-auto","p-0","text-start","block"],["class","text-red p-0 block",4,"ngIf"],[1,"text-red","p-0","block"],[1,"text-danger","mb-3"],[1,"fas","fa-spin","fa-spinner","text-white"]],template:function(o,n){if(1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"img",5),e.qZA(),e.TgZ(6,"form",6),e.NdJ("ngSubmit",function(){return n.handleForm()}),e.TgZ(7,"h2"),e._uU(8,"Register"),e.qZA(),e.TgZ(9,"p"),e._uU(10," Welcome Back! Pleace enter your details "),e.qZA(),e.TgZ(11,"div",7)(12,"ngx-dropzone",8),e.NdJ("change",function(l){return n.onSelect(l)}),e.TgZ(13,"ngx-dropzone-label",9),e.O4$(),e.TgZ(14,"svg",10),e._UZ(15,"path",11),e.qZA(),e.kcU(),e.TgZ(16,"p"),e._uU(17," Choose your Image Profile "),e.qZA()(),e.YNc(18,P,2,2,"ngx-dropzone-image-preview",12),e.qZA()(),e.TgZ(19,"div",13)(20,"div",14)(21,"div",15)(22,"span",16),e._UZ(23,"i",17),e.qZA(),e._UZ(24,"div",18)(25,"input",19),e.qZA(),e.YNc(26,Y,4,2,"div",20),e.qZA(),e.TgZ(27,"div",14)(28,"div",15)(29,"span",21),e._UZ(30,"i",22),e.qZA(),e._UZ(31,"div",18)(32,"input",23),e.qZA(),e.YNc(33,E,4,2,"div",20),e.qZA()(),e.TgZ(34,"div",13)(35,"div",14)(36,"div",15)(37,"span",16),e._UZ(38,"i",24),e.qZA(),e._UZ(39,"div",18)(40,"input",25),e.qZA(),e.YNc(41,M,4,2,"div",20),e.qZA(),e.TgZ(42,"div",14)(43,"div",15)(44,"span",16),e._UZ(45,"i",26),e.qZA(),e._UZ(46,"div",18)(47,"input",27),e.qZA(),e.YNc(48,j,4,2,"div",20),e.qZA()(),e.TgZ(49,"div",13)(50,"div",14)(51,"div",28)(52,"span",16),e._UZ(53,"i",29),e.qZA(),e._UZ(54,"div",18)(55,"input",30),e.TgZ(56,"span",31),e.NdJ("click",function(){return n.toggleSee()}),e._UZ(57,"i",32),e.qZA()(),e.YNc(58,G,8,4,"div",33),e.qZA(),e.TgZ(59,"div",34)(60,"div",35)(61,"span",36),e._UZ(62,"i",29),e.qZA(),e._UZ(63,"div",18)(64,"input",37),e.TgZ(65,"span",31),e.NdJ("click",function(){return n.toggleSee_2()}),e._UZ(66,"i",32),e.qZA()(),e.YNc(67,H,3,2,"span",38),e.qZA()(),e.TgZ(68,"div",39)(69,"a",40),e.NdJ("click",function(){return n.routToLogin()}),e._uU(70,"Login now?"),e.qZA(),e.TgZ(71,"a",41),e.NdJ("click",function(){return n.openDialog()}),e._uU(72," Have Code? "),e.qZA()(),e.TgZ(73,"button",42),e._uU(74," Register "),e.YNc(75,K,2,0,"span",43),e.qZA()()()()()()),2&o){let a,l,d,u,f,Z;e.xp6(6),e.Q6J("formGroup",n.RegisterForm),e.xp6(12),e.Q6J("ngForOf",n.files),e.xp6(8),e.Q6J("ngIf",(null==(a=n.RegisterForm.get("userName"))?null:a.errors)&&(null==(a=n.RegisterForm.get("userName"))?null:a.touched)),e.xp6(7),e.Q6J("ngIf",(null==(l=n.RegisterForm.get("email"))?null:l.errors)&&(null==(l=n.RegisterForm.get("email"))?null:l.touched)),e.xp6(8),e.Q6J("ngIf",(null==(d=n.RegisterForm.get("country"))?null:d.errors)&&(null==(d=n.RegisterForm.get("country"))?null:d.touched)),e.xp6(7),e.Q6J("ngIf",(null==(u=n.RegisterForm.get("phoneNumber"))?null:u.errors)&&(null==(u=n.RegisterForm.get("phoneNumber"))?null:u.touched)),e.xp6(7),e.Q6J("type",n.password_type),e.xp6(2),e.Q6J("ngClass",e.WLB(14,b,n.see,!n.see)),e.xp6(1),e.Q6J("ngIf",(null==(f=n.RegisterForm.get("password"))?null:f.errors)&&(null==(f=n.RegisterForm.get("password"))?null:f.touched)),e.xp6(6),e.Q6J("type",n.password_type_2),e.xp6(2),e.Q6J("ngClass",e.WLB(17,b,n.see_2,!n.see_2)),e.xp6(1),e.Q6J("ngIf",(null==(Z=n.RegisterForm.get("confirmPassword"))?null:Z.errors)&&(null==(Z=n.RegisterForm.get("confirmPassword"))?null:Z.touched)),e.xp6(6),e.Q6J("disabled",n.RegisterForm.invalid),e.xp6(2),e.Q6J("ngIf",n.isLoading)}},dependencies:[g.mk,g.sg,g.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,_._f,_.NP,_.sv],styles:["#register[_ngcontent-%COMP%]{background-image:linear-gradient(to right top,rgba(16,130,39,.6) 15%,rgba(0,0,0,.6) 75%),url(main_bg.167816d194b9b1cd.png);background-size:cover;background-repeat:no-repeat;background-position:center center;height:100vh;display:flex;justify-content:center;align-items:center}.fa-upload[_ngcontent-%COMP%]{font-size:60px;padding-bottom:5px}.rounded_img[_ngcontent-%COMP%]{border-radius:50%}"]})}return t})(),title:"register"},{path:"resetPassword",component:(()=>{class t{constructor(r,o,n,a){this._AuthService=r,this._ToastrService=o,this._Router=n,this._MatDialog=a,this.see=!0,this.see_2=!0,this.isLoading=!1,this.password_type="text",this.password_type_2="text",this.message='"Welcome Again"',this.resetPassword=new s.cw({email:new s.NI(null,[s.kI.required,s.kI.email]),seed:new s.NI(null,[s.kI.required,s.kI.minLength(4),s.kI.maxLength(4)]),password:new s.NI(null,[s.kI.required,s.kI.pattern(w.q),s.kI.maxLength(20),s.kI.minLength(8)]),confirmPassword:new s.NI("",[s.kI.required])},{validators:this.passwordMatchValidator})}passwordMatchValidator(r){let o=r.get("password"),n=r.get("confirmPassword");return o.value==n.value?null:(r.get("confirmPassword")?.setErrors({invalid:"password and confirm password not match"}),{invalid:"password and confirm password not match"})}handleForm(r){this.isLoading=!0,this._AuthService.ResetPassword(r.value).subscribe({next:n=>{console.log(n),this.isLoading=!1},error:n=>{console.log(n),this.isLoading=!1,this._ToastrService.error(n.error.message,"Error! ")},complete:()=>{this.isLoading=!1,this._ToastrService.success(this.message,"Done\u{1f919}\u2705"),this._Router.navigate(["/auth/login"])}})}toggleSee(){this.see=!this.see,this.password_type=this.see?"text":"password"}toggleSee_2(){this.see_2=!this.see_2,this.password_type_2=this.see_2?"text":"password"}routToRegister(){this._Router.navigate(["/auth/register"])}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(x.e),e.Y36(v._W),e.Y36(m.F0),e.Y36(c.uw))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-reset-password"]],decls:44,vars:17,consts:[["id","resetPassword"],[1,"auth-form","py-5","w-50","col-lg-7","col-md-10","col-sm-12"],[1,"text-center"],["src","../../../assets/images/logo.svg","alt",""],[1,"px-5",3,"formGroup","ngSubmit"],[1,"form-item"],[1,"input-group","mb-3","custom-input"],["id","basic-addon1",1,"input-group-text","px-3","py-3"],[1,"fa-solid","fa-at"],[1,"y-line","my-auto"],["type","email","placeholder","Enter your email","aria-label","email","aria-describedby","basic-addon1","formControlName","email",1,"form-control","rounded-end","py-1"],["class","text-red m-0 mx-auto p-0 text-start",4,"ngIf"],[1,"form-item","input-group","mb-3"],[1,"fa-solid","fa-message"],["type","text","placeholder","OTP","aria-label","seed","aria-describedby","basic-addon1","formControlName","seed",1,"form-control","rounded-end","py-1","block"],["class","text-red m-0 mx-auto p-0 text-start block",4,"ngIf"],[1,"fa-solid","fa-lock"],["placeholder","Password","aria-label","password","aria-describedby","basic-addon1","formControlName","password",1,"form-control","rounded-end","py-1","block",3,"type"],["id","basic-addon1","role","button",1,"ayes_icon","rounded","px-3","py-3",3,"click"],[1,"fa-regular",3,"ngClass"],[1,"input-group","flex-nowrap","mb-3"],["id","addon-wrapping",1,"input-group-text","px-3","py-3"],["formControlName","confirmPassword","type","text","placeholder","confirmPassword","aria-label","confirmPassword","aria-describedby","basic-addon1",1,"form-control","py-2",3,"type"],["class","text-danger mb-3",4,"ngIf"],["type","submit",1,"main","w-100","mt-3",3,"disabled"],[4,"ngIf"],[1,"text-red","m-0","mx-auto","p-0","text-start"],["class","text-red",4,"ngIf"],[1,"text-red"],[1,"text-red","m-0","mx-auto","p-0","text-start","block"],["class","text-red p-0 block",4,"ngIf"],[1,"text-red","p-0","block"],[1,"text-danger","mb-3"],[1,"fas","fa-spin","fa-spinner","text-white"]],template:function(o,n){if(1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"form",4),e.NdJ("ngSubmit",function(){return n.handleForm(n.resetPassword)}),e.TgZ(5,"h2"),e._uU(6,"Log In"),e.qZA(),e.TgZ(7,"p"),e._uU(8," Welcome Back! Pleace enter your details "),e.qZA(),e.TgZ(9,"div",5)(10,"div",6)(11,"span",7),e._UZ(12,"i",8),e.qZA(),e._UZ(13,"div",9)(14,"input",10),e.qZA(),e.YNc(15,re,4,2,"div",11),e.qZA(),e.TgZ(16,"div",5)(17,"div",12)(18,"span",7),e._UZ(19,"i",13),e.qZA(),e._UZ(20,"div",9)(21,"input",14),e.qZA(),e.YNc(22,le,6,3,"div",15),e.qZA(),e.TgZ(23,"div",5)(24,"div",12)(25,"span",7),e._UZ(26,"i",16),e.qZA(),e._UZ(27,"div",9)(28,"input",17),e.TgZ(29,"span",18),e.NdJ("click",function(){return n.toggleSee()}),e._UZ(30,"i",19),e.qZA()(),e.YNc(31,ge,8,4,"div",15),e.qZA(),e.TgZ(32,"div",5)(33,"div",20)(34,"span",21),e._UZ(35,"i",16),e.qZA(),e._UZ(36,"div",9)(37,"input",22),e.TgZ(38,"span",18),e.NdJ("click",function(){return n.toggleSee_2()}),e._UZ(39,"i",19),e.qZA()(),e.YNc(40,fe,3,2,"span",23),e.qZA(),e.TgZ(41,"button",24),e._uU(42," Log in "),e.YNc(43,Ze,2,0,"span",25),e.qZA()()()()),2&o){let a,l,d,u;e.xp6(4),e.Q6J("formGroup",n.resetPassword),e.xp6(11),e.Q6J("ngIf",(null==(a=n.resetPassword.get("email"))?null:a.errors)&&(null==(a=n.resetPassword.get("email"))?null:a.touched)),e.xp6(7),e.Q6J("ngIf",(null==(l=n.resetPassword.get("seed"))?null:l.errors)&&(null==(l=n.resetPassword.get("seed"))?null:l.touched)),e.xp6(6),e.Q6J("type",n.password_type),e.xp6(2),e.Q6J("ngClass",e.WLB(11,y,n.see,!n.see)),e.xp6(1),e.Q6J("ngIf",(null==(d=n.resetPassword.get("password"))?null:d.errors)&&(null==(d=n.resetPassword.get("password"))?null:d.touched)),e.xp6(6),e.Q6J("type",n.password_type_2),e.xp6(2),e.Q6J("ngClass",e.WLB(14,y,n.see_2,!n.see_2)),e.xp6(1),e.Q6J("ngIf",(null==(u=n.resetPassword.get("confirmPassword"))?null:u.errors)&&(null==(u=n.resetPassword.get("confirmPassword"))?null:u.touched)),e.xp6(1),e.Q6J("disabled",n.resetPassword.invalid),e.xp6(2),e.Q6J("ngIf",n.isLoading)}},dependencies:[g.mk,g.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:["#resetPassword[_ngcontent-%COMP%]{background-image:linear-gradient(to right top,rgba(16,130,39,.6) 15%,rgba(0,0,0,.6) 75%),url(main_bg.167816d194b9b1cd.png);background-size:cover;background-repeat:no-repeat;background-position:center center;height:100vh;display:flex;justify-content:center;align-items:center}.fa-upload[_ngcontent-%COMP%]{font-size:60px;padding-bottom:5px}"]})}return t})(),title:"resetPassword"}];let xe=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(we),m.Bz]})}return t})();var ve=p(6639);let be=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[g.ez,xe,s.UX,_.bB,ve.m]})}return t})()}}]);