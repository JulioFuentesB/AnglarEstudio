
//con promesa en javascript va a erminar su proceso en el futuro
export function toBase64(file: File){
  return new Promise((resolve, reject) => {
      const reader  = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
  })
}
