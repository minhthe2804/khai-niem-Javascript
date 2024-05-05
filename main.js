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

// loai bo tinh nang mac dinh cua trinh duyet doi voi mot hanh dong nao do
e.preventDefault();
// loai bo tinh nang chong noi bot
e.stopPropagation();

// JSON : la mot finh dang du lieu duoi dang chuoi
// Number,String,Boolean,Null,Array,Object
// Stringify: chuyen cac kieu du lieu tren sang JSON
// Parse: Chuyen tu JSON sang ca kieu du lieu tren

// cach chuyen doi parse
var json = "1"; // number
var json = '"Minh The"'; //string
var json = "true"; // boolean
var json = "Null"; // null
var json = '["Javascript","PHP"]'; // array
var json = '{"name": "Minh The", "age": "21"}'; // object

console.log(JSON.parse(json));

// cach chuyen doi Stringtify

var json = 1; // number
var json = "Minh The"; //string
var json = true; // boolean
var json = Null; // null
var json = ["Javascript", "PHP"]; // array
var json = {
    name: "Minh The",
    age: "21",
}; // object

console.log(JSON.stringify(json));

// Promise
//Sync:xu li dong bo: xu li lan luot theo tuan tu
//Async:xu li bat dong bo: tuy theo chung ta code muon xu li bat dong bo
// nhung thang lam async:
// setTimeout, setInterval, fetch, XMLHttpRequest, file reading,
// requestAnimationFrame

//vd bat dong bo
setTimeout(function () {
    console.log(1);
}, 1000);

console.log(2);

// noi dau
// callback hell: nhung cai ben trong phai phu thuoc vao cai ben ngoai thi moi chay duoc nhung phuc tap va kho hieu
setTimeout(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
    }, 1000);
    setTimeout(function () {
        console.log(3);
    }, 1000);
    setTimeout(function () {
        console.log(4);
    }, 1000);
}, 1000);

// cach dung promise
// 1 . new promise : khoi tao vi promise la mot object constructor da duoc xay dung san va cung se su dung lai bang cach khoi tao no
// 2. executor : duoc truyen vao khi khoi tao promise va nhan vao hai tham so la resolve() va reject()

// cac trang thai cua promise
// 1.pendding: cho chung ta xu li
// 2.Fulfilled: trang thai thanh cong
// 3.Reject: trang thai that bai

var promise = new Promise(
    //executor
    function (resolve, reject) {
        //logic
        //thanh cong: resolve()
        //that bai: reject()
        resolve([
            {
                id: 1,
                name: "Javascript",
            },
        ]);
        reject("Co loi!");
    }
);

promise
    .then(function (succes) {
        // duoc hoat dong khi goi resolve() // thanh cong
        console.log(succes);
    })
    .catch(function (error) {
        // duoc goi khi reject()  // that bai
        console.log(error);
    })
    .finally(function () {
        // duoc goi khi 1 trong 2 cai tren duoc goi
        console.log("done");
    });

// promise chain
var promise = new Promise(
    //executor
    function (resolve, reject) {
        //logic
        //thanh cong: resolve()
        //that bai: reject()
        resolve();
        reject("Co loi!");
    }
);

promise
    .then(function () {
        return new Promise(function (resolve, reject) {
            // neu nhu return ra mot promise thi cac ham ben duoi phai cho doi ham
            setTimeout(function () {
                resolve([1, 2, 3]); //ham ben tren chay xong moi nhan duoc du lieu(neu return nhu nay thi ben duoi van co
                //the dung .then cua cai return promise nay)
            }, 3000);
        });
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        // duoc goi khi reject()  // that bai
        console.log(error);
    })
    .finally(function () {
        // duoc goi khi 1 trong 2 cai tren duoc goi
        console.log("done");
    });

// vi du khac nua

function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function () {
        console.log(1);
        return sleep(1000); // goi lai ham sleep ben tren la mot return promise nen cho them 1s thi ham ben duoi moi nhan duoc
    })
    // .then(function () {
    //     console.log(2);
    //     return sleep(1000);
    // })
    .then(function () {
        console.log(2);
        return new Promise(function (resolve, reject) {
            // neu nhu ban gap mot loi giua duong thi ban phai dung them .catch
            reject("co loi"); // kieu nhu la chung ta co the phai xu li lan luot tung viec mot neu nhu loi thi se khong in ra them
        });
    })
    .then(function () {
        console.log(3);
        return sleep(1000);
    })
    .then(function () {
        console.log(4);
        return sleep(1000);
    })
    .catch(function (err) {
        console.log(err);
    });

