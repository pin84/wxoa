// 将base64转换为文件
const dataURLtoBlob = async (base64Data, filename) => {
  const base64 = await fetch(base64Data);

  const blob = await base64.blob();

  console.log('------blob----',blob);
  return blob


}


// // 将base64转换为blob
// const dataURLtoBlob = (dataurl) => {
//   let arr = dataurl.split(","),
//     mime = arr[0].match(/:(.*?);/)[1],
//     bstr = atob(arr[1]),
//     n = bstr.length,
//     u8arr = new Uint8Array(n);
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }
//   return new Blob([u8arr], { type: mime });
// }
// 将blob转换为file
const blobToFile = (theBlob, fileName) => {
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}


export  {
  dataURLtoBlob,
  // dataURLtoBlob,
  blobToFile
}