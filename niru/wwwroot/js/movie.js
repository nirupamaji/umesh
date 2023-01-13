$(function () {
    GetResult("popular");
    $(".tablinks").on("click", function () {
        let result = $(this).val();
        //console.log(result);
        GetResult(result);
    });
});
function GetResult(result) {
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/${result}?api_key=562eab5101ee3541be685c7a7a5608b0&language=en-US`,
        type: "GET",
        success: function (response) {
            var movieArray = response.results;
            var html = '';
            $.each(movieArray, function (index, item) {
                var votpercentage = item.vote_average / 10.0 * 100;
                var summary = item.overview.substr(0, 50) + '...';
                let movieItemHtml = ` <div class="movieItem">
                                            <div class="imgWrapper">
                                                <img src="https://image.tmdb.org/t/p/w500${item.poster_path}">
                                                <div class="ta-percentage">
                                                    ${votpercentage.toFixed(0)}<span>%</span>
                                                </div>
                                            </div>
                                            <div class="movieDis">
                                                <div class="movieName">
                                                    ${item.original_title}
                                                </div>
                                                <div class="releaseDate">${item.release_date}</div>
                                                <div class="movieDetail">
                                                    ${summary}
                                                </div>
                                            </div>
                                        </div>`;
                html += movieItemHtml;
            });
            $('.ta-showingMovie').html(html);
        },
        error: function (jqXHR, txtStatus, error) {
            console.log(error);
        }
    });
}