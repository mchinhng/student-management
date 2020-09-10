var danhSachSinhVien = new DanhSachSinhVien();

var validate = new Validation();

function DomID(id)
{
    var element = document.getElementById(id);
    return element;
}

function ThemSinhVien()
{
    var masv = DomID("masv").value;
    var hoten = DomID("hoten").value;
    var email = DomID("email").value;
    var loi = 0;
    if(KiemTraDauVaoRong("masv",masv) == true)
    {
        loi++;
    }
    if(KiemTraDauVaoRong("hoten",hoten) == true)
    {
        loi++;
    }
    if(validate.KiemTraEmail(email))
    {
        document.getElementById("email").style.borderColor = "green";
    }
    else
    {
        document.getElementById("email").style.borderColor = "red";
        loi++;
    }
    if(loi != 0)
    {
        return ;
    }
    var sinhvien = new SinhVien(masv,hoten,email);
    danhSachSinhVien.ThemSinhVien(sinhvien);
    CapNhatDanhSachSV(danhSachSinhVien);
    console.log(danhSachSinhVien);
}


function KiemTraDauVaoRong(ID,value)
{
    if(validate.KiemTraRong(value) == true)
    {
        DomID(ID).style.borderColor = "red"; 
        return true;                 
    }
    else
    {
        DomID(ID).style.borderColor = "green";  
        return false;
    } 
}


function CapNhatDanhSachSV (DanhSachSinhVien)
{
    var lstTableSV = DomID("tbodySinhVien");
    lstTableSV.innerHTML = "";
    for(var i = 0; i <  DanhSachSinhVien.DSSV.length ; i++ )
    {
        var sv = danhSachSinhVien.DSSV[i];

        var trSinhVien = document.createElement("tr");
        trSinhVien.id = sv.MaSV;
        trSinhVien.className = "trSinhVien";
        trSinhVien.setAttribute("onclick","ChinhSuaSinhVien('"+sv.MaSV+"')");

        var tdCheckBox = document.createElement('td');
        var ckbMaSinhVien = document.createElement('input');
        console.log(ckbMaSinhVien);
        ckbMaSinhVien.setAttribute("class","ckbMaSV");
        ckbMaSinhVien.setAttribute("type","checkbox");
        ckbMaSinhVien.setAttribute("value",sv.MaSV);
        tdCheckBox.appendChild(ckbMaSinhVien);

        var tdMaSV = TaoTheTD("MaSV",sv.MaSV);
        var tdHoTen = TaoTheTD("HoTen",sv.HoTen);
        var tdEmail = TaoTheTD("Email",sv.Email);

        trSinhVien.appendChild(tdCheckBox);
        trSinhVien.appendChild(tdMaSV);
        trSinhVien.appendChild(tdHoTen);
        trSinhVien.appendChild(tdEmail);

        lstTableSV.appendChild(trSinhVien);
    }

}

function TaoTheTD (className, value)
{
    var td = document.createElement("td");
    td.className = className;
    td.innerHTML = value;
    return td;
}

function XoaSinhVien()
{
    var lstMaSV = document.getElementsByClassName("ckbMaSV");

    var lstMaSVDuocChon = [];
    for(i = 0 ; i<lstMaSV.length ;i++)
    {
        console.log(lstMaSV[i]);
        if(lstMaSV[i].checked) 
        {
            lstMaSVDuocChon.push(lstMaSV[i].value);
        }
    }
    danhSachSinhVien.XoaSinhVien(lstMaSVDuocChon);
    CapNhatDanhSachSV(danhSachSinhVien);
}


function TimKiemSinhVien()
{
    var tukhoa = DomID("tukhoa").value;
    var lstDanhSachSinhVienTimKiem = danhSachSinhVien.TimKiemSinhVien(tukhoa);
    CapNhatDanhSachSV(lstDanhSachSinhVienTimKiem);
}

function ChinhSuaSinhVien(masv)
{
   
    var sinhvien = danhSachSinhVien.TimSVTheoMa(masv);
    if(sinhvien!=null)
    {
        DomID("masv").value = sinhvien.MaSV;
        DomID("hoten").value = sinhvien.HoTen;
        DomID("email").value = sinhvien.Email;
    }

}

function LuuThongTin()
{
    var masv = DomID("masv").value;
    var hoten = DomID("hoten").value;
    var email = DomID("email").value;
    var loi = 0;

    if(KiemTraDauVaoRong("masv",masv) == true)
    {
        loi++;
    }
    if(KiemTraDauVaoRong("hoten",hoten) == true)
    {
        loi++;
    }
    if(validate.KiemTraEmail(email))
    {
        document.getElementById("email").style.borderColor = "green";
    }
    else
    {
        document.getElementById("email").style.borderColor = "red";
        loi++;
    }
    if(loi != 0)
    {
        return ;
    }
    var sinhvien = new SinhVien(masv,hoten,email);
    danhSachSinhVien.SuaSinhVien(sinhvien);
    CapNhatDanhSachSV(danhSachSinhVien);
}