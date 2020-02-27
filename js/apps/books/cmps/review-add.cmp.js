import {bookService} from '../services/book.service.js'
import {eventBus} from '../services/event-bus.service.js'



// TO DO: CHANGE TO STAR LIB
export default {
    template: `
    <section class="review-container">
        <h1>Reviews</h1>
        <div class="review-content-container">
            <form class="review-form" @submit.prevent="saveReview">
            <input type="text" ref="readerInput" name="input" v-model="review.name" class="reader-name" placeholder="Your name"/>
            <div class="rate"> 
                <input v-model="review.rate" type="radio" id="star5" name="rate" value="5" /> 
                <label for="star5" title="text"></label>
                <input v-model="review.rate" type="radio" id="star4" name="rate" value="4" />                    
                <label for="star4" title="text"></label>
                <input v-model="review.rate" type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text"></label>
                <input v-model="review.rate" type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text"></label>
                <input v-model="review.rate" type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text"></label>
            </div>
            <input v-model="review.date" required type="date" class="date-review" />
            <textarea v-model="review.text" class="review-text" cols="30" rows="5" placeholder="Write your review"></textarea>
            <button>Save Review</button>
            </form>
            <ul class="review-list" v-if="book"> 
                <li class="review-content" v-if="book.reviews.length" v-for="(review, idx) in book.reviews">
                    <button @click="deleteReview(idx)">X</button>
                    <p class="review-name">Name: {{review.name}}</p>
                    <p class="review-rate">Rate: {{review.rate}} </p>
                    <p class="review-text">Review: "{{review.text}}"</p>
                    <p class="review-date">Date: {{review.date}}</p>
                </li>
            </ul>
        </div>
    </section>
    `,
    data(){
        return{
            bookId: this.$route.params.bookId,
            book: null,
            review:{
                name: 'Books Reader',
                rate: null,
                date: null,
                text: null,
            },
        }
    },
    mounted(){
        this.$refs.readerInput.focus()
    },

    created(){
        this.getCurrBook()    
    },
    watch:{
        '$route.params.bookId'(){
            this.bookId = this.$route.params.bookId
            this.getCurrBook()
        }
    },

    methods: {
        saveReview(){
            bookService.addReview(this.book, this.review)
            eventBus.$emit('msg',{txt:'Added A Review', type:'success'})
        },
        deleteReview(idx){
            bookService.deleteReview(this.book, idx)
            eventBus.$emit('msg',{txt:'Deleteing A Review',type:'success'}) 
        },
        getCurrBook(){
            bookService.getBookById(this.bookId)
            .then(book => this.book = book)
        }
    }
}