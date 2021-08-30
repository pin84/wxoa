const base64ToBlob = async (dataURI) => {
  var img = new Image();   // Create new img element
  img.onload = function () {
    // 执行drawImage语句
    console.log('--logd--',img);
  }

  img.onerror = function (err) {
    console.log('--err---',err);
  }
  img.src = dataURI; // 设置图片源地址

  return 'a'
}




//blob => base64
// convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
//   const reader = new FileReader;
//   reader.onerror = reject;
//   reader.onload = () => {
//       resolve(reader.result);
//   };
//   reader.readAsDataURL(blob);
// });

// const base64String = await convertBlobToBase64(blob);
// https://ionicframework.com/blog/converting-a-base64-string-to-a-blob-in-javascript/


// 将blob转换为file
const blobToFile = (theBlob, fileName) => {
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}

const fileAppenToFormData = (file, fileName = 'fileName') => {
  let formData = new FormData()
  formData.append(fileName, file)
  return formData
}

export {
  blobToFile,
  fileAppenToFormData,
  base64ToBlob
}