(()=>{const e=document.querySelector("#h-signIn"),l=document.querySelector("#h-signUp"),t=document.querySelector("#block-signIn"),a=document.querySelector("#block-signUp"),o=document.querySelector("#username"),r=document.querySelector("#mail"),c=document.querySelector("#password"),n=document.querySelector("#btn"),s=document.querySelector("#email"),u=document.querySelector("#check-password");document.querySelector("#signIn-btn").addEventListener("click",(()=>{if(localStorage.getItem("username")){const e=localStorage.getItem("mail"),l=localStorage.getItem("password");s.value===e&&u.value===l?(s.value="",u.value="",alert("Вхід пройшов успішно")):alert("Будь ласка, введіть справжні дані від вашого аккаунту")}else alert("Перед тим як ввійти в свій аккаунт, зареєструйте його")})),n.addEventListener("click",(()=>{o.value.length>0&&r.value.length>0&&c.value.length>8?r.value.endsWith("@gmail.com")?(localStorage.setItem("username",o.value),localStorage.setItem("mail",r.value),localStorage.setItem("password",c.value),o.value="",r.value="",c.value="",alert("Реєстрація пройшла успішно")):alert("Будь ласка, введіть ваш поштовий адрес"):alert("Будь ласка, заповніть поля")})),e.addEventListener("click",(()=>{l.style.color="gray",e.style.color="aqua",t.classList.remove("none"),a.classList.add("none")})),l.addEventListener("click",(()=>{e.style.color="gray",l.style.color="aqua",t.classList.add("none"),a.classList.remove("none")}))})();