// promise resolve()
// promise reject()
// promise all

var promise = Promise.resolve();
var promise = Promise.reject();

promise
    .then(function (succes) {
        console.log(succes);
    })
    .catch(function (error) {
        console.log(error);
    });

var promise1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([1]);
    }, 1000);
});

var promise2 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([1]);
    }, 2000);
});

var promise2 = Promise.reject("Co loi!"); // neu nhu co loi giua duong se bay thang vao .catch luon
// promise all la co the chay song song ca hai promise cung mot luc
Promise.all([promise1], promise2)
    .then(function (result) {
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    })
    .catch(function (error) {
        console.log(error);
    });

// ES6
// var,let,const
// var :co the truy xuat duoc pham vi rong hon ke ca khi khai bao trong hay ngoai function
// let: truy xuat duoc trong pham vi hep hon khi khai bao trong mot function thi ra ben ngoai function do khong the truy xuat duoc
// const: truy xuat duoc trong pham vi hep hon khi khai bao trong mot function thi ra ben ngoai function do khong the truy xuat duoc

// var: neu nhu khai bao thi trinh bien dich se tu dua len dau
// vi du: neu nhu nay thi var a se duoc dua len dau
a = 1;
var a;
// let va const: se khong dung duoc nhu nay ma bat buoc phai khai bao ten bien truoc

// var && let : co the dung gan di gan lai duoc nhieu lan
// const: chi gan duoc 1 lan cho mot gia tri

// Arrow function
// cach viet nhanh ngan gon hon
const logger = (log) => {
    //(log) tham so truyen vao
    console.log(log);
};
logger("message");

// const sum = (a, b) => {
//     return a + b;
// };

// neu nhu muon viet ngan hon khong can ghi return thi phai bo di hai dau {}
// const sum = (a, b) => a + b;
// console.log(sum(2, 2));

// neu nhu muon tra ve mot obj thi ban phai dong no lai
const sum = (a, b) => ({
    a: a,
    b: b,
});
console.log(sum(2, 2));

// Arrow function: se khong dung duoc obj constructor

// const course = {
//     name: "Javascript",
//     getName: function () {
//         return this.name; // context
//     },
// };

const course = {
    name: "Javascript",
    getName: () => {
        return this.name; // neu dung nhu nay cung underfined luon vi no khong phai context
    },
};

// const Course = function (name, price) {
//     this.name = name;
//     this.price = price;
// };
// const jsCourse = new Course("Javascript", 1000);

const Course = (name, price) => {
    // neu dung nhu nay se bi underfined vi no khong phai obj constructor
    this.name = name;
    this.price = price;
};
const jsCourse = new Course("Javascript", 1000);

// template listerals:

const courseName = "PHP";
const description = `Khoa hoc: ${courseName}`;

console.log(description);

// multi - line String

const lines = `line 1
line2
line3`;

console.log(lines);

// classes: viet nhu nay se giup clean code hon neu nhieu code phuc tap
class List {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    run() {
        const isSucces = false;
        if (!isSucces) {
            isSucces = true;
        }
    }
}

const user1 = new List("Javascript", 1000);
const user2 = new List("PHP", 2000);

console.log(user1);
console.log(user2);

// enhanced obj
// dinh nghia key: value cho obj

var names = "Javascript";
var price = 1000;

var list = {
    names, // neu nhu ten bien duoc dat ma giong voi ca key va value thi dung nhu nay
    price,
};

console.log(list);
// dinh nghia method cho obj

var names = "Javascript";
var price = 1000;

var list = {
    names, // neu nhu ten bien duoc dat ma giong voi ca key va value thi dung nhu nay
    price,
    getName() {
        return names;
    },
};

console.log(list.getName());
// dinh nghia key cho obj duoi dang bien

var filedName = "name";
var filedPrice = "price";

var list = {
    [filedName]: "Javascript",
    [filedPrice]: "1000",
};

console.log(list);

// Default paramenter values:dinh nghia gia tri mac dinh cho tham so truyen vao voi nhung thuoc tinh truyen vao khong bat buoc

function logger(log, type = "log") {
    console[type].log(log); // neu nhu type khong nhan duoc mot tham so nao tu ham goi lai ben duoi thi mac dinh se in ra log
}

logger("Message");
logger("Message", "error"); // vi du nhu nay

//Destructuring : phan gia

//array + rest paramenter

var array = ["Javascript", "PHP", "Java"];
var [a, b, c] = array; // a,b,c o day duoc hieu nhu la array[0] = a; , array[1] = b; , array[2] = c;
console.log(a, b, c);

