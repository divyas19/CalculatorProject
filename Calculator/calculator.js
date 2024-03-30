let str = "";

// let elem = document.getElementsByClassName("button");
let elem = document.querySelectorAll(".button");

// Array.from(elem).forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         //Enter Logic
//     })
// })

let arr = [...elem];
arr.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        try {
            if (e.target.innerHTML === "=") {
                let ans = eval(str);

                str = "" + ans.toString();
                console.log(str);
                document.querySelector("input").value = str;
            } else if (e.target.innerHTML === "Clear") {
                str = "";
                console.log(str);
                document.querySelector("input").value = "";
            } else if (e.target.innerHTML === "Delete") {
                str = str.substring(0, str.length - 1);
                console.log(str);
                document.querySelector("input").value = str;
            } else {
                str = str + e.target.innerHTML; //If you have defined value attribute you can use e.target.value
                if (str.includes("x")) {
                    str = str.replace("x", "*");
                }
                console.log(str);
                document.querySelector("input").value = str;
                // document.querySelector(".value").innerHTML = str;
                // document.getElementsByClassName(".value").value = str;
            }
        } catch (error) {
            console.log("Error : " + error.message);
            str = "";
            console.log(str);
            document.querySelector("input").value = "";
            alert("Please enter correct expression");
        }
    });
});
