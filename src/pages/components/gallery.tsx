import Profile from './profile'
// composed of different components
export default function Gallery() {
  return (
    <div>
      <h1>Profiles: </h1>
      <Profile />
      <Profile />
      <Profile />  
    </div>
  );
}
