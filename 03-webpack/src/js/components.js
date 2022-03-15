import '../css/components.css';

export const hello = ( name ) => {
    console.log('Create tag h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hello, ${ name }!!!`;

    document.body.append(h1);
}