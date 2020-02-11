function tinggi(){
  var a1 = 9;
  var a2 = 10;
  var a3 = 11;
  if(a1>a2){
    if(a2>a3){
      console.log(a1,a2,a3);
    }
    else{
      if(a1>a3){
        console.log(a1,a3,a2);
      }
      else{
        console.log(a3,a1,a2);
      }
    }
  }
  else{
    if(a3>a2){
      console.log(a3,a2,a1);
    }
    else if(a3>a1){
      console.log(a2,a3,a1);
    }
    else{
      console.log(a2,a1,a3);
    }
  }
}

tinggi()
