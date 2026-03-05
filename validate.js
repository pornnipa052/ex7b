function checkSID() {

  let sid = (document.getElementById("sid").value).trim();

  if(sid.length != 10){
    return false;
  }

  if(!/^[0-9]+$/.test(sid)){
    return false;
  }

  return true;
}

function checkCandiNo() {

  let candi = (document.getElementById("candi").value).trim();

  if(isNaN(candi)){
    return false;
  }

  candi = parseInt(candi);

  if(candi < 1 || candi > 10){
    return false;
  }

  return true;
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}