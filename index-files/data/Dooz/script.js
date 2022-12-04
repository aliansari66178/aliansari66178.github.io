let n1 = "no";
let n2 = "no";
let n3 = "no";
let n4 = "no";
let n5 = "no";
let n6 = "no";
let n7 = "no";
let n8 = "no";
let n9 = "no";
let pc = "no";
let var1 = 0;
let ti = 10;
let ra = 0;

function _new () {
    ti = 0
    if (n1 == "us") {ti++;}
    if (n2 == "us") {ti++;}
    if (n3 == "us") {ti++;}
    if (n4 == "us") {ti++;}
    if (n5 == "us") {ti++;}
    if (n6 == "us") {ti++;}
    if (n7 == "us") {ti++;}
    if (n8 == "us") {ti++;}
    if (n9 == "us") {ti++;}

    n1 = "no";
    n2 = "no";
    n3 = "no";
    n4 = "no";
    n5 = "no";
    n6 = "no";
    n7 = "no";
    n8 = "no";
    n9 = "no";

    if (ti % 2 == 1) {
        pc_win();
    } else {
        document.getElementById("wi").value = "شروع کنید!";
    }
}
function check (num) {
    if ((n1 == "pc" && n2 == "pc" && n3 == "pc") || 
    (n4 == "pc" && n5 == "pc" && n6 == "pc") || 
    (n7 == "pc" && n8 == "pc" && n9 == "pc") || 
    (n1 == "pc" && n4 == "pc" && n7 == "pc") || 
    (n2 == "pc" && n5 == "pc" && n8 == "pc") || 
    (n3 == "pc" && n6 == "pc" && n9 == "pc") || 
    (n1 == "pc" && n5 == "pc" && n9 == "pc") || 
    (n3 == "pc" && n5 == "pc" && n7 == "pc")) {
        setTimeout(_new, 2000);
        document.getElementById("wi").value = "من برنده شدم😁";
        setTimeout(pic, 2000);
    } else if ((n1 == "us" && n2 == "us" && n3 == "us") || 
    (n4 == "us" && n5 == "us" && n6 == "us") || 
    (n7 == "us" && n8 == "us" && n9 == "us") || 
    (n1 == "us" && n4 == "us" && n7 == "us") || 
    (n2 == "us" && n5 == "us" && n8 == "us") || 
    (n3 == "us" && n6 == "us" && n9 == "us") || 
    (n1 == "us" && n5 == "us" && n9 == "us") || 
    (n3 == "us" && n5 == "us" && n7 == "us")) {
        setTimeout(_new, 2000);
        document.getElementById("wi").value = "متأسّفانه شما برنده شدید😭";
        setTimeout(pic, 2000);
    } else if (n1 != "no" && n2 != "no" && n3 != "no" && 
    n4 != "no" && n5 != "no" && n6 != "no" && 
    n7 != "no" && n8 != "no" && n9 != "no") {
        setTimeout(_new, 2000);
        document.getElementById("wi").value = "با هم مساوی شدیم😥";
        setTimeout(pic, 2000);
    } else if (num == 1) {
        pc_win();
    }
}
function pc_win () {
    pc = "no";
    if ((n1 == n2) && (n2 != "no") && n3 == "no") {
        pc = 3;
    } else if ((n1 == n3) && (n3 != "no") && n2 == "no") {
        pc = 2;
    } else if ((n3 == n2) && (n2 != "no") && n1 == "no") {
        pc = 1;
    } else if ((n4 == n5) && (n5 != "no") && n6 == "no") {
        pc = 6;
    } else if ((n4 == n6) && (n6 != "no") && n5 == "no") {
        pc = 5;
    } else if ((n6 == n5) && (n5 != "no") && n4 == "no") {
        pc = 4;
    } else if ((n7 == n8) && (n8 != "no") && n9 == "no") {
        pc = 9;
    } else if ((n9 == n7) && (n7 != "no") && n8 == "no") {
        pc = 8;
    } else if ((n8 == n9) && (n9 != "no") && n7 == "no") {
        pc = 7;
    } else if ((n1 == n4) && (n4 != "no") && n7 == "no") {
        pc = 7;
    } else if ((n1 == n7) && (n7 != "no") && n4 == "no") {
        pc = 4;
    } else if ((n7 == n4) && (n4 != "no") && n1 == "no") {
        pc = 1;
    } else if ((n5 == n2) && (n2 != "no") && n8 == "no") {
        pc = 8;
    } else if ((n8 == n2) && (n2 != "no") && n5 == "no") {
        pc = 5;
    } else if ((n8 == n5) && (n5 != "no") && n2 == "no") {
        pc = 2;
    } else if ((n3 == n6) && (n6 != "no") && n9 == "no") {
        pc = 9;
    } else if ((n3 == n9) && (n9 != "no") && n6 == "no") {
        pc = 6;
    } else if ((n6 == n9) && (n9 != "no") && n3 == "no") {
        pc = 3;
    } else if ((n1 == n5) && (n5 != "no") && n9 == "no") {
        pc = 9;
    } else if ((n1 == n9) && (n9 != "no") && n5 == "no") {
        pc = 5;
    } else if ((n5 == n9) && (n9 != "no") && n1 == "no") {
        pc = 1;
    } else if ((n3 == n5) && (n5 != "no") && n7 == "no") {
        pc = 7;
    } else if ((n3 == n7) && (n7 != "no") && n5 == "no") {
        pc = 5;
    } else if ((n5 == n7) && (n7 != "no") && n3 == "no") {
        pc = 3;
    }

    if ((n1 == n2) && (n2 == "pc") && n3 == "no") {
        pc = 3;
    } else if ((n1 == n3) && (n3 == "pc") && n2 == "no") {
        pc = 2;
    } else if ((n3 == n2) && (n2 == "pc") && n1 == "no") {
        pc = 1;
    } else if ((n4 == n5) && (n5 == "pc") && n6 == "no") {
        pc = 6;
    } else if ((n4 == n6) && (n6 == "pc") && n5 == "no") {
        pc = 5;
    } else if ((n6 == n5) && (n5 == "pc") && n4 == "no") {
        pc = 4;
    } else if ((n7 == n8) && (n8 == "pc") && n9 == "no") {
        pc = 9;
    } else if ((n9 == n7) && (n7 == "pc") && n8 == "no") {
        pc = 8;
    } else if ((n8 == n9) && (n9 == "pc") && n7 == "no") {
        pc = 7;
    } else if ((n1 == n4) && (n4 == "pc") && n7 == "no") {
        pc = 7;
    } else if ((n1 == n7) && (n7 == "pc") && n4 == "no") {
        pc = 4;
    } else if ((n7 == n4) && (n4 == "pc") && n1 == "no") {
        pc = 1;
    } else if ((n5 == n2) && (n2 == "pc") && n8 == "no") {
        pc = 8;
    } else if ((n8 == n2) && (n2 == "pc") && n5 == "no") {
        pc = 5;
    } else if ((n8 == n5) && (n5 == "pc") && n2 == "no") {
        pc = 2;
    } else if ((n3 == n6) && (n6 == "pc") && n9 == "no") {
        pc = 9;
    } else if ((n3 == n9) && (n9 == "pc") && n6 == "no") {
        pc = 6;
    } else if ((n6 == n9) && (n9 == "pc") && n3 == "no") {
        pc = 3;
    } else if ((n1 == n5) && (n5 == "pc") && n9 == "no") {
        pc = 9;
    } else if ((n1 == n9) && (n9 == "pc") && n5 == "no") {
        pc = 5;
    } else if ((n5 == n9) && (n9 == "pc") && n1 == "no") {
        pc = 1;
    } else if ((n3 == n5) && (n5 == "pc") && n7 == "no") {
        pc = 7;
    } else if ((n3 == n7) && (n7 == "pc") && n5 == "no") {
        pc = 5;
    } else if ((n5 == n7) && (n7 == "pc") && n3 == "no") {
        pc = 3;
    }
    if ((document.getElementById("ran").value) * 0.02 > Math.random()) {
        if (pc == 1) {
            n1 = "pc";
        } else if (pc == 2) {
        n2 = "pc";
        } else if (pc == 3) {
        n3 = "pc";
        } else if (pc == 4) {
            n4 = "pc";
        } else if (pc == 5) {
            n5 = "pc";
        } else if (pc == 6) {
            n6 = "pc";
        } else if (pc == 7) {
            n7 = "pc";
        } else if (pc == 8) {
            n8 = "pc";
        } else if (pc == 9) {
            n9 = "pc";
        } else {
            time();
        }
    } else {
        random()
    }
    //console.log(pc);
    if (var1 == 0) {pic();}
    check();
}
function time () {
    ti = 10;
    if (n1 == "no") {
        ti-=1;
    }
    if (n2 == "no") {
        ti-=1;
    }
    if (n3 == "no") {
        ti-=1;
    }
    if (n4 == "no") {
        ti-=1;
    }
    if (n5 == "no") {
        ti-=1;
    }
    if (n6 == "no") {
        ti-=1;
    }
    if (n7 == "no") {
        ti-=1;
    }
    if (n8 == "no") {
        ti-=1;
    }
    if (n9 == "no") {
        ti-=1;
    }
    
    if ((document.getElementById("ran").value - 50) * 0.02 > Math.random()) {
        if ((ti % 2) == 0) {
            us_think (ti);
        }  else {
            pc_think (ti);
        }
    } else {
        random();
    }
}
function pc_think (ti) {
    let var1 = 0;
    pc = 0;
    if (ti == 1) {
        pc = 1;
        var1 = 1;
    } else if (ti == 3) {
        if (n2 == "us") {
            pc = 7;
        } else if (n4 == "us") {
            pc = 3;
        } else if (n6 == "us") {
            pc = 7;
        } else if (n8 == "us") {
            pc = 3;
        } else if (n3 == "us") {
            pc = 9;
        } else if (n7 == "us") {
            pc = 9;
        } else if (n5 == "us") {
            pc = 9;
        } else if (n9 == "us") {
            pc = 7;
        }
    } else if (ti == 5) {
        if (n5 == "no" && n9!= "us") {
            pc = 5;
        } else if (n7 == "pc") {
            pc = 3;
        } else if (n3 == "pc") {
            pc = 7;
        }
    } else {
        if (n1 == "no") {
            pc = 1;
        } else if (n2 == "no") {
            pc = 2;
        } else if (n3 == "no") {
            pc = 3;
        } else if (n4 == "no") {
            pc = 4;
        } else if (n5 == "no") {
            pc = 5;
        } else if (n6 == "no") {
            pc = 6;
        } else if (n7 == "no") {
            pc = 7;
        } else if (n8 == "no") {
            pc = 8;
        } else if (n9 == "no") {
            pc = 9;
        }
    }

    if (pc == 1) {
        n1 = "pc";
    } else if (pc == 2) {
        n2 = "pc";
    } else if (pc == 3) {
        n3 = "pc";
    } else if (pc == 4) {
        n4 = "pc";
    } else if (pc == 5) {
        n5 = "pc";
    } else if (pc == 6) {
        n6 = "pc";
    } else if (pc == 7) {
        n7 = "pc";
    } else if (pc == 8) {
        n8 = "pc";
    } else if (pc == 9) {
        n9 = "pc";
    }
    pc = 0;
}
function us_think (ti) {
    if (ti == 2) {
        if (n5 == "us") {
            pc = 1;
        } else {
            pc = 5;
        }
    } else if (ti == 4) {
        if (n1 == "no") {
            pc = 1;
        } else if (n2 == "no") {
            pc = 2;
        } else if (n3 == "no") {
            pc = 3;
        } else if (n4 == "no") {
            pc = 4;
        } else if (n5 == "no") {
            pc = 5;
        } else if (n6 == "no") {
            pc = 6;
        } else if (n7 == "no") {
            pc = 7;
        } else if (n8 == "no") {
            pc = 8;
        } else if (n9 == "no") {
            pc = 9;
        }

        if (n1 == "us") {
            if (n9 == "no") {
                pc = 9;
            } else {
                pc = 8;
            }
        } else if (n3 == "us") {
            if (n7 == "no") {
                pc = 7;
            } else {
                pc = 8;
            }
        } else if (n7 == "us") {
            if (n3 == "no") {
                pc = 3;
            } else {
                pc = 8;
            }
        } else if (n1 == "us") {
            if (n9 == "no") {
                pc = 9;
            } else {
                pc = 8;
            }
        } else if (n2 == "us" && n4 == "us") {
            pc = 1;
        } else if (n2 == "us" && n6 == "us") {
            pc = 3;
        } else if (n4 == "us" && n8 == "us") {
            pc = 1;
        } else if (n6 == "us" && n8 == "us") {
            pc = 1;
        }
        if (n5 == "us" && n9 == "us") {
            pc = 7;
        }
        //console.log(pc)
    } else {
        if (n1 == "no") {
            pc = 1;
        } else if (n2 == "no") {
            pc = 2;
        } else if (n3 == "no") {
            pc = 3;
        } else if (n4 == "no") {
            pc = 4;
        } else if (n5 == "no") {
            pc = 5;
        } else if (n6 == "no") {
            pc = 6;
        } else if (n7 == "no") {
            pc = 7;
        } else if (n8 == "no") {
            pc = 8;
        } else if (n9 == "no") {
            pc = 9;
        }
        //console.log(ti);
    }

    if (pc == 1) {
        n1 = "pc";
    } else if (pc == 2) {
        n2 = "pc";
    } else if (pc == 3) {
        n3 = "pc";
    } else if (pc == 4) {
        n4 = "pc";
    } else if (pc == 5) {
        n5 = "pc";
    } else if (pc == 6) {
        n6 = "pc";
    } else if (pc == 7) {
        n7 = "pc";
    } else if (pc == 8) {
        n8 = "pc";
    } else if (pc == 9) {
        n9 = "pc";
    }
    pc = 0;
}

