export default function ErrorMessage({ message }) {
  if (!message) return null;
  return <p className='error404PageContent'>{message}</p>;
}
