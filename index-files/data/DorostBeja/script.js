let B;
let D;
let ti = 1;
let c = [];
let w = [];
let ou = document.getElementById("out");
let no = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let gr = [];
let D1 = false;
let B1 = false;
let D2 = false;
let B2 = false;
let D3 = false;
let B3 = false;
let D4 = false;
let B4 = false;
let D5 = false;
let B5 = false;
let D6 = false;
let B6 = false;
let D7 = false;
let B7 = false;
let D8 = false;
let B8 = false;
let D9 = false;
let B9 = false;
let D11 = false;
let B11 = false;
let nums = [];
let cnums = [];
let set1 = [];
let arr1 = [];
let usno = [];
let usB;
let usD;
let turn = Math.round(Math.random());
let start = turn;
let ifpcwin = false;
let ifuswin = false;
norand();
usrand();
if (turn == 0) {
    ou.value = [no[0], no[1], no[2], no[3], no[4]];
} else {
    alert("شما شروع کنید.");
}

//////////////////////////////

function new_game () {
    window.location.reload();
}

function win (winner) {
    /*if (winner == "pc") {
        ifpcwin = true;
        win("check");
    } else if (winner == "us") {
        ifuswin = true;
        win("check");
    }
    else */if (winner == "check") {
        if (start == turn) {
            if (ifpcwin == true && ifuswin == true) {
                alert("ما با هم مساوی شدیم!😢");
                new_game();
            } else if (ifpcwin == true && ifuswin == false) {
                alert("من برنده شدم! 😁");
                new_game();
            } else if (ifpcwin == false && ifuswin == true) {
                alert("متأسّفانه شما برنده شدید! 😭");
                new_game();
            }
        }
    }
}

function get () {
    D = document.getElementById("D").value;
    B = document.getElementById("B").value;
}

document.getElementById("btn").onclick = function () {
    get();
    if (turn == 0) {
        if (+document.getElementById("D").value > 5 ||
        +document.getElementById("B").value > 5) {
            alert("ارقام وارد شده برای درست‌ها و بجا‌ها باید بین صفر و پنج باشد!");
        } else if (+document.getElementById("B").value > +document.getElementById("D").value) {
            alert("تعداد بجا‌ها نباید بیشتر از درست‌ها باشد!");
        } else if (document.getElementById("D").value == "" ||
        document.getElementById("B").value == "") {
            alert("همه‌ی خانه‌ها باید پر شده باشند!")
        } else {
            turn = 1-turn;
            switch (ti) {
                case 1 : n1(); break;
                case 2 : {n2(); break;}
                case 3 : {n3(); break;}
                case 4 : {n4(); break;}
                case 5 : {n5(); break;}
                case 6 : {n6(); break;}
                case 7 : {n7(); break;}
                case 8 : {n8(); break;}
                case 9 : {n9(); break;}
                /*case 10: {n10(); break;}*/
                default: {n11(); break;}
            }
            win("check");
            alert("شما شروع کنید.");
        }
    } else {
        alert("شما شروع کنید.");
    }
}

document.getElementById("usbtn").onclick = function () {
    get();
    if (turn == 1) {
        if (+document.getElementById("n1").value == +document.getElementById("n2").value ||
        +document.getElementById("n1").value == +document.getElementById("n3").value ||
        +document.getElementById("n1").value == +document.getElementById("n4").value ||
        +document.getElementById("n1").value == +document.getElementById("n5").value ||
        +document.getElementById("n2").value == +document.getElementById("n3").value ||
        +document.getElementById("n2").value == +document.getElementById("n4").value ||
        +document.getElementById("n2").value == +document.getElementById("n5").value ||
        +document.getElementById("n3").value == +document.getElementById("n4").value ||
        +document.getElementById("n3").value == +document.getElementById("n5").value ||
        +document.getElementById("n4").value == +document.getElementById("n5").value) {
            alert("اعداد نباید تکراری باشند!")
        } else if (+document.getElementById("n1").value > 9 ||
        +document.getElementById("n2").value > 9 ||
        +document.getElementById("n3").value > 9 ||
        +document.getElementById("n4").value > 9 ||
        +document.getElementById("n5").value > 9) {
            alert("اعداد وارد شده باید یک‌رقمی باشند!")
        } else if (document.getElementById("n1").value == "" ||
        document.getElementById("n2").value == "" ||
        document.getElementById("n3").value == "" ||
        document.getElementById("n4").value == "" ||
        document.getElementById("n5").value == "") {
            alert("همه‌ی خانه‌ها باید پر شده باشند!")
        } else {
            turn = 1-turn;
            ans(+document.getElementById("n1").value, +document.getElementById("n2").value,
            +document.getElementById("n3").value, +document.getElementById("n4").value, +document.getElementById("n5").value);
            if (ti == 1) {ou.value = [no[0], no[1], no[2], no[3], no[4]];}
            win("check");
        }
    } else {
        alert("نوبت شما نیست!");
    }
}

