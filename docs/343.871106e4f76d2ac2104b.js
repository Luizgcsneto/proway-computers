(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[343],{2343:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ContatoModule:()=>H});var i=s(8583),a=s(5519),r=s(665),n=s(3018);function o(e,t,s,i,a,r,n){try{var o=e[r](n),l=o.value}catch(h){return void s(h)}o.done?t(l):Promise.resolve(l).then(i,a)}const l=new n.OlP("ngx-mask config"),h=new n.OlP("new ngx-mask config"),c=new n.OlP("initial ngx-mask config"),m={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,triggerOnMaskChange:!1,maskFilled:new n.vpe,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},U:{pattern:new RegExp("[A-Z]")},L:{pattern:new RegExp("[a-z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}},u=["Hh:m0:s0","Hh:m0","m0:s0"],p=["percent","Hh","s0","m0","separator","d0/M0/0000","d0/M0","d0","M0"];let f=(()=>{class e{constructor(e){this._config=e,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this._formatWithSeparators=(e,t,s,i)=>{let a=[],r="";if(Array.isArray(s)){const t=new RegExp(s.map(e=>"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e).join("|"));a=e.split(t),r=e.match(t)?.[0]??""}else a=e.split(s),r=s;const n=a.length>1?`${r}${a[1]}`:"";let o=a[0];const l=this.separatorLimit.replace(/\s/g,"");l&&+l&&(o="-"===o[0]?`-${o.slice(1,o.length).slice(0,l.length)}`:o.slice(0,l.length));const h=/(\d+)(\d{3})/;for(;t&&h.test(o);)o=o.replace(h,"$1"+t+"$2");return void 0===i?o+n:0===i?o:o+n.substr(0,i+1)},this.percentage=e=>Number(e)>=0&&Number(e)<=100,this.getPrecision=e=>{const t=e.split(".");return t.length>1?Number(t[t.length-1]):1/0},this.checkAndRemoveSuffix=e=>{for(let t=this.suffix?.length-1;t>=0;t--){const s=this.suffix.substr(t,this.suffix?.length);if(e.includes(s)&&(t-1<0||!e.includes(this.suffix.substr(t-1,this.suffix?.length))))return e.replace(s,"")}return e},this.checkInputPrecision=(e,t,s)=>{if(t<1/0){if(Array.isArray(s)){const e=s.find(e=>e!==this.thousandSeparator);s=e||s[0]}const i=new RegExp(this._charToRegExpExpression(s)+`\\d{${t}}.*$`),a=e.match(i);a&&a[0].length-1>t&&(e=e.substring(0,e.length-(a[0].length-1-t))),0===t&&this._compareOrIncludes(e[e.length-1],s,this.thousandSeparator)&&(e=e.substring(0,e.length-1))}return e},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime}applyMaskWithPattern(e,t){const[s,i]=t;return this.customPattern=i,this.applyMask(e,s)}applyMask(e,t,s=0,i=!1,a=!1,r=(()=>{})){if(!t||"string"!=typeof e)return"";let n=0,o="",l=!1,h=!1,c=1,m=!1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&e?.length>0&&(e=this.checkAndRemoveSuffix(e));const u=e.toString().split("");"IP"===t&&(this.ipError=u.filter(e=>"."===e).length<3&&u.length<7,t="099.099.099.099");const p=[];for(let _=0;_<e.length;_++)e[_]?.match("\\d")&&p.push(e[_]);if("CPF_CNPJ"===t&&(this.cpfCnpjError=11!==p.length&&14!==p.length,t=p.length>11?"00.000.000/0000-00":"000.000.000-00"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)){e=this._stripToDecimal(e);const s=this.getPrecision(t);e=this.checkInputPrecision(e,s,this.decimalMarker)}if(e.indexOf(".")>0&&!this.percentage(e.substring(0,e.indexOf(".")))){const t=e.substring(0,e.indexOf(".")-1);e=`${t}${e.substring(e.indexOf("."),e.length)}`}o=this.percentage(e)?e:e.substring(0,e.length-1)}else if(t.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&!this._compareOrIncludes(e[1],this.decimalMarker,this.thousandSeparator)&&!a?e.slice(1,e.length):e,a&&(e=this._compareOrIncludes(e[e.length-1],this.decimalMarker,this.thousandSeparator)?e.slice(0,e.length-1):e);const i=this._charToRegExpExpression(this.thousandSeparator);let r='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(i,"");if(Array.isArray(this.decimalMarker))for(const e of this.decimalMarker)r=r.replace(this._charToRegExpExpression(e),"");else r=r.replace(this._charToRegExpExpression(this.decimalMarker),"");const n=new RegExp("["+r+"]");(e.match(n)||1===e.length&&this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))&&(e=e.substring(0,e.length-1));const l=this.getPrecision(t),m=(e=this.checkInputPrecision(e,l,this.decimalMarker)).replace(new RegExp(i,"g"),"");o=this._formatWithSeparators(m,this.thousandSeparator,this.decimalMarker,l);const u=o.indexOf(",")-e.indexOf(","),p=o.length-e.length;if(p>0&&","!==o[s]){h=!0;let e=0;do{this._shift.add(s+e),e++}while(e<p)}else 0!==u&&s>0&&!(o.indexOf(",")>=s&&s>3)||!(o.indexOf(".")>=s&&s>3)&&p<=0?(this._shift.clear(),h=!0,c=p,this._shift.add(s+=p)):this._shift.clear()}else for(let _=0,x=u[0];_<u.length&&n!==t.length;_++,x=u[_])if(this._checkSymbolMask(x,t[n])&&"?"===t[n+1])o+=x,n+=2;else if("*"===t[n+1]&&l&&this._checkSymbolMask(x,t[n+2]))o+=x,n+=3,l=!1;else if(this._checkSymbolMask(x,t[n])&&"*"===t[n+1])o+=x,l=!0;else if("?"===t[n+1]&&this._checkSymbolMask(x,t[n+2]))o+=x,n+=3;else if(this._checkSymbolMask(x,t[n])){if("H"===t[n]&&Number(x)>2){n+=1,this._shiftStep(t,n,u.length),_--,this.leadZeroDateTime&&(o+="0");continue}if("h"===t[n]&&"2"===o&&Number(x)>3){n+=1,_--;continue}if("m"===t[n]&&Number(x)>5){n+=1,this._shiftStep(t,n,u.length),_--,this.leadZeroDateTime&&(o+="0");continue}if("s"===t[n]&&Number(x)>5){n+=1,this._shiftStep(t,n,u.length),_--,this.leadZeroDateTime&&(o+="0");continue}const s=31;if("d"===t[n]&&(Number(x)>3&&this.leadZeroDateTime||Number(e.slice(n,n+2))>s||"/"===e[n+1])){n+=1,this._shiftStep(t,n,u.length),_--,this.leadZeroDateTime&&(o+="0");continue}if("M"===t[n]){const i=12,a=0===n&&(Number(x)>2||Number(e.slice(n,n+2))>i||"/"===e[n+1]),r=e.slice(n-3,n-1).includes("/")&&("/"===e[n-2]&&Number(e.slice(n-1,n+1))>i&&"/"!==e[n]||"/"===e[n]||"/"===e[n-3]&&Number(e.slice(n-2,n))>i&&"/"!==e[n-1]||"/"===e[n-1]),l=Number(e.slice(n-3,n-1))<=s&&!e.slice(n-3,n-1).includes("/")&&"/"===e[n-1]&&(Number(e.slice(n,n+2))>i||"/"===e[n+1]),h=Number(e.slice(n-3,n-1))>s&&!e.slice(n-3,n-1).includes("/")&&!e.slice(n-2,n).includes("/")&&Number(e.slice(n-2,n))>i,c=Number(e.slice(n-3,n-1))<=s&&!e.slice(n-3,n-1).includes("/")&&"/"!==e[n-1]&&Number(e.slice(n-1,n+1))>i;if(Number(x)>1&&this.leadZeroDateTime||a||r||l||h||c){n+=1,this._shiftStep(t,n,u.length),_--,this.leadZeroDateTime&&(o+="0");continue}}o+=x,n++}else-1!==this.maskSpecialCharacters.indexOf(t[n])?(o+=t[n],n++,this._shiftStep(t,n,u.length),_--):this.maskSpecialCharacters.indexOf(x)>-1&&this.maskAvailablePatterns[t[n]]&&this.maskAvailablePatterns[t[n]]?.optional?(u[n]&&"099.099.099.099"!==t&&"000.000.000-00"!==t&&"00.000.000/0000-00"!==t&&!t.match(/^9+\.0+$/)&&(o+=u[n]),n++,_--):"*"===this.maskExpression[n+1]&&this._findSpecialChar(this.maskExpression[n+2])&&this._findSpecialChar(x)===this.maskExpression[n+2]&&l||"?"===this.maskExpression[n+1]&&this._findSpecialChar(this.maskExpression[n+2])&&this._findSpecialChar(x)===this.maskExpression[n+2]&&l?(n+=3,o+=x):this.showMaskTyped&&this.maskSpecialCharacters.indexOf(x)<0&&x!==this.placeHolderCharacter&&(m=!0);o.length+1===t.length&&-1!==this.maskSpecialCharacters.indexOf(t[t.length-1])&&(o+=t[t.length-1]);let f=s+1;for(;this._shift.has(f);)c++,f++;let d=i&&!t.startsWith("separator")?n:this._shift.has(s)?c:0;m&&d--,r(d,h),c<0&&this._shift.clear();let g=!1;a&&(g=u.every(e=>this.maskSpecialCharacters.includes(e)));let k=`${this.prefix}${g?"":o}${this.suffix}`;return 0===o.length&&(k=`${this.prefix}${o}`),k}_findSpecialChar(e){return this.maskSpecialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[t]&&this.maskAvailablePatterns[t].pattern&&this.maskAvailablePatterns[t].pattern.test(e)}_stripToDecimal(e){return e.split("").filter((e,t)=>e.match("^-?\\d")||e.match("\\s")||"."===e||","===e||"-"===e&&0===t&&this.allowNegativeNumbers).join("")}_charToRegExpExpression(e){if(e){const t="[\\^$.|?*+()";return" "===e?"\\s":t.indexOf(e)>=0?`\\${e}`:e}return e}_shiftStep(e,t,s){const i=/[*?]/g.test(e.slice(0,t))?s:t;this._shift.add(i+this.prefix.length||0)}_compareOrIncludes(e,t,s){return Array.isArray(t)?t.filter(e=>e!==s).includes(e):e===t}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(l))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})(),d=(()=>{class e extends f{constructor(e,t,s,i){super(t),this.document=e,this._config=t,this._elementRef=s,this._renderer=i,this.maskExpression="",this.isNumberValue=!1,this.placeHolderCharacter="_",this.maskIsShown="",this.selStart=null,this.selEnd=null,this.writingValue=!1,this.maskChanged=!1,this.triggerOnMaskChange=!1,this.onChange=e=>{}}applyMask(e,t,s=0,i=!1,a=!1,r=(()=>{})){if(!t)return e!==this.actualValue?this.actualValue:e;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():"","IP"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),"CPF_CNPJ"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),!e&&this.showMaskTyped)return this.formControlResult(this.prefix),this.prefix+this.maskIsShown;const n=e&&"number"==typeof this.selStart?e[this.selStart]:"";let o="";if(this.hiddenInput&&!this.writingValue){let t=this.actualValue.split("");""!==e&&t.length?"number"==typeof this.selStart&&"number"==typeof this.selEnd&&(e.length>t.length?t.splice(this.selStart,0,n):e.length<t.length&&(t.length-e.length==1?t.splice(this.selStart-1,1):t.splice(this.selStart,this.selEnd-this.selStart))):t=[],this.showMaskTyped&&(e=this.removeMask(e)),o=this.actualValue.length&&t.length<=e.length?this.shiftTypedSymbols(t.join("")):e}o=Boolean(o)&&o.length?o:e;const l=super.applyMask(o,t,s,i,a,r);if(this.actualValue=this.getActualValue(l),"."===this.thousandSeparator&&"."===this.decimalMarker&&(this.decimalMarker=","),this.maskExpression.startsWith("separator")&&!0===this.dropSpecialCharacters&&(this.maskSpecialCharacters=this.maskSpecialCharacters.filter(e=>!this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))),this.formControlResult(l),!this.showMaskTyped)return this.hiddenInput&&l&&l.length?this.hideInput(l,this.maskExpression):l;const h=l.length,c=this.prefix+this.maskIsShown;if(this.maskExpression.includes("H")){const e=this._numberSkipedSymbols(l);return l+c.slice(h+e)}return"IP"===this.maskExpression||"CPF_CNPJ"===this.maskExpression?l+c:l+c.slice(h)}_numberSkipedSymbols(e){const t=/(^|\D)(\d\D)/g;let s=t.exec(e),i=0;for(;null!=s;)i+=1,s=t.exec(e);return i}applyValueChanges(e,t,s,i=(()=>{})){const a=this._elementRef.nativeElement;a.value=this.applyMask(a.value,this.maskExpression,e,t,s,i),a!==this._getActiveElement()&&this.clearIfNotMatchFn()}hideInput(e,t){return e.split("").map((e,s)=>this.maskAvailablePatterns&&this.maskAvailablePatterns[t[s]]&&this.maskAvailablePatterns[t[s]]?.symbol?this.maskAvailablePatterns[t[s]]?.symbol:e).join("")}getActualValue(e){const t=e.split("").filter((e,t)=>this._checkSymbolMask(e,this.maskExpression[t])||this.maskSpecialCharacters.includes(this.maskExpression[t])&&e===this.maskExpression[t]);return t.join("")===e?t.join(""):e}shiftTypedSymbols(e){let t="";return(e&&e.split("").map((s,i)=>{if(this.maskSpecialCharacters.includes(e[i+1])&&e[i+1]!==this.maskExpression[i+1])return t=s,e[i+1];if(t.length){const e=t;return t="",e}return s})||[]).join("")}numberToString(e){return e||0===e?Number(e).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:20}):String(e)}showMaskInInput(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}if(this.showMaskTyped){if(e){if("IP"===this.maskExpression)return this._checkForIp(e);if("CPF_CNPJ"===this.maskExpression)return this._checkForCpfCnpj(e)}return this.maskExpression.replace(/\w/g,this.placeHolderCharacter)}return""}clearIfNotMatchFn(){const e=this._elementRef.nativeElement;this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==e.value.replace(/_/g,"").length&&(this.formElementProperty=["value",""],this.applyMask(e.value,this.maskExpression))}set formElementProperty([e,t]){Promise.resolve().then(()=>this._renderer.setProperty(this._elementRef.nativeElement,e,t))}checkSpecialCharAmount(e){return e.split("").filter(e=>this._findSpecialChar(e)).length}removeMask(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters.concat("_").concat(this.placeHolderCharacter))}_checkForIp(e){if("#"===e)return`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;const t=[];for(let s=0;s<e.length;s++)e[s]?.match("\\d")&&t.push(e[s]);return t.length<=3?`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>3&&t.length<=6?`${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>6&&t.length<=9?this.placeHolderCharacter:""}_checkForCpfCnpj(e){const t=`${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,s=`${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;if("#"===e)return t;const i=[];for(let a=0;a<e.length;a++)e[a]?.match("\\d")&&i.push(e[a]);return i.length<=3?t.slice(i.length,t.length):i.length>3&&i.length<=6?t.slice(i.length+1,t.length):i.length>6&&i.length<=9?t.slice(i.length+2,t.length):i.length>9&&i.length<11?t.slice(i.length+3,t.length):11===i.length?"":12===i.length?s.slice(17===e.length?16:15,s.length):i.length>12&&i.length<=14?s.slice(i.length+4,s.length):""}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}formControlResult(e){this.writingValue||!this.triggerOnMaskChange&&this.maskChanged?this.maskChanged=!1:Array.isArray(this.dropSpecialCharacters)?this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters))):this.onChange(this.dropSpecialCharacters?this._toNumber(this._checkSymbols(e)):this._removeSuffix(e))}_toNumber(e){if(!this.isNumberValue||""===e)return e;const t=Number(e);return Number.isNaN(t)?e:t}_removeMask(e,t){return e?e.replace(this._regExpForRemove(t),""):e}_removePrefix(e){return this.prefix&&e?e.replace(this.prefix,""):e}_removeSuffix(e){return this.suffix&&e?e.replace(this.suffix,""):e}_retrieveSeparatorValue(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters)}_regExpForRemove(e){return new RegExp(e.map(e=>`\\${e}`).join("|"),"gi")}_checkSymbols(e){if(""===e)return e;const t=this._retrieveSeparatorPrecision(this.maskExpression);let s=this._retrieveSeparatorValue(e);return"."===this.decimalMarker||Array.isArray(this.decimalMarker)||(s=s.replace(this.decimalMarker,".")),this.isNumberValue?t?e===this.decimalMarker?null:this._checkPrecision(this.maskExpression,s):Number(s):s}_retrieveSeparatorPrecision(e){const t=e.match(new RegExp("^separator\\.([^d]*)"));return t?Number(t[1]):null}_checkPrecision(e,t){return e.indexOf("2")>0?Number(t).toFixed(2):Number(t)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(i.K0),n.LFG(l),n.LFG(n.SBq),n.LFG(n.Qsj))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})(),g=(()=>{class e{constructor(e,t,s){this.document=e,this._maskService=t,this._config=s,this.maskExpression="",this.specialCharacters=[],this.patterns={},this.prefix="",this.suffix="",this.thousandSeparator=" ",this.decimalMarker=".",this.dropSpecialCharacters=null,this.hiddenInput=null,this.showMaskTyped=null,this.placeHolderCharacter=null,this.shownMaskExpression=null,this.showTemplate=null,this.clearIfNotMatch=null,this.validation=null,this.separatorLimit=null,this.allowNegativeNumbers=null,this.leadZeroDateTime=null,this.triggerOnMaskChange=null,this.maskFilled=new n.vpe,this._maskValue="",this._position=null,this._maskExpressionArray=[],this._justPasted=!1,this.onChange=e=>{},this.onTouch=()=>{}}ngOnChanges(e){const{maskExpression:t,specialCharacters:s,patterns:i,prefix:a,suffix:r,thousandSeparator:n,decimalMarker:o,dropSpecialCharacters:l,hiddenInput:h,showMaskTyped:c,placeHolderCharacter:m,shownMaskExpression:u,showTemplate:p,clearIfNotMatch:f,validation:d,separatorLimit:g,allowNegativeNumbers:k,leadZeroDateTime:_,triggerOnMaskChange:x}=e;if(t&&(t.currentValue===t.previousValue||t.firstChange||(this._maskService.maskChanged=!0),t.currentValue&&t.currentValue.split("||").length>1?(this._maskExpressionArray=t.currentValue.split("||").sort((e,t)=>e.length-t.length),this._setMask()):(this._maskExpressionArray=[],this._maskValue=t.currentValue||"",this._maskService.maskExpression=this._maskValue)),s){if(!s.currentValue||!Array.isArray(s.currentValue))return;this._maskService.maskSpecialCharacters=s.currentValue||[]}i&&i.currentValue&&(this._maskService.maskAvailablePatterns=i.currentValue),a&&(this._maskService.prefix=a.currentValue),r&&(this._maskService.suffix=r.currentValue),n&&(this._maskService.thousandSeparator=n.currentValue),o&&(this._maskService.decimalMarker=o.currentValue),l&&(this._maskService.dropSpecialCharacters=l.currentValue),h&&(this._maskService.hiddenInput=h.currentValue),c&&(this._maskService.showMaskTyped=c.currentValue),m&&(this._maskService.placeHolderCharacter=m.currentValue),u&&(this._maskService.shownMaskExpression=u.currentValue),p&&(this._maskService.showTemplate=p.currentValue),f&&(this._maskService.clearIfNotMatch=f.currentValue),d&&(this._maskService.validation=d.currentValue),g&&(this._maskService.separatorLimit=g.currentValue),k&&(this._maskService.allowNegativeNumbers=k.currentValue,this._maskService.allowNegativeNumbers&&(this._maskService.maskSpecialCharacters=this._maskService.maskSpecialCharacters.filter(e=>"-"!==e))),_&&(this._maskService.leadZeroDateTime=_.currentValue),x&&(this._maskService.triggerOnMaskChange=x.currentValue),this._applyMask()}validate({value:e}){if(!this._maskService.validation||!this._maskValue)return null;if(this._maskService.ipError)return this._createValidationError(e);if(this._maskService.cpfCnpjError)return this._createValidationError(e);if(this._maskValue.startsWith("separator"))return null;if(p.includes(this._maskValue))return null;if(this._maskService.clearIfNotMatch)return null;if(u.includes(this._maskValue))return this._validateTime(e);if(e&&e.toString().length>=1){let t=0;for(const s in this._maskService.maskAvailablePatterns)if(this._maskService.maskAvailablePatterns[s].optional){if(this._maskValue.indexOf(s)!==this._maskValue.lastIndexOf(s)?t+=this._maskValue.split("").filter(e=>e===s).join("").length:-1!==this._maskValue.indexOf(s)&&t++,-1!==this._maskValue.indexOf(s)&&e.toString().length>=this._maskValue.indexOf(s))return null;if(t===this._maskValue.length)return null}if(1===this._maskValue.indexOf("{")&&e.toString().length===this._maskValue.length+Number(this._maskValue.split("{")[1].split("}")[0])-4)return null;if(1===this._maskValue.indexOf("*")||1===this._maskValue.indexOf("?"))return null;if(this._maskValue.indexOf("*")>1&&e.toString().length<this._maskValue.indexOf("*")||this._maskValue.indexOf("?")>1&&e.toString().length<this._maskValue.indexOf("?")||1===this._maskValue.indexOf("{"))return this._createValidationError(e);if(-1===this._maskValue.indexOf("*")||-1===this._maskValue.indexOf("?")){const s=this._maskService.dropSpecialCharacters?this._maskValue.length-this._maskService.checkSpecialCharAmount(this._maskValue)-t:this._maskValue.length-t;if(e.toString().length<s)return this._createValidationError(e)}}return e?(this.maskFilled.emit(),null):null}onPaste(){this._justPasted=!0}onModelChange(e){!e&&this._maskService.actualValue&&(this._maskService.actualValue=this._maskService.getActualValue(""))}onInput(e){const t=e.target;if(this._inputValue=t.value,this._setMask(),!this._maskValue)return void this.onChange(t.value);const s=1===t.selectionStart?t.selectionStart+this._maskService.prefix.length:t.selectionStart;let i=0,a=!1;if(this._maskService.applyValueChanges(s,this._justPasted,"Backspace"===this._code||"Delete"===this._code,(e,t)=>{this._justPasted=!1,i=e,a=t}),this._getActiveElement()!==t)return;this._position=1===this._position&&1===this._inputValue.length?null:this._position;let r=this._position?this._inputValue.length+s+i:s+("Backspace"!==this._code||a?i:0);r>this._getActualInputLength()&&(r=this._getActualInputLength()),r<0&&(r=0),t.setSelectionRange(r,r),this._position=null}onBlur(){this._maskValue&&this._maskService.clearIfNotMatchFn(),this.onTouch()}onClick(e){if(!this._maskValue)return;const t=e.target;null!==t&&null!==t.selectionStart&&t.selectionStart===t.selectionEnd&&t.selectionStart>this._maskService.prefix.length&&38!==e.keyCode&&this._maskService.showMaskTyped&&(this._maskService.maskIsShown=this._maskService.showMaskInInput(),t.setSelectionRange&&this._maskService.prefix+this._maskService.maskIsShown===t.value?(t.focus(),t.setSelectionRange(0,0)):t.selectionStart>this._maskService.actualValue.length&&t.setSelectionRange(this._maskService.actualValue.length,this._maskService.actualValue.length));const s=t.value&&t.value!==this._maskService.prefix?t.value:this._maskService.prefix+this._maskService.maskIsShown;t.value!==s&&(t.value=s),(t.selectionStart||t.selectionEnd)<=this._maskService.prefix.length?t.selectionStart=this._maskService.prefix.length:t.selectionEnd>this._getActualInputLength()&&(t.selectionEnd=this._getActualInputLength())}onKeyDown(e){if(!this._maskValue)return;this._code=e.code?e.code:e.key;const t=e.target;if(this._inputValue=t.value,this._setMask(),38===e.keyCode&&e.preventDefault(),37===e.keyCode||8===e.keyCode||46===e.keyCode){if(8===e.keyCode&&0===t.value.length&&(t.selectionStart=t.selectionEnd),8===e.keyCode&&0!==t.selectionStart)if(this.specialCharacters=this.specialCharacters?.length?this.specialCharacters:this._config.specialCharacters,this.prefix.length>1&&t.selectionStart<=this.prefix.length)t.setSelectionRange(this.prefix.length,t.selectionEnd);else if(this._inputValue.length!==t.selectionStart&&1!==t.selectionStart)for(;this.specialCharacters.includes(this._inputValue[t.selectionStart-1].toString())&&(this.prefix.length>=1&&t.selectionStart>this.prefix.length||0===this.prefix.length);)t.setSelectionRange(t.selectionStart-1,t.selectionEnd);this.checkSelectionOnDeletion(t),this._maskService.prefix.length&&t.selectionStart<=this._maskService.prefix.length&&t.selectionEnd<=this._maskService.prefix.length&&e.preventDefault();const s=t.selectionStart;8!==e.keyCode||t.readOnly||0!==s||t.selectionEnd!==t.value.length||0===t.value.length||(this._position=this._maskService.prefix?this._maskService.prefix.length:0,this._maskService.applyMask(this._maskService.prefix,this._maskService.maskExpression,this._position))}this.suffix&&this.suffix.length>1&&this._inputValue.length-this.suffix.length<t.selectionStart?t.setSelectionRange(this._inputValue.length-this.suffix.length,this._inputValue.length):(65===e.keyCode&&e.ctrlKey||65===e.keyCode&&e.metaKey)&&(t.setSelectionRange(0,this._getActualInputLength()),e.preventDefault()),this._maskService.selStart=t.selectionStart,this._maskService.selEnd=t.selectionEnd}writeValue(e){var t,s=this;return(t=function*(){"object"==typeof e&&null!==e&&"value"in e&&("disable"in e&&s.setDisabledState(Boolean(e.disable)),e=e.value),("number"==typeof e||s._maskValue.startsWith("separator"))&&(e=s._maskService.numberToString(e),Array.isArray(s.decimalMarker)||(e="."!==s.decimalMarker?e.replace(".",s.decimalMarker):e),s._maskService.isNumberValue=!0),"string"!=typeof e&&(e=""),s._inputValue=e,s._setMask(),e&&s._maskService.maskExpression||s._maskService.maskExpression&&(s._maskService.prefix||s._maskService.showMaskTyped)?(s._maskService.writingValue=!0,s._maskService.formElementProperty=["value",s._maskService.applyMask(e,s._maskService.maskExpression)],s._maskService.writingValue=!1):s._maskService.formElementProperty=["value",e],s._inputValue=e},function(){var e=this,s=arguments;return new Promise(function(i,a){var r=t.apply(e,s);function n(e){o(r,i,a,n,l,"next",e)}function l(e){o(r,i,a,n,l,"throw",e)}n(void 0)})})()}registerOnChange(e){this.onChange=e,this._maskService.onChange=this.onChange}registerOnTouched(e){this.onTouch=e}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}checkSelectionOnDeletion(e){e.selectionStart=Math.min(Math.max(this.prefix.length,e.selectionStart),this._inputValue.length-this.suffix.length),e.selectionEnd=Math.min(Math.max(this.prefix.length,e.selectionEnd),this._inputValue.length-this.suffix.length)}setDisabledState(e){this._maskService.formElementProperty=["disabled",e]}_repeatPatternSymbols(e){return e.match(/{[0-9]+}/)&&e.split("").reduce((t,s,i)=>{if(this._start="{"===s?i:this._start,"}"!==s)return this._maskService._findSpecialChar(s)?t+s:t;this._end=i;const a=Number(e.slice(this._start+1,this._end));return t+new Array(a+1).join(e[this._start-1])},"")||e}_applyMask(){this._maskService.maskExpression=this._repeatPatternSymbols(this._maskValue||""),this._maskService.formElementProperty=["value",this._maskService.applyMask(this._inputValue,this._maskService.maskExpression)]}_validateTime(e){const t=this._maskValue.split("").filter(e=>":"!==e).length;return e&&(0==+e[e.length-1]&&e.length<t||e.length<=t-2)?this._createValidationError(e):null}_getActualInputLength(){return this._maskService.actualValue.length||this._maskService.actualValue.length+this._maskService.prefix.length}_createValidationError(e){return{mask:{requiredMask:this._maskValue,actualValue:e}}}_setMask(){this._maskExpressionArray.length>0&&this._maskExpressionArray.some(e=>{const t=this._maskService.removeMask(this._inputValue)?.length<=this._maskService.removeMask(e)?.length;if(this._inputValue&&t)return this._maskValue=e,this.maskExpression=e,this._maskService.maskExpression=e,t;this._maskValue=this._maskExpressionArray[this._maskExpressionArray.length-1],this.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1],this._maskService.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1]})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(i.K0),n.Y36(d),n.Y36(l))},e.\u0275dir=n.lG2({type:e,selectors:[["input","mask",""],["textarea","mask",""]],hostBindings:function(e,t){1&e&&n.NdJ("paste",function(){return t.onPaste()})("ngModelChange",function(e){return t.onModelChange(e)})("input",function(e){return t.onInput(e)})("blur",function(){return t.onBlur()})("click",function(e){return t.onClick(e)})("keydown",function(e){return t.onKeyDown(e)})},inputs:{maskExpression:["mask","maskExpression"],specialCharacters:"specialCharacters",patterns:"patterns",prefix:"prefix",suffix:"suffix",thousandSeparator:"thousandSeparator",decimalMarker:"decimalMarker",dropSpecialCharacters:"dropSpecialCharacters",hiddenInput:"hiddenInput",showMaskTyped:"showMaskTyped",placeHolderCharacter:"placeHolderCharacter",shownMaskExpression:"shownMaskExpression",showTemplate:"showTemplate",clearIfNotMatch:"clearIfNotMatch",validation:"validation",separatorLimit:"separatorLimit",allowNegativeNumbers:"allowNegativeNumbers",leadZeroDateTime:"leadZeroDateTime",triggerOnMaskChange:"triggerOnMaskChange"},outputs:{maskFilled:"maskFilled"},exportAs:["mask","ngxMask"],features:[n._Bn([{provide:r.JU,useExisting:(0,n.Gpc)(()=>e),multi:!0},{provide:r.Cf,useExisting:(0,n.Gpc)(()=>e),multi:!0},d]),n.TTD]}),e})();function k(e,t){return t instanceof Function?{...e,...t()}:{...e,...t}}let _=(()=>{class e{static forRoot(t){return{ngModule:e,providers:[{provide:h,useValue:t},{provide:c,useValue:m},{provide:l,useFactory:k,deps:[c,h]},f]}}static forChild(){return{ngModule:e}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({}),e})();const x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function v(e,t){1&e&&(n.TgZ(0,"small",12),n._uU(1," o campo precisa ter no m\xednimo 4 caracteres "),n.qZA())}function S(e,t){1&e&&(n.TgZ(0,"small",12),n._uU(1," o campo precisa ser preenchido "),n.qZA())}function C(e,t){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,v,2,0,"small",11),n.YNc(2,S,2,0,"small",11),n.qZA()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.formContato.controls.nome.hasError("minlength")),n.xp6(1),n.Q6J("ngIf",e.formContato.controls.nome.hasError("required"))}}function E(e,t){1&e&&(n.TgZ(0,"small",12),n._uU(1," o campo precisa ter no m\xednimo 10 caracteres "),n.qZA())}function y(e,t){1&e&&(n.TgZ(0,"small",12),n._uU(1," o campo precisa ser preenchido "),n.qZA())}function M(e,t){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,E,2,0,"small",11),n.YNc(2,y,2,0,"small",11),n.qZA()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.formContato.controls.assunto.hasError("minlength")),n.xp6(1),n.Q6J("ngIf",e.formContato.controls.assunto.hasError("required"))}}function w(e,t){1&e&&(n.TgZ(0,"small",12),n._uU(1," o campo precisa ter no m\xednimo 11 caracteres "),n.qZA())}function b(e,t){1&e&&(n.TgZ(0,"small",12),n._uU(1," o campo precisa ser preenchido "),n.qZA())}function V(e,t){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,w,2,0,"small",11),n.YNc(2,b,2,0,"small",11),n.qZA()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.formContato.controls.telefone.hasError("minlength")),n.xp6(1),n.Q6J("ngIf",e.formContato.controls.telefone.hasError("required"))}}function N(e,t){1&e&&(n.TgZ(0,"small",12),n._uU(1," voc\xea precisa informar um e-mail "),n.qZA())}function A(e,t){1&e&&(n.TgZ(0,"small",12),n._uU(1," o campo precisa ser preenchido "),n.qZA())}function I(e,t){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,N,2,0,"small",11),n.YNc(2,A,2,0,"small",11),n.qZA()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.formContato.controls.email.hasError("email")),n.xp6(1),n.Q6J("ngIf",e.formContato.controls.email.hasError("required"))}}function T(e,t){1&e&&(n.TgZ(0,"small",12),n._uU(1," o campo precisa ter no m\xednimo 20 caracteres "),n.qZA())}function P(e,t){1&e&&(n.TgZ(0,"small",12),n._uU(1," o campo precisa ser preenchido "),n.qZA())}function Z(e,t){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,T,2,0,"small",11),n.YNc(2,P,2,0,"small",11),n.qZA()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.formContato.controls.mensagem.hasError("minlength")),n.xp6(1),n.Q6J("ngIf",e.formContato.controls.mensagem.hasError("required"))}}x.KeyboardEvent||(x.KeyboardEvent=function(e,t){});const O=[{path:"",component:(()=>{class e{constructor(e){this.fb=e,this.formContato=this.fb.group({nome:["",[r.kI.minLength(5),r.kI.required]],assunto:["",[r.kI.minLength(10),r.kI.required]],telefone:["",[r.kI.minLength(11),r.kI.required]],email:["",[r.kI.email,r.kI.required]],mensagem:["",[r.kI.minLength(20),r.kI.required]]})}ngOnInit(){}enviarForm(){alert("Formul\xe1rio enviado"),this.formContato.reset()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r.qu))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-contato"]],decls:21,vars:27,consts:[[1,"contact__title"],[1,"contact__container"],["action","",1,"contact-form",3,"formGroup"],["type","text","placeholder","Digite seu nome","formControlName","nome"],[4,"ngIf"],["type","text","placeholder","Digite o assunto","formControlName","assunto"],["type","tel","placeholder","(00) 0000-0000","formControlName","telefone","mask","(00) 0 0000-0000"],["type","email","placeholder","Digite seu e-mail","formControlName","email"],["maxlength","300","placeholder","Digite sua mensagem...","rows","4","formControlName","mensagem"],[3,"disabled","click"],["src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14230.300361031366!2d-49.0703074!3d-26.9169772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df18c3b4a71d65%3A0xa5ec9dd8406a6a7!2sProWay!5e0!3m2!1sen!2sbr!4v1679959842368!5m2!1sen!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(n.TgZ(0,"h2",0),n._uU(1,"Entre em contato"),n.qZA(),n.TgZ(2,"section",1),n.TgZ(3,"form",2),n._UZ(4,"input",3),n.YNc(5,C,3,2,"div",4),n._UZ(6,"input",5),n.YNc(7,M,3,2,"div",4),n._UZ(8,"input",6),n.YNc(9,V,3,2,"div",4),n._UZ(10,"input",7),n.YNc(11,I,3,2,"div",4),n.TgZ(12,"textarea",8),n._uU(13,"\n      "),n.qZA(),n.YNc(14,Z,3,2,"div",4),n.TgZ(15,"button",9),n.NdJ("click",function(){return t.enviarForm()}),n._uU(16,"Enviar"),n.qZA(),n.qZA(),n.TgZ(17,"address"),n._UZ(18,"iframe",10),n.TgZ(19,"p"),n._uU(20,"Tarum\xe3 Office - Rua 7 de Setembro, 1600 - 14\xba andar - Centro 89.010-204 - Blumenau / SC"),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(3),n.Q6J("formGroup",t.formContato),n.xp6(1),n.ekj("valid",t.formContato.controls.nome.valid)("invalid",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),n.xp6(1),n.Q6J("ngIf",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),n.xp6(1),n.ekj("valid",t.formContato.controls.assunto.valid)("invalid",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.assunto.dirty)),n.xp6(1),n.Q6J("ngIf",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.assunto.dirty)),n.xp6(1),n.ekj("valid",t.formContato.controls.telefone.valid)("invalid",t.formContato.controls.telefone.invalid&&(t.formContato.controls.telefone.touched||t.formContato.controls.telefone.dirty)),n.xp6(1),n.Q6J("ngIf",t.formContato.controls.telefone.invalid&&(t.formContato.controls.telefone.touched||t.formContato.controls.telefone.dirty)),n.xp6(1),n.ekj("valid",t.formContato.controls.email.valid)("invalid",t.formContato.controls.email.invalid&&(t.formContato.controls.email.touched||t.formContato.controls.email.dirty)),n.xp6(1),n.Q6J("ngIf",t.formContato.controls.email.invalid&&(t.formContato.controls.email.touched||t.formContato.controls.email.dirty)),n.xp6(1),n.ekj("valid",t.formContato.controls.mensagem.valid)("invalid",t.formContato.controls.mensagem.invalid&&(t.formContato.controls.mensagem.touched||t.formContato.controls.mensagem.dirty)),n.xp6(2),n.Q6J("ngIf",t.formContato.controls.mensagem.invalid&&(t.formContato.controls.mensagem.touched||t.formContato.controls.mensagem.dirty)),n.xp6(1),n.Q6J("disabled",t.formContato.invalid))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,i.O5,g,r.nD],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;grid-row-gap:20px;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;grid-column-gap:20px;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]}),e})()}];let $=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[a.Bz.forChild(O)],a.Bz]}),e})(),H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[i.ez,$,r.UX,_.forRoot()]]}),e})()}}]);