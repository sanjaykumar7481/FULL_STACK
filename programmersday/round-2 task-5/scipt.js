var l=true
let ans=-1;
let os=0,xs=0,dr=0;
var mat=[-100,-100,-100,-100,-100,-100,-100,-100,-100]
know_who();
function know_who()
{
    try{
    if(l)document.getElementById("player").innerText="O";
    else document.getElementById("player").innerText="X";
    document.getElementById("player").style.color="green";
    document.getElementById("player").style.textShadow="3px 0 2px lightgray";
    }
    catch{

    }
}
function keep(s)
{
    if(document.getElementById(s).innerText.length==0)
    {
        if(l){
            document.getElementById(s).innerText='O';
            document.getElementById(s).style.color="rgb(37, 172, 255)";
            l=false;
            mat[parseInt(s)-1]=0;
            // let ans=check();
        }
        else{
            document.getElementById(s).innerText='X';
            l=true;
            mat[parseInt(s)-1]=1;
            
        }
        ans=check();
        // console.log(ans);
        if(ans!=-1){
            if(ans==0){
                // alert("O won");
                os++;
            }
            else{
                // alert("X won");
                xs++;
            }
            high();
            celb();
        }
        let w=fin_check();
        if(w && ans==-1){
            // alert("Draw");
            dr++;
            celb();
        }
        know_who();
    }
    else{
        alert("click empty box");
    }
}
function check(){
    let r1=mat[0]+mat[1]+mat[2];
    let r2=mat[3]+mat[4]+mat[5];
    let r3=mat[6]+mat[7]+mat[8];
    let d1=mat[0]+mat[4]+mat[8];
    let d2=mat[2]+mat[4]+mat[6];
    let c1=mat[0]+mat[3]+mat[6];
    let c2=mat[1]+mat[4]+mat[7];
    let c3=mat[2]+mat[5]+mat[8];
    if(r1==0 || r1==3)
    {
        document.getElementById("1").style.color="green";
        document.getElementById("2").style.color="green";
        document.getElementById("3").style.color="green";
        if(r1==3)return 1;
        return 0;
    }
    if(r2==0 || r2==3)
    {
        document.getElementById("4").style.color="green";
        document.getElementById("5").style.color="green";
        document.getElementById("6").style.color="green";
        if(r2==3)return 1;
        return 0;
    }
    if(r3==0 || r3==3)
    {
        document.getElementById("7").style.color="green";
        document.getElementById("8").style.color="green";
        document.getElementById("9").style.color="green";
        if(r3==3)return 1;
        return 0;
    }
    if(d1==0 || d1==3)
    {
        document.getElementById("1").style.color="green";
        document.getElementById("5").style.color="green";
        document.getElementById("9").style.color="green";
        if(d1==3)return 1;
        return 0;
    }
    if(d2==0 || d2==3)
    {
        document.getElementById("3").style.color="green";
        document.getElementById("5").style.color="green";
        document.getElementById("7").style.color="green";
        if(d2==3)return 1;
        return 0;
    }
    if(c1==0 || c1==3)
    {
        document.getElementById("1").style.color="green";
        document.getElementById("4").style.color="green";
        document.getElementById("7").style.color="green";
        if(c1==3)return 1;
        return 0;
    }
    if(c2==0 || c2==3)
    {
        document.getElementById("2").style.color="green";
        document.getElementById("5").style.color="green";
        document.getElementById("8").style.color="green";
        if(c2==3)return 1;
        return 0;
    }
    if(c3==0 || c3==3)
    {
        document.getElementById("3").style.color="green";
        document.getElementById("6").style.color="green";
        document.getElementById("9").style.color="green";
        if(c3==3)return 1;
        return 0;
    }
    return -1;
}
function fin_check()
{
    for(let i in mat){
        if(mat[i]==-100)return 0;
    }
    return 1;
}
function high()
{
    if(ans!=-1){
        for(let i=1;i<=9;i++)
        {
            var id=document.getElementById(""+i);
            if(id.style.color=="green")
            {
            id.style.fontSize="85px";
            }
        }
    }
}
function celb(){
    const s=document.getElementById("cel");
    if(ans==0){
        document.getElementById("winner").innerText='O';
    }
    else if(ans==1){
        document.getElementById("Winner").innerText='X';
    }
    console.log(ans);
    document.getElementById("osc").innerText=os;
    document.getElementById("xsc").innerText=xs;
    document.getElementById("dr").innerText=dr;
    s.click();
}
function cleaR()
{
    for(let i=0;i<9;i++)
    {
        mat[i]=-100;
        document.getElementById(""+(i+1)).innerText="";
        document.getElementById(""+(i+1)).style="none";
    }
    ans=-1;
    // console.log("ok");
    const p=document.getElementById("close");
    p.click();
    l=false
}
// document.getElementById("cel").click();