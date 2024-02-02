function feast(beast, dish){

  let numLength1=beast.length-1;
    let  numLength2=dish.length-1;

  
  if(beast[0]==dish[0] && beast[numLength1]==dish[numLength2]){
    return true;
  }
  else{
    return false;
  }
}