// document.write("Hello")
function xuly(xlso)
{
    var xtso = "";
    for (var t = 0; t <xlso.length; t++)
    {
        var khu = 28;
        var sl = 0;
        xtso += xlso[t];
        if (xlso[t] ==".")
        {
            for (var r = t+1;t < xlso.length; r++)
            {
                sl++;
                xtso += xlso[r];
                if (sl > 1)
                {
                    khu = 29;
                    break;
                }
            }
        }
        if (khu > 28)
            break;
    }
    return(xtso);
}


function In(so) {
    document.getElementById("xuat").innerText = so;
}

function Xt(so) {
    document.getElementById("tam").innerText = so;
}

var lao = document.getElementsByClassName("so");
var bang = document.getElementsByClassName("bang");
var xoa = document.getElementsByClassName("xoa");
var xoa1 = document.getElementsByClassName("xoa1");

var gia_tri;
gia_tri = "0";
In(gia_tri);
Xt(gia_tri);

function hien_thi()
{
    var kq_cuoi;
    kq_cuoi = eval(gia_tri);
    gia_tri = kq_cuoi.toString();
    gia_tri = xuly(gia_tri);
    In(gia_tri);
    Xt(gia_tri)
}

function xuat()
{
    var kq;
    kq = this.id;
    if (kq == 0 && gia_tri == 0)
    {
        kq = "";
    }
    if ((kq == "*" || kq == "/") && gia_tri == "0")
    {
        kq = "";
        gia_tri = "0";
    }
    if (gia_tri == "0" && kq != "0" && kq !="")
    {    
        gia_tri = "";
    }
    if (gia_tri[gia_tri.length - 1] == "-" || gia_tri[gia_tri.length - 1] == "+" 
    || gia_tri[gia_tri.length - 1] == "*" ||gia_tri[gia_tri.length - 1] == "/")
    {
        if (kq =="-" || kq =="+" || kq =="*" || kq =="/")
        {
            kq = "";
        }
    }
    gia_tri = gia_tri + kq;
    Xt(gia_tri);
}

function del()
{
    gia_tri = "0"
    In(gia_tri)
    Xt(gia_tri)
}

function del1()
{
    var gia_tri_ltr = "";
    for (var t=0; t<gia_tri.length - 1;t++)
    {
        gia_tri_ltr += gia_tri[t];
    }
    gia_tri = "";
    gia_tri = gia_tri_ltr;
    if (gia_tri.length == 0)
    {
        gia_tri = "0";
    }
    Xt(gia_tri);
}


for (var i = 0; i < lao.length; i++ )
{
    lao[i].addEventListener('click' , xuat)
}

bang[0].addEventListener('click', hien_thi)
xoa[0].addEventListener('click', del)
xoa1[0].addEventListener('click', del1)