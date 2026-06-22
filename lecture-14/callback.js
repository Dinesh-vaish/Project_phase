// function downloadfile(url, callback){
//     console.log("Starting Download");

// setTimeout(()=>{
//     console.log("Download Complete");
//     callback();
// },2000)
// }
// downloadfile("file.pdf",()=>{
//     console.log("Opning File...");
// });



function downloadfile(url,callback){
console.log("Starting Download");
setTimeout(()=>{
    console.log("Download completed");
    callback();
},2000)
}
downloadfile("file.pdf",()=>{
console.log("opening file...");
});







//user verifations

function login(callback){
    setTimeout(()=>{
        console.log("user Athontications");
        callback();
    },1000);  
}
function getProfil(callback){
    setTimeout(()=>{
        console.log("Profile fetched");
        callback();
    },1000);
}
login(()=>{
    getProfil(()=>{
        console.log("Display profile");
    });
});


//create the folling follow

function download(cb){
    setTimeout(()=>{
        console.log("Download Complete");
        cb();
    },1000);
}
function compress(cb){
      setTimeout(() => {
        console.log("Compression Complete");
        cb();
    }, 1000);
}

function upload(cb) {
    setTimeout(() => {
        console.log("Upload Complete");
        cb();
    }, 1000);
}
console.log("Start Download");
download(() => {
    console.log("Compressing File");
    compress(() => {
        console.log("Uploading File");
        upload(() => {
            console.log("Process Finished");
        });
    });
});
















function placeOrder(callback) {
setTimeout(() => {
console.log("Order placed");
callback();
}, 1000);
}
function prepareFood(callback) {
setTimeout(() => {
console.log("Food prepared");
callback();
}, 2000);
}
function deliverFood(callback) {
setTimeout(() => {
console.log("Food delivered");
callback();
}, 1000);
}
placeOrder(() => {
prepareFood(() => {
deliverFood(() => {
console.log("Enjoy your meal!");
});
});
}); 




















//promise   functions using task complute



