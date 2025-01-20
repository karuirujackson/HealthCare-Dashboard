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
    // if (!res.ok) {
    //     throw new Error('Failed to fetch data');
    // }
    return res.json();
    // console.log(patientData);
};

export default async function Patients() {
    const patients = await getPatients();
    return (
        <div className="">
            <ul>
                {
                   patients.map((patient, index) =>(
                        <li key={index}>{patient.name}</li>
                   )) 
                }
            </ul>
        </div>
    );
}


