function gramophone(brand, album, song){
    const durationInSec = (album.length * brand.length) * song.length / 2;

    const fullRotation = durationInSec / 2.5;
    console.log(`The plate was rotated ${Math.ceil(fullRotation)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');