function random () {
    //console.log(true)
    ra = [] 
    if (n1 == "no") {ra.push(1);}
    if (n2 == "no") {ra.push(2);}
    if (n3 == "no") {ra.push(3);}
    if (n4 == "no") {ra.push(4);}
    if (n5 == "no") {ra.push(5);}
    if (n6 == "no") {ra.push(6);}
    if (n7 == "no") {ra.push(7);}
    if (n8 == "no") {ra.push(8);}
    if (n9 == "no") {ra.push(9);}
    pc = ra[Math.ceil(Math.random() * ra.length)-1]

    if (pc == 1) {
        n1 = "pc";
    } else if (pc == 2) {
        n2 = "pc";
    } else if (pc == 3) {
        n3 = "pc";
    } else if (pc == 4) {
        n4 = "pc";
    } else if (pc == 5) {
        n5 = "pc";
    } else if (pc == 6) {
        n6 = "pc";
    } else if (pc == 7) {
        n7 = "pc";
    } else if (pc == 8) {
        n8 = "pc";
    } else if (pc == 9) {
        n9 = "pc";
    }
    //console.log(pc);
}

function pic () {
    if (n1 == "no") {
        document.getElementById("n1").innerHTML = "";
    } else if (n1 == "us") {
        document.getElementById("n1").innerHTML = "X";
    } else {
        document.getElementById("n1").innerHTML = "O";
    }

    if (n2 == "no") {
        document.getElementById("n2").innerHTML = "";
    } else if (n2 == "us") {
        document.getElementById("n2").innerHTML = "X";
    } else {
        document.getElementById("n2").innerHTML = "O";
    }

    if (n3 == "no") {
        document.getElementById("n3").innerHTML = "";
    } else if (n3 == "us") {
        document.getElementById("n3").innerHTML = "X";
    } else {
        document.getElementById("n3").innerHTML = "O";
    }

    if (n4 == "no") {
        document.getElementById("n4").innerHTML = "";
    } else if (n4 == "us") {
        document.getElementById("n4").innerHTML = "X";
    } else {
        document.getElementById("n4").innerHTML = "O";
    }

    if (n5 == "no") {
        document.getElementById("n5").innerHTML = "";
    } else if (n5 == "us") {
        document.getElementById("n5").innerHTML = "X";
    } else {
        document.getElementById("n5").innerHTML = "O";
    }

    if (n6 == "no") {
        document.getElementById("n6").innerHTML = "";
    } else if (n6 == "us") {
        document.getElementById("n6").innerHTML = "X";
    } else {
        document.getElementById("n6").innerHTML = "O";
    }

    if (n7 == "no") {
        document.getElementById("n7").innerHTML = "";
    } else if (n7 == "us") {
        document.getElementById("n7").innerHTML = "X";
    } else {
        document.getElementById("n7").innerHTML = "O";
    }

    if (n8 == "no") {
        document.getElementById("n8").innerHTML = "";
    } else if (n8 == "us") {
        document.getElementById("n8").innerHTML = "X";
    } else {
        document.getElementById("n8").innerHTML = "O";
    }

    if (n9 == "no") {
        document.getElementById("n9").innerHTML = "";
    } else if (n9 == "us") {
        document.getElementById("n9").innerHTML = "X";
    } else {
        document.getElementById("n9").innerHTML = "O";
    }
}


