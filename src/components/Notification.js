export default function Notification({ message, color }) {
  if (!message) return null;

  return (
    <div
      className={`fixed top-6 max-w-md w-11/12 p-4 rounded-lg shadow-md text-center font-bold ${color}`}
    >
      {message}
    </div>
  );
}
