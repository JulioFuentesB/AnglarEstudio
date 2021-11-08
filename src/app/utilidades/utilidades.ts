//con promesa en javascript va a erminar su proceso en el futuro
export function toBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function parsearErroresApi2(response: any): string[] {
  const resultado: string[] = [];

  if (response.error) {
    if (typeof response.error == 'string') {
      resultado.push(response.error);
    } else {
      const mapaErrores = response.error.errors;
      //tranforma en un arreglo de errores
      const entradas = Object.entries(mapaErrores);
      //recorre el arreglo de estring
      entradas.forEach((arreglo: any[]) => {
        const campo = arreglo[0];
        arreglo[1].foraesch((mensajeError: any) => {
          resultado.push('${campo}: ${mensajeError}');
        });
      });
    }
  }

  return resultado;
}

export function parsearErroresAPI(response: any): string[] {
  console.log(response);
  const resultado: string[] = [];

  if (response.error) {
    if (typeof response.error === 'string') {
      resultado.push(response.error);
    }
    //  else if (Array.isArray(response.error)){
    //   response.error.forEach(valor => resultado.push(valor.description));
    // }
    else {
      const mapaErrores = response.error.errors;
      const entradas = Object.entries(mapaErrores);
      entradas.forEach((arreglo: any[]) => {
        const campo = arreglo[0];
        arreglo[1].forEach((mensajeError :any  ) => {
          resultado.push(`${campo}: ${mensajeError}`);
        });
      });
    }
  }

  return resultado;
}
