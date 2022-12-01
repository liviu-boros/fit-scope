// function selectElementByClass(className) {
//     return document.querySelector(`.${className}`);
// }

// const sections = [
//     selectElementByClass('home'),
//     selectElementByClass('designsys'),
//     selectElementByClass('exercises'),
//     selectElementByClass('workouts'),
//     selectElementByClass('planner'),
//     selectElementByClass('current'),
// ]
  
// const navItems = {
//     home: selectElementByClass('homeNav'),
//     designsys: selectElementByClass('designsysNav'),
//     exercises: selectElementByClass('exercisesNav'),
//     workouts: selectElementByClass('workoutsNav'),
//     planner: selectElementByClass('plannerNav'),
//     current: selectElementByClass('currentNav'),
// }

// const observerOptions = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.7,
// }

// function observerCallback(entries, observer) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // get the nav item corresponding to the id of the section
//         // that is currently in view
//         const navItem = navItems[entry.target.id];
//         // add 'active' class on the navItem
//         navItem.classList.add('active');
//         // remove 'active' class from any navItem that is not
//         // same as 'navItem' defined above
//         Object.values(navItems).forEach((item) => {
//           if (item != navItem) {
//             item.classList.remove('active');
//           }
//         });
//       }
//     });
//   }
  
//   const observer = new IntersectionObserver(observerCallback, observerOptions);
  
//   sections.forEach((sec) => observer.observe(sec));