/////////////////////////////////////////////////////

function n1 () {
    get();
    B1 = B;
    D1 = D;
    if (D1 == 5) {
        c = [no[0], no[1], no[2], no[3], no[4]];
        ti = 11;
        set11();
    } else if (D1 == 0) {
            w = [no[0], no[1], no[2], no[3], no[4]];
            ti = 11;
            set11();
    } else {
        ou.value = [no[1], no[2], no[3], no[4], no[5]];
        ti+=1;
        gr.push(no[0]);
    }
}

function n2 () {
    get();
    B2 = B;
    D2 = D;
    if (D2 == 5) {
        c = [no[1], no[2], no[3], no[4], no[5]];
        ti = 11;
        set11();
    } else if (D2 == 0) {
        w = [no[1], no[2], no[3], no[4], no[5]];
        ti = 11;
        set11();
    } else {
        ou.value = [no[2], no[3], no[4], no[6], no[1]];
        ti+=1;
        if (D2 - D1 == 1) {
            c.push(no[5]);
            if (gr.length != 0) {
                if (gr.length != 0) {
                    for (let m = 0; m<gr.length; m++) {
                        w.push(gr[m]);
                    }
                }   
                gr = [];
            }
        } else if (D1 - D2 == 1) {
            if (gr.length != 0) {
                if (gr.length != 0) {
                for (let m = 0; m<gr.length; m++) {
                        c.push(gr[m]);
                }
            }
                gr = [];
            }
            w.push(no[5]);
            gr = [];
        } else {
            gr.push(no[5])
        }
    }
}

function n3 () {
    get();
    B3 = B;
    D3 = D;
    if (D3 == 5) {
        c = [no[2], no[3], no[4], no[6], no[1]];
        ti = 11;
        set11();
    } else if (D3 == 0) {
        w = [no[2], no[3], no[4], no[6], no[1]];
        ti = 11;
        set11();
    } else {
        ou.value = [no[3], no[4], no[7], no[1], no[2]];
        ti+=1;
        if (D3 - D2 == 1) {
            c.push(no[6]);
            if (gr.length != 0) {
                for (let m = 0; m<gr.length; m++) {
                        w.push(gr[m]);
                }
                gr = [];
            }
            gr = [];
        } else if (D2 - D3 == 1) {
            if (gr.length != 0) {
                for (let m = 0; m<gr.length; m++) {
                        c.push(gr[m]);
                    }
                gr = [];
            }
            w.push(no[6]);
            gr = [];
        } else {
            if (c.filter(val => val == no[5]).length == 1) {
                c.push(no[6])
            } else if (w.filter(val => val == no[5]).length == 1) {
                w.push(no[6])
            } else {
                gr.push(no[6])
            }
        }
    }
}

function n4 () {
    get();
    B4 = B;
    D4 = D;
    if (D4 == 5) {
        c = [no[3], no[4], no[7], no[1], no[2]];
        ti = 11;
        set11();
    } else if (D4 == 0) {
        w = [no[3], no[4], no[7], no[1], no[2]];
        ti = 11;
        set11();
    } else {
        ou.value = [no[4], no[8], no[1], no[2], no[3]];
        ti+=1;
        if (D4 - D3 == 1) {
            c.push(no[7]);
            if (gr.length != 0) {
                for (let m = 0; m<gr.length; m++) {
                        w.push(gr[m]);
                    }
                gr = [];
            }
            gr = [];
        } else if (D3 - D4 == 1) {
            if (gr.length != 0) {
                for (let m = 0; m<gr.length; m++) {
                        c.push(gr[m]);
                    }
                gr = [];
            }
            w.push(no[7]);
            gr = [];
        } else {
            if (c.filter(val => val == no[6]).length == 1) {
                c.push(no[7])
            } else if (w.filter(val => val == no[6]).length == 1) {
                w.push(no[7])
            } else {
                gr.push(no[7])
            }
        }
    }
}

