
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import SmoothScroll from './modules/SmoothScroll';
import JqueryCycle from './modules/JqueryCycle';
import CourseBox from './modules/CourseBox';


// var hideFormElement = new HideFormElement();
var mobileMenu = new MobileMenu();
var jqueryCycle = new JqueryCycle($('#testimonial'));
var courseBox = new CourseBox();

new RevealOnScroll($('.colored-icon-list__item'), '65%');
new RevealOnScroll($('.circle-percent'), '85%');
new SmoothScroll();

