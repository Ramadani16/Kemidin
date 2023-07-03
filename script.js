function validateForm() {
    var nama = document.getElementById("nama").value;
    var menu = document.getElementById("menu").value;
    var jumlah = document.getElementById("jumlah").value;

    if (nama === "" || menu === "" || jumlah === "") {
        alert("Harap isi semua field!");
        return false;
    }

    return true;
}