function n5 () {
    get();
    B5 = B;
    D5 = D;
    if (D5 == 5) {
        c = [no[4], no[8], no[1], no[2], no[3]];
        ti = 11;
        set11();
    } else if (D5 == 0) {
        w = [no[4], no[8], no[1], no[2], no[3]];
        ti = 11;
        set11();
    } else {
        ou.value = [no[9], no[1], no[2], no[3], no[4]];
        ti+=1;
        if (D5 - D4 == 1) {
            c.push(no[8]);
            if (gr.length != 0) {
                for (let m = 0; m<gr.length; m++) {
                        w.push(gr[m]);
                    }
                gr = [];
            }
            gr = [];
        } else if (D4 - D5 == 1) {
            if (gr.length != 0) {
                for (let m = 0; m<gr.length; m++) {
                        c.push(gr[m]);
                    }
                gr = [];
            }
            w.push(no[8]);
            gr = [];
        } else {
            if (c.filter(val => val == no[7]).length == 1) {
                c.push(no[8])
            } else if (w.filter(val => val == no[7]).length == 1) {
                w.push(no[8])
            }
        }
        if (gr.length >= 5) {
            if (D1 == 4) {
                c=[no[1], no[2], no[3], no[4], no[9]]
            } else {
                c=[no[5], no[6], no[7], no[8], no[0]]
            }
            ti=11;
            set11();
        }
    }
}

function n6 () {
    get();
    B6 = B;
    D6 = D;
    if (D6 == 5) {
        c = [no[9], no[1], no[2], no[3], no[4]];
        ti = 11;
        set11();
    } else if (D6 == 0) {
        w = [no[9], no[1], no[2], no[3], no[4]];
        ti = 11;
        set11();
    } else {
        ou.value = [w[1], no[2], no[3], no[4], no[9]];
        ti+=1;
        if (D6 - D5 == 1) {
            c.push(no[9]);
            if (gr.length != 0) {
                for (let m = 0; m<gr.length; m++) {
                        w.push(gr[m]);
                    }
                gr = [];
            }
            gr = [];
        } else if (D5 - D6 == 1) {
            if (gr.length != 0) {
                for (let m = 0; m<gr.length; m++) {
                        c.push(gr[m]);
                    }
                gr = [];
            }
            w.push(no[9]);
            gr = [];
        } else {
            if (c.filter(val => val == no[8]).length == 1) {
                c.push(no[9])
            } else if (w.filter(val => val == no[8]).length == 1) {
                w.push(no[9])
            }
        }
    }
    if (c.length >= 5 || w.length >= 5) {
        ti=11;
        set11();
    }
}

function n7 () {
    get();
    B7 = B;
    D7 = D;
    if (D7 == 5) {
        c = [w[1], no[2], no[3], no[4], no[9]];
        ti = 11;
        set11();
    } else if (D7 == 0) {
        w = [w[1], no[2], no[3], no[4], no[9]];
        ti = 11;
        set11();
    } else {
        ou.value = [w[1], no[3], no[4], no[9], no[1]];
        ti+=1;
        if (D6 - D7 == 1) {
            c.push(no[1]);
        } else {
            w.push(no[1]);
        }
    }
    if (c.length >= 5 || w.length >= 5) {
        ti=11;
        set11();
    }
}

function n8 () {
    get();
    B8 = B;
    D8 = D;
    if (D8 == 5) {
        c = [w[1], no[3], no[4], no[9], no[1]];
        ti = 11;
        set11();
    } else if (D8 == 0) {
        w = [w[1], no[3], no[4], no[9], no[1]];
        ti = 11;
        set11();
    } else {
        ou.value = [w[1], no[4], no[9], no[1], no[2]];
        ti+=1;
        if (D6 - D8 == 1) {
            c.push(no[2]);
        } else {
            w.push(no[2]);
        }
    }
    if (c.length >= 5 || w.length >= 5) {
        ti=11;
        set11();
    }
}

