import React, { useState, useEffect } from 'react'
import { Form, Label } from 'semantic-ui-react'

export default function UpdateMovie(props) {
    
    const [movie, setMovie] = useState({
       
       id: null,
       title: '',
       director: '',
       metascore: 0,
       stars: []

    })

    useEffect(() => {
        const movieToEdit = props.movies.find(
            e => `${e.id}` === props.match.params.id
        );
        
        if(movieToEdit) {
            setMovie(movieToEdit)
        }

    }, [props.match.params.id, props.movies])

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name] : e.target.value
        })
    }

    const handleStarsChange = (e, index) => {
        movie.stars[index] = e.target.value
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className='update-form'>
        <h3> Update {movie.title}'s info </h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Label>Title</Label>
            <Form.Input
              placeholder='Title'
              name='title'
              value={movie.title}
              onChange={handleChange}
            />
            <Label>Director</Label>
            <Form.Input
              placeholder='Director'
              name='director'
              value={movie.director}
              onChange={handleChange}
            />
            <Label>Metascore</Label>
            <Form.Input
              placeholder='Metascore'
              name='metascore'
              value={movie.metascore}
              onChange={handleChange}
            />
            <Label>Stars</Label>
            {movie.stars.map((star, index) => {
               return <Form.Input
              key={index}
              placeholder='Stars'
              name='stars'
              value={star}
              onChange={handleStarsChange(index)}
            />
            })}
            
            <Form.Button content='Update' id='submit'/>
          </Form.Group>
        </Form>
      </div>
    )
}
