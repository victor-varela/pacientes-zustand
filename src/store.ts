import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { DraftPatient, Patient } from "./types";
import { toast } from "react-toastify";
import { persist } from "zustand/middleware";

type PatientState = {
  patients: Patient[];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatient: (data: Patient) => void;
  patientId: Patient["id"];
  editPatient: (data: DraftPatient) => void;
};

export const usePatientStore = create<PatientState>()(
  devtools(
  persist((set) => ({

    patients: [],
    patientId:'',

    addPatient: data => {
      const newPatient = { ...data, id: crypto.randomUUID() };

      set(state => ({
        patients: [...state.patients, newPatient],
        patientId: "",
      }));
    },

    deletePatient: id => {
      set(state => {
        const patient = state.patients.find(pat => pat.id === id);

        toast(`Paciente ${patient?.name} eliminado correctamente`, { type: "warning" });

        return {
          patients: state.patients.filter(pat => pat.id !== id),
        };
      });
    },

    getPatient: data => {
      set(() => ({
        patientId: data.id,
      }));
    },

    editPatient: data => {
      set(state => ({
        patients: state.patients.map(patient =>
          patient.id === state.patientId ? { ...data, id: state.patientId } : patient
        ),
        patientId: "",
      }));
    },

  }), {
    name:'patient-storage'
  })

));

/*
 La sintaxis la puedes ver en la documentacion, es una funcion que retorna un objeto npm zustand. Se declara dentro de esa funcion que se llama useMyStore tanto los states como las 'actions' que usabamos en un reducer. El type lo declaras como generic useMyStore<SoreType> no necesita provider, boilerplate, actions, etc.. es muy muy corto el codigo. Se usa la palabra set para recuperar y escribir en el state. Lo que era antes en los actions del reducer : ' return{...state, y escribiamos en el state} ahora lo hace el set((state)=>{
                  y escribimos en el state          })
   


 -DevTools: para usar devtools (y ver el state en el navegador como react-components), hay que importarlo de zustand/middelware y luego llamar a esa funcion devtools en la CREACION del STORE.
      eje: export const useMyStore = create<myStoreType>()(devtools(set=>({
      
                                                                      
                                                                        }))) nota que despues de set es ({}) parentesis 'llamado a la funcion' y retorna un adivina que?... OBJETO! si señor!


  -Persist: es para almacenar en localStorage, hay que abrir parentesis y dentro de las llaves colocar el nombre en local storage (,{name:'patient-storage'}), es asi: persist( el parentesis que cierra es despues del set)                                                                       
*/
