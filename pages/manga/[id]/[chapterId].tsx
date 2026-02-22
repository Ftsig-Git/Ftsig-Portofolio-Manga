import React from 'react';

const MangaReader = ({ id, chapterId }) => {
    return (
        <div>
            <h1>Manga ID: {id}</h1>
            <h2>Chapter ID: {chapterId}</h2>
            {/* Additional manga reader functionality goes here */}
        </div>
    );
};

export default MangaReader;
