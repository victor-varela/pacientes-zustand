import { create } from "zustand";
import type { DraftPatient, Patient } from "./types";

type PatientState = {
  patients: Patient[];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
};

export const usePatientStore = create<PatientState>(set => ({
  patients: [],

  addPatient: data => {
    const newPatient = { ...data, id: crypto.randomUUID() };

    set(state => ({
      patients: [...state.patients, newPatient],
    }));
  },

  deletePatient: id => {
    set(state=>({
      patients: state.patients.filter(patient=> patient.id !== id)
    }))
  },
}));

/*
 La sintaxis la puedes ver en la documentacion, es una funcion que retorna un objeto npm zustand. Se declara dentro de esa funcion que se llama useMyStore tanto los states como las 'actions' que usabamos en un reducer. El type lo declaras como generic useMyStore<SoreType> no necesita provider, boilerplate, actions, etc.. es muy muy corto el codigo. Se usa la palabra set para recuperar y escribir en el state. Lo que era antes en los actions del reducer : ' return{...state, y escribiamos en el state} ahora lo hace el set((state)=>{
                  y escribimos en el state          })
   

*/
