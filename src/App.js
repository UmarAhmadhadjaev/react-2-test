
import './App.css';

function App() {
  return (
    <div className="App">
       <nav>

<div className="logo">
    <img src="image/logo.png"/>
</div>

<ul>
    <li><a href="#Home">Home</a></li>
    <li><a href="#About">About</a></li>
    <li><a href="#Products">Products</a></li>
    <li><a href="#Services">Services</a></li>
    <li><a href="#Blog">Blog</a></li>
</ul>

<div className="search">
    <i className="fa-solid fa-magnifying-glass"></i>
    <i className="fa-solid fa-cart-shopping"></i>
</div>

</nav>





<section id="Home">

<div className="home_left">

    <h1>The Fresh and<br/>Organic<span>Fruits</span></h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quos? 
        Sunt minima amet neque recusandae dolor blanditiis molestiae iusto 
        odio quia aspernatur, similique esse error quo tenetur cum provident 
        illo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Distinctio possimus, hic reprehenderit, sequi nemo minus repellat 
        accusantium sit accusamus porro doloremque autem aspernatur eligendi. 
        Natus non distinctio eius nulla! Quas?
    </p>
    <a href="#" className="home_btn">Learn More</a>

</div>

<div className="home_right anim">
    <img src="image/home_image.png"/>
</div>

</section>



<div className="about" id="About">

<div className="about_image">
    <img src="image/about.png"/>
</div>
<div className="about_tag">
    <h1>About Us</h1>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo modi 
        ipsam vel eius adipisci neque quas dolorum recusandae sed blanditiis 
        est sunt natus, dolore iusto perspiciatis laudantium ab magnam amet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut 
        aliquid est, illum dolor nostrum architecto dolores, itaque beatae 
        cum voluptatem corrupti accusamus adipisci non modi fuga quo, 
        aspernatur fugiat!
        <br/><br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt 
        sapiente provident totam maiores laudantium id architecto a neque 
        tempore ipsam officiis officia quia dolor, quam quaerat fuga itaque 
        facere?
    </p>
    <a href="#" className="about_btn">Learn More</a>
</div>

</div>





<div className="products" id="Products">

<h1>Latest Products</h1>

<div className="products_main">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
        nobis earum. Illum sunt repellat omnis exercitationem aperiam 
        nesciunt doloribus deserunt esse totam veniam. Error ullam, inventore 
        dolore perferendis eos in.
    </p>

    <div className="products_box">

        <div className="products_card">
            <div className="products_img">
                <img src="image/produ_1.png"/>
            </div>
            <div className="products_tag">
                <h2>Products</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#" className="products_btn">Learn More</a>
            </div>
            <div className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>

        <div className="products_card">
            <div className="products_img">
                <img src="image/produ_2.png"/>
            </div>
            <div className="products_tag">
                <h2>Products</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#" className="products_btn">Learn More</a>
            </div>
            <div className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>

        <div className="products_card">
            <div className="products_img">
                <img src="image/produ_3.png"/>
            </div>
            <div className="products_tag">
                <h2>Products</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#" className="products_btn">Learn More</a>
            </div>
            <div className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>

        <div className="products_card">
            <div className="products_img">
                <img src="image/produ_4.png"/>
            </div>
            <div className="products_tag">
                <h2>Products</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#" className="products_btn">Learn More</a>
            </div>
            <div className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
        

    </div>

</div>

</div>


<div className="banner">

<div className="banner_one">
    <img src="image/1.png"/>
    <div className="banner_tag">
        <h1>Save UP to 50%</h1>
        <a href="#" className="banner_btn">Shop Now</a>
    </div>
</div>

<div className="banner_two">
    <img src="image/2.png"/>
    <div className="banner_tag">
        <h1>Free Shipping</h1>
        <p>ON ORDER UP TO $100</p>
        <a href="#" className="banner_btn">Shop Now</a>
    </div>
</div>

</div>





<div className="services" id="Services">

<div className="services_box">

    <div className="services_card">

        <i className="fa-solid fa-cart-shopping"></i>
        <div className="services_tag">
            <h2>Free Fast Delivery</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
        </div>

    </div>

    <div className="services_card">

        <i className="fa-regular fa-face-grin"></i>
        <div className="services_tag">
            <h2>For Quality Products</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
        </div>

    </div>

    <div className="services_card">

        <i className="fa-solid fa-tags"></i>
        <div className="services_tag">
            <h2>Special Offer</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
        </div>

    </div>

    <div className="services_card">

        <i className="fa-solid fa-headset"></i>
        <div className="services_tag">
            <h2>24 x 7 Support</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
        </div>

    </div>


</div>

</div>




<div className="blog" id="Blog">
<h1>Our Blog</h1>

<div className="blog_box">

    <div className="blog_card">
        <div className="blog_img">
            <img src="image/blog_1.png"/>
        </div>
        <div className="blog_tag">

            <p className="date">
                <i className="fa-solid fa-calendar-days"></i>2022.05.23
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Omnis autem sunt voluptates officiis ex dicta repudiandae 
                numquam tempora. Sunt ipsa repellendus asperiores dolores 
                optio explicabo voluptas nulla tenetur eum quaerat. Lorem 
                ipsum dolor sit amet consectetur adipisicing elit. Architecto 
                corrupti, esse cupiditate numquam expedita optio voluptas 
                eligendi praesentium possimus temporibus illo sunt minus 
                natus nesciunt illum aperiam placeat hic quia.
                <br/><br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem modi non quaerat, assumenda recusandae, consectetur 
                accusantium consequatur dolor earum iusto repudiandae, 
                asperiores placeat? Exercitationem omnis placeat id at odio 
                laborum?
            </p>
            <p className="like"><i className="fa-solid fa-heart"></i></p>
            
        </div>
    </div>

    <hr/>

    <div className="blog_card_2">
        
        <div className="blog_tag">

            <p className="date">
                <i className="fa-solid fa-calendar-days"></i>2022.07.15
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Omnis autem sunt voluptates officiis ex dicta repudiandae 
                numquam tempora. Sunt ipsa repellendus asperiores dolores 
                optio explicabo voluptas nulla tenetur eum quaerat. Lorem 
                ipsum dolor sit amet consectetur adipisicing elit. Architecto 
                corrupti, esse cupiditate numquam expedita optio voluptas 
                eligendi praesentium possimus temporibus illo sunt minus 
                natus nesciunt illum aperiam placeat hic quia.
                <br/><br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem modi non quaerat, assumenda recusandae, consectetur 
                accusantium consequatur dolor earum iusto repudiandae, 
                asperiores placeat? Exercitationem omnis placeat id at odio 
                laborum?
            </p>
            <p className="like"><i className="fa-solid fa-heart"></i></p>
            
        </div>
        <div className="blog_img">
            <img src="image/blog_2.png"/>
        </div>
    </div>

    <hr/>

    <div className="blog_card">
        <div className="blog_img">
            <img src="image/blog_3.png"/>
        </div>
        <div className="blog_tag">

            <p className="date">
                <i className="fa-solid fa-calendar-days"></i>2022.09.16
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Omnis autem sunt voluptates officiis ex dicta repudiandae 
                numquam tempora. Sunt ipsa repellendus asperiores dolores 
                optio explicabo voluptas nulla tenetur eum quaerat. Lorem 
                ipsum dolor sit amet consectetur adipisicing elit. Architecto 
                corrupti, esse cupiditate numquam expedita optio voluptas 
                eligendi praesentium possimus temporibus illo sunt minus 
                natus nesciunt illum aperiam placeat hic quia.
                <br/><br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Rem modi non quaerat, assumenda recusandae, consectetur 
                accusantium consequatur dolor earum iusto repudiandae, 
                asperiores placeat? Exercitationem omnis placeat id at odio 
                laborum?
            </p>
            <p className="like"><i className="fa-solid fa-heart"></i></p>
            
        </div>
    </div>
    

</div>

</div>






<footer>
<div className="footer_main">

    <div className="footer_tag">
        <h1>Quick Link</h1>
        <p>Home</p>
        <p>About</p>
        <p>Products</p>
        <p>Services</p>
        <p>Blog</p>
    </div>

    <div className="footer_tag">
        <h1>Contact</h1>
        <p><i className="fa-solid fa-location-dot"></i>454 Colombo, Sri Lanka</p>
        <p><i className="fa-solid fa-phone"></i>+94 12 345 6789</p>
        <p><i className="fa-solid fa-phone"></i>+94 25 787 9999</p>
        <p><i className="fa-solid fa-envelope"></i>fruit123@gmail.com</p>
    </div>

    <div className="footer_tag">
        <h1>Follow Us</h1>
        <p><i className="fa-brands fa-facebook-f"></i>Facebook</p>
        <p><i className="fa-brands fa-twitter"></i>Twitter</p>
        <p><i className="fa-brands fa-instagram"></i>Instagram</p>
        <p><i className="fa-brands fa-linkedin-in"></i>Linkedin</p>
        <p><i className="fa-brands fa-google"></i>Google</p>
    </div>

    <div className="footer_tag">
        <h1>Online Payments</h1>
        <img src="image/card1.png"/>
        <img src="image/card2.png"/>
        <img src="image/card3.png"/>
        <img src="image/card4.png"/>
    </div>

</div>

<p className="end">Design By<span><i className="fa-solid fa-face-grin"></i>WT Master Code</span></p>
</footer>







    </div>
  );
}

export default App;
