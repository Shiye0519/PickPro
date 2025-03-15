import{_ as $,W as D,u as F,k as N,r as n,g as S,i as V,o as r,c as i,a as s,h as m,w as v,n as y,t as l,f as b,F as k,e as j,S as B,d as E}from"./index-X1oN8EGq.js";const P={class:"feature-sidebar"},z={class:"sidebar-menu"},H={class:"history-section"},I={class:"history-list"},M={key:0,class:"empty-history"},q={key:1,class:"empty-history error"},A={class:"sidebar-text"},G={key:2,class:"empty-history"},W=["onClick"],J={class:"sidebar-text history-title"},K={class:"dialog-content"},O={class:"dialog-header"},Q={class:"dialog-body"},U={class:"record-timestamp"},X={class:"record-params"},Y={class:"param-item"},Z={class:"param-value"},ss={class:"param-item"},es={class:"param-value"},as={class:"param-item"},ts={class:"param-value"},os={class:"record-result"},ls={class:"result-content"},rs={__name:"FeatureSidebar",setup(is){const w=D(),x=F(),d=N(()=>w.path),c=n([]),_=n(!1),u=n(null),g=n(!1),o=n({}),L=async()=>{_.value=!0,u.value=null;try{const t=await fetch("http://localhost:3000/api/user-records",{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok){const a=await t.json();throw console.error("API错误详情:",a),new Error(`获取历史记录失败: ${t.status} ${t.statusText}`)}const e=await t.json();console.log("获取到的历史记录数据:",e),c.value=e.records.map(a=>({id:a.id,title:`${f(a.usage_time)} - ${a.category_level1||""}${a.category_level2?"/"+a.category_level2:""}`,params:{categoryL1:a.category_level1,categoryL2:a.category_level2,priceRange:a.price_range},result:a.trend_report||a.market_overview||a.popular_features||a.selection_plan||"暂无分析结果",timestamp:f(a.usage_time)}))}catch(t){console.error("获取历史记录出错:",t),u.value=t.message,c.value=[{id:1,title:"女装T恤分析",params:{categoryL1:"女装",categoryL2:"T恤",priceRange:"50-100"},result:"女装T恤市场分析报告：根据最新数据分析，女装T恤市场在50-100元价格区间呈现稳定增长趋势。消费者更偏好简约风格与亮色系，尤其是蓝色和粉色系列。建议增加这一价格带的简约风格T恤库存，并关注亮色系产品的推广。",timestamp:"2023-06-15 14:30"},{id:2,title:"男装牛仔裤分析",params:{categoryL1:"男装",categoryL2:"牛仔裤",priceRange:"100-200"},result:"男装牛仔裤市场分析报告：100-200元价格区间的男装牛仔裤市场竞争激烈，但仍有增长空间。直筒和微锥形剪裁最受欢迎，深蓝色和黑色是主流颜色。建议关注耐穿性和舒适度作为主要卖点，同时可以考虑加入少量弹性面料的产品以提升舒适度。",timestamp:"2023-06-14 10:15"}],console.log("使用示例数据代替")}finally{_.value=!1}},f=t=>t?new Date(t).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"未知时间";S(()=>{L()});const C=t=>{o.value=t,g.value=!0},p=()=>{g.value=!1},R=()=>{let t="/feature/trend";o.value.params.categoryL1==="男装"?t="/feature/market":o.value.params.categoryL2==="连衣裙"?t="/feature/decode":o.value.params.priceRange==="50-100"&&(t="/feature/workshop"),x.push({path:t,query:{...o.value.params}}),p()};return(t,e)=>{const a=V("router-link");return r(),i(k,null,[s("div",P,[e[8]||(e[8]=s("div",{class:"sidebar-header"},[s("h3",null,"功能导航")],-1)),s("div",z,[m(a,{to:"/feature/trend",class:y(["sidebar-item",{active:d.value==="/feature/trend"}])},{default:v(()=>e[0]||(e[0]=[s("span",{class:"sidebar-icon"},"📈",-1),s("span",{class:"sidebar-text"},"品类趋势先知",-1)])),_:1},8,["class"]),m(a,{to:"/feature/market",class:y(["sidebar-item",{active:d.value==="/feature/market"}])},{default:v(()=>e[1]||(e[1]=[s("span",{class:"sidebar-icon"},"🔍",-1),s("span",{class:"sidebar-text"},"市场脉搏鸟瞰",-1)])),_:1},8,["class"]),m(a,{to:"/feature/decode",class:y(["sidebar-item",{active:d.value==="/feature/decode"}])},{default:v(()=>e[2]||(e[2]=[s("span",{class:"sidebar-icon"},"🧩",-1),s("span",{class:"sidebar-text"},"爆品风尚解码",-1)])),_:1},8,["class"]),m(a,{to:"/feature/workshop",class:y(["sidebar-item",{active:d.value==="/feature/workshop"}])},{default:v(()=>e[3]||(e[3]=[s("span",{class:"sidebar-icon"},"⚙️",-1),s("span",{class:"sidebar-text"},"爆品基因工坊",-1)])),_:1},8,["class"]),s("div",H,[e[7]||(e[7]=s("div",{class:"history-header"},[s("span",{class:"sidebar-icon"},"📜"),s("span",{class:"sidebar-text"},"历史记录")],-1)),s("div",I,[_.value?(r(),i("div",M,e[4]||(e[4]=[s("span",{class:"sidebar-text"},"加载中...",-1)]))):u.value?(r(),i("div",q,[s("span",A,l(u.value),1)])):c.value.length===0?(r(),i("div",G,e[5]||(e[5]=[s("span",{class:"sidebar-text"},"暂无记录",-1)]))):b("",!0),(r(!0),i(k,null,j(c.value,(h,T)=>(r(),i("div",{key:T,class:"history-item",onClick:ns=>C(h)},[e[6]||(e[6]=s("span",{class:"history-icon"},[s("i",{class:"fas fa-history"})],-1)),s("span",J,l(h.title),1)],8,W))),128))])])])]),g.value?(r(),i("div",{key:0,class:"history-dialog",onClick:B(p,["self"])},[s("div",K,[s("div",O,[s("h3",null,l(o.value.title),1),s("span",{class:"dialog-close",onClick:p},"×")]),s("div",Q,[s("div",U,[e[9]||(e[9]=s("i",{class:"fas fa-clock"},null,-1)),E(" "+l(o.value.timestamp),1)]),s("div",X,[e[13]||(e[13]=s("h4",null,"查询参数",-1)),s("div",Y,[e[10]||(e[10]=s("span",{class:"param-label"},"一级类目:",-1)),s("span",Z,l(o.value.params.categoryL1),1)]),s("div",ss,[e[11]||(e[11]=s("span",{class:"param-label"},"二级类目:",-1)),s("span",es,l(o.value.params.categoryL2),1)]),s("div",as,[e[12]||(e[12]=s("span",{class:"param-label"},"价格范围:",-1)),s("span",ts,l(o.value.params.priceRange),1)])]),s("div",os,[e[14]||(e[14]=s("h4",null,"分析结果",-1)),s("div",ls,l(o.value.result),1)])]),s("div",{class:"dialog-footer"},[s("button",{class:"dialog-btn",onClick:p},"关闭"),s("button",{class:"dialog-btn primary",onClick:R},"重新应用参数")])])])):b("",!0)],64)}}},cs=$(rs,[["__scopeId","data-v-79dde7bd"]]);export{cs as F};
