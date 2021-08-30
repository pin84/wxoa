const base64ToBlob = async (dataURL) => {
  var img = new Image();   // Create new img element
  img.setAttribute("crossOrigin", "Anonymous");
  img.src = dataURL; // 设置图片源地址
  return new Promise((resolve, reject) => {
    img.onload = () => {
      console.log('--logd--', img);
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      canvas.toBlob(blob => {
        resolve(blob);
      }, "image/jpeg",0.3);
    };
    img.onerror = (err) => {
      console.log('--err---', err);
      reject(err)
    };
  });
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