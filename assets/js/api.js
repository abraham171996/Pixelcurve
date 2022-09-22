const teamRow = document.querySelector(".team-section--warp--row")
// Team Page Start //

const temaPage = async () => {
    const teams = []
    const res = await axios.get("https://abraham-b2fb0-default-rtdb.firebaseio.com/team.json")
    const data = await res.data
    for (let key in data) {
        teams.push(data[key])
    }
    return teams
}

temaPage().then(res => {
    res.map(team => {
        teamRow.innerHTML += `
        <div class="team-section--wrap--row--card">
                                
        <figure>
            <a href="#">
                
                <img src="${team.image}" alt="" >
            </a>
        </figure>
        <div class="team-section--wrap--row--card--content">
            <div class="team-section--wrap--row--card--content--media">
                <ul>
                    <li><a href=""><i></i></a></li>
                    <li><a href=""><i></i></a></li>
                    <li><a href=""><i></i></a></li>
                    <li><a href=""><i></i></a></li>
                </ul>
            </div>
            <h3>
                <a href="#">${team.name}</a>
            </h3>
            <span>${team.title}</span>
        </div>
    </div>
        
        
        `
    })
}
).catch(err => console.log(err))

// Team Page End //


// Blog Page Start // 

const blogWrapper = document.querySelector(".blog-section--wrap--cards")

const blogPage = async () => {
    const blogs = []
    const res = await axios.get("https://abraham-b2fb0-default-rtdb.firebaseio.com/blog.json")
    const data = await res.data
    for (let key in data) {
        blogs.push(data[key])
    }
    return blogs
}

blogPage().then(res => {
    res.map(blog => {
        blogWrapper.innerHTML += `
        <div class="blog-section-wrap--cards--card">
                            <figure>
                                <a href="#">
                                  <img src="${blog.image}" alt="">
                                </a>
                                <div class="top-meta">
                                    <span class="date">
                                        <span>08</span>
                                        Aug
                                    </span>
                                </div>
                            </figure>
                            <div class="blog-section-wrap--cards--card--content">
                                <div class="blog-section-wrap--cards--card--content--meta">
                                    <span>
                                        <i class="fa fa-user" aria-hidden="true"></i>

                                        <a href="#">${blog.name}</a>
                                    </span>
                                    <span>
                                        <i class="fa fa-comments" aria-hidden="true"></i>


                                        ${blog.review}
                                    </span>
                                </div>
                                <h3><a href="#">Who Needs Extract Value From Data?</a></h3>
                                <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote.</p>
                            </div>
                           
                            <div class="blog-section-wrap--cards--card--btn">
                            <a href="/pages/Blog/Details/details.html" target="_blank">
                                  Read Full Article
                                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>

                                </a>
                            </div>
                        </div>
        
        `
    })
}
).catch(err => console.log(err))


// Blog Page End // 





// Services Section Start // 
const swiperWrapper = document.querySelector(".swiper-wrapper")

const sevicesSection = async () => {
    const services = []
    const res = await axios.get("https://abraham-b2fb0-default-rtdb.firebaseio.com/services.json")
    const data = await res.data
    for (let key in data) {
        services.push(data[key])
    }
    return services
}

sevicesSection().then(res => {
    res.map(service => {
        swiperWrapper.innerHTML += `
            <div class="swiper-slide">
            <div class="swiper-slide--item">
                <div class="swiper-slide--item--image">
                    <img src="${service.image}" alt="">
                </div>
                <div class="swiper-slide--item--content">
                    <h3>
                        <a href="#">${service.title}</a>
                    </h3>
                    <p>${service.description}</p>
                    <a href="#" class="more">
                        Discover More 
                        <i class="fa fa-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
            `
    })
}
).catch(err => console.log(err))

// Services Section End //



//Contact Page Start // 
const contactBtn = document.querySelector(".contact-btn")
const contactName = document.querySelector(".contact-name")
const contactEmail = document.querySelector(".contact-email")
const contactNumber = document.querySelector(".contact-number")
const contactSubject = document.querySelector(".contact-subject")
const contactMessage = document.querySelector(".contact-message")
const form = document.querySelector(".contact-form")



function senddata() {
    const newLocal = "https://abraham-b2fb0-default-rtdb.firebaseio.com/co.json"
    axios.post(newLocal,
        {
            name: contactName.value , 
           
            email: contactEmail.value,
            num: contactNumber.value,
            sub: contactSubject.value,
            message: contactMessage.value,
        },
        {
            emptyname:contactName.value= "",
            emptyemail:contactEmail.value="",
            emptynum:contactNumber.value="",
            emptysub:contactSubject.value="",
            emptymessage:contactMessage.value=""
        }
    )
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
contactBtn.addEventListener("click", senddata)



// Contact Page End // 