function n9 () {
    get();
    B9 = B;
    D9 = D;
    if (D8 == 5) {
        c = [w[1], no[4], no[9], no[1], no[2]];
        ti = 11;
        set11();
    } else if (D8 == 0) {
        w = [w[1], no[4], no[9], no[1], no[2]];
        ti = 11;
        set11();
    } else {
        ti+=1;
        if (D6 - D9 == 1) {
            c.push(no[3]);
        } else {
            w.push(no[3]);
        }
    }
    if (c.length >= 5 || w.length >= 5) {
        ti=11;
        set11();
    }
}

function set11 () {
    if (c.length ==5) {
        if (c.filter(val => val == no[1]).length == 0 && w.filter(val => val == no[1]).length == 0) {
            w.push(no[1]);
        }
        if (c.filter(val => val == no[2]).length == 0 && w.filter(val => val == no[2]).length == 0) {
            w.push(no[2]);
        }
        if (c.filter(val => val == no[3]).length == 0 && w.filter(val => val == no[3]).length == 0) {
            w.push(no[3]);
        }
        if (c.filter(val => val == no[4]).length == 0 && w.filter(val => val == no[4]).length == 0) {
            w.push(no[4]);
        }
        if (c.filter(val => val == no[5]).length == 0 && w.filter(val => val == no[5]).length == 0) {
            w.push(no[5]);
        }
        if (c.filter(val => val == no[6]).length == 0 && w.filter(val => val == no[6]).length == 0) {
            w.push(no[6]);
        }
        if (c.filter(val => val == no[7]).length == 0 && w.filter(val => val == no[7]).length == 0) {
            w.push(no[7]);
        }
        if (c.filter(val => val == no[8]).length == 0 && w.filter(val => val == no[8]).length == 0) {
            w.push(no[8]);
        }
        if (c.filter(val => val == no[9]).length == 0 && w.filter(val => val == no[9]).length == 0) {
            w.push(no[9]);
        }
    } else { 
        if (c.filter(val => val == no[1]).length == 0 && w.filter(val => val == no[1]).length == 0) {
            c.push(no[1]);
        }
        if (c.filter(val => val == no[2]).length == 0 && w.filter(val => val == no[2]).length == 0) {
            c.push(no[2]);
        }
        if (c.filter(val => val == no[3]).length == 0 && w.filter(val => val == no[3]).length == 0) {
            c.push(no[3]);
        }
        if (c.filter(val => val == no[4]).length == 0 && w.filter(val => val == no[4]).length == 0) {
            c.push(no[4]);
        }
        if (c.filter(val => val == no[5]).length == 0 && w.filter(val => val == no[5]).length == 0) {
            c.push(no[5]);
        }
        if (c.filter(val => val == no[6]).length == 0 && w.filter(val => val == no[6]).length == 0) {
            c.push(no[6]);
        }
        if (c.filter(val => val == no[7]).length == 0 && w.filter(val => val == no[7]).length == 0) {
            c.push(no[7]);
        }
        if (c.filter(val => val == no[8]).length == 0 && w.filter(val => val == no[8]).length == 0) {
            c.push(no[8]);
        }
        if (c.filter(val => val == no[9]).length == 0 && w.filter(val => val == no[9]).length == 0) {
            c.push(no[9]);
        }
    }

    for (let index1 = 0; index1<=4; index1++) {
        for (let index2 = 0; index2<=4; index2++) {
            for (let index3 = 0; index3<=4; index3++) {
                for (let index4 = 0; index4<=4; index4++) {
                    for (let index5 = 0; index5<=4; index5++) {
                        if (index1 != index2 && index1 != index3 && index1 != index4 && index1 != index5 &&
                            index2 != index3 && index2 != index4 && index2 != index5 &&
                            index3 != index4 && index3 != index5 &&
                            index4 != index5) {
                            if (check([c[index1], c[index2], c[index3], c[index4], c[index5]])) {
                                cnums.push([c[index1], c[index2], c[index3], c[index4], c[index5]]);
                            }
                        }
                    }
                }
            }
        }
    }
    if (cnums.length == 0) {
        ou.value = "اطّلاعات وارد شده صحیح نمی‌باشد!";
        ou.style.fontFamily = "digital";
        setTimeout(new_game, 2500);
    } else if (B1 == 5 || B2 == 5 || B3 == 5 || B4 == 5 || B5 == 5 || B6 == 5 || B7 == 5 || B8 == 5 || B9 == 5) {
        ifpcwin = true;
    } else {
        set1 = cnums[0];
        ou.value = set1;
    }
}

