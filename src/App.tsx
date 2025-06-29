import { ToastContainer } from "react-toastify";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";

function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <header className="text-center">
          <h1 className="font-black text-5xl">
            Seguimiento de Pacientes <span className="text-indigo-700">Veterinaria</span>
          </h1>
        </header>
        <section className="mt-12 md:flex">
          <PatientForm />
          <PatientList />
        </section>
      </div>
      {/* LLamamos el componente de toastify */}
      <ToastContainer/>
    </>
  );
}

export default App;

/*
  Este proyecto es para implementar Zustand. Zustand se basa en un "STORE" que es lo mismo que un REDUCER, piensa en el Store como el Reducer donde estan las funciones que modifican el state. Se crea el archivo en store.ts (antes creabamos la carpeta reducer y el archivo reducer.ts o tsx)


  Usamos react-toastify para las notificaciones. Lee la documentacion. Se instala en 2 lugares en el componente App (aca va el **ToastContainer**) y luego en el codigo donde quieras disparar las notificaciones (se llama a la funcion toast('mensaje')) y listo, que mantequilla.




*/
