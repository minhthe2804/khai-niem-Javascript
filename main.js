//khai niem da hoc
// typeof kiem tra xem no la kieu du lieu gi:

// ++i tang len roi moi gan phan tu
// i++ gan truoc roi moi tang phan tu sau

//so sanh tuyet doi : === !===

// lam viec voi chuoi
//cu phap goi tenbien(myString).
//length: do dai
//indexOf: tim kiem vi tri
//slice: cat chuoi
//replace:tim kiem mot tu va thay the bang mot tu moi
//trim:rut gon chu lai ke ca co khoang trang
//spilit: cat mot chuoi thanh array nhung voi dieu kien la tim diem chung
//charAt: tim kiem vi tri va tra ve chu do

// lam viec voi mang
// cach su dung: tenmang.tostring()
//to string: chuyen doi mang thanh chuoi
//join: chuyen doi mang thanh chuoi
//pop: lay ra phan tu vao cuoi mang
//push: them phan tu cuoi mang
//shift: Lay phan tu dau mang
//Unshift: them phan tu dau mang
//splice: cat (thamsodau(vitricat),thamsohai(soluongbanmuonxoa,hoackhongxoa thi chen them)
//concat: noi mang
// slice:cat mot vai phan tu hoac het
// includes: kiem tra xem co phan tu do trong mang khong
// cach in ra: console.log(tenmang.tostring())

// lam viec voi bien
// cach khoi tao bien
// var ten = gan gia tri

//cach khoi tao ham
//cach 1
//var ten = function(truyen vao mot tham so){}
//cach 2
// function ten(truyen vao mot tham so) {
// var ten = khoi tao mot bien ben trong
//code o day
//console.log()
//return
//  }
// var result = ten(tham so truyen)
// ten(tham so truyen)
// console.log(ten(thamsotruyen))

// cach khoi tao object
// var ten = {
//name : "Minh The"
//age: 18
//address: "Hoa Binh"
//them bien vao object: [ten bien] : value
// khoi tao ham trong object: getName = function(){
//return this.name
// }
// }
//cach 1
//them key-value: ten.sdt = 0383395765
//cach 2
// ten ["key"] = 0393395765
//cach in ra: console.log(ten) hoac neu tung phan tu console.log(ten.name)
//xoa: delete ten.name
// cach them bien vao object: var ten = "key"

// object constructor
// cach khoi tao
// phuong thuc chung
//  functiton User(tham so truyen vao){
//this.firstName = firstName
//this.lastName = lastName
//this.avatar = avatar
// khoi tao fucnction: this.getName(){
//return '${this.firstname} ${this.lastName}'
//}
//}
//khoi tao
// var user = new user(tham so can truyen)
// var user2 = new user(tham so can truyen)
//them key-value
// author.title = "..."
// user.comment= "...."
// in ra : console.log(author), console.log(user) hoac in ra phan tu console.log(author.key)
// in ra funcition trong object: console.log(author.getName()), console.log(user.getName())

// object prototype : se duoc ke thua cac key-value cua phuong thuc chung va se co them thuoc tinh moi nhung nam ngoai phuong thuc chung(giong nhu la lop con ke thua lop cha)
// cach khoi tao
// User.prototype.className = "F8"
// khoi tao function ben trong: User.prototype.getClassName = function(){
// return this.className
//}
// var user = new user(tham so can truyen)
// var user2 = new user(tham so can truyen)
// cach in ra: console.log(user.className) va console.log(user2.className)
// cach in ra function trong object prototype: console.log(user.getClassName())

// Data object: giup lay ra thoi gian hien tai
// cach khoi tao: var date = new Date(); Object date da duoc xay dung san roi
// cach lay tung key-value trong objcet Date: var year = date.getFullYear(), var month = date.getMounth(), var day = date.getDate()
// cach in ra: console.log(date) hoac tung phan tu console.log('${day} ${month} ${year}')

//toan tu ba ngoi: var result = course.coin > 0 ? '${course.coin} Coins' : 'Free', console.log(result)
// gan 1 bien thu 3 de so sanh

// vong lap for in:
// var myInfo = {
//name: "Minh The"
//age: 21
//address: " Hoa Binh"
//}
// for( var key in myInfo) {
//console.log(key) hoac lay ra value cua key console.log(myInfo[key])
//}

// vong lap for of:
// var myInfo = {
//name: "Minh The"
//age: 21
//address: " Hoa Binh"
//}
// for( var value of Object.values(myInfo) {
//console.log(value)
//}
// for( var value of Object.keys(myInfo) {
//console.log(myInfo[value])
//}

