import { Line } from 'react-chartjs-2';

// interface DiagnosisHistoryEntry {
//   date: string;
//   systolic: number;
//   diastolic: number;
// }
export default function DiagnosisHistory({ history }) {
  const chartData = {
    labels: history.map(entry => entry.date),
    datasets: [
      {
        label: 'Systolic Pressure',
        data: history.map(entry => entry.systolic),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Diastolic Pressure',
        data: history.map(entry => entry.diastolic),
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h3 className="text-lg font-bold">Diagnosis History</h3>
      <Line data={chartData} />
    </div>
  );
}
