document.querySelector("#orderButton1").addEventListener("click", () => {
    document.querySelector("#form").classList.toggle("popupOrderVisibal");
});
document.querySelector("#orderButton2").addEventListener("click", () => {
    document.querySelector("#form").classList.toggle("popupOrderVisibal");
});
document.querySelector("#form").addEventListener("submit", () => {
    document.querySelector("#form").classList.remove("popupOrderVisibal");
});
document.querySelector(".form-conteiner").addEventListener("click", (e) => {
    if (e.target === document.querySelector(".form-conteiner")) {
        document.querySelector("#form").classList.remove("popupOrderVisibal");
    }
});
document.querySelector("#buttonCloseModal").addEventListener("click", () => {
    document.querySelector("#form").classList.remove("popupOrderVisibal");
});

document.querySelector('body.edit .header__top div:nth-child(2)').addEventListener('mouseenter', () => {
    document.querySelector('body.edit .productionImg').style.display = 'block';
    document.querySelector('body.edit .productionText').style.display = 'none';
    document.querySelector('body.edit .editText').style.display = 'block';
    document.querySelector('body.edit .editImg').style.display = 'none';
  });
  
  document.querySelector('body.edit .header__top div:nth-child(2)').addEventListener('mouseleave', () => {
    document.querySelector('body.edit .productionImg').style.display = 'none';
    document.querySelector('body.edit .productionText').style.display = 'block';
    document.querySelector('body.edit .editText').style.display = 'none';
    document.querySelector('body.edit .editImg').style.display = 'block';
  });
  
  document.querySelector('body.edit .header__top div:nth-child(3)').addEventListener('mouseenter', () => {
    document.querySelector('body.edit .creationImg').style.display = 'block';
    document.querySelector('body.edit .creationText').style.display = 'none';
    document.querySelector('body.edit .editText').style.display = 'block';
    document.querySelector('body.edit .editImg').style.display = 'none';
  });
  
  document.querySelector('body.edit .header__top div:nth-child(3)').addEventListener('mouseleave', () => {
    document.querySelector('body.edit .creationImg').style.display = 'none';
    document.querySelector('body.edit .creationText').style.display = 'block';
    document.querySelector('body.edit .editText').style.display = 'none';
    document.querySelector('body.edit .editImg').style.display = 'block';
  });