import React, { useState, useEffect } from 'react';
import axios from 'axios';

// function SavedAnnounces() {
//   const [savedAnnounces, setSavedAnnounces] = useState([]);

//   useEffect(() => {
//     // Fetch list of saved announces for the current user
//     axios.get('/api/saved/')
//       .then(res => setSavedAnnounces(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleSave = (id) => {
//     // Send a POST request to the server to save the announce
//     axios.post('/api/saved/', { id: id })
//       .then(res => {
//         // Add the new saved announce to the list of saved announces
//         setSavedAnnounces([...savedAnnounces, res.data]);
//       })
//       .catch(err => console.log(err));
//   }

function saveAnnounce() {
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    axios.post('/api/save/', { announce_id: announceId }, { headers: headers })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

function unsaveAnnounce() {
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    axios.delete('/api/saved/', { announce_id: announceId }, { headers: headers })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

// function showSavedAnnounces() {
//     const token = localStorage.getItem('token');
//     const headers = { 'Authorization': `Bearer ${token}` };
//   const [savedAnnounces, setSavedAnnounces] = useState([]);

//   useEffect(() => {
//     // Fetch list of saved announces for the current user
//     axios.get('/api/saved/',{ headers: headers })
//       .then(res => setSavedAnnounces(res.data))
//       .catch(err => console.log(err));
//   }, []);

// }


function AnnouncesListWithLatAndLong() {
    const [announces, setAnnounces] = useState([]);
    const [location, setLocation] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        });
    }, []);

    useEffect(() => {
        if (location.lat && location.lng) {
            axios.get(`/api/annonces?lat=${location.lat}&lng=${location.lng}`)
                .then(res => setAnnounces(res.data))
                .catch(err => console.log(err));
        }
    }, [location]);
}


function AnnouncesList() {
    const [announces, setAnnounces] = useState([]);
  
    useEffect(() => {
      axios.get('/api/annonces/')
        .then(res => setAnnounces(res.data))
        .catch(err => console.log(err));
    }, []);
}  


function AnnounceDetail({ match }) {
    const [annonce, setAnnonce] = useState({});
  
    useEffect(() => {
      // Fetch the details of the specific announce
      axios.get(`/api/annonces/${match.params.id}/`)
        .then(res => setAnnonce(res.data))
        .catch(err => console.log(err));
    }, [match.params.id]);  //to get the announce id from the url
}  


function CreateAnnounce() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
  
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        title,
        description,
        price,
        location,
        image
      };
      axios.post('/api/annonces/create/', data, { headers: headers })
        .then(res => {
          console.log(res);
          setTitle('');
          setDescription('');
          setPrice('');
          setLocation('');
          setImage('');
        })
        .catch(err => console.log(err));
    };
}

function UpdateAnnonce({ match }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
  
    useEffect(() => {
      // Fetch the current annonce data
      const fetchData = async () => {
        const res = await axios.get(`/api/annonces/${match.params.pk}/`, { headers: headers });
        setTitle(res.data.title);
        setDescription(res.data.description);
        setPrice(res.data.price);
        setLocation(res.data.location);
        setImage(res.data.image);
      };
      fetchData();
    }, [match.params.pk, headers]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        title,
        description,
        price,
        location,
        image
      };
      await axios.put(`/api/annonces/${match.params.pk}/update/`, data, { headers: headers })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };
}  
function DeleteAnnounce({ announceId }) {
    const handleDelete = (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const headers = { 'Authorization': `Bearer ${token}` };
      axios.delete(`/api/annonces/${announceId}/delete/`, { headers: headers })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
}

function FilterAnnonce(theme, categorie, wilaya, commune) {
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    axios.get(`/api/annonces?theme=${theme}&categorie=${categorie}&lieu__wilaya=${wilaya}&lieu__commune=${commune}`)
      .then(res => setFilteredResults(res.data))
      .catch(err => console.log(err));
  }, [theme, categorie, wilaya, commune]);
}
 


//     return (
//         <div>
//             <h1>Nearby Announces</h1>
//             <ul>
//                 {announces.map(announce => (
//                     <li key={announce.id}>
//                         {announce.title} - {announce.distance} miles away
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default AnnouncesList;



//   return (
//     <div>
//       <button onClick={() => handleSave(announceId)}>Save</button>
//       <h2>Saved Announces</h2>
//       <ul>
//         {savedAnnounces.map(announce => (
//           <li key={announce.id}>{announce.title}</li>
//         ))}
//       </ul>
//     </div>
//   );


// export default SavedAnnounces;
