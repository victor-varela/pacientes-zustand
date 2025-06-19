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
    </>
  );
}

export default App;
