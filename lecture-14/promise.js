function download(cb) {
    setTimeout(() => {
        console.log("Download Complete");
        cb();
    }, 1000);
}
function compress(cb) {
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