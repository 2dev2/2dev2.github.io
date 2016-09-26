!function(){"use strict";angular.module("frontend",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","toastr","timer"])}(),function(){"use strict";function e(e,t,i,o,n){var a=this;a.items=o.section,a.positionDropDown={availableOptions:[{id:"0",name:"above",alias:"Above"},{id:"1",name:"down",alias:"Down"}]},a.positionDropDown.selectedOption=a.positionDropDown.availableOptions[0],a.animationsEnabled=!0,a.open=function(o){var n=t.open({animation:a.animationsEnabled,ariaLabelledBy:"modal-title",ariaDescribedBy:"modal-body",templateUrl:"app/components/section/sectionMove/sectionMove.html",controller:"ModalInstanceCtrlMove",controllerAs:"$ctrlMove",size:o,resolve:{items:function(){return a.items},order:function(){return a.positionDropDown},selectedItem:function(){var e={};return e.sectionType=1,e.items=a.items,e.order=a.items.position,e.section=a.items.relativeSection,e.sectionName=a.items.sectionName,e}}});n.result.then(function(e){},function(){e.info("Modal dismissed at: "+new Date)}),n.closed.then(function(e){i.go("profile",null,{reload:!0})},function(){i.go("profile",null,{reload:!0}),e.info("Modal dismissed at: "+new Date)})},a.open()}angular.module("frontend").controller("sectionMoveController",e),e.$inject=["$log","$uibModal","$state","$stateParams","SectionListService"]}(),function(){"use strict";function e(e,t,i,o,n){var a=this;a.items=t,a.orderDropDown={availableSections:[]};var s=JSON.parse(JSON.stringify(n.getavailableOrderPosition()));for(var l in s)s.hasOwnProperty(l)&&a.orderDropDown.availableSections.push(s[l]);a.SectionListDropDown={availableSections:[]};var r=JSON.parse(JSON.stringify(n.getAvailableRelativeSection()));for(var l in r)r.hasOwnProperty(l)&&a.SectionListDropDown.availableSections.push(r[l]);a.selectedItem=i,a.ok=function(){var t=n.getavailableOrderPosition();console.log(t),a.selectedItem.order=n.getavailableOrderPosition()[a.selectedItem.order.name],a.selectedItem.section=n.getAvailableRelativeSection()[a.selectedItem.section.name],"Above"==a.selectedItem.items.position.alias?a.selectedItem.items.position=n.getavailableOrderPosition().above:a.selectedItem.items.position=n.getavailableOrderPosition().down,e.close(a.selectedItem.items),o.editSection(angular.copy(a.selectedItem))},a.cancel=function(){e.dismiss("cancel")}}angular.module("frontend").controller("ModalInstanceCtrlMove",e),e.$inject=["$uibModalInstance","items","selectedItem","SectionMoveService","SectionListService"]}(),function(){"use strict";function e(e,t,i,o,n){var a=this;a.items=o.section,a.positionDropDown={availableOptions:[{id:"0",name:"above",alias:"Above"},{id:"1",name:"down",alias:"Down"}]},a.positionDropDown.selectedOption=a.positionDropDown.availableOptions[0],a.animationsEnabled=!0,a.open=function(o){var n=t.open({animation:a.animationsEnabled,ariaLabelledBy:"modal-title",ariaDescribedBy:"modal-body",templateUrl:"app/components/section/sectionEdit/sectionEdit.html",controller:"ModalInstanceCtrlEdit",controllerAs:"$ctrlEdit",size:o,resolve:{items:function(){return a.items},order:function(){return a.positionDropDown},selectedItem:function(){var e={};return e.sectionType=1,e.items=a.items,e.order=a.items.position,e.section=a.items.relativeSection,e.sectionName=a.items.sectionName,e}}});n.result.then(function(e){},function(){e.info("Modal dismissed at: "+new Date)}),n.closed.then(function(e){i.go("profile",null,{reload:!0})},function(){i.go("profile",null,{reload:!0}),e.info("Modal dismissed at: "+new Date)})},a.open()}angular.module("frontend").controller("sectionEditController",e),e.$inject=["$log","$uibModal","$state","$stateParams","SectionListService"]}(),function(){"use strict";function e(e,t,i,o,n){var a=this;a.items=t,a.orderDropDown={availableSections:[]};var s=JSON.parse(JSON.stringify(n.getavailableOrderPosition()));for(var l in s)s.hasOwnProperty(l)&&a.orderDropDown.availableSections.push(s[l]);a.SectionListDropDown={availableSections:[]};var r=JSON.parse(JSON.stringify(n.getAvailableRelativeSection()));for(var l in r)r.hasOwnProperty(l)&&a.SectionListDropDown.availableSections.push(r[l]);a.selectedItem=i,a.ok=function(){var t=n.getavailableOrderPosition();console.log(t),a.selectedItem.order=n.getavailableOrderPosition()[a.selectedItem.order.name],a.selectedItem.section=n.getAvailableRelativeSection()[a.selectedItem.section.name],"Above"==a.selectedItem.items.position.alias?a.selectedItem.items.position=n.getavailableOrderPosition().above:a.selectedItem.items.position=n.getavailableOrderPosition().down,e.close(a.selectedItem.items),o.editSection(angular.copy(a.selectedItem))},a.cancel=function(){e.dismiss("cancel")}}angular.module("frontend").controller("ModalInstanceCtrlEdit",e),e.$inject=["$uibModalInstance","items","selectedItem","SectionEditService","SectionListService"]}(),function(){"use strict";function e(e,t,i,o,n){var a=this;a.items=o.section,a.positionDropDown={availableOptions:[{id:"0",name:"above",alias:"Above"},{id:"1",name:"down",alias:"Down"}]},a.positionDropDown.selectedOption=a.positionDropDown.availableOptions[0],a.animationsEnabled=!0,a.open=function(o){var n=t.open({animation:a.animationsEnabled,ariaLabelledBy:"modal-title",ariaDescribedBy:"modal-body",templateUrl:"app/components/section/sectionDelete/sectionDelete.html",controller:"ModalInstanceCtrlDelete",controllerAs:"$ctrlDelete",size:o,resolve:{items:function(){return a.items},order:function(){return a.positionDropDown},selectedItem:function(){var e={};return e.sectionType=1,e.items=a.items,e.order=a.items.position,e.section=a.items.relativeSection,e.sectionName=a.items.sectionName,e}}});n.result.then(function(e){i.go("profile",null,{reload:!0})},function(){i.go("profile",null,{reload:!0}),e.info("Modal dismissed at: "+new Date)}),n.closed.then(function(e){i.go("profile",null,{reload:!0})},function(){i.go("profile",null,{reload:!0}),e.info("Modal dismissed at: "+new Date)})},a.open()}angular.module("frontend").controller("sectionDeleteController",e),e.$inject=["$log","$uibModal","$state","$stateParams","SectionListService"]}(),function(){"use strict";function e(e,t,i,o,n){var a=this;a.items=t,a.orderDropDown={availableSections:[]};var s=JSON.parse(JSON.stringify(n.getavailableOrderPosition()));for(var l in s)s.hasOwnProperty(l)&&a.orderDropDown.availableSections.push(s[l]);a.SectionListDropDown={availableSections:[]};var r=JSON.parse(JSON.stringify(n.getAvailableRelativeSection()));for(var l in r)r.hasOwnProperty(l)&&a.SectionListDropDown.availableSections.push(r[l]);a.selectedItem=i,a.ok=function(){var t=n.getavailableOrderPosition();console.log(t),a.selectedItem.order=n.getavailableOrderPosition()[a.selectedItem.order.name],a.selectedItem.section=n.getAvailableRelativeSection()[a.selectedItem.section.name],"Above"==a.selectedItem.items.position.alias?a.selectedItem.items.position=n.getavailableOrderPosition().above:a.selectedItem.items.position=n.getavailableOrderPosition().down,e.close(a.selectedItem.items),o.editSection(angular.copy(a.selectedItem))},a.cancel=function(){e.dismiss("cancel")}}angular.module("frontend").controller("ModalInstanceCtrlDelete",e),e.$inject=["$uibModalInstance","items","selectedItem","SectionDeleteService","SectionListService"]}(),function(){"use strict";function e(e,t,i,o,n){var a=this;a.items=n.getSectionList(),a.animationsEnabled=!0,a.open=function(e){var n=i.open({animation:a.animationsEnabled,ariaLabelledBy:"modal-title",ariaDescribedBy:"modal-body",templateUrl:"app/components/section/sectionAdd/sectionAdd.html",controller:"ModalInstanceCtrl",controllerAs:"$ctrl",size:e,resolve:{items:function(){return a.items}}});n.result.then(function(e){},function(){t.info("Modal dismissed at: "+new Date)}),n.closed.then(function(e){o.go("profile",null,{reload:!0})},function(){o.go("profile",null,{reload:!0}),t.info("Modal dismissed at: "+new Date)})},a.open()}angular.module("frontend").controller("sectionAddController",e),e.$inject=["$scope","$log","$uibModal","$state","SectionListService"]}(),function(){"use strict";function e(e,t,i,o){var n=this;n.items=t,n.orderDropDown={availableSections:[]};var a=JSON.parse(JSON.stringify(o.getavailableOrderPosition()));for(var s in a)a.hasOwnProperty(s)&&n.orderDropDown.availableSections.push(a[s]);n.SectionListDropDown={availableSections:[]};var l=JSON.parse(JSON.stringify(o.getAvailableRelativeSection()));for(var s in l)l.hasOwnProperty(s)&&n.SectionListDropDown.availableSections.push(l[s]);n.selectedItem={sectionType:1,items:n.items[0],order:n.orderDropDown.availableSections[0],section:n.SectionListDropDown.availableSections[0],sectionName:""},n.ok=function(){var t=o.getavailableOrderPosition();console.log(t),n.selectedItem.order=o.getavailableOrderPosition()[n.selectedItem.order.name],n.selectedItem.section=o.getAvailableRelativeSection()[n.selectedItem.section.name],e.close(n.selectedItem.items),i.setNewSection(angular.copy(n.selectedItem))},n.cancel=function(){e.dismiss("cancel")}}angular.module("frontend").controller("ModalInstanceCtrl",e),e.$inject=["$uibModalInstance","items","SectionAddService","SectionListService"]}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("frontend").service("webDevTec",e)}(),function(){"use strict";function e(){}angular.module("frontend").controller("SignupController",e),e.$inject=[]}(),function(){"use strict";function e(){function e(e,t){var i=this;i.options=t.getSidebarOptions()}e.$inject=["$log","sidebarOptionsService"];var t={restrict:"E",templateUrl:"app/components/sideBar/sidebar.html",scope:{},bindToController:{whichMenuSelectedFromSidebar:"&"},controller:e,controllerAs:"sidebarCtrl"};return t}angular.module("frontend").directive("acmeSidebar",e),e.$inject=["sidebarOptionsService"]}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",templateUrl:"app/components/section/section.html",scope:{},controller:e,controllerAs:"sectionCtrl",bindToController:{sectionData:"="}};return t}angular.module("frontend").directive("section",e),e.$inject=["$log"]}(),function(){"use strict";function e(e,t,i,o,n,a){var s=this;s.sectionList=a.getSectionList(),s.sectionAdd=function(){e.$$phase||e.$apply(),o.go("sectionAdd")}}angular.module("frontend").controller("ProfileController",e),e.$inject=["$scope","$log","$uibModal","$state","_sectionList","SectionListService"]}(),function(){"use strict";function e(){function e(e,t){var i=this;i.relativeDate=e(i.creationDate).fromNow(),i.isActive=function(e){return e==t.path()}}e.$inject=["moment","$location"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("frontend").directive("acmeNavbar",e)}(),function(){"use strict";function e(e,t){function i(i){function n(e){return e.data}function a(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return i||(i=30),t.get(o+"/contributors?per_page="+i).then(n)["catch"](a)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",n={apiHost:o,getContributors:i};return n}e.$inject=["$log","$http"],angular.module("frontend").factory("githubContributor",e)}(),function(){"use strict";function e(){function e(){return t}var t=[{id:1,name:"view",type:[{id:4,name:"profile"},{id:4,name:"signup"}]},{id:1,name:" default",type:[]},{id:1,name:"properties",type:[]}];this.getSidebarOptions=e}angular.module("frontend").service("sidebarOptionsService",e)}(),function(){"use strict";function e(e,t,o){function n(e){var i=e.items.sectionName,n=JSON.parse(JSON.stringify(e.items));n.position=e.order,n.relativeSection=e.section,n.sectionName=e.sectionName,a(n,i);var r=t.getSectionList(),c=l(n,r),d=s(c,r);console.log(d,n);var p=o.findIndexOFNewSection(n,d);d=t.addInList(d,n,p),console.log(d),t.setSectionList(d)}function a(e,i){var o=e.sectionName,n=t.getAvailableRelativeSection();n.hasOwnProperty(i)&&delete n[i];var a={};a.id=0,a.name=o,a.alias=o,n[o]=a}function s(e,o){var n=t.getavailableOrderPosition(),a=t.getAvailableRelativeSection();switch(e){case 0:"down"==o[1].position.name&&(o[1].position=n.above,2==o.length?o[1].relativeSection=a[o[0].sectionName]:o[1].relativeSection=a[o[2].sectionName]);break;case o.length-1:var s=o.length-2;"above"==o[s].position.name&&(o[s].position=n.down,2==o.length?o[s].relativeSection=a[o[s+1].sectionName]:o[s].relativeSection=a[o[s-1].sectionName]);break;default:o.length>2&&"above"==o[i-1].position.name&&"down"==o[i+1].position.name?(o[i-1].relativeSection=a[o[i+1].sectionName],o[i+1].relativeSection=a[o[i-1].sectionName]):"above"==o[i-1].position.name?o[i-1].relativeSection=a[o[i+1].sectionName]:"down"==o[i+1].position.name&&(o[i+1].relativeSection=a[o[i-1].sectionName])}return o.splice(e,1),o}function l(e,t){var i=0;return t.forEach(function(t,o){e.sectionName==t.sectionName&&(i=o)}),i}this.editSection=n}angular.module("frontend").service("SectionMoveService",e),e.$inject=["$log","SectionListService","SectionAddService"]}(),function(){"use strict";function e(){function e(){return d}function t(e){d=JSON.parse(JSON.stringify(e))}function i(){return c}function o(){return r}function n(){d.sort(a),console.log(d)}function a(e,t){var i=-1;return e.sectionName==t.sectionName?i=-1:e.sectionName==t.relativeSection.alias&&(i="down"==e.position.name?1:-1),i}function s(e,t,i){var o;switch(t){case 0:e.position=r.above,e.relativeSection=c[i[0].sectionName];break;case i.length:e.position=r.down,e.relativeSection=c[i[i.length-1].sectionName];break;default:"down"==e.position.name?(o=t-1,"above"==i[o].position.name&&"down"==i[o+1].position.name?(i[o].relativeSection=c[e.sectionName],i[o+1].relativeSection=c[e.sectionName]):"above"==i[o].position.name?i[o].relativeSection=c[e.sectionName]:"down"==i[o+1].position.name&&(i[o+1].relativeSection=c[e.sectionName])):(o=t,"above"==i[o].position.name&&"down"==i[o-1].position.name?(i[o].relativeSection=c[e.sectionName],i[o-1].relativeSection=c[e.sectionName]):"above"==i[o].position.name?i[o].relativeSection=c[e.sectionName]:"down"==i[o-1].position.name&&(i[o-1].relativeSection=c[e.sectionName]))}return i}function l(e,t,i){var o=[];switch(i){case 0:e.unshift(t);break;case e.length:e.push(t);break;default:for(var n=0;i>n;n++)o.push(e[n]);for(o.push(t),n=i;n<e.length;n++)o.push(e[n]);e=o}return e}var r={above:{id:"0",name:"above",alias:"Above"},down:{id:"1",name:"down",alias:"Down"}},c={BIODATA:{id:"0",name:"BIODATA",alias:"BIODATA"},EDUCATION:{id:"0",name:"EDUCATION",alias:"EDUCATION"}},d=[{id:1,sectionName:"BIODATA",description:"HTML enhanced for web apps!",logo:"angular.png",position:{id:"0",name:"above",alias:"Above"},relativeSection:{id:"1",name:"EDUCATION",alias:"EDUCATION"},OrderIndex:2,headerSectionOpeartion:[{operation:"edit"},{operation:"delete"},{operation:"move"}],fieldOperation:["add-field","create field group"],field:[{field1:{id:4,name:"profile"}},{field2:{id:4,name:"signup"}}]},{id:2,sectionName:"EDUCATION",description:"HTML enhanced for web apps!",logo:"angular.png",position:{id:"1",name:"down",alias:"Down"},relativeSection:{id:"0",name:"BIODATA",alias:"BIODATA"},OrderIndex:1,headerSectionOpeartion:[{operation:"default"}],fieldOperation:["add-field","create field group"],field:[{field1:{id:5,name:"profile"}},{field2:{id:6,name:"signup"}}]}];window.sectionList=d,this.getAvailableRelativeSection=i,this.getavailableOrderPosition=o,this.organizeList=s,this.getSectionList=e,this.addInList=l,this.arrayDataInOrder=n,this.setSectionList=t}angular.module("frontend").service("SectionListService",e),e.$inject=[]}(),function(){"use strict";function e(e,t,o){function n(e){var i=e.items.sectionName,n=JSON.parse(JSON.stringify(e.items));n.position=e.order,n.relativeSection=e.section,n.sectionName=e.sectionName,a(n,i);var r=t.getSectionList(),c=l(n,r),d=s(c,r);console.log(d,n);var p=o.findIndexOFNewSection(n,d);d=t.addInList(d,n,p),console.log(d),t.setSectionList(d)}function a(e,i){var o=e.sectionName,n=t.getAvailableRelativeSection();n.hasOwnProperty(i)&&delete n[i];var a={};a.id=0,a.name=o,a.alias=o,n[o]=a}function s(e,o){var n=t.getavailableOrderPosition(),a=t.getAvailableRelativeSection();switch(e){case 0:"down"==o[1].position.name&&(o[1].position=n.above,2==o.length?o[1].relativeSection=a[o[0].sectionName]:o[1].relativeSection=a[o[2].sectionName]);break;case o.length-1:var s=o.length-2;"above"==o[s].position.name&&(o[s].position=n.down,2==o.length?o[s].relativeSection=a[o[s+1].sectionName]:o[s].relativeSection=a[o[s-1].sectionName]);break;default:o.length>2&&"above"==o[i-1].position.name&&"down"==o[i+1].position.name?(o[i-1].relativeSection=a[o[i+1].sectionName],o[i+1].relativeSection=a[o[i-1].sectionName]):"above"==o[i-1].position.name?o[i-1].relativeSection=a[o[i+1].sectionName]:"down"==o[i+1].position.name&&(o[i+1].relativeSection=a[o[i-1].sectionName])}return o.splice(e,1),o}function l(e,t){var i=0;return t.forEach(function(t,o){e.sectionName==t.sectionName&&(i=o)}),i}this.editSection=n}angular.module("frontend").service("SectionEditService",e),e.$inject=["$log","SectionListService","SectionAddService"]}(),function(){"use strict";function e(e,t,o){function n(e){var i=e.items.sectionName,n=JSON.parse(JSON.stringify(e.items));n.position=e.order,n.relativeSection=e.section,n.sectionName=e.sectionName,a(n,i);var r=t.getSectionList(),c=l(n,r),d=s(c,r);console.log(d,n);o.findIndexOFNewSection(n,d);t.setSectionList(d)}function a(e,i){var o=(e.sectionName,t.getAvailableRelativeSection());o.hasOwnProperty(i)&&delete o[i]}function s(e,o){var n=t.getavailableOrderPosition(),a=t.getAvailableRelativeSection();switch(e){case 0:"down"==o[1].position.name&&(o[1].position=n.above,2==o.length?o[1].relativeSection=a[o[0].sectionName]:o[1].relativeSection=a[o[2].sectionName]);break;case o.length-1:var s=o.length-2;"above"==o[s].position.name&&(o[s].position=n.down,2==o.length?o[s].relativeSection=a[o[s+1].sectionName]:o[s].relativeSection=a[o[s-1].sectionName]);break;default:o.length>2&&"above"==o[i-1].position.name&&"down"==o[i+1].position.name?(o[i-1].relativeSection=a[o[i+1].sectionName],o[i+1].relativeSection=a[o[i-1].sectionName]):"above"==o[i-1].position.name?o[i-1].relativeSection=a[o[i+1].sectionName]:"down"==o[i+1].position.name&&(o[i+1].relativeSection=a[o[i-1].sectionName])}return o.splice(e,1),o}function l(e,t){var i=0;return t.forEach(function(t,o){e.sectionName==t.sectionName&&(i=o)}),i}this.editSection=n}angular.module("frontend").service("SectionDeleteService",e),e.$inject=["$log","SectionListService","SectionAddService"]}(),function(){"use strict";function e(e,t){function i(e){var i=JSON.parse(JSON.stringify(t.getSectionList())),s=a(e);n(s);var l=o(s,i),r=t.organizeList(s,l,i);r=t.addInList(r,s,l),t.setSectionList(r)}function o(e,t){var i=0;if(1==t.length)return i="above"==e.position.name?0:1;for(var o=0;o<t.length;o++)if(t[o].sectionName==e.relativeSection.alias&&t[o].sectionName!=t[o].relativeSection.alias)if("down"==e.position.name){if(o==t.length-1||t[o+1].sectionName!=e.relativeSection.alias){i=o+1;break}}else if(0==o||t[o-1].sectionName!=e.relativeSection.alias){i=o;break}return i}function n(e){var i=e.sectionName,o=t.getAvailableRelativeSection();if(!o.hasOwnProperty(i)){var n={};n.id=0,n.name=i,n.alias=i,o[i]=n}}function a(t){var i={};for(var o in l)if(l.hasOwnProperty(o))switch(o){case"id":i[o]=s++;break;case"sectionName":i[o]=t[o];break;case"position":i[o]=t.order;break;case"relativeSection":i[o]=t.section;break;default:"object"!=typeof l[o]?i[o]="":(i[o]=[],l[o].forEach(function(e){if("headerSectionOpeartion"==o){var t={};t.operation=e,i[o].push(t)}else i[o].push(e)}))}return e.debug(i),i}var s=3,l={id:"",sectionName:"",position:"",relativeSection:"",OrderIndex:"",headerSectionOpeartion:["edit","delete","move"],fieldOperation:[],field:[]};this.setNewSection=i,this.findIndexOFNewSection=o}angular.module("frontend").service("SectionAddService",e),e.$inject=["$log","SectionListService"]}(),function(){"use strict";function e(){function e(){}var t=this;t.data="main controller",t.whichMenuSelectedFromSidebar=e}angular.module("frontend").controller("MainController",e),e.$inject=[]}(),function(){"use strict";function e(e){e.debug("runBlock end")}angular.module("frontend").run(e),e.$inject=["$log"]}(),function(){"use strict";function e(e,t){e.state("app",{url:"/",template:"<ui-view/>","abstract":!0}).state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"mainCtrl"}).state("profile",{url:"profile",parent:"home",templateUrl:"app/components/profile/profile.html",controller:"ProfileController",controllerAs:"profileCtrl",resolve:{_sectionList:["SectionListService",function(e){return e.getSectionList()}]},params:{settings:{}}}).state("sectionAdd",{url:"/sectionAdd",parent:"profile",templateUrl:"app/components/section/sectionAdd/sectionAdd.html",controller:"sectionAddController",controllerAs:"sectionAddCtrl"}).state("sectionedit",{url:"/sectionEdit",parent:"profile",templateUrl:"app/components/section/sectionEdit/sectionEdit.html",controller:"sectionEditController",controllerAs:"sectionEditCtrl",params:{section:{}}}).state("sectiondelete",{url:"/sectionDelete",parent:"profile",templateUrl:"app/components/section/sectionDelete/sectionDelete.html",controller:"sectionDeleteController",controllerAs:"sectionDeleteCtrl",params:{section:{}}}).state("sectionmove",{url:"/sectionMove",parent:"profile",templateUrl:"app/components/section/sectionMove/sectionMove.html",controller:"sectionMoveController",controllerAs:"sectionMoveCtrl",params:{section:{}}}).state("signup",{url:"signup",parent:"home",templateUrl:"app/components/signup/signup.html",controller:"SignupController",controllerAs:"signupCtrl"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("frontend").config(e)}(),function(){"use strict";angular.module("frontend").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t,i){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig","$provide"],angular.module("frontend").config(e)}(),angular.module("frontend").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class=row><div class="col-sm-1 full_height_sidebar"><acme-sidebar which-menu-selected-from-sidebar=mainCtrl.whichMenuSelectedFromSidebar></acme-sidebar></div><div class="col-sm-offset-1 col-sm-11"><acme-navbar class=row creation-date=main.creationDate></acme-navbar><div ui-view id=mainContainer></div></div></div>'),e.put("app/components/login/login.html","<div>username<input type=text name=username><br>password<input type=text name=password></div>"),e.put("app/components/navbar/navbar.html",'<!--<nav class="navbar navbar-static-top navbar-inverse">--><!--<div id ="nevigation" class="row">--><div class=search-box><input value=Search type=text class=form-control> <i class="glyphicon glyphicon-search"></i></div><!--</div>--> <!--</nav>-->'),e.put("app/components/profile/popup.html",""),e.put("app/components/profile/profile.html",'<div><div class="profile_view header_color">ProfileView <button ui-sref=sectionAdd data-toggle=modal type=button class="btn btn-primary new_section_button">add new Section</button><!--<a class="btn" style="width:100%;" href="#test_modal" data-toggle="modal">Add Image</a>--><!--<h2 class="text-center">Angularjs-Popup</h2>--><!--<button ng-click="profileCtrl.open()" class="btn btn-warning">Simple Popup</button>--></div><div class=section-list ng-repeat="sectionData in profileCtrl.sectionList track by $index"><section section-data=sectionData></section></div><div ui-view></div></div>'),e.put("app/components/section/section.html",'<div class=section><!--<section-header></section-header>--><div class="section_header header_color"><span>{{sectionCtrl.sectionData.sectionName}}</span> <span ui-sref="{{\'section\'+headerOp.operation}}({section:sectionCtrl.sectionData})" class=section_op ng-repeat="headerOp in sectionCtrl.sectionData.headerSectionOpeartion"><!-- ({section:sectionCtrl.sectionData}) --> {{headerOp.operation}} </span><span class=field_op ng-repeat="headerFieldOp in sectionCtrl.sectionData.fieldOperation">{{headerFieldOp}}</span></div><!--<section-data></section-data>--><div class="section_data section_data_color"></div></div>'),e.put("app/components/sideBar/sidebar.html",'<div><div id=sidebarName>sidebar Name</div><div ng-repeat="option in sidebarCtrl.options">{{option.name}}<ul class="sidebar sidebar-side"><li class=active ng-repeat="subOption in option[\'type\']"><a ui-sref={{subOption.name}} ng-click=sidebarCtrl.whichMenuSelectedFromSidebar()(subOption.name)>{{subOption.name}}</a></li></ul></div></div>'),e.put("app/components/signup/signup.html","<h1>this page is for signup</h1>"),e.put("app/components/section/sectionAdd/popup.html",""),e.put("app/components/section/sectionAdd/sectionAdd.html",'<div class=modal-dialog><div class=modal-header><h3 class=modal-title id=modal-title>Add Section</h3></div><div class=modal-body id=modal-body><div class=row><div class=col-sm-4 ng-repeat="d in [{id:1,name:\'new\'},{id:2,name:\'default\'}] track by $index"><input id=\'{{"data-type-radio-btn-"+d.id}}\' type=radio name=data-type ng-value=d.id ng-model=$ctrl.selectedItem.sectionType><label class=RadioButtonLabel for=\'{{"data-type-radio-btn-"+d.id}}\' ng-bind=d.name></label></div></div><div class=row><div class="form-group col-sm-6"><label for=sectionName>sectionName:</label><input type=text class=form-control id=sectionName ng-model=$ctrl.selectedItem.sectionName></div></div><div class=row><span class=m_l>order position</span><div><select id=orderDropDown class="font-label btn col-sm-2 m_l" name=mySelect ng-model=$ctrl.selectedItem.order.name ng-options="option.name as option.alias for option in $ctrl.orderDropDown.availableSections"></select><select id=SectionListDropDown class="font-label btn col-sm-offset-1 col-sm-3" name=mySelect1 ng-model=$ctrl.selectedItem.section.name ng-options="option.name as option.alias for option in $ctrl.SectionListDropDown.availableSections"></select></div></div></div><div class=modal-footer><button class="btn btn-primary" type=button ng-click=$ctrl.ok()>OK</button> <button class="btn btn-warning" type=button ng-click=$ctrl.cancel()>Cancel</button></div></div>'),e.put("app/components/section/sectionDelete/popup.html",""),e.put("app/components/section/sectionDelete/sectionDelete.html",'<div class=modal-dialog><div class=modal-header><h3 class=modal-title id=modal-title>Delete Section</h3></div><div class=modal-body id=modal-body><div class=row><div class=col-sm-4 ng-repeat="d in [{id:1,name:\'new\'},{id:2,name:\'default\'}] track by $index"><input id=\'{{"data-type-radio-btn-"+d.id}}\' type=radio name=data-type ng-value=d.id ng-model=$ctrl.selectedItem.sectionType><label class=RadioButtonLabel for=\'{{"data-type-radio-btn-"+d.id}}\' ng-bind=d.name></label></div></div><div class=row><div class="form-group col-sm-6"><label for=sectionName>sectionName:</label><input readonly type=text class=form-control id=sectionName ng-model=$ctrlDelete.selectedItem.sectionName></div></div><div class=row><span class=m_l>order position</span><div><select disabled id=orderDropDown class="font-label btn col-sm-2 m_l" name=mySelect ng-model=$ctrlDelete.selectedItem.order.name ng-options="option.name as option.alias for option in $ctrlDelete.orderDropDown.availableSections"></select><select disabled id=SectionListDropDown class="font-label btn col-sm-offset-1 col-sm-3" name=mySelect1 ng-model=$ctrlDelete.selectedItem.section.name ng-options="option.name as option.alias for option in $ctrlDelete.SectionListDropDown.availableSections"></select></div></div></div><div class=modal-footer><button class="btn btn-primary" type=button ng-click=$ctrlDelete.ok()>OK</button> <button class="btn btn-warning" type=button ng-click=$ctrlDelete.cancel()>Cancel</button></div></div>'),e.put("app/components/section/sectionEdit/sectionEdit.html",'<div class=modal-dialog><div class=modal-header><h3 class=modal-title id=modal-title>Edit Section</h3></div><div class=modal-body id=modal-body><div class=row><div class=col-sm-4 ng-repeat="d in [{id:1,name:\'new\'},{id:2,name:\'default\'}] track by $index"><input id=\'{{"data-type-radio-btn-"+d.id}}\' type=radio name=data-type ng-value=d.id ng-model=$ctrl.selectedItem.sectionType><label class=RadioButtonLabel for=\'{{"data-type-radio-btn-"+d.id}}\' ng-bind=d.name></label></div></div><div class=row><div class="form-group col-sm-6"><label for=sectionName>sectionName:</label><input type=text class=form-control id=sectionName ng-model=$ctrlEdit.selectedItem.sectionName></div></div><div class=row><span class=m_l>order position</span><div><select id=orderDropDown class="font-label btn col-sm-2 m_l" name=mySelect ng-model=$ctrlEdit.selectedItem.order.name ng-options="option.name as option.alias for option in $ctrlEdit.orderDropDown.availableSections"></select><select id=SectionListDropDown class="font-label btn col-sm-offset-1 col-sm-3" name=mySelect1 ng-model=$ctrlEdit.selectedItem.section.name ng-options="option.name as option.alias for option in $ctrlEdit.SectionListDropDown.availableSections"></select></div></div></div><div class=modal-footer><button class="btn btn-primary" type=button ng-click=$ctrlEdit.ok()>OK</button> <button class="btn btn-warning" type=button ng-click=$ctrlEdit.cancel()>Cancel</button></div></div>'),e.put("app/components/section/sectionMove/sectionMove.html",'<div class=modal-dialog><div class=modal-header><h3 class=modal-title id=modal-title>move Section</h3></div><div class=modal-body id=modal-body><div class=row><div class=col-sm-4 ng-repeat="d in [{id:1,name:\'new\'},{id:2,name:\'default\'}] track by $index"><input id=\'{{"data-type-radio-btn-"+d.id}}\' type=radio name=data-type ng-value=d.id ng-model=$ctrl.selectedItem.sectionType><label class=RadioButtonLabel for=\'{{"data-type-radio-btn-"+d.id}}\' ng-bind=d.name></label></div></div><div class=row><div class="form-group col-sm-6"><label for=sectionName>sectionName:</label><input type=text class=form-control id=sectionName ng-model=$ctrlMove.selectedItem.sectionName readonly></div></div><div class=row><span class=m_l>order position</span><div><select id=orderDropDown class="font-label btn col-sm-2 m_l" name=mySelect ng-model=$ctrlMove.selectedItem.order.name ng-options="option.name as option.alias for option in $ctrlMove.orderDropDown.availableSections"></select><select id=SectionListDropDown class="font-label btn col-sm-offset-1 col-sm-3" name=mySelect1 ng-model=$ctrlMove.selectedItem.section.name ng-options="option.name as option.alias for option in $ctrlMove.SectionListDropDown.availableSections"></select></div></div></div><div class=modal-footer><button class="btn btn-primary" type=button ng-click=$ctrlMove.ok()>OK</button> <button class="btn btn-warning" type=button ng-click=$ctrlMove.cancel()>Cancel</button></div></div>');
}]);
//# sourceMappingURL=../maps/scripts/app-3afacce328.js.map