var array = ["Javascript", "PHP", "Java"];
var [a, c] = array; // a,b,c o day duoc hieu nhu la array[0] = a; , array[1] = b; , array[2] = c;
console.log(a, c); // viet nhu nay co the hieu chi lay a va c khong in ra b

var array = ["Javascript", "PHP", "Java"];
var [a, ...rest] = array; // lay ra a va phan tu con lai trong mang
console.log(a);
console.log(rest);

//Object + rest paramenter

var object = {
    names: "Javascript",
    price: 1000,
};

//
var { names, price } = object; // phai viet dung key moi in ra duoc
console.log(names, price);

//
var object = {
    names: "Javascript",
    price: 1000,
    chidren: {
        names: "PHP",
    },
};

//
var {
    names,
    price,
    chidren: { names: chidrenName },
} = object; //neu chung ta co them object ben trong thi phai dung nhu va phai dat them ten moi de tranh trung ten voi key nao do
console.log(names, price, chidrenName);

//
var object = {
    names: "Javascript",
    price: 1000,
};

//
var { names, ...rest } = object; // in ra names va cac key value con lai trong obj
console.log(names); // vi du neu muon xoa name thi khong can phai in ra names nua
console.log(rest);

// rest paramenter voi function
function logger(a, ...params) {
    console.log(a); // a = 1
    console.log(params); //params la cac so con lai
}

console.log(1, 2, 3, 4, 5, 6, 7, 8);

var object = {
    names: "Javascript",
    price: 1000,
    chidren: {
        names: "PHP",
    },
};

// truyen nhu nay van dung Destructuring duoc
function logger({ names, price, ...rest }) {
    console.log(names);
    console.log(price);
    console.log(rest);
}

logger(object);

//spread: luu y khac voi rest o cho la khi truyen vao thi phai nhu nay moi la spread
//vi du spread:function tenbien(...array1) : lay tat ca
//con rest paramenter la function tenbien(a,b,...rest) //  lay cac phan tu con lai

var array1 = ["Javascript", "PHP"];

var array2 = ["Java", "C#"];

var array3 = [...array1, ...array2]; // neu dung nhu nay se coi nhu la lay tat ca phan tu cua array1 va 2 bo di dau ngoac []
console.log(array3);

var obj1 = {
    api: "https://minhthe.edu.vn",
    names: "Java",
    price: 1000,
};

var obj1 = {
    ...obj1,
    api: "https://minhthe.edu.vn", // luu y trong obj neu key nao trung ten ma duoc gan sau thi se key value do
};

// spread voi function

var array1 = ["Javascript", "PHP", "Java", "C#"];

function logger(a, b, c) {
    console.log(a, b, c);
}

logger(...array1);

function logger(...rest) {
    // neu nhan nhu nay thi lai co dau []
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

logger(...array1); //truyen vao mang bo di dau []

// tagged template
function highlight([first, ...string], ...values) {
    return values.reduce(
        // [first] : gia tri khoi tao,  ...arr = first = hoc lap trinh , curr = values = ["javascript","f8"], string = tai !
        (arr, curr) => [...arr, `<span>${curr}</span>`, string.shift()],
        [first]
    );
}

var brand = "F8";
var courses = "Javascript";

const html = highlight`Học lập trình ${courses} tại ${brand} !`;

console.log(html.join(""));

// Module : 1 module chi export default duoc 1 cai con export const TYPE_LOG = "log"; thi co dung nhieu
//main.js
import logger from "./logger.js";
import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./logger.js";
//import * as constants from "./constants.js";
logger("message", TYPE_ERROR);
//logger.js
import { TYPE_LOG } from "./constants.js";
function logger(log, type = TYPE_LOG) {
    console.log[type](log);
}
// constants.js
export const TYPE_LOG = "log";
export const TYPE_WARN = "warn";
export const TYPE_ERROR = "error";

export default logger;
// optional traning: neu ban khong chac mot dieu gi do khi kiem tra dieu kien se dung(luu y doi voi mot cai gi do chung ta khong viet ra nhu obj array)

const obj = {
    names: "Javascript",
    cat: {
        names: "Java",
        cat2: {
            names: "PHP",
            cat3: {
                names: "C#",
            },
        },
    },
};

if (obj?.cat?.cat2?.cat3) {
    // kiem tra xem co obj,cat,cat2 : kiem tra the nay boi vi phai co (obj) thi moi co (cat) va phai co (cat) moi co (cat2)
    console.log(obj.cat.cat2.cat3.names);
}

const obj1 = {
    getName(value) {
        console.log(value);
    },
};

obj1.getName?.(123);
