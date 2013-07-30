function postListings(){

address=document.getElementById("streetaddress").value;
parkingtype=document.getElementById("parkingtype").value;
price=document.getElementById("price").value;
startdate=document.getElementById("startdate").value;
enddate=document.getElementById("enddate").value;
description=document.getElementById("description").value;
city = document.getElementById("city").value;
parkinglength = document.getElementById("pl").value;


var output={"address":address, "parkingtype":parkingtype, "price": price, "startdate":startdate, "enddate":enddate, "email":contact, "length":parkinglength, "description":description, "lat":latitude, "lon":longitude};
	$.post("http://rocky-reaches-7172.herokuapp.com/listings.json", output);
	
}