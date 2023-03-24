async function buscarProfile(){
    const response = await fetch('https://api.github.com/users/anaPaulaSantosM');
    const data = await response.json();
    console.log(data);
    document.getElementById('name').innerHTML = data.name;
    document.getElementById('id').innerHTML = data.id;
    document.getElementById('avatar').innerHTML = data.avatar_url;document.getElementById('avatar').innerHTML = data.avatar_url;
    document.getElementById('location').innerHTML = data.location;
}
buscarProfile();

