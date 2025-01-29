function stringChop(str, size) {
  // your code here
	
	let arr = [];
	let len = str.length;
	let index1=0;
	let index2=size;
	while(len>size && index2<=len){
		arr.push(str.substring(index1,index2));
		index1=index2;
		index2+=size;
	}
	if(index2>len){
		arr.push(str.substring(index1,len));
	}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");


const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