// Math
// Math.Pi: in ra so pi
// Math round(): lam tron so neu nho hon 5 thi lam tron xuong con lon hon 5 thi lam tron len
// Math.abs(): lay gia tri tuyet doi
// Math.ceil(): lam tron so len
// Math.floor:lam tron so xuong
// Math.random(): lay ngau nhien mot so < 1 , vd:0,1123 0,2335 0,3353 0,35 0,5355...........
// var random = math.floor(math.random() * 10) lay ngau nhien so tu 1 den 9
// Math min(): lay so nho nhat trong mot day so hay mang
// Math max(): lay so lon nhat
//

// callback:
// phai la ham
// phai co tham so truyen vao
// phai duoc goi lai
// vi du:
//param = myCallback
// funciton myFuncition(param) {
//param("Hoc lap trinh")  : goi lai myCallback
//}
// thuc thi va tra ve ket qua cuoi
// funciton myCallback(value) {
//console.log("value: ", value)
//}
// myFuncition(myCallback)
//

// cach hoat dong cu the cua Map()
// Array.prototype.map = function (callback) {
//     var output = [],
//         array = this.length;
//     for (var i = 0; i < array; i++) {
//         var result = callback(this[i], i);
//         output.push(result);
//     }
//     return output;
// };
// var courses = ["Javacript", "Php", "Ruby"];
// var html = courses.map(function (indext, course) {
//     return <h2>${course}</h2>;
// });
// console.log(html.join(""));
//

// cach hoat dong cu the cua forEach()
// Array.prototype.forEach = function (callback) {
//     for(var index in this) {
//         if(this.hasOwnProperty(index)){
// callback(this[index], index)
//         }
//     }
// var courses = ["Javacript", "Php", "Ruby"];
// var html = courses.forEach(function (indext, course) {
//     console.log(course,index);
// });

// cach hoat dong cu the cua filter
// Array.prototype.filter = function (callback) {
//     var output = false
//     for (var index in this) {
//         if (this.hasOwnProperty) {
//             var result = callback(this[index], index);
//             if(result >== 680){
//                 output = true
//             }
//         }
//     }
//     return output;
// };
// var courses = [
//     {
//         id: "1",
//         coin: 680,
//     },
//     {
//         id: "2",
//         coin: 800,
//     },
//     {
//         id: "2",
//         coin: 680,
//     },
// ];

// var html = courses.filter(function (course, index) {
//     return course.coin > 500;
// });

// cach hoat dong cu the cua some
// Array.prototype.some = function (callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty) {
//             if (callback(this[index], index) === true) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

// var courses = [
//     {
//         id: "1",
//         coin: 680,
//     },
//     {
//         id: "2",
//         coin: 800,
//     },
//     {
//         id: "2",
//         coin: 680,
//     },
// ];

// var html = courses.some(function (course, index) {
//     return course.coin === 680;
// });

// cach lam viec voi mang(tiep)

var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 250,
    },
    {
        id: 2,
        name: "Html ,Css",
        coin: 0,
    },
    {
        id: 3,
        name: "Python",
        coin: 250,
    },
    {
        id: 4,
        name: "Ruby",
        coin: 0,
    },
    {
        id: 5,
        name: "Javascript",
        coin: 0,
    },
];
// forEach: lay ra tat ca phan tu cua mang
courses.forEach(function (course) {
    console.log(course);
});
//

// evenry:kiem tra phan tu voi dieu kien la tat ca phan tu phai dung voi dieu kien do
var isEven = courses.every(function (course) {
    return course.coin === 0;
});

console.log(isEven);
//

// some:kiem tra phan tu voi dieu kien la chi can 1 phan tu phai dung voi dieu kien do
var isSome = courses.some(function (course) {
    return course.coin === 0;
});

console.log(isSome);
//

// find:tim kiem va chi in ra 1 phan tu neu dung voi dieu kien
var findCourse = courses.find(function (course) {
    return course.name === "Javascript";
});

console.log(findCourse);
//

// filter:tim kiem va in ra tat ca phan tu neu dung voi dieu kien
var findCourse = courses.filter(function (course) {
    return course.name === "Javascript";
});

console.log(findCourse);
//

// map: lay ra phan tu trong mang va thay the chung thanh mot thanh phan moi
// c1
var mapCourse = courses.map(function (course) {
    return {
        id: course.id,
        name: `Khóa học: ${course.name}`,
        coin: course.coin,
    };
});

console.log(mapCourse);

// c2
// function newCourses(course) {
//     return {
//         id: course.id,
//         name: `Khóa học: ${course.name}`,
//         coin: course.coin,
//     };
// }

// var mapCourse = courses.map(newCourses);

// console.log(mapCourse);
//

