const scriptURL =
  "https://script.google.com/macros/s/AKfycbzDjaSkwqBrUGpMapkkO_mwjIgXUoYaDbUMSmQ-2MxZERUrOknlpm-tMYLmtRvGm7zE/exec"; // Thay bằng URL của bạn
const form = document.getElementById("bookingForm");
const resultMsg = document.getElementById("resultMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  // const data = Object.fromEntries(formData.entries());
  const data = {};
  formData.forEach((value, key) => (jsonData[key] = value));

  fetch(scriptURL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      resultMsg.innerHTML =
        "<div class='alert alert-success'>Đặt bàn thành công! Cảm ơn bạn.</div>";
      form.reset();
    })
    .catch((error) => {
      resultMsg.innerHTML =
        "<div class='alert alert-danger'>Lỗi gửi dữ liệu. Vui lòng thử lại.</div>";
      console.error("Error!", error.message);
    });
});
