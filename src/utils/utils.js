const base64ToBlob = (imgURL, quality = 0.3) => {
  console.log('----00000---');
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.src = imgURL
    img.onload = () => {
      console.log('-1--onload--');
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      canvas.toBlob(
        blob => {
          console.log('-2--toBlob--');
          resolve(blob);
        },
        "image/jpeg",
        quality
      );
    };
  });
}

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