//reduce: dung de tra ve mot gia tri duy khi no tinh toan het trong array(luu y can phai co gia tri khoi tao) hoac co trong hop neu muon tra ve cung mot gia tri co the khong can gia tri khoi tao
// c1
// gia tri truyen vao function phai la mot gia tri khoi tao va phan tu con cua mang do
var totalCourse = courses.reduce(function (total, course) {
    return total + course.coin;
}, 0);

console.log(totalCourse);

//c2;
function newCourses(total, course) {
    return total + course.coin;
}

var totalCourse = courses.reduce(newCourses, 0);

console.log(totalCourse);
//

// bai tap reduce
var deptpath = [1, 2, 3, 4, [5, 6, 8, 9]];
// output: o day la gia tri khoi tao la chuoi rong []
var newpath = deptpath.reduce(function (output, item) {
    return output.concat(item);
}, []);

console.log(newpath);
//

var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                name: "html, css",
            },
            {
                id: 2,
                name: "Javascript",
            },
        ],
    },
    {
        topic: "back-end",
        courses: [
            {
                id: 1,
                name: "nodejs",
            },
            {
                id: 2,
                name: "nodejs",
            },
        ],
    },
];

var newTopics = topics.reduce(function (output, topic) {
    return output.concat(topic.courses);
}, []);

console.log(newTopics);

// cach lam viec voi DOM
// DOM gom 3 thanh phan la: element atribute text

// cach lay : var tenbien = document.getById("h1");
//  element ma lay truc tiep thi phai hien ro ra o man hinh devtool khi kiem tra
//  vi du nhu <h1 id= "heading 2 class = "heading"> heding </h1>;

// khi lay phan tu va luu vao html collection thi se nhu nay
// vi du [h1#heading,.......]

// document.getElementById()  lay element dung id dat ten (luu y la lay truc tiep element do va chi lay 1 neu co cung ten cung chi lay 1)

//  document.getElementsByClassName() lay element dung class dat ten
//  (luu y la khong lay truc tiep element ma lay nhieu phan tu co cung ten va luu vao html collection nhu duoc luu vao mang)
// neu muon truy xuat truc tiep phai dung vong for duyet qua tung phan tu va in truc tiep ra hoac co the truy xuat vi tri truc tiep

//  document.getElementsByTagName() lay element ten the
//  (luu y la khong lay truc tiep element ma lay nhieu phan tu co cung ten the va luu vao html collection nhu duoc luu vao mang)
// neu muon truy xuat truc tiep phai dung vong for duyet qua tung phan tu va in truc tiep ra

// document.querySelector()  vd: .ten class do
// (chi lay 1 phan tu Element truc tiep cho dung trung ten cung chi lay 1 giong nhu khai niem buyID)

//document.querySelectorAll()  vd: .ten class do
// (lay tat ca phan tu duoc dat ten giong nhau, khong lay truc tiep,
//  luu vao html collection muon lay truc tiep thi cung se phai dung vong for de duyet )

// html colecction
// document.forms duoc dung de lay the form
// muon lay truc tiep thi document.forms([0]) hoac document.forms(["form-2"]) tuy vao cach dat ten
//

// them sua xoa Attribute

var headingElement = document.querySelector("h1");
// them attribute phai dung voi thuoc tinh cua the do: vi du nhu the a thi phai di voi href, h1 phai di voi title class id
headingElement.title = "heading";
headingElement.id = "heading";
headingElement.className = "heading";

// them atribute khong dung thuoc tinh
headingElement.setAttribute("data", "test-data");
headingElement.setAttribute("href", "link");

// lay atribute ra
console.log(headingElement.title); // voi dieu kien la phai phu hop voi thuoc tinh cua the do
console.log(headingElement.id);
console.log(headingElement.className);

headingElement.getAttribute("data"); // co the lay attribute ke ca phu hop hay khong phu hop voi thuoc tinh deu lay ra duoc mien la da duoc dat ten truoc do
headingElement.getAttribute("href");
//

// them va lay text
var headingElement = document.querySelector(".heading");
//them
headingElement.innerText = "heading text";
headingElement.textContent = "heading text";
// lay ra
console.log(headingElement.innerText); // luu y no se lay ra nhung gi chung ta thay tren giao dien web
console.log(headingElement.textContent); // no se lay ra text node giong nhu nhung gi chung ta code ke ca khoang trang
//

// them element vao element
var headingElement = document.querySelector("-box1");
// them: co the them ca element,attribute va text
headingElement.innerHTML = '<h1 class = "heading"> heading text </h1>';
// luu y neu nhu co mot the gi ben trong thi no co the ghi de the do khi them vao
headingElement.outerHTMLHTML = '<h1 class = "heading"> heading text </h1>';
//  luu y la khi them no ghi de luon element cha cua no
//  lay ra
console.log(headingElement.innerHTML);
console.log(headingElement.outerHTML);
//

