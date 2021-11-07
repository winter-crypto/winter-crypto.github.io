"use strict";(self.webpackChunkuse_winter_final=self.webpackChunkuse_winter_final||[]).push([[768],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6446:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c=["components"],s={sidebar_position:1},i="Account",u={unversionedId:"APIs/Account",id:"APIs/Account",isDocsHomePage:!1,title:"Account",description:"The account API, given an end user's accountId, will give you a holistic view of the account status, funds, and any actions that must be taken on an Account (e.g. Upload KYC docs)",source:"@site/docs/APIs/Account.md",sourceDirName:"APIs",slug:"/APIs/Account",permalink:"/docs/APIs/Account",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/APIs/Account.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Crypto trading only",permalink:"/docs/End-user-journeys/only-crypto"},next:{title:"KYC Documents",permalink:"/docs/APIs/KYC-Documents"}},l=[{value:"API details",id:"api-details",children:[]},{value:"Success Response",id:"success-response",children:[]},{value:"Error Response",id:"error-response",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"account"},"Account"),(0,a.kt)("p",null,"The account API, given an end user's accountId, will give you a holistic view of the account status, funds, and any actions that must be taken on an Account (e.g. Upload KYC docs)"),(0,a.kt)("p",null,"Note, only accountId's that are created under your organization will be accessible."),(0,a.kt)("h3",{id:"api-details"},"API details"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/account/<accountId>")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Auth required")," : Yes (API key and secret are required)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Permissions required")," : None"),(0,a.kt)("h3",{id:"success-response"},"Success Response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,"Sample response return:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "accountId": "12345",\n  "email": "testuser@gmail.com",\n  "full_name": "Michael Winter",\n  "full_address": "123 Main St, Chicago, IL 90874",\n  "create_datetime": 1636311123,\n  "currency": "USD",\n  "account_trade_status": "LIVE",\n  "account_blocked": false,\n  "account_cash_funds": 2532.12,\n  "account_portfolio_value": 6534.12,\n  "account_kyc_status": "CANNOT_WITHDRAW_KYC_REQUIRED"\n}\n')),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"accountId")," - String. The accountId of the returned account"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"email")," - String. The email of the returned account"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"full_name")," - String. The full name of the owner of the returned account"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"full_address")," - String. The full address of the returned account"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"create_datetime")," - Int. The epoch datetime when the account was created. GMT timezone"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"currency")," - String. The currency of the cash account"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"account_trade_status")," - Enum that denotes the status of the account. Possible responses: ",(0,a.kt)("inlineCode",{parentName:"p"},"LIVE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BLOCKED"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UNDER_REVIEW")),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"account_blocked")," - Boolean that represents if the account is blocked or not. ",(0,a.kt)("inlineCode",{parentName:"p"},"TRUE")," if account is blocked and not able to trade or withdraw, ",(0,a.kt)("inlineCode",{parentName:"p"},"FALSE")," if account is not blocked"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"account_cash_funds")," - Double. The amount of cash funds of the account"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"account_portfolio_value")," - Double. The value of the total portfolio, including crypto and cash positions, returned in USD."),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"account_kyc_status")," - Enum that represents the status of KYC (and any implications with withdrawal status). Depends on KYC status. Possible responses: ",(0,a.kt)("inlineCode",{parentName:"p"},"READY_TO_WITHDRAW"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CANNOT_WITHDRAW_KYC_REQUIRED"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CANNOT_WITHDRAW_KYC_FAILED"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UNDER_REVIEW"),". If response is ",(0,a.kt)("inlineCode",{parentName:"p"},"CANNOT_WITHDRAW_KYC_REQUIRED"),", that means user has not completed KYC yet."),(0,a.kt)("h3",{id:"error-response"},"Error Response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"400 BAD REQUEST")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Condition")," : If accountId is invalid or if organization does not have access to this account(for security reasons)."))}d.isMDXComponent=!0}}]);