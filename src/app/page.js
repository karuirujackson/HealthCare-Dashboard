import PatientDetails from './components/PatientDetails';
import DiagnosisHistory from './components/DiagnosisHistory';

// interface PatientData {
//     patient: any;
//     diagnosisHistory: any;
// }
  
export default function Home({ patientData }) {
  return (
    <div className="container mx-auto p-4">
      <PatientDetails patient={patientData.patient} />
      <DiagnosisHistory history={patientData.diagnosisHistory} />
    </div>
  );
}

export async function getData() {
  const res = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev');
  const patientData = await res.json();

  return {
    props: {
      patientData,
    },
  };
}
