export const parseMovies = (data) => {
    return data.map(item => {
        const movie = {}
        if (item.hasOwnProperty('id')) {
            movie.id = item.id
        }
        if (item.hasOwnProperty('title_english')) {
            movie.title = item.title_english
        } else {
            movie.title = item.title
        }
        if (item.hasOwnProperty('year')) {
            movie.year = item.year
        }
        if (item.hasOwnProperty('rating')) {
            movie.rating = item.rating
        }
        if (item.hasOwnProperty('medium_cover_image')) {
            movie.coverUrl = item.medium_cover_image
        }
        movie.liked = false
        movie.imgError = null
        return movie
    })
}