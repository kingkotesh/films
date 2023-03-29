function movie(name){
	if(name=='ntr')
		console.log("RRR")
	else if(name=='mahesh babu')
		console.log("MAHARSHI");
	else if(name=='ram')
		console.log("RED");
	else if(name=='ram charan')
		console.log("ORANGE");
	else if(name=='allu arjun')
		console.log("JULY");
	else if(name=='vijay')
		console.log("LIGER");
	else
		console.log("invalid");
}
//movie('vijay');
exports.movie=movie;