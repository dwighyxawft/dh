var loggedIn = localStorage.getItem("login");
if(typeof(loggedIn) == undefined || loggedIn == "false" || !loggedIn){
    location.href = "index.html";
}
 else{
    var tbody = document.querySelectorAll("tbody");
    function get_letters(){
        var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var string = "";
        for(var i = 0; i<9; i++){
            var chosenletter = letters[Math.floor(Math.random() * letters.length)];
            string+=chosenletter;
        }
        return string;
    }
    
      var third = [
  {p_code:"XQCTIOVIP", r_date: "2022/01/04", p_date: "2022/01/05", amount: "7,500", status: "Deposit"},
  {p_code:"PPTIOVIEX", r_date: "2022/02/04", p_date: "2022/02/05", amount: "7,500", status: "Deposit"},
  {p_code:"BAVTOVIEA", r_date: "2022/03/04", p_date: "2022/03/05", amount: "7,500", status: "Deposit"},
  {p_code:"CCAAOVIES", r_date: "2022/04/04", p_date: "2022/04/05", amount: "7,500", status: "Deposit"},
  {p_code:"QRCVBADXL", r_date: "2022/05/04", p_date: "2022/05/05", amount: "7,500", status: "Deposit"},
  {p_code:"RVBATCJKL", r_date: "2022/06/04", p_date: "2022/06/05", amount: "7,500", status: "Deposit"},
  {p_code:"KHTIOVIEX", r_date: "2022/07/04", p_date: "2022/07/05", amount: "7,500", status: "Deposit"},
  {p_code:"ACDIOVISA", r_date: "2022/08/06", p_date: "2022/08/07", amount: "7,500", status: "Deposit"},
  {p_code:"BCEIOFTBR", r_date: "2022/09/02", p_date: "2022/09/03", amount: "7,500", status: "Deposit"},
  {p_code:"ARESBKJRA", r_date: "2022/10/04", p_date: "2022/10/05", amount: "7,500", status: "Deposit"},
  {p_code:"BVETMHIMA", r_date: "2022/11/04", p_date: "2022/11/05", amount: "7,500", status: "Deposit"},
  {p_code:"RQHWSDXAK", r_date: "2022/12/04", p_date: "2022/12/05", amount: "7,500", status: "Deposit"}
];

var fourth = [
  {p_code:"ZXAQRQMRF", r_date: "2021/01/05", p_date: "2021/01/06", amount: "7,500", status: "Deposit"},
  {p_code:"DAMGJCGNA", r_date: "2021/02/06", p_date: "2022/02/07", amount: "7,500", status: "Deposit"},
  {p_code:"HPFHHVEBT", r_date: "2021/03/02", p_date: "2021/03/03", amount: "7,500", status: "Deposit"},
  {p_code:"KYTYGCOUY", r_date: "2021/04/07", p_date: "2021/04/08", amount: "7,500", status: "Deposit"},
  {p_code:"ZQNIAOQCP", r_date: "2021/05/05", p_date: "2021/05/06", amount: "7,500", status: "Deposit"},
  {p_code:"UEWBBUSSK", r_date: "2021/06/01", p_date: "2021/06/02", amount: "7,500", status: "Deposit"},
  {p_code:"OJKTOTNER", r_date: "2021/07/06", p_date: "2021/07/07", amount: "7,500", status: "Deposit"},
  {p_code:"JMYBGABDM", r_date: "2021/08/06", p_date: "2021/08/07", amount: "7,500", status: "Deposit"},
  {p_code:"KGOVBTBSP", r_date: "2021/09/03", p_date: "2021/09/04", amount: "7,500", status: "Deposit"},
  {p_code:"YFOTRHXGZ", r_date: "2021/10/04", p_date: "2021/10/06", amount: "7,500", status: "Deposit"},
  {p_code:"BYYIWAGBD", r_date: "2021/11/02", p_date: "2021/11/05", amount: "7,500", status: "Deposit"},
  {p_code:"EAQNHYSBQ", r_date: "2021/12/04", p_date: "2021/12/05", amount: "7,500", status: "Deposit"}
];

var second = [
  {p_code:"KCTIOVIEX", r_date: "2023/01/04", p_date: "2023/01/05", amount: "7,500", status: "Deposit"},
  {p_code:"MCDIOVIDE", r_date: "2023/02/06", p_date: "2023/02/07", amount: "7,500", status: "Deposit"},
  {p_code:"LCEIOFTBL", r_date: "2023/03/02", p_date: "2023/03/03", amount: "7,500", status: "Deposit"},
  {p_code:"FRESBKJRC", r_date: "2023/04/04", p_date: "2023/04/05", amount: "7,500", status: "Deposit"},
  {p_code:"TVETMHIMD", r_date: "2023/05/04", p_date: "2023/05/05", amount: "7,500", status: "Deposit"},
  {p_code:"RGNTMHISA", r_date: "2023/06/04", p_date: "2023/06/05", amount: "7,500", status: "Deposit"},
  {p_code:"BXETMHIRG", r_date: "2023/07/07", p_date: "2023/07/08", amount: "7,500", status: "Deposit"},
  {p_code:"AVTTMRIMK", r_date: "2023/08/02", p_date: "2023/08/03", amount: "7,500", status: "Deposit"},
  {p_code:"NOBSTGHBA", r_date: "2023/09/01", p_date: "2023/09/02", amount: "7,500", status: "Deposit"},
  {p_code:"NHRVBTCBL", r_date: "2023/10/12", p_date: "2023/10/13", amount: "10,500", status: "Deposit"},
  {p_code:"ABGHILOMT", r_date: "2023/11/07", p_date: "2023/11/08", amount: "10,500", status: "Deposit"},
  {p_code:"QRSWBVOLT", r_date: "2023/12/10", p_date: "2023/12/11", amount: "10,500", status: "Deposit"}
];

var first = [
  {p_code:"QQROBBSTZ", r_date: "2024/01/03", p_date: "2024/01/04", amount: "10,500", status: "Deposit"},
  {p_code:"QWERTYVBM", r_date: "2024/02/02", p_date: "2024/02/04", amount: "10,500", status: "Deposit"},
  {p_code:"LHGQFCTRA", r_date: "2024/03/01", p_date: "2024/03/03", amount: "10,500", status: "Deposit"},
  {p_code:"KYTYGCOFF", r_date: "2024/04/03", p_date: "2024/04/04", amount: "10,500", status: "Deposit"},
  {p_code:"QRVGBCDGN", r_date: "2024/05/04", p_date: "2024/05/05", amount: "10,500", status: "Deposit"},
  {p_code:"TRGBVFGEX", r_date: "2024/06/01", p_date: "2024/06/01", amount: "10,500", status: "Deposit"},
  {p_code:"BBBBGGGTQ", r_date: "2024/07/03", p_date: "2024/07/05", amount: "10,500", status: "Deposit"},
  {p_code:"LLGRWSTYY", r_date: "2024/08/03", p_date: "2024/08/04", amount: "10,500", status: "Deposit"}
];

var fifth = [
  {p_code:"XPQRAVTHY", r_date: "2025/01/03", p_date: "2025/01/04", amount: "10,500", status: "Deposit"},
  {p_code:"MKLUIEYTR", r_date: "2025/02/01", p_date: "2025/02/02", amount: "10,500", status: "Deposit"},
  {p_code:"WERTUIOPL", r_date: "2025/03/04", p_date: "2025/03/05", amount: "10,500", status: "Deposit"},
  {p_code:"ZXCVBNMLK", r_date: "2025/04/03", p_date: "2025/04/04", amount: "10,500", status: "Deposit"},
  {p_code:"ASDFGHJKL", r_date: "2025/05/05", p_date: "2025/05/06", amount: "10,500", status: "Deposit"}
];
   var arrs = [first, second, third, fourth, fifth];
    
    tbody.forEach(function(tab){
       if(tab.hasAttribute("data-option")){
        var option = tab.getAttribute("data-option");
        var chosen_array = arrs[Number(option)];
        var templates = "";
        for(var j=0; j<chosen_array.length;j++){
            templates += `<tr><td>${chosen_array[j].p_code}</td><td>${chosen_array[j].r_date}</td><td>${chosen_array[j].p_date}</td><td>${chosen_array[j].amount}</td><td>${chosen_array[j].status}</td></tr>`;
        }
        tab.innerHTML = templates;
       }
    })
    var links = document.querySelectorAll("button.nav-link");
    var pages = document.querySelectorAll("div.pagedivs");
    links.forEach(function(link){
       
        link.addEventListener("click", function(){
            var id = this.getAttribute("id");
        if(id != "logout"){
            for(var a = 0; a<links.length;a++){
                links[a].classList.remove("active");
            }
            this.classList.add("active");
           
           
            for(var b=0;b<pages.length;b++){
                pages[b].classList.add("d-none");
                if(pages[b].classList.contains(id)){
                    pages[b].classList.remove("d-none");
                }
            }
        }
        else{
            localStorage.setItem("login", false);
            location.href = "index.html";
        }
            
        })
    })
    
 }
