import React from 'react';

function Recipe(props){
    return (
        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-2">
            <div className="card">
                <img src={props.image} className="card-img-top" alt={props.label} />
                <div className="card-body">
                <h5 className="card-title">{props.label} (Cal: {Math.floor(props.calories)})</h5>
                <h4 className="card-title text-center">Ingredients</h4>                    
                <ul class="list-group">
                    {
                        props.ingredientLines.map(ingredient => <li class="list-group-item">{ingredient}</li>)
                    }
                </ul>
                <p className="card-text">
                    Total time: {props.totalTime}
                </p>
                <a href={props.url} target="_blank" className="btn btn-primary btn-block">
                    Go to {props.label} page
                </a>
                </div>
            </div>
        </div>
    );
}

export default Recipe;