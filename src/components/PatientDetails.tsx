import { usePatientStore } from "../store";
import type { Patient } from "../types";
import PatienteDetailsItem from "./PatienteDetailsItem";

type PatientDetailsProps = {
  patient: Patient;
};


const PatientDetails = ({ patient }: PatientDetailsProps) => {

//Instanciamos la custom hook de Zustand
const deletePatient = usePatientStore(state => state.deletePatient);
  return (
    <div className="bg-white shadow-lg rounded-xl mx-5 my-5 px-5 py-5">
      <PatienteDetailsItem label="Id" data={patient.id} />
      <PatienteDetailsItem label="Nombre" data={patient.name} />
      <PatienteDetailsItem label="Propietario" data={patient.caretaker} />
      <PatienteDetailsItem label="Email" data={patient.email} />
      <PatienteDetailsItem label="Fecha Alta" data={patient.date.toString()} />
      <PatienteDetailsItem label="Sintomas" data={patient.symptoms} />
      <div className="flex justify-between mt-10">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 uppercase py-2 rounded-lg "
          type="button"
        >
          Editar
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-2 uppercase rounded-lg "
          type="button"
          onClick={()=>deletePatient(patient.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
