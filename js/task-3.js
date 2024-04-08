const profile = {
    username: "Jacob",
    playTime: 300,
    // Метод changeUsername(newName) повинен приймати рядок (нове ім’я)
    //  в параметр newName та змінювати значення властивості username на нове. 
    //  Нічого не повертає.
    changeUsername(newName) {
      profile.username = newName;
    },
    // // Метод updatePlayTime(hours) повинен приймати число (кількість годин) 
    // у параметр hours та збільшити на нього значення властивості playTime. 
    // Нічого не повертає.
    updatePlayTime(hours){
      if (profile.playTime === this.playTime){
        profile.playTime += hours;
      }
    },
    // Метод getInfo() має повертати рядок формату <Username>
    //  has <amount> active hours!, де <Username> — це ім’я профілю, а <amount>
    //   — кількість ігрових годин.
    getInfo(){
      return `${profile.username} has ${profile.playTime} active hours!`;
    },
  }
  
  
    
  
  
  console.log(profile.getInfo()); // "Jacob has 300 active hours!"
  
  profile.changeUsername("Marco");
  console.log(profile.getInfo()); // "Marco has 300 active hours!"
  
  profile.updatePlayTime(20);
  console.log(profile.getInfo()); // "Marco has 320 active hours!"











