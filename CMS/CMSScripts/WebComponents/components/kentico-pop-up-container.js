/*! Built with http://stenciljs.com */
const{h:t}=window.components;import{a as e}from"./chunk-a93dedfa.js";class o{constructor(){this.onClosePopupContainer=(t=>{t.stopPropagation(),this.closePopup.emit(t)}),this.onBackButtonClick=(t=>{t.stopPropagation(),this.backClick.emit(t)})}get closeTooltip(){return this.getString(this.localizationService,"typelist.closeTooltip")}get backTooltip(){return this.getString(this.localizationService,"variant.back")}render(){return this.popupContainerEl.setAttribute("position",this.position),this.popupContainerEl.setAttribute("theme",this.theme),t("div",{class:"ktc-pop-up",onClick:t=>t.stopPropagation()},t("kentico-dialog-header",{headerTitle:this.headerTitle,theme:this.theme,showBackButton:this.showBackButton,closeTooltip:this.closeTooltip,backTooltip:this.backTooltip,onClose:this.onClosePopupContainer,onBack:this.onBackButtonClick}),t("div",{class:"ktc-pop-up-content"},t("slot",{name:"pop-up-content"})),t("slot",{name:"pop-up-footer"}))}static get is(){return"kentico-pop-up-container"}static get properties(){return{getString:{context:"getString"},headerTitle:{type:String,attr:"header-title"},localizationService:{type:"Any",attr:"localization-service"},popupContainerEl:{elementRef:!0},position:{type:String,attr:"position"},showBackButton:{type:Boolean,attr:"show-back-button"},theme:{type:"Any",attr:"theme"}}}static get events(){return[{name:"closePopup",method:"closePopup",bubbles:!0,cancelable:!0,composed:!0},{name:"backClick",method:"backClick",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"kentico-pop-up-container [class*=\" icon-\"],kentico-pop-up-container [class^=icon-]{font-family:Core-icons;display:inline-block;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-image:none}kentico-pop-up-container [class^=icon-]:before{content:\"\\e619\"}kentico-pop-up-container .ktc-icon-only:before{content:none}kentico-pop-up-container[triangle]:before{content:'';display:block;position:absolute;left:50%;margin-left:-10px;width:0;height:0;top:-20px;pointer-events:none;border:10px solid;border-color:inherit}kentico-pop-up-container[triangle][position=center]{-webkit-transform:translateX(-50%);transform:translateX(-50%)}kentico-pop-up-container[triangle][position=left]{-webkit-transform:translateX(-100%) translateX(18px);transform:translateX(-100%) translateX(18px)}kentico-pop-up-container[triangle][position=left]:before{left:calc(100% - 18px)}kentico-pop-up-container[triangle][position=right]{-webkit-transform:translateX(-18px);transform:translateX(-18px)}kentico-pop-up-container[triangle][position=right]:before{left:18px}kentico-pop-up-container[triangle][theme=widget]:before{border-color:transparent transparent #0f6194}kentico-pop-up-container[triangle][theme=section]:before{border-color:transparent transparent #262524}kentico-pop-up-container .ktc-pop-up{min-width:300px;max-width:900px;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.5);box-shadow:0 2px 5px 0 rgba(0,0,0,.5);background-color:#fff}kentico-pop-up-container .ktc-pop-up .ktc-pop-up-content{background-color:#fff;padding-left:8px;padding-right:8px}kentico-pop-up-container .ktc-pop-up .ktc-pop-up-content .ktc-pop-up-content-header{padding-top:8px;font-size:12px;color:#696663;line-height:16px;cursor:default}kentico-pop-up-container .ktc-pop-up .ktc-pop-up-content .ktc-pop-up-content-header:after{content:'';border-bottom:1px solid #d6d9d6;width:100%;display:block;padding-bottom:8px}kentico-pop-up-container .ktc-pop-up .ktc-popup-footer{background-color:#fff;min-height:48px;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-left:8px;margin-right:8px;border-top:1px solid #d6d9d6}kentico-pop-up-container .ktc-pop-up .ktc-popup-footer kentico-submit-button{margin-top:8px;margin-left:8px}kentico-pop-up-container .ktc-pop-up .ktc-popup-footer kentico-submit-button:first-child{margin-left:0}"}}export{o as KenticoPopUpContainer};