/* eslint-disable @next/next/no-img-element */
export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'szV5sdG'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'YfeOqp2'
}];

function getImageUrl(imageId: string) {
  return "https://i.imgur.com/" + imageId + "s.jpg"
}

export default function List() {
  const listItems = people.map(person =>
    <li key={person.imageId}>
      <img 
        src={getImageUrl(person.imageId)} 
        alt={person.name} 
      />
      <p>
        Name: {person.name}<br/>
        Profession: {person.profession} <br/>
        Accomplishment: {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}