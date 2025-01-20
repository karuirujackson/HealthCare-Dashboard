// import DiagnosisHistory from "./components/DiagnosisHistory";
// import PatientDetails from "./components/PatientDetails";

export async function getPatients() {
    // let username = 'coalition';
    // let password = 'skills-test';
    // let authToken = btoa(`${username}:${password}`);
   
    const res = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev'
        // ,{
        //     headers: {
        //         'Authorization': `Basic ${authToken}`
        //     }
        // }
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
    // console.log(patientData);
};

export default function Home() {
    const patients = await getPatients();
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-lg">HealthCare Dashboard</h1>
            <ul>
                <li>Name: {patientData.name}</li>
            </ul>
            {/* <PatientDetails patient={patientData.patient} /> */}
            {/* <DiagnosisHistory history={patientData.diagnosisHistory} /> */}
        </div>
    );
}


