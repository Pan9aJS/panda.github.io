// $(function() {
//     $('.like-toggle').click(function() {
//         $(this).toggleClass('like-active');
//         $(this).next().toggleClass('hidden');
//     });


//     (async() => {
//         $.get("src/text/likes.txt", d => {
//             $('.like-toggle').next().html(`${d} likes`);
//             $('.like-toggle').removeAttr('disabled');
//             likeControl();
//         });
//     })();


//     function likeControl() {
//         //  число лайков на данный момент
//         let counter = ($('.like-toggle').next().html()).match(/[0-9]+/);
//         // по умолчанию лайк не поставлен
//         let hasLike = false;

//         $('#like').click(function() {
//             // если лайк поставлен
//             if (hasLike) {
//                 hasLike = false;
//                 $(this).next().html(`${--counter} likes`);
//                 let likes = ($(this).next().html()).match(/[0-9]+/);

//             }
//             // если лайк не поставлен
//             else {
//                 hasLike = true;
//                 $(this).next().html(`${++counter} likes`);
//                 let likes = ($(this).next().html()).match(/[0-9]+/);
//             }
//         });
//     }
// });