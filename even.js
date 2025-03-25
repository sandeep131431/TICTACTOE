let x = 0;
let tt = 0;
let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
let arr = new Array(9).fill("E");


function code(){
    for(const [ind1,ind2,ind3] of winner){
        if(arr[ind1]!="E" && arr[ind1]===arr[ind2] && arr[ind2]===arr[ind3]){
            return 1;
        }
    }
    return 0;
}



const  tictactoe = (e)=>{
    let id = e.target.id;
    if(arr[id]==="E"){
    tt++;
    if(x==0){

    document.getElementById(id).innerHTML = "X";
    arr[e.target.id]="X";

    if(code()){
        document.getElementById('res').innerHTML = "HE IS WINN ";
        m.removeEventListener('click',tictactoe);
        return ;
    }

    x=1;

   }else{
    document.getElementById(id).innerHTML = "O";
    arr[e.target.id]= "O";

    if(code()){
        document.getElementById('res').innerHTML = "YOU WINN ";
        m.removeEventListener('click',tictactoe); 
        return;
    }
    x = 0;
   }

   if(tt==9){
    document.getElementById('res').innerHTML = "MATCH IS DRAWW";
    m.removeEventListener('click',tictactoe);
    return ;
   }
  }
}

const m = document.getElementById('event');
m.addEventListener('click',tictactoe);

document.getElementById('btn').addEventListener('click',()=>{
    let cell = document.getElementsByClassName('one');

    Array.from(cell).forEach((value)=>{
      value.innerHTML = "";
    })

    arr.fill('E');
    x = 0;
    tt = 0;
    m.addEventListener('click',tictactoe);
    document.getElementById('res').innerHTML = "";
})



