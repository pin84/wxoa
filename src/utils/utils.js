const base64ToBlob = async (imgURL) => {
  const base64 = await fetch(imgURL);
  const blob = await base64.blob();
  console.log('---blog---',blob);
  return blob
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