function check (arr) {
    let var1 = false;
    if (D1 != false) {if ([no[0], no[1], no[2], no[3], no[4]].filter((val, ind) => val == arr[ind]).length == B1) {} else {var1 = true;}}
    if (D2 != false) {if ([no[1], no[2], no[3], no[4], no[5]].filter((val, ind) => val == arr[ind]).length == B2) {} else {var1 = true;}}
    if (D3 != false) {if ([no[2], no[3], no[4], no[6], no[1]].filter((val, ind) => val == arr[ind]).length == B3) {} else {var1 = true;}}
    if (D4 != false) {if ([no[3], no[4], no[7], no[1], no[2]].filter((val, ind) => val == arr[ind]).length == B4) {} else {var1 = true;}}
    if (D5 != false) {if ([no[4], no[8], no[1], no[2], no[3]].filter((val, ind) => val == arr[ind]).length == B5) {} else {var1 = true;}}
    if (D6 != false) {if ([no[9], no[1], no[2], no[3], no[4]].filter((val, ind) => val == arr[ind]).length == B6) {} else {var1 = true;}}
    if (D7 != false) {if ([no[w[1]], no[2], no[3], no[4], no[9]].filter((val, ind) => val == arr[ind]).length == B7) {} else {var1 = true;}}
    if (D8 != false) {if ([no[w[1]], no[3], no[4], no[9], no[1]].filter((val, ind) => val == arr[ind]).length == B8) {} else {var1 = true;}}
    if (D9 != false) {if ([no[w[1]], no[4], no[9], no[1], no[2]].filter((val, ind) => val == arr[ind]).length == B9) {} else {var1 = true;}}
    if (D11 != false) {if (set1.filter((val, ind) => val == arr[ind]).length == B11) {} else {var1 = true;}}
    return(!var1);
}

function n11 () {
    get();
    B11 = B;
    D11 = D;
    arr1 = [];
    for (let i = 0; i<cnums.length; i++) {
        if (check(cnums[i])) {
            arr1.push(cnums[i])
        }
    }
    cnums = arr1;
    if (B11 == 5) {
        ifpcwin = true;
    } else if (cnums.length == 0) {
        ou.value = "اطّلاعات وارد شده صحیح نمی‌باشد! 😱";
        ou.style.fontFamily = "digital";
        setTimeout(new_game, 2500);
    } else {
        set1 = cnums[0];
        ou.value = set1;
    }
}

function norand () {
    no = []
    let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let j = 9; j >= 0; j--) {
        no.push(arr2.splice(Math.floor(Math.random() * (j+1)) ,1)[0]);
    }
}
///////////////////////////////////////////////////////////////////////////

function usrand () {
    usno = []
    let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let j = 9; j >= 5; j--) {
        usno.push(arr2.splice(Math.floor(Math.random() * (j+1)) ,1)[0]);
    }
}

function ans (no1, no2, no3, no4, no5) {
    usB = 0;
    usD = 0;
    if (no1 == usno[0]) {usB++;}
    if (no2 == usno[1]) {usB++;}
    if (no3 == usno[2]) {usB++;}
    if (no4 == usno[3]) {usB++;}
    if (no5 == usno[4]) {usB++;}

    if (no1 == usno[0] || no1 == usno[1] || no1 == usno[2] || no1 == usno[3] || no1 == usno[4]) {usD++;}
    if (no2 == usno[0] || no2 == usno[1] || no2 == usno[2] || no2 == usno[3] || no2 == usno[4]) {usD++;}
    if (no3 == usno[0] || no3 == usno[1] || no3 == usno[2] || no3 == usno[3] || no3 == usno[4]) {usD++;}
    if (no4 == usno[0] || no4 == usno[1] || no4 == usno[2] || no4 == usno[3] || no4 == usno[4]) {usD++;}
    if (no5 == usno[0] || no5 == usno[1] || no5 == usno[2] || no5 == usno[3] || no5 == usno[4]) {usD++;}
    document.getElementById("usd").value = usD;
    document.getElementById("usb").value = usB;
    if (usB == 5) {
        ifuswin = true;
    }
}