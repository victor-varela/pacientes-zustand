import { useForm } from "react-hook-form";
import Error from "./Error";
import { getInputClasses } from "../helpers";
import type { DraftPatient } from "../types";
import { usePatientStore } from "../store";


const PatientForm = () => {
  // instaciamos react-hook-form. useForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<DraftPatient>();

  const errorMessage: string = "Todos los campos son obligatorios";
  
  //Instanciamos la custom hook de Zustand
  const addPatient = usePatientStore((state)=>state.addPatient) //sintaxis de la doc de zustand

  const onSubmit = (data:DraftPatient) => {
    addPatient(data)
    reset()
    
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          {Object.values(errors).length > 0 && <Error>{errorMessage}</Error>}
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="name"
            className={getInputClasses(!!errors.name)} //el double ban !! se usa para convertir a boolean un valor
            type="text"
            placeholder="Nombre del Paciente"
            /* hook-form */
            {...register("name", { required: true })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="caretaker"
            className={getInputClasses(!!errors.caretaker)}
            type="text"
            placeholder="Nombre del Propietario"
            //hook-form
            {...register("caretaker", { required: true })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className={getInputClasses(!!errors.email)}
            type="email"
            placeholder="Email de Registro"
            //hook-form
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email No Válido",
              },
            })}
          />
          {errors.email?.message && <Error>{errors.email.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className={getInputClasses(!!errors.date)}
            type="date"
            {...register("date", { required: true })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className={getInputClasses(!!errors.symptoms)}
            placeholder="Síntomas del paciente"
            {...register("symptoms", { required: true })}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Guardar Paciente"
        />
      </form>
    </div>
  );
};

export default PatientForm;

/*
  Usamos la libreria react-hook-form-->> se instala npm install react-hook-form. Leer la documentacion
  Creamos un componente para el manejo de errores. 
  Vemos que Ts se queja por el type de errors.name.message por eso lo convertimos a toString(), OJO cuando ya esta asignado el type a los campos del formulario, no es necesario el .toString() porque lo toma desde el mismo type, ya Ts sabe cual es el type de cada campo.

  Para conectar con el store usamos la custom hook usePatientStore que es la que tiene el state y las 'actions', lo recuperamos segun la documentacion de zustand




*/
