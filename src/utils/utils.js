const base64ToBlob = (imgURL, quality = 0.3) => {
  console.log('----00000---');
  return new Promise(async (resolve, reject) => {
    let img = await waitImgOnload(imgURL)
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0, img.width, img.height);
    console.log('----44444---');
    canvas.toBlob(
      blob => {
        console.log('-2--toBlob--');
        resolve(blob);
      },
      "image/jpeg",
      quality
    );
  })


}

const waitImgOnload = (url) => {
  return new Promise((res, rej) => {
    console.log('----11111---');
    let img = new Image();
    img.setAttribute("crossOrigin", "Anonymous");
    img.src = url;
    img.onload = () => {
      console.log('----2222---');
      res(img);
    };
    img.onerror = () => {
      console.log('----3333---');

      rej("img");
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