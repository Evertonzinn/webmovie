/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import './styles.css';


export default ({item}) => {
    console.log(item);
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    
    for(let i in item.genres) {
        genres.push( item.genres[i].name)
    }

    let descripton = item.overview;
    if(descripton.length > 200) {
        descripton = descripton.substring(0, 200) +'...'
    }

    return (
        <section className="featured" style={
            {
                backgroundSize: 'cover',
                backgroundPostion: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }
        }>
          <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--name">{item.original_name}</div>
                <div className="featured--info">
                    <div className="featured-points">{item.vote_average} <i class="fas fa-star"></i> </div>
                    <div className="featured--realase">{firstDate.getFullYear()}</div>
                    <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !==1 ? 's' : ''}</div>
                </div>
                <div className="featured--description">{descripton}</div>
                <div className="featured--buttons">
                    
                    <a href={`/watch/${item.id}`} className="featured--play"><i class="fas fa-play"></i> Assista agora</a>
                                   
                    <a href={`/list/add${item.id}`} className="featured--save"> <i class="fas fa-plus"></i> Adicionar a minha lista</a>
                </div>
                <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
            </div>
          </div>
        </section>
    );
}