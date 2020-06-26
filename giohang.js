var anh = document.getElementById("anh");
var tensp = document.getElementById("dungten");
function doianh1() {
    var layanh1 = document.getElementById("anh1");
   anh.src = "images/rvchanh.jpg";
   tensp.innerHTML="Revive Vị Cam"
}
function doianh2() {
    var layanh1 = document.getElementById("anh1");
   anh.src = "images/rvtt.jpg";
   tensp.innerHTML="Revive Sữa Chua"
}
function doianh3() {
    var layanh1 = document.getElementById("anh1");
   anh.src = "images/rrtt2.jpg";
   tensp.innerHTML="Revive Đặc Biệt"
}

function chonn(){
    var chon1 = document.getElementsByClassName("radio");
    var tien = document.getElementById("vanchuyen");
    if(chon1[1].checked){
        tien.value= 0;
    }
    if(chon1[0].checked==false){
        tien.value= 0;
    }
    else{
        tien.style.display="block";
        tien.value= 2000;
    }
}
function muahang(){
    var giatien = document.getElementsByClassName("td");
    var giatien2 = giatien[0].innerHTML;
    console.log(giatien);
    var laynn = document.getElementById("vanchuyen").value;
    var laysl = document.getElementById("number");
    var sl = laysl.value;
    console.log(sl);
    var tien = sl * Number(giatien2) + Number(laynn);
    console.log(tien);
    var ttien = document.getElementById("ttien");
    ttien.innerText="Thành Tiền : "+ tien +"$";
  
}
function muahang2(){
    alert("Chúc Mừng Bạn Đã Mua Hàng Thành Công");
    alert("Cảm Ơn Bạn Đã Mua Hàng Của Chúng Tôi !")
}