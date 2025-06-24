type PatienteDetailsItemProps={
    label: string,
    data: string
}

const PatienteDetailsItem = ({label, data}:PatienteDetailsItemProps) => {
  return (
    <p className="font-bold uppercase mb-3 text-gray-700">{label}: <span className="font-normal normal-case">{data}</span></p>
  )
}

export default PatienteDetailsItem