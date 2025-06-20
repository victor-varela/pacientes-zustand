//
//  Otra forma de declrar el type
//  type ErrorProps = {
//   hildren:React.ReactNode
// }

const Error = ({ children }: { children: React.ReactNode }) => {
  return <p className="bg-red-500 text-white p-3 text-center">{children}</p>;
};

export default Error;

/*
Usamos la tecnica de la abuela con los componentes de manejo de errores. Usamos la propiedad children type react.reactNode
lo podemos poner directo en el type de la funcion asi: ( {children}: {children:React.ReactNode}  ) o como 'componentProps'
ejemplo: type ErrorProps = {
  children: React.ReactNode
}
  en este caso como es una sola propiedad (children) conviene hacerlo en una sola linea mismo en la funcion



*/
