function tinggi_badan_siswa(){
  var siswa_1=188;
  var siswa_2=186;
  var siswa_3=185;

  if(siswa_1>siswa_2){
    if(siswa_2>siswa_3){
      console.log("siswa 1 merupakan siswa tertinggi, dan siswa 3 merupakan siswa terpendek");
      console.log(siswa_1,siswa_2,siswa_3);
    }
    else if(siswa_3>siswa_1){
      console.log("siswa 3 merupakan siswa tertinggi, dan siswa 2 merupakan siswa terpendek");
      console.log(siswa_3,siswa_1,siswa_2);
    }
    else {
      console.log("siswa 1 merupakan siswa tertinggi, dan siswa 2 merupakan siswa terpendek");
      console.log(siswa_1,siswa_3,siswa_2);
    }
  }
  else{
    if(siswa_3>siswa_2){
      console.log("siswa 3 merupakan siswa tertinggi, dan siswa 1 merupakan siswa terpendek");
      console.log(siswa_3,siswa_2,siswa_1);
    }
    else if(siswa_3>siswa_1){
      console.log("siswa 2 merupakan siswa tertinggi, dan siswa 1 merupakan siswa terpendek");
      console.log(siswa_2,siswa_3,siswa_1);
    }
    else{
      console.log("siswa 2 merupakan siswa tertinggi, dan siswa 3 merupakan siswa terpendek");
      console.log(siswa_2,siswa_1,siswa_3);
    }
  }
}

tinggi_badan_siswa()
