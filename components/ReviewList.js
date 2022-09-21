app.component(
    
    'review-list', 
    {
        props: {
            reviews :{
                type:Array,
                required:true
            }
        },
        template: 
        /*html*/
        `
        <div class="review-container">
        <h3>Reviews:</h3>
          <ul>
            <li v-for="(review, index) in reviews" :key="index">
              {{ review.name }} gave this <b>{{ review.rating }}</b> stars
              <br/>
              Review: {{ review.review }}
              <br/>
              Would you recommend this product?: <b>{{ review.recommendation }}</b>
              <br/>
            </li>
          </ul>
        </div>
        `
    }
)