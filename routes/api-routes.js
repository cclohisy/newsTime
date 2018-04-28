//import Axios from "axios"; auto added again... 

app.get("/scrape", function (req, res) {
    //grab html 
    axios.get("http://www.bbc.com/news").then(function (response) {
        //set up cheerio in $
        var $ = cheerio.load(response.data)


        //grab things will class below... do i need it all? 
        $("gel-layout gel-layout--no-flex nw-c-top-stories--standard nw-c-top-stories--international").each(function (i, element) {
            //set empty results obj
            var result = {}

            //grab headline
            result.headline = $(this).children("a").text()

            //grab summary
            result.summary = $(this).children("p").text()

            //grab link
            result.link = $(this).children("a").attr("href")

            console.log(result.headline)
        })//closes result stuff

    })//close then function
})//closes get... ultimate end of scrape stuff


{/* <div class="gs-c-promo nw-c-promo gs-o-faux-block-link gs-u-pb gs-u-pb+@m nw-p-default gs-c-promo--inline gs-c-promo--stacked@m nw-u-w-auto gs-c-promo--flex" data-entityid="container-top-stories#2"><div class="gs-c-promo-image gs-u-display-none gs-u-display-inline-block@xs gel-1/2@xs gel-1/1@m"><div class="gs-o-media-island"><div class="gs-o-responsive-image gs-o-responsive-image--16by9"><img src="https://ichef.bbci.co.uk/news/380/cpsprodpb/15AFC/production/_101082888_046470546-1.jpg" class="lazyloaded" alt="Displaced Kachin residents crossing Malikha river on a ferry to escape the fighting, on 26 April 2018" data-src="https://ichef.bbci.co.uk/news/{width}/cpsprodpb/15AFC/production/_101082888_046470546-1.jpg" width="240"></div></div></div><div class="gs-c-promo-body gel-1/2@xs gel-1/1@m gs-u-mt@m"><div><a class="gs-c-promo-heading gs-o-faux-block-link__overlay-link gel-pica-bold nw-o-link-split__anchor" href="/news/world-asia-43933332"><h3 class="gs-c-promo-heading__title gel-pica-bold nw-o-link-split__text">Thousands flee near Myanmar-China border</h3></a><p class="gs-c-promo-summary gel-long-primer gs-u-mt nw-c-promo-summary">The UN sounds alarm as civilians face growing violence in a longstanding conflict in Kachin state.</p></div><ul class="gs-o-list-inline gs-o-list-inline--divided gel-brevier gs-u-mt-"><li class="nw-c-promo-meta"><span class="gs-c-timestamp gs-o-bullet gs-o-bullet- nw-c-timestamp"><span class="gs-o-bullet__icon gel-icon"><svg viewBox="0 0 32 32" focusable="false"><polygon points="17,15.4 17,6 15,6 15,16.6 23.8,21.7 24.8,19.9"></polygon><path d="M16,4c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12S4,22.6,4,16C4,9.4,9.4,4,16,4 M16,0C7.2,0,0,7.2,0,16c0,8.8,7.2,16,16,16 s16-7.2,16-16C32,7.2,24.8,0,16,0L16,0z"></path></svg></span><time class="gs-o-bullet__text date qa-status-date" datetime="2018-04-28T10:07:20.000Z" data-seconds="1524910040" data-datetime="5h"><span aria-hidden="true" class="qa-status-date-output">5h</span><span class="gs-u-vh">5 hours ago</span></time></span></li><li class="nw-c-promo-meta"><a href="/news/world/asia" class="gs-c-section-link gs-c-section-link--truncate nw-c-section-link nw-o-link nw-o-link--no-visited-state" aria-label="From Asia"><span aria-hidden="true">Asia</span></a></li></ul></div></div> */}
// <div class="gs-c-promo-body gel-1/2@xs gel-1/1@m gs-u-mt@m"><div><a class="gs-c-promo-heading gs-o-faux-block-link__overlay-link gel-pica-bold nw-o-link-split__anchor" href="/news/entertainment-arts-43933586"><h3 class="gs-c-promo-heading__title gel-pica-bold nw-o-link-split__text">Kanye West defends Trump in new song</h3></a><p class="gs-c-promo-summary gel-long-primer gs-u-mt nw-c-promo-summary">In his new track Ye vs. The People, the US rapper defends his pro-Trump sentiments.</p></div><ul class="gs-o-list-inline gs-o-list-inline--divided gel-brevier gs-u-mt-"><li class="nw-c-promo-meta"><span class="gs-c-timestamp gs-o-bullet gs-o-bullet- nw-c-timestamp"><span class="gs-o-bullet__icon gel-icon"><svg viewBox="0 0 32 32" focusable="false"><polygon points="17,15.4 17,6 15,6 15,16.6 23.8,21.7 24.8,19.9"></polygon><path d="M16,4c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12S4,22.6,4,16C4,9.4,9.4,4,16,4 M16,0C7.2,0,0,7.2,0,16c0,8.8,7.2,16,16,16 s16-7.2,16-16C32,7.2,24.8,0,16,0L16,0z"></path></svg></span><time class="gs-o-bullet__text date qa-status-date" datetime="2018-04-28T11:06:49.000Z" data-seconds="1524913609" data-datetime="5h"><span aria-hidden="true" class="qa-status-date-output">5h</span><span class="gs-u-vh">5 hours ago</span></time></span></li><li class="nw-c-promo-meta"><a href="/news/entertainment_and_arts" class="gs-c-section-link gs-c-section-link--truncate nw-c-section-link nw-o-link nw-o-link--no-visited-state" aria-label="From Entertainment &amp; Arts"><span aria-hidden="true">Entertainment &amp; Arts</span></a></li></ul></div>
//headline and link 
{/* <a class="gs-c-promo-heading gs-o-faux-block-link__overlay-link gel-pica-bold nw-o-link-split__anchor" href="/news/world-asia-43933332"><h3 class="gs-c-promo-heading__title gel-pica-bold nw-o-link-split__text">Thousands flee near Myanmar-China border</h3></a> */ }

//summary 
{/* <p class="gs-c-promo-summary gel-long-primer gs-u-mt nw-c-promo-summary">The UN sounds alarm as civilians face growing violence in a longstanding conflict in Kachin state.</p> */ }