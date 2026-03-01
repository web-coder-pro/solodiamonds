// LOGIN
if(window.location.pathname.includes("admin.html")){
    if(localStorage.getItem("auth") !== "true"){
        window.location.href = "index.html";
    }
}

function login(){
    let pass = document.getElementById("password").value;
    if(pass === "ustoz123"){   // parolni o'zgartir mumkin
        localStorage.setItem("auth","true");
        window.location.href = "admin.html";
    }else{
        document.getElementById("error").innerText = "Parol noto'g'ri!";
    }
}

function logout(){
    localStorage.removeItem("auth");
    window.location.href = "index.html";
}

// BUYURTMALAR
let orders = [];

function addOrder(){
    let userId = document.getElementById("userId").value;
    let packageSelect = document.getElementById("package").value;

    if(userId === ""){
        alert("Foydalanuvchi ID kiriting!");
        return;
    }

    let order = {
        id: Date.now(),
        userId: userId,
        package: packageSelect,
        status: "Kutilmoqda"
    };

    orders.push(order);
    renderOrders();
    document.getElementById("userId").value = "";
}

function renderOrders(){
    let list = document.getElementById("ordersList");
    list.innerHTML = "";
    orders.forEach(order => {
        let li = document.createElement("li");
        li.innerHTML = `UserID: ${order.userId} | Paket: ${order.package} 💎 | Status: ${order.status} <button onclick="markSent(${order.id})">Yuborildi</button>`;
        list.appendChild(li);
    });
}

function markSent(id){
    let order = orders.find(o => o.id === id);
    if(order){
        order.status = "Yuborildi";
        renderOrders();
    }
}