document.getElementById("n1").onclick = function () {
    if (n1 == "no"){
        n1 = "us"
        pic();
        check(1);
    } 
}
document.getElementById("n2").onclick = function () {
    if (n2 == "no"){
        n2 = "us"
        pic();
        check(1);
    } 
}
document.getElementById("n3").onclick = function () {
    if (n3 == "no"){
        n3 = "us"
        pic();
        check(1);
    } 
}
document.getElementById("n4").onclick = function () {
    if (n4 == "no"){
        n4 = "us"
        pic();
        check(1);
    } 
}
document.getElementById("n5").onclick = function () {
    if (n5 == "no"){
        n5 = "us"
        pic();
        check(1);
    } 
}
document.getElementById("n6").onclick = function () {
    if (n6 == "no"){
        n6 = "us"
        pic();
        check(1);
    } 
}
document.getElementById("n7").onclick = function () {
    if (n7 == "no"){
        n7 = "us"
        pic();
        check(1);
    } 
}
document.getElementById("n8").onclick = function () {
    if (n8 == "no"){
        n8 = "us"
        pic();
        check(1);
    } 
}
document.getElementById("n9").onclick = function () {
    if (n9 == "no"){
        n9 = "us"
        pic();
        check(1);
    } 
}

document.getElementById("wi").value = "شروع کنید!";