let movies;

let item = 0;

let movie_title, movie_plot, rating;

let template;

let movies_list = '';

fetch('/data/moovies.json')
.then(
    (response) => {
        return response.json();
    }
)
.then(
    (response) => {
        movies = response;
        console.log(movies);

        for (; item < movies.length - 1; item ++) {
            movie_title = movies[item].Title;
            movie_plot = movies[item].Plot;
            rating = movies[item].imdbRating;

            template = `
<!-- card template start -->
<div class="row">
    <!-- card width start -->
    <div class="col-8 m-auto">
        <!-- card styles start -->
        <article class="card d-flex flex-row justify-content-center align-items-stretch align-content-stretch p-2">
            <!-- images wrapper start -->
            <div class="img-wrapper">
                <img src="./assets/images/image-template.png" alt="">
            </div><!-- image wrapper end -->
            <!-- film informations content -->
            <div class="content">
                <h3 id="title">${movie_title}</h3>
                <p>
                    ${movie_plot}
                </p>
                <div class="notation"><span class="note">${rating}</span> / 10</div>
                <!-- gallery start -->
                <div class="gallery">
                    <img src="./assets/images/image-template.png" alt="">
                    <img src="./assets/images/image-template.png" alt="">
                    <img src="./assets/images/image-template.png" alt="">
                </div><!-- gallery end -->
            </div><!-- film informations content end -->
        </article><!-- card styles end -->
    </div><!-- card width end -->
</div><!-- card template end -->
            `

            movies_list += template;
        } // end loop

        document.querySelector('.container').innerHTML = movies_list;
    }
);


