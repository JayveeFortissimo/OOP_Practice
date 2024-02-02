//class for Operations
class Operation {
   constructor(){

      this._balance = 0;
      this._widthraw = 0;
      this._deposit = 0;

      // set it into Local Storage
     localStorage.setItem("Deposit",this._deposit);
      localStorage.setItem("Widthraw",this._widthraw);
      localStorage.setItem("Balance",this._balance);



      try{
///AppendChld of cards

this.deposito = localStorage.getItem("Deposit")
this.create4 = document.createElement("h4");
this.create4.textContent = `P ${this.deposito}`
document.querySelector(".numbers").appendChild(this.create4)


//For widtraw
this.depositos = localStorage.getItem("Widthraw")
this.create6s = document.createElement("h4");
this.create6s.textContent = `P ${this.depositos}`
document.querySelector(".numbers1").appendChild(this.create6s)


//For Balance
this.depositos = localStorage.getItem("Balance")
this.create6 = document.createElement("h4");
this.create6.textContent = `P ${this.depositos}`
document.querySelector(".numbers2").appendChild(this.create6)


 //Deposit Function inputs

 this.h = document.querySelector(".Deposits form");
  this.valuesInput = document.querySelector(".Deposits input")
  //Deposit Event Listeners
this.h.addEventListener('submit',this.deposit.bind(this));


//widthraw
this.W = document.querySelector(".Widthdraws form");
  this.valuesInputs = document.querySelector(".Widthdraws input")
this.W.addEventListener('submit',this.widthdraw.bind(this));


      }catch(error){
         console.log("Nothings error HAHA")
      }

   
     
   }


   //Deposit
   deposit(e){
      e.preventDefault();
      
      if(this.valuesInput.value === ""){
         alert("Fill up first")
      }else{
      
let locals = parseInt(localStorage.getItem("Deposit"));
let inputsy = parseInt(this.valuesInput.value)
let results = locals + inputsy;

      localStorage.setItem("Deposit",results);
      //For Balance
      localStorage.setItem("Balance",results);


      this.create4.textContent = `P ${results}`

      //balance
      this.create6.textContent = `P${results}`

      //Widthdraw
      this.create6s.textContent = `P ${results}`

      this.valuesInput.value = ""


      }
         
      }


      //Widthdra

widthdraw(e){
    e.preventDefault()

let BalanceValue = parseInt(localStorage.getItem("Balance"));

let widthValue = parseInt(localStorage.getItem("Widthraw"))


   if(this.valuesInputs.value === ""){
alert("Fill Up first")

   }else if(BalanceValue <= 0){
alert("Your Current Balance is 0")
this.valuesInputs.value = ""
   }else{


      //First i plus the input.value into widthraw;
      let widthdrawStorage = parseInt(this.valuesInputs.value);

      let resulta = widthdrawStorage + widthValue;

      localStorage.setItem("Widthraw",resulta)



      // Subtract The balance
  
let BalanceMinus = parseInt(localStorage.getItem("Balance"));
let WidthBalance = parseInt(localStorage.getItem("Widthraw"));

let finalResult =  BalanceMinus - WidthBalance    ;


    localStorage.setItem("Balance",finalResult)

     this.create6.textContent = `P${finalResult}`



      this.valuesInputs.value = ""
   }

}
   

}

class Functionality extends Operation{

constructor(){

   super();
    this.change = true;

    try{
 //for HumburgerBar
 document.querySelector('.humburger').addEventListener('click',this.Clicked.bind(this));

 //for information Registration
document.querySelector('form').addEventListener('submit',this.Information.bind(this));

 //for Login and register Change
document.querySelector('h6').addEventListener('click',this.Logins.bind(this));

//Login Click
document.querySelector("#login").addEventListener('click',this.regist.bind(this));


//Login Components
this.logins1 = document.querySelector("#Logins").addEventListener('click',this.LoginInfo.bind(this));



    }catch(err){
      console.log("")
    }
   
}


//To Register and login




//method for humburger
Clicked(){
     
 if(this.change){
    document.querySelector('.HumburgerSettings').style.visibility = 'visible'
 }else{
    document.querySelector('.HumburgerSettings').style.visibility = 'hidden'
 }
 
 this.change = !this.change
}


///For Submit Eventlistener
Information(e){
   e.preventDefault();

   //register
let name = document.querySelector('form input[name="username"]');
let address = document.querySelector('form input[name="address"]');
let password = document.querySelector('form input[name="password"]');
let confirmation = document.querySelector('form input[name="confirmation"]');


if(name.value === "" || address.value ==="" || password.value === "" || confirmation.value ===""){
   alert("please fill up the forms")
}else if(password.value != confirmation.value){
   alert("Not matched")
}else{
   localStorage.setItem("Name",name.value);
   localStorage.setItem("Address",address.value)
   localStorage.setItem("Password",password.value)
   localStorage.setItem("Confirmation",confirmation.value)

   name.value = "";
   address.value = "";
   password.value ="";
   confirmation.value = "";

}


}

///Logins

Logins(){

   //Sa Register to
   this.registrayions = document.querySelector("section .info").style.visibility = "hidden";
   //Login
   this.Logina = document.querySelector("section .infos");
   this.Logina.style.visibility ="visible";
   this.Logina.style.right ="480px";

}

///register

regist(){
   this.registrayions = document.querySelector("section .info").style.visibility = "visible";
   this.Logina = document.querySelector("section .infos");
   this.Logina.style.visibility ="hidden";
   this.Logina.style.right ="0px";
}

//Login Information
LoginInfo(e){


   e.preventDefault()

// LocalStorage Components
   const name = localStorage.getItem("Name");
   const password = localStorage.getItem("Password");
   const confirmation = localStorage.getItem("Confirmation");

   //forms Elements
   let names = document.querySelector('form input[name="username1"]');
let passwords = document.querySelector('form input[name="password1"]');
let confirmations = document.querySelector('form input[name="confirmation1"]');

if(names.value === "" || passwords.value === "" || confirmations === ""){
   alert("Fill up First")
}else if(name != names.value || password != passwords.value || confirmation != confirmations.value){
   alert("Invalid Cridentials")
}else{
   window.location.href = "DashBoard.html"
}


}


}
const Functionsnals = new Functionality();


try{
   const lowkey = document.querySelector(".Jayvee").addEventListener('click',()=>{
      window.location.href = "login.html"
      
})

}catch(error){
   console.log("")
}









