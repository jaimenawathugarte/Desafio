(this.webpackJsonpdolar_desafio=this.webpackJsonpdolar_desafio||[]).push([[0],{131:function(e,a,t){"use strict";t.r(a);var n=t(3),l=t.n(n),i=t(15),r=t.n(i),o=(t(63),t(51)),c=t(52),s=t(13),u=t(57),d=t(56),m=(t(64),t(65),t(37)),h=t.n(m),f=(t(66),t(53)),b=(t(67),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={startDateInicial:new Date,startDateFinal:new Date,error:null,isLoaded:!1,dolar:{}},n.handleChangeInicial=n.handleChangeInicial.bind(Object(s.a)(n)),n.onFormSubmitInicial=n.onFormSubmitInicial.bind(Object(s.a)(n)),n.handleChangeFinal=n.handleChangeFinal.bind(Object(s.a)(n)),n.onFormSubmitFinal=n.onFormSubmitFinal.bind(Object(s.a)(n)),n}return Object(c.a)(t,[{key:"handleChangeFinal",value:function(e){this.setState({startDateFinal:e})}},{key:"onFormSubmitFinal",value:function(e,a){this.setState({startDateFinal:a}),e.preventDefault()}},{key:"handleChangeInicial",value:function(e){this.setState({startDateInicial:e})}},{key:"onFormSubmitInicial",value:function(e,a){var t=this;this.setState({startDateInicial:a,startDateFinal:a}),e.preventDefault(),console.log(this.state.dolar.Dolares);var n=e.target.startDateInicial.value,l=e.target.startDateFinal.value,i=n.substring(0,4),r=n.substring(5,7),o=n.substring(8,10),c=l.substring(0,4),s=l.substring(5,7),u=l.substring(8,10);fetch("https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/"+i+"/"+r+"/dias_i/"+o+"/"+c+"/"+s+"/dias_f/"+u+"?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=json").then((function(e){return e.json()})).then((function(e){t.setState({isLoaded:!0,dolar:e})}),(function(e){t.setState({isLoaded:!0,error:e})}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/2020/06/dias_i/01/2020/06/dias_f/02?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=json").then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,dolar:a})}),(function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"render",value:function(){return this.state.dolar.Dolares?l.a.createElement("div",{className:"App"},l.a.createElement(f.a,{data:this.state.dolar.Dolares}),l.a.createElement("header",{className:"App-header"},l.a.createElement("ul",null,l.a.createElement("li",null," Home "),l.a.createElement("li",null," Blog "),l.a.createElement("li",null," Diario Financiero "),l.a.createElement("li",null))),l.a.createElement("main",null,l.a.createElement("div",{className:"contenedor"},l.a.createElement("div",{className:"fechainicial"},l.a.createElement("form",{onSubmit:this.onFormSubmitInicial},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",null,l.a.createElement("h2",null," Fecha Inicial "),l.a.createElement(h.a,{selected:this.state.startDateInicial,onChange:this.handleChangeInicial,name:"startDateInicial",dateFormat:"yyyy-MM-dd"})),l.a.createElement("div",null,l.a.createElement("h2",null," Fecha Final "),l.a.createElement(h.a,{selected:this.state.startDateFinal,onChange:this.handleChangeFinal,name:"startDateFinal",dateFormat:"yyyy-MM-dd"}))),l.a.createElement("button",{className:"btn btn-primary"},"Mostrar Datos")))),l.a.createElement("div",{className:"valor_dolar"},l.a.createElement("span",null,"Fecha ",l.a.createElement("br",null),this.state.dolar.Dolares.map((function(e,a){return l.a.createElement("b",{key:a},e.Fecha)})),this.state.dolar.Dolares.map((function(e){return l.a.createElement("article",{key:e.Valor},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.content))}))),l.a.createElement("span",null,"Valor ",l.a.createElement("br",null),this.state.dolar.Dolares.map((function(e,a){return l.a.createElement("b",{key:a},e.Valor)}))))),l.a.createElement("footer",null)):l.a.createElement("span",null,"cargando...")}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,a,t){e.exports=t(131)},63:function(e,a,t){},64:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},65:function(e,a,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.6c345f96.chunk.js.map