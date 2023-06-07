/**bài tập 1
 * đầu vào: người dùng nhập vào:
 * + điểm chuẩn : diemChuan
 * + điểm môn thứ nhất, hai, ba: diem1 , diem2, diem3
 * + đối tượng: slcdoiTuong
 * + khu vực: slckhuVuc
 * xử lí:
 * tính tổng điểm: 
 * tongDiem = diem1 + diem2 + diem3 + slckhuVuc + slcdoiTuong
 * nếu tổng điểm >= điểm chuẩn và 3 môn đều > 0 thì in ra kết quả đậu
 * ngược lại
 */
document.getElementById("btnketQua").onclick = function() {
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var slckhuVuc = document.getElementById("slckhuVuc").value * 1;
    var slcdoiTuong = document.getElementById("slcdoiTuong").value * 1;
    var diem1 = document.getElementById("diem1").value * 1;
    var diem2 = document.getElementById("diem2").value * 1;
    var diem3 = document.getElementById("diem3").value * 1;
    var tongDiem = diem1 +  diem2 + diem3 + slckhuVuc + slcdoiTuong;
    var Dau = "<p class='alert alert-success' >Bạn đã đậu. Tổng điểm là:" + tongDiem + "</p>";
    var Rot = "<p class='alert alert-success' >Bạn đã rớt. Tổng điểm là:" + tongDiem + "</p>";
    if (tongDiem >= diemChuan && diem1 > 0 && diem2 > 0 && diem3 > 0) {
        document.getElementById("footerKetQua").innerHTML = Dau;
    } else {
        document.getElementById("footerKetQua").innerHTML = Rot;
    }
};
/**
 * bài tập 2
 * đầu vào: 
 * + nhập họ tên và số điện sử dụng: hoTen , soKw
 * xử lí:
 * nếu số kw lớn hơn 0 và nhỏ hơn hoặc 50: tienDien = soKw * 500;
 * nếu số kw > 50 và <= 100 :  tienDien = 50 * 500 + (tienDien - 50) * 650
 * nếu số kw > 100 & <= 200: tienDien = 50 * 500 + 50 * 650 + (tienDien - 100) * 850;
 * nếu số kw > 200 & <= 350: tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100
 * nếu số kw > 350: tienDien =  50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300
 * đầu ra
 * in kết quả tính được ra thẻ p
 * */
document.getElementById("btnTinhTienDien").onclick = function (){
    var hoTen = document.getElementById("hoTen").value
    var soKw = document.getElementById("soKw").value * 1;
    var tienDien = 0;
    var numberFormat = new Intl.NumberFormat("vn-VN");
     
     if (soKw > 0 && soKw <= 50) {
        tienDien = soKw * 500; 
    } else if (soKw > 50 && soKw <= 100 ) {
        tienDien = 50 * 500 + (soKw - 50) * 650;
    } else if ( soKw > 100 && soKw <= 200 ) {
        tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw > 200 && soKw <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } else if (soKw > 350) {
        tienDien =  50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    } else {
        alert("vui long nhập số điện phù hợp")
    }       
     var pResult = document.getElementById("pResult");
     var result = `Họ tên: ${hoTen} , Tiền điện là: ${numberFormat.format(tienDien)}` ;
     pResult.innerHTML = result;
} ;
/**
 * bài tập 3
 * + đầu vào: nhâp vào họ tên, tổng thu nhập năm và số người phụ thuộc
 * xử lí
 * + tính thu nhập chịu thuế : var thuNhapChiuThue = tongThuNhap - 4e+6 - soNguoi * 16e+5
 * + so sánh thu nhập chịu thuế với các mốc r nhân với mức % thuế tương ứng
 * đầu ra
 * + in kết quả ra thẻ p
 */
document.getElementById("btnTinhThue").onclick = function () {
    var hoVaTen = document.getElementById("hoVaTen").value;
    var tongThuNhap = document.getElementById("tongThuNhap").value * 1;
    var soNguoi = document.getElementById("soNguoi").value * 1;
    var tienThue = 0;
    var numberFormat = new Intl.NumberFormat("vn-VN");
    var thuNhapChiuThue = tongThuNhap - 4e+6 - soNguoi * 16e+5
    if (thuNhapChiuThue <= 6e+7) {
        tienThue = thuNhapChiuThue * 0.05
    } else if (thuNhapChiuThue > 6e+7 && thuNhapChiuThue <= 12e+7) {
        tienThue = thuNhapChiuThue * 0.1;
    } else if (thuNhapChiuThue > 12e+7 && thuNhapChiuThue <= 21e+7) {
        tienThue = thuNhapChiuThue * 0.15;
    } else if (thuNhapChiuThue > 21e+7 && thuNhapChiuThue <= 384e+6) {
        tienThue = thuNhapChiuThue * 0.2;
    } else if ( thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
        tienThue = thuNhapChiuThue * 0.25;
    } else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 96e+7) {
        tienThue = thuNhapChiuThue * 0.3;
    } else if (thuNhapChiuThue > 96e+7) {
        tienThue = thuNhapChiuThue * 0.35;
    } else {
        alert("số tiền điền vào k hợp lệ")
    }
    var result = `Họ tên: ${hoVaTen} , Tiền thuế TNCN là: ${numberFormat.format(tienThue)} VND` ;
        pKetQua.innerHTML = result;
};
/**
 * bài tập 4
 */
//nhà dân
var hoaDon_NhaDan = 4500;
var dichVu_NhaDan = 20500;
var kenhCaoCap_NhaDan = 7500;
//doanh nghiệp
var hoaDon_DoanhNghiep = 15000;
var dichVu_DoanhNghiep = 75000;
var kenhCaoCap_DoanhNghiep = 50000;

function myFunction(event) {
  var ketNoi =  document.getElementById("ketNoi")
    var X = event.target.value

    if (X === "doanhNghiep" ) {
        ketNoi.style.display = "block";
    } else {
        ketNoi.style.display = "none";
    }
  };
  
function tinhTienCap () {
    var tongTien = 0;
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenh = document.getElementById("soKenh").value * 1;
    var ketNoi = document.getElementById("ketNoi").value * 1;
   var doiTuong = document.getElementById("doiTuong").value;
   var numberFormat = new Intl.NumberFormat("vn-VN");

  if (doiTuong === "doanhNghiep") {
    if (ketNoi <= 10) {
        tongTien = hoaDon_DoanhNghiep + dichVu_DoanhNghiep + kenhCaoCap_DoanhNghiep * soKenh;
    } else if (ketNoi > 10) {
        tongTien = hoaDon_DoanhNghiep + dichVu_DoanhNghiep + (ketNoi - 10) * 5000 + kenhCaoCap_DoanhNghiep * soKenh;
    }
  } else {
     tongTien =hoaDon_NhaDan + dichVu_NhaDan + soKenh * kenhCaoCap_NhaDan;
    }
    var result = `Mã khách hàng: ${maKhachHang} , Tiền cáp là: $ ${numberFormat.format(tongTien)} ` ;
    pTienCap.innerHTML = result;
};


