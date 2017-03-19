/*
 * CSS
 */
require('../scss/style.scss');


/*
 * JS
 */
import objectFitImages from 'object-fit-images';

const containImages = document.getElementsByClassName('card__img--contain');
const coverImages = document.getElementsByClassName('card__img--cover');

objectFitImages(containImages);
objectFitImages(coverImages);