// DOM style

var boxElement = document.querySelector(".box");

// them vao

boxElement.style.width = "100";
boxElement.style.height = "200";
boxElement.style.backgroundColor = "red";

// cach them ngan hon
Object.assign(boxElement.style, {
    with: "100",
    height: "200",
    backgroundColor: "red",
});

// cach lay ra
console.log(boxElement.style); // lay ra tat ca thuoc tinh
console.log(boxElement.style.width); // lay ra thuoc tinh width thuoc tinh khac tuonng tu
//

// ClassList property
var boxElement = document.querySelector(".box");
// them vao
// add
boxElement.classList.add("red"); // them mot class vao cai chung ta dang document
// contains: kiem tra xem co class do trong class chung ta dang document khong
boxElement.classList.contains("red");
//remove: xoa class do di, neu khong co trong document thi thoi
boxElement.classList.remove("red");
//toggle: neu nhu co class thi xoa di con khong co thi them vao
boxElement.classList.toggle("red");
// lay ra
console.log(boxElement.classList.add("red"));
console.log(boxElement.classList.contains("red"));
//

// DOM Event
// Su kien onclick
var h1Element = document.querySelector("h1");

// cach lang nghe su kien va code
// e = event mouse even: in console.log(e) ra de xem duoc cac gia tri khac neu can nhung e.target co the lay duoc ra element node do
//neu in thang ra h1Element se xay ra nhieu van de loi
h1Element.onclick = function (e) {
    console.log(e.target);
};
// truong hop khac
// cach chon nhieu the h1 va click vao the h1 nao thi the do moi lang nghe su kien
var h1Element = document.querySelectorAll("h1");
for (var i = 1; h1Element.length; ++i) {
    h1Element[i].onclick = function (e) {
        console.log(e.target);
    };
}

// Su kien oninput va onchange
// oninput la khi ban nhap vao o input se lang nghe duoc su kien va se in ra tu chung ta nhap luon nhap den dau in den do
// onchange la khi ban khong click chuot vao o do nua thi no se hien chu chung ta nhap
// va luu y phai co su thay doi so voi lan nhap truoc thi lan nhap sau moi duoc in ra
//onkeydown : khi ban nhan xuong su kien da lang nghe va nhan value roi nhung
//ban phai nhan them chu nua thi luc do no moi in ra se bi cham lai 1 nhip
//onkeyup : khi ban nhap xuong va bna phai tha ra se in ra chu do luon neu khong tha ra se khong nhan duoc value

// oninput

var inputElement = document.querySelector('input[type="text"]');
// lang nghe su kien va tien hanh code
inputElement.oninput = function (e) {
    console.log(e.target.value); // in ra nhung gi chung ta nhap
};

// onchange

var inputElement = document.querySelector('input[type="text"]');
// lang nghe su kien va tien hanh code
inputElement.onchange = function (e) {
    console.log(e.target.value); // in ra nhung gi chung ta nhap
};

//truong hop khac
{
    /* <select>
    <option value="1">Javascript</option>
    <option value="2">Javascript</option>
    <option value="3">Javascript</option>
</select>; */
}
var inputElement = document.querySelector("select");
// lang nghe su kien va tien hanh code
inputElement.onchange = function (e) {
    console.log(e.target.value); // in ra value cua no la 1,2,3
};

// truong hop khac
var inputElement = document.querySelector('input[type="checkbox"]');
// lang nghe su kien va tien hanh code
inputElement.onchange = function (e) {
    console.log(e.target.checkbox); // se in ra true hoac false
};

//onkeydown
var inputElement = document.querySelector('input[type="text"]');
// lang nghe su kien va tien hanh code
inputElement.onkeydown = function (e) {
    console.log(e.target.value); // neu nhap ab thi se chi in ra a cham 1 nhip
};

//onkeyup
var inputElement = document.querySelector('input[type="text"]');
// lang nghe su kien va tien hanh code
inputElement.onkeyup = function (e) {
    console.log(e.target.value); // nhan vao phim va tha ra thi se in ra chu do luon
};

var inputElement = document.querySelector('input[type="text"]');
// lang nghe su kien va tien hanh code
inputElement.onkeyup = function (e) {
    console.log(e.which); // vi du neu chung ta nhan phim esc se in ra 27 kieu nhu bang ma ascII cua 1 tu
};
//e.which thuong duoc su dung lam menu co nhieu su lua chon
