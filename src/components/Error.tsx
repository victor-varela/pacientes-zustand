//
//  Otra forma de declrar el type
//  type ErrorProps = {
//   hildren:React.ReactNode
// }

import type { ReactNode } from "react";

const Error = ({children}:{children: ReactNode}) => {
  return <p className="bg-red-600 text-white my-4 font-bold uppercase p-3 text-center text-sm">{children}</p>;
};

export default Error;

/*
Usamos la tecnica de la abuela con los componentes de manejo de errores. Usamos la propiedad children type react.reactNode
lo podemos poner directo en el type de la funcion asi: ( {children}: {children:React.ReactNode}  ) o como 'componentProps'
ejemplo: type ErrorProps = {
  children: React.ReactNode
}
  en este caso como es una sola propiedad (children) conviene hacerlo en una sola linea mismo en la funcion
  yo lo hice type string. Es una forma diferente. En el ejercicio original del profesor el componente recibe Children como prop con su respectivo type tal cual esta indicado al principio de este archivo.



*/
