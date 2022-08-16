import React, { useState } from 'react'

const AddMovie = ({myMovie}) => {
    const [show, setShow] = useState(false);
    const [addMovie, setAddMovie] = useState({name:'',description:'', posterurl:'', rating:0})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
    <h6>Ajouter un nouveau film</h6>

      <div show={show} onHide={handleClose}>
        <header closeButton>
        </header>
        <body>
            <div className="addMovie">
            <label className='nameT'> Name</label>
              <input className='addTitle'
               type="text" name="name" 
               onChange={(e)=>{setAddMovie({...addMovie,name:e.target.value})}}/>
              <label className='desc'> Description</label>
              <input type="text" name="description"
               onChange={(e)=>{setAddMovie({...addMovie,description:e.target.value})}}/>
              <label className='url'> PosterURL</label>
              <input type="text" name="posterurl"
               onChange={(e)=>{setAddMovie({...addMovie,posterurl:e.target.value})}}/>
              <label className='rate'> Rating</label>
              <input type="text" name="rating"
               onChange={(e)=>{setAddMovie({...addMovie,rating:e.target.value})}}/>
            </div>
        </body>
        <footer>
          <button className='annuler' onClick={handleClose}>
            Fermer
          </button>
          <button className='ajouter' 
            onClick={()=>{myMovie(addMovie);
            handleClose()}}>
            Enregistrer
          </button>
        </footer>
      </div>        </div>
    )
}

export default AddMovie