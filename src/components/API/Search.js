import React, {useState } from 'react'
import { TextField, Button, LinearProgress } from '@material-ui/core'
import shortcode from './shortcode';

const Search = () => {

    const [link, setLink] = useState('');
    const [short, setshort] = useState('');
    const handleSubmit =(e) => {
        e.preventDefault();
        getLink();
        

    };

    const getLink =async() => {
        await shortcode.get(`shorten?url=${link}`).then((response) => {setshort(response.data.result.short_link)}).catch((error) => console.error(error))
    }
    return (
        <>
        <center>
            <form onSubmit={(e) => handleSubmit(e)} style={{display:'flex' , flexDirection: 'column'}}>
                <TextField style ={{marginBottom: '20px '}} label="Input your link"
                variant="outlined"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                />
                <Button  onClick={(e) => handleSubmit(e)} variant="contained" color="primary">
                    Submit
                </Button>


            </form>

            {short &&(
                <div>
                    Short Link: {short}
                    
                </div>
            )}
            </center>
        </>
    )
}

export default Search
