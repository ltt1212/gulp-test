var result = Number.Max_VALUE + Number.Min_VALUE;
			console.log(result);
			console.log(isFinite(result));
			var aaa = {
				type:"fayuan",
				data:"beijing",
				key:"hello"
			};
			console.log(aaa.type);
			for (i in aaa){
				console.log(aaa[i]);
			};
			console.log(location.href);
			function buildUrl(){  
     			var qs="?debug=true";  
     			with(location){  

          			var url=href+qs;  
     			}  
     			return url;  
			};  
			var result=buildUrl();  
  
			// alert(result); 
			var person = {
				"name" : "liutingting",
			};
			var people = [{"name" : "liutingting"}];
			var morePeople = [people];
			console.log(morePeople);
			console.log(morePeople.indexOf(people));
			function displayInfo(arg){
			var output ="";
				if (typeof arg.name == "string"){
					output += "name:" + arg.name +"\n";
				}
				if (typeof arg.age == "number"){
					output += "age" +arg.age +"\n";
				}
				console.log(output);
			}
			displayInfo(person)
			var color =["red","blue"];
			console.log(color);
			color[color.length] = "black";
			color[color.length] = "yellow";
			console.log(color);
			color.shift();
			color.unshift("hello");
			var  people1 = {
				// toLocaleString : function(){
				// 	return "nik";
				// },
				// toString : function(){
				// 	return "nok";

				// }
			};
			var  people2 = {
				// toLocaleString : function(){
				// 	return "nik";
				// },
				// toString : function(){
				// 	return "nok";
					
				// }
			};
			var people = [people1,people2];
			console.log(people);
			console.log(people.toString());
			console.log(people.toLocaleString());

			var vaules = [0, 1, 5, 4, 20,25];
			function compareF(a,b){
				return a-b;
			}
			console.log(vaules.sort(compareF));
			console.log(vaules.every(function(item,index,array){
				return item > 2;
			}));
			console.log(vaules.filter(function(item,index,array){
				return item>2;
			}));
			console.log(vaules.map(function(item,index,array){
				return item*2;
			}));
			console.log(vaules.some(function(item,index,array){
				return item>2;
			}))