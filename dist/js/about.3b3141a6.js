"use strict";(self["webpackChunkrouter_app"]=self["webpackChunkrouter_app"]||[]).push([[443],{8726:function(e,t,a){a.r(t),a.d(t,{default:function(){return F}});var r=a(3396);const s={class:"contact"};function n(e,t,a,n,l,i){const o=(0,r.up)("FormContact");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(o)])}var l=a(9242),i=a(7139),o=a.p+"img/check.e27b45fd.svg";const c=e=>((0,r.dD)("data-v-620a6e45"),e=e(),(0,r.Cn)(),e),u={class:"contents"},p={id:"form-contact",class:"form-contact"},m=c((()=>(0,r._)("div",{class:"title__wrapper"},[(0,r._)("p",{class:"w6 fs48"},"Contact"),(0,r._)("p",{class:"mt8 fs24"},"お問い合わせ")],-1))),d=["for"],h={class:"required fs14"},_=["name","id","onUpdate:modelValue","placeholder"],b=["name","id","onUpdate:modelValue","placeholder"],f=c((()=>(0,r._)("div",{class:"form-submit"},[(0,r._)("input",{class:"btn-submit btn btn--orange w6 fs16",value:"送信する",type:"submit"})],-1))),w={key:1,class:"thanks__wrapper"},y=c((()=>(0,r._)("div",{class:"thanks-title__wrapper"},[(0,r._)("img",{class:"check-img",src:o,alt:"チェック"}),(0,r._)("p",{class:"thanks-title fs20"},"お問い合わせが完了しました！")],-1))),g=c((()=>(0,r._)("br",null,null,-1)));function q(e,t,a,s,n,o){const c=(0,r.up)("P");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",p,[m,n.submitted?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("form",{key:0,name:"gf_form",class:"form__wrapper",onSubmit:t[0]||(t[0]=(0,l.iM)(((...e)=>o.validationCheck&&o.validationCheck(...e)),["prevent"]))},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.survey,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"form-item"},[(0,r._)("label",{for:e.label},[(0,r.Uk)((0,i.zw)(e.question)+" ",1),(0,r.wy)((0,r._)("span",h,"必須",512),[[l.F8,e.required]])],8,d),"text"==e.question_type?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.wy)((0,r._)("input",{class:(0,i.C_)(["input-contact input",{"input-error":n.error[e.label]}]),type:"text",name:"entry."+e.name,id:e.label,"onUpdate:modelValue":t=>n.input[e.label]=t,placeholder:e.placeholder},null,10,_),[[l.nr,n.input[e.label]]]),(0,r.wy)((0,r._)("p",{class:"error-msg"},(0,i.zw)(n.error[e.label]),513),[[l.F8,e.required]])],64)):"textarea"==e.question_type?((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r.wy)((0,r._)("textarea",{class:(0,i.C_)(["input-contact input",{"input-error":n.error[e.label]}]),name:"entry."+e.name,id:e.label,"onUpdate:modelValue":t=>n.input[e.label]=t,placeholder:e.placeholder,rows:"15",cols:"30"},null,10,b),[[l.nr,n.input[e.label]]]),(0,r.wy)((0,r._)("p",{class:"error-msg"},(0,i.zw)(n.error[e.label]),513),[[l.F8,e.required]])],64)):(0,r.kq)("",!0)])))),128)),f],32)),n.submitted?((0,r.wg)(),(0,r.iD)("div",w,[y,(0,r.Wm)(c,{class:"mt48 lh150"},{default:(0,r.w5)((()=>[(0,r.Uk)(" この度はお問い合わせいただき誠にありがとうございます。"),g,(0,r.Uk)(" ２〜３営業日以内に担当者よりご連絡させていただきますので少々お待ち下さい。 ")])),_:1})])):(0,r.kq)("",!0)])])}var k=a(6265),v=a.n(k),C={name:"FormContact",data(){return{submitted:!1,input:{company:"",name:"",email:"",phone:"",message:""},error:{},gf_doc:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSeJd9c5QH5VJhXBv_ukZqRTsflJwPAdrNNI6_QHziC_9ZHrlA/formResponse",survey:[{name:"163432424",question:"会社名",question_type:"text",label:"company",placeholder:"株式会社rinne",required:!1},{name:"532591131",question:"お名前",question_type:"text",label:"name",placeholder:"山田太郎",required:!0},{name:"459920815",question:"メールアドレス",question_type:"text",label:"email",placeholder:"example@rinne.help",required:!0},{name:"776798480",question:"電話番号",question_type:"text",label:"phone",placeholder:"090-9999-9999",required:!1},{name:"420552451",question:"お問い合わせ内容",question_type:"textarea",label:"message",placeholder:"お問い合わせ内容をご記入ください",required:!0}]}},methods:{validationCheck(){this.error.name=this.input.name?"":"お名前を入力してください",this.input.email?this.input.email.match(/^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)?this.error.email="":this.error.email="メールアドレスの形式が正しくありません":this.error.email="メールアドレスを入力してください",this.error.message=this.input.message?"":"お問い合わせ内容を入力してください",this.error.name||this.error.email||this.error.message||(this.submit(),this.submitted=!0)},submit(){const e=new FormData;Object.keys(this.input).forEach((t=>{this.survey.forEach((a=>{a.label===t&&e.append("entry."+a.name,this.input[t])}))})),v().post(this.gf_doc,e).then((()=>{console.log("success")})).catch((e=>{console.log(e)}))}}},x=a(89);const z=(0,x.Z)(C,[["render",q],["__scopeId","data-v-620a6e45"]]);var D=z,Z={name:"ContactView",components:{FormContact:D}};const A=(0,x.Z)(Z,[["render",n]]);var F=A}}]);
//# sourceMappingURL=about.3b3141a6.js.map