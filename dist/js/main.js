function buildUrl(){var qs="?debug=true";with(location)var url=href+qs;return url}function displayInfo(o){var e="";"string"==typeof o.name&&(e+="name:"+o.name+"\n"),"number"==typeof o.age&&(e+="age"+o.age+"\n"),console.log(e)}function compareF(o,e){return o-e}var result=Number.Max_VALUE+Number.Min_VALUE;console.log(result),console.log(isFinite(result));var aaa={type:"fayuan",data:"beijing",key:"hello"};console.log(aaa.type);for(i in aaa)console.log(aaa[i]);console.log(location.href);var result=buildUrl(),person={name:"liutingting"},people=[{name:"liutingting"}],morePeople=[people];console.log(morePeople),console.log(morePeople.indexOf(people)),displayInfo(person);var color=["red","blue"];console.log(color),color[color.length]="black",color[color.length]="yellow",console.log(color),color.shift(),color.unshift("hello");var people1={},people2={},people=[people1,people2];console.log(people),console.log(people.toString()),console.log(people.toLocaleString());var vaules=[0,1,5,4,20,25];console.log(vaules.sort(compareF)),console.log(vaules.every(function(o,e,l){return o>2})),console.log(vaules.filter(function(o,e,l){return o>2})),console.log(vaules.map(function(o,e,l){return 2*o})),console.log(vaules.some(function(o,e,l){return o>2})),console.log(vaules.some(function(o,e,l){return o>2})),console.log(vaules.some(function(o,e,